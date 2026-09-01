# 技术 SEO：从可访问到可索引、可理解与可加载

本模块用于检查网站和页面是否具备稳定进入搜索引擎抓取、渲染与索引流程的技术条件。

技术 SEO 的目标不是“通过更多技术标签获得额外排名”，而是减少以下问题：

```text
页面存在
但搜索引擎找不到
↓
找到了
但抓取受阻
↓
抓取到了
但不允许索引
↓
允许索引
但规范网址信号冲突
↓
网址正确
但关键内容无法渲染
↓
内容可见
但结构化数据与页面不一致
↓
最终页面体验和稳定性仍然较差
```

因此技术 SEO 应优先解决“资格与可访问性”，再讨论页面表现。

---

## 1. 本模块的边界

本模块重点处理：

- Googlebot 是否可以访问重要页面
- `robots.txt`
- `robots` Meta 与 `X-Robots-Tag`
- `noindex`
- Canonical
- XML Sitemap
- HTTP 状态码
- 301 / 302 等重定向
- 404、410 与 Soft 404
- JavaScript 渲染与关键内容可见性
- 结构化数据（Schema）
- Core Web Vitals
- 移动端与关键资源可访问性
- Search Console 中的技术验证

以下内容暂不展开为完整教程：

- 服务器安全与系统加固
- CDN 配置细节
- 数据库优化
- 主机容量规划
- 完整国际站点架构
- 日志分析自动化
- 大型电商参数抓取预算工程

这些内容只有在真实项目需要时再扩展，避免技术 SEO 变成运维百科。

---

## 2. 技术 SEO 的推荐排查顺序

遇到“页面没有流量”“页面没有排名”时，不要直接从改标题开始。

推荐按以下顺序检查：

```text
1. 网址是否真实存在并可公开访问
↓
2. Googlebot 是否允许抓取
↓
3. 页面是否允许索引
↓
4. HTTP 状态码是否符合页面真实状态
↓
5. Canonical 是否指向正确规范网址
↓
6. Sitemap 与内部链接是否指向规范网址
↓
7. Google 渲染后是否仍能看到主要内容与链接
↓
8. 结构化数据是否真实、有效并与可见内容一致
↓
9. 移动端和 Core Web Vitals 是否存在明显体验问题
↓
10. 再回到内容、搜索意图、竞争和转化分析
```

Google Search 的最低技术资格可以简单理解为：Googlebot 能访问、页面能正常工作，并且页面包含可索引内容。满足这些条件并不保证一定被索引或获得排名，但如果这些基础条件不满足，后续内容优化可能没有意义。

---

## 3. 抓取与索引必须分开理解

这是技术 SEO 最容易混淆的一组概念。

### 抓取

抓取回答：

> 搜索引擎机器人能否请求这个网址和相关资源？

常见影响因素：

- 内部链接是否可发现
- `robots.txt`
- 登录限制
- 网络 / DNS / 服务器错误
- 重要 CSS、JavaScript 或图片资源是否被错误阻止

### 索引

索引回答：

> 搜索引擎是否允许并最终选择把这个页面加入搜索索引？

常见影响因素：

- `noindex`
- HTTP 状态码
- Canonical 与重复页面
- 页面是否有可索引主要内容
- 页面质量与重复程度

### 核心原则

```text
可抓取 ≠ 一定索引
允许索引 ≠ 一定收录
收录 ≠ 一定获得展示或排名
```

不要把这几个阶段混成一个“收录问题”。

---

## 4. robots.txt：控制抓取，不是删除索引

`robots.txt` 的主要作用是告诉支持该协议的搜索引擎抓取程序哪些路径可以或不可以请求。

例如：

```text
User-agent: *
Disallow: /private-tools/

Sitemap: https://www.example.com/sitemap.xml
```

这只表示不希望抓取 `/private-tools/`，并不等同于：

> “保证这些网址永远不会出现在 Google。”

如果搜索引擎通过其他链接知道一个被 `robots.txt` 阻止的网址，它仍可能知道这个网址存在，但无法读取页面中的 `noindex`。

### 因此不要这样理解

```text
robots.txt = noindex
```

正确理解：

```text
robots.txt
→ 控制抓取

noindex
→ 控制是否允许进入搜索索引
```

### 使用原则

- 不要无意阻止重要产品、分类、文章、CSS 或 JavaScript 资源。
- 不要把 `robots.txt` 当作保护隐私内容的方法。
- 真正私密的后台、客户文件或内部资料应使用登录、权限或服务器访问控制。
- 修改 `robots.txt` 前先明确每条规则的业务目的。
- 不要从其他网站复制一份 `robots.txt` 后直接使用。

---

## 5. noindex、robots Meta 与 X-Robots-Tag

HTML 页面常见方式：

```html
<meta name="robots" content="noindex">
```

它表示不希望支持该指令的搜索引擎把页面保留在搜索结果中。

对于 PDF、文件或需要通过响应头控制的资源，可以使用 `X-Robots-Tag`。

### 一个重要冲突

如果页面同时：

```text
robots.txt 阻止抓取
+
页面包含 noindex
```

搜索引擎可能因为无法抓取页面，而根本看不到 `noindex`。

所以如果目标是让一个公开可访问页面退出索引，通常应确保搜索引擎可以访问并读取 `noindex`，而不是先用 `robots.txt` 把它挡住。

### 常见适用场景

可能考虑 `noindex`：

- 没有独立搜索价值的内部搜索结果页
- 测试或临时公开页面
- 某些账户 / 流程辅助页面
- 业务明确不希望进入搜索结果的可访问页面

是否使用必须结合真实网站架构判断，不应根据“这个页面内容少”自动 `noindex`。

---

## 6. Canonical：统一重复网址信号

Canonical 用于帮助搜索引擎理解一组重复或高度相似页面中，哪个网址是首选规范版本。

HTML 中常见写法：

```html
<link rel="canonical" href="https://www.example.com/products/composite-decking/">
```

### 典型重复来源

- HTTP 与 HTTPS
- www 与非 www
- 带追踪参数的网址
- 筛选 / 排序参数
- 同一内容存在多个分类路径
- 打印版或其他页面变体
- 测试站意外公开

### 推荐原则

- 重要独立页面通常使用一致的自指 Canonical。
- Canonical 指向的页面应是真正希望搜索引擎使用的版本。
- 内部链接尽量直接链接规范网址。
- Sitemap 尽量只提交规范网址。
- 不要一边 Canonical 到 A，一边内部链接和 Sitemap 大量指向 B。
- 不要把 Canonical 当作解决完全不同页面重复内容的万能工具。

### 信号强度不要混淆

对于希望彻底淘汰的旧网址，如果已有明确替代页面，通常使用永久重定向比仅仅放 Canonical 更直接。

可以简单理解：

```text
旧网址永久迁移
→ 301 / 308 等永久重定向

重复页面仍需保留给用户访问
→ 可考虑 rel="canonical"

Sitemap
→ 补充规范网址信号，不替代前两者
```

Canonical 是搜索引擎最终选择过程中的重要信号，但不是绝对命令。

---

## 7. XML Sitemap：帮助发现和表达首选网址

XML Sitemap 的主要作用是：

- 告诉搜索引擎网站有哪些重要网址。
- 帮助发现新页面或深层页面。
- 为大型或更新频繁的网站提供更清晰的网址清单。
- 可以扩展图片、视频、新闻或多语言信息。

### 应该包含什么

原则上优先包含：

```text
希望被索引
+
返回正常状态
+
属于规范版本
```

的网址。

### 不建议混入

- `noindex` 页面
- 404 / 410 页面
- 已永久重定向的网址
- 明确 Canonical 到其他网址的重复版本
- 测试和内部页面

### 重要限制

Sitemap 是发现和规范化的辅助信号，不是：

```text
提交 Sitemap
= Google 必须收录
```

大型 Sitemap 还应遵守文件大小和 URL 数量限制；超出时使用 Sitemap Index 拆分。

---

## 8. HTTP 状态码：页面状态必须说实话

HTTP 状态码是搜索引擎理解网址状态的基础信号之一。

### 常见状态

| 状态 | 常见含义 | SEO 处理思路 |
|---|---|---|
| `200` | 页面正常 | 适用于真实可用页面 |
| `301` / `308` | 永久迁移 | 旧网址有明确永久替代页面 |
| `302` / `307` | 临时跳转 | 临时变化时使用 |
| `404` | 未找到 | 页面不存在且没有合适替代 |
| `410` | 已移除 | 明确永久移除且无替代 |
| `429` | 请求过多 | 服务器过载 / 限流信号 |
| `500` / `502` / `503` | 服务器错误 | 应优先修复，不作为长期页面状态 |

### 不要制造 Soft 404

错误做法：

```text
页面内容：Sorry, product not found
HTTP 状态：200
```

这类页面可能被判断为 Soft 404。

如果页面确实不存在且没有替代，应返回真实的 `404` 或 `410`。

如果页面已经迁移到明确替代页面，则使用永久重定向通常更合理。

### B2B 产品网站常见错误

产品下架以后，不要机械把所有旧产品都重定向到首页。

应先判断：

```text
有真正同类替代产品
→ 可以重定向到最接近的新页面

没有合适替代
→ 404 / 410 往往比无关重定向更诚实

页面仍有长期资料 / 外链 / 客户价值
→ 可以保留页面并明确停售状态
```

---

## 9. 重定向：只在页面关系真实时使用

重定向用于网址迁移，而不是“把所有错误都导向首页”。

### 永久重定向常见场景

- 网站改版更换网址结构
- HTTP → HTTPS
- www / 非 www 统一
- 页面合并
- 产品或文章移动到新的永久网址

### 临时重定向常见场景

- 短期活动
- 临时维护流程
- 页面未来会恢复到原网址

### 检查重点

- 避免长重定向链。
- 避免重定向循环。
- 内部链接及时更新为最终网址。
- Sitemap 使用最终网址。
- 迁移前后 Canonical 信号保持一致。
- 不要把大量无关旧页面全部重定向到首页或同一个分类页。

---

## 10. JavaScript SEO：关键内容不能只在“理想浏览器状态”存在

Google 可以执行 JavaScript，但这不代表任何 JavaScript 网站都天然没有搜索问题。

技术检查应回答：

- 初始 HTML 是否包含主要主题或基本内容？
- Google 渲染后是否能看到完整正文？
- 重要内部链接是否最终形成正常的 `<a href="...">`？
- 页面是否依赖用户点击、滚动或特定交互后才加载关键内容？
- JavaScript 出错时页面是否变成空白或近乎空白？
- 重要资源是否被 `robots.txt` 错误阻止？
- 路由是否返回正确状态码？
- 单页应用不存在的路由是否错误返回 `200`？

### 对企业网站的建议

如果产品名称、规格、正文、分类关系和核心链接本来就可以直接输出到 HTML，就没有必要为了“更现代”而强制依赖客户端 JavaScript 才生成。

技术复杂度应该服务于真实功能，而不是为了技术本身增加抓取风险。

---

## 11. 结构化数据（Schema）：描述真实页面，不是制造内容

结构化数据用于以机器可读方式描述页面实体和内容。

对于企业和产品型网站，可能涉及：

- Organization
- Product
- BreadcrumbList
- Article
- VideoObject
- 其他 Google 当前支持且符合页面真实内容的类型

### 核心原则

- 结构化数据必须和用户可见内容一致。
- 不要标记页面上不存在的价格、评分、库存、评论或产品参数。
- 不要因为 Schema.org 存在某个类型，就假设 Google 一定支持对应富媒体搜索结果。
- 不要为了“看起来更完整”把所有 Schema 类型堆在每个页面。
- 优先使用最能代表页面主要内容的类型。
- 发布前使用 Google Rich Results Test 检查 Google 支持的富媒体结果类型。
- 对通用 Schema.org 语法，可再使用 Schema Markup Validator。

### JSON-LD

Google 当前支持 JSON-LD、Microdata 和 RDFa；对于大多数普通网站，JSON-LD 往往更容易独立维护。

正确的结构化数据也**不保证**一定展示富媒体搜索结果。

---

## 12. Core Web Vitals：性能是用户体验问题，不是单一分数竞赛

当前核心指标包括：

| 指标 | 主要衡量 | Good 参考目标 |
|---|---|---:|
| LCP | 主要内容加载速度 | ≤ 2.5 秒 |
| INP | 交互响应 | < 200 毫秒 |
| CLS | 视觉稳定性 | < 0.1 |

### 两类数据要分开

#### 真实用户数据

用于回答：

> 真实用户长期使用网站时表现如何？

例如 Search Console 的 Core Web Vitals 报告和 CrUX 相关数据。

#### 实验室数据

用于回答：

> 当前测试环境中具体哪里需要排查？

例如 Lighthouse / PageSpeed Insights 的实验室诊断。

不要因为一次 Lighthouse 得分下降几分就频繁重构网站。

### 企业网站常见优化方向

- 首屏大图过大
- 大量未压缩图片
- 字体加载阻塞
- 第三方聊天 / 跟踪脚本过多
- JavaScript 体积过大
- 轮播和视频首屏加载过重
- 未设置图片尺寸导致布局跳动
- Cookie / 弹窗加载后推移正文

优化时应优先处理真实用户影响最大的部分。

---

## 13. 移动端与关键资源

企业网站即使主要客户使用桌面设备，也不能忽略移动端技术可访问性。

至少检查：

- 主要内容移动端不隐藏或删减。
- 标题、正文、产品规格和链接在移动端可访问。
- 交互不依赖只能在桌面执行的 Hover。
- 菜单和重要内部链接移动端可使用。
- 图片和视频不会导致严重横向溢出。
- 弹窗、Cookie Banner 和询价组件不会遮挡主要内容。
- 重要 CSS / JavaScript 资源可被搜索引擎访问。

响应式设计本身不是 SEO 奖励项，但可以显著降低多套页面维护和信号不一致风险。

---

## 14. 国际企业网站的基础技术检查（按需）

如果网站存在多个语言或国家版本，额外检查：

- 每个语言 / 国家版本是否有稳定独立网址。
- Canonical 与语言版本关系是否合理。
- 不要把真正需要独立索引的语言版本全部 Canonical 到英语页面。
- 页面语言和实际正文保持一致。
- `hreflang` 等国际化标记应建立在真实对应页面关系上。
- 自动跳转不能阻止搜索引擎或用户访问其他语言版本。

完整国际 SEO 架构后续按真实项目需求单独扩展，不在本版建立复杂规则。

---

## 15. 技术 SEO 的常用验证工具

### Google Search Console

重点使用：

- 网址检查
- 网页索引报告
- Sitemap
- Core Web Vitals
- 富媒体搜索结果相关报告（如适用）
- 抓取统计（需要时）

### 浏览器开发者工具

用于：

- 查看网络状态码
- JavaScript 错误
- 响应头
- 加载顺序
- 页面移动端表现

### 其他工具

按项目需要使用：

- PageSpeed Insights
- Lighthouse
- Rich Results Test
- Schema Markup Validator
- 抓取工具 / 站点审计工具

工具只用于发现和验证问题，不应让“工具报了多少个问题”替代风险判断。

---

## 16. 技术问题如何排序

建议同时记录：

### 严重程度

- 阻断：重要页面无法访问、无法抓取或错误 noindex
- 高：Canonical 大面积冲突、5xx、大量错误重定向、关键内容无法渲染
- 中：Sitemap 不一致、结构化数据错误、重要内部资源问题
- 低：不会直接阻断抓取索引的规范性与性能改进

### 影响范围

- 全站
- 某个页面类型
- 某个目录
- 单个重要页面
- 少量低价值页面

### 修复优先级

不要简单按照工具的红色警告数量排序。

可以使用：

```text
优先级
=
严重程度
×
影响范围
×
业务重要性
```

先修“影响整个产品目录的错误 noindex”，通常比先修“某篇低流量文章的一条 Schema 警告”更有价值。

---

## 17. 修改技术设置时的风险控制

技术 SEO 很容易出现“一次改动影响整个网站”的情况。

修改以下内容前应特别谨慎：

- `robots.txt`
- 全站 robots Meta
- Canonical 模板
- WordPress SEO 插件索引设置
- 全站重定向规则
- HTTP / HTTPS 或域名规则
- Sitemap 生成逻辑
- JavaScript 路由
- 结构化数据模板

推荐流程：

```text
确认问题
↓
明确受影响范围
↓
备份 / 记录原配置
↓
小范围测试
↓
上线
↓
重新抓取验证
↓
Search Console 观察
↓
记录结果
```

不要为了“技术 SEO 更完整”频繁修改已经稳定工作的底层配置。

---

## 18. 一个页面的基础技术放行条件

重要 SEO 页面发布或大改后，至少确认：

- [ ] 正式网址可公开访问
- [ ] 返回预期 HTTP 状态码
- [ ] Googlebot 没有被错误阻止
- [ ] 页面没有误设 `noindex`
- [ ] Canonical 指向预期规范网址
- [ ] 内部链接使用规范网址
- [ ] Sitemap 状态与页面目标一致
- [ ] 主要正文和链接在渲染后可见
- [ ] 结构化数据与真实内容一致（如使用）
- [ ] 移动端主要内容可正常使用
- [ ] 没有明显阻断性的性能问题
- [ ] 发布后已安排 Search Console 验证

完成后再进入搜索表现和业务转化观察。

---

## 19. 官方参考资料

本模块优先以 Google Search Central 当前官方说明为技术边界，重要规则正式实施前仍应重新核验最新文档：

- Google Search Technical Requirements  
  <https://developers.google.com/search/docs/essentials/technical>
- Crawling and Indexing  
  <https://developers.google.com/search/docs/crawling-indexing>
- Canonicalization  
  <https://developers.google.com/search/docs/crawling-indexing/canonicalization>
- Specify a Canonical URL  
  <https://developers.google.com/search/docs/crawling-indexing/consolidate-duplicate-urls>
- Build and Submit a Sitemap  
  <https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap>
- JavaScript SEO Basics  
  <https://developers.google.com/search/docs/crawling-indexing/javascript/javascript-seo-basics>
- Structured Data Guidelines  
  <https://developers.google.com/search/docs/appearance/structured-data/sd-policies>
- Core Web Vitals  
  <https://developers.google.com/search/docs/appearance/core-web-vitals>

---

## 20. 本模块的最终原则

技术 SEO 可以浓缩成一句话：

> **让正确的页面，用正确的网址和状态，以搜索引擎能够访问、理解和稳定处理的方式存在。**

技术配置不能替代内容质量，内容质量也不能修复抓取、索引和状态码错误。

两者必须在同一工作流中配合。
