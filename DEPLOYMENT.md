# 星河诗社网站 - 部署指南

## 网站已创建完成！

你的诗歌团体网站已经创建在 `poetry-group-website` 目录中。

---

## 本地预览

在项目目录中运行以下命令启动本地预览：

```bash
cd poetry-group-website
npm run dev
```

然后在浏览器中打开 http://localhost:3000 查看网站。

---

## 部署到互联网

我们使用 **Vercel** 部署网站，它是完全免费的！

### 步骤一：部署到 Vercel

1. 访问 [vercel.com](https://vercel.com) 并注册账号（可以用 GitHub 登录）

2. 点击 "New Project" 或 "新建项目"

3. 如果你的代码在 GitHub 上：
   - 选择 "Import Git Repository"
   - 选择你的项目仓库

4. 如果你的代码在本地：
   - 安装 Vercel CLI：`npm install -g vercel`
   - 在项目目录运行：`vercel`
   - 按照提示完成部署

5. 部署完成后，你会获得一个 `.vercel.app` 的免费域名

### 步骤二：购买自定义域名

你需要购买一个域名（每年约 30-60 元）。推荐平台：

| 平台 | 网址 | 特点 |
|------|------|------|
| 阿里云 | [wanwang.aliyun.com](https://wanwang.aliyun.com) | 国内常用，支持支付宝 |
| 腾讯云 | [dnspod.cn](https://www.dnspod.cn) | 国内常用，支持微信支付 |
| Namecheap | [namecheap.com](https://namecheap.com) | 国际平台，常有优惠 |

**域名建议**：
- 选择简短易记的域名
- 常见后缀：.com / .cn / .org / .me
- 例子：`xinghe-poetry.com` / `xinghepoetry.cn`

### 步骤三：在 Vercel 绑定自定义域名

1. 在 Vercel 项目中，进入 "Settings" > "Domains"

2. 点击 "Add Domain"，输入你购买的域名

3. Vercel 会给你 DNS 记录信息：
   ```
   类型: A 记录
   名称: @
   值: 76.76.21.21
   ```

4. 到你购买域名的平台，找到 DNS 管理：
   - 添加上述 A 记录
   - 或添加 CNAME 记录指向你的 Vercel 域名

5. 等待 DNS 生效（通常 10 分钟 - 24 小时）

6. 在 Vercel 中确认域名状态变为 "Valid Configuration"

---

## 修改网站内容

### 修改邮箱地址

编辑以下文件，将邮箱地址改为你自己的：

1. `app/submit/page.tsx` - 投稿页面的邮箱
2. `components/Footer.tsx` - 页脚的联系邮箱
3. `app/philosophy/page.tsx` - 理念页面的联系邮箱

搜索 `contact@xinghe.poetry` 并替换为你的真实邮箱。

### 修改网站名称和内容

1. 修改名称：
   - `app/layout.tsx` - 网站标题
   - `components/Navbar.tsx` - 导航栏名称
   - `components/Footer.tsx` - 页脚名称

2. 修改页面内容：
   - `app/page.tsx` - 首页内容
   - `app/works/page.tsx` - 作品列表（替换示例作品）
   - `app/philosophy/page.tsx` - 理念主张

---

## 后续维护

### 添加新作品

直接编辑 `app/works/page.tsx` 文件，在 `works` 数组中添加新作品。

### 更新内容

修改对应页面文件后，在 Vercel 会自动重新部署（如果连接了 GitHub），
或手动运行 `vercel --prod` 重新部署。

### 备份数据

建议将代码托管到 GitHub，方便备份和协作。

---

## 项目结构

```
poetry-group-website/
├── app/
│   ├── globals.css       # 全局样式
│   ├── layout.tsx        # 根布局
│   ├── page.tsx          # 首页
│   ├── works/            # 作品集页面
│   ├── philosophy/       # 理念页面
│   └── submit/           # 投稿页面
├── components/
│   ├── Navbar.tsx        # 导航栏
│   └── Footer.tsx        # 页脚
├── tailwind.config.ts    # Tailwind 配置（颜色主题）
└── package.json          # 项目依赖
```

---

## 常见问题

**Q: 部署后网站打不开？**
A: 检查 Vercel 部署状态，确保没有报错

**Q: 域名绑定不成功？**
A: DNS 生效需要时间，检查 DNS 记录是否正确添加

**Q: 如何修改网站颜色？**
A: 编辑 `tailwind.config.ts` 中的颜色配置

**Q: 投稿功能如何使用？**
A: 用户提交后会打开邮件客户端，内容已自动填充，直接发送即可

---

祝你的诗社网站运行顺利！如有问题可随时询问。
