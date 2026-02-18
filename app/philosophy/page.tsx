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
              <h2 className="text-2xl font-bold text-ukiyo-sumi mb-6 pb-2 border-b-2 border-ukiyo-beni tracking-wider">为什么叫浮标</h2>
              <p className="text-ukiyo-sumi/80 mb-8 leading-loose">
                在茫茫大海上，浮标是最不起眼的存在。它不动，不发声，不指引方向。它只是标记——标记一个位置，标记一种可能，标记"这里有人"。
              </p>
              <p className="text-ukiyo-sumi/80 mb-8 leading-loose">
                我们觉得这很像诗歌。在这个信息爆炸的时代，一首诗能做的其实不多。它不会改变世界，甚至不会被很多人读到。但它在那里，标记着一次心灵的波动，证明着有人还在用诗歌的方式存在。
              </p>

              <h2 className="text-2xl font-bold text-ukiyo-sumi mb-6 pb-2 border-b-2 border-ukiyo-beni tracking-wider">我们做什么</h2>
              <p className="text-ukiyo-sumi/80 mb-8 leading-loose">
                浮标是一个开放的诗歌团体。我们写作、分享、交流。我们不设门槛，不分流派，只要你真诚地对待诗歌，你就是浮标的一部分。
              </p>
              <p className="text-ukiyo-sumi/80 mb-8 leading-loose">
                我们定期举办线上诗会、作品互评、主题创作。我们相信，在孤独的写作旅程中，同行的存在本身就是一种温暖。
              </p>

              <h2 className="text-2xl font-bold text-ukiyo-sumi mb-6 pb-2 border-b-2 border-ukiyo-beni tracking-wider">加入我们</h2>
              <p className="text-ukiyo-sumi/80 leading-loose">
                如果你也在写诗，如果你也在寻找同类，欢迎加入浮标。不需要你有发表过的作品，不需要你有什么资历。带上一首你写的诗，来见我们。
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
