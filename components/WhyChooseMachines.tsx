'use client'

import React, { useEffect, useRef, useState } from "react";
import {
  ShieldCheck,
  TrendingUp,
  BadgeCheck,
  Leaf,
  Settings,
  Headphones,
  CheckCircle2,
  Factory,
  Users,
  CalendarDays,
  MapPin,
  ArrowRight,
  MessageCircle,
  Wrench,
} from "lucide-react";
import "./WhyChooseMachines.css";

// ─── Types ────────────────────────────────────────────────────────────────────

interface BenefitItem {
  id: number;
  image: string;
  imageAlt: string;
  icon: React.ReactNode;
  title: string;
  description: string;
}

interface StatItem {
  id: number;
  value: string;
  label: string;
  icon: React.ReactNode;
}

interface BrandItem {
  id: number;
  src: string;
  alt: string;
}

interface PanelPoint {
  id: number;
  text: string;
}

// ─── Data ─────────────────────────────────────────────────────────────────────

const panelPoints: PanelPoint[] = [
  { id: 1, text: "Consistent Product Quality" },
  { id: 2, text: "Higher Production Capacity" },
  { id: 3, text: "Hygienic & Safe Processing" },
  { id: 4, text: "Lower Manpower Dependency" },
  { id: 5, text: "Built for 24×7 Operation" },
];

const benefits: BenefitItem[] = [
  {
    id: 1,
    image: "images/why_to_choose_section_images/1.png",
    imageAlt: "Heavy-duty food processing machine construction",
    icon: <ShieldCheck size={22} strokeWidth={2} />,
    title: "Robust & Reliable Build",
    description:
      "Heavy-duty construction for uninterrupted performance year after year.",
  },
  {
    id: 2,
    image: "/images/why_to_choose_section_images/2.png",
    imageAlt: "High productivity food processing line",
    icon: <TrendingUp size={22} strokeWidth={2} />,
    title: "Higher Productivity",
    description:
      "Designed for maximum output with consistent production results.",
  },
  {
    id: 3,
    image: "/images/why_to_choose_section_images/3.png",
    imageAlt: "Consistent product quality in food manufacturing",
    icon: <BadgeCheck size={22} strokeWidth={2} />,
    title: "Consistent Product Quality",
    description:
      "Uniform size, shape and quality across every production cycle.",
  },
  {
    id: 4,
    image: "/images/why_to_choose_section_images/4.png",
    imageAlt: "Food-grade hygienic processing machinery",
    icon: <Leaf size={22} strokeWidth={2} />,
    title: "Food Safety First",
    description:
      "Hygienic, food-grade design built for modern food-processing environments.",
  },
  {
    id: 5,
    image: "/images/why_to_choose_section_images/5.png",
    imageAlt: "Easy to operate food processing controls",
    icon: <Settings size={22} strokeWidth={2} />,
    title: "Easy to Operate",
    description:
      "User-friendly controls for faster setup and smooth daily operation.",
  },
  {
    id: 6,
    image: "/images/why_to_choose_section_images/6.png",
    imageAlt: "End-to-end support and service for food machinery",
    icon: <Headphones size={22} strokeWidth={2} />,
    title: "End-to-End Support",
    description:
      "Installation, training, spare parts and service whenever you need us.",
  },
];

const companyStats: StatItem[] = [
  {
    id: 1,
    value: "25+",
    label: "Years of Experience",
    icon: <CalendarDays size={28} strokeWidth={1.5} />,
  },
  {
    id: 2,
    value: "500+",
    label: "Machines Delivered",
    icon: <Factory size={28} strokeWidth={1.5} />,
  },
  {
    id: 3,
    value: "Experienced",
    label: "Technical Team",
    icon: <Wrench size={28} strokeWidth={1.5} />,
  },
  {
    id: 4,
    value: "Pan India",
    label: "Service & Support",
    icon: <MapPin size={28} strokeWidth={1.5} />,
  },
];


// ─── Sub-components ───────────────────────────────────────────────────────────

const BenefitCard: React.FC<{ item: BenefitItem; index: number }> = ({
  item,
  index,
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = cardRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setVisible(true), index * 80);
          observer.unobserve(el);
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [index]);

  return (
    <div
      ref={cardRef}
      className={`why-machines-benefit-card${visible ? " why-machines-benefit-card--visible" : ""}`}
    >
      <div className="why-machines-benefit-card__image-wrap">
        <img
          src={item.image}
          alt={item.imageAlt}
          className="why-machines-benefit-card__image"
          loading="lazy"
        />
        <div className="why-machines-benefit-card__image-overlay" />
      </div>
      <div className="why-machines-benefit-card__icon-ring" aria-hidden="true">
        {item.icon}
      </div>
      <div className="why-machines-benefit-card__body">
        <h3 className="why-machines-benefit-card__title">{item.title}</h3>
        <p className="why-machines-benefit-card__desc">{item.description}</p>
      </div>
    </div>
  );
};

const StatBlock: React.FC<{ item: StatItem; isLast: boolean }> = ({
  item,
  isLast,
}) => (
  <div className="why-machines-stat-block">
    <div className="why-machines-stat-block__icon" aria-hidden="true">
      {item.icon}
    </div>
    <div className="why-machines-stat-block__content">
      <span className="why-machines-stat-block__value">{item.value}</span>
      <span className="why-machines-stat-block__label">{item.label}</span>
    </div>
    {!isLast && (
      <div className="why-machines-stat-block__divider" aria-hidden="true" />
    )}
  </div>
);

const BrandLogoItem: React.FC<{ item: BrandItem }> = ({ item }) => (
  <div className="why-machines-brand-logo">
    <img
      src={item.src}
      alt={item.alt}
      className="why-machines-brand-logo__img"
      loading="lazy"
    />
  </div>
);

// ─── Main Component ───────────────────────────────────────────────────────────

export default function WhyChooseMachines() {
  const headerRef = useRef<HTMLDivElement>(null);
  const showcaseRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const brandsRef = useRef<HTMLDivElement>(null);

  const [headerVisible, setHeaderVisible] = useState(false);
  const [showcaseVisible, setShowcaseVisible] = useState(false);
  const [statsVisible, setStatsVisible] = useState(false);
  const [brandsVisible, setBrandsVisible] = useState(false);

  useEffect(() => {
    const pairs: [React.RefObject<HTMLDivElement>, (v: boolean) => void][] = [
      [headerRef, setHeaderVisible],
      [showcaseRef, setShowcaseVisible],
      [statsRef, setStatsVisible],
      [brandsRef, setBrandsVisible],
    ];

    const observers = pairs.map(([ref, setter]) => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setter(true);
            observer.disconnect();
          }
        },
        { threshold: 0.1 }
      );
      if (ref.current) observer.observe(ref.current);
      return observer;
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  return (
    <section className="why-machines-section" aria-labelledby="why-machines-heading">
      {/* ── Section Header ── */}
      <div
        ref={headerRef}
        className={`why-machines-header${headerVisible ? " why-machines-header--visible" : ""}`}
      >
        <span className="why-machines-eyebrow" aria-label="Section label">
          WHY CHOOSE OUR MACHINES
        </span>
        <h2
          id="why-machines-heading"
          className="why-machines-headline"
        >
          <span className="why-machines-headline__dark">More Than Machines. </span>
          <br className="why-machines-headline__break" />
          <span className="why-machines-headline__dark">We Build Your </span>
          <span className="why-machines-headline__red">Food Production Partner.</span>
        </h2>
        <p className="why-machines-subtext">
          Trusted by food businesses for quality, performance and long-term value.
        </p>
      </div>

      {/* ── Machine Showcase + Benefit Cards (merged block) ── */}
      <div className="why-machines-fusion">
      <div
        ref={showcaseRef}
        className={`why-machines-showcase${showcaseVisible ? " why-machines-showcase--visible" : ""}`}
        aria-label="Featured machine showcase"
      >
        {/* Background layer */}
        <div className="why-machines-showcase__bg" aria-hidden="true">
          <div className="why-machines-showcase__bg-gradient" />
          <div className="why-machines-showcase__bg-pattern" />
        </div>

        {/* Left benefit panel */}
        <aside
          className="why-machines-panel"
          aria-label="Key machine benefits"
        >
          <div className="why-machines-panel__header">
            <span className="why-machines-panel__badge">
              <ShieldCheck size={14} strokeWidth={2.5} aria-hidden="true" />
              Key Advantages
            </span>
            <h3 className="why-machines-panel__heading">
              Built for Real Food Production
            </h3>
          </div>

          <ul className="why-machines-panel__list" role="list">
            {panelPoints.map((point) => (
              <li key={point.id} className="why-machines-panel__item">
                <span
                  className="why-machines-panel__check"
                  aria-hidden="true"
                >
                  <CheckCircle2 size={16} strokeWidth={2.5} />
                </span>
                <span className="why-machines-panel__text">{point.text}</span>
              </li>
            ))}
          </ul>

          <div className="why-machines-panel__divider" aria-hidden="true" />

          <p className="why-machines-panel__tagline">
            Helping food businesses produce better, faster and smarter.
          </p>
        </aside>

        {/* Machine image */}
        <div className="why-machines-showcase__machine">
          <img
            src="/images/why_to_choose_section_images/ChatGPT Image Hot press with oven.png"
            alt="Charan Food Tech industrial food processing machinery — stainless steel, heavy-duty build"
            className="why-machines-showcase__machine-img"
            loading="eager"
          />

          {/* Floating quality badge */}
          <div
            className="why-machines-showcase__badge"
            aria-label="Food-grade stainless steel certified"
          >
            <BadgeCheck
              size={20}
              strokeWidth={2}
              className="why-machines-showcase__badge-icon"
              aria-hidden="true"
            />
            <div>
              <span className="why-machines-showcase__badge-title">
                Food-Grade
              </span>
              <span className="why-machines-showcase__badge-sub">
                Stainless Steel
              </span>
            </div>
          </div>

          {/* Floating production badge */}
          <div
            className="why-machines-showcase__uptime"
            aria-label="Built for 24 by 7 production"
          >
            <Factory
              size={18}
              strokeWidth={2}
              aria-hidden="true"
              className="why-machines-showcase__uptime-icon"
            />
            <span className="why-machines-showcase__uptime-text">
              24×7 Production Ready
            </span>
          </div>
        </div>
      </div>

      {/* ── Six Benefit Cards ── */}
      <div className="why-machines-cards-section">
        <div className="why-machines-cards-grid" role="list">
          {benefits.map((item, index) => (
            <div key={item.id} role="listitem">
              <BenefitCard item={item} index={index} />
            </div>
          ))}
        </div>
      </div>
      </div>{/* /why-machines-fusion */}

      {/* ── Company Statistics ── */}
      <div
        ref={statsRef}
        className={`why-machines-stats-section${statsVisible ? " why-machines-stats-section--visible" : ""}`}
        aria-label="Company statistics"
      >
        <div className="why-machines-stats-inner">
          <div className="why-machines-stats-label" aria-hidden="true">
            <Users size={15} strokeWidth={2} />
            <span>Our Track Record</span>
          </div>
          <div className="why-machines-stats-strip" role="list">
            {companyStats.map((item, index) => (
              <div key={item.id} role="listitem">
                <StatBlock
                  item={item}
                  isLast={index === companyStats.length - 1}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      

      {/* ── Final CTA ── */}
      <div className="why-machines-cta-wrap" aria-label="Call to action">
        <div className="why-machines-cta">
          {/* Background image overlay */}
          <div className="why-machines-cta__bg" aria-hidden="true">
            <img
              src="/images/CFT_Machinery/Continous fryer Line Process-03.png"
              alt=""
              className="why-machines-cta__bg-img"
              aria-hidden="true"
            />
            <div className="why-machines-cta__bg-overlay" />
          </div>

          {/* Left: icon + text */}
          <div className="why-machines-cta__content">
            <div
              className="why-machines-cta__icon-wrap"
              aria-hidden="true"
            >
              <Wrench size={32} strokeWidth={1.5} />
            </div>
            <div className="why-machines-cta__text">
              <h2 className="why-machines-cta__headline">
                Ready to Upgrade Your Production Line?
              </h2>
              <p className="why-machines-cta__sub">
                Let's build the right solution for your business.
              </p>
            </div>
          </div>

          {/* Right: buttons */}
          <div className="why-machines-cta__actions">
            <a
              href="/machines"
              className="why-machines-cta__btn-primary"
              aria-label="View all Charan Food Tech machines"
            >
              View All Machines
              <ArrowRight size={18} strokeWidth={2} aria-hidden="true" />
            </a>
            <a
              href="/contact"
              className="why-machines-cta__btn-secondary"
              aria-label="Talk to our machinery experts"
            >
              <MessageCircle size={18} strokeWidth={2} aria-hidden="true" />
              Talk to Our Experts
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
