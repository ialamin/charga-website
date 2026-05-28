function SocialProof() {
  return (
    <section className="social-proof" aria-labelledby="social-proof-heading">
      <h2 id="social-proof-heading" className="section-title">
        Loved by Locals
      </h2>
      <div className="social-proof-grid">
        <article className="review-card">
          <p className="review-stars" aria-label="5 out of 5 stars">
            ★★★★★
          </p>
          <p className="review-text">
            “The kabobs were packed with flavor and the service was warm and
            fast. This is our new weeknight spot.”
          </p>
          <p className="reviewer-name">— Aisha M.</p>
        </article>
        <article className="review-card">
          <p className="review-stars" aria-label="5 out of 5 stars">
            ★★★★★
          </p>
          <p className="review-text">
            “Chopped cheese and chili momos were both amazing. Everything tasted
            fresh and perfectly seasoned.”
          </p>
          <p className="reviewer-name">— Daniel R.</p>
        </article>
        <article className="review-card">
          <p className="review-stars" aria-label="5 out of 5 stars">
            ★★★★★
          </p>
          <p className="review-text">
            “Great food, generous portions, and a clean space. Charga feels like
            a neighborhood favorite already.”
          </p>
          <p className="reviewer-name">— Priya S.</p>
        </article>
      </div>
    </section>
  )
}

export default SocialProof
