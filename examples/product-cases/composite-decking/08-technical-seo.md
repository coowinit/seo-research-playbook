# Composite Decking vs. Wood：技术 SEO 放行示例

本文件演示 `composite decking vs wood` 比较页在正式上线时应该怎样进行基础技术放行。

> 说明：案例没有真实线上域名、服务器响应和 Search Console 数据，因此不虚构状态码、性能分数或索引结果。以下内容是上线前应确认的技术目标与验证方法。

## 1. 目标网址

假设正式网址：

```text
https://www.example.com/guides/composite-decking-vs-wood/
```

页面属于独立比较型指南，应作为一个可索引的规范页面存在。

---

## 2. 抓取与索引目标

| 项目 | 目标 |
|---|---|
| 公开访问 | 无登录要求 |
| robots.txt | 不阻止 `/guides/` |
| robots Meta | `index, follow` 或使用默认可索引状态 |
| HTTP 状态 | 正常发布后应返回 `200` |
| 内部链接 | 从相关 Decking 产品 / 指南页面可以发现 |
| Search Console | 发布后使用网址检查验证 |

不建议为了“SEO 更安全”同时加入多余的 robots 指令。

---

## 3. Canonical

如果该页面是唯一正式版本：

```html
<link rel="canonical" href="https://www.example.com/guides/composite-decking-vs-wood/">
```

同时尽量保证：

- 内部链接指向这一正式 URL。
- Sitemap 使用这一 URL。
- 带追踪参数的访问不会变成新的主要索引版本。
- 没有另一篇 `/blog/composite-vs-wood/` 同时承担完全相同职责。

如果旧文章未来合并到本页，应根据真实迁移情况使用永久重定向，而不是只修改 Canonical。

---

## 4. Sitemap

本页符合：

```text
希望索引
+
独立规范网址
+
真实内容页面
```

因此正式上线后应进入对应 XML Sitemap。

不应把：

- 旧重定向网址
- 预览网址
- 参数版本

同时作为独立页面提交。

---

## 5. JavaScript 与主要内容

本页正文、比较表、主要标题和核心内部链接不需要依赖客户端 JavaScript 才生成。

建议：

- 文章正文直接存在于可渲染 HTML 中。
- Accordion / FAQ 即使使用 JavaScript 增强，内容本身仍应稳定存在。
- `Explore Composite Decking`、规格页和样品申请使用正常链接。
- 图片 Lazy Load 不应导致首屏核心图片长期不可见。

如果页面使用前端框架，正式发布后应通过 Search Console 网址检查查看 Google 渲染页面是否仍包含完整主要内容。

---

## 6. 结构化数据候选

根据真实页面实现，可以考虑：

- `BreadcrumbList`
- `Article`（如果页面符合文章 / 指南性质）
- 真实站点层面的 Organization 信息

不要因为正文包含 FAQ 就自动假设必须加入 FAQ 结构化数据，也不要标记不存在的产品价格、评分或评论。

结构化数据应与页面真实可见内容一致，并在发布前验证。

---

## 7. HTTP 与未来维护

### 页面正常存在

```text
200
```

### 未来改网址

例如：

```text
/guides/composite-decking-vs-wood/
→
/resources/composite-decking-vs-wood/
```

如果是永久迁移，应：

```text
旧 URL
↓ 永久重定向
新 URL
```

并同步更新：

- 内部链接
- Canonical
- Sitemap

### 如果未来内容完全删除且没有替代

不应机械重定向到首页，应根据真实情况返回 `404` / `410`。

---

## 8. Core Web Vitals 重点

本页可能的性能风险：

- 首屏 Composite / Wood 对比大图。
- 多张项目实景图。
- 比较表或响应式脚本。
- 第三方询价 / 聊天工具。

真实上线后优先观察：

```text
LCP
INP
CLS
```

不在案例中虚构具体结果。

如果 LCP 较差，先检查首屏主图和服务器 / 缓存；如果 CLS 较差，优先检查图片尺寸、Cookie Banner 和异步组件。

---

## 9. 发布后验证

正式发布后：

1. 浏览器确认最终 URL 与状态。
2. 检查页面源代码 / 渲染 DOM 中 Canonical。
3. 检查 robots Meta。
4. 检查主要内部链接。
5. 验证结构化数据（如使用）。
6. 使用 Search Console 网址检查。
7. 确认 Sitemap 已包含最终网址。
8. 后续进入 [06-performance-review.md](06-performance-review.md) 的搜索表现观察。

**当前状态：技术 SEO 目标已规划，待真实网站上线后验证。**
