(function(){
  "use strict";

  const app=document.getElementById('app');
  const topActions=document.getElementById('topActions');
  const footerMeta=document.getElementById('footerMeta');

  const moduleInfo={
    '01':{name:'基础',desc:'总流程、术语与长期维护规则。',when:'第一次使用这套知识库，或需要统一团队方法与术语时。'},
    '02':{name:'研究',desc:'关键词、搜索结果与竞争网站研究。',when:'准备新产品、新页面、新内容或竞争分析时。'},
    '03':{name:'架构',desc:'把页面组织成可维护的网站内容体系。',when:'规划新网站、改版或重新整理产品与内容层级时。'},
    '04':{name:'内容',desc:'内容规划、证据、写作与 AI 辅助边界。',when:'把研究结果转成可审核、可发布的可靠内容时。'},
    '05':{name:'优化',desc:'页面 SEO 与抓取、索引、性能等技术基础。',when:'页面上线前检查结构、可发现性与技术放行条件时。'},
    '06':{name:'数据',desc:'月度跟踪、单页复盘与 Search Console 网站级分析。',when:'页面发布后需要判断 SEO 是否真正产生结果时。'},
    '07':{name:'治理',desc:'历史内容、旧 URL 与长期内容资产维护。',when:'网站运营多年后需要合并、更新、重构或下架内容时。'}
  };

  let catalog=[];
  let catalogVersion='2.2.1';

  const esc=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const docUrl=(path,hash='')=>'index.html?doc='+encodeURIComponent(path)+(hash?hash:'');
  const openAttrs=()=> 'target="_blank" rel="noopener"';
  const byOrder=(a,b)=>String(a.order||a.path).localeCompare(String(b.order||b.path),'zh-CN',{numeric:true});

  async function loadCatalog(){
    const r=await fetch('assets/data/catalog.json',{cache:'no-cache'});
    if(!r.ok)throw new Error('无法读取文档目录');
    const data=await r.json();
    catalog=(data.items||[]).sort(byOrder);
    catalogVersion=data.version||catalogVersion;
    if(footerMeta)footerMeta.textContent=`${catalog.length} 份文档 · 7 个核心模块 · v${catalogVersion}`;
    return data;
  }

  function itemLink(item,cls='doc-link'){
    if(cls==='doc-link'){
      return `<a class="${cls}" href="${docUrl(item.path)}" ${openAttrs()}><span class="doc-link-title">${esc(item.title)}</span><span class="doc-link-side"><span class="doc-link-type">${esc(item.typeLabel)}</span><span class="doc-arrow" aria-hidden="true">→</span></span></a>`;
    }
    return `<a class="${cls}" href="${docUrl(item.path)}" ${openAttrs()}><h3>${esc(item.title)}</h3><p>${esc(item.description)}</p><div class="result-meta"><span>${esc(item.typeLabel)}</span><span>${esc(item.moduleLabel)}</span></div></a>`;
  }

  function quickCard(title,desc,path,tag){
    const item=catalog.find(x=>x.path===path);
    if(!item)return '';
    return `<a class="quick-card" href="${docUrl(path)}" ${openAttrs()}><span class="quick-tag">${esc(tag)}</span><h3>${esc(title)}</h3><p>${esc(desc)}</p><span class="quick-link">开始阅读 <span aria-hidden="true">→</span></span></a>`;
  }

  function groupedResources(items){
    const groups=['02','03','04','05','06','07'];
    return groups.map(num=>{
      const docs=items.filter(x=>x.module===num).sort(byOrder);
      if(!docs.length)return '';
      return `<div class="resource-group"><div class="resource-group-head"><span>${num}</span><strong>${esc(moduleInfo[num]?.name||num)}</strong></div><ul class="doc-list compact">${docs.map(d=>'<li>'+itemLink(d)+'</li>').join('')}</ul></div>`;
    }).join('');
  }

  function productCaseCard(title,desc,items){
    return `<article class="case-card product-case"><div class="case-head"><div><span class="case-kicker">产品级案例</span><h3>${esc(title)}</h3><p class="module-desc">${esc(desc)}</p></div><span class="module-count">${items.length} 份文档</span></div><ul class="doc-list">${items.sort(byOrder).map(d=>'<li>'+itemLink(d)+'</li>').join('')}</ul></article>`;
  }

  function siteCaseCard(item){
    return `<a class="site-case-card" href="${docUrl(item.path)}" ${openAttrs()}><span class="case-kicker">网站级案例</span><h3>${esc(item.title)}</h3><p>${esc(item.description)}</p><span class="quick-link">查看案例 <span aria-hidden="true">→</span></span></a>`;
  }

  function renderHome(){
    document.title='SEO研究与网站优化操作手册';
    topActions.innerHTML=`<nav class="top-nav" aria-label="页内导航"><a href="#coreModules">模块</a><a href="#resources">模板</a><a href="#resources">检查表</a><a href="#cases">案例</a></nav><a class="text-button" href="README.md" target="_blank" rel="noopener">README</a>`;

    const guides=catalog.filter(x=>x.type==='guide'&&x.path!=='README.md');
    const templates=catalog.filter(x=>x.type==='template');
    const checks=catalog.filter(x=>x.type==='checklist');
    const examples=catalog.filter(x=>x.type==='example');

    const moduleCards=Object.entries(moduleInfo).map(([num,info])=>{
      const docs=guides.filter(x=>x.module===num).sort(byOrder);
      return `<article class="module-card"><div class="module-top"><div><div class="module-number">${num}</div><h3>${esc(info.name)}</h3><p class="module-desc">${esc(info.desc)}</p><p class="module-when"><strong>什么时候用：</strong>${esc(info.when)}</p></div><span class="module-count">${docs.length} 篇指南</span></div><ul class="doc-list">${docs.map(d=>'<li>'+itemLink(d)+'</li>').join('')}</ul></article>`;
    }).join('');

    const compositeCases=examples.filter(x=>x.path.startsWith('examples/product-cases/composite-decking/'));
    const wallCases=examples.filter(x=>x.path.startsWith('examples/product-cases/wpc-wall-cladding/'));
    const siteCases=examples.filter(x=>x.section==='网站级案例').sort(byOrder);

    app.innerHTML=`
      <section class="hero">
        <p class="eyebrow">SEO Research &amp; Website Optimization Playbook</p>
        <h1>SEO研究与网站优化操作手册</h1>
        <p>从竞争研究、关键词与网站架构，到内容生产、页面与技术优化、Search Console 数据分析和长期内容治理。Markdown 是唯一正文来源，GitHub Pages 负责更清晰地查找和阅读。</p>
        <div class="hero-meta"><span class="pill">v${esc(catalogVersion)}</span><span class="pill">7 个核心模块</span><span class="pill">${catalog.length} 份 Markdown 文档</span><span class="pill">GitHub Pages</span></div>
      </section>

      <section class="quick-section" id="quickStart">
        <div class="section-head"><div><h2>快速开始</h2><p>不需要先读完全部文档，根据当前任务直接进入对应路径。</p></div></div>
        <div class="quick-grid">
          ${quickCard('第一次使用','先理解整套 SEO 工作流、模块关系和执行顺序。','docs/01-foundation/seo-workflow.md','入门')}
          ${quickCard('规划新网站','从页面职责、产品层级、内容体系和内部链接开始。','docs/03-architecture/site-architecture.md','新站')}
          ${quickCard('优化现有网站','先用真实 Search Console 数据定位问题，再决定更新或治理。','docs/06-measurement/search-console-analysis.md','优化')}
          ${quickCard('生产一篇 SEO 内容','从关键词与页面映射开始，再进入 SERP、内容简报和审核。','docs/02-research/keyword-research.md','内容')}
        </div>
      </section>

      <section class="search-section" id="searchSection">
        <div class="search-panel"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="7"></circle><path d="m20 20-3.5-3.5"></path></svg><input id="searchInput" type="search" placeholder="搜索指南、模板、检查表和案例……" autocomplete="off"></div>
        <div class="filter-row"><div class="filters" id="filters"><button class="filter active" data-type="all">全部</button><button class="filter" data-type="guide">指南</button><button class="filter" data-type="template">模板</button><button class="filter" data-type="checklist">检查表</button><button class="filter" data-type="example">案例</button></div><span class="search-status" id="searchStatus">共 ${catalog.length} 份文档</span></div>
        <div class="search-results" id="searchResults"><div class="section-head"><div><h2>搜索结果</h2><p id="searchCount"></p></div></div><div id="searchResultList" class="search-result-list"></div></div>
      </section>

      <section class="section" id="coreModules"><div class="section-head"><div><h2>七个核心模块</h2><p>按照 SEO 工作生命周期组织；模块可以独立使用，也可以组成完整闭环。</p></div></div><div class="module-grid">${moduleCards}</div></section>

      <section class="section" id="resources"><div class="section-head"><div><h2>工作资源</h2><p>模板用于执行和记录，检查表用于阶段验收与最终放行。</p></div></div><div class="resource-grid two-col"><article class="resource-card"><div class="resource-card-head"><div><span class="case-kicker">执行</span><h3>工作模板</h3></div><span class="module-count">${templates.length} 份</span></div><p>开始研究、规划、审核或复盘时复制使用。</p>${groupedResources(templates)}</article><article class="resource-card"><div class="resource-card-head"><div><span class="case-kicker">验收</span><h3>检查表</h3></div><span class="module-count">${checks.length} 份</span></div><p>完成一个阶段后逐项核验，避免遗漏关键风险。</p>${groupedResources(checks)}</article></div></section>

      <section class="section" id="cases"><div class="section-head"><div><h2>实战案例</h2><p>产品级案例验证完整执行流程；网站级案例展示更高层级的架构、数据与治理方法。</p></div></div><h3 class="subsection-title">产品级案例</h3><div class="product-case-grid">${productCaseCard('Composite Decking','从核心产品关键词到文章、页面 SEO、技术 SEO 与发布后复盘。',compositeCases)}${productCaseCard('WPC Wall Cladding','在墙体系统、安装、防火与规范约束更强的产品中验证同一方法。',wallCases)}</div><h3 class="subsection-title site-title">网站级案例</h3><div class="site-case-grid">${siteCases.map(siteCaseCard).join('')}</div></section>
    `;

    bindHomeSearch();
  }

  function bindHomeSearch(){
    let type='all';
    const input=document.getElementById('searchInput');
    const filters=document.getElementById('filters');
    const wrap=document.getElementById('searchResults');
    const list=document.getElementById('searchResultList');
    const count=document.getElementById('searchCount');
    const status=document.getElementById('searchStatus');
    const sections=['quickStart','coreModules','resources','cases'].map(id=>document.getElementById(id));

    function run(){
      const q=input.value.trim().toLowerCase();
      const active=q||type!=='all';
      if(!active){
        wrap.classList.remove('active');
        sections.forEach(x=>{if(x)x.hidden=false;});
        status.textContent=`共 ${catalog.length} 份文档`;
        return;
      }
      const found=catalog.filter(x=>(type==='all'||x.type===type)&&(!q||x.search.includes(q))).slice(0,60);
      wrap.classList.add('active');
      sections.forEach(x=>{if(x)x.hidden=true;});
      status.textContent=`找到 ${found.length} 项`;
      count.textContent=q?`“${input.value.trim()}” · ${found.length} 项`:`${found.length} 项`;
      list.innerHTML=found.length?found.map(x=>itemLink(x,'result-card')).join(''):'<div class="empty">没有找到匹配文档。</div>';
    }

    input.addEventListener('input',run);
    filters.addEventListener('click',e=>{
      const b=e.target.closest('.filter');
      if(!b)return;
      filters.querySelectorAll('.filter').forEach(x=>x.classList.remove('active'));
      b.classList.add('active');
      type=b.dataset.type;
      run();
    });
  }

  function resolveRelative(current,href){
    const [raw,hash='']=href.split('#');
    if(!raw)return {path:current,hash:hash?'#'+hash:''};
    if(/^[a-z]+:/i.test(raw)||raw.startsWith('//'))return null;
    const base=current.split('/');base.pop();
    for(const part of raw.split('/')){
      if(!part||part==='.')continue;
      if(part==='..')base.pop();else base.push(part);
    }
    return {path:base.join('/'),hash:hash?'#'+hash:''};
  }

  function setupRenderedLinks(container,currentPath){
    container.querySelectorAll('a[href]').forEach(a=>{
      const href=a.getAttribute('href');if(!href)return;
      if(href.startsWith('#'))return;
      const resolved=resolveRelative(currentPath,href);
      if(resolved&&resolved.path.toLowerCase().endsWith('.md')&&catalog.some(x=>x.path===resolved.path)){
        a.href=docUrl(resolved.path,resolved.hash);return;
      }
      if(resolved&&!/^[a-z]+:/i.test(href)&&!href.startsWith('//')){
        a.href=resolved.path+(resolved.hash||'');return;
      }
      a.target='_blank';a.rel='noopener';
    });
  }

  function makeToc(headings){
    if(!headings.length)return '<p class="module-desc">本文没有二级目录。</p>';
    return '<ul class="toc">'+headings.filter(h=>h.level>=2&&h.level<=3).map(h=>`<li class="level-${h.level}"><a href="#${h.id}">${esc(h.text)}</a></li>`).join('')+'</ul>';
  }

  function activateToc(){
    const links=[...document.querySelectorAll('.toc a')];if(!links.length)return;
    const map=links.map(a=>({a,el:document.getElementById(a.hash.slice(1))})).filter(x=>x.el);
    const update=()=>{
      let active=map[0];
      for(const x of map){if(x.el.getBoundingClientRect().top<=130)active=x;else break;}
      links.forEach(a=>a.classList.remove('active'));
      if(active)active.a.classList.add('active');
    };
    window.addEventListener('scroll',update,{passive:true});update();
  }

  async function renderDoc(path){
    const item=catalog.find(x=>x.path===path);
    if(!item){app.innerHTML='<div class="error-card"><h1>未找到文档</h1><p>该文档不在当前知识库目录中。</p><a class="button" href="index.html">返回首页</a></div>';return;}

    document.title=item.title+' · SEO 操作手册';
    topActions.innerHTML='<a class="text-button mobile-home" href="index.html">知识库首页</a><a class="text-button secondary-action" href="README.md" target="_blank" rel="noopener">README</a><button class="button secondary-action" id="copyLink">复制链接</button>';
    app.innerHTML='<div class="loading-card">正在读取 Markdown 文档…</div>';

    try{
      const r=await fetch(path,{cache:'no-cache'});if(!r.ok)throw new Error('HTTP '+r.status);
      const md=await r.text();
      const rendered=SeoMarkdown.renderMarkdown(md);
      const toc=makeToc(rendered.headings);
      const metaEntries=Object.entries(rendered.meta||{});
      const meta=metaEntries.length?`<details class="frontmatter"><summary>文档元数据</summary><dl>${metaEntries.map(([k,v])=>`<dt>${esc(k)}</dt><dd>${esc(v)}</dd>`).join('')}</dl></details>`:'';
      const similar=catalog.filter(x=>x.type===item.type&&x.path!==item.path&&((x.module===item.module)||(x.section===item.section))).sort(byOrder);
      const prev=similar.filter(x=>x.order<item.order).slice(-1)[0];
      const next=similar.find(x=>x.order>item.order);

      app.innerHTML=`<div class="reader-page"><aside class="reader-sidebar"><a class="reader-back" href="index.html">← 返回知识库</a><p class="toc-title">本文目录</p>${toc}</aside><section class="reader-main"><header class="reader-header"><div class="reader-path">${esc(item.moduleLabel)} / ${esc(item.typeLabel)} · ${esc(item.path)}</div><h1 class="reader-title">${esc(item.title)}</h1><p class="reader-desc">${esc(item.description)}</p><div class="reader-tools"><a class="button" href="${esc(path)}" target="_blank" rel="noopener">查看 Markdown 原文</a><button class="button" id="scrollTop">回到顶部</button></div></header>${meta}<details class="mobile-toc"><summary>本文目录</summary>${toc}</details><article class="markdown-body" id="markdownBody">${rendered.html}</article><nav class="reader-bottom">${prev?`<a href="${docUrl(prev.path)}"><small>上一篇</small><strong>${esc(prev.title)}</strong></a>`:'<span></span>'}${next?`<a href="${docUrl(next.path)}"><small>下一篇</small><strong>${esc(next.title)}</strong></a>`:'<span></span>'}</nav></section></div>`;

      const article=document.getElementById('markdownBody');
      const firstH1=article.querySelector(':scope > h1:first-child');if(firstH1)firstH1.remove();
      setupRenderedLinks(article,path);activateToc();
      document.getElementById('scrollTop')?.addEventListener('click',()=>window.scrollTo({top:0,behavior:'smooth'}));
      document.getElementById('copyLink')?.addEventListener('click',async e=>{try{await navigator.clipboard.writeText(location.href);e.target.textContent='已复制';setTimeout(()=>e.target.textContent='复制链接',1200);}catch{}});
      if(location.hash)setTimeout(()=>document.getElementById(decodeURIComponent(location.hash.slice(1)))?.scrollIntoView(),80);
    }catch(err){
      app.innerHTML=`<div class="error-card"><h1>文档加载失败</h1><p>无法读取 <code>${esc(path)}</code>。请确认 GitHub Pages 已正常部署，并且文件路径没有改变。</p><p class="reader-path">${esc(err.message)}</p><a class="button" href="index.html">返回首页</a></div>`;
    }
  }

  async function init(){
    try{
      await loadCatalog();
      const path=new URLSearchParams(location.search).get('doc');
      if(path)renderDoc(path);else renderHome();
    }catch(err){
      app.innerHTML=`<div class="error-card"><h1>知识库加载失败</h1><p>${esc(err.message)}</p></div>`;
    }
  }

  init();
})();
