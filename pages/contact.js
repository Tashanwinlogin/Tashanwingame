import { useState } from 'react';
import Head from 'next/head';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
    if (errors[e.target.name]) {
      setErrors((prev) => ({ ...prev, [e.target.name]: '' }));
    }
  };

  const validate = () => {
    const next = {};
    if (!formData.name.trim()) next.name = 'Name is required';
    if (!formData.email.trim()) {
      next.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      next.email = 'Enter a valid email';
    }
    if (!formData.subject.trim()) next.subject = 'Select a subject';
    if (!formData.message.trim()) {
      next.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      next.message = 'Message must be at least 10 characters';
    }
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;
    setStatus('sending');
    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setStatus(''), 4000);
    }, 1200);
  };

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    mainEntity: {
      '@type': 'Organization',
      name: 'Tashan Win Game',
      url: 'https://yourwebsite.com',
      contactPoint: {
        '@type': 'ContactPoint',
        contactType: 'Support',
        email: 'support@tashanwin.com',
      },
    },
  };

  return (
    <>
      <Head>
        <title>Contact Support | Tashan Win Game</title>
        <meta
          name="description"
          content="Contact the Tashan Win support team for account, payment or gameplay issues using this simple contact page."
        />
        <link rel="canonical" href="https://yourwebsite.com/contact" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      </Head>

      <main className="contact-main">
        {/* Header / title */}
        <section className="contact-header">
          <h1 className="contact-title">Contact Support</h1>
          <p className="contact-subtitle">
            Having trouble with your account, payments, or gameplay? Drop a message and the team will get back within 24 hours.
          </p>
        </section>

        {/* Main two-column layout: form + quick links */}
        <section className="contact-layout">
          {/* LEFT: form */}
          <div className="contact-form-block">
            <div className="contact-card">
              <h2 className="card-title">Send a message</h2>
              <p className="card-desc">
                Add as much detail as you can. For payment issues, include your username and transaction ID.
              </p>

              <form className="contact-form" onSubmit={handleSubmit} noValidate>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name">Name *</label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleChange}
                      className={errors.name ? 'has-error' : ''}
                      placeholder="Your full name"
                    />
                    {errors.name && <span className="error-text">{errors.name}</span>}
                  </div>

                  <div className="form-group">
                    <label htmlFor="email">Email *</label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={errors.email ? 'has-error' : ''}
                      placeholder="you@example.com"
                    />
                    {errors.email && <span className="error-text">{errors.email}</span>}
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="subject">Subject *</label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className={errors.subject ? 'has-error' : ''}
                  >
                    <option value="">Select a subject</option>
                    <option value="account">Account / Login</option>
                    <option value="payment">Deposit / Withdrawal</option>
                    <option value="bonus">Bonus / Offers</option>
                    <option value="technical">Technical issue</option>
                    <option value="feedback">Feedback</option>
                    <option value="other">Something else</option>
                  </select>
                  {errors.subject && <span className="error-text">{errors.subject}</span>}
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="6"
                    value={formData.message}
                    onChange={handleChange}
                    className={errors.message ? 'has-error' : ''}
                    placeholder="Explain what happened, on which game, and when."
                  />
                  {errors.message && <span className="error-text">{errors.message}</span>}
                </div>

                <button
                  type="submit"
                  className="submit-btn"
                  disabled={status === 'sending'}
                >
                  {status === 'sending'
                    ? 'Sending...'
                    : status === 'success'
                    ? 'Message sent!'
                    : 'Send message'}
                </button>

                {status === 'success' && (
                  <p className="success-text">
                    Thanks! Support has received your message and will reply on your email.
                  </p>
                )}
              </form>
            </div>
          </div>

          {/* RIGHT: quick links + contact details */}
          <div className="quick-links-block">
            <div className="quick-card">
              <h2 className="quick-title">Quick help</h2>
              <p className="quick-desc">
                Jump straight to main pages. These might get you to the right place faster.
              </p>

              <div className="quick-links">
                <a href="/" className="quick-link">
                  <span>Home</span>
                  <span className="quick-link-arrow">›</span>
                </a>
                <a href="/blog" className="quick-link">
                  <span>Blog</span>
                  <span className="quick-link-arrow">›</span>
                </a>
                <a href="/about" className="quick-link">
                  <span>About</span>
                  <span className="quick-link-arrow">›</span>
                </a>
              </div>
            </div>

            <div className="side-info-card">
              <h3>Contact details</h3>

              <div className="side-info-line">
                <span className="label">Email</span>
                <a href="mailto:support@tashanwin.com">support@tashanwin.com</a>
              </div>
              <div className="side-info-line">
                <span className="label">Telegram</span>
                <a
                  href="https://t.me/tashanwin"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  @tashanwin
                </a>
              </div>
              <div className="side-info-line">
                <span className="label">Support hours</span>
                <span>10:00 AM – 12:00 AM IST</span>
              </div>
            </div>
          </div>
        </section>
      </main>

      <style jsx>{`
        .contact-main {
          background: #000;
          min-height: 100vh;
          padding: 40px 16px 50px;
        }

        .contact-header {
          max-width: 1100px;
          margin: 0 auto 20px;
          border-bottom: 1px solid #1a1a1a;
          padding-bottom: 12px;
        }

        .contact-title {
          font-size: 32px;
          font-weight: 800;
          font-family: 'Poppins', system-ui, -apple-system, BlinkMacSystemFont,
            'Segoe UI', sans-serif;
          margin: 0 0 6px;
          background: linear-gradient(135deg, #ffd000, #ff6b00);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .contact-subtitle {
          margin: 0;
          color: #999;
          font-size: 15px;
          max-width: 700px;
        }

        .contact-layout {
          max-width: 1100px;
          margin: 0 auto;
          display: flex;
          gap: 28px;
          align-items: flex-start;
        }

        .contact-form-block {
          flex: 1.4;
        }

        .quick-links-block {
          flex: 1;
          display: flex;
          flex-direction: column;
          gap: 18px;
        }

        .contact-card {
          background: #0b0b0b;
          border-radius: 12px;
          border: 1px solid #1a1a1a;
          padding: 24px 22px 26px;
        }

        .card-title {
          font-size: 20px;
          font-weight: 700;
          color: #fff;
          margin: 0 0 6px;
        }

        .card-desc {
          margin: 0 0 18px;
          color: #aaa;
          font-size: 14px;
        }

        .contact-form {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 14px;
        }

        .form-group {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .form-group label {
          font-size: 13px;
          font-weight: 600;
          color: #ddd;
        }

        .form-group input,
        .form-group select,
        .form-group textarea {
          background: #050505;
          border-radius: 8px;
          border: 1px solid #222;
          color: #fff;
          font-size: 14px;
          padding: 10px 12px;
          outline: none;
          font-family: inherit;
          transition: border-color 0.2s ease, background 0.2s ease;
        }

        .form-group input::placeholder,
        .form-group textarea::placeholder {
          color: #555;
        }

        .form-group input:focus,
        .form-group select:focus,
        .form-group textarea:focus {
          border-color: #ffd000;
          background: #0f0f0f;
        }

        .has-error {
          border-color: #ff4747 !important;
        }

        .error-text {
          font-size: 12px;
          color: #ff6b6b;
        }

        .submit-btn {
          margin-top: 4px;
          border: none;
          border-radius: 999px;
          padding: 11px 22px;
          font-size: 14px;
          font-weight: 600;
          cursor: pointer;
          align-self: flex-start;
          background: linear-gradient(135deg, #ffd000, #ff6b00);
          color: #000;
          transition: transform 0.15s ease, box-shadow 0.15s ease;
        }

        .submit-btn:hover:not(:disabled) {
          transform: translateY(-1px);
          box-shadow: 0 8px 18px rgba(255, 208, 0, 0.4);
        }

        .submit-btn:disabled {
          opacity: 0.6;
          cursor: default;
        }

        .success-text {
          margin-top: 8px;
          font-size: 13px;
          color: #00ff88;
        }

        .quick-card {
          background: #0b0b0b;
          border-radius: 12px;
          border: 1px solid #1a1a1a;
          padding: 18px 18px 16px;
        }

        .quick-title {
          font-size: 16px;
          font-weight: 700;
          color: #fff;
          margin: 0 0 6px;
        }

        .quick-desc {
          margin: 0 0 14px;
          font-size: 13px;
          color: #aaa;
        }

        .quick-links {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .quick-link {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 10px 12px;
          border-radius: 8px;
          background: #050505;
          border: 1px solid #151515;
          font-size: 14px;
          color: #ddd;
          text-decoration: none;
          transition: border-color 0.15s ease, background 0.15s ease,
            transform 0.15s ease;
        }

        .quick-link-arrow {
          color: #777;
        }

        .quick-link:hover {
          border-color: #ffd000;
          background: #101010;
          transform: translateX(2px);
          color: #ffd000;
        }

        .side-info-card {
          background: #050505;
          border-radius: 12px;
          border: 1px solid #1a1a1a;
          padding: 16px 18px 14px;
        }

        .side-info-card h3 {
          font-size: 14px;
          font-weight: 700;
          color: #fff;
          margin: 0 0 10px;
          text-transform: uppercase;
          letter-spacing: 0.08em;
        }

        .side-info-line {
          display: flex;
          flex-direction: column;
          gap: 2px;
          margin-bottom: 8px;
        }

        .side-info-line:last-child {
          margin-bottom: 0;
        }

        .side-info-line .label {
          font-size: 11px;
          text-transform: uppercase;
          color: #666;
        }

        .side-info-line a,
        .side-info-line span {
          font-size: 13px;
          color: #ffd000;
          text-decoration: none;
        }

        .side-info-line a:hover {
          color: #ff6b00;
        }

        @media (max-width: 900px) {
          .contact-main {
            padding-top: 32px;
          }
        }

        @media (max-width: 768px) {
          .contact-layout {
            flex-direction: column;
          }

          .contact-form-block {
            order: 1;
          }

          .quick-links-block {
            order: 2;
          }

          .contact-card {
            padding: 20px 16px 22px;
          }

          .quick-card,
          .side-info-card {
            padding: 16px 14px 14px;
          }

          .form-row {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 600px) {
          .contact-main {
            padding: 32px 12px 40px;
          }

          .contact-title {
            font-size: 26px;
          }

          .contact-subtitle {
            font-size: 14px;
          }
        }
      `}</style>
    </>
  );
}
