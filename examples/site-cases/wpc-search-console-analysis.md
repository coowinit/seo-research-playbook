# WPC 建材企业网站 Search Console 网站级分析示例

> 本文件用于演示 v1.7.0 的分析方法。**没有接入某个真实网站的 Search Console，因此不填写虚构点击、展示、排名或询盘数据。** 实际使用时应把表格中的“待填”替换为对应网站真实数据。

---

## 1. 示例网站范围

沿用 [WPC 建材企业网站架构示例](wpc-site-architecture.md)，假设网站主要包含：

```text
Products
├── Composite Decking
├── WPC Wall Cladding
├── Composite Fencing
└── Railing

Resources
├── Comparisons
├── Installation
├── Maintenance
├── Technical Resources
└── FAQ

Projects
```

主要目标：

- 非品牌产品搜索增长；
- B2B 技术与采购需求增长；
- 产品页、资料页和案例形成自然转化路径。

---

## 2. 第一层：全站趋势

正式分析时先填写：

| 指标 | 最近 28 天 | 前 28 天 | 同比 | 判断 |
|---|---:|---:|---:|---|
| 点击 | 待填 | 待填 | 待填 |  |
| 展示 | 待填 | 待填 | 待填 |  |
| 点击率 | 待填 | 待填 | 待填 |  |
| 平均排名 | 待填 | 待填 | 待填 |  |

### 不能直接做的判断

不能写：

> “点击下降 10%，说明所有页面排名都下降。”

应该继续拆到页面组。

---

## 3. 第二层：品牌 / 非品牌

正式项目可以拆成：

```text
品牌词
→ 企业名 / 品牌名 / 品牌 + 产品

非品牌词
→ composite decking
→ wpc wall cladding
→ composite decking manufacturer
→ wall cladding supplier
→ composite decking vs wood
→ wpc cladding installation
```

### 示例判断逻辑

如果：

```text
全站点击增长
但品牌词增长明显
非品牌基本不变
```

正确结论应是：

> 品牌搜索需求增长，但尚不能证明非品牌 SEO 获客能力同步提升。

---

## 4. 第三层：按网站架构拆页面组

建议至少建立：

| 页面组 | URL / 分类规则 | SEO 职责 |
|---|---|---|
| Composite Decking | 产品目录 | 核心产品需求 |
| WPC Wall Cladding | 产品目录 | 核心产品需求 |
| Fencing / Railing | 产品目录 | 其他产品需求 |
| Comparisons | 比较内容 | 商业比较 |
| Installation | 安装内容 | 施工问题 |
| Technical Resources | 技术资料 | B2B 专业决策 |
| Projects | 案例 | 项目证据 |

正式数据表：

| 页面组 | 点击变化 | 展示变化 | 主要查询变化 | 当前判断 |
|---|---:|---:|---|---|
| Composite Decking | 待填 | 待填 | 待填 |  |
| WPC Wall Cladding | 待填 | 待填 | 待填 |  |
| Comparisons | 待填 | 待填 | 待填 |  |
| Installation | 待填 | 待填 | 待填 |  |
| Technical Resources | 待填 | 待填 | 待填 |  |
| Projects | 待填 | 待填 | 待填 |  |

### 这一层的价值

如果未来发现：

```text
全站 -8%
Products +6%
Technical Resources +12%
旧博客 -40%
```

就不应该直接得出“网站 SEO 整体恶化”。

---

## 5. 第四层：Composite Decking 主题组

把相关页面放在一起：

```text
/products/composite-decking/
/resources/comparisons/composite-decking-vs-wood/
/resources/installation/composite-decking-installation/
/resources/maintenance/composite-decking-cleaning/
/resources/technical/composite-decking-specifications/
```

然后回答：

- 整个主题组总展示是否增长？
- 分类页是否承担核心产品需求？
- 比较页是否承担商业比较需求？
- 安装页是否承担施工问题？
- 技术页是否带来 B2B 专业查询？
- 是否出现多个页面争夺完全相同的搜索意图？

这样可以把“单页排名”升级成“主题是否形成搜索覆盖”。

---

## 6. 第五层：WPC Wall Cladding 主题组

除了普通产品查询，还特别观察：

```text
wpc wall cladding
wpc cladding manufacturer
exterior wpc cladding
wpc wall panel installation
wpc cladding fire rating
wpc cladding technical data
```

### 示例风险

如果比较文章大量获得：

```text
wpc cladding fire rating
```

不能立刻在比较文章中增加某个固定防火等级。

应该回到：

```text
查询需求
↓
对应产品与市场
↓
真实测试报告
↓
技术资料页 / 产品页职责
↓
专业审核
```

这再次体现 Search Console 只是发现需求，不是事实来源。

---

## 7. 第六层：查询词 × 页面

例如重要查询：

```text
composite decking
```

正式检查 Pages 后，可能看到：

```text
产品分类页
比较文章
项目案例
```

不能直接判定内耗。

应判断：

| 页面 | 预期职责 | 是否冲突 |
|---|---|---|
| Composite Decking 分类页 | 产品选择 | 通常否 |
| Composite Decking vs Wood | 材料比较 | 通常否 |
| Decking Project Case | 项目证据 | 通常否 |

如果出现两个几乎相同的比较页，才进入合并 / 重构判断。

---

## 8. 第七层：国家 / 地区

假设目标市场包括：

- 美国
- 英国
- 澳大利亚

正式分析时分别观察：

- 产品查询增长；
- 规格和术语差异；
- 技术 / 防火 / 安装类搜索差异；
- 转化质量差异。

### 不应直接执行

如果某个新国家展示突然增加，不应该仅根据 Search Console 就建立：

```text
/es/
/de/
/fr/
```

先确认企业是否具备对应语言、产品、销售和长期维护能力。

---

## 9. 第八层：设备

对 WPC 企业站，Mobile 和 Desktop 可能承担不同用户场景。

例如：

- 手机：灵感、比较、快速产品查看。
- 电脑：规格、PDF、工程资料、询盘。

这只是分析假设，必须用真实查询、页面与业务事件验证，不能直接当成用户事实。

---

## 10. 第九层：验证新内容是否产生增量

以新发布：

```text
/resources/comparisons/composite-decking-vs-wood/
```

为例。

不能只看新页面获得多少点击。

同时比较：

```text
新比较页
+
Composite Decking 分类页
+
原有相关内容
+
整个 Composite Decking 主题组
```

### 推荐结论格式

**事实：**

> 待真实数据填写。

**判断：**

> 新页面是否带来新的比较型搜索需求，还是主要接替原有页面展示，待主题组数据验证。

**动作：**

> 数据不足时继续观察，不提前重构页面。

---

## 11. 第十层：Search Console × 业务转化

对 WPC 企业站，不只看点击。

建议关联：

| 页面类型 | 主要下游行为 |
|---|---|
| 产品分类 | 查看系列 / 样品 / 询盘 |
| 产品页 | 样品 / 询盘 / 资料下载 |
| 比较内容 | 查看产品 / 比较下一步 |
| 安装内容 | 下载安装资料 / 查看产品 |
| 技术资料 | PDF / CAD / 技术联系 |
| 项目案例 | 查看产品 / 项目咨询 |

最终需要回答：

> 哪一类搜索需求带来的用户更接近真实业务？

而不是：

> 哪一篇文章流量最大？

---

## 12. 月度输出示例结构

### 本月事实

1. 全站点击 / 展示：待填。
2. 非品牌产品主题变化：待填。
3. 增长最快页面组：待填。
4. 下降最明显页面组：待填。
5. 新增高价值查询：待填。

### 本月判断

| 判断 | 证据 | 可信程度 |
|---|---|---|
| 待真实数据填写 |  |  |

### 本月动作

只选择有数据依据的动作：

```text
保持
继续观察
内部链接调整
标题 / 摘要微调
内容更新
技术修复
新页面
合并 / 重构
转化路径优化
```

---

## 13. 本示例验证的原则

1. **先看网站，再看单页。**
2. **先按页面职责分组，再解释总流量。**
3. **品牌增长和非品牌增长要分开。**
4. **Search Console 查询可以发现需求，但不能证明产品事实。**
5. **一个查询出现多个页面，不自动等于关键词内耗。**
6. **新页面的价值要看主题组增量，而不只是新页面自己的点击。**
7. **SEO 流量必须最终回到产品、资料和业务转化。**
8. **没有真实 Search Console 数据时，不制作虚假的完整案例数字。**
