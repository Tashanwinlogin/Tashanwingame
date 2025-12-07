import Head from 'next/head';

export default function TermsAndDisclaimer() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'TermsOfService',
    name: 'Terms of Use & Disclaimer - Tashan Win Game',
    url: 'https://yourwebsite.com/terms',
    publisher: {
      '@type': 'Organization',
      name: 'Tashan Win Game',
      url: 'https://yourwebsite.com'
    }
  };

  return (
    <>
      <Head>
        <title>Terms of Use &amp; Disclaimer - Tashan Win Game</title>
        <meta
          name="description"
          content="Terms of use and important disclaimer for visitors of the Tashan Win Game website, including eligibility, content usage rules, third‑party platforms and gaming risk notice."
        />
        <link rel="canonical" href="https://yourwebsite.com/terms" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      </Head>

      {/* IDENTICAL structure to privacy.js */}
      <main className="pp-main">
        <div className="pp-container">
          <header className="pp-hero">
            <h1>Terms of Use &amp; Disclaimer</h1>
            <p>
              These Terms of Use and Disclaimer explain the rules for using the Tashan Win Game
              website and provide important information about risks and limitations of
              responsibility when you rely on content found here.
            </p>
            <p className="pp-meta">Last updated: 07 December 2025</p>
          </header>

          <section className="pp-section">
            <h2>1. About Tashan Win Game</h2>
            <p>
              Tashan Win Game operates this website (the &quot;Website&quot;), which provides
              gaming‑related information, guides, and educational content. The Website itself does
              not run games or hold user balances. If you have questions about these terms, you can
              contact us at <a href="mailto:support@tashanwin.com">support@tashanwin.com</a>.
            </p>
          </section>

          <section className="pp-section">
            <h2>2. Eligibility &amp; Responsible Access</h2>
            <p>
              You may use the Website only if you are at least 18 years old, or the age of legal
              majority in your jurisdiction if it is higher. By accessing the Website, you confirm
              that viewing gaming‑related content is permitted where you live and that you will use
              the information in a lawful and responsible manner.
            </p>
            <p>
              You are solely responsible for checking and following the laws that apply to you,
              including any restrictions on online gaming, betting, or similar activities in your
              region.
            </p>
          </section>

          <section className="pp-section">
            <h2>3. Use of the Website &amp; Content</h2>
            <p>
              All articles, guides, tips, text, graphics, and other material on the Website are
              provided for information and entertainment only. You may read, learn from, and share
              links to our pages, but you may not copy, re‑publish, resell, or present the content as
              your own without our permission.
            </p>
            <p>
              You also agree not to misuse the Website. This includes, for example, not attempting
              to hack or disrupt the Website, not using automated tools to scrape or overload it, and
              not using it to spread spam, scams, or other harmful material.
            </p>
          </section>

          <section className="pp-section">
            <h2>4. Gaming Risk Notice &amp; Disclaimer</h2>
            <p>
              The Website may describe strategies, examples, or opinions about games, odds, bonuses,
              or &quot;tricks.&quot; These examples are only explanations of how certain games or platforms
              might work. They do not guarantee any win, profit, or specific result.
            </p>
            <p>
              Gaming and betting always involve a risk of financial loss. You are fully responsible
              for the decisions you make on any external platform. Never gamble with money you cannot
              afford to lose and treat all gaming as entertainment rather than a source of income.
            </p>
            <p>
              If you feel your gaming behavior is becoming harmful, consider taking a break and
              seeking help from a responsible‑gaming or support organization in your country.
            </p>
          </section>

          <section className="pp-section">
            <h2>5. Third‑Party Platforms &amp; Links</h2>
            <p>
              The Website may mention or link to external websites, apps, or gaming platforms. These
              third‑party services are not owned or operated by Tashan Win Game. We do not control
              their content, rules, balances, payouts, or support.
            </p>
            <p>
              Any problems related to deposits, withdrawals, account restrictions, or gameplay on
              those external platforms must be handled directly with the provider. Tashan Win Game is
              not responsible for losses, disputes, or damages arising from your use of third‑party
              services.
            </p>
          </section>

          <section className="pp-section">
            <h2>6. Limitation of Liability</h2>
            <p>
              To the maximum extent permitted by law, Tashan Win Game and its owners, partners, and
              contributors will not be liable for any direct or indirect loss that results from your
              use of, or inability to use, the Website or from relying on any information provided
              here.
            </p>
            <p>
              This includes, without limitation, loss of money, loss of data, business interruption,
              or any other damage, even if we have been informed that such damage is possible.
            </p>
          </section>

          <section className="pp-section">
            <h2>7. Changes to These Terms</h2>
            <p>
              We may update these Terms of Use and this Disclaimer from time to time so they stay in
              line with changes in the law, our content, or how the Website operates. When we make
              important updates, we will change the &quot;Last updated&quot; date shown at the top of this
              page. By continuing to use the Website after an update, you accept the revised terms.
            </p>
          </section>

          <section className="pp-section">
            <h2>8. Contact</h2>
            <p>
              If you have questions about these Terms of Use or this Disclaimer, or if you want to
              report a problem with content on the Website, you can reach us at:
            </p>
            <p className="pp-contact">
              Email:{' '}
              <a href="mailto:support@tashanwin.com">support@tashanwin.com</a>
              <br />
              Website:{' '}
              <a href="https://yourwebsite.com">https://yourwebsite.com</a>
            </p>
          </section>
        </div>

        {/* REUSE THE SAME STYLES AS PRIVACY */}
        <style jsx>{`
          .pp-main {
            background: #000;
            min-height: 100vh;
            padding: 80px 16px 60px;
          }

          .pp-container {
            max-width: 900px;
            margin: 0 auto;
            color: #f5f5f5;
          }

          .pp-hero {
            padding-bottom: 18px;
            margin-bottom: 26px;
            background: transparent;
            border: none;
          }

          .pp-hero h1 {
            font-size: 32px;
            font-weight: 700;
            margin: 0 0 8px;
            color: #fff;
          }

          .pp-hero p {
            margin: 0;
            font-size: 15px;
            color: #aaa;
            line-height: 1.6;
          }

          .pp-meta {
            margin-top: 8px;
            font-size: 13px;
            color: #777;
          }

          .pp-section {
            margin-bottom: 22px;
          }

          .pp-section h2 {
            font-size: 20px;
            margin: 0 0 8px;
            color: #ffd000;
          }

          .pp-section p {
            margin: 0 0 8px;
            font-size: 14px;
            color: #ddd;
            line-height: 1.7;
          }

          .pp-section ul {
            margin: 0 0 8px 18px;
            padding: 0;
            list-style: disc;
            color: #ddd;
            font-size: 14px;
          }

          .pp-section li {
            margin-bottom: 4px;
          }

          .pp-section a {
            color: #ffd000;
            text-decoration: none;
          }

          .pp-section a:hover {
            color: #ff6b00;
          }

          .pp-contact {
            font-size: 14px;
            line-height: 1.6;
          }

          @media (max-width: 768px) {
            .pp-main {
              padding: 70px 12px 40px;
            }

            .pp-hero h1 {
              font-size: 26px;
            }

            .pp-section h2 {
              font-size: 18px;
            }
          }
        `}</style>
      </main>
    </>
  );
}
