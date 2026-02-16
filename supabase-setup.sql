-- 创建作品表
CREATE TABLE IF NOT EXISTS works (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  author TEXT NOT NULL,
  content TEXT NOT NULL,
  category TEXT DEFAULT '现代诗',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 启用全文搜索
CREATE INDEX IF NOT EXISTS works_title_search ON works USING gin(to_tsvector('simple', title));
CREATE INDEX IF NOT EXISTS works_author_search ON works USING gin(to_tsvector('simple', author));
CREATE INDEX IF NOT EXISTS works_content_search ON works USING gin(to_tsvector('simple', content));

-- 创建搜索函数
CREATE OR REPLACE FUNCTION search_works(query TEXT)
RETURNS TABLE (
  id UUID,
  title TEXT,
  author TEXT,
  content TEXT,
  category TEXT,
  created_at TIMESTAMP WITH TIME ZONE,
  rank REAL
)
LANGUAGE plpgsql
AS $$
BEGIN
  RETURN QUERY
  SELECT
    w.id,
    w.title,
    w.author,
    w.content,
    w.category,
    w.created_at,
    ts_rank(
      setweight(to_tsvector('simple', w.title), 'A') ||
      setweight(to_tsvector('simple', w.author), 'B') ||
      setweight(to_tsvector('simple', w.content), 'C'),
      to_tsquery('simple', query || ':*')
    ) as rank
  FROM works w
  WHERE
    to_tsvector('simple', w.title || ' ' || w.author || ' ' || w.content)
    @@ to_tsquery('simple', query || ':*')
  ORDER BY rank DESC, w.created_at DESC;
END;
$$;

-- 插入示例数据
INSERT INTO works (title, author, content, category) VALUES
  ('示例作品', '作者名', '这是示例作品内容。', '现代诗')
ON CONFLICT DO NOTHING;
