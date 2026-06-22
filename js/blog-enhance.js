/**
 * blog-enhance.js — 博客页面增强
 * 自动添加：阅读时间、目录导航、相关文章推荐
 */
(function() {
  'use strict';

  // 只在博文详情页运行（有 article 标签的页面）
  const article = document.querySelector('article');
  if (!article) return;

  const contentDiv = article.querySelector('div[style*="line-height"]');
  if (!contentDiv) return;

  // ========== 1. 阅读时间（自动计算） ==========
  const text = contentDiv.textContent || '';
  const charCount = text.replace(/\s+/g, '').length;
  // 中文字均阅读速度 300字/分钟，英文 200词/分钟
  const readMin = Math.max(1, Math.ceil(charCount / 400));
  const metaDiv = article.querySelector('div[style*="color:var(--text-muted)"]');
  if (metaDiv && !metaDiv.textContent.includes('预计阅读')) {
    const span = document.createElement('span');
    span.style.cssText = 'margin-left:12px;';
    span.textContent = '预计阅读：' + readMin + ' 分钟';
    metaDiv.appendChild(span);
  }

  // ========== 2. 目录导航（ToC） ==========
  const h2s = contentDiv.querySelectorAll('h2[id]');
  if (h2s.length >= 3) {
    const toc = document.createElement('div');
    toc.style.cssText = 'background:var(--bg-card);border-radius:12px;padding:24px;margin-bottom:30px;';
    const tocTitle = document.createElement('h3');
    tocTitle.style.cssText = 'font-size:1.1em;margin-bottom:12px;';
    tocTitle.textContent = '📋 本文目录';
    toc.appendChild(tocTitle);

    const ol = document.createElement('ol');
    ol.style.cssText = 'padding-left:20px;line-height:2.2;';
    h2s.forEach(function(h2) {
      const li = document.createElement('li');
      const a = document.createElement('a');
      a.href = '#' + h2.id;
      a.style.color = 'var(--accent)';
      a.textContent = h2.textContent.replace(/^[📊🔬📝💰📋🎯❓⚡🎨🔗⚙️🔓🏢🗺️📢💬💰📖🧪💵📌\s]+/, '').trim();
      li.appendChild(a);
      ol.appendChild(li);
    });
    toc.appendChild(ol);

    // 插入到第一个 h2 之前（如果还没有 ToC）
    const firstH2 = contentDiv.querySelector('h2');
    if (firstH2 && !contentDiv.querySelector('div[style*="border-radius:12px"] h3')) {
      // 检查是否已存在 ToC
      let hasToc = false;
      const existingTocs = contentDiv.querySelectorAll('h3');
      existingTocs.forEach(function(h3) {
        if (h3.textContent.includes('本文目录')) hasToc = true;
      });
      if (!hasToc) {
        firstH2.parentNode.insertBefore(toc, firstH2);
      }
    }
  }

  // ========== 3. 相关文章推荐 ==========
  if (typeof BLOG_POSTS === 'undefined') return;

  const currentPath = window.location.pathname;
  const currentId = currentPath.split('/').pop().replace('.html', '');
  const current = BLOG_POSTS.find(function(p) { return p.id === currentId; });

  if (!current) return;

  // 根据标签和分类找相关文章
  const related = BLOG_POSTS
    .filter(function(p) { return p.id !== currentId; })
    .map(function(p) {
      let score = 0;
      if (p.category === current.category) score += 3;
      if (current.tags && p.tags) {
        p.tags.forEach(function(t) {
          if (current.tags.indexOf(t) !== -1) score += 2;
        });
      }
      return { post: p, score: score };
    })
    .sort(function(a, b) { return b.score - a.score; })
    .slice(0, 3)
    .filter(function(r) { return r.score >= 1; });

  if (related.length === 0) return;

  // 检查是否已存在相关推荐
  if (contentDiv.querySelector('div[style*="border-radius:12px"] h3') &&
      contentDiv.querySelector('div[style*="border-radius:12px"] h3').textContent.includes('相关推荐')) {
    return;
  }

  const relatedDiv = document.createElement('div');
  relatedDiv.style.cssText = 'background:var(--bg-card);border-radius:12px;padding:24px;margin:40px 0 30px;';
  const relatedTitle = document.createElement('h3');
  relatedTitle.style.cssText = 'font-size:1.1em;margin-bottom:12px;';
  relatedTitle.textContent = '📌 相关推荐';
  relatedDiv.appendChild(relatedTitle);

  const ul = document.createElement('ul');
  ul.style.cssText = 'padding-left:20px;line-height:2;';
  related.forEach(function(r) {
    const li = document.createElement('li');
    const a = document.createElement('a');
    a.href = r.post.id + '.html';
    a.style.color = 'var(--accent)';
    a.textContent = r.post.title;
    li.appendChild(a);
    const desc = document.createElement('span');
    desc.style.cssText = 'color:var(--text-muted);font-size:0.85em;';
    desc.textContent = ' — ' + r.post.summary.substring(0, 40) + '...';
    li.appendChild(desc);
    ul.appendChild(li);
  });
  relatedDiv.appendChild(ul);

  // 插入到内容末尾（在最后一个元素之后）
  contentDiv.appendChild(relatedDiv);
})();
