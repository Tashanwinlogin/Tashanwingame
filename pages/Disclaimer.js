import Head from 'next/head';

export default function DisclaimerPage() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Disclaimer',
    name: 'Disclaimer - Tashan Win Game',
    url: 'https://yourwebsite.com/disclaimer',
    publisher: {
      '@type': 'Organization',
      name: 'Tashan Win Game',
      url: 'https://yourwebsite.com'
    }
  };

  return (
    <>
      <Head>
        <title>Disclaimer - Tashan Win Game</title>
        <meta
          name="description"
          content="Legal disclaimer for Tashan Win Game, explaining the limits of responsibility for the information, guides and links published on this website."
        />
        <link rel="canonical" href="https://yourwebsite.com/disclaimer" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      </Head>

      <main className="pp-main">
        <div className="pp-container">
          <header className="pp-hero">
            <h1>Disclaimer</h1>
            <p>
              This Disclaimer explains important limitations on how you may use the information
              published on the Tashan Win Game website and clarifies what we are and are not
              responsible for.
            </p>
            <p className="pp-meta">Last updated: 07 December 2025</p>
          </header>

          <section className="pp-section">
            <h2>1. Information only, no guarantees</h2>
            <p>
              All content on this website is provided for general information and entertainment
              purposes. While effort is made to keep information accurate and up to date, Tashan Win
              Game does not guarantee that any content is complete, reliable, or error‑free.
            </p>
            <p>
              You use the Website and rely on any information or guides at your own risk. It is your
              responsibility to verify details before acting on them.
            </p>
          </section>

          <section className="pp-section">
            <h2>2. No financial or legal advice</h2>
            <p>
              Nothing on this Website should be considered financial, investment, legal, or other
              professional advice. Any examples of outcomes, strategies, or &quot;tricks&quot; are for
              illustration only and do not guarantee similar results.
            </p>
            <p>
              Before making decisions that could affect your finances or legal situation, you should
              consult a qualified professional or advisor in your area.
            </p>
          </section>

          <section className="pp-section">
            <h2>3. Gaming and risk warning</h2>
            <p>
              Gaming and betting always involve risk, including the risk of losing money. Content on
              this Website does not change that risk and should not be treated as a way to guarantee
              winnings or income.
            </p>
            <p>
              Only play with money you can afford to lose and treat gaming as entertainment. If you
              feel that gaming is negatively affecting your life, consider taking a break and
              seeking help from a responsible‑gaming or support organization.
            </p>
          </section>

          <section className="pp-section">
            <h2>4. Third‑party websites and services</h2>
            <p>
              The Website may contain links to third‑party websites, apps, or services. These are
              provided for convenience only. Tashan Win Game does not control and is not responsible
              for the content, availability, accuracy, or policies of any third‑party site.
            </p>
            <p>
              Any issues related to accounts, deposits, withdrawals, or gameplay on external
              platforms must be handled directly with those providers. We are not liable for losses
              or disputes arising from your use of third‑party services.
            </p>
          </section>

          <section className="pp-section">
            <h2>5. Limitation of liability</h2>
            <p>
              To the fullest extent permitted by law, Tashan Win Game and its owners, partners, and
              contributors are not liable for any direct or indirect loss or damage arising from your
              use of the Website. This includes, without limitation, loss of money, loss of data,
              business interruption, or any other damage, even if we have been advised that such
              damage is possible.
            </p>
          </section>

          <section className="pp-section">
            <h2>6. Changes to this Disclaimer</h2>
            <p>
              This Disclaimer may be updated from time to time to reflect changes in our content, the
              law, or how the Website operates. When important changes are made, the &quot;Last
              updated&quot; date at the top of this page will be adjusted. Continued use of the Website
              after any update means you accept the revised Disclaimer.
            </p>
          </section>

          <section className="pp-section">
            <h2>7. Contact</h2>
            <p>
              If you have questions about this Disclaimer, or if you wish to report an issue related
              to information on the Website, you can contact us at:
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

        {/* Reuse same styles as privacy/terms */}
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
