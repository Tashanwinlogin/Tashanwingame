import Head from 'next/head';

export default function About() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    'name': 'AEGON',
    'jobTitle': 'Full Time Trader & Signal Provider',
    'url': 'https://yourwebsite.com/about',
    'sameAs': [
      'https://t.me/A8ENT_X',
      'https://t.me/V3_game_vip'
    ],
    'description': 'Professional trader providing accurate trading signals through Telegram channels. Experienced in market analysis and VIP trading groups.'
  };

  return (
    <>
      <Head>
        <title>About AEGON | Professional Trader | Tashan Win Game</title>
        <meta
          name="description"
          content="Meet AEGON - full time trader and accurate signal provider. Join the VIP Telegram channel for premium trading signals and market insights."
        />
        <meta name="keywords" content="AEGON trader, trading signals, telegram signals, V3 game vip, professional trader" />
        <link rel="canonical" href="https://yourwebsite.com/about" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      </Head>

      <main className="about-main">
        {/* Hero section */}
        <section className="about-hero">
          <div className="hero-content">
            <div className="profile-image">
              {/* YOUR TELEGRAM PROFILE PHOTO */}
              <img 
                src="/aegon.jpg" 
                alt="AEGON - Professional Trader" 
                className="profile-photo"
              />
              <div className="profile-ring"></div>
            </div>

            <div className="hero-text">
              <h1 className="about-title">AEGON</h1>
              <p className="hero-subtitle">
                Full Time Trader & Precision Signal Provider
              </p>
              <p className="hero-desc">
                Years of market experience turned into accurate signals delivered daily. 
                Trading isn't gambling when you follow the right patterns.
              </p>
              <div className="hero-stats">
                <div className="stat">
                  <div className="stat-number">95%</div>
                  <div className="stat-label">Signal Accuracy</div>
                </div>
                <div className="stat">
                  <div className="stat-number">500+</div>
                  <div className="stat-label">VIP Members</div>
                </div>
                <div className="stat">
                  <div className="stat-number">24/7</div>
                  <div className="stat-label">Support</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Telegram section - NO MOCKUP BOX */}
        <section className="telegram-section">
          <div className="telegram-content">
            <div className="telegram-left">
              <h2 className="section-title">Join My Signals</h2>
              <p className="section-desc">
                Real time signals with entry, target, and stop loss. 
                No guesswork, just proven patterns from a full time trader.
              </p>
              <div className="telegram-buttons">
                <a href="https://t.me/A8ENT_X" target="_blank" rel="noopener noreferrer" className="telegram-btn profile-btn">
                  💬 Message @A8ENT_X
                </a>
                <a href="https://t.me/V3_game_vip" target="_blank" rel="noopener noreferrer" className="telegram-btn channel-btn">
                  👑 Join VIP Channel
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Skills & Approach */}
        <section className="skills-section">
          <h2 className="section-title">My Trading Edge</h2>
          <div className="skills-grid">
            <div className="skill-card">
              <div className="skill-icon">📊</div>
              <h3>Technical Analysis</h3>
              <p>Price action, support/resistance, fibonacci, candlestick patterns</p>
            </div>
            <div className="skill-card">
              <div className="skill-icon">⚡</div>
              <h3>Fast Signals</h3>
              <p>Entry within 5 mins of signal. No delayed calls</p>
            </div>
            <div className="skill-card">
              <div className="skill-icon">🎯</div>
              <h3>Risk Management</h3>
              <p>Every signal includes precise stop loss. Never risk more than 1-2%</p>
            </div>
            <div className="skill-card">
              <div className="skill-icon">📱</div>
              <h3>24/7 Updates</h3>
              <p>Market shifts, news updates, signal adjustments</p>
            </div>
          </div>
        </section>
      </main>

      <style jsx>{`
        .about-main {
          background: #000;
          min-height: 100vh;
          padding: 40px 16px 50px;
        }

        .about-hero {
          max-width: 1200px;
          margin: 0 auto 60px;
        }

        .hero-content {
          display: grid;
          grid-template-columns: auto 1fr;
          gap: 40px;
          align-items: center;
        }

        .profile-image {
          position: relative;
          justify-self: center;
        }

        .profile-photo {
          width: 140px;
          height: 140px;
          border-radius: 50%;
          object-fit: cover;
          border: 4px solid #ffd000;
          box-shadow: 0 0 0 4px rgba(255, 208, 0, 0.2);
          z-index: 2;
          position: relative;
        }

        .profile-ring {
          position: absolute;
          top: 12px;
          left: 12px;
          right: 12px;
          bottom: 12px;
          border-radius: 50%;
          border: 3px solid rgba(255, 208, 0, 0.15);
          background: radial-gradient(circle, rgba(255,208,0,0.08) 0%, transparent 70%);
          z-index: 1;
          animation: pulse-ring 3s ease-in-out infinite;
        }

        @keyframes pulse-ring {
          0%, 100% { opacity: 0.6; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.05); }
        }

        .about-title {
          font-size: 48px;
          font-weight: 900;
          background: linear-gradient(135deg, #ffd000, #ff6b00);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          margin: 0 0 12px;
          line-height: 1.1;
        }

        .hero-subtitle {
          font-size: 20px;
          color: #ffd000;
          font-weight: 700;
          margin: 0 0 16px;
          letter-spacing: 0.02em;
        }

        .hero-desc {
          font-size: 16px;
          color: #aaa;
          margin: 0 0 32px;
          line-height: 1.7;
          max-width: 600px;
        }

        .hero-stats {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
        }

        .stat {
          text-align: center;
        }

        .stat-number {
          font-size: 28px;
          font-weight: 800;
          color: #ffd000;
          margin-bottom: 4px;
        }

        .stat-label {
          font-size: 12px;
          color: #666;
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        .telegram-section {
          max-width: 1200px;
          margin: 0 auto 60px;
        }

        .telegram-content {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          gap: 32px;
        }

        .section-title {
          font-size: 28px;
          font-weight: 700;
          color: #fff;
          margin: 0 0 12px;
        }

        .section-desc {
          font-size: 16px;
          color: #aaa;
          margin: 0 0 28px;
          line-height: 1.7;
          max-width: 600px;
        }

        .telegram-buttons {
          display: flex;
          flex-direction: column;
          gap: 12px;
          max-width: 320px;
          width: 100%;
        }

        .telegram-btn {
          padding: 16px 20px;
          border-radius: 12px;
          font-size: 15px;
          font-weight: 600;
          text-decoration: none;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s ease;
          border: 2px solid;
        }

        .profile-btn {
          background: linear-gradient(135deg, #ffd000, #ff6b00);
          color: #000;
          border-color: #ffd000;
          box-shadow: 0 8px 25px rgba(255,208,0,0.3);
        }

        .channel-btn {
          background: transparent;
          color: #0088cc;
          border-color: #0088cc;
          box-shadow: 0 8px 25px rgba(0,136,204,0.2);
        }

        .telegram-btn:hover {
          transform: translateY(-3px);
          box-shadow: 0 15px 35px rgba(0,0,0,0.4);
        }

        .skills-section {
          max-width: 1200px;
          margin: 0 auto;
        }

        .skills-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
          gap: 24px;
        }

        .skill-card {
          background: #0b0b0b;
          border: 1px solid #1a1a1a;
          border-radius: 16px;
          padding: 28px 20px;
          text-align: center;
          transition: all 0.3s ease;
        }

        .skill-card:hover {
          border-color: #ffd000;
          transform: translateY(-8px);
          box-shadow: 0 20px 50px rgba(255,208,0,0.15);
        }

        .skill-icon {
          font-size: 32px;
          margin-bottom: 16px;
        }

        .skill-card h3 {
          font-size: 18px;
          font-weight: 700;
          color: #fff;
          margin: 0 0 12px;
        }

        .skill-card p {
          font-size: 14px;
          color: #aaa;
          margin: 0;
          line-height: 1.6;
        }

        @media (max-width: 900px) {
          .hero-content {
            grid-template-columns: 1fr;
            text-align: center;
            gap: 32px;
          }

          .hero-stats {
            justify-content: center;
          }
        }

        @media (max-width: 600px) {
          .about-main {
            padding: 32px 12px 40px;
          }

          .about-title {
            font-size: 36px;
          }

          .telegram-buttons {
            max-width: 100%;
          }

          .skill-card {
            padding: 24px 16px;
          }
        }
      `}</style>
    </>
  );
}
