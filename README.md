# SEO 研究与网站优化操作手册

一套面向 **企业网站、产品型网站与 B2B 网站** 的长期 SEO 方法体系，覆盖从市场与竞争研究、关键词与搜索意图、网站架构、内容生产，到页面优化、技术 SEO、数据分析与历史内容治理的完整工作流程。

本项目不是“SEO 技巧集合”，而是一套可以反复用于真实网站项目的 **研究 → 规划 → 执行 → 验证 → 维护** 操作手册。

> **当前内容版本：v2.2.1**  
> **阅读方式：Markdown 为唯一正文来源 + GitHub Pages HTML 阅读器**

---

## 项目定位

这个仓库主要解决三个问题：

1. **做 SEO 时应该先研究什么、后做什么。**
2. **不同阶段应该产出什么文档、模板和检查结果。**
3. **网站上线以后，怎样通过数据和持续治理形成长期闭环。**

整套体系尽量避免依赖固定关键词密度、机械标题长度、文章字数、H2 数量等简单规则，而是优先围绕：

```text
业务目标
↓
搜索需求
↓
页面职责
↓
内容与证据
↓
技术可访问性
↓
真实搜索数据
↓
持续维护
```

进行判断。

---

## 核心工作流

```text
市场与业务目标
↓
网站级竞争研究
↓
关键词研究与搜索意图
↓
关键词到页面映射
↓
网站架构与内容体系
↓
搜索结果与竞争内容研究
↓
内容简报与证据清单
↓
正文写作与专业审核
↓
页面 SEO
↓
技术 SEO
↓
发布
↓
单页表现与网站级 Search Console 分析
↓
SEO 月度数据跟踪
↓
历史内容治理
↓
重新进入研究与优化
↺
```

这套流程不是必须逐项机械执行。新网站、已有网站、单页优化和长期内容治理，可以根据实际任务从不同位置进入。

---

## 七个长期模块

| 模块 | 主要解决的问题 | 核心指南 |
|---|---|---|
| **01 基础** | 整套方法怎样使用、术语怎样统一、项目怎样迭代 | [SEO 总流程](docs/01-foundation/seo-workflow.md) · [术语表](docs/01-foundation/terminology.md) · [迭代路线](docs/01-foundation/roadmap.md) |
| **02 研究** | 研究什么关键词、什么竞争网站、什么搜索结果 | [竞争网站研究](docs/02-research/competitor-site-research.md) · [关键词研究](docs/02-research/keyword-research.md) · [搜索结果研究](docs/02-research/serp-research.md) |
| **03 架构** | 已确定的页面怎样组成一个完整网站 | [网站架构与内容体系](docs/03-architecture/site-architecture.md) |
| **04 内容** | 怎样把研究转成可靠内容，以及怎样正确使用 AI | [内容生产与可信度审核](docs/04-content/content-production.md) · [AI 辅助规范](docs/04-content/ai-assisted-seo.md) |
| **05 优化** | 页面怎样优化，以及怎样满足抓取、索引、渲染和性能要求 | [页面 SEO](docs/05-optimization/on-page-seo.md) · [技术 SEO](docs/05-optimization/technical-seo.md) |
| **06 数据** | 页面发布后表现怎样、网站整体搜索表现怎样、月度工作怎样复盘 | [月度数据跟踪](docs/06-measurement/seo-monthly-performance-tracking.md) · [单页表现与维护](docs/06-measurement/page-performance-and-maintenance.md) · [Search Console 分析](docs/06-measurement/search-console-analysis.md) |
| **07 治理** | 网站运营多年后，哪些内容应该保留、更新、合并、重构或移除 | [历史内容治理](docs/07-governance/content-governance.md) |

---

## 快速开始

### 第一次了解这套体系

建议先阅读：

1. [SEO 研究与网站优化总流程](docs/01-foundation/seo-workflow.md)
2. [SEO 常用术语表](docs/01-foundation/terminology.md)
3. [项目迭代路线](docs/01-foundation/roadmap.md)

先理解整个系统，再进入具体模块。

### 新建企业网站

推荐顺序：

1. [竞争网站研究](docs/02-research/competitor-site-research.md)
2. [关键词研究与页面映射](docs/02-research/keyword-research.md)
3. [网站架构与内容体系](docs/03-architecture/site-architecture.md)
4. 对重点页面执行 [搜索结果研究](docs/02-research/serp-research.md)
5. [内容生产与可信度审核](docs/04-content/content-production.md)
6. [页面 SEO](docs/05-optimization/on-page-seo.md)
7. [技术 SEO](docs/05-optimization/technical-seo.md)
8. 发布后进入 [SEO 月度数据跟踪](docs/06-measurement/seo-monthly-performance-tracking.md)
9. 定期执行 [Search Console 网站级分析](docs/06-measurement/search-console-analysis.md)

### 优化已有网站

建议先从网站级问题开始，而不是直接改某篇文章：

```text
网站级竞争研究
↓
网站架构与页面职责盘点
↓
技术 SEO 基础检查
↓
Search Console 网站级分析
↓
历史内容治理
↓
决定新建、更新、合并、重构或移除页面
```

### 只优化一篇 SEO 内容

可以直接组合使用：

1. [关键词研究模板](templates/02-research/keyword-research.md)
2. [搜索结果研究模板](templates/02-research/serp-analysis.md)
3. [内容简报模板](templates/04-content/content-brief.md)
4. [文章审核检查表](checklists/04-content/article-review.md)
5. [页面 SEO 模板](templates/05-optimization/page-seo.md)
6. [单页发布后表现模板](templates/06-measurement/content-performance.md)

---

## GitHub Pages 阅读器

仓库根目录的 `index.html` 提供一套轻量 Markdown 阅读器，用于在 GitHub Pages 中直接阅读整个知识库。

阅读界面采用三栏结构：

```text
左侧导航              Markdown 正文             当前文档目录
约 300px              自适应阅读区               约 300px
```

主要能力：

- 左侧按照 **01–07 核心模块 + 实战案例** 组织全部内容；
- 指南、模板、检查表和案例使用轻量类型标识区分；
- 中间区域通过本地 `marked.umd.js` 渲染 Markdown；
- 右侧根据当前文档标题自动生成页内目录；
- 支持表格、代码块、引用、列表和 Markdown 任务检查项；
- Markdown 内部相对链接会继续在 HTML 阅读器中打开；
- `.xlsx` 等附件保持普通文件链接行为；
- 外部网页默认在新标签页打开；
- 桌面端采用三栏布局，较窄窗口自动收缩，移动端切换为抽屉式导航；
- CSS、JavaScript 和 Markdown 渲染库全部保存在仓库本地；
- 不依赖第三方 CDN、Node.js、npm 或构建流程。

### 阅读器的数据来源

阅读器使用：

```text
assets/data/catalog.json
```

作为导航目录的唯一数据源。

正文仍然来自原始 Markdown：

```text
docs/
templates/
checklists/
examples/
README.md
```

因此整个项目保持清晰的职责划分：

```text
Markdown        = 正文内容
catalog.json    = 文档目录
index.html      = 阅读器页面骨架
app.js          = 阅读与导航逻辑
style.css       = 阅读器样式
marked.umd.js   = Markdown 渲染
```

### URL 规则

阅读器统一使用：

```text
?page=Markdown相对路径
```

例如：

```text
index.html?page=docs/02-research/keyword-research.md
```

旧版 `?doc=` 地址仍保留兼容处理，避免已有阅读链接突然失效。

### 启用 GitHub Pages

仓库上传完成后：

1. 打开 GitHub 仓库 **Settings**。
2. 进入 **Pages**。
3. 在 **Build and deployment** 中选择 **Deploy from a branch**。
4. Branch 选择 `main`，目录选择 `/(root)`。
5. 保存并等待 GitHub Pages 部署完成。

如果仓库名为 `seo-research-playbook`，Pages 地址通常为：

```text
https://<GitHub用户名>.github.io/seo-research-playbook/
```

仓库根目录保留 `.nojekyll`，用于让 GitHub Pages 按静态文件原样提供 Markdown 文件。

---

## 项目结构

```text
seo-research-playbook/
├── README.md
├── index.html
├── .gitattributes
├── .nojekyll
│
├── assets/
│   ├── css/
│   │   └── style.css
│   ├── js/
│   │   ├── app.js
│   │   └── marked.umd.js
│   └── data/
│       └── catalog.json
│
├── docs/
│   ├── 01-foundation/
│   ├── 02-research/
│   ├── 03-architecture/
│   ├── 04-content/
│   ├── 05-optimization/
│   ├── 06-measurement/
│   └── 07-governance/
│
├── templates/
│   ├── 02-research/
│   ├── 03-architecture/
│   ├── 04-content/
│   ├── 05-optimization/
│   ├── 06-measurement/
│   └── 07-governance/
│
├── checklists/
│   ├── 02-research/
│   ├── 03-architecture/
│   ├── 04-content/
│   ├── 05-optimization/
│   ├── 06-measurement/
│   └── 07-governance/
│
└── examples/
    ├── product-cases/
    │   ├── composite-decking/
    │   └── wpc-wall-cladding/
    └── site-cases/
```

目录职责保持固定：

| 目录 | 职责 |
|---|---|
| `docs/` | 方法、原则、判断框架与操作流程 |
| `templates/` | 可直接复制并填写的工作模板 |
| `checklists/` | 执行检查、审核与发布放行 |
| `examples/` | 使用完整流程完成的产品级与网站级案例 |
| `assets/` | GitHub Pages 阅读器所需的样式、脚本与目录数据 |

---

## 模板与检查表

| 工作阶段 | 模板 | 检查表 |
|---|---|---|
| 竞争网站研究 | [研究模板](templates/02-research/competitor-site-research.md) | [检查表](checklists/02-research/competitor-site-research.md) |
| 关键词研究 | [关键词研究模板](templates/02-research/keyword-research.md) | — |
| 搜索结果研究 | [SERP 分析模板](templates/02-research/serp-analysis.md) | — |
| 网站架构 | [网站架构模板](templates/03-architecture/site-architecture.md) | [检查表](checklists/03-architecture/site-architecture.md) |
| 内容生产 | [内容简报模板](templates/04-content/content-brief.md) | [文章审核检查表](checklists/04-content/article-review.md) |
| 页面 SEO | [页面 SEO 模板](templates/05-optimization/page-seo.md) | [检查表](checklists/05-optimization/page-seo.md) |
| 技术 SEO | [技术 SEO 模板](templates/05-optimization/technical-seo.md) | [检查表](checklists/05-optimization/technical-seo.md) |
| SEO 月度数据跟踪 | [Markdown 模板](templates/06-measurement/seo-monthly-performance.md) · [Excel 数据表](templates/06-measurement/seo-monthly-performance-tracker.xlsx) | [月度复盘检查表](checklists/06-measurement/seo-monthly-review.md) |
| 单页表现 | [内容表现模板](templates/06-measurement/content-performance.md) | — |
| Search Console 网站级分析 | [分析模板](templates/06-measurement/search-console-analysis.md) | [检查表](checklists/06-measurement/search-console-analysis.md) |
| 历史内容治理 | [治理模板](templates/07-governance/content-governance.md) | [检查表](checklists/07-governance/content-governance.md) |

模板用于记录过程，检查表用于确认是否达到进入下一阶段或发布的条件。两者职责不同，不建议合并成一种文档。

---

## 实战案例

### 产品级完整案例

- [Composite Decking SEO 研究案例](examples/product-cases/composite-decking/README.md)  
  从 `composite decking` 主题研究开始，逐步完成关键词主题地图、搜索结果分析、内容简报、正文、页面优化、技术检查和发布后复盘。

- [WPC Wall Cladding SEO 研究案例](examples/product-cases/wpc-wall-cladding/README.md)  
  用墙板产品验证同一方法在安装、防火、规范和技术约束更强的建材产品中是否仍然成立。

### 网站级案例

- [Trex.com 竞争网站研究](examples/site-cases/trex-competitor-site-research.md)
- [WPC 建材企业网站架构](examples/site-cases/wpc-site-architecture.md)
- [WPC 企业网站 Search Console 分析](examples/site-cases/wpc-search-console-analysis.md)
- [WPC 企业网站历史内容治理](examples/site-cases/wpc-content-governance.md)

> 案例中的搜索结果、产品参数、价格、质保、第三方数据和公开网页可能随时间变化。正式用于真实项目时，应重新核验，并优先使用企业自己的产品资料、测试数据和业务信息。

---

## SEO 月度数据跟踪

长期 SEO 不应该只记录排名变化，还需要把工作与结果连接起来。

本项目把月度复盘拆成：

```text
结果
↓
诊断
↓
动作
↓
复查
```

建议持续记录：

- Google Search Console 点击与展示；
- 非品牌搜索点击；
- 自然搜索会话；
- SEO 询盘与高质量询盘；
- SEO 投入与询盘成本；
- 固定目标关键词 Top10 表现；
- 有搜索点击的页面数量；
- 页面组表现；
- 本月重要 SEO 动作；
- 动作实施前基线与后续复查结果。

对应资源：

- [SEO 月度数据跟踪方法](docs/06-measurement/seo-monthly-performance-tracking.md)
- [Markdown 月度模板](templates/06-measurement/seo-monthly-performance.md)
- [Excel 月度数据跟踪表](templates/06-measurement/seo-monthly-performance-tracker.xlsx)
- [SEO 月度复盘检查表](checklists/06-measurement/seo-monthly-review.md)

Excel 数据表包含 **仪表盘、月度核心数据、页面组分析、SEO 工作记录、指标说明** 五个工作区。长期真实数据建议保存在 Excel / Google Sheets，Markdown 负责定义指标、流程和判断方法。

---

## 文档维护规则

### 修改现有文档

如果只是修改某个 `.md` 的正文：

```text
直接修改 Markdown
↓
无需修改 catalog.json
↓
阅读器自动读取最新正文
```

### 新增文档

新增指南、模板、检查表或案例时：

1. 将文件放入正确目录；
2. 使用已有命名方式保持目录语义一致；
3. 在 `assets/data/catalog.json` 中增加对应记录；
4. 检查 Markdown 内部相对链接；
5. 通过 `index.html` / GitHub Pages 验证导航与阅读效果。

### 删除或重命名文档

除了修改文件本身，还需要同步检查：

- `catalog.json`；
- README 导航；
- 其他 Markdown 中的内部链接；
- 已发布的 Pages 阅读地址；
- 是否需要保留旧路径或跳转策略。

### 阅读器维护原则

阅读器只负责展示，不承担内容管理。

因此长期保持：

> **Markdown 是正文唯一来源，`catalog.json` 是目录唯一来源，HTML / CSS / JavaScript 尽量冻结。**

只有当阅读体验出现明确问题时，再调整阅读器，而不是为了增加功能持续扩大前端复杂度。

---

## 核心原则

1. **先业务与市场，再关键词。** 搜索量不能脱离客户、产品和转化目标。
2. **先搜索意图，再页面类型。** 不采用“一关键词一文章”。
3. **关键词研究决定需要哪些页面，网站架构决定这些页面怎样组成网站。**
4. **竞争内容用于理解用户需求和内容标准，不用于拼接或改写排名页面。**
5. **事实、第三方估算和分析判断必须分开记录。**
6. **AI 是研究与写作助手，不是产品事实、测试结果或搜索数据来源。**
7. **页面 SEO 不采用固定关键词密度、标题字符数、H2 数量或内部链接数量。**
8. **技术 SEO 先解决可访问、可抓取、可索引和规范信号一致性，再解释排名问题。**
9. **Search Console 分析先看全站和页面组，再进入具体页面和查询词。**
10. **历史内容治理不是为了减少页面数量，而是让内容重新与业务、用户需求和网站架构保持一致。**

---

## 中文表达约定

本仓库默认优先使用中文。

以下内容可以保留英文：

- 产品关键词；
- 工具与平台名称；
- SEO 标准缩写；
- HTML / HTTP / Schema 等技术术语；
- 代码、属性名和 API 字段；
- 难以准确翻译或行业中普遍直接使用的术语。

统一写法参见 [SEO 常用术语表](docs/01-foundation/terminology.md)。

---

## 版本与扩展原则

当前方法体系已经覆盖企业网站 SEO 的主要生命周期。后续不以“增加章节数量”为目标，而优先通过真实项目验证现有模块。

完整版本演进参见：

**[项目迭代路线](docs/01-foundation/roadmap.md)**

后续只有当同类问题在多个真实项目中反复出现，并且现有模块无法清晰承接时，再考虑扩展新的专题，例如：

- 国际 SEO 与多语言 / 多地区网站；
- WooCommerce 与大型产品目录 SEO；
- 更深入的结构化数据实践；
- 大型网站日志分析与抓取预算；
- 自动化 SEO 数据分析；
- AI 搜索相关能力在官方产品和数据足够稳定后的独立研究。

长期原则保持不变：

> **先验证真实需求，再增加结构；先保证体系可维护，再增加功能。**
