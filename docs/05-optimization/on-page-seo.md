# 页面 SEO：从研究结果到可发布页面

本模块用于把关键词研究、页面映射、搜索结果研究和内容简报真正落实到网页本身。

页面 SEO 的目标不是把关键词尽可能多地塞进页面，而是让以下信息保持一致：

```text
页面职责
↓
搜索意图
↓
SEO 标题
↓
主标题与正文结构
↓
网址
↓
图片与链接
↓
行动引导
```

当这些元素围绕同一个用户任务组织时，页面通常会同时更容易被用户理解、被搜索引擎理解，也更容易完成业务转化。

---

## 1. 页面 SEO 的边界

本模块重点处理：

- SEO 标题（`<title>`）
- Meta Description
- 页面主标题与 H1-H6 结构
- 网址设计
- 正文首屏与核心答案
- 图片、文件名与 Alt
- 内部链接
- 锚文本
- 面包屑
- 页面正文与产品 / 转化入口
- 页面级发布前检查

以下内容只做基础确认，详细实现参见 [技术 SEO](technical-seo.md)：

- Canonical
- robots / noindex
- XML Sitemap
- HTTP 状态码
- 结构化数据（Schema）
- JavaScript SEO
- Core Web Vitals

---

## 2. 页面 SEO 的第一原则：先确认页面职责

在优化标题、H1 或关键词之前，先回答三个问题：

1. 这个页面主要解决什么搜索需求？
2. 这个页面是什么类型？
3. 用户完成阅读以后，最合理的下一步是什么？

例如：

| 页面 | 主要职责 | 主要下一步 |
|---|---|---|
| 产品分类页 | 了解一类产品并进入具体产品 | 查看产品、获取目录、询价 |
| 产品详情页 | 判断具体产品是否合适 | 下载规格、申请样品、询价 |
| 比较文章 | 帮助用户理解差异并做选择 | 查看对应产品或继续研究 |
| 安装指南 | 完成安装或判断施工要求 | 下载安装手册、查看技术支持 |
| 制造商落地页 | 判断供应商能力 | 获取报价、样品、工厂资料 |

如果页面职责错误，继续优化关键词通常只会把错误页面优化得更“像 SEO 页面”。

---

## 3. SEO 标题（`<title>`）

SEO 标题是搜索结果标题的重要来源之一，但 Google 也可能结合页面主标题、H1、显著文本、站内外锚文本等信息生成最终标题链接。

### 推荐原则

- 每个重要页面有独立、准确的 `<title>`。
- 描述页面真实内容，不写空泛的 `Home`、`Products`、`Article`。
- 核心主题尽量靠前，但不要求机械精确匹配关键词。
- 品牌名可以简洁放在结尾或开头，不要让品牌模板占据大部分标题。
- 避免关键词重复和同义词堆砌。
- 避免网站大量页面使用几乎相同的模板标题。
- 标题与页面可见主标题、正文内容保持一致。

### 不设置固定字符数

不要把“50–60 个字符”当成硬规则。

`<title>` 本身没有固定字符上限，Google 会根据设备和搜索结果空间决定是否截断。真正应该控制的是：

> **标题是否简洁、独立、准确，并能让用户迅速判断页面是否相关。**

### 示例

不推荐：

```text
Composite Decking, Best Composite Decking, WPC Decking, Composite Deck Boards | Brand
```

更合适：

```text
Composite Decking vs Wood: Cost, Maintenance and Lifespan | Brand
```

---

## 4. Meta Description

Meta Description 可以向 Google 提供页面摘要候选，但 Google 可能根据具体查询直接从页面正文生成不同摘要。

因此它的作用不是“把关键词写满”，而是：

- 准确概括页面。
- 帮助搜索用户判断是否值得点击。
- 补充标题没有表达完整的信息。
- 对重要产品页和核心内容页尽量保持独立。

### 不设置固定字符数

同样不要把“150–160 个字符”作为强制标准。

Google 的搜索摘要会根据设备和搜索场景截断，也可能完全不采用 Meta Description。

建议重点检查：

- 是否准确概括页面。
- 是否与标题形成互补，而不是简单重复。
- 是否包含用户真正关心的差异或价值。
- 是否没有关键词列表式堆砌。

### 示例

```text
Compare composite decking and wood across upfront cost, maintenance, lifespan, heat, appearance and project conditions before choosing a deck material.
```

---

## 5. H1-H6 与页面标题结构

标题层级首先服务于内容理解和文档结构，不是关键词排名公式。

### H1

建议页面有一个**清晰、最突出的主要标题**，通常使用 H1。

不需要为了 SEO 重复多个相似 H1，例如：

```text
H1: Composite Decking
H1: Best Composite Decking
H1: Composite Decking Products
```

更重要的是让页面的主要标题明显、准确，并和 `<title>`、正文主题保持一致。

`<title>` 与 H1 不要求完全相同：

```text
<title>
Composite Decking vs Wood: Cost, Maintenance and Lifespan | Brand

H1
Composite Decking vs Wood: Which Is Better for Your Project?
```

### H2 / H3

按照内容从属关系组织：

```text
H1 页面主题
├── H2 主要问题 A
│   ├── H3 子问题 A1
│   └── H3 子问题 A2
├── H2 主要问题 B
└── H2 结论 / 下一步
```

不要：

- 为了视觉字号随意跳级。
- 为了关键词把每个 H2 都写成同一种句式。
- 把普通按钮、标签或装饰文本都做成标题标签。

---

## 6. 网址设计

网址的第一目标是**稳定、可理解、可维护**。

### 推荐原则

- 使用可读、描述性的单词。
- 与目标市场语言保持一致。
- 单词之间优先使用连字符 `-`。
- 尽量使用小写。
- 避免无意义参数、长 ID 和复杂层级。
- 不为了覆盖所有关键词把网址写得很长。
- 没有真实时效需求时，避免把年份写进长期内容网址。

例如：

```text
/guides/composite-decking-vs-wood/
```

通常优于：

```text
/index.php?id=98123&cat=7&kw=composite_decking_vs_wood_best_2026
```

### 已有网址不要轻易修改

如果一个页面已经被索引、获得内部链接或外部链接，不要只是因为：

> “我想把关键词加进网址。”

就修改 URL。

修改已有网址意味着还要处理重定向、Canonical、内部链接、站点地图以及可能的搜索波动。是否修改应从页面架构和长期维护价值判断，而不是从关键词密度判断。

---

## 7. 首屏与核心答案

搜索用户进入页面后，应该较快确认：

- 这里是不是我要找的内容？
- 这个页面能解决什么问题？
- 主要结论是什么？

因此页面开头通常需要：

```text
清晰 H1
↓
简短背景 / 核心答案
↓
必要的比较条件或限制
↓
进入详细内容
```

避免：

- 大段品牌历史后才进入主题。
- 为凑字数写几百字概念性开场。
- 比较文章在开头直接宣布自家产品“全面胜出”。
- 核心限制和适用条件藏到文章最后。

---

## 8. 正文与关键词

关键词用于帮助定义主题，不用于控制写作密度。

建议：

- 核心主题自然出现在标题、主标题和正文中。
- 根据真实用户问题自然使用相关术语和同义表达。
- 重要专业术语优先使用行业真实叫法。
- 产品型号、材料体系和适用条件保持准确。
- 不要求每个关键词变体都在页面出现。

不要设定：

```text
关键词密度 2%
主关键词出现 12 次
每个 H2 必须含关键词
```

这类规则容易降低可读性，也不能替代搜索意图和内容质量。

---

## 9. 图片、文件名与 Alt

对于产品型和建材网站，图片不仅是装饰，也是产品理解和经验证据的一部分。

### 重要图片应尽量提供

- 真实产品图片
- 结构剖面
- 表面细节
- 安装节点
- 应用项目
- 比较图
- 测试或说明图

### 图片文件名

使用简洁描述性文件名，例如：

```text
composite-decking-board-profile.webp
wpc-wall-cladding-rainscreen-installation.webp
```

避免：

```text
IMG_8291.webp
product-keyword-best-cheap-factory-wholesale.webp
```

### Alt

Alt 应描述图片在当前页面中的内容与作用，而不是关键词列表。

例如：

```html
<img
  src="/images/composite-decking-board-profile.webp"
  alt="Capped composite decking board showing the grooved side profile"
>
```

如果是纯装饰图片，可根据无障碍语义使用空 Alt，而不是强行塞关键词。

### 页面上下文

重要图片应放在相关正文附近。图片周围的标题、说明和正文也帮助用户理解图片用途。

对于需要被 Google 图片搜索发现的重要图片，优先使用正常的 `<img src="...">` 等可发现 HTML 图片方式，而不要只作为 CSS 背景图存在。

---

## 10. 内部链接

内部链接同时承担三种作用：

1. 帮助用户继续完成任务。
2. 帮助搜索引擎发现页面。
3. 帮助表达网站页面之间的主题关系。

### 不规定固定数量

不要规定：

```text
每篇文章必须 3 个内部链接
```

一篇简单支持文章可能只需要少量链接，一个大型主题页面则可能自然需要更多链接。

判断标准是：

> **这个链接是否帮助用户继续理解、比较或采取下一步行动？**

### 链接实现

重要内部链接应使用正常可抓取的链接形式：

```html
<a href="/composite-decking/">Explore our composite decking range</a>
```

不要仅依赖没有真实 `href` 的点击事件来承担重要导航。

---

## 11. 锚文本

好的锚文本应：

- 描述目标页面。
- 简洁。
- 能脱离上下文大致理解去向。
- 与当前句子自然结合。

不推荐：

```text
Click here
Read more
Learn more
Article
Website
```

更合适：

```text
composite decking installation guide
WPC wall cladding product range
request a composite decking sample
```

但也不要为了 SEO 把所有锚文本做成完全相同的精确关键词。

---

## 12. 面包屑

面包屑首先是页面导航和网站层级提示。

例如：

```text
Home
> Resources
> Decking Guides
> Composite Decking vs Wood
```

或者产品页面：

```text
Home
> Products
> Composite Decking
> Capped Composite Decking
```

推荐：

- 路径符合用户理解的网站层级。
- 各级可以正常点击返回重要上级页面。
- 不为了 SEO 人为制造很深的目录。
- 当前页名称与页面实际主题一致。

面包屑结构化数据的实现属于技术 SEO 范围，本模块只处理页面可见导航本身；实现方式参见 [技术 SEO](technical-seo.md)。

---

## 13. 页面正文与转化入口

页面 SEO 不能和商业目标分开。

### 信息型 / 比较型页面

用户通常还没有准备立即询价，因此可以优先提供：

- 对应产品页
- 技术资料
- 产品规格
- 样品申请
- 相关指南

CTA 不应反复打断阅读。

### 商业比较 / B2B 采购页面

可以更明确提供：

- Request a Quote
- Request Samples
- Download Catalog
- View Specifications
- Contact Sales

### 产品详情页

正文不能只剩：

```text
图片
产品名称
询价按钮
```

至少应该让用户理解：

- 这是什么产品
- 适用于什么场景
- 关键规格是什么
- 有哪些结构 / 表面 / 颜色选择
- 有什么限制
- 相关安装或技术资料在哪里
- 下一步如何获取样品或报价

---

## 14. 不同页面类型的页面 SEO 重点

| 页面类型 | 优先优化 |
|---|---|
| 产品分类页 | 产品范围、分类关系、选择逻辑、进入详情页的路径 |
| 产品详情页 | 产品定义、规格、应用、证据、资料下载、询价 |
| 制造商 / 供应商页 | 制造能力、产品范围、质量与交付证据、B2B 转化 |
| 比较文章 | 对象定义、比较维度、条件、证据、选择建议 |
| 安装指南 | 前提条件、步骤、参数、风险、技术资料 |
| FAQ / 支持页 | 直接回答具体问题，并链接主要产品或指南 |

因此不存在一套所有页面都照抄的：

```text
Title + 2000 words + 10 H2 + 5 links + 1 CTA
```

页面类型不同，结构和深度本来就应该不同。

---

## 15. 一个推荐的页面级工作顺序

```text
确认页面职责
↓
确认主要搜索意图
↓
确认目标网址
↓
写 SEO 标题与 Meta Description
↓
确定 H1 与正文层级
↓
安排核心答案与证据
↓
规划图片
↓
规划内部链接与锚文本
↓
安排转化入口
↓
移动端与可访问性检查
↓
基础技术发布检查
↓
发布
```

页面 SEO 不应该等文章完全写完以后才“补关键词”，而应该从内容简报阶段就开始设计。

---

## 16. 页面 SEO 完成标准

一个页面准备发布前，应至少满足：

- 页面职责与关键词到页面映射一致。
- SEO 标题独立、准确，不堆关键词。
- Meta Description 能准确概括页面。
- 有清晰、突出的页面主标题。
- H2 / H3 按真实内容关系组织。
- 网址简洁、稳定、可理解。
- 核心答案较快出现。
- 重要图片有真实用途、合理 Alt 和上下文。
- 内部链接帮助用户完成下一步。
- 锚文本能够描述目标页面。
- 面包屑反映真实网站层级。
- CTA 与用户决策阶段匹配。
- 没有为了 SEO 添加无价值内容。
- Canonical、索引许可等基础发布条件已检查。

完成后使用：

- [页面 SEO 检查表](../../checklists/05-optimization/page-seo.md)
- [页面 SEO 规划模板](../../templates/05-optimization/page-seo.md)

---

## 17. 官方参考

本模块优先参考 Google Search Central 当前公开文档：

- Title Links: https://developers.google.com/search/docs/appearance/title-link
- Search Snippets / Meta Description: https://developers.google.com/search/docs/appearance/snippet
- URL Structure: https://developers.google.com/search/docs/crawling-indexing/url-structure
- Image SEO: https://developers.google.com/search/docs/appearance/google-images
- Link Best Practices: https://developers.google.com/search/docs/crawling-indexing/links-crawlable

具体规则可能更新，正式项目应以 Google 最新官方文档和真实 Search Console 数据为准。
