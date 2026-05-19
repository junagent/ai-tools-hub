// js/main.js - AI工具导航站主逻辑

// ============ 渲染工具卡片 ============
function renderToolCards(tools, containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;

    container.innerHTML = "";
    tools.forEach(tool => {
        const card = document.createElement("div");
        card.className = "tool-card";
        card.onclick = () => window.location.href = `tools/${tool.id}.html`;

        const stars = "★".repeat(Math.floor(tool.rating)) + (tool.rating % 1 >= 0.5 ? "☆" : "");
        card.innerHTML = `
            <div class="tool-header">
                <div class="tool-icon">${tool.icon}</div>
                <div>
                    <h3>${tool.name}</h3>
                    <span class="tool-tag">${tool.tag}</span>
                </div>
            </div>
            <p>${tool.description.substring(0, 80)}...</p>
            <div class="tool-meta">
                <span class="price">${tool.price}</span>
                <span class="rating">${stars} ${tool.rating}</span>
            </div>
        `;
        container.appendChild(card);
    });
}

// ============ 渲染博客卡片 ============
function renderBlogCards(posts, containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;

    container.innerHTML = "";
    posts.forEach(post => {
        const card = document.createElement("div");
        card.className = "blog-card";
        card.onclick = () => window.location.href = `blog/${post.id}.html`;

        card.innerHTML = `
            <div class="blog-img">${post.image}</div>
            <div class="blog-body">
                <div class="blog-date">${post.date} · ${post.category}</div>
                <h3>${post.title}</h3>
                <p>${post.summary}</p>
            </div>
        `;
        container.appendChild(card);
    });
}

// ============ 搜索功能 ============
function searchTools() {
    const input = document.getElementById("searchInput");
    if (!input) return;
    const query = input.value.toLowerCase().trim();

    if (query.length < 2) {
        renderToolCards(TOOLS_DATA.filter(t => t.featured), "toolsGrid");
        return;
    }

    const results = TOOLS_DATA.filter(tool =>
        tool.name.toLowerCase().includes(query) ||
        tool.tag.toLowerCase().includes(query) ||
        tool.description.toLowerCase().includes(query) ||
        tool.bestFor.some(f => f.toLowerCase().includes(query))
    );

    renderToolCards(results, "toolsGrid");
}

// ============ 订阅Newsletter ============
function subscribeNewsletter(e) {
    e.preventDefault();
    const email = e.target.querySelector("input[type=email]").value;
    alert(`感谢订阅！我们已记录你的邮箱：${email}\n（实际部署时需接入邮件服务）`);
    e.target.reset();
}

// ============ 工具详情页渲染 ============
function renderToolDetail(toolId) {
    const tool = TOOLS_DATA.find(t => t.id === toolId);
    if (!tool) return null;
    return tool;
}

// ============ 评分条渲染 ============
function renderScoreBars(scores, containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;

    container.innerHTML = "";
    Object.entries(scores).forEach(([key, value]) => {
        const bar = document.createElement("div");
        bar.className = "score-bar";
        bar.innerHTML = `
            <span class="label">${key}</span>
            <div class="bar-bg">
                <div class="bar-fill" style="width: ${value}%"></div>
            </div>
            <span class="score-val">${value}</span>
        `;
        container.appendChild(bar);
    });
}

// ============ 初始化 ============
document.addEventListener("DOMContentLoaded", () => {
    // 渲染首页工具卡片（只显示featured）
    if (document.getElementById("toolsGrid")) {
        const featured = TOOLS_DATA.filter(t => t.featured);
        renderToolCards(featured, "toolsGrid");
    }

    // 渲染首页博客卡片
    if (document.getElementById("blogGrid")) {
        renderBlogCards(BLOG_POSTS, "blogGrid");
    }

    // 绑定搜索
    const searchInput = document.getElementById("searchInput");
    if (searchInput) {
        searchInput.addEventListener("input", searchTools);
    }

    // 绑定Newsletter
    const newsletterForm = document.querySelector(".newsletter form");
    if (newsletterForm) {
        newsletterForm.addEventListener("submit", subscribeNewsletter);
    }
});

// 导出供其他页面使用
window.AI_TOOLS = {
    TOOLS_DATA,
    BLOG_POSTS,
    CATEGORIES,
    renderToolCards,
    renderBlogCards,
    renderToolDetail,
    renderScoreBars,
    searchTools
};
