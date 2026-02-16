import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function PhilosophyPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-ukiyo-shironeri">
        {/* 页面标题区 */}
        <div className="py-16 bg-white border-b-4 border-ukiyo-beni">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-ukiyo-sumi mb-4 tracking-wider" style={{fontFamily: 'Georgia, serif'}}>关于</h1>
            <p className="text-ukiyo-beni tracking-widest uppercase">我们是谁</p>
            <div className="flex items-center justify-center gap-4 mt-6">
              <div className="w-16 h-px bg-ukiyo-sumi/30"></div>
              <div className="w-2 h-2 bg-ukiyo-beni rotate-45"></div>
              <div className="w-16 h-px bg-ukiyo-sumi/30"></div>
            </div>
          </div>
        </div>

        {/* 内容区 */}
        <div className="max-w-3xl mx-auto px-4 py-16">
          <div className="bg-white border-4 border-ukiyo-sumi shadow-relief p-10 md:p-14">
            <div className="prose prose-lg max-w-none">
              <h2 className="text-2xl font-bold text-ukiyo-sumi mb-6 pb-2 border-b-2 border-ukiyo-beni tracking-wider">[章节标题]</h2>
              <p className="text-ukiyo-sumi/80 mb-8 leading-loose">
                [内容段落]
              </p>

              <h2 className="text-2xl font-bold text-ukiyo-sumi mb-6 pb-2 border-b-2 border-ukiyo-beni tracking-wider">[章节标题]</h2>
              <p className="text-ukiyo-sumi/80 mb-8 leading-loose">
                [内容段落]
              </p>

              <h2 className="text-2xl font-bold text-ukiyo-sumi mb-6 pb-2 border-b-2 border-ukiyo-beni tracking-wider">[章节标题]</h2>
              <p className="text-ukiyo-sumi/80 leading-loose">
                [内容段落]
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
