'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: '首页', path: '/' },
    { name: '作品', path: '/works' },
    { name: '关于', path: '/philosophy' },
    { name: '投稿', path: '/submit' },
    { name: '管理', path: '/admin' },
  ];

  return (
    <nav className="bg-ukiyo-shironeri border-b-4 border-ukiyo-beni sticky top-0 z-50 shadow-relief-sm">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center gap-3 group">
            {/* 浮世绘风格 Logo */}
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="transition-transform group-hover:scale-110">
              {/* 装饰圆环 */}
              <circle cx="20" cy="20" r="18" stroke="#E63946" strokeWidth="3" fill="none"/>
              <circle cx="20" cy="20" r="14" stroke="#1D3557" strokeWidth="1.5" fill="none"/>

              {/* 浮标本体 - 浮雕风格 */}
              <rect x="17" y="10" width="6" height="14" rx="1" fill="#C9B037" stroke="#1A1A1A" strokeWidth="1.5"/>
              <rect x="16" y="8" width="8" height="4" rx="1" fill="#E63946" stroke="#1A1A1A" strokeWidth="1.5"/>

              {/* 灯光 */}
              <circle cx="20" cy="25" r="3.5" fill="#C9B037" stroke="#1A1A1A" strokeWidth="1.5"/>
              <circle cx="20" cy="25" r="1.5" fill="#F5F3EF"/>

              {/* 天线 */}
              <line x1="20" y1="2" x2="20" y2="8" stroke="#C9B037" strokeWidth="2.5"/>
              <circle cx="20" cy="2" r="2" fill="#E63946" stroke="#1A1A1A" strokeWidth="1"/>

              {/* 海浪装饰 */}
              <path d="M8 32 Q14 28 20 32 Q26 36 32 32" stroke="#244F8A" strokeWidth="2" fill="none" strokeLinecap="round"/>
              <path d="M10 36 Q16 32 20 36 Q24 40 30 36" stroke="#1D3557" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
            </svg>
            <div className="flex flex-col">
              <span className="text-xl font-bold text-ukiyo-sumi tracking-wider" style={{fontFamily: 'Georgia, serif'}}>浮標</span>
              <span className="text-[10px] text-ukiyo-beni tracking-[0.3em] uppercase font-semibold">BUOY</span>
            </div>
          </Link>

          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                className="px-4 py-2 text-ukiyo-sumi font-medium hover:bg-ukiyo-beni hover:text-white transition-all duration-200 relative group"
              >
                {item.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-ukiyo-sumi group-hover:w-full transition-all duration-200"></span>
              </Link>
            ))}
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-ukiyo-sumi p-2 border-2 border-ukiyo-sumi hover:bg-ukiyo-beni hover:text-white hover:border-ukiyo-beni transition-all"
          >
            {isOpen ? '✕' : '☰'}
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden pb-4 border-t-2 border-ukiyo-indigo/20">
            {navItems.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                className="block py-3 px-4 text-ukiyo-sumi font-medium hover:bg-ukiyo-kin/20 hover:pl-6 transition-all border-l-2 border-transparent hover:border-ukiyo-beni"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}
