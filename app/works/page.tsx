'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabase';

interface Work {
  id: string;
  title: string;
  author: string;
  content: string;
  category: string;
  created_at: string;
}

export default function WorksPage() {
  const [works, setWorks] = useState<Work[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    fetchWorks();
  }, []);

  const fetchWorks = async () => {
    const { data, error } = await supabase
      .from('works')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) {
      console.error('获取作品失败:', error);
    } else {
      setWorks(data || []);
    }
    setLoading(false);
  };

  const handleSearch = async () => {
    if (!searchQuery.trim()) {
      fetchWorks();
      return;
    }

    const { data, error } = await supabase.rpc('search_works', { query: searchQuery });
    if (error) {
      console.error('搜索失败:', error);
    } else {
      setWorks(data || []);
    }
  };

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

        {/* 搜索区 */}
        <div className="max-w-3xl mx-auto px-4 pt-12 pb-8">
          <div className="bg-white border-4 border-ukiyo-sumi shadow-relief p-6">
            <div className="flex gap-4">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
                placeholder="搜索作品标题、作者或内容..."
                className="flex-1 px-5 py-3 border-2 border-ukiyo-sumi bg-ukiyo-shironeri focus:outline-none focus:border-ukiyo-beni transition-colors"
              />
              <button
                onClick={handleSearch}
                className="px-8 py-3 bg-ukiyo-beni text-white font-bold tracking-wider shadow-relief hover:shadow-relief-lg hover:translate-x-1 hover:translate-y-1 transition-all duration-200"
              >
                搜索
              </button>
            </div>
          </div>
        </div>

        {/* 作品列表 */}
        <div className="max-w-3xl mx-auto px-4 py-8">
          {loading ? (
            <div className="text-center py-24">
              <p className="text-ukiyo-sumi/70">加载中...</p>
            </div>
          ) : (
            <div className="space-y-12">
              {works.map((work) => (
                <article key={work.id} className="bg-white border-4 border-ukiyo-sumi shadow-relief p-8 md:p-12">
                  <h2 className="text-2xl font-bold text-ukiyo-sumi mb-4 tracking-wide">{work.title}</h2>
                  <p className="text-ukiyo-kuchiba text-sm mb-6 tracking-wider">{work.author}</p>
                  <pre className="whitespace-pre-wrap font-serif text-ukiyo-sumi leading-loose bg-ukiyo-shironeri p-8 border-2 border-ukiyo-sumi/20">
                    {work.content}
                  </pre>
                </article>
              ))}

              {works.length === 0 && (
                <div className="text-center py-12">
                  <p className="text-ukiyo-sumi/50 text-sm mb-12">演示文本样例</p>
                  <article className="bg-white border-4 border-ukiyo-sumi/30 shadow-relief p-8 md:p-12 text-left">
                    <h2 className="text-2xl font-bold text-ukiyo-sumi mb-4 tracking-wide">回答</h2>
                    <p className="text-ukiyo-kuchiba text-sm mb-6 tracking-wider">北岛 · 演示文本样例</p>
                    <pre className="whitespace-pre-wrap font-serif text-ukiyo-sumi leading-loose bg-ukiyo-shironeri p-8 border-2 border-ukiyo-sumi/20">
{`卑鄙是卑鄙者的通行证，
高尚是高尚者的墓志铭，
看吧，在那镀金的天空中，
飘满了死者弯曲的倒影。

冰川纪已过去了，
为什么到处都是冰凌？
好望角发现了，
为什么死海里千帆相竞？

我来到这个世界上，
只带着纸、绳索和身影，
为了在审判之前，
宣读那些被判决的声音。

告诉你吧，世界
我——不——相——信！
纵使你脚下有一千名挑战者，
那就把我算作第一千零一名。

我不相信天是蓝的，
我不相信雷的回声，
我不相信梦是假的，
我不相信死无报应。

如果海洋注定要决堤，
就让所有的苦水都注入我心中，
如果陆地注定要上升，
就让人类重新选择生存的峰顶。

新的转机和闪闪星斗，
正在缀满没有遮拦的天空，
那是五千年的象形文字，
那是未来人们凝视的眼睛。`}
                    </pre>
                  </article>
                </div>
              )}
            </div>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}
