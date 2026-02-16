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
      <main className="min-h-screen bg-ocean-50">
        <div className="max-w-3xl mx-auto px-4 py-12">
          <div className="text-center mb-12">
            <h1 className="text-3xl font-bold text-ocean-900 mb-2">作品</h1>
            <p className="text-ocean-600">浮标成员的诗</p>
          </div>

          <div className="space-y-8">
            {works.map((work) => (
              <article key={work.id} className="bg-white p-8 rounded-2xl shadow-sm">
                <div className="flex justify-between items-start mb-4">
                  <h2 className="text-xl font-bold text-ocean-900">{work.title}</h2>
                  <span className="text-xs bg-ocean-100 text-ocean-700 px-3 py-1 rounded-full">{work.category}</span>
                </div>
                <p className="text-ocean-500 text-sm mb-4">{work.author}</p>
                <pre className="whitespace-pre-wrap font-serif text-ocean-800 leading-loose bg-ocean-50 p-6 rounded-xl">
                  {work.content}
                </pre>
              </article>
            ))}

            {works.length === 0 && (
              <div className="text-center py-20">
                <div className="w-16 h-16 bg-ocean-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">🌊</span>
                </div>
                <p className="text-ocean-500 mb-2">暂无作品</p>
                <p className="text-ocean-400 text-sm">编辑 app/works/page.tsx 添加作品</p>
              </div>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
