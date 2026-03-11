# MBTI Personality Test

<div align="center">

![MBTI](https://img.shields.io/badge/MBTI-Personality%20Test-purple)
![License](https://img.shields.io/badge/license-MIT-blue)
![Version](https://img.shields.io/badge/version-1.0.0-green)

🎭 探索你的性格密码 | 🔮 发现真实的自己

</div>

## ✨ 特性

- 🎯 **两种测试模式**
  - ⚡ **快速测试**：16道题，约3分钟
  - 🎯 **精确测试**：48道题，约8分钟（每个维度12题，更准确）

- 🎨 **精美UI设计**
  - 渐变紫色主题
  - 流畅的动画效果
  - 响应式设计，支持手机和电脑
  - 双Emoji头像设计（🧱⚙️、🛡️💝等）

- 📊 **详细的分析结果**
  - 16种人格类型详解
  - 性格特点描述
  - 核心优势分析
  - 潜在挑战提醒
  - 适合职业推荐
  - 关键词标签

- 🔄 **完善的测试体验**
  - 支持上一题/下一题切换
  - 实时进度显示（已完成/剩余）
  - 测试结果分数展示
  - 一键重新测试

## 🚀 快速开始

### 方式一：直接打开

直接用浏览器打开 `index.html` 即可使用！

### 方式二：本地服务器

```bash
# 进入项目目录
cd mbti-test

# 启动本地服务器
python3 -m http.server 8080

# 在浏览器中访问
# http://localhost:8080
```

## 📁 项目结构

```
mbti-test/
├── index.html          # 主页面文件
├── mbti.js            # JavaScript逻辑和数据
└── README.md          # 项目说明文档
```

## 🎭 16型人格一览

| 代码 | 名称 | 头像 | 简介 |
|------|------|------|------|
| ISTJ | 物流师 | 🧱⚙️ | 踏实可靠的守护者 |
| ISFJ | 守卫者 | 🛡️💝 | 温暖的守护者 |
| INFJ | 提倡者 | 🌟🔮 | 深邃的理想主义者 |
| INTJ | 建筑师 | 🏗️🎯 | 战略性的思想家 |
| ISTP | 鉴赏家 | 🔧⚡ | 勇敢的实践者 |
| ISFP | 探险家 | 🎨🦋 | 自由的艺术家 |
| INFP | 调停者 | 🕊️💜 | 浪漫的理想主义者 |
| INTP | 逻辑学家 | 🔬💡 | 好奇的发明家 |
| ESTP | 企业家 | 🚀🎪 | 充满活力的冒险家 |
| ESFP | 表演者 | 🎭🌈 | 热情的entertainer |
| ENFP | 竞选者 | ✨🎨 | 热情的自由精神 |
| ENTP | 辩论家 | ⚡💎 | 聪明机智的辩论家 |
| ESTJ | 总经理 | 👓📋 | 高效的管理者 |
| ESFJ | 执政官 | 🤝💖 | 热情的照顾者 |
| ENFJ | 主人公 | 👑🌟 | 魅力的领导者 |
| ENTJ | 指挥官 | 🎯💎 | 果断的战略家 |

## 🛠️ 技术栈

- **HTML5** - 页面结构
- **CSS3** - 样式设计和动画效果
- **JavaScript (ES6+)** - 交互逻辑和数据处理
- **Python http.server** - 本地开发服务器（可选）

## 🎨 核心功能说明

### 测试算法

基于经典的MBTI（Myers-Briggs Type Indicator）理论，通过4个维度的测试来确定人格类型：

1. **E (外向) vs I (内向)** - 能量来源
2. **S (感觉) vs N (直觉)** - 信息获取方式
3. **T (思考) vs F (情感)** - 决策方式
4. **J (判断) vs P (感知)** - 生活态度

### 数据结构

```javascript
// 问题格式
{
    text: "问题描述",
    options: [
        { text: "选项A", dimension: "维度代码" },
        { text: "选项B", dimension: "维度代码" }
    ]
}

// 人格类型格式
{
    name: "人格名称",
    avatar: "🎭💎",
    desc: "简短描述",
    details: {
        "🌟 性格特点": "详细描述",
        "💪 核心优势": "优势列表",
        "⚠️ 潜在挑战": "挑战说明",
        "💼 适合职业": "职业推荐",
        "🔑 关键词": "关键词"
    }
}
```

## 📝 开发说明

### 添加新问题

编辑 `mbti.js` 文件，在 `quickQuestions` 或 `fullQuestions` 数组中添加问题对象。

### 修改人格描述

编辑 `mbti.js` 文件，在 `personalityTypes` 对象中修改对应类型的 `desc` 和 `details`。

### 自定义样式

编辑 `index.html` 文件中的 `<style>` 标签部分。

## 🤝 贡献

欢迎提交 Issue 和 Pull Request！

## 📄 许可证

[MIT License](LICENSE)

## 🙏 致谢

- MBTI理论基于Myers-Briggs Type Indicator
- 感谢所有使用和反馈的用户

---

<div align="center">
---

<div align="center">

Made with ❤️ by [lzwanan](https://github.com/lzwanan)
lzwanan@outlook.com

[⭐ Star](https://github.com/lzwanan/mbti-personality-test) | [🍴 Fork](https://github.com/lzwanan/mbti-personality-test/fork) | [📝 Report Issue](https://github.com/lzwanan/mbti-personality-test/issues)

</div>
