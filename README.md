# SEO 研究与网站优化操作手册

一套面向企业网站、产品型网站和 B2B 网站的 SEO 研究、内容生产、网站架构、页面优化、技术检查、数据分析与长期治理方法。

**当前版本：v2.0.0**

v2.0.0 不再增加新的 SEO 功能，而是对 v1.1.0—v1.8.0 已完成的方法论进行模块化重构：统一目录、模板、检查表与案例归属，减少重复内容，让整个仓库更适合长期维护。

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
| 06 数据 | 页面发布后表现怎样，整个网站搜索表现怎样 | [单页表现与维护](docs/06-measurement/page-performance-and-maintenance.md) · [Search Console 网站级分析](docs/06-measurement/search-console-analysis.md) |
| 07 治理 | 网站运营多年后，哪些内容应该保留、更新、合并、重构或移除 | [历史内容治理](docs/07-governance/content-governance.md) |

## 项目结构

```text
seo-content-research-guide/
├── README.md
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

根目录只保留一个 `README.md`，作为整个知识库的唯一入口。`docs/` 保存方法论，`templates/` 保存可复制工作表，`checklists/` 用于检查与放行，`examples/` 保存完整实践过程。

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
9. 发布后进入 [数据分析](docs/06-measurement/search-console-analysis.md)

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

**v2.0.0 已完成模块化重构。** 本版本没有新增大型 SEO 专题，主要完成：

- 将原来平铺的核心指南整理为 7 个长期模块。
- 将模板和检查表按同一工作阶段归类。
- 将案例区分为产品级案例和网站级案例。
- 精简 README，使其重新成为导航入口而不是完整教程。
- 收紧 AI、单页数据复盘与网站级分析之间的重复内容。
- 统一部分旧文件命名和交叉引用。
- 保留 v1.x 已验证的方法论，不为了“升级版本”重新发明流程。

完整版本路线参见 [迭代路线](docs/01-foundation/roadmap.md)。

后续新增内容遵循一个原则：**只有当真实项目反复出现同类问题，并且现有模块无法清晰承接时，才增加新的一级模块。**
