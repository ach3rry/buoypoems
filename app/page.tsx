import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-ukiyo-shironeri">
        {/* Hero Section - 浮世绘风格 */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
          {/* 背景装饰 - 浮世绘波浪 */}
          <div className="absolute inset-0 opacity-5">
            <svg width="100%" height="100%" preserveAspectRatio="none" viewBox="0 0 1200 800">
              <defs>
                <pattern id="waves" x="0" y="0" width="200" height="100" patternUnits="userSpaceOnUse">
                  <path d="M0 50 Q50 20 100 50 T200 50" stroke="#E63946" strokeWidth="2" fill="none"/>
                  <path d="M0 70 Q50 40 100 70 T200 70" stroke="#244F8A" strokeWidth="1.5" fill="none"/>
                  <path d="M0 90 Q50 60 100 90 T200 90" stroke="#1D3557" strokeWidth="1" fill="none"/>
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#waves)"/>
            </svg>
          </div>

          {/* 装饰边框 */}
          <div className="absolute inset-8 md:inset-16 border-4 border-ukiyo-sumi/10 pointer-events-none"></div>
          <div className="absolute inset-10 md:inset-20 border-2 border-ukiyo-beni/20 pointer-events-none"></div>

          <div className="max-w-5xl mx-auto px-4 text-center relative z-10 py-20">
            {/* 大 Logo */}
            <div className="mb-8">
              <div className="inline-block p-8 bg-white border-4 border-ukiyo-sumi shadow-relief-lg">
                <svg width="120" height="120" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="20" cy="20" r="18" stroke="#E63946" strokeWidth="2.5" fill="none"/>
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
              </div>
            </div>

            {/* 标题 - 浮雕效果 */}
            <div className="mb-6">
              <h1 className="text-6xl md:text-8xl font-bold text-ukiyo-sumi mb-2 tracking-wider" style={{fontFamily: 'Georgia, serif', textShadow: '4px 4px 0px rgba(230, 57, 70, 0.3)'}}>
                浮標
              </h1>
              <p className="text-2xl md:text-3xl text-ukiyo-beni tracking-[0.5em] font-semibold">BUOY</p>
            </div>

            {/* 标语 */}
            <div className="flex items-center justify-center gap-4 mb-8 text-ukiyo-sumi/80">
              <span className="text-lg tracking-widest">先锋</span>
              <span className="w-2 h-2 bg-ukiyo-beni rotate-45"></span>
              <span className="text-lg tracking-widest">年轻</span>
              <span className="w-2 h-2 bg-ukiyo-beni rotate-45"></span>
              <span className="text-lg tracking-widest">探索</span>
            </div>

            {/* 描述 */}
            <p className="text-lg md:text-xl text-ukiyo-sumi/70 mb-12 max-w-2xl mx-auto leading-relaxed font-light">
              在诗的海洋里，我们是浮标。随波逐流，却不随波逐流。
            </p>

            {/* 按钮组 - 浮雕风格 */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/works"
                className="px-10 py-4 bg-ukiyo-beni text-white font-bold tracking-wider shadow-relief hover:shadow-relief-lg hover:translate-x-1 hover:translate-y-1 transition-all duration-200"
              >
                阅读作品
              </Link>
              <Link
                href="/submit"
                className="px-10 py-4 bg-ukiyo-sumi text-white font-bold tracking-wider shadow-relief hover:shadow-relief-lg hover:translate-x-1 hover:translate-y-1 transition-all duration-200"
              >
                投稿参与
              </Link>
            </div>
          </div>

          {/* 底部装饰 */}
          <div className="absolute bottom-0 left-0 right-0">
            <svg width="100%" height="80" viewBox="0 0 1200 80" preserveAspectRatio="none" className="opacity-20">
              <path d="M0 40 Q150 20 300 40 T600 40 T900 40 T1200 40" stroke="#E63946" strokeWidth="3" fill="none"/>
              <path d="M0 60 Q150 40 300 60 T600 60 T900 60 T1200 60" stroke="#244F8A" strokeWidth="2" fill="none"/>
            </svg>
          </div>
        </section>

        {/* About Section */}
        <section className="py-24 bg-white relative">
          <div className="max-w-3xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-ukiyo-sumi mb-6 tracking-wider" style={{fontFamily: 'Georgia, serif'}}>关于浮标</h2>
              <div className="flex items-center justify-center gap-4">
                <div className="w-20 h-px bg-ukiyo-beni"></div>
                <div className="w-3 h-3 bg-ukiyo-beni rotate-45"></div>
                <div className="w-20 h-px bg-ukiyo-beni"></div>
              </div>
            </div>
            <div className="prose prose-lg max-w-none mx-auto text-ukiyo-sumi/80">
              <p className="text-center leading-relaxed text-lg mb-6">
                [在这里介绍浮标诗歌团体]
              </p>
              <p className="text-center leading-relaxed text-ukiyo-sumi/60">
                我们是一群年轻的写作者，在语言的边界探索可能性的浮标。
              </p>
            </div>
          </div>
        </section>

        {/* Features - 浮雕卡片 */}
        <section className="py-24 bg-ukiyo-shironeri relative overflow-hidden">
          <div className="max-w-6xl mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { title: '先锋', icon: '⚡', desc: '[描述浮标的先锋特质]' },
                { title: '年轻', icon: '🌊', desc: '[描述浮标的年轻特质]' },
                { title: '探索', icon: '🧭', desc: '[描述浮标的探索特质]' }
              ].map((feature, index) => (
                <div
                  key={index}
                  className="bg-white p-10 border-4 border-ukiyo-sumi shadow-relief hover:shadow-relief-lg hover:-translate-y-1 transition-all duration-200 group"
                >
                  <div className="w-16 h-16 bg-ukiyo-beni/10 flex items-center justify-center mb-6 group-hover:bg-ukiyo-beni/20 transition-colors">
                    <span className="text-3xl">{feature.icon}</span>
                  </div>
                  <h3 className="text-xl font-bold text-ukiyo-sumi mb-4 tracking-wider">{feature.title}</h3>
                  <p className="text-ukiyo-sumi/60 leading-relaxed">{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
