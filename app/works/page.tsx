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
                  <p className="text-ukiyo-sumi/50 text-sm">前往管理页面添加作品</p>
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
