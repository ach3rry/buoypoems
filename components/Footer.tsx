'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Footer() {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    await navigator.clipboard.writeText('[your-email@example.com]');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <footer className="bg-ukiyo-sumi text-ukiyo-shironeri mt-24 relative overflow-hidden">
      {/* 装饰性波浪纹样 */}
      <div className="absolute top-0 left-0 right-0 opacity-10">
        <svg width="100%" height="40" viewBox="0 0 1200 40" preserveAspectRatio="none">
          <path d="M0 20 Q150 0 300 20 T600 20 T900 20 T1200 20" stroke="#E63946" strokeWidth="2" fill="none"/>
          <path d="M0 30 Q150 10 300 30 T600 30 T900 30 T1200 30" stroke="#244F8A" strokeWidth="1.5" fill="none"/>
        </svg>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-16 relative z-10">
        {/* Logo & Tagline */}
        <div className="flex flex-col items-center mb-10">
          <svg width="64" height="64" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="mb-4">
            <circle cx="20" cy="20" r="18" stroke="#E63946" strokeWidth="3" fill="none"/>
            <circle cx="20" cy="20" r="14" stroke="#1D3557" strokeWidth="1.5" fill="none"/>
            <rect x="17" y="10" width="6" height="14" rx="1" fill="#C9B037" stroke="#1A1A1A" strokeWidth="1.5"/>
            <rect x="16" y="8" width="8" height="4" rx="1" fill="#E63946" stroke="#1A1A1A" strokeWidth="1.5"/>
            <circle cx="20" cy="25" r="3.5" fill="#C9B037" stroke="#1A1A1A" strokeWidth="1.5"/>
            <circle cx="20" cy="25" r="1.5" fill="#F5F3EF"/>
            <line x1="20" y1="2" x2="20" y2="8" stroke="#C9B037" strokeWidth="2.5"/>
            <circle cx="20" cy="2" r="2" fill="#E63946" stroke="#1A1A1A" strokeWidth="1"/>
            <path d="M8 32 Q14 28 20 32 Q26 36 32 32" stroke="#244F8A" strokeWidth="2" fill="none" strokeLinecap="round"/>
            <path d="M10 36 Q16 32 20 36 Q24 40 30 36" stroke="#1D3557" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
          </svg>
          <p className="text-sm tracking-[0.3em] text-ukiyo-kin uppercase">先锋 · 年轻 · 探索</p>
        </div>

        {/* Links */}
        <div className="flex flex-wrap justify-center gap-8 mb-10">
          {['首页', '作品', '关于', '投稿'].map((item) => (
            <Link
              key={item}
              href={item === '首页' ? '/' : item === '作品' ? '/works' : item === '关于' ? '/philosophy' : '/submit'}
              className="text-ukiyo-shironeri/80 hover:text-ukiyo-beni transition-colors relative group"
            >
              {item}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-ukiyo-beni group-hover:w-full transition-all duration-200"></span>
            </Link>
          ))}
        </div>

        {/* Divider */}
        <div className="flex items-center justify-center gap-4 mb-8">
          <div className="w-16 h-px bg-ukiyo-kin"></div>
          <div className="w-2 h-2 bg-ukiyo-beni rotate-45"></div>
          <div className="w-16 h-px bg-ukiyo-kin"></div>
        </div>

        {/* Contact */}
        <div className="text-center mb-8">
          <p className="text-ukiyo-shironeri/70 text-sm mb-1">联系邮箱</p>
          <div className="flex items-center justify-center gap-2">
            <span className="text-ukiyo-beni font-mono">[your-email@example.com]</span>
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
                <span className="absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-1 bg-ukiyo-sumi text-ukiyo-shironeri text-xs whitespace-nowrap">
                  已复制
                </span>
              )}
            </button>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center text-xs text-ukiyo-shironeri/50">
          <p>&copy; {new Date().getFullYear()} 浮标 BUOY. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
