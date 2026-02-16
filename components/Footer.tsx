import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-ocean-950 text-ocean-200 mt-20">
      <div className="max-w-5xl mx-auto px-4 py-12">
        {/* Logo & Tagline */}
        <div className="flex flex-col items-center mb-8">
          <svg width="48" height="48" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="mb-3">
            <path d="M2 24 Q8 20 16 24 Q24 28 30 24" stroke="#38bdf8" strokeWidth="2" fill="none"/>
            <path d="M4 28 Q12 24 16 28 Q20 32 28 28" stroke="#0ea5e9" strokeWidth="1.5" fill="none"/>
            <rect x="13" y="8" width="6" height="12" rx="1" fill="#f59e0b"/>
            <rect x="12" y="6" width="8" height="4" rx="1" fill="#f59e0b"/>
            <circle cx="16" cy="20" r="3" fill="#38bdf8"/>
            <line x1="16" y1="2" x2="16" y2="6" stroke="#f59e0b" strokeWidth="2"/>
            <circle cx="16" cy="4" r="1.5" fill="#fbbf24"/>
          </svg>
          <p className="text-sm text-ocean-400">先锋 · 年轻 · 探索</p>
        </div>

        {/* Links */}
        <div className="flex flex-wrap justify-center gap-6 mb-8 text-sm">
          <Link href="/" className="hover:text-white transition-colors">首页</Link>
          <Link href="/works" className="hover:text-white transition-colors">作品</Link>
          <Link href="/philosophy" className="hover:text-white transition-colors">关于</Link>
          <Link href="/submit" className="hover:text-white transition-colors">投稿</Link>
        </div>

        {/* Contact */}
        <div className="text-center text-sm text-ocean-400 mb-6">
          <p>联系邮箱: 1595486059h@gmail.com</p>
        </div>

        {/* Copyright */}
        <div className="text-center text-xs text-ocean-600 pt-6 border-t border-ocean-900">
          <p>&copy; {new Date().getFullYear()} 浮标 BUOY. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
