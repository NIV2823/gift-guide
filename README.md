# 🎁 送礼指南工具

一个温馨简约的送礼推荐工具，根据送礼对象、预算、偏好智能推荐礼物并生成祝福语。

## ✨ 功能特性

- **送礼对象选择**：支持老师、同学、家人、朋友、同事、长辈、恋人、领导、客户、小孩等十大对象类型
- **精细预算档位**：从50元以下到10000元以上，共9个档位
- **二级分类筛选**：大类+小类联动选择，涵盖日用百货、文具文创、食品饮品、家居生活、时尚饰品、数码电子、轻奢礼品7大类
- **智能礼物推荐**：根据筛选条件推荐3-5个礼物，含推荐理由和适合场景
- **问候语生成**：自动生成对应场景的祝福语，支持一键复制
- **响应式设计**：暖色系温馨界面，适配手机和电脑

## 🚀 快速开始

```bash
# 安装依赖
npm install

# 启动开发服务器
npm run dev

# 构建生产版本
npm run build
```

## 🛠 技术栈

- **Vite** - 构建工具
- **Vue 3** - 前端框架（Composition API）
- **JavaScript** - 开发语言
- **Element Plus** - UI 组件库

## 📁 项目结构

```
gift-guide-app/
├── .gitignore
├── package.json
├── vite.config.js
├── README.md
├── index.html
└── src/
    ├── main.js
    ├── App.vue
    ├── components/
    │   ├── GiftFilter.vue      # 筛选表单（大类小类联动）
    │   └── GiftResult.vue      # 推荐结果展示
    ├── data/
    │   └── giftData.js         # 礼物数据 + 分类 + 问候语
    └── assets/
```

## 📄 License

MIT