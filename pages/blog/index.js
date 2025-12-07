import { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import getAllPosts from '../../lib/getAllPosts';

export default function BlogIndex({ posts }) {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredPosts = posts.filter((post) =>
    (post.title || '').toLowerCase().includes(searchQuery.toLowerCase()) ||
    (post.description || '').toLowerCase().includes(searchQuery.toLowerCase())
  );

  const isNewPost = (dateString) => {
    const postDate = new Date(dateString);
    const now = new Date();
    const diffTime = Math.abs(now - postDate);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays <= 7;
  };

  const truncateText = (text, maxLength) => {
    if (!text) return 'Click to read more...';
    if (text.length <= maxLength) return text;
    return text.substr(0, maxLength).trim() + '...';
  };

  return (
    <>
      <Head>
        <title>Blog - Tashan Win Game</title>
        <meta
          name="description"
          content="Read the latest gaming tips and guides on Tashan Win."
        />
      </Head>

      <div className="blog-page-wrapper">
        <div className="blog-seamless-box">
          
          <header className="blog-header">
            <div className="header-top">
              <h1 className="blog-title">Latest Articles</h1>
              <div className="article-count">
                <span className="count-num">{filteredPosts.length}</span>
                <span className="count-text">Posts</span>
              </div>
            </div>

            <div className="blog-search-wrap">
              <svg className="search-icon" width="18" height="18" viewBox="0 0 18 18" fill="none">
                <circle cx="8" cy="8" r="6" stroke="currentColor" strokeWidth="1.5"/>
                <path d="M12.5 12.5L16 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
              <input
                type="text"
                placeholder="Search by title, description, or tags..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="blog-search"
              />
              {searchQuery && (
                <button 
                  className="clear-btn"
                  onClick={() => setSearchQuery('')}
                >
                  ✕
                </button>
              )}
            </div>
          </header>

          {filteredPosts.length ? (
            <div className="posts-list">
              {filteredPosts.map((post, index) => (
                <Link 
                  key={post.slug} 
                  href={`/blog/${post.slug}`} 
                  className="post-link"
                >
                  <article className="post-item">
                    <div className="post-image">
                      <img
                        src={post.image || '/post-logo.jpg'}
                        alt={post.title}
                        onError={(e) => {
                          e.target.onerror = null;
                          e.target.src = '/post-logo.jpg';
                        }}
                      />
                      <div className="image-gradient"></div>
                      {isNewPost(post.date) && (
                        <div className="new-dot"></div>
                      )}
                    </div>

                    <div className="post-content">
                      <div className="post-header">
                        <h2 className="post-title">{post.title}</h2>
                        {isNewPost(post.date) && (
                          <span className="new-text">NEW</span>
                        )}
                      </div>

                      <p className="post-desc">
                        {post.description || 'Click to read the full article...'}
                      </p>

                      <p className="post-desc-mobile">
                        {truncateText(post.description, 80)} <span className="read-more-text">Read more</span>
                      </p>

                      <div className="post-footer">
                        <div className="post-meta">
                          <span className="meta-date">
                            {new Date(post.date).toLocaleDateString('en-US', {
                              month: 'short',
                              day: 'numeric',
                              year: 'numeric',
                            })}
                          </span>
                          <span className="meta-sep">•</span>
                          <span className="meta-read">3 min read</span>
                        </div>

                        {post.tags && post.tags.length > 0 && (
                          <div className="post-tags">
                            {post.tags.slice(0, 3).map((tag) => (
                              <span key={tag} className="post-tag">
                                #{tag}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>

                    <div className="post-arrow">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M9 18l6-6-6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          ) : (
            <div className="blog-empty">
              <svg width="80" height="80" viewBox="0 0 80 80" fill="none" className="empty-icon">
                <circle cx="40" cy="40" r="38" stroke="currentColor" strokeWidth="2" opacity="0.3"/>
                <path d="M40 20v40M20 40h40" stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity="0.3"/>
              </svg>
              <h2>No articles found</h2>
              <p>
                {searchQuery
                  ? 'Try adjusting your search terms'
                  : 'Check back soon for new content'}
              </p>
            </div>
          )}
        </div>
      </div>

      <style jsx>{`
        .blog-page-wrapper {
          background-color: #000000;
          min-height: 100vh;
          width: 100%;
          display: flex;
          flex-direction: column;
        }

        .blog-seamless-box {
          background-color: #0a0a0a;
          max-width: 900px;
          width: 100%;
          margin: 0 auto;
          padding: 50px 30px 70px;
          flex: 1;
        }

        /* ==================== HEADER - NO BOX ==================== */
        .blog-header {
          margin-bottom: 40px;
          background: none;
          border: none;
          padding: 0;
        }

        .header-top {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 24px;
          background: none;
          border: none;
          padding: 0;
        }

        .blog-title {
          font-size: 32px;
          font-weight: 700;
          color: #ffffff;
          margin: 0;
          letter-spacing: -0.5px;
        }

        .article-count {
          display: flex;
          align-items: baseline;
          gap: 6px;
        }

        .count-num {
          font-size: 28px;
          font-weight: 700;
          color: #ffd000;
        }

        .count-text {
          font-size: 14px;
          color: #666;
          font-weight: 500;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .blog-search-wrap {
          position: relative;
          width: 100%;
          background: none;
          border: none;
        }

        .search-icon {
          position: absolute;
          left: 18px;
          top: 50%;
          transform: translateY(-50%);
          color: #666;
          pointer-events: none;
        }

        .blog-search {
          width: 100%;
          padding: 14px 50px 14px 48px;
          font-size: 15px;
          border-radius: 12px;
          border: 1px solid #222;
          background-color: transparent;
          color: #fff;
          outline: none;
          box-sizing: border-box;
          transition: all 0.3s ease;
        }

        .blog-search::placeholder {
          color: #555;
        }

        .blog-search:focus {
          border-color: #ffd000;
          background-color: rgba(17, 17, 17, 0.5);
        }

        .clear-btn {
          position: absolute;
          right: 14px;
          top: 50%;
          transform: translateY(-50%);
          background: #333;
          border: none;
          color: #999;
          width: 28px;
          height: 28px;
          border-radius: 50%;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 14px;
          transition: all 0.2s ease;
        }

        .clear-btn:hover {
          background: #ffd000;
          color: #000;
        }

        /* ==================== POSTS LIST ==================== */
        .posts-list {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .post-link {
          text-decoration: none;
          color: inherit;
          display: block;
        }

        .post-item {
          display: flex;
          gap: 20px;
          background: #111;
          border-radius: 16px;
          padding: 16px;
          border: 1px solid #1a1a1a;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          cursor: pointer;
          position: relative;
          overflow: hidden;
        }

        .post-item::before {
          content: '';
          position: absolute;
          left: 0;
          top: 0;
          height: 100%;
          width: 4px;
          background: linear-gradient(180deg, #ffd000 0%, #ff6b00 100%);
          transform: scaleY(0);
          transition: transform 0.3s ease;
        }

        .post-item:hover {
          background: #151515;
          border-color: #ffd000;
          transform: translateX(8px);
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.3);
        }

        .post-item:hover::before {
          transform: scaleY(1);
        }

        .post-item:active {
          transform: translateX(4px) scale(0.99);
        }

        /* ==================== IMAGE ==================== */
        .post-image {
          width: 140px;
          min-width: 140px;
          height: 140px;
          border-radius: 12px;
          overflow: hidden;
          position: relative;
          background: #0a0a0a;
        }

        .post-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s ease;
        }

        .post-item:hover .post-image img {
          transform: scale(1.1);
        }

        .image-gradient {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(135deg, rgba(255, 208, 0, 0.1), transparent);
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .post-item:hover .image-gradient {
          opacity: 1;
        }

        .new-dot {
          position: absolute;
          top: 10px;
          right: 10px;
          width: 10px;
          height: 10px;
          background: #00ff88;
          border-radius: 50%;
          box-shadow: 0 0 0 0 rgba(0, 255, 136, 0.7);
          animation: ping 2s cubic-bezier(0, 0, 0.2, 1) infinite;
        }

        @keyframes ping {
          75%, 100% {
            box-shadow: 0 0 0 12px rgba(0, 255, 136, 0);
          }
        }

        /* ==================== CONTENT ==================== */
        .post-content {
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          min-width: 0;
        }

        .post-header {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          margin-bottom: 8px;
        }

        .post-title {
          font-size: 18px;
          font-weight: 600;
          color: #ffffff;
          margin: 0;
          line-height: 1.4;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
          flex: 1;
          transition: color 0.3s ease;
        }

        .post-item:hover .post-title {
          color: #ffd000;
        }

        .new-text {
          background: linear-gradient(135deg, #00ff88, #00c6ff);
          color: #000;
          font-size: 10px;
          font-weight: 800;
          padding: 4px 8px;
          border-radius: 4px;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          flex-shrink: 0;
        }

        .post-desc {
          font-size: 14px;
          color: #999;
          line-height: 1.6;
          margin: 0 0 12px 0;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        .post-desc-mobile {
          display: none;
        }

        .post-footer {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 12px;
          flex-wrap: wrap;
        }

        .post-meta {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 12px;
          color: #666;
          font-weight: 500;
        }

        .meta-date {
          color: #ffd000;
        }

        .meta-sep {
          color: #333;
        }

        .post-tags {
          display: flex;
          gap: 6px;
          flex-wrap: wrap;
        }

        .post-tag {
          font-size: 11px;
          color: #888;
          font-weight: 600;
        }

        /* ==================== ARROW ==================== */
        .post-arrow {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: #1a1a1a;
          color: #666;
          flex-shrink: 0;
          align-self: center;
          transition: all 0.3s ease;
        }

        .post-item:hover .post-arrow {
          background: #ffd000;
          color: #000;
          transform: translateX(4px);
        }

        /* ==================== EMPTY STATE ==================== */
        .blog-empty {
          text-align: center;
          padding: 80px 20px;
        }

        .empty-icon {
          color: #333;
          margin-bottom: 24px;
        }

        .blog-empty h2 {
          color: #ffffff;
          font-size: 24px;
          font-weight: 600;
          margin: 0 0 12px 0;
        }

        .blog-empty p {
          color: #666;
          font-size: 15px;
          margin: 0;
        }

        /* ==================== MOBILE ==================== */
        @media (max-width: 768px) {
          * {
            -webkit-tap-highlight-color: transparent;
          }

          .blog-seamless-box {
            padding: 24px 16px 50px;
          }

          .blog-header {
            margin-bottom: 28px;
          }

          .header-top {
            margin-bottom: 18px;
          }

          .blog-title {
            font-size: 26px;
          }

          .count-num {
            font-size: 22px;
          }

          .count-text {
            font-size: 12px;
          }

          .blog-search {
            padding: 12px 44px 12px 44px;
            font-size: 14px;
          }

          .search-icon {
            left: 14px;
          }

          .clear-btn {
            right: 10px;
            width: 26px;
            height: 26px;
          }

          .posts-list {
            gap: 14px;
          }

          .post-item {
            gap: 12px;
            padding: 12px;
          }

          .post-item:active {
            opacity: 0.8;
            transform: scale(0.98) !important;
          }

          .post-image {
            width: 90px;
            min-width: 90px;
            height: 90px;
          }

          .new-dot {
            top: 6px;
            right: 6px;
            width: 8px;
            height: 8px;
          }

          .post-header {
            gap: 8px;
            margin-bottom: 6px;
          }

          .post-title {
            font-size: 15px;
            font-weight: 700;
            line-height: 1.3;
          }

          .new-text {
            font-size: 8px;
            padding: 3px 6px;
          }

          .post-desc {
            display: none !important;
          }

          .post-desc-mobile {
            display: block;
            font-size: 12px;
            line-height: 1.5;
            color: #999;
            margin: 0;
          }

          .read-more-text {
            color: #ffd000;
            font-weight: 600;
          }

          .post-footer {
            display: none !important;
          }

          .post-arrow {
            display: none !important;
          }

          .blog-empty {
            padding: 60px 16px;
          }

          .empty-icon {
            width: 60px;
            height: 60px;
          }

          .blog-empty h2 {
            font-size: 20px;
          }

          .blog-empty p {
            font-size: 14px;
          }
        }
      `}</style>
    </>
  );
}

export async function getStaticProps() {
  const posts = getAllPosts();
  return { props: { posts } };
}
