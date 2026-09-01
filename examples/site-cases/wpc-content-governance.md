# WPC 建材企业网站历史内容治理示例

> 本文件用于演示方法，不包含真实企业 Search Console 后台数据，也不虚构流量、外链和转化数字。实际使用时应替换为目标网站真实 URL 和数据。

## 1. 项目背景

假设一个运营多年的 WPC 建材企业网站已经积累：

- Composite Decking 产品页；
- WPC Wall Cladding 产品页；
- 多年博客文章；
- 安装指南；
- 技术 PDF；
- 项目案例；
- 旧产品系列；
- 展会新闻；
- 多次网站改版遗留 URL。

当前问题不是缺内容，而是：

```text
页面越来越多
↓
同类内容重复
↓
旧产品 / 旧 PDF 混在新内容中
↓
内部链接逐渐混乱
↓
不知道哪些应该继续保留
```

因此进行一次内容资产治理。

---

## 2. 示例页面组

### Composite Decking

```text
/products/composite-decking/
/products/composite-decking/series-a/
/products/composite-decking/series-b/
/resources/composite-decking-vs-wood/
/resources/wood-vs-composite-decking/
/resources/composite-decking-installation/
```

### WPC Wall Cladding

```text
/products/wpc-wall-cladding/
/resources/wpc-wall-cladding-vs-wood-cladding/
/resources/wall-cladding-installation/
/technical/wpc-wall-cladding-datasheet/
```

### 历史内容

```text
/news/exhibition-2022/
/news/old-product-launch-2021/
/uploads/wpc-cladding-datasheet-v1.pdf
/products/composite-decking-old-series/
```

---

## 3. 第一类：比较文章重复

发现：

```text
/resources/composite-decking-vs-wood/
/resources/wood-vs-composite-decking/
```

两篇文章长期解决同一个问题：

> Composite Decking 和 Wood 应该怎样选择？

进一步确认：

- 搜索意图一致；
- 页面类型一致；
- 大纲高度重叠；
- 用户没有必要同时阅读两篇；
- 内部链接也没有明确哪个是主页面。

### 治理决策

保留：

```text
/resources/composite-decking-vs-wood/
```

处理：

```text
整理两篇的独有证据
↓
补充到目标页
↓
旧页面 301 到目标页
↓
更新内部链接
↓
Sitemap 移除旧 URL
↓
观察 Search Console 查询是否逐步集中
```

不是简单删除旧文章。

---

## 4. 第二类：停产产品

页面：

```text
/products/composite-decking-old-series/
```

产品已经停产。

### 情况 A：存在真实升级替代系列

如果产品团队确认：

```text
Old Series
→ Series B
```

并且两者用户用途、规格和替代关系真实明确，可以考虑永久重定向到 Series B。

### 情况 B：仍有客户售后需求

如果旧产品仍需要：

- 安装说明；
- 配件查询；
- Warranty；
- 历史项目参考；

则更适合保留：

```text
Old Series — Discontinued
```

并清楚标注停产状态，而不是为了 SEO 强制重定向。

---

## 5. 第三类：旧技术 PDF

旧文件：

```text
/uploads/wpc-cladding-datasheet-v1.pdf
```

新文件：

```text
/uploads/wpc-cladding-datasheet-v3.pdf
```

风险是：

- Google 仍然可能发现旧文件；
- 某些旧文章仍然链接 v1；
- 客户可能保存了旧链接；
- v1 的安装或性能信息可能已经过时。

### 治理步骤

1. 产品 / 技术确认 v1 是否允许继续公开。
2. 检查哪些 HTML 页面仍引用 v1。
3. 所有正常页面改为引用最新版。
4. 如果 v1 不应继续使用，根据服务器和资料策略决定：
   - 重定向到最新文件；或
   - 重定向到对应技术资料说明页；或
   - 返回正常移除状态。
5. 如果必须保留历史版本，则明确标记：

```text
Archived — Not for Current Projects
```

避免仅从 SEO 角度处理。

---

## 6. 第四类：历史展会新闻

页面：

```text
/news/exhibition-2022/
```

判断问题：

```text
是否仍有品牌历史价值？
是否包含项目 / 客户 / 媒体引用？
是否仍被外部网站链接？
是否只是过期邀请？
```

### 如果只是“欢迎来展位”的短期页面

活动已经结束多年，而且没有长期价值，可以考虑正常移除。

### 如果包含高质量展会总结和品牌资料

可以保留，但明确：

```text
Event Date: 2022
Event Status: Ended
```

不要为了“旧”就删除。

---

## 7. 第五类：表现下降的安装指南

页面：

```text
/resources/composite-decking-installation/
```

假设 Search Console 显示表现下降。

不立即执行：

```text
加 1000 字
改标题
改日期
```

先检查：

1. 产品安装方式有没有变化？
2. 现有文章是否仍对应当前产品？
3. 搜索结果是否更偏向视频或官方安装手册？
4. 内部链接是否在改版后减少？
5. 页面是否出现技术索引问题？
6. 用户是否更常搜索具体系统或型号安装？

### 可能结论

如果页面事实正确，但搜索需求分化：

```text
通用安装指南
↓
继续作为枢纽页
↓
链接具体产品系列安装资料
```

而不是删除原页面。

---

## 8. 第六类：查询词重叠但页面职责不同

假设：

```text
/products/wpc-wall-cladding/
/resources/wpc-wall-cladding-vs-wood-cladding/
```

都获得：

```text
wpc wall cladding
```

这不自动定义为关键词内耗。

因为：

```text
产品页
→ 产品选择与采购

比较页
→ 材料比较与决策
```

应继续观察：

- 主要查询结构；
- 用户意图；
- 两个页面的标题和内部链接是否明确；
- Google 是否长期错误地用比较页替代产品页承担交易型查询。

只有职责真正冲突时才治理。

---

## 9. 示例治理优先级

### P0

```text
旧 Datasheet 包含已失效技术参数
```

立即处理。

### P1

```text
Composite Decking 两篇比较文章高度重复
```

计划合并。

### P1

```text
停产产品仍显示 Available / Request Quote
```

立即修改产品状态。

### P2

```text
历史展会页内容较薄
```

根据历史价值和外链再判断。

### P3

```text
某篇低搜索量案例长期只有少量展示
```

如果案例仍有销售证明价值，则无需为了 SEO 删除。

---

## 10. 治理完成后的目标结构

```text
Products
├── Composite Decking
│   ├── Current Series A
│   └── Current Series B
└── WPC Wall Cladding

Resources
├── Comparisons
│   ├── Composite Decking vs Wood
│   └── WPC Wall Cladding vs Wood
├── Installation
└── Technical Resources

Projects
└── Real Project Cases

Archive / Discontinued
└── 仅保留真正有历史或客户支持价值的内容
```

而不是：

```text
不断新建页面
+
永远不处理历史页面
```

---

## 11. 治理后验证

### 技术层

检查：

- 所有合并 URL 的重定向；
- 重定向是否直接到最终目标；
- Sitemap；
- Canonical；
- 内部链接；
- 旧产品页状态；
- PDF 链接。

### Search Console 层

按页面组观察：

```text
/products/
/resources/comparisons/
/resources/installation/
/technical/
```

重点不是某一天流量是否立即增长，而是：

> **查询与页面职责是否逐渐更加集中和清晰。**

---

## 12. 本案例验证的核心原则

```text
低流量
≠
没价值

旧内容
≠
必须删除

相同查询
≠
必然内耗

停产产品
≠
统一 301 首页

旧 PDF
≠
只替换文件就结束
```

历史内容治理的真正目标是：

> **让整个网站中的页面、产品、资料和链接重新与当前业务现实保持一致。**
