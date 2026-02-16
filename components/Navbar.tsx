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
  ];

  return (
    <nav className="bg-white/95 backdrop-blur shadow-sm sticky top-0 z-50 border-b border-ocean-100">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex justify-between items-center h-14">
          <Link href="/" className="flex items-center gap-2">
            {/* 浮标 Logo */}
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              {/* 海浪 */}
              <path d="M2 24 Q8 20 16 24 Q24 28 30 24" stroke="#0ea5e9" strokeWidth="2" fill="none"/>
              <path d="M4 28 Q12 24 16 28 Q20 32 28 28" stroke="#38bdf8" strokeWidth="1.5" fill="none"/>
              {/* 浮标 */}
              <rect x="13" y="8" width="6" height="12" rx="1" fill="#f59e0b"/>
              <rect x="12" y="6" width="8" height="4" rx="1" fill="#f59e0b"/>
              <circle cx="16" cy="20" r="3" fill="#0ea5e9"/>
              <line x1="16" y1="2" x2="16" y2="6" stroke="#f59e0b" strokeWidth="2"/>
              {/* 闪烁点 */}
              <circle cx="16" cy="4" r="1.5" fill="#fbbf24"/>
            </svg>
            <span className="text-xl font-bold text-ocean-900">浮标</span>
          </Link>

          <div className="hidden md:flex space-x-6">
            {navItems.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                className="text-ocean-700 hover:text-coral-500 transition-colors text-sm font-medium"
              >
                {item.name}
              </Link>
            ))}
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-ocean-700"
          >
            {isOpen ? '✕' : '☰'}
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden pb-4">
            {navItems.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                className="block py-2 text-ocean-700 text-sm"
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
