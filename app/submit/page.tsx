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

    const toEmail = '1595486059h@gmail.com';
    const subject = encodeURIComponent(`【浮标投稿】${formData.title}`);
    const body = encodeURIComponent(
      `作者：${formData.name}\n邮箱：${formData.email}\n\n标题：${formData.title}\n\n内容：\n${formData.content}`
    );

    window.location.href = `mailto:${toEmail}?subject=${subject}&body=${body}`;
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
      <main className="min-h-screen bg-ocean-50">
        <div className="max-w-2xl mx-auto px-4 py-12">
          <div className="text-center mb-10">
            <h1 className="text-3xl font-bold text-ocean-900 mb-2">投稿</h1>
            <p className="text-ocean-600">加入浮标，让你的诗漂流到更远的地方</p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-sm">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-sm font-medium text-ocean-900 mb-2">作者姓名</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-ocean-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-ocean-500 focus:border-transparent bg-ocean-50"
                  placeholder="姓名或笔名"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-ocean-900 mb-2">联系邮箱</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-ocean-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-ocean-500 focus:border-transparent bg-ocean-50"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-ocean-900 mb-2">作品标题</label>
                <input
                  type="text"
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-ocean-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-ocean-500 focus:border-transparent bg-ocean-50"
                  placeholder="作品标题"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-ocean-900 mb-2">作品内容</label>
                <textarea
                  name="content"
                  value={formData.content}
                  onChange={handleChange}
                  required
                  rows={12}
                  className="w-full px-4 py-3 border border-ocean-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-ocean-500 focus:border-transparent bg-ocean-50 font-serif leading-loose"
                  placeholder="粘贴作品内容..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-ocean-900 text-white py-3 rounded-xl font-medium hover:bg-ocean-800 transition-colors"
              >
                提交投稿
              </button>
            </form>

            <div className="mt-8 pt-6 border-t border-ocean-100 text-center">
              <p className="text-ocean-600 text-sm mb-2">或直接发送邮件</p>
              <a href="mailto:1595486059h@gmail.com" className="text-ocean-900 font-medium hover:underline">
                1595486059h@gmail.com
              </a>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
