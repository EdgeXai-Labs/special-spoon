const testimonials = [
  {
    quote:
      'Special Spoon delivered a customised solution that improved our snack quality and made production smoother.',
    name: 'Mr. Rajesh Kumar',
    role: 'Director, Crispy Bites Foods Pvt. Ltd.',
    image: 'https://i.pravatar.cc/96?img=12',
  },
  {
    quote:
      'The machines are robust, easy to operate and reliable. Their after-sales support has been excellent.',
    name: 'Mr. Amit Sharma',
    role: 'Managing Partner, Fresh Fry Foods',
    image: 'https://i.pravatar.cc/96?img=11',
  },
  {
    quote:
      'The right machinery and expert guidance helped us scale our food business with confidence.',
    name: 'Mr. Suresh Patel',
    role: 'Founder, Patel Namkeen',
    image: 'https://i.pravatar.cc/96?img=68',
  },
  {
    quote:
      'From installation to training, the team was professional and responsive at every stage.',
    name: 'Mr. Vikram Singh',
    role: 'Owner, Golden Crunch Foods',
    image: 'https://i.pravatar.cc/96?img=14',
  },
]

export default function TestimonialSlider() {
  return (
    <section id="testimonials" className="testimonials-reference" aria-label="Client testimonials">
      <div className="testimonials-reference__inner">
        <header className="testimonials-reference__header">
          <h2>What Our Clients Say</h2>
        </header>

        <div className="testimonials-reference__grid">
          {testimonials.map((testimonial) => (
            <article className="testimonial-reference-card" key={testimonial.name}>
              <div className="testimonial-reference-card__stars" aria-label="Rated five out of five stars">
                <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
              </div>
              <blockquote>&ldquo;{testimonial.quote}&rdquo;</blockquote>
              <footer className="testimonial-reference-card__author">
                <img src={testimonial.image} alt={testimonial.name} />
                <div>
                  <strong>{testimonial.name}</strong>
                  <span>{testimonial.role}</span>
                </div>
              </footer>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
