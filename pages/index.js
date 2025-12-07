import Head from 'next/head';

export default function Home() {
  const siteUrl = 'https://yourdomain.com'; // TODO: change to your real domain

  const organizationJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Tashan Win Game',
    url: siteUrl,
    logo: `${siteUrl}/logo.png`,
    contactPoint: [
      {
        '@type': 'ContactPoint',
        contactType: 'customer support',
        email: 'support@tashanwin.com',
        url: `${siteUrl}/contact`,
      },
    ],
  };

  const webSiteJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Tashan Win Game',
    url: siteUrl,
    potentialAction: {
      '@type': 'SearchAction',
      target: `${siteUrl}/search?q={search_term_string}`,
      'query-input': 'required name=search_term_string',
    },
  };

  return (
    <>
      <Head>
        {/* Primary Meta Tags - BRAND ONLY */}
        <title>Tashan Win Game – Official Homepage</title>
        <meta
          name="description"
          content="Official homepage of Tashan Win Game. Use this site to find the correct login portal, read safety and help articles, and reach the About and Contact pages for support."
        />
        <meta
          name="keywords"
          content="Tashan Win Game, TashanWin, Tashan Win official site"
        />
        <meta name="author" content="Tashan Win Game" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="googlebot" content="index, follow" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="language" content="English" />
        <meta name="revisit-after" content="7 days" />
        
        {/* Canonical URL */}
        <link rel="canonical" href={siteUrl + '/'} />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={siteUrl + '/'} />
        <meta property="og:title" content="Tashan Win Game – Official Homepage" />
        <meta
          property="og:description"
          content="Tashan Win Game official homepage with login link, safety guides, About and Contact information."
        />
        <meta property="og:image" content={`${siteUrl}/post-logo.jpg`} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:site_name" content="Tashan Win Game" />
        <meta property="og:locale" content="en_US" />
        
        {/* Help Google understand About / Contact as important brand pages */}
        <meta property="og:see_also" content={siteUrl + '/about'} />
        <meta property="og:see_also" content={siteUrl + '/contact'} />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content={siteUrl + '/'} />
        <meta name="twitter:title" content="Tashan Win Game – Official Homepage" />
        <meta
          name="twitter:description"
          content="Tashan Win Game official homepage with login link, safety guides, About and Contact information."
        />
        <meta name="twitter:image" content={`${siteUrl}/post-logo.jpg`} />
        
        {/* Additional Meta Tags */}
        <meta name="theme-color" content="#000000" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black" />
        <meta name="apple-mobile-web-app-title" content="Tashan Win Game" />
        
        {/* Favicon */}
        <link rel="icon" href="/favicon.png" type="image/png" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        
        {/* Structured Data - Organization (brand-focused) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        
        {/* Structured Data - WebSite */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(webSiteJsonLd) }}
        />
      </Head>
      <div style={{ 
        backgroundColor: 'black', 
        minHeight: '100vh',
        padding: '40px 20px',
        paddingBottom: '40px'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
          
          {/* Main Title */}
          <h1 style={{ 
            fontSize: '24px',
            fontWeight: 'bold', 
            color: 'gold', 
            marginBottom: '30px',
            whiteSpace: 'nowrap'
          }}>
            Tashan Win Game
          </h1>

          {/* Image */}
          <div style={{ 
            width: '30%',
            minWidth: '250px',
            maxWidth: '400px',
            margin: '0 auto 30px auto' 
          }}>
            <img 
              src="/post-logo.jpg" 
              alt="Tashan Win Game Login - Official Gaming Platform" 
              title="Tashan Win Game - Play and Win Real Rewards"
              width="400"
              height="400"
              style={{ 
                width: '100%', 
                borderRadius: '16px',
                border: '2px solid gold'
              }}
            />
          </div>

          {/* Register and Login Buttons */}
          <div style={{ 
            display: 'flex', 
            justifyContent: 'center', 
            gap: '12px', 
            marginBottom: '20px',
            flexWrap: 'wrap'
          }}>
            <a 
              href="/register" 
              aria-label="Register for Tashan Win Game"
              style={{ 
                padding: '10px 30px', 
                backgroundColor: 'gold', 
                color: 'black', 
                fontWeight: 'bold', 
                borderRadius: '8px', 
                textDecoration: 'none',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                fontSize: '16px'
              }}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"/>
              </svg>
              Register
            </a>
            <a 
              href="/login" 
              aria-label="Login to Tashan Win Game"
              style={{ 
                padding: '10px 30px', 
                border: '2px solid gold', 
                backgroundColor: 'transparent',
                color: 'gold', 
                fontWeight: 'bold', 
                borderRadius: '8px', 
                textDecoration: 'none',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                fontSize: '16px'
              }}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M11 7L9.6 8.4l2.6 2.6H2v2h10.2l-2.6 2.6L11 17l5-5-5-5zm9 12h-8v2h8c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2h-8v2h8v14z"/>
              </svg>
              Login
            </a>
          </div>

          {/* Telegram Button */}
          <div style={{ marginBottom: '50px' }}>
            <a 
              href="https://t.me/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Join Tashan Win Telegram Channel"
              style={{ 
                padding: '10px 35px', 
                backgroundColor: '#0088cc', 
                color: 'white', 
                fontWeight: 'bold', 
                borderRadius: '8px', 
                textDecoration: 'none',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                fontSize: '16px'
              }}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69.01-.03.01-.14-.07-.2-.08-.06-.19-.04-.27-.02-.12.02-1.96 1.25-5.54 3.67-.52.36-.99.53-1.42.52-.47-.01-1.37-.26-2.03-.48-.82-.27-1.47-.42-1.42-.88.03-.24.37-.49 1.03-.74 4.04-1.76 6.73-2.92 8.08-3.49 3.84-1.61 4.64-1.89 5.16-1.9.11 0 .37.03.54.17.14.11.18.26.2.38.01.08.03.29.01.45z"/>
              </svg>
              Contact on Telegram
            </a>
          </div>

          {/* First Heading */}
          <h2 style={{
            fontSize: '24px',
            fontWeight: 'bold',
            color: 'gold',
            marginBottom: '20px',
            borderBottom: '2px solid gold',
            paddingBottom: '10px',
            display: 'inline-block',
            whiteSpace: 'nowrap'
          }}>
            What is Tashan Win login?
          </h2>

          {/* First Paragraph */}
          <p style={{
            fontSize: '16px',
            lineHeight: '1.8',
            color: '#d1d5db',
            maxWidth: '900px',
            margin: '0 auto 30px auto',
            textAlign: 'left',
            padding: '0 20px'
          }}>
            <strong>Tashan Win login</strong> is your gateway to an exciting online gaming platform offering diverse entertainment options for players across India. This innovative platform provides seamless access to strategy games, puzzle challenges, arcade classics, and real-time multiplayer competitions. By creating your account, you unlock instant access to exclusive rewards, daily bonuses, and referral programs. The <strong>Tashan Win Game</strong> registration process is quick and straightforward, requiring only basic details. The platform ensures secure transactions, reliable 24/7 customer support, and regular updates with new gaming features. Join thousands of active players and discover why Tashan Win has become a trusted name in online gaming entertainment.
          </p>

          {/* Second Heading */}
          <h2 style={{
            fontSize: '28px',
            fontWeight: 'bold',
            color: 'gold',
            marginTop: '30px',
            marginBottom: '30px',
            borderBottom: '3px solid gold',
            paddingBottom: '12px',
            display: 'inline-block'
          }}>
            Tashan Win Game Login Process
          </h2>

          {/* Login Process Steps */}
          <div style={{
            maxWidth: '900px',
            margin: '0 auto 30px auto',
            textAlign: 'left',
            padding: '0 20px'
          }}>
            
            {/* Step 1 */}
            <div style={{
              display: 'flex',
              gap: '20px',
              marginBottom: '20px',
              padding: '20px',
              background: 'linear-gradient(135deg, #1a1a1a 0%, #0a0a0a 100%)',
              borderRadius: '12px',
              border: '1px solid #333',
              alignItems: 'flex-start'
            }}>
              <div style={{
                minWidth: '40px',
                height: '40px',
                background: 'linear-gradient(135deg, gold, #FFA500)',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '20px',
                fontWeight: 'bold',
                color: 'black'
              }}>1</div>
              <div>
                <h3 style={{ color: 'gold', marginBottom: '8px', fontSize: '18px', fontWeight: 'bold' }}>Access</h3>
                <p style={{ color: '#d1d5db', lineHeight: '1.6', margin: 0 }}>
                  Visit our website <a href="/" style={{ color: 'gold', textDecoration: 'underline', fontWeight: 'bold' }}>TashanWin.com</a>. You can see the Download or Register and Login Buttons - click on it.
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div style={{
              display: 'flex',
              gap: '20px',
              marginBottom: '20px',
              padding: '20px',
              background: 'linear-gradient(135deg, #1a1a1a 0%, #0a0a0a 100%)',
              borderRadius: '12px',
              border: '1px solid #333',
              alignItems: 'flex-start'
            }}>
              <div style={{
                minWidth: '40px',
                height: '40px',
                background: 'linear-gradient(135deg, gold, #FFA500)',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '20px',
                fontWeight: 'bold',
                color: 'black'
              }}>2</div>
              <div>
                <h3 style={{ color: 'gold', marginBottom: '8px', fontSize: '18px', fontWeight: 'bold' }}>Mobile Number</h3>
                <p style={{ color: '#d1d5db', lineHeight: '1.6', margin: 0 }}>
                  Enter your active phone number, starting with the <strong style={{ color: 'gold' }}>+91</strong> country code.
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div style={{
              display: 'flex',
              gap: '20px',
              marginBottom: '20px',
              padding: '20px',
              background: 'linear-gradient(135deg, #1a1a1a 0%, #0a0a0a 100%)',
              borderRadius: '12px',
              border: '1px solid #333',
              alignItems: 'flex-start'
            }}>
              <div style={{
                minWidth: '40px',
                height: '40px',
                background: 'linear-gradient(135deg, gold, #FFA500)',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '20px',
                fontWeight: 'bold',
                color: 'black'
              }}>3</div>
              <div>
                <h3 style={{ color: 'gold', marginBottom: '8px', fontSize: '18px', fontWeight: 'bold' }}>Security</h3>
                <p style={{ color: '#d1d5db', lineHeight: '1.6', margin: 0 }}>
                  Create a strong password and verify it carefully. You can update that later.
                </p>
              </div>
            </div>

            {/* Step 4 */}
            <div style={{
              display: 'flex',
              gap: '20px',
              marginBottom: '20px',
              padding: '20px',
              background: 'linear-gradient(135deg, #1a1a1a 0%, #0a0a0a 100%)',
              borderRadius: '12px',
              border: '1px solid #333',
              alignItems: 'flex-start'
            }}>
              <div style={{
                minWidth: '40px',
                height: '40px',
                background: 'linear-gradient(135deg, gold, #FFA500)',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '20px',
                fontWeight: 'bold',
                color: 'black'
              }}>4</div>
              <div>
                <h3 style={{ color: 'gold', marginBottom: '8px', fontSize: '18px', fontWeight: 'bold' }}>Referral Code</h3>
                <p style={{ color: '#d1d5db', lineHeight: '1.6', margin: 0 }}>
                  Type <strong style={{ color: 'gold', fontSize: '18px' }}>0275132242</strong> in the referral or invitation code field.
                </p>
              </div>
            </div>

            {/* Step 5 */}
            <div style={{
              display: 'flex',
              gap: '20px',
              marginBottom: '20px',
              padding: '20px',
              background: 'linear-gradient(135deg, #1a1a1a 0%, #0a0a0a 100%)',
              borderRadius: '12px',
              border: '1px solid #333',
              alignItems: 'flex-start'
            }}>
              <div style={{
                minWidth: '40px',
                height: '40px',
                background: 'linear-gradient(135deg, gold, #FFA500)',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '20px',
                fontWeight: 'bold',
                color: 'black'
              }}>5</div>
              <div>
                <h3 style={{ color: 'gold', marginBottom: '8px', fontSize: '18px', fontWeight: 'bold' }}>Consent</h3>
                <p style={{ color: '#d1d5db', lineHeight: '1.6', margin: 0 }}>
                  Tick the checkbox to confirm that you agree to the Privacy Policy and app terms.
                </p>
              </div>
            </div>

            {/* Step 6 */}
            <div style={{
              display: 'flex',
              gap: '20px',
              marginBottom: '0',
              padding: '20px',
              background: 'linear-gradient(135deg, #1a1a1a 0%, #0a0a0a 100%)',
              borderRadius: '12px',
              border: '1px solid #333',
              alignItems: 'flex-start'
            }}>
              <div style={{
                minWidth: '40px',
                height: '40px',
                background: 'linear-gradient(135deg, gold, #FFA500)',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '20px',
                fontWeight: 'bold',
                color: 'black'
              }}>6</div>
              <div>
                <h3 style={{ color: 'gold', marginBottom: '8px', fontSize: '18px', fontWeight: 'bold' }}>Finish</h3>
                <p style={{ color: '#d1d5db', lineHeight: '1.6', margin: 0 }}>
                  Tap the Register button to complete your <strong style={{ 
                    color: 'gold', 
                    background: 'linear-gradient(90deg, gold, #FFA500)',
                    padding: '2px 8px',
                    borderRadius: '4px',
                    color: 'black'
                  }}>Tashan Win Login</strong> and deposit and play.
                </p>
              </div>
            </div>

          </div>

          {/* Third Heading */}
          <h2 style={{
            fontSize: '28px',
            fontWeight: 'bold',
            color: 'gold',
            marginTop: '30px',
            marginBottom: '30px',
            borderBottom: '3px solid gold',
            paddingBottom: '12px',
            display: 'inline-block'
          }}>
            Tashan Win Login Guide
          </h2>

          {/* Login Guide Steps */}
          <div style={{
            maxWidth: '900px',
            margin: '0 auto 30px auto',
            textAlign: 'left',
            padding: '0 20px'
          }}>
            
            {/* Guide Step 1 */}
            <div style={{
              display: 'flex',
              gap: '20px',
              marginBottom: '20px',
              padding: '20px',
              background: 'linear-gradient(135deg, #1a1a1a 0%, #0a0a0a 100%)',
              borderRadius: '12px',
              border: '1px solid #333',
              alignItems: 'flex-start'
            }}>
              <div style={{
                minWidth: '40px',
                height: '40px',
                background: 'linear-gradient(135deg, gold, #FFA500)',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '20px',
                fontWeight: 'bold',
                color: 'black'
              }}>1</div>
              <div>
                <p style={{ color: '#d1d5db', lineHeight: '1.6', margin: 0 }}>
                  Open our website <a href="/" style={{ color: 'gold', textDecoration: 'underline', fontWeight: 'bold' }}>TashanWin.com</a>. You can see Register and Login button - click on it.
                </p>
              </div>
            </div>

            {/* Guide Step 2 */}
            <div style={{
              display: 'flex',
              gap: '20px',
              marginBottom: '20px',
              padding: '20px',
              background: 'linear-gradient(135deg, #1a1a1a 0%, #0a0a0a 100%)',
              borderRadius: '12px',
              border: '1px solid #333',
              alignItems: 'flex-start'
            }}>
              <div style={{
                minWidth: '40px',
                height: '40px',
                background: 'linear-gradient(135deg, gold, #FFA500)',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '20px',
                fontWeight: 'bold',
                color: 'black'
              }}>2</div>
              <div>
                <p style={{ color: '#d1d5db', lineHeight: '1.6', margin: 0 }}>
                  Enter your registered mobile number. Or if you don't have an account, create one.
                </p>
              </div>
            </div>

            {/* Guide Step 3 */}
            <div style={{
              display: 'flex',
              gap: '20px',
              marginBottom: '20px',
              padding: '20px',
              background: 'linear-gradient(135deg, #1a1a1a 0%, #0a0a0a 100%)',
              borderRadius: '12px',
              border: '1px solid #333',
              alignItems: 'flex-start'
            }}>
              <div style={{
                minWidth: '40px',
                height: '40px',
                background: 'linear-gradient(135deg, gold, #FFA500)',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '20px',
                fontWeight: 'bold',
                color: 'black'
              }}>3</div>
              <div>
                <p style={{ color: '#d1d5db', lineHeight: '1.6', margin: 0 }}>
                  Complete OTP verification. Or if you haven't registered, type your password and click on Register.
                </p>
              </div>
            </div>

            {/* Guide Step 4 */}
            <div style={{
              display: 'flex',
              gap: '20px',
              marginBottom: '0',
              padding: '20px',
              background: 'linear-gradient(135deg, #1a1a1a 0%, #0a0a0a 100%)',
              borderRadius: '12px',
              border: '1px solid #333',
              alignItems: 'flex-start'
            }}>
              <div style={{
                minWidth: '40px',
                height: '40px',
                background: 'linear-gradient(135deg, gold, #FFA500)',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '20px',
                fontWeight: 'bold',
                color: 'black'
              }}>4</div>
              <div>
                <p style={{ color: '#d1d5db', lineHeight: '1.6', margin: 0 }}>
                  You are now logged into the <strong style={{ 
                    color: 'gold', 
                    background: 'linear-gradient(90deg, gold, #FFA500)',
                    padding: '2px 8px',
                    borderRadius: '4px',
                    color: 'black'
                  }}>TashanWin Game</strong> dashboard.
                </p>
              </div>
            </div>

          </div>

          {/* Fourth Heading */}
          <h2 style={{
            fontSize: '28px',
            fontWeight: 'bold',
            color: 'gold',
            marginTop: '30px',
            marginBottom: '30px',
            borderBottom: '3px solid gold',
            paddingBottom: '12px',
            display: 'inline-block'
          }}>
            Tashan Win Game Features
          </h2>

          {/* Features Grid */}
          <div style={{
            maxWidth: '1000px',
            margin: '0 auto',
            padding: '0 20px',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '25px',
            marginBottom: '30px'
          }}>
            
            {/* Feature 1 */}
            <div style={{
              padding: '25px',
              background: 'linear-gradient(135deg, #1a1a1a 0%, #0a0a0a 100%)',
              borderRadius: '12px',
              border: '1px solid gold',
              textAlign: 'center'
            }}>
              <div style={{ fontSize: '40px', marginBottom: '15px' }}>🎮</div>
              <h3 style={{ color: 'gold', fontSize: '18px', fontWeight: 'bold', marginBottom: '10px' }}>Multiple Game Modes</h3>
              <p style={{ color: '#d1d5db', fontSize: '14px', lineHeight: '1.6' }}>
                Enjoy diverse gaming options including strategy games, puzzle challenges, arcade classics, and multiplayer tournaments.
              </p>
            </div>

            {/* Feature 2 */}
            <div style={{
              padding: '25px',
              background: 'linear-gradient(135deg, #1a1a1a 0%, #0a0a0a 100%)',
              borderRadius: '12px',
              border: '1px solid gold',
              textAlign: 'center'
            }}>
              <div style={{ fontSize: '40px', marginBottom: '15px' }}>⚡</div>
              <h3 style={{ color: 'gold', fontSize: '18px', fontWeight: 'bold', marginBottom: '10px' }}>Instant Withdrawals</h3>
              <p style={{ color: '#d1d5db', fontSize: '14px', lineHeight: '1.6' }}>
                Fast and secure withdrawals through UPI, bank transfer, and digital wallets within minutes.
              </p>
            </div>

            {/* Feature 3 */}
            <div style={{
              padding: '25px',
              background: 'linear-gradient(135deg, #1a1a1a 0%, #0a0a0a 100%)',
              borderRadius: '12px',
              border: '1px solid gold',
              textAlign: 'center'
            }}>
              <div style={{ fontSize: '40px', marginBottom: '15px' }}>🎁</div>
              <h3 style={{ color: 'gold', fontSize: '18px', fontWeight: 'bold', marginBottom: '10px' }}>Welcome Bonus</h3>
              <p style={{ color: '#d1d5db', fontSize: '14px', lineHeight: '1.6' }}>
                Get exclusive sign-up bonuses and daily rewards to boost your gaming experience from day one.
              </p>
            </div>

            {/* Feature 4 */}
            <div style={{
              padding: '25px',
              background: 'linear-gradient(135deg, #1a1a1a 0%, #0a0a0a 100%)',
              borderRadius: '12px',
              border: '1px solid gold',
              textAlign: 'center'
            }}>
              <div style={{ fontSize: '40px', marginBottom: '15px' }}>👥</div>
              <h3 style={{ color: 'gold', fontSize: '18px', fontWeight: 'bold', marginBottom: '10px' }}>Referral Program</h3>
              <p style={{ color: '#d1d5db', fontSize: '14px', lineHeight: '1.6' }}>
                Earn extra income by inviting friends. Share your referral code and get rewards for every successful referral.
              </p>
            </div>

            {/* Feature 5 */}
            <div style={{
              padding: '25px',
              background: 'linear-gradient(135deg, #1a1a1a 0%, #0a0a0a 100%)',
              borderRadius: '12px',
              border: '1px solid gold',
              textAlign: 'center'
            }}>
              <div style={{ fontSize: '40px', marginBottom: '15px' }}>📱</div>
              <h3 style={{ color: 'gold', fontSize: '18px', fontWeight: 'bold', marginBottom: '10px' }}>Mobile Optimized</h3>
              <p style={{ color: '#d1d5db', fontSize: '14px', lineHeight: '1.6' }}>
                Smooth performance on all devices with low data usage. Play anywhere, anytime on your smartphone or tablet.
              </p>
            </div>

            {/* Feature 6 */}
            <div style={{
              padding: '25px',
              background: 'linear-gradient(135deg, #1a1a1a 0%, #0a0a0a 100%)',
              borderRadius: '12px',
              border: '1px solid gold',
              textAlign: 'center'
            }}>
              <div style={{ fontSize: '40px', marginBottom: '15px' }}>🔒</div>
              <h3 style={{ color: 'gold', fontSize: '18px', fontWeight: 'bold', marginBottom: '10px' }}>Safe & Secure</h3>
              <p style={{ color: '#d1d5db', fontSize: '14px', lineHeight: '1.6' }}>
                Advanced encryption technology protects your data and transactions. 24/7 customer support available for assistance.
              </p>
            </div>

          </div>

          {/* Features Description */}
          <p style={{
            fontSize: '16px',
            lineHeight: '1.8',
            color: '#d1d5db',
            maxWidth: '900px',
            margin: '0 auto 30px auto',
            textAlign: 'left',
            padding: '0 20px'
          }}>
            <strong>Tashan Win</strong> stands out with its user-friendly interface that makes navigation simple for both beginners and experienced players. The platform offers real-time results with instant feedback, ensuring you never miss a moment of action. With regular updates and improvements, the gaming experience keeps getting better. Players can enjoy daily bonuses, VIP benefits, and special promotions that add extra value to their gaming sessions. The platform supports multiple payment methods and ensures quick processing of all transactions. Join a vibrant community of thousands of active players who trust <strong>Tashan Win Game</strong> for fair gameplay, transparent operations, and reliable payouts.
          </p>

          {/* Fifth Heading */}
          <h2 style={{
            fontSize: '28px',
            fontWeight: 'bold',
            color: 'gold',
            marginTop: '30px',
            marginBottom: '30px',
            borderBottom: '3px solid gold',
            paddingBottom: '12px',
            display: 'inline-block'
          }}>
            How to Withdraw Earnings from Tashan Win?
          </h2>

          {/* Withdrawal Content */}
          <div style={{
            maxWidth: '900px',
            margin: '0 auto 30px auto',
            textAlign: 'left',
            padding: '0 20px'
          }}>
            
            <p style={{
              fontSize: '16px',
              lineHeight: '1.8',
              color: '#d1d5db',
              marginBottom: '20px'
            }}>
              Withdrawing your earnings from <strong>Tashan Win</strong> is straightforward once you understand the basic requirements. Before making your first withdrawal request, you need to complete your profile verification by submitting valid identification documents. This one-time process typically takes 24-48 hours and helps maintain platform security for all users.
            </p>

            <p style={{
              fontSize: '16px',
              lineHeight: '1.8',
              color: '#d1d5db',
              marginBottom: '20px'
            }}>
              Your account must have a minimum balance that varies depending on your chosen withdrawal method. UPI transfers usually require a minimum of ₹100, while bank transfers might need ₹200 or more. Make sure your linked payment details match your registered account information exactly - mismatches can cause delays or rejections.
            </p>

            <p style={{
              fontSize: '16px',
              lineHeight: '1.8',
              color: '#d1d5db',
              marginBottom: '20px'
            }}>
              To process a withdrawal, navigate to the wallet section from your dashboard menu. Click the withdraw button and select your preferred payment method from the available options. Enter the amount you wish to withdraw, keeping in mind any applicable processing fees. Double-check all details before confirming your request.
            </p>

            <p style={{
              fontSize: '16px',
              lineHeight: '1.8',
              color: '#d1d5db',
              marginBottom: '20px'
            }}>
              Most UPI withdrawals get processed within 30 minutes to 2 hours during business hours. Bank transfers typically take 1-3 business days depending on your bank's processing time. Weekend requests might experience slight delays as banking systems have limited operations during non-working days.
            </p>

            <p style={{
              fontSize: '16px',
              lineHeight: '1.8',
              color: '#d1d5db',
              marginBottom: '0'
            }}>
              Keep track of your withdrawal history through the transaction section. If any withdrawal takes longer than expected, contact customer support with your transaction ID. They can check the status and resolve any issues quickly. Remember that promotional bonuses often come with specific wagering requirements that must be met before those funds become withdrawable.
            </p>

          </div>

          {/* Withdrawal Tips Box */}
          <div style={{
            maxWidth: '900px',
            margin: '30px auto 30px auto',
            padding: '25px',
            background: 'linear-gradient(135deg, #1a1a1a 0%, #0a0a0a 100%)',
            borderRadius: '12px',
            border: '2px solid gold'
          }}>
            <h3 style={{ 
              color: 'gold', 
              fontSize: '20px', 
              fontWeight: 'bold', 
              marginBottom: '15px',
              textAlign: 'center'
            }}>
              💡 Quick Withdrawal Tips
            </h3>
            <ul style={{
              color: '#d1d5db',
              fontSize: '15px',
              lineHeight: '2',
              listStyle: 'none',
              padding: 0
            }}>
              <li style={{ marginBottom: '10px' }}>✓ Verify your account immediately after registration to avoid withdrawal delays</li>
              <li style={{ marginBottom: '10px' }}>✓ Use the same payment method for deposits and withdrawals when possible</li>
              <li style={{ marginBottom: '10px' }}>✓ Process larger withdrawals during weekdays for faster approval</li>
              <li style={{ marginBottom: '10px' }}>✓ Keep your contact information updated for important transaction notifications</li>
              <li style={{ marginBottom: '0' }}>✓ Screenshot your transaction IDs as proof in case of technical issues</li>
            </ul>
          </div>

          {/* Sixth Heading */}
          <h2 style={{
            fontSize: '28px',
            fontWeight: 'bold',
            color: 'gold',
            marginTop: '30px',
            marginBottom: '30px',
            borderBottom: '3px solid gold',
            paddingBottom: '12px',
            display: 'inline-block'
          }}>
            Is Tashan Win Game Login Safe to use?
          </h2>

          {/* Safety Content */}
          <div style={{
            maxWidth: '900px',
            margin: '0 auto 30px auto',
            textAlign: 'left',
            padding: '0 20px'
          }}>
            
            <p style={{
              fontSize: '16px',
              lineHeight: '1.8',
              color: '#d1d5db',
              marginBottom: '20px'
            }}>
              <strong>Tashan Win</strong> uses SSL encryption to protect your data during transmission, similar to how banks secure online transactions. Your login credentials and payment information travel through encrypted channels. However, your own security practices matter just as much. Create strong passwords mixing uppercase, lowercase, numbers, and symbols. Never share your login details with anyone, regardless of their promises.
            </p>

            <p style={{
              fontSize: '16px',
              lineHeight: '1.8',
              color: '#d1d5db',
              marginBottom: '0'
            }}>
              The verification process requiring ID documents helps ensure accounts belong to real users, not bots. This protects you if someone attempts unauthorized access - they can't withdraw funds without matching your verified identity. Always keep screenshots of transactions as proof, and beware of phishing sites mimicking the official platform. Check URLs carefully before entering credentials.
            </p>

          </div>

          {/* Seventh Heading */}
          <h2 style={{
            fontSize: '28px',
            fontWeight: 'bold',
            color: 'gold',
            marginTop: '30px',
            marginBottom: '30px',
            borderBottom: '3px solid gold',
            paddingBottom: '12px',
            display: 'inline-block'
          }}>
            Tips to Win Big on Tashan Win Game
          </h2>

          {/* Tips Content */}
          <div style={{
            maxWidth: '900px',
            margin: '0 auto 30px auto',
            textAlign: 'left',
            padding: '0 20px'
          }}>
            
            <p style={{
              fontSize: '16px',
              lineHeight: '1.8',
              color: '#d1d5db',
              marginBottom: '0'
            }}>
              Success on <strong>Tashan Win</strong> depends on understanding game patterns and making informed decisions rather than relying purely on luck. Many experienced players share their strategies and insights through dedicated communities where newcomers can learn proven techniques. Joining our exclusive Telegram channel gives you direct access to expert analysis, winning patterns, and real-time game signals that have helped thousands of players improve their results. We provide daily predictions based on careful observation of game trends, along with tips on bankroll management and optimal betting strategies. Members receive timely notifications about favorable gaming conditions and learn when to increase stakes or play conservatively. The community atmosphere allows you to discuss strategies with fellow players, share your own experiences, and stay updated on platform promotions. Remember that while no method guarantees wins every time, educated gameplay significantly improves your odds compared to random betting. Click the Telegram button below to join our winning community today.
            </p>

          </div>

          {/* Telegram Channel Button */}
          <div style={{ textAlign: 'center', marginBottom: '30px' }}>
            <a 
              href="https://t.me/yourchannelusername"
              target="_blank"
              rel="noopener noreferrer nofollow"
              aria-label="Join Telegram for Winning Signals"
              style={{ 
                padding: '15px 50px', 
                backgroundColor: '#0088cc', 
                color: 'white', 
                fontWeight: 'bold', 
                borderRadius: '12px', 
                textDecoration: 'none',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '10px',
                fontSize: '18px',
                boxShadow: '0 4px 15px rgba(0, 136, 204, 0.4)',
                transition: 'all 0.3s'
              }}
              onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
              onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69.01-.03.01-.14-.07-.2-.08-.06-.19-.04-.27-.02-.12.02-1.96 1.25-5.54 3.67-.52.36-.99.53-1.42.52-.47-.01-1.37-.26-2.03-.48-.82-.27-1.47-.42-1.42-.88.03-.24.37-.49 1.03-.74 4.04-1.76 6.73-2.92 8.08-3.49 3.84-1.61 4.64-1.89 5.16-1.9.11 0 .37.03.54.17.14.11.18.26.2.38.01.08.03.29.01.45z"/>
              </svg>
              🎯 Join Telegram for Winning Signals
            </a>
          </div>

          {/* Eighth Heading */}
          <h2 style={{
            fontSize: '28px',
            fontWeight: 'bold',
            color: 'gold',
            marginTop: '30px',
            marginBottom: '30px',
            borderBottom: '3px solid gold',
            paddingBottom: '12px',
            display: 'inline-block'
          }}>
            Tashan Win Game (FAQs)
          </h2>

          {/* FAQ Section */}
          <div style={{
            maxWidth: '900px',
            margin: '0 auto 30px auto',
            textAlign: 'left',
            padding: '0 20px'
          }}>
            
            {/* FAQ 1 */}
            <div style={{
              marginBottom: '20px',
              padding: '20px',
              background: 'linear-gradient(135deg, #1a1a1a 0%, #0a0a0a 100%)',
              borderRadius: '12px',
              border: '1px solid gold'
            }}>
              <h3 style={{ color: 'gold', fontSize: '18px', fontWeight: 'bold', marginBottom: '10px' }}>
                ❓ What is the referral code for Tashan Win?
              </h3>
              <p style={{ color: '#d1d5db', lineHeight: '1.6', margin: 0 }}>
                Use referral code <strong style={{ color: 'gold' }}>0275132242</strong> during registration to receive exclusive bonuses and rewards. Enter this code in the invitation code field when signing up.
              </p>
            </div>

            {/* FAQ 2 */}
            <div style={{
              marginBottom: '20px',
              padding: '20px',
              background: 'linear-gradient(135deg, #1a1a1a 0%, #0a0a0a 100%)',
              borderRadius: '12px',
              border: '1px solid gold'
            }}>
              <h3 style={{ color: 'gold', fontSize: '18px', fontWeight: 'bold', marginBottom: '10px' }}>
                ❓ How long does withdrawal take on Tashan Win?
              </h3>
              <p style={{ color: '#d1d5db', lineHeight: '1.6', margin: 0 }}>
                UPI withdrawals typically process within 30 minutes to 2 hours during business hours. Bank transfers take 1-3 business days. Weekend withdrawals may experience slight delays.
              </p>
            </div>

            {/* FAQ 3 */}
            <div style={{
              marginBottom: '20px',
              padding: '20px',
              background: 'linear-gradient(135deg, #1a1a1a 0%, #0a0a0a 100%)',
              borderRadius: '12px',
              border: '1px solid gold'
            }}>
              <h3 style={{ color: 'gold', fontSize: '18px', fontWeight: 'bold', marginBottom: '10px' }}>
                ❓ What is the minimum withdrawal amount?
              </h3>
              <p style={{ color: '#d1d5db', lineHeight: '1.6', margin: 0 }}>
                The minimum withdrawal varies by payment method. UPI transfers usually require ₹100 minimum, while bank transfers may need ₹200 or more.
              </p>
            </div>

            {/* FAQ 4 */}
            <div style={{
              marginBottom: '20px',
              padding: '20px',
              background: 'linear-gradient(135deg, #1a1a1a 0%, #0a0a0a 100%)',
              borderRadius: '12px',
              border: '1px solid gold'
            }}>
              <h3 style={{ color: 'gold', fontSize: '18px', fontWeight: 'bold', marginBottom: '10px' }}>
                ❓ Do I need to verify my account?
              </h3>
              <p style={{ color: '#d1d5db', lineHeight: '1.6', margin: 0 }}>
                Yes, account verification is required before making your first withdrawal. Submit valid ID documents during the one-time verification process, which takes 24-48 hours to complete.
              </p>
            </div>

            {/* FAQ 5 */}
            <div style={{
              marginBottom: '20px',
              padding: '20px',
              background: 'linear-gradient(135deg, #1a1a1a 0%, #0a0a0a 100%)',
              borderRadius: '12px',
              border: '1px solid gold'
            }}>
              <h3 style={{ color: 'gold', fontSize: '18px', fontWeight: 'bold', marginBottom: '10px' }}>
                ❓ Is Tashan Win available on mobile devices?
              </h3>
              <p style={{ color: '#d1d5db', lineHeight: '1.6', margin: 0 }}>
                Yes, Tashan Win is fully optimized for mobile devices. You can play on smartphones and tablets with smooth performance and low data usage. Access through your mobile browser anytime, anywhere.
              </p>
            </div>

            {/* FAQ 6 */}
            <div style={{
              marginBottom: '0',
              padding: '20px',
              background: 'linear-gradient(135deg, #1a1a1a 0%, #0a0a0a 100%)',
              borderRadius: '12px',
              border: '1px solid gold'
            }}>
              <h3 style={{ color: 'gold', fontSize: '18px', fontWeight: 'bold', marginBottom: '10px' }}>
                ❓ How can I get winning signals?
              </h3>
              <p style={{ color: '#d1d5db', lineHeight: '1.6', margin: 0 }}>
                Join our Telegram channel for expert analysis, winning patterns, and real-time game signals. We provide daily predictions and strategies to help improve your gaming results. Click the Telegram button to join the community.
              </p>
            </div>

          </div>

          {/* Video Tutorial Section */}
          <h2 style={{
            fontSize: '28px',
            fontWeight: 'bold',
            color: 'gold',
            marginTop: '30px',
            marginBottom: '30px',
            borderBottom: '3px solid gold',
            paddingBottom: '12px',
            display: 'inline-block'
          }}>
            Video Tutorial
          </h2>

          {/* YouTube Video Embed */}
          <div style={{
            maxWidth: '900px',
            margin: '0 auto 30px auto',
            padding: '0 20px'
          }}>
            <div style={{
              position: 'relative',
              paddingBottom: '56.25%',
              height: 0,
              overflow: 'hidden',
              borderRadius: '12px',
              border: '2px solid gold'
            }}>
              <iframe
                src="https://www.youtube.com/embed/zLhWPseOzP0"
                title="Tashan Win Game Tutorial"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                rel="nofollow"
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%'
                }}
              ></iframe>
            </div>
            <p style={{
              fontSize: '14px',
              color: '#9ca3af',
              textAlign: 'center',
              marginTop: '15px',
              fontStyle: 'italic'
            }}>
              Watch our complete video guide for Tashan Win Game registration and gameplay tips
            </p>
          </div>

          {/* Conclusion Section */}
          <h2 style={{
            fontSize: '28px',
            fontWeight: 'bold',
            color: 'gold',
            marginTop: '30px',
            marginBottom: '30px',
            borderBottom: '3px solid gold',
            paddingBottom: '12px',
            display: 'inline-block'
          }}>
            Conclusion
          </h2>

          {/* Conclusion Content */}
          <div style={{
            maxWidth: '900px',
            margin: '0 auto 30px auto',
            textAlign: 'left',
            padding: '0 20px'
          }}>
            
            <p style={{
              fontSize: '16px',
              lineHeight: '1.8',
              color: '#d1d5db',
              marginBottom: '20px'
            }}>
              <strong>Tashan Win Game</strong> offers an exciting platform for gaming enthusiasts looking to enjoy diverse gameplay modes while earning rewards. Throughout this guide, we've covered everything from the registration process using referral code <strong style={{ color: 'gold' }}>0275132242</strong> to secure login procedures, game features, withdrawal methods, and safety measures. The platform provides multiple gaming options including strategy games, puzzles, and multiplayer tournaments, all accessible through a user-friendly mobile-optimized interface.
            </p>

            <p style={{
              fontSize: '16px',
              lineHeight: '1.8',
              color: '#d1d5db',
              marginBottom: '20px'
            }}>
              Understanding the withdrawal process is crucial for smooth transactions. We've explained how UPI transfers typically process within 30 minutes to 2 hours, while bank transfers may take 1-3 business days. Remember to complete your account verification early to avoid any delays when claiming your earnings. The platform's security features, including SSL encryption and identity verification, work to protect your personal information and financial transactions.
            </p>

            <p style={{
              fontSize: '16px',
              lineHeight: '1.8',
              color: '#d1d5db',
              marginBottom: '20px'
            }}>
              Success on <strong>Tashan Win</strong> depends on smart gameplay strategies rather than pure luck. Our Telegram community provides daily winning signals, expert analysis, and real-time predictions to help you make informed decisions. By joining our exclusive channel, you gain access to proven techniques that have helped thousands of players improve their results. The community atmosphere allows you to learn from experienced players, share strategies, and stay updated on the latest promotions and platform features.
            </p>

            <p style={{
              fontSize: '16px',
              lineHeight: '1.8',
              color: '#d1d5db',
              marginBottom: '0'
            }}>
              Whether you're a beginner taking your first steps or an experienced player looking to enhance your skills, this comprehensive guide provides all the information you need. Follow the step-by-step registration process, maintain strong security practices, understand withdrawal requirements, and leverage our Telegram community for winning strategies. Start your <strong>Tashan Win</strong> journey today with confidence, knowing you have the complete knowledge to navigate the platform successfully and maximize your gaming experience.
            </p>

          </div>

          {/* Final CTA */}
          <div style={{ 
            textAlign: 'center', 
            padding: '30px 20px',
            background: 'linear-gradient(135deg, #1a1a1a 0%, #0a0a0a 100%)',
            borderRadius: '16px',
            border: '2px solid gold',
            maxWidth: '900px',
            margin: '30px auto 20px auto'
          }}>
            <h3 style={{ 
              color: 'gold', 
              fontSize: '24px', 
              fontWeight: 'bold', 
              marginBottom: '15px' 
            }}>
              🎮 Ready to Start Winning?
            </h3>
            <p style={{ 
              color: '#d1d5db', 
              fontSize: '16px', 
              marginBottom: '25px',
              lineHeight: '1.6'
            }}>
              Join thousands of players enjoying exciting games and earning real rewards on Tashan Win!
            </p>
            <div style={{ 
              display: 'flex', 
              justifyContent: 'center', 
              gap: '15px',
              flexWrap: 'wrap'
            }}>
              <a 
                href="/register" 
                aria-label="Register Now"
                style={{ 
                  padding: '12px 40px', 
                  backgroundColor: 'gold', 
                  color: 'black', 
                  fontWeight: 'bold', 
                  borderRadius: '10px', 
                  textDecoration: 'none',
                  fontSize: '18px',
                  display: 'inline-block'
                }}
              >
                Register Now
              </a>
              <a 
                href="https://t.me/yourchannelusername"
                target="_blank"
                rel="noopener noreferrer nofollow"
                aria-label="Join Telegram Community"
                style={{ 
                  padding: '12px 40px', 
                  backgroundColor: '#0088cc', 
                  color: 'white', 
                  fontWeight: 'bold', 
                  borderRadius: '10px', 
                  textDecoration: 'none',
                  fontSize: '18px',
                  display: 'inline-block'
                }}
              >
                Join Telegram
              </a>
            </div>
          </div>

        </div>
      </div>
    </>
  );
}
