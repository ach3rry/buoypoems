import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function PhilosophyPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-ocean-50">
        <div className="max-w-3xl mx-auto px-4 py-12">
          <div className="text-center mb-12">
            <h1 className="text-3xl font-bold text-ocean-900 mb-2">关于</h1>
            <p className="text-ocean-600">我们是谁</p>
          </div>

          <div className="bg-white p-10 rounded-2xl shadow-sm prose prose-lg max-w-none">
            <h2 className="text-xl font-bold text-ocean-900 mb-4">[章节标题]</h2>
            <p className="text-ocean-700 mb-6 leading-relaxed">
              [内容段落]
            </p>

            <h2 className="text-xl font-bold text-ocean-900 mb-4">[章节标题]</h2>
            <p className="text-ocean-700 mb-6 leading-relaxed">
              [内容段落]
            </p>

            <h2 className="text-xl font-bold text-ocean-900 mb-4">[章节标题]</h2>
            <p className="text-ocean-700 leading-relaxed">
              [内容段落]
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
