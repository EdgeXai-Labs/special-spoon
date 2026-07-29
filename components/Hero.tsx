'use client'

export default function Hero() {
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault()
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <section id="home" className="hero">
      <div className="hero-bg"></div>
      <div className="hero-content">
        <h1>
          Engineering Better <span className="hero-highlight">Food Manufacturing</span>
        </h1>
        <p>
          We design, manufacture, customize and install industrial food processing machinery
          that improves productivity, reduces operating costs and delivers consistent product quality.
        </p>
        <div className="hero-buttons">
          <a href="#contact" onClick={(e) => handleNavClick(e, 'contact')} className="btn btn-primary">
            Request Quote
          </a>
          <a href="#products" onClick={(e) => handleNavClick(e, 'products')} className="btn btn-secondary">
            Explore Machines
          </a>
        </div>
      </div>
    </section>
  )
}
