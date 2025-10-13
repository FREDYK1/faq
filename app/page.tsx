import Image from "next/image";

export default function Home() {
  return (
    <>
    <main className="hero">
      <div className="hero-inner">
        <section className="hero-left">
          <h1>Employee
            <br />
            Attendance
            <br />
            FAQs
          </h1>

          <p className="hero-lead text-black">Find quick answers to common questions about our attendance monitoring system, policies, and procedures.</p>

        </section>

        <aside className="hero-right">
          <div className="hero-image">
            <Image src="/Hero Picture.png" alt="team around clock" width={700} height={420} />
          </div>
        </aside>
      </div>
    </main>

      <section className="faq-section">
        <div className="faq-inner">
          <h2 className="faq-title">Frequently Ask Questions</h2>

          <div className="faq-grid">
            <details className="faq-item">
              <summary>
                <span className="summary-text">How may days am I required to be in the office?</span>
                <span className="chev">▾</span>
              </summary>
              <div className="faq-body">Answer about required days in office.</div>
            </details>

            <details className="faq-item">
              <summary>
                <span className="summary-text">What happens if I take a sick day or a holiday?</span>
                <span className="chev">▾</span>
              </summary>
              <div className="faq-body">Answer about sick days and holidays.</div>
            </details>

            <details className="faq-item">
              <summary>
                <span className="summary-text">What is the 'Weekly Quota'?</span>
                <span className="chev">▾</span>
              </summary>
              <div className="faq-body">Answer describing the weekly quota.</div>
            </details>

            <details className="faq-item">
              <summary>
                <span className="summary-text">Will my streak break if I do not come to the office on my selected day but attend on a different day?</span>
                <span className="chev">▾</span>
              </summary>
              <div className="faq-body">Answer about streaks and attendance policy.</div>
            </details>

            <details className="faq-item">
              <summary>
                <span className="summary-text">What happens if I spend more than 6 hours and 30 minutes in the office but arrive later than 10:00 AM? Will my streak break?</span>
                <span className="chev">▾</span>
              </summary>
              <div className="faq-body">Answer about arrival times and streak.</div>
            </details>

            <details className="faq-item">
              <summary>
                <span className="summary-text">What happens if I forget to clock in using the logger? Is my day lost?</span>
                <span className="chev">▾</span>
              </summary>
              <div className="faq-body">Answer about forgetting to clock in.</div>
            </details>
          </div>
        </div>
      </section>
      <section className="cta">
          <div className="cta-inner">
            <h2>Still Have Questions!?</h2>
            <p>Can’t find the answer your looking for? Our team to assist you.</p>
            <button className="btn cta-btn">Contact Us</button>
          </div>
        </section>
    </>
  );
}
