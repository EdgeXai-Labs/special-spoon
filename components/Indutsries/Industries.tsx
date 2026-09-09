import React from "react";
import "./Industries.css";

type Category = {
  title: string;
  description: string;
  image: string;
  icon: "sweet" | "bakery" | "namkeen" | "chips" | "extruded" | "ready";
};

const categories: Category[] = [
  {
    title: "Sweets",
    description:
      "Hygienic and efficient solutions for traditional and modern sweet manufacturing.",
    image: "/images/Indutries/Compresed_snaks_indutries.png",
    icon: "sweet",
  },
  {
    title: "Bakery",
    description:
      "Complete processing lines for bread, biscuits, cookies, cakes and more.",
    image:
      "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=900&q=85",
    icon: "bakery",
  },
  {
    title: "Namkeens",
    description:
      "Automated solutions for a wide range of savoury snacks with consistent taste and texture.",
    image: "/images/Indutries/Compresed_numkins_indutries.png",
    icon: "namkeen",
  },
  {
    title: "Chips",
    description:
      "High-performance systems for potato, banana and multigrain chips.",
    image: "/images/Indutries/Compresed_chips_indutries.png",
    icon: "chips",
  },
  {
    title: "Extruded Snacks",
    description:
      "Advanced technology for extruded and pellet-based snack products.",
    image:
      "https://images.unsplash.com/photo-1585032226651-759b368d7246?auto=format&fit=crop&w=900&q=85",
    icon: "extruded",
  },
  {
    title: "Ready to Eat Foods",
    description:
      "End-to-end solutions for healthy, tasty and convenient food products.",
    image:
      "https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?auto=format&fit=crop&w=900&q=85",
    icon: "ready",
  },
];

const Arrow = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="M5 12h13M13 6l6 6-6 6" />
  </svg>
);

const Icon = ({ type }: { type: Category["icon"] }) => {
  const paths = {
    sweet: (
      <>
        <path d="M4 13h16l-1.1 6H5.1L4 13Z" />
        <path d="M7 13c0-3 2-5 5-5s5 2 5 5" />
        <path d="M12 8V5M9 8 7.5 6.5M15 8l1.5-1.5" />
        <circle cx="12" cy="5" r="1" />
      </>
    ),
    bakery: (
      <>
        <path d="M4 18h16v2H4z" />
        <path d="M6 18v-6c0-2 1.4-3.5 3.5-3.5S13 10 13 12v6" />
        <path d="M13 18v-7c0-2 1.3-3.5 3.5-3.5S20 9 20 11v7" />
        <path d="M8.5 12h2M15.5 11h2" />
      </>
    ),
    namkeen: (
      <>
        <path d="M4 12h16l-2 7H6l-2-7Z" />
        <path d="M7 12c.5-3 2.1-5 5-5s4.5 2 5 5" />
        <path d="m8 9 2 2m2-3 1 3m3-2-2 2" />
      </>
    ),
    chips: (
      <>
        <path d="M7 5c4.7-1.5 9.1 2.8 7.6 7.5-1.5 4.7-7.8 6.1-10.3 2.1C1.8 10.6 3.7 6.1 7 5Z" />
        <path d="m7 10 1.5 1.5M11 8l1.5 1.5M10 14l1 1" />
      </>
    ),
    extruded: (
      <>
        <circle cx="12" cy="12" r="7" />
        <circle cx="12" cy="12" r="2.3" />
        <path d="M12 2v3M12 19v3M2 12h3M19 12h3M4.9 4.9 7 7M17 17l2.1 2.1M19.1 4.9 17 7M7 17l-2.1 2.1" />
      </>
    ),
    ready: (
      <>
        <path d="M4 12h16l-1.5 7h-13L4 12Z" />
        <path d="M7 12c0-3.2 2.2-5 5-5s5 1.8 5 5" />
        <path d="M9 7V5M15 7V5M12 7V4" />
        <path d="M2.5 20h19" />
      </>
    ),
  };

  return (
    <span className="category-icon">
      <svg viewBox="0 0 24 24" aria-hidden="true">
        {paths[type]}
      </svg>
    </span>
  );
};

const FeatureIcon = ({
  type,
}: {
  type: "global" | "people" | "growth";
}) => {
  if (type === "global") {
    return (
      <svg viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="8.5" />
        <path d="M3.5 12h17M12 3.5c2.6 2.3 3.8 5.1 3.8 8.5S14.6 18.2 12 20.5C9.4 18.2 8.2 14.6 8.2 12S9.4 5.8 12 3.5Z" />
      </svg>
    );
  }

  if (type === "people") {
    return (
      <svg viewBox="0 0 24 24">
        <circle cx="9" cy="8" r="3" />
        <circle cx="17" cy="9" r="2.3" />
        <path d="M3.5 19c0-3.4 2.3-5.4 5.5-5.4s5.5 2 5.5 5.4M15 14.2c3.1 0 5.2 1.6 5.2 4.8" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24">
      <path d="M4 20V11h4v9H4Zm6 0V7h4v13h-4Zm6 0V3h4v17h-4Z" />
      <path d="m4 8 5-4 4 2 7-5M16 1h4v4" />
    </svg>
  );
};

export default function Industries() {
  return (
    <main className="industries-page">
      <section className="hero">
          <div className="hero-copy">
          <div className="eyebrow">
            <span />
            INDUSTRIES
          </div>

          <h1>
            From Diverse Foods
            <br />
            to <em>Brighter Possibilities</em>
          </h1>

          <p>
            Every food has a story. We bring the right technology
            <br className="desktop-break" />
            to process it better, safer and at scale.
          </p>
        </div>

        <div className="hero-art">
          <div className="art-label traditional">Traditional<br />Foods</div>
          <div className="art-label modern">Modern<br />Snacks</div>
          <div className="art-label global">Global<br />Opportunities</div>

          <div className="food-collage">
            <div
              className="collage-food food-sweets"
              style={{
                backgroundImage:
                  "url(/images/Indutries/Compresed_snaks_indutries.png)",
              }}
            />
            <div
              className="collage-food food-bakery"
              style={{
                backgroundImage:
                  "url(https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=800&q=85)",
              }}
            />
            <div
              className="collage-food food-namkeen"
              style={{
                backgroundImage:
                  "url(/images/Indutries/Compresed_numkins_indutries.png)",
              }}
            />
            <div
              className="collage-food food-chips"
              style={{
                backgroundImage:
                  "url(/images/Indutries/Compresed_chips_indutries.png)",
              }}
            />
          </div>

          <div className="orange-orbit">
            <p>
              SAME<br />
              INGREDIENTS.<br />
              A BRIGHTER<br />
              TOMORROW.
            </p>
            <span />
          </div>

          <div className="right-message">
            IDEAS<br />
            ENGINEERING<br />
            FOOD<br />
            A BETTER<br />
            TOMORROW
          </div>
        </div>
      </section>

      <section className="category-grid" aria-label="Food industry categories">
        {categories.map((category) => (
          <article className="food-card" key={category.title}>
            <div
              className="card-image"
              style={{ backgroundImage: `url(${category.image})` }}
            />
            <div className="card-body">
              <Icon type={category.icon} />
              <h2>{category.title}</h2>
              <p>{category.description}</p>
              <a href="#explore" className="explore-link">
                Explore <Arrow />
              </a>
            </div>
          </article>
        ))}
      </section>

      <section className="bottom-banner">
        <div className="factory-panel">
          <div className="factory-overlay" />
          <div className="factory-content">
            Processing
            <br />
            Possibilities
            <br />
            Worldwide
          </div>
        </div>

        <div className="global-panel">
          <div className="map-area">
            <div className="world-map">● · · ● ·</div>
          </div>

          <div className="feature">
            <FeatureIcon type="global" />
            <p>
              Serving
              <br />
              Global Markets
            </p>
          </div>

          <div className="feature">
            <FeatureIcon type="people" />
            <p>
              Trusted by
              <br />
              Food Manufacturers
            </p>
          </div>

          <div className="feature">
            <FeatureIcon type="growth" />
            <p>
              Built for
              <br />
              Your Growth
            </p>
          </div>

          <a className="expert-button" href="#contact">
            Talk to Our Experts <Arrow />
          </a>

          <div className="footer-line">
            FOOD <i /> PEOPLE <i /> A BRIGHTER TOMORROW
          </div>
        </div>
      </section>
    </main>
  );
}