# 浮标 BUOY - 网站使用指南

## 快速开始

### 启动网站
双击 `启动.bat` 文件，或在项目目录运行：
```bash
npm run dev
```

然后访问 http://localhost:3000

---

## 项目信息

- **项目位置**: `D:\project\poetry-group-website`
- **技术栈**: Next.js 15 + React 19 + TypeScript + Tailwind CSS
- **联系邮箱**: 1595486059h@gmail.com

---

## 文件说明

| 文件 | 用途 |
|------|------|
| `启动.bat` | 双击启动网站 |
| `项目日志.md` | 完整的开发日志 |
| `DEPLOYMENT.md` | 部署指南 |

---

## 编辑内容

### 添加作品
编辑 `app/works/page.tsx`：
```javascript
const works = [
  {
    id: 1,
    title: '作品标题',
    author: '作者',
    content: `内容`,
    category: '现代诗',
    date: '2024-01-16'
  },
  // 添加更多...
];
```

### 修改首页
编辑 `app/page.tsx`，找到 `[...]` 标记的内容进行替换

### 修改关于页面
编辑 `app/philosophy/page.tsx`

---

## 投稿审核流程

1. 用户投稿 → 邮件发送到 `1595486059h@gmail.com`
2. 在邮箱查看投稿
3. 审核通过后，编辑 `app/works/page.tsx` 添加作品
4. 保存后自动刷新

---

## 部署到互联网

### 使用 Vercel（免费）

1. 访问 [vercel.com](https://vercel.com) 注册账号
2. 安装 Vercel CLI：`npm install -g vercel`
3. 在项目目录运行：`vercel`
4. 按提示完成部署

### 绑定自定义域名

1. 购买域名（阿里云/腾讯云，约 30-60 元/年）
2. 在 Vercel 项目设置中添加域名
3. 在域名平台添加 DNS 记录

---

## 常用命令

```bash
# 启动开发服务器
npm run dev

# 构建项目
npm run build

# 启动生产服务器
npm start

# 部署到 Vercel
vercel --prod
```

---

## 需要帮助？

查看 `项目日志.md` 了解完整开发记录
查看 `DEPLOYMENT.md` 了解详细部署步骤
