'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useState } from 'react';

export default function SubmitPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    title: '',
    content: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const toEmail = '[your-email@example.com]'; // TODO: 替换为实际投稿邮箱
    const subject = encodeURIComponent(`【浮标投稿】${formData.title}`);
    const body = encodeURIComponent(
      `作者：${formData.name}\n邮箱：${formData.email}\n\n标题：${formData.title}\n\n内容：\n${formData.content}`
    );

    window.location.href = `mailto:${toEmail}?subject=${subject}&body=${body}`;
  };

  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    await navigator.clipboard.writeText('[your-email@example.com]');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-ukiyo-shironeri">
        {/* 页面标题区 */}
        <div className="py-16 bg-white border-b-4 border-ukiyo-beni">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-ukiyo-sumi mb-4 tracking-wider" style={{fontFamily: 'Georgia, serif'}}>投稿</h1>
            <p className="text-ukiyo-beni tracking-widest uppercase">加入浮标，让你的诗漂流到更远的地方</p>
            <div className="flex items-center justify-center gap-4 mt-6">
              <div className="w-16 h-px bg-ukiyo-sumi/30"></div>
              <div className="w-2 h-2 bg-ukiyo-beni rotate-45"></div>
              <div className="w-16 h-px bg-ukiyo-sumi/30"></div>
            </div>
          </div>
        </div>

        {/* 表单区 */}
        <div className="max-w-2xl mx-auto px-4 py-16">
          <div className="bg-white border-4 border-ukiyo-sumi shadow-relief p-8 md:p-12">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-bold text-ukiyo-sumi mb-3 tracking-wider">作者姓名</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-5 py-4 border-2 border-ukiyo-sumi bg-ukiyo-shironeri focus:outline-none focus:border-ukiyo-beni transition-colors"
                  placeholder="姓名或笔名"
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-ukiyo-sumi mb-3 tracking-wider">联系邮箱</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-5 py-4 border-2 border-ukiyo-sumi bg-ukiyo-shironeri focus:outline-none focus:border-ukiyo-beni transition-colors"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-ukiyo-sumi mb-3 tracking-wider">作品标题</label>
                <input
                  type="text"
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                  required
                  className="w-full px-5 py-4 border-2 border-ukiyo-sumi bg-ukiyo-shironeri focus:outline-none focus:border-ukiyo-beni transition-colors"
                  placeholder="作品标题"
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-ukiyo-sumi mb-3 tracking-wider">作品内容</label>
                <textarea
                  name="content"
                  value={formData.content}
                  onChange={handleChange}
                  required
                  rows={14}
                  className="w-full px-5 py-4 border-2 border-ukiyo-sumi bg-ukiyo-shironeri focus:outline-none focus:border-ukiyo-beni transition-colors font-serif leading-loose"
                  placeholder="粘贴作品内容..."
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-ukiyo-beni text-white font-bold tracking-wider shadow-relief hover:shadow-relief-lg hover:translate-x-1 hover:translate-y-1 transition-all duration-200"
              >
                提交投稿
              </button>
            </form>

            <div className="mt-10 pt-8 border-t-2 border-ukiyo-sumi/10 text-center">
              <p className="text-ukiyo-sumi/60 text-sm mb-3 tracking-wider">或直接发送邮件</p>
              <div className="flex items-center justify-center gap-2">
                <span className="text-ukiyo-beni font-bold font-mono">[your-email@example.com]</span>
                <button
                  onClick={copyEmail}
                  className="p-1 hover:bg-ukiyo-shironeri/20 rounded transition-colors group relative"
                  title="复制邮箱"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-ukiyo-beni">
                    <rect x="9" y="9" width="13" height="13" rx="2" ry="2"/>
                    <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/>
                  </svg>
                  {copied && (
                    <span className="absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-1 bg-ukiyo-sumi text-white text-xs whitespace-nowrap">
                      已复制
                    </span>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
