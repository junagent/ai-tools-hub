// js/enhance.js — 全站增强脚本（深色模式、回到顶部、骨架屏、滚动动画）
(function () {
    "use strict";

    // ── 1. 深色模式 ──────────────────────────────────────────────
    const THEME_KEY = "ai-tools-theme";

    function getPreferredTheme() {
        const saved = localStorage.getItem(THEME_KEY);
        if (saved) return saved;
        return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
    }

    function applyTheme(theme) {
        document.documentElement.setAttribute("data-theme", theme);
        localStorage.setItem(THEME_KEY, theme);
        const btn = document.querySelector(".theme-toggle");
        if (btn) btn.textContent = theme === "dark" ? "☀️" : "🌙";
    }

    // 立即应用，避免闪烁
    applyTheme(getPreferredTheme());

    function toggleTheme() {
        const current = document.documentElement.getAttribute("data-theme") || "light";
        applyTheme(current === "dark" ? "light" : "dark");
    }

    // ── 2. 注入导航栏功能按钮 ─────────────────────────────────────
    function injectNavExtras() {
        const navContainer = document.querySelector(".navbar .container");
        if (!navContainer) return;

        // 深色模式切换按钮
        if (!document.querySelector(".theme-toggle")) {
            const btn = document.createElement("button");
            btn.className = "theme-toggle";
            btn.setAttribute("aria-label", "切换深色模式");
            btn.textContent = (document.documentElement.getAttribute("data-theme") === "dark") ? "☀️" : "🌙";
            btn.addEventListener("click", toggleTheme);
            navContainer.appendChild(btn);
        }
    }

    // ── 3. 回到顶部按钮 ───────────────────────────────────────────
    function injectBackToTop() {
        if (document.querySelector(".back-to-top")) return;
        const btn = document.createElement("button");
        btn.className = "back-to-top";
        btn.setAttribute("aria-label", "回到顶部");
        btn.innerHTML = "↑";
        btn.addEventListener("click", function () {
            window.scrollTo({ top: 0, behavior: "smooth" });
        });
        document.body.appendChild(btn);

        var ticking = false;
        window.addEventListener("scroll", function () {
            if (!ticking) {
                requestAnimationFrame(function () {
                    if (window.scrollY > 400) {
                        btn.classList.add("is-visible");
                    } else {
                        btn.classList.remove("is-visible");
                    }
                    ticking = false;
                });
                ticking = true;
            }
        });
    }

    // ── 4. 骨架屏加载效果 ─────────────────────────────────────────
    function showSkeleton(containerId, count) {
        var container = document.getElementById(containerId);
        if (!container || container.children.length > 0) return;
        for (var i = 0; i < count; i++) {
            var sk = document.createElement("div");
            sk.className = "skeleton skeleton-card";
            sk.setAttribute("data-skeleton", "true");
            container.appendChild(sk);
        }
    }

    function removeSkeleton(containerId) {
        var container = document.getElementById(containerId);
        if (!container) return;
        var skeletons = container.querySelectorAll("[data-skeleton]");
        for (var i = 0; i < skeletons.length; i++) {
            skeletons[i].remove();
        }
    }

    // ── 5. 滚动动画（Intersection Observer）──────────────────────
    function initScrollAnimations() {
        var observer = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    entry.target.classList.add("is-visible");
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.08, rootMargin: "0px 0px -40px 0px" });

        document.querySelectorAll("[data-animate]").forEach(function (el) {
            observer.observe(el);
        });
        return observer;
    }

    function revealVisibleElements() {
        document.querySelectorAll("[data-animate]").forEach(function (el) {
            if (el.classList.contains("is-visible")) return;
            var rect = el.getBoundingClientRect();
            if (rect.top < window.innerHeight && rect.bottom > 0) {
                el.classList.add("is-visible");
            }
        });
    }

    // 为网格子元素自动添加交错动画属性
    function applyStaggerAnimations(container) {
        if (!container) return;
        var children = container.children;
        for (var i = 0; i < children.length; i++) {
            var child = children[i];
            if (!child.hasAttribute("data-animate")) {
                child.setAttribute("data-animate", "");
                child.setAttribute("data-animate-delay", String((i % 10) + 1));
            }
        }
    }

    // ── 6. 首页渲染逻辑（仅在 index.html 执行）───────────────────
    function renderToolCards(tools, containerId) {
        var container = document.getElementById(containerId);
        if (!container) return;
        container.innerHTML = "";
        tools.forEach(function (tool) {
            var card = document.createElement("div");
            card.className = "tool-card";
            card.onclick = function () { window.location.href = "tools/" + tool.id + ".html"; };

            var stars = "";
            for (var s = 0; s < Math.floor(tool.rating); s++) stars += "★";
            if (tool.rating % 1 >= 0.5) stars += "☆";

            var iconHTML = tool.logo
                ? '<img class="tool-icon-img" src="images/logos/' + tool.logo + '" alt="' + tool.name + '" loading="lazy">'
                : '<div class="tool-icon">' + (tool.icon || "") + '</div>';

            card.innerHTML =
                '<div class="tool-header">' + iconHTML +
                '<div><h3>' + tool.name + '</h3><span class="tool-tag">' + tool.tag + '</span></div></div>' +
                '<p>' + tool.description.substring(0, 80) + '...</p>' +
                '<div class="tool-meta"><span class="price">' + tool.price + '</span><span class="rating">' + stars + ' ' + tool.rating + '</span></div>';
            container.appendChild(card);
        });
    }

    function renderBlogCards(posts, containerId) {
        var container = document.getElementById(containerId);
        if (!container) return;
        container.innerHTML = "";
        posts.forEach(function (post) {
            var card = document.createElement("div");
            card.className = "blog-card";
            card.onclick = function () { window.location.href = "blog/" + post.id + ".html"; };
            card.innerHTML =
                '<div class="blog-img">' + post.image + '</div>' +
                '<div class="blog-body"><div class="blog-date">' + post.date + ' · ' + post.category + '</div>' +
                '<h3>' + post.title + '</h3><p>' + post.summary + '</p></div>';
            container.appendChild(card);
        });
    }

    function searchTools(query, allTools) {
        var container = document.getElementById("toolsGrid");
        if (!container || !allTools) return;
        var q = (query || "").toLowerCase().trim();
        var results;
        if (q.length < 2) {
            results = allTools.filter(function (t) { return t.featured; });
        } else {
            results = allTools.filter(function (tool) {
                return tool.name.toLowerCase().includes(q) ||
                    tool.tag.toLowerCase().includes(q) ||
                    tool.description.toLowerCase().includes(q) ||
                    tool.bestFor.some(function (f) { return f.toLowerCase().includes(q); });
            });
        }
        renderToolCards(results, "toolsGrid");
        applyStaggerAnimations(container);
        revealVisibleElements();
    }

    // ── 7. JSON-LD 结构化数据 ─────────────────────────────────────
    var BASE_URL = "https://junagent.github.io/ai-tools-hub";

    function injectJSONLD(data) {
        var s = document.createElement("script");
        s.type = "application/ld+json";
        s.textContent = JSON.stringify(data, null, 2);
        document.head.appendChild(s);
    }

    // 自动检测页面类型并生成 BreadcrumbList
    function generateBreadcrumbList() {
        var path = window.location.pathname;
        var items = [{ name: "首页", url: BASE_URL + "/" }];

        if (path.indexOf("/tools/") !== -1) {
            // 工具详情页：首页 > 工具库 > 工具名
            items.push({ name: "工具库", url: BASE_URL + "/#tools" });
            var h1 = document.querySelector("h1");
            var toolName = h1 ? h1.textContent.trim() : document.title.split(" - ")[0];
            items.push({ name: toolName, url: BASE_URL + path });
        } else if (path.indexOf("/blog/") !== -1) {
            var blogIndexPath = path.replace(/\/$/, "").replace(/index\.html$/, "");
            if (blogIndexPath.endsWith("/blog")) {
                // 博客列表页：首页 > 博客
                items.push({ name: "博客", url: BASE_URL + "/blog/" });
            } else {
                // 博客文章页：首页 > 博客 > 文章标题
                items.push({ name: "博客", url: BASE_URL + "/blog/" });
                var h1 = document.querySelector("h1");
                var title = h1 ? h1.textContent.trim() : document.title.split(" | ")[0];
                items.push({ name: title, url: BASE_URL + path });
            }
        } else {
            // 根目录静态页面
            var pageMap = {
                "about.html": "关于我们",
                "privacy.html": "隐私政策",
                "terms.html": "使用条款"
            };
            var filename = path.split("/").pop();
            if (pageMap[filename]) {
                items.push({ name: pageMap[filename], url: BASE_URL + "/" + filename });
            } else {
                return; // 首页不需要面包屑
            }
        }

        var breadcrumb = {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": items.map(function (item, idx) {
                return {
                    "@type": "ListItem",
                    "position": idx + 1,
                    "name": item.name,
                    "item": item.url
                };
            })
        };
        injectJSONLD(breadcrumb);
    }

    // 首页 ItemList JSON-LD（展示工具列表）
    function generateHomepageItemList(featuredTools) {
        var itemList = {
            "@context": "https://schema.org",
            "@type": "ItemList",
            "name": "热门AI工具推荐",
            "description": "精选AI工具评测，覆盖对话、绘画、编程、视频等类别",
            "url": BASE_URL + "/",
            "itemListOrder": "https://schema.org/ItemListOrderDescending",
            "itemListElement": featuredTools.map(function (tool, idx) {
                return {
                    "@type": "ListItem",
                    "position": idx + 1,
                    "name": tool.name,
                    "url": BASE_URL + "/tools/" + tool.id + ".html",
                    "description": tool.description
                };
            })
        };
        injectJSONLD(itemList);
    }

    // 博客列表页 ItemList JSON-LD
    function generateBlogItemList(posts) {
        var itemList = {
            "@context": "https://schema.org",
            "@type": "ItemList",
            "name": "AI工具博客文章",
            "description": "AI工具深度评测、使用教程、行业动态和选购指南",
            "url": BASE_URL + "/blog/",
            "itemListOrder": "https://schema.org/ItemListOrderDescending",
            "itemListElement": posts.map(function (post, idx) {
                return {
                    "@type": "ListItem",
                    "position": idx + 1,
                    "name": post.title,
                    "url": BASE_URL + "/blog/" + post.id + ".html",
                    "description": post.summary
                };
            })
        };
        injectJSONLD(itemList);
    }

    // ── 8. 初始化 ────────────────────────────────────────────────
    document.addEventListener("DOMContentLoaded", function () {
        // 注入导航栏按钮和回到顶部
        injectNavExtras();
        injectBackToTop();

        // 生成 BreadcrumbList（所有子页面）
        generateBreadcrumbList();

        // 首页专用：渲染卡片
        var isHomepage = !!document.getElementById("toolsGrid");
        if (isHomepage && typeof TOOLS_DATA !== "undefined") {
            showSkeleton("toolsGrid", 6);

            setTimeout(function () {
                var featured = TOOLS_DATA.filter(function (t) { return t.featured; });
                renderToolCards(featured, "toolsGrid");
                applyStaggerAnimations(document.getElementById("toolsGrid"));

                // 首页 ItemList JSON-LD
                generateHomepageItemList(featured);

                if (document.getElementById("blogGrid") && typeof BLOG_POSTS !== "undefined") {
                    renderBlogCards(BLOG_POSTS, "blogGrid");
                    applyStaggerAnimations(document.getElementById("blogGrid"));
                }

                // 绑定搜索
                var searchInput = document.getElementById("searchInput");
                if (searchInput) {
                    searchInput.addEventListener("input", function () {
                        searchTools(this.value, TOOLS_DATA);
                    });
                }

                // 绑定Newsletter
                var newsletterForm = document.querySelector(".newsletter form");
                if (newsletterForm) {
                    newsletterForm.addEventListener("submit", function (e) {
                        e.preventDefault();
                        var email = e.target.querySelector("input[type=email]").value;
                        var btn = e.target.querySelector("button");
                        var originalText = btn.textContent;
                        btn.textContent = "已订阅 ✓";
                        btn.style.background = "#22c55e";
                        btn.disabled = true;
                        e.target.querySelector("input[type=email]").value = "";
                        setTimeout(function () {
                            btn.textContent = originalText;
                            btn.style.background = "";
                            btn.disabled = false;
                        }, 3000);
                    });
                }

                // 启动动画
                initScrollAnimations();
                revealVisibleElements();
                setTimeout(revealVisibleElements, 500);
            }, 100);
        } else {
            // 非首页：直接启动动画
            initScrollAnimations();
            revealVisibleElements();
            setTimeout(revealVisibleElements, 500);

            // 博客列表页 ItemList
            var isBlogIndex = window.location.pathname.replace(/\/$/, "").endsWith("/blog") ||
                              window.location.pathname.endsWith("/blog/index.html");
            if (isBlogIndex && typeof BLOG_POSTS !== "undefined") {
                generateBlogItemList(BLOG_POSTS);
            }
        }
    });

    // 兜底
    window.addEventListener("load", function () {
        revealVisibleElements();
    });

    // 导出工具函数供其他页面使用
    window.EnhanceKit = {
        toggleTheme: toggleTheme,
        applyStaggerAnimations: applyStaggerAnimations,
        revealVisibleElements: revealVisibleElements,
        initScrollAnimations: initScrollAnimations
    };
})();
