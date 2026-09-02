# SEO 研究与网站优化操作手册

一套面向企业网站、产品型网站和 B2B 网站的 SEO 研究、内容生产、网站架构、页面优化、技术检查、数据分析与长期治理方法。

**当前版本：v2.2.0**

v2.2.0 在 v2.1.0 GitHub Pages 阅读版基础上新增 **SEO 月度数据跟踪与工作记录模块**，把搜索表现、自然流量、SEO 询盘、A 类询盘、SEO 投入、关键词资产和实际工作动作连接成长期可比较的数据闭环；同时正式合并修复后的术语表。

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
历史内容治理
↓
重新进入研究与优化
↺
```

## 七个长期模块

| 模块 | 主要解决的问题 | 核心指南 |
|---|---|---|
| 01 基础 | 整套方法怎样使用、术语怎样统一、项目怎样迭代 | [总流程](docs/01-foundation/seo-workflow.md) |
| 02 研究 | 研究什么关键词、什么竞争网站、什么搜索结果 | [关键词研究](docs/02-research/keyword-research.md) · [搜索结果研究](docs/02-research/serp-research.md) · [竞争网站研究](docs/02-research/competitor-site-research.md) |
| 03 架构 | 已确定的页面怎样组成一个完整网站 | [网站架构与内容体系](docs/03-architecture/site-architecture.md) |
| 04 内容 | 怎样把研究转成可靠内容，以及怎样正确使用 AI | [内容生产与可信度审核](docs/04-content/content-production.md) · [AI 辅助规范](docs/04-content/ai-assisted-seo.md) |
| 05 优化 | 一个页面怎样优化，以及怎样满足抓取、索引、渲染和性能要求 | [页面 SEO](docs/05-optimization/on-page-seo.md) · [技术 SEO](docs/05-optimization/technical-seo.md) |
| 06 数据 | 每月 SEO 结果怎样、页面发布后表现怎样、整个网站搜索表现怎样 | [SEO 月度数据跟踪](docs/06-measurement/seo-monthly-performance-tracking.md) · [单页表现与维护](docs/06-measurement/page-performance-and-maintenance.md) · [Search Console 网站级分析](docs/06-measurement/search-console-analysis.md) |
| 07 治理 | 网站运营多年后，哪些内容应该保留、更新、合并、重构或移除 | [历史内容治理](docs/07-governance/content-governance.md) |

## 项目结构

```text
seo-content-research-guide/
├── README.md
├── index.html
├── .nojekyll
├── assets/
│   ├── css/
│   ├── js/
│   └── data/
├── docs/
│   ├── 01-foundation/
│   ├── 02-research/
│   ├── 03-architecture/
│   ├── 04-content/
│   ├── 05-optimization/
│   ├── 06-measurement/
│   └── 07-governance/
├── templates/
│   ├── 02-research/
│   ├── 03-architecture/
│   ├── 04-content/
│   ├── 05-optimization/
│   ├── 06-measurement/
│   └── 07-governance/
├── checklists/
│   ├── 02-research/
│   ├── 03-architecture/
│   ├── 04-content/
│   ├── 05-optimization/
│   ├── 06-measurement/
│   └── 07-governance/
└── examples/
    ├── product-cases/
    │   ├── composite-decking/
    │   └── wpc-wall-cladding/
    └── site-cases/
```

根目录保持极简：`README.md` 作为 GitHub 仓库说明与导航入口，`index.html` 作为 GitHub Pages 可视化阅读入口，`.nojekyll` 用于让 GitHub Pages 按静态文件原样提供 Markdown，避免带 YAML 元数据的 `.md` 被 Jekyll 预处理。`assets/` 只保存阅读页面需要的本地 CSS、JavaScript 和文档目录清单；`docs/` 保存方法论，`templates/` 保存可复制工作表，`checklists/` 用于检查与放行，`examples/` 保存完整实践过程。

## GitHub Pages 可视化阅读

仓库根目录提供 `index.html`，用于把现有 Markdown 文档以更适合阅读的 HTML 页面展示出来。

主要功能：

- 7 个核心模块的首页导航；
- 指南、模板、检查表与案例分类；
- 按标题、描述、路径和类型进行轻量搜索；
- 点击文档后在新标签页中打开 HTML 阅读模式；
- 自动读取 Markdown 并生成正文排版；
- 自动根据 H2 / H3 生成文章目录；
- 支持表格、代码块、引用、列表和任务检查项；
- Markdown 内部相对链接继续在阅读器中跳转；
- 桌面端与手机端响应式阅读；
- 不依赖第三方 CDN，也不需要 Node.js、npm 或构建流程；
- 根目录使用 `.nojekyll`，确保 Markdown 文件由 GitHub Pages 原样提供给阅读器。

### 启用 GitHub Pages

仓库上传完成后：

1. 打开 GitHub 仓库的 **Settings**。
2. 进入 **Pages**。
3. 在 **Build and deployment** 中选择 **Deploy from a branch**。
4. Branch 选择 `main`，目录选择 `/(root)`。
5. 保存后，通过 GitHub 提供的 Pages 地址访问。

如果仓库名采用 `seo-research-playbook`，通常访问形式为：

```text
https://<GitHub用户名>.github.io/seo-research-playbook/
```

### 文档目录维护

阅读首页使用：

```text
assets/data/catalog.json
```

保存文档标题、路径、类型和模块信息。

- 只修改现有 `.md` 正文时，不需要修改目录清单。
- 新增、删除或重命名 `.md` 文件时，需要同步更新 `catalog.json` 中对应记录。
- 阅读器本身不修改 Markdown 文件，仓库中的 `.md` 始终是唯一正文来源。

## SEO 月度数据跟踪

本版本新增一套长期数据导向的 SEO 工作记录方式，把数据拆成：

```text
结果
↓
诊断
↓
动作
```

建议每月固定记录 GSC 点击 / 展示、非品牌点击、自然搜索会话、SEO 询盘、A 类询盘、SEO 投入、目标关键词 Top10、有搜索点击页面数以及本月重要 SEO 动作。

仓库同时提供：

- [SEO 月度数据跟踪方法](docs/06-measurement/seo-monthly-performance-tracking.md)
- [Markdown 月度模板](templates/06-measurement/seo-monthly-performance.md)
- [Excel 月度数据跟踪表](templates/06-measurement/seo-monthly-performance-tracker.xlsx)
- [SEO 月度复盘检查表](checklists/06-measurement/seo-monthly-review.md)

Excel 数据表包含 **仪表盘、月度核心数据、页面组分析、SEO 工作记录、指标说明** 5 个工作区，并使用安全公式避免 `#DIV/0!`。真实长期数据建议保存在 Excel / Google Sheets，Markdown 继续负责指标定义和方法说明。

## 推荐使用方式

### 新建企业网站

建议顺序：

1. [SEO 总流程](docs/01-foundation/seo-workflow.md)
2. [竞争网站研究](docs/02-research/competitor-site-research.md)
3. [关键词研究与页面映射](docs/02-research/keyword-research.md)
4. [网站架构与内容体系](docs/03-architecture/site-architecture.md)
5. 对重点页面执行 [搜索结果研究](docs/02-research/serp-research.md)
6. [内容生产与可信度审核](docs/04-content/content-production.md)
7. [页面 SEO](docs/05-optimization/on-page-seo.md)
8. [技术 SEO](docs/05-optimization/technical-seo.md)
9. 发布后进入 [SEO 月度数据跟踪](docs/06-measurement/seo-monthly-performance-tracking.md) 与 [Search Console 网站级分析](docs/06-measurement/search-console-analysis.md)

### 优化已有网站

建议先做：

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
再决定新建、更新、合并或重构页面
```

### 只研究一篇 SEO 内容

可以直接使用：

1. [关键词研究模板](templates/02-research/keyword-research.md)
2. [搜索结果研究模板](templates/02-research/serp-analysis.md)
3. [内容简报模板](templates/04-content/content-brief.md)
4. [文章审核检查表](checklists/04-content/article-review.md)
5. [页面 SEO 模板](templates/05-optimization/page-seo.md)
6. [单页发布后表现模板](templates/06-measurement/content-performance.md)

## 模板与检查表

| 阶段 | 模板 | 检查表 |
|---|---|---|
| 竞争网站研究 | [模板](templates/02-research/competitor-site-research.md) | [检查表](checklists/02-research/competitor-site-research.md) |
| 关键词研究 | [模板](templates/02-research/keyword-research.md) | — |
| 搜索结果研究 | [模板](templates/02-research/serp-analysis.md) | — |
| 网站架构 | [模板](templates/03-architecture/site-architecture.md) | [检查表](checklists/03-architecture/site-architecture.md) |
| 内容生产 | [内容简报](templates/04-content/content-brief.md) | [文章审核](checklists/04-content/article-review.md) |
| 页面 SEO | [模板](templates/05-optimization/page-seo.md) | [检查表](checklists/05-optimization/page-seo.md) |
| 技术 SEO | [模板](templates/05-optimization/technical-seo.md) | [检查表](checklists/05-optimization/technical-seo.md) |
| SEO 月度数据跟踪 | [Markdown 模板](templates/06-measurement/seo-monthly-performance.md) · [Excel 数据表](templates/06-measurement/seo-monthly-performance-tracker.xlsx) | [月度复盘](checklists/06-measurement/seo-monthly-review.md) |
| 单页表现 | [模板](templates/06-measurement/content-performance.md) | — |
| Search Console 网站级分析 | [模板](templates/06-measurement/search-console-analysis.md) | [检查表](checklists/06-measurement/search-console-analysis.md) |
| 历史内容治理 | [模板](templates/07-governance/content-governance.md) | [检查表](checklists/07-governance/content-governance.md) |

## 案例

### 产品级完整案例

- [Composite Decking](examples/product-cases/composite-decking/README.md)：从 `composite decking` 到比较内容、页面 SEO、技术 SEO 和发布后复盘。
- [WPC Wall Cladding](examples/product-cases/wpc-wall-cladding/README.md)：验证同一流程在墙体系统、防火、安装和规范约束更强的产品上是否仍然成立。

### 网站级案例

- [Trex.com 竞争网站研究](examples/site-cases/trex-competitor-site-research.md)
- [WPC 建材企业网站架构](examples/site-cases/wpc-site-architecture.md)
- [WPC 企业网站 Search Console 分析](examples/site-cases/wpc-search-console-analysis.md)
- [WPC 企业网站历史内容治理](examples/site-cases/wpc-content-governance.md)

案例中的搜索结果、产品参数、价格、质保、第三方数据和公开网页都会随时间变化。正式用于项目时必须重新核验，并优先使用企业自己的真实资料。

## 核心原则

1. **先业务与市场，再关键词。** 搜索量不能脱离客户、产品和转化目标。
2. **先搜索意图，再页面类型。** 不采用“一关键词一文章”。
3. **关键词研究负责决定需要哪些页面，网站架构负责决定这些页面怎样组成网站。**
4. **竞争内容用于理解用户需求和内容标准，不用于拼接或改写排名页面。**
5. **事实、第三方估算和分析判断必须分开记录。**
6. **AI 是研究与写作助手，不是产品事实、测试结果或搜索数据来源。**
7. **页面 SEO 不采用固定关键词密度、标题字符数、H2 数量或内部链接数量。**
8. **技术 SEO 先解决可访问、可抓取、可索引和规范信号一致性，再解释排名问题。**
9. **Search Console 分析先看全站和页面组，再进入具体页面与查询词。**
10. **历史内容治理的目标不是减少页面数量，而是让内容重新与业务、用户需求和网站架构保持一致。**

## 中文表达约定

本仓库默认优先使用中文。产品关键词、工具名称、标准缩写、HTML 属性、代码以及难以准确翻译的行业标准术语可以保留英文。

统一写法参见 [SEO 常用术语表](docs/01-foundation/terminology.md)。

## 版本与后续维护

**v2.2.0 已完成 SEO 月度数据跟踪与工作记录模块。** 本版本在 v2.1.0 GitHub Pages 阅读能力上增加：

- 新增 SEO 月度数据跟踪方法，统一搜索、流量、询盘、成本、关键词资产和工作动作的长期记录口径。
- 新增 Markdown 月度数据模板与月度复盘检查表。
- 新增可直接使用的 Excel 数据跟踪表，包含仪表盘、月度核心数据、页面组分析、SEO 工作记录和指标说明。
- 增加 SEO 询盘、A 类询盘、SEO 投入、滚动 3 个月成本、目标关键词库、有搜索点击页面数等指标定义。
- 明确 GSC 点击与自然搜索会话的职责边界，固定询盘转化率分母。
- 明确固定目标关键词库与第三方全站关键词估算的区别。
- 把修复后的 `terminology.md` 正式纳入仓库，术语表按主题分组，解决 GitHub Markdown 超长表格中断问题。
- GitHub Pages 文档目录同步增加月度数据模块，原有 7 个长期一级模块保持不变。

完整版本路线参见 [迭代路线](docs/01-foundation/roadmap.md)。

后续继续遵循：**先通过真实项目使用现有数据体系，再决定是否增加新的指标或自动化；不为了报表完整而增加不会影响决策的数据。**
