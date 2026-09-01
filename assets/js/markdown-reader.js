(function(global){
  "use strict";
  const escapeHtml = s => String(s).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  function parseFrontMatter(md){
    const out={meta:{},body:md};
    if(!md.startsWith('---\n')) return out;
    const end=md.indexOf('\n---\n',4);
    if(end<0) return out;
    const raw=md.slice(4,end).split(/\r?\n/);
    raw.forEach(line=>{const m=line.match(/^([A-Za-z0-9_-]+):\s*(.*)$/);if(m){let v=m[2].trim();if((v.startsWith('"')&&v.endsWith('"'))||(v.startsWith("'")&&v.endsWith("'")))v=v.slice(1,-1);out.meta[m[1]]=v;}});
    out.body=md.slice(end+5);
    return out;
  }
  function slugify(text, used){
    let s=text.replace(/<[^>]+>/g,'').replace(/[`*_~]/g,'').trim().toLowerCase();
    s=s.replace(/&[a-z#0-9]+;/gi,'').replace(/[^\p{L}\p{N}\s-]/gu,'').replace(/\s+/g,'-').replace(/-+/g,'-').replace(/^-|-$/g,'')||'section';
    let base=s,n=2;while(used.has(s))s=base+'-'+n++;used.add(s);return s;
  }
  function inline(src){
    if(!src) return '';
    const stash=[];
    let s=escapeHtml(src);
    s=s.replace(/`([^`]+)`/g,(_,c)=>{const k='\u0000'+stash.length+'\u0000';stash.push('<code>'+c+'</code>');return k;});
    s=s.replace(/!\[([^\]]*)\]\(([^\s)]+)(?:\s+&quot;([^&]*)&quot;)?\)/g,(_,alt,url,title)=>`<img src="${url}" alt="${alt}"${title?` title="${title}"`:''}>`);
    s=s.replace(/\[([^\]]+)\]\(([^)]+)\)/g,(_,txt,url)=>`<a href="${url}">${txt}</a>`);
    s=s.replace(/\*\*([^*]+)\*\*/g,'<strong>$1</strong>').replace(/__([^_]+)__/g,'<strong>$1</strong>');
    s=s.replace(/(^|[^*])\*([^*\n]+)\*/g,'$1<em>$2</em>').replace(/(^|[^_])_([^_\n]+)_/g,'$1<em>$2</em>');
    s=s.replace(/~~([^~]+)~~/g,'<del>$1</del>');
    stash.forEach((v,i)=>{s=s.replace('\u0000'+i+'\u0000',v);});
    return s;
  }
  function splitTableRow(line){
    let s=line.trim();if(s.startsWith('|'))s=s.slice(1);if(s.endsWith('|'))s=s.slice(0,-1);
    return s.split(/(?<!\\)\|/).map(x=>x.replace(/\\\|/g,'|').trim());
  }
  function isTableSep(line){return /^\s*\|?\s*:?-{3,}:?\s*(\|\s*:?-{3,}:?\s*)+\|?\s*$/.test(line);}
  function listInfo(line){const m=line.match(/^(\s*)([-+*]|\d+\.)\s+(.*)$/);if(!m)return null;return {indent:m[1].replace(/\t/g,'    ').length,ordered:/\d+\./.test(m[2]),text:m[3]};}
  function renderList(lines,start){
    const first=listInfo(lines[start]); const base=first.indent; const ordered=first.ordered; let html=`<${ordered?'ol':'ul'}>`; let i=start;
    while(i<lines.length){
      const info=listInfo(lines[i]); if(!info||info.indent<base||info.ordered!==ordered&&info.indent===base)break;
      if(info.indent>base){const nested=renderList(lines,i);html+=nested.html;i=nested.next;continue;}
      let text=info.text;let checkbox='';const c=text.match(/^\[([ xX])\]\s+(.*)$/);if(c){checkbox=`<input type="checkbox" disabled ${c[1].toLowerCase()==='x'?'checked':''}>`;text=c[2];}
      html+='<li>'+checkbox+inline(text);i++;
      while(i<lines.length){const next=listInfo(lines[i]);if(!next||next.indent<=base)break;const nested=renderList(lines,i);html+=nested.html;i=nested.next;}
      html+='</li>';
    }
    html+=`</${ordered?'ol':'ul'}>`;return {html,next:i};
  }
  function renderMarkdown(md){
    const fm=parseFrontMatter(md);const lines=fm.body.replace(/\r\n/g,'\n').split('\n');const used=new Set();const headings=[];let html='';let i=0;
    const startsBlock=(idx)=>{if(idx>=lines.length)return true;const l=lines[idx],s=l.trim();return !s||/^#{1,6}\s+/.test(s)||s.startsWith('```')||s.startsWith('>')||/^([-*_])\1\1+\s*$/.test(s)||listInfo(l)|| (s.startsWith('|')&&idx+1<lines.length&&isTableSep(lines[idx+1]));};
    while(i<lines.length){let line=lines[i],s=line.trim();if(!s){i++;continue;}
      if(s.startsWith('```')){const lang=s.slice(3).trim();i++;const buf=[];while(i<lines.length&&!lines[i].trim().startsWith('```'))buf.push(lines[i++]);if(i<lines.length)i++;html+=`<pre>${lang?`<span class="code-lang">${escapeHtml(lang)}</span>`:''}<code>${escapeHtml(buf.join('\n'))}</code></pre>`;continue;}
      const hm=s.match(/^(#{1,6})\s+(.+)$/);if(hm){const level=hm[1].length;const raw=hm[2].replace(/\s+#+\s*$/,'');const id=slugify(raw,used);if(level<=3)headings.push({level,id,text:raw.replace(/[`*_~]/g,'')});html+=`<h${level} id="${id}">${inline(raw)}</h${level}>`;i++;continue;}
      if(/^([-*_])\1\1+\s*$/.test(s)){html+='<hr>';i++;continue;}
      if(s.startsWith('>')){const buf=[];while(i<lines.length&&lines[i].trim().startsWith('>')){buf.push(lines[i].trim().replace(/^>\s?/,''));i++;}html+='<blockquote><p>'+inline(buf.join('<br>'))+'</p></blockquote>';continue;}
      if(s.startsWith('|')&&i+1<lines.length&&isTableSep(lines[i+1])){const head=splitTableRow(lines[i]);i+=2;const rows=[];while(i<lines.length&&lines[i].trim().startsWith('|')){rows.push(splitTableRow(lines[i++]));}html+='<div class="table-wrap"><table><thead><tr>'+head.map(c=>'<th>'+inline(c)+'</th>').join('')+'</tr></thead><tbody>'+rows.map(r=>'<tr>'+r.map(c=>'<td>'+inline(c)+'</td>').join('')+'</tr>').join('')+'</tbody></table></div>';continue;}
      if(listInfo(line)){const list=renderList(lines,i);html+=list.html;i=list.next;continue;}
      const buf=[s];i++;while(i<lines.length&&!startsBlock(i)){buf.push(lines[i].trim());i++;}html+='<p>'+inline(buf.join(' '))+'</p>';
    }
    return {html,headings,meta:fm.meta};
  }
  global.SeoMarkdown={renderMarkdown,parseFrontMatter};
})(window);
