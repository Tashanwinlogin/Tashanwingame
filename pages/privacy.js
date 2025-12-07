import Head from 'next/head';

export default function PrivacyPolicy() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'PrivacyPolicy',
    name: 'Privacy Policy - Tashan Win Game',
    url: 'https://yourwebsite.com/privacy-policy',
    publisher: {
      '@type': 'Organization',
      name: 'Tashan Win Game',
      url: 'https://yourwebsite.com',
    },
  };

  return (
    <>
      <Head>
        <title>Privacy Policy | Tashan Win Game</title>
        <meta
          name="description"
          content="Learn how Tashan Win Game collects, uses, and protects your personal data when you visit the website or use our services."
        />
        <link rel="canonical" href="https://yourwebsite.com/privacy-policy" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      </Head>

      <main className="pp-main">
        <div className="pp-container">
          <header className="pp-hero">
            <h1>Privacy Policy</h1>
            <p>
              This Privacy Policy explains how Tashan Win Game collects, uses,
              and protects your information when you use this website and related
              services.
            </p>
            <p className="pp-meta">Last updated: 07 December 2025</p>
          </header>

          <section className="pp-section">
            <h2>1. Who we are</h2>
            <p>
              Tashan Win Game operates https://yourwebsite.com (the “Website”),
              which provides gaming content, guides, and related services. If you
              have questions about this policy, you can contact us at{' '}
              <a href="mailto:support@tashanwin.com">support@tashanwin.com</a>.
            </p>
          </section>

          <section className="pp-section">
            <h2>2. Information we collect</h2>
            <p>
              We may collect information that you provide directly (for example
              when you contact support or subscribe to updates) and information
              that is collected automatically when you browse the Website.
            </p>
            <ul>
              <li>
                Contact details such as name and email address you submit through
                forms.
              </li>
              <li>
                Technical data such as IP address, browser type, device
                identifiers, and usage data (pages visited, links clicked,
                approximate location).
              </li>
              <li>
                Account and preference data if you register or log in, such as
                username, settings, and saved content.
              </li>
              <li>
                Cookie and similar tracking data used for analytics, security,
                and personalization.
              </li>
            </ul>
          </section>

          <section className="pp-section">
            <h2>3. How we use your information</h2>
            <p>We use the collected information for purposes such as:</p>
            <ul>
              <li>Operating and improving the Website and its features.</li>
              <li>
                Providing content, updates, and support you request, including
                responding to messages sent through the contact form.
              </li>
              <li>
                Monitoring performance, preventing fraud and abuse, and keeping
                the Website secure.
              </li>
              <li>
                Showing analytics and measuring how visitors use our pages so we
                can optimize design and content.
              </li>
              <li>Complying with legal obligations and enforcing our terms.</li>
            </ul>
          </section>

          <section className="pp-section">
            <h2>4. Cookies and tracking technologies</h2>
            <p>
              We use cookies and similar technologies to remember your
              preferences, analyze traffic, and improve user experience. Some
              cookies are essential for the Website to function, while others are
              used for analytics or optional features.
            </p>
            <p>
              You can usually control or disable cookies through your browser
              settings. Doing so may affect certain features or performance of
              the Website.
            </p>
          </section>

          <section className="pp-section">
            <h2>5. Analytics and third‑party services</h2>
            <p>
              We may use third‑party analytics and advertising partners (for
              example, tools like Google Analytics or similar platforms) to help
              us understand how visitors use the Website and to deliver or
              measure ads.
            </p>
            <p>
              These providers may set their own cookies or collect identifiers
              and usage data as described in their respective privacy policies.
              You can usually opt out of analytics or personalized advertising
              through the settings offered by those providers or your browser.
            </p>
          </section>

          <section className="pp-section">
            <h2>6. Legal bases and data retention</h2>
            <p>
              Where required by law, we process personal data based on one or
              more legal bases such as your consent, the performance of a
              contract, compliance with legal obligations, or our legitimate
              interests in operating and improving the Website.
            </p>
            <p>
              We retain personal data only for as long as necessary for the
              purposes described in this policy, or as required by applicable
              laws, after which it is securely deleted, anonymized, or archived.
            </p>
          </section>

          <section className="pp-section">
            <h2>7. How we share information</h2>
            <p>
              We do not sell your personal information. We may share it with
              trusted service providers who help us operate the Website (for
              example, hosting, analytics, security, or email delivery), under
              contracts that require them to protect your data.
            </p>
            <p>
              We may also disclose information if required by law, to protect our
              rights or the safety of users, or in connection with a merger,
              sale, or other business transfer where the data remains protected.
            </p>
          </section>

          <section className="pp-section">
            <h2>8. International transfers</h2>
            <p>
              Depending on your location and our service providers, your
              information may be processed in countries that may not provide the
              same level of data protection as your home jurisdiction.
            </p>
            <p>
              Where required, we take appropriate safeguards (such as contractual
              protections) to help ensure that your information remains protected
              when it is transferred across borders.
            </p>
          </section>

          <section className="pp-section">
            <h2>9. Your rights and choices</h2>
            <p>
              Subject to local laws, you may have rights such as accessing,
              correcting, or deleting your personal data, objecting to certain
              processing, or withdrawing consent where processing is based on
              consent.
            </p>
            <p>
              To exercise these rights or ask about your data, contact us at{' '}
              <a href="mailto:support@tashanwin.com">support@tashanwin.com</a>.
              We may need to verify your identity before responding.
            </p>
          </section>

          <section className="pp-section">
            <h2>10. Children’s privacy</h2>
            <p>
              This Website is not intended for children under the age that
              requires parental consent in their jurisdiction. We do not
              knowingly collect personal information from children without
              appropriate consent.
            </p>
            <p>
              If you believe a child has provided us with personal information,
              please contact us and we will take steps to delete it where
              required.
            </p>
          </section>

          <section className="pp-section">
            <h2>11. Changes to this policy</h2>
            <p>
              We may update this Privacy Policy from time to time to reflect
              changes in our practices, legal requirements, or the Website’s
              features. When we make material changes, we will update the “Last
              updated” date at the top of this page.
            </p>
            <p>
              Your continued use of the Website after an updated policy is posted
              means you accept the revised terms.
            </p>
          </section>

          <section className="pp-section">
            <h2>12. Contact us</h2>
            <p>
              If you have any questions or concerns about this Privacy Policy or
              how your data is handled, you can reach us at:
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
      </main>

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

        /* Clean hero – no box, no strip */
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
    </>
  );
}
