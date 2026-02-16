import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

// 在这里添加作品
const works = [
  {
    id: 1,
    title: '[作品标题]',
    author: '[作者]',
    content: `[作品内容]`,
    category: '现代诗',
    date: '2024-01-15'
  },
  // 复制上面格式添加更多作品
];

export default function WorksPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-ukiyo-shironeri">
        {/* 页面标题区 */}
        <div className="py-16 bg-white border-b-4 border-ukiyo-beni">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-ukiyo-sumi mb-4 tracking-wider" style={{fontFamily: 'Georgia, serif'}}>作品</h1>
            <p className="text-ukiyo-beni tracking-widest uppercase">浮标成员的诗</p>
            <div className="flex items-center justify-center gap-4 mt-6">
              <div className="w-16 h-px bg-ukiyo-sumi/30"></div>
              <div className="w-2 h-2 bg-ukiyo-beni rotate-45"></div>
              <div className="w-16 h-px bg-ukiyo-sumi/30"></div>
            </div>
          </div>
        </div>

        {/* 作品列表 */}
        <div className="max-w-3xl mx-auto px-4 py-16">
          <div className="space-y-12">
            {works.map((work) => (
              <article key={work.id} className="bg-white border-4 border-ukiyo-sumi shadow-relief p-8 md:p-12">
                <div className="flex justify-between items-start mb-6 pb-4 border-b-2 border-ukiyo-sumi/10">
                  <h2 className="text-2xl font-bold text-ukiyo-sumi tracking-wide">{work.title}</h2>
                  <span className="text-xs bg-ukiyo-beni text-white px-4 py-2 font-semibold tracking-wider">{work.category}</span>
                </div>
                <p className="text-ukiyo-kuchiba text-sm mb-6 tracking-wider">{work.author}</p>
                <pre className="whitespace-pre-wrap font-serif text-ukiyo-sumi leading-loose bg-ukiyo-shironeri p-8 border-2 border-ukiyo-sumi/20">
                  {work.content}
                </pre>
              </article>
            ))}

            {works.length === 0 && (
              <div className="text-center py-24">
                <div className="inline-block p-8 bg-white border-4 border-ukiyo-sumi/20 shadow-relief mb-6">
                  <svg width="80" height="80" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="20" cy="20" r="16" stroke="#244F8A" strokeWidth="2" fill="none" strokeDasharray="4 4"/>
                    <path d="M12 20 Q16 16 20 20 T28 20" stroke="#E63946" strokeWidth="2" fill="none"/>
                  </svg>
                </div>
                <p className="text-ukiyo-sumi/70 text-lg mb-2">暂无作品</p>
                <p className="text-ukiyo-sumi/50 text-sm">编辑 app/works/page.tsx 添加作品</p>
              </div>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
