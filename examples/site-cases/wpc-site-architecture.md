# WPC 建材企业网站架构示例

> 示例性质：本文件用于验证网站架构方法，不代表任何真实企业最终产品体系，也不应直接复制为生产网站。实际使用时必须根据企业产品目录、目标市场、关键词数据、技术资料和业务流程重新确认。

---

## 1. 项目假设

假设这是一个面向国际市场的 WPC / 户外建材企业网站，核心业务包括：

- `Composite Decking`
- `WPC Wall Cladding`
- `Composite Fencing`
- `Railing`

主要客户包括：

- 经销商
- 建材进口商
- 承包商
- 建筑 / 景观项目采购
- 有较强产品研究需求的终端用户

主要转化：

```text
查看产品
↓
下载技术资料 / 申请样品
↓
提交项目要求
↓
询价
```

---

## 2. 为什么不能只建立 Products + Blog

如果网站只有：

```text
Products
Blog
About
Contact
```

那么以下重要需求没有清晰位置：

- 材料比较
- 安装
- 清洁维护
- 技术规格
- 测试 / 认证
- 产品手册
- 项目案例
- 应用场景
- 选材工具

因此建议按用户任务建立更完整体系。

---

## 3. 建议的一级结构

```text
Home
├── Products
├── Solutions
├── Resources
├── Projects
├── About
└── Contact
```

这是一个架构示例，不意味着所有企业都必须使用六个主导航。

---

## 4. Products

```text
Products
├── Composite Decking
│   ├── Decking Series A
│   ├── Decking Series B
│   └── Decking Series C
├── WPC Wall Cladding
│   ├── Cladding Series A
│   └── Cladding Series B
├── Composite Fencing
└── Railing
```

### 产品大类页职责

以：

```text
/products/composite-decking/
```

为例，它主要承担：

- Composite Decking 产品类别解释。
- 系列和选型入口。
- 颜色 / 表面 / 规格总览。
- 技术资料入口。
- 安装和维护入口。
- 案例入口。
- 样品 / 询价。

它不应该被一篇“Composite Decking 是什么”的博客替代。

---

## 5. Solutions

只有企业真正按场景销售和服务时才建议建立。

例如：

```text
Solutions
├── Residential Outdoor Living
├── Commercial Projects
├── Poolside Applications
└── Facade & Exterior Wall
```

每一个解决方案页都应该：

```text
真实场景
+
适用产品
+
选择条件
+
项目证据
```

而不是把产品介绍复制一遍换标题。

---

## 6. Resources

```text
Resources
├── Buying Guides
├── Comparisons
├── Installation
├── Maintenance
├── Technical Resources
├── Downloads
├── FAQ
└── Tools
```

### Buying Guides

示例：

```text
/guides/how-to-choose-composite-decking/
```

### Comparisons

已经完成的两个研究主题可以进入这里：

```text
/guides/composite-decking-vs-wood/
/guides/wpc-wall-cladding-vs-wood-cladding/
```

### Installation

```text
/installation/composite-decking/
/installation/wpc-wall-cladding/
```

### Technical Resources

用于：

- 规格
- 材料说明
- 测试范围
- 安装边界
- 系统要求

### Downloads

用于统一管理：

- 产品手册
- Datasheet
- 安装 PDF
- Warranty
- 测试资料
- CAD / BIM

---

## 7. Projects

```text
Projects
├── Residential
├── Commercial
└── Hospitality / Landscape
```

单个项目页示例：

```text
/projects/residential-deck-project-a/
```

页面关系：

```text
Project A
↓
Composite Decking Series A
↓
Product Page
↓
Technical Data
↓
Request Sample / Quote
```

同时产品页可以反向展示该项目。

---

## 8. 一个完整 Composite Decking 主题关系

```text
/products/composite-decking/
│
├── /products/decking-series-a/
├── /products/decking-series-b/
│
├── /guides/composite-decking-vs-wood/
├── /guides/composite-decking-cost/
├── /installation/composite-decking/
├── /maintenance/composite-decking-cleaning/
│
├── /resources/composite-decking-technical-data/
├── /downloads/composite-decking-brochure/
│
└── /projects/.../
```

其中产品大类页是重要商业枢纽，但不是所有页面都必须通过它唯一连接。

---

## 9. WPC Wall Cladding 的关系不同

Wall Cladding 由于技术风险更高，可以设计为：

```text
/products/wpc-wall-cladding/
│
├── Product Series
├── /guides/wpc-wall-cladding-vs-wood-cladding/
├── /installation/wpc-wall-cladding/
├── /resources/wpc-wall-cladding-system-guide/
├── /resources/wpc-wall-cladding-technical-data/
├── Test / Certification Documents
└── Projects
```

用户路径更偏：

```text
材料选择
↓
墙体系统条件
↓
技术规格
↓
安装 / 测试资料
↓
项目条件确认
```

而不是简单：

```text
文章
→ 产品
→ Buy Now
```

这与前面 WPC Wall Cladding 案例验证结果一致。

---

## 10. 主导航示例

```text
Products
Solutions
Resources
Projects
About
Contact
```

### Products 下拉菜单

```text
Composite Decking
WPC Wall Cladding
Composite Fencing
Railing
```

不需要把所有产品型号都塞入第一层下拉菜单。

---

## 11. 面包屑示例

### 产品系列

```text
Home
> Products
> Composite Decking
> Decking Series A
```

### 比较指南

```text
Home
> Resources
> Comparisons
> Composite Decking vs Wood
```

### 技术资料

```text
Home
> Resources
> Technical Resources
> WPC Wall Cladding Technical Data
```

这三种页面的路径可以不同，不要求全部跟产品目录绑定。

---

## 12. 内部链接示例

### 比较文章

`Composite Decking vs Wood` 应自然连接：

- Composite Decking 产品大类
- 相关系列
- 安装指南
- 技术资料
- 项目案例
- 样品 / 询价

### 产品页

Composite Decking 产品页可以连接：

- 材料比较
- 安装
- 维护
- 技术数据
- Warranty
- 项目案例

形成：

```text
教育内容
↔
产品
↔
技术资料
↔
项目证据
```

---

## 13. 不建议建立的薄弱页面

例如只有关键词变化：

```text
best composite decking
best WPC decking
best composite decking boards
best outdoor composite decking
```

不能自动建立四个页面。

如果搜索意图和内容范围高度一致，应先考虑由一个成熟页面承接。

同样：

```text
grey composite decking
brown composite decking
teak composite decking
```

如果只是颜色筛选状态，也不应自动生成三个独立 SEO 分类页。

---

## 14. 技术资料页面与 PDF

例如：

```text
/resources/wpc-wall-cladding-technical-data/
```

页面可以说明：

- 适用产品系列
- 文件版本
- 更新时间
- 关键规格范围
- 安装前提
- 需要确认的项目条件

然后提供：

```text
Download PDF
```

这样比把 PDF 孤立放在 `/uploads/xxxx.pdf` 更利于长期维护和用户理解。

---

## 15. 转化路径示例

### 路径 A：比较型搜索

```text
composite decking vs wood
↓
比较文章
↓
Composite Decking 产品大类
↓
产品系列
↓
申请样品
```

### 路径 B：产品型搜索

```text
composite decking manufacturer
↓
制造 / 产品能力页面
↓
产品系列
↓
技术资料
↓
询价
```

这里的 Manufacturer 页面是否独立建立，需要真实搜索结果与业务定位继续验证，不能仅根据关键词出现就决定。

### 路径 C：专业技术搜索

```text
wpc wall cladding installation
↓
安装指南
↓
系统要求
↓
技术资料
↓
项目条件确认
```

---

## 16. 页面优先级示例

第一阶段不需要同时上线全部栏目。

可以优先：

### 第一批

```text
Home
核心 Products 分类页
核心产品系列
About / Contact
核心技术资料
```

### 第二批

```text
重点 Comparison
Installation
FAQ
Projects
```

### 第三批

```text
更多 Guides
Tools
更细应用页面
```

优先级根据：

```text
业务必要性
+
搜索需求
+
现有资料
+
转化价值
+
制作成本
```

决定。

---

## 17. 本案例验证出的原则

1. 产品型企业网站不能用“Products + Blog”概括全部内容体系。
2. 产品大类、教育内容、技术资料、案例和转化应该形成网络，而不是独立栏目。
3. 关键词页面映射决定“需要什么页面”，网站架构决定“这些页面怎样组成网站”。
4. URL 结构可以简洁，但真正的层级需要导航和内部链接表达。
5. Composite Decking 和 WPC Wall Cladding 可以共用架构框架，但用户路径和技术资料深度不同。
6. 筛选、颜色、规格等界面状态不能自动等同于 SEO 页面。
7. 网站架构应按阶段建设，不要求新站第一天就拥有大型内容中心。

---

## 18. 下一步

如果把这个示例应用到真实网站，应继续补充：

- 企业真实产品目录。
- 实际产品系列和型号。
- 目标国家关键词数据。
- 现有网站 URL 和 Search Console 数据。
- 下载文件清单。
- 实际案例。
- 转化流程。
- 多语言 / 多地区架构。

然后使用：

- [网站架构与内容体系模板](../../templates/03-architecture/site-architecture.md)
- [网站架构与内容体系检查表](../../checklists/03-architecture/site-architecture.md)
- [页面 SEO](../../docs/05-optimization/on-page-seo.md)
- [技术 SEO](../../docs/05-optimization/technical-seo.md)

完成真实项目设计。
