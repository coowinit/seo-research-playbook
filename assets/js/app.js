(() => {
  'use strict';

  const CATALOG_URL = 'assets/data/catalog.json';
  const DEFAULT_DOC = 'docs/01-foundation/seo-workflow.md';

  const docsNav = document.getElementById('docs-nav');
  const menuToggle = document.getElementById('menu-toggle');
  const pageMask = document.getElementById('page-mask');
  const docStatus = document.getElementById('doc-status');
  const docBody = document.getElementById('doc-body');
  const tocList = document.getElementById('toc-list');
  const tocToggle = document.getElementById('toc-toggle');
  const mobileTocPanel = document.getElementById('mobile-toc-panel');
  const mobileTocList = document.getElementById('mobile-toc-list');
  const tocClose = document.getElementById('toc-close');

  let catalog = [];
  let navData = [];
  let validPages = new Set();
  let activePage = '';
  let activeRequest = null;
  let tocObserver = null;

  const typeRank = {
    guide: 1,
    template: 2,
    checklist: 3,
    example: 4
  };

  function byOrder(a, b) {
    const rankA = typeRank[a.type] || 9;
    const rankB = typeRank[b.type] || 9;
    if (rankA !== rankB) return rankA - rankB;

    return String(a.order || a.path).localeCompare(
      String(b.order || b.path),
      'zh-CN',
      { numeric: true }
    );
  }

  function buildNavData(items) {
    const groups = [];

    for (let module = 1; module <= 7; module += 1) {
      const id = String(module).padStart(2, '0');
      const children = items
        .filter((item) => item.module === id)
        .sort(byOrder)
        .map(toNavItem);

      if (!children.length) continue;
      const label = items.find((item) => item.module === id)?.moduleLabel || id;
      groups.push({ title: `${id} ${label}`, children });
    }

    const composite = items
      .filter((item) => item.path.startsWith('examples/product-cases/composite-decking/'))
      .sort(byOrder)
      .map(toNavItem);

    const wall = items
      .filter((item) => item.path.startsWith('examples/product-cases/wpc-wall-cladding/'))
      .sort(byOrder)
      .map(toNavItem);

    const siteCases = items
      .filter((item) => item.path.startsWith('examples/site-cases/'))
      .sort(byOrder)
      .map(toNavItem);

    if (composite.length) groups.push({ title: '08 Composite Decking 案例', children: composite });
    if (wall.length) groups.push({ title: '09 WPC Wall Cladding 案例', children: wall });
    if (siteCases.length) groups.push({ title: '10 网站级案例', children: siteCases });

    return groups;
  }

  function toNavItem(item) {
    return {
      title: String(item.title || ''),
      page: String(item.path || ''),
      type: String(item.type || ''),
      typeLabel: String(item.typeLabel || '')
    };
  }

  async function loadCatalog() {
    const response = await fetch(`${CATALOG_URL}?v=${Date.now()}`, { cache: 'no-store' });
    if (!response.ok) {
      throw new Error(`文档目录读取失败（HTTP ${response.status}）：${CATALOG_URL}`);
    }

    const data = await response.json();
    catalog = Array.isArray(data.items) ? data.items : [];
    navData = buildNavData(catalog);
    validPages = new Set(catalog.map((item) => String(item.path || '')).filter(Boolean));
  }

  function getRequestedPage() {
    const params = new URLSearchParams(window.location.search);
    const requested = String(params.get('page') || params.get('doc') || '').trim();

    if (validPages.has(requested)) return requested;
    if (validPages.has(DEFAULT_DOC)) return DEFAULT_DOC;
    return catalog[0]?.path || '';
  }

  function getDocInfo(page) {
    return catalog.find((item) => item.path === page) || null;
  }

  function chevronSvg() {
    return `
      <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <path d="m8 10 4 4 4-4" />
      </svg>
    `;
  }

  function renderNav(currentPage) {
    docsNav.replaceChildren();
    const fragment = document.createDocumentFragment();

    navData.forEach((group, groupIndex) => {
      if (!group?.title || !Array.isArray(group.children) || !group.children.length) return;

      const containsActive = group.children.some((item) => item.page === currentPage);
      const section = document.createElement('section');
      section.className = 'nav-group';
      if (containsActive) section.classList.add('is-open');

      const button = document.createElement('button');
      button.className = 'nav-group-title';
      button.type = 'button';
      button.dataset.groupIndex = String(groupIndex);
      button.setAttribute('aria-expanded', String(containsActive));
      button.innerHTML = `<span>${escapeHtml(group.title)}</span>${chevronSvg()}`;

      const list = document.createElement('div');
      list.className = 'nav-children';

      group.children.forEach((item) => {
        if (!item?.title || !item?.page) return;

        const link = document.createElement('a');
        link.className = 'nav-link';
        link.href = makeReaderUrl(item.page);
        link.dataset.page = item.page;

        const badge = document.createElement('span');
        badge.className = `nav-type nav-type--${item.type || 'default'}`;
        badge.textContent = item.typeLabel || '文档';

        const title = document.createElement('span');
        title.className = 'nav-link-title';
        title.textContent = item.title;

        link.append(badge, title);

        if (item.page === currentPage) {
          link.classList.add('is-active');
          link.setAttribute('aria-current', 'page');
        }

        list.appendChild(link);
      });

      section.append(button, list);
      fragment.appendChild(section);
    });

    docsNav.appendChild(fragment);
  }

  function setNavActive(page) {
    docsNav.querySelectorAll('.nav-link').forEach((link) => {
      const isActive = link.dataset.page === page;
      link.classList.toggle('is-active', isActive);
      if (isActive) link.setAttribute('aria-current', 'page');
      else link.removeAttribute('aria-current');
    });

    docsNav.querySelectorAll('.nav-group').forEach((group) => {
      const containsActive = Boolean(group.querySelector(`.nav-link[data-page="${cssEscape(page)}"]`));
      const title = group.querySelector('.nav-group-title');
      if (!containsActive || group.classList.contains('is-open')) return;

      docsNav.querySelectorAll('.nav-group.is-open').forEach((openGroup) => {
        if (openGroup === group) return;
        openGroup.classList.remove('is-open');
        openGroup.querySelector('.nav-group-title')?.setAttribute('aria-expanded', 'false');
      });

      group.classList.add('is-open');
      title?.setAttribute('aria-expanded', 'true');
    });
  }

  function toggleNavGroup(button) {
    const group = button.closest('.nav-group');
    if (!group) return;

    const nextOpen = !group.classList.contains('is-open');

    docsNav.querySelectorAll('.nav-group.is-open').forEach((openGroup) => {
      if (openGroup === group) return;
      openGroup.classList.remove('is-open');
      openGroup.querySelector('.nav-group-title')?.setAttribute('aria-expanded', 'false');
    });

    group.classList.toggle('is-open', nextOpen);
    button.setAttribute('aria-expanded', String(nextOpen));
  }

  function setStatus(message = '', type = '') {
    docStatus.textContent = message;
    docStatus.className = 'doc-status';
    if (message) docStatus.classList.add('is-visible');
    if (type === 'error') docStatus.classList.add('is-error');
  }

  function markdownToHtml(markdown) {
    if (!window.marked || typeof window.marked.parse !== 'function') {
      throw new Error('Markdown 渲染器未加载，请检查 assets/js/marked.umd.js。');
    }

    if (typeof window.marked.setOptions === 'function') {
      window.marked.setOptions({ gfm: true, breaks: false });
    }

    const cleanMarkdown = String(markdown).replace(
      /^[\u200B\u200C\u200D\u200E\u200F\uFEFF]/,
      ''
    );

    return window.marked.parse(cleanMarkdown);
  }

  function slugify(text, index) {
    const base = String(text)
      .trim()
      .toLowerCase()
      .replace(/<[^>]+>/g, '')
      .replace(/[\s]+/g, '-')
      .replace(/[^\w\-\u4e00-\u9fff]/g, '')
      .replace(/-+/g, '-')
      .replace(/^-|-$/g, '');

    return base || `section-${index + 1}`;
  }

  function makeUniqueHeadingIds(root) {
    const used = new Set();
    const headings = root.querySelectorAll('h1, h2, h3, h4, h5, h6');

    headings.forEach((heading, index) => {
      let id = heading.id || slugify(heading.textContent, index);
      let candidate = id;
      let counter = 2;

      while (
        used.has(candidate) ||
        (document.getElementById(candidate) && document.getElementById(candidate) !== heading)
      ) {
        candidate = `${id}-${counter}`;
        counter += 1;
      }

      heading.id = candidate;
      used.add(candidate);
    });
  }

  function splitHref(href) {
    const hashIndex = href.indexOf('#');
    if (hashIndex < 0) return { path: href, hash: '' };
    return { path: href.slice(0, hashIndex), hash: href.slice(hashIndex) };
  }

  function normalizeRelativePath(currentPath, relativePath) {
    const base = currentPath.split('/');
    base.pop();

    const parts = relativePath.startsWith('/') ? [] : base;
    relativePath.replace(/^\/+/, '').split('/').forEach((part) => {
      if (!part || part === '.') return;
      if (part === '..') parts.pop();
      else parts.push(part);
    });

    return parts.join('/');
  }

  function isExternalHref(href) {
    return /^[a-z][a-z0-9+.-]*:/i.test(href) || href.startsWith('//');
  }

  function makeReaderUrl(page, hash = '') {
    return `?page=${encodeURIComponent(page)}${hash || ''}`;
  }

  function enhanceMarkdown(root, currentPath) {
    // marked.umd.js 当前版本会输出 checkbox，但不会自动附加 GitHub 风格的
    // task-list-item / contains-task-list 类。这里统一补齐，避免任务列表同时
    // 出现普通列表圆点和复选框。
    root.querySelectorAll('li > input[type="checkbox"]').forEach((checkbox) => {
      const item = checkbox.closest('li');
      const list = item?.parentElement;

      item?.classList.add('task-list-item');
      if (list?.matches('ul, ol')) list.classList.add('contains-task-list');
    });

    root.querySelectorAll('table').forEach((table) => {
      if (table.parentElement?.classList.contains('table-scroll')) return;
      const wrapper = document.createElement('div');
      wrapper.className = 'table-scroll';
      table.parentNode.insertBefore(wrapper, table);
      wrapper.appendChild(table);
    });

    root.querySelectorAll('a[href]').forEach((link) => {
      const href = String(link.getAttribute('href') || '').trim();
      if (!href) return;

      if (href.startsWith('#')) {
        link.addEventListener('click', (event) => {
          const id = decodeURIComponent(href.slice(1));
          const target = document.getElementById(id);
          if (!target) return;
          event.preventDefault();
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
          window.history.replaceState(window.history.state, '', makeReaderUrl(activePage, `#${encodeURIComponent(id)}`));
        });
        return;
      }

      if (isExternalHref(href)) {
        link.target = '_blank';
        link.rel = 'noopener noreferrer';
        return;
      }

      const { path: rawPath, hash } = splitHref(href);
      const resolvedPath = normalizeRelativePath(currentPath, rawPath);

      if (resolvedPath.toLowerCase().endsWith('.md') && validPages.has(resolvedPath)) {
        link.href = makeReaderUrl(resolvedPath, hash);
        link.dataset.page = resolvedPath;
        link.addEventListener('click', (event) => {
          event.preventDefault();
          loadPage(resolvedPath, { hash });
        });
        return;
      }

      // Excel、PDF、图片等本地资源继续按原文件路径打开。
      link.href = resolvedPath + hash;
      if (/\.(xlsx?|pdf|zip|docx?|pptx?)$/i.test(resolvedPath)) {
        link.target = '_blank';
        link.rel = 'noopener noreferrer';
      }
    });

    root.querySelectorAll('img[src]').forEach((image) => {
      const src = String(image.getAttribute('src') || '').trim();
      if (src && !isExternalHref(src) && !src.startsWith('data:') && !src.startsWith('/')) {
        image.src = normalizeRelativePath(currentPath, src);
      }
      image.loading = 'lazy';
      image.decoding = 'async';
    });

    root.querySelectorAll('iframe').forEach((frame) => {
      frame.loading = 'lazy';
    });

    makeUniqueHeadingIds(root);
  }

  function getTocHeadings() {
    return [...docBody.querySelectorAll('h2')];
  }

  function createTocLink(heading) {
    const link = document.createElement('a');
    link.href = `#${heading.id}`;
    link.dataset.target = heading.id;
    link.className = 'toc-link';
    link.textContent = heading.textContent.trim();
    return link;
  }

  function renderToc() {
    if (tocObserver) {
      tocObserver.disconnect();
      tocObserver = null;
    }

    tocList.replaceChildren();
    mobileTocList.replaceChildren();
    const headings = getTocHeadings();

    if (!headings.length) {
      const emptyDesktop = document.createElement('p');
      emptyDesktop.className = 'toc-empty';
      emptyDesktop.textContent = '本页暂无章节导航';
      tocList.appendChild(emptyDesktop);
      mobileTocList.appendChild(emptyDesktop.cloneNode(true));
      tocToggle.disabled = true;
      return;
    }

    tocToggle.disabled = false;
    headings.forEach((heading) => {
      tocList.appendChild(createTocLink(heading));
      mobileTocList.appendChild(createTocLink(heading));
    });

    const allTocLinks = document.querySelectorAll('.toc-link[data-target]');

    function setTocActive(id) {
      allTocLinks.forEach((link) => {
        link.classList.toggle('is-active', link.dataset.target === id);
      });
    }

    const visible = new Map();
    tocObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => visible.set(entry.target.id, entry));

      const active = headings
        .map((heading) => visible.get(heading.id))
        .filter((entry) => entry?.isIntersecting)
        .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)[0];

      if (active?.target?.id) {
        setTocActive(active.target.id);
        return;
      }

      const passed = headings.filter((heading) => heading.getBoundingClientRect().top < 150);
      if (passed.length) setTocActive(passed[passed.length - 1].id);
    }, {
      rootMargin: '-110px 0px -65% 0px',
      threshold: [0, 1]
    });

    headings.forEach((heading) => tocObserver.observe(heading));
    setTocActive(headings[0].id);
  }

  function encodedPath(path) {
    return path.split('/').map((part) => encodeURIComponent(part)).join('/');
  }

  async function fetchMarkdown(page) {
    if (activeRequest) activeRequest.abort();

    const controller = new AbortController();
    activeRequest = controller;
    const url = `${encodedPath(page)}?v=${Date.now()}`;

    try {
      const response = await fetch(url, { cache: 'no-store', signal: controller.signal });
      if (!response.ok) {
        throw new Error(`文档读取失败（HTTP ${response.status}）：${page}`);
      }
      return await response.text();
    } finally {
      if (activeRequest === controller) activeRequest = null;
    }
  }

  function applyRequestedHash(hash = '') {
    const currentHash = hash || window.location.hash;
    if (!currentHash) return;

    const id = decodeURIComponent(currentHash.replace(/^#/, ''));
    window.setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: 'auto', block: 'start' });
    }, 0);
  }

  async function loadPage(page, options = {}) {
    const info = getDocInfo(page);
    if (!info) return;

    activePage = page;
    setNavActive(page);
    closeMobileNav();
    closeMobileToc();

    docBody.replaceChildren();
    tocList.replaceChildren();
    mobileTocList.replaceChildren();
    setStatus('正在载入文档…');

    if (options.updateHistory !== false) {
      const url = new URL(window.location.href);
      url.search = '';
      url.searchParams.set('page', page);
      url.hash = options.hash || '';
      window.history.pushState({ page }, '', url);
    }

    document.title = `${info.title} · SEO 研究与网站优化操作手册`;

    try {
      const markdown = await fetchMarkdown(page);
      docBody.innerHTML = markdownToHtml(markdown);
      enhanceMarkdown(docBody, page);
      renderToc();
      setStatus('');

      if (options.hash || window.location.hash) {
        applyRequestedHash(options.hash);
      } else if (!options.keepScroll) {
        window.scrollTo({ top: 0, behavior: 'auto' });
      }
    } catch (error) {
      if (error?.name === 'AbortError') return;

      docBody.replaceChildren();
      renderToc();
      let message = error?.message || '文档读取失败，请稍后重试。';
      if (window.location.protocol === 'file:') {
        message += ' 当前通过 file:// 打开，浏览器通常会阻止读取 Markdown；请使用本地 HTTP 服务器或 GitHub Pages 预览。';
      }
      setStatus(message, 'error');
    }
  }

  function openMobileNav() {
    document.body.classList.add('nav-open');
    menuToggle.setAttribute('aria-expanded', 'true');
  }

  function closeMobileNav() {
    document.body.classList.remove('nav-open');
    menuToggle.setAttribute('aria-expanded', 'false');
  }

  function openMobileToc() {
    if (tocToggle.disabled) return;
    closeMobileNav();
    document.body.classList.add('toc-open');
    tocToggle.setAttribute('aria-expanded', 'true');
    mobileTocPanel.setAttribute('aria-hidden', 'false');
  }

  function closeMobileToc() {
    document.body.classList.remove('toc-open');
    tocToggle.setAttribute('aria-expanded', 'false');
    mobileTocPanel.setAttribute('aria-hidden', 'true');
  }

  function escapeHtml(text) {
    return String(text).replace(/[&<>'"]/g, (char) => ({
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      "'": '&#39;',
      '"': '&quot;'
    }[char]));
  }

  function cssEscape(value) {
    if (window.CSS?.escape) return window.CSS.escape(value);
    return String(value).replace(/[^a-zA-Z0-9_-]/g, '\\$&');
  }

  docsNav.addEventListener('click', (event) => {
    const titleButton = event.target.closest('.nav-group-title');
    if (titleButton) {
      toggleNavGroup(titleButton);
      return;
    }

    const link = event.target.closest('.nav-link');
    if (!link) return;

    const page = link.dataset.page;
    if (!validPages.has(page)) return;

    event.preventDefault();
    if (page === activePage) {
      closeMobileNav();
      return;
    }

    loadPage(page);
  });

  function handleTocClick(event) {
    const link = event.target.closest('.toc-link');
    if (!link) return;

    const id = link.dataset.target;
    const target = id ? document.getElementById(id) : null;
    if (!target) return;

    event.preventDefault();
    closeMobileToc();
    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    window.history.replaceState(
      window.history.state,
      '',
      makeReaderUrl(activePage, `#${encodeURIComponent(id)}`)
    );
  }

  tocList.addEventListener('click', handleTocClick);
  mobileTocList.addEventListener('click', handleTocClick);

  menuToggle.addEventListener('click', () => {
    if (document.body.classList.contains('nav-open')) closeMobileNav();
    else {
      closeMobileToc();
      openMobileNav();
    }
  });

  tocToggle.addEventListener('click', () => {
    if (document.body.classList.contains('toc-open')) closeMobileToc();
    else openMobileToc();
  });

  tocClose.addEventListener('click', closeMobileToc);
  pageMask.addEventListener('click', () => {
    closeMobileNav();
    closeMobileToc();
  });

  document.addEventListener('keydown', (event) => {
    if (event.key !== 'Escape') return;
    closeMobileNav();
    closeMobileToc();
  });

  window.addEventListener('popstate', () => {
    const page = getRequestedPage();
    if (page && page !== activePage) {
      loadPage(page, { updateHistory: false });
    } else if (page === activePage) {
      applyRequestedHash();
    }
  });

  async function init() {
    try {
      setStatus('正在载入文档目录…');
      await loadCatalog();
      const initialPage = getRequestedPage();
      renderNav(initialPage);
      await loadPage(initialPage, { updateHistory: false });
    } catch (error) {
      let message = error?.message || '知识库加载失败。';
      if (window.location.protocol === 'file:') {
        message += ' 当前通过 file:// 打开，请使用本地 HTTP 服务器或 GitHub Pages 预览。';
      }
      setStatus(message, 'error');
    }
  }

  init();
})();
