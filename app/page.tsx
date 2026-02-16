import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-b from-ocean-950 via-ocean-900 to-ocean-800 text-white py-24 md:py-32">
          {/* 背景装饰 */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-10 left-10 w-64 h-64 border border-ocean-400 rounded-full"></div>
            <div className="absolute top-20 right-20 w-48 h-48 border border-ocean-400 rounded-full"></div>
            <div className="absolute bottom-20 left-1/3 w-96 h-96 border border-ocean-400 rounded-full"></div>
          </div>

          <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
            {/* 大 Logo */}
            <div className="mb-8">
              <svg width="80" height="80" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="mx-auto">
                <path d="M2 24 Q8 20 16 24 Q24 28 30 24" stroke="#38bdf8" strokeWidth="2" fill="none"/>
                <path d="M4 28 Q12 24 16 28 Q20 32 28 28" stroke="#7dd3fc" strokeWidth="1.5" fill="none"/>
                <rect x="13" y="8" width="6" height="12" rx="1" fill="#f59e0b"/>
                <rect x="12" y="6" width="8" height="4" rx="1" fill="#f59e0b"/>
                <circle cx="16" cy="20" r="3" fill="#38bdf8"/>
                <line x1="16" y1="2" x2="16" y2="6" stroke="#f59e0b" strokeWidth="2"/>
                <circle cx="16" cy="4" r="1.5" fill="#fbbf24"/>
              </svg>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold mb-4 tracking-tight">浮标</h1>
            <p className="text-2xl md:text-3xl text-ocean-200 mb-6 font-light tracking-widest">BUOY</p>

            <div className="flex items-center justify-center gap-4 mb-8 text-ocean-300">
              <span>先锋</span>
              <span className="w-1 h-1 bg-coral-400 rounded-full"></span>
              <span>年轻</span>
              <span className="w-1 h-1 bg-coral-400 rounded-full"></span>
              <span>探索</span>
            </div>

            <p className="text-lg text-ocean-300 mb-10 max-w-xl mx-auto leading-relaxed">
              在诗的海洋里，我们是浮标。随波逐流，却不随波逐流。
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/works"
                className="bg-coral-500 text-white px-8 py-3 rounded-full font-medium hover:bg-coral-600 transition-all duration-200 hover:scale-105"
              >
                阅读作品
              </Link>
              <Link
                href="/submit"
                className="border-2 border-ocean-300 text-ocean-200 px-8 py-3 rounded-full font-medium hover:bg-ocean-300 hover:text-ocean-900 transition-all duration-200"
              >
                投稿参与
              </Link>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="py-20 bg-white">
          <div className="max-w-3xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-ocean-900 mb-4">关于浮标</h2>
              <div className="w-16 h-1 bg-coral-500 mx-auto"></div>
            </div>
            <div className="prose prose-lg max-w-none mx-auto text-ocean-700">
              <p className="text-center leading-relaxed mb-6">
                [在这里介绍浮标诗歌团体]
              </p>
              <p className="text-center leading-relaxed text-ocean-600">
                我们是一群年轻的写作者，在语言的边界探索可能性的浮标。
              </p>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="py-20 bg-ocean-50">
          <div className="max-w-5xl mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow text-center">
                <div className="w-12 h-12 bg-ocean-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">⚡</span>
                </div>
                <h3 className="font-bold text-ocean-900 mb-2">先锋</h3>
                <p className="text-ocean-600 text-sm">[描述浮标的先锋特质]</p>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow text-center">
                <div className="w-12 h-12 bg-ocean-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🌊</span>
                </div>
                <h3 className="font-bold text-ocean-900 mb-2">年轻</h3>
                <p className="text-ocean-600 text-sm">[描述浮标的年轻特质]</p>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow text-center">
                <div className="w-12 h-12 bg-ocean-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🧭</span>
                </div>
                <h3 className="font-bold text-ocean-900 mb-2">探索</h3>
                <p className="text-ocean-600 text-sm">[描述浮标的探索特质]</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
