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

export default function AdminPage() {
  const [works, setWorks] = useState<Work[]>([]);
  const [loading, setLoading] = useState(true);
  const [formData, setFormData] = useState({
    title: '',
    author: '',
    content: '',
    category: '现代诗'
  });
  const [editingId, setEditingId] = useState<string | null>(null);

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (editingId) {
      const { error } = await supabase
        .from('works')
        .update({
          title: formData.title,
          author: formData.author,
          content: formData.content,
          category: formData.category
        })
        .eq('id', editingId);

      if (error) {
        alert('更新失败: ' + error.message);
        return;
      }
    } else {
      const { error } = await supabase
        .from('works')
        .insert([formData]);

      if (error) {
        alert('添加失败: ' + error.message);
        return;
      }
    }

    setFormData({ title: '', author: '', content: '', category: '现代诗' });
    setEditingId(null);
    fetchWorks();
  };

  const handleEdit = (work: Work) => {
    setFormData({
      title: work.title,
      author: work.author,
      content: work.content,
      category: work.category
    });
    setEditingId(work.id);
  };

  const handleDelete = async (id: string) => {
    if (!confirm('确定要删除这首作品吗？')) return;

    const { error } = await supabase
      .from('works')
      .delete()
      .eq('id', id);

    if (error) {
      alert('删除失败: ' + error.message);
      return;
    }

    fetchWorks();
  };

  const handleCancel = () => {
    setFormData({ title: '', author: '', content: '', category: '现代诗' });
    setEditingId(null);
  };

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-ukiyo-shironeri">
        {/* 页面标题区 */}
        <div className="py-16 bg-white border-b-4 border-ukiyo-beni">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-ukiyo-sumi mb-4 tracking-wider" style={{fontFamily: 'Georgia, serif'}}>管理</h1>
            <p className="text-ukiyo-beni tracking-widest uppercase">作品管理后台</p>
            <div className="flex items-center justify-center gap-4 mt-6">
              <div className="w-16 h-px bg-ukiyo-sumi/30"></div>
              <div className="w-2 h-2 bg-ukiyo-beni rotate-45"></div>
              <div className="w-16 h-px bg-ukiyo-sumi/30"></div>
            </div>
          </div>
        </div>

        <div className="max-w-4xl mx-auto px-4 py-16">
          <div className="grid md:grid-cols-2 gap-8">
            {/* 表单区 */}
            <div>
              <div className="bg-white border-4 border-ukiyo-sumi shadow-relief p-6 md:p-8">
                <h2 className="text-xl font-bold text-ukiyo-sumi mb-6 pb-2 border-b-2 border-ukiyo-beni tracking-wider">
                  {editingId ? '编辑作品' : '添加作品'}
                </h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm font-bold text-ukiyo-sumi mb-2 tracking-wider">标题</label>
                    <input
                      type="text"
                      value={formData.title}
                      onChange={(e) => setFormData({...formData, title: e.target.value})}
                      required
                      className="w-full px-4 py-3 border-2 border-ukiyo-sumi bg-ukiyo-shironeri focus:outline-none focus:border-ukiyo-beni transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-ukiyo-sumi mb-2 tracking-wider">作者</label>
                    <input
                      type="text"
                      value={formData.author}
                      onChange={(e) => setFormData({...formData, author: e.target.value})}
                      required
                      className="w-full px-4 py-3 border-2 border-ukiyo-sumi bg-ukiyo-shironeri focus:outline-none focus:border-ukiyo-beni transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-ukiyo-sumi mb-2 tracking-wider">分类</label>
                    <select
                      value={formData.category}
                      onChange={(e) => setFormData({...formData, category: e.target.value})}
                      className="w-full px-4 py-3 border-2 border-ukiyo-sumi bg-ukiyo-shironeri focus:outline-none focus:border-ukiyo-beni transition-colors"
                    >
                      <option value="现代诗">现代诗</option>
                      <option value="古体诗">古体诗</option>
                      <option value="散文诗">散文诗</option>
                      <option value="其他">其他</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-ukiyo-sumi mb-2 tracking-wider">内容</label>
                    <textarea
                      value={formData.content}
                      onChange={(e) => setFormData({...formData, content: e.target.value})}
                      required
                      rows={10}
                      className="w-full px-4 py-3 border-2 border-ukiyo-sumi bg-ukiyo-shironeri focus:outline-none focus:border-ukiyo-beni transition-colors font-serif leading-relaxed"
                    />
                  </div>

                  <div className="flex gap-3">
                    <button
                      type="submit"
                      className="flex-1 py-3 bg-ukiyo-beni text-white font-bold tracking-wider shadow-relief hover:shadow-relief-lg hover:translate-x-1 hover:translate-y-1 transition-all duration-200"
                    >
                      {editingId ? '更新' : '添加'}
                    </button>
                    {editingId && (
                      <button
                        type="button"
                        onClick={handleCancel}
                        className="flex-1 py-3 bg-ukiyo-sumi text-white font-bold tracking-wider shadow-relief hover:shadow-relief-lg hover:translate-x-1 hover:translate-y-1 transition-all duration-200"
                      >
                        取消
                      </button>
                    )}
                  </div>
                </form>
              </div>
            </div>

            {/* 列表区 */}
            <div>
              <div className="bg-white border-4 border-ukiyo-sumi shadow-relief p-6 md:p-8">
                <h2 className="text-xl font-bold text-ukiyo-sumi mb-6 pb-2 border-b-2 border-ukiyo-beni tracking-wider">作品列表</h2>
                <div className="space-y-3 max-h-[600px] overflow-y-auto">
                  {loading ? (
                    <p className="text-ukiyo-sumi/70 text-center py-8">加载中...</p>
                  ) : works.length === 0 ? (
                    <p className="text-ukiyo-sumi/50 text-center py-8">暂无作品</p>
                  ) : (
                    works.map((work) => (
                      <div key={work.id} className="p-4 border-2 border-ukiyo-sumi/20 bg-ukiyo-shironeri/50">
                        <div className="flex justify-between items-start mb-2">
                          <h3 className="font-bold text-ukiyo-sumi truncate flex-1">{work.title}</h3>
                          <span className="text-xs bg-ukiyo-sumi/10 text-ukiyo-sumi px-2 py-1 ml-2">{work.category}</span>
                        </div>
                        <p className="text-sm text-ukiyo-kuchiba mb-3">{work.author}</p>
                        <div className="flex gap-2">
                          <button
                            onClick={() => handleEdit(work)}
                            className="flex-1 py-2 text-xs bg-ukiyo-aizumi text-white font-semibold tracking-wider hover:bg-ukiyo-indigo transition-colors"
                          >
                            编辑
                          </button>
                          <button
                            onClick={() => handleDelete(work.id)}
                            className="flex-1 py-2 text-xs bg-ukiyo-beni text-white font-semibold tracking-wider hover:bg-red-700 transition-colors"
                          >
                            删除
                          </button>
                        </div>
                      </div>
                    ))
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
