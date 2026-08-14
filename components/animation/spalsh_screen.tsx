import React, { useEffect, useMemo } from 'react';
import './SplashScreen.css';

type ScatterStyle = React.CSSProperties & {
  '--ox'?: string;
  '--oy'?: string;
  '--r'?: string;
  '--s'?: string;
  '--delay'?: string;
  '--c'?: string;
  '--size'?: string;
};

const sc = (
  ox: string,
  oy: string,
  r: string,
  s: string,
  delay: string = '0s'
): ScatterStyle => ({
  '--ox': ox,
  '--oy': oy,
  '--r': r,
  '--s': s,
  '--delay': delay,
});

const seededRandom = (seed: number) => {
  const x = Math.sin(seed) * 10000;
  return x - Math.floor(x);
};

const SplashScreen: React.FC<{ onComplete?: () => void }> = ({ onComplete }) => {
  const TOTAL_MS = 4000;

  const [finished, setFinished] = React.useState(false);

  const particles = useMemo(() => {
    return Array.from({ length: 28 }, (_, i) => ({
      id: i,
      ox: `${(seededRandom(i * 13) * 220 - 110).toFixed(1)}vw`,
      oy: `${(seededRandom(i * 29) * 220 - 110).toFixed(1)}vh`,
      delay: `${(seededRandom(i * 7) * 0.6).toFixed(2)}s`,
      c: i % 3 === 0 ? '#f7941d' : i % 3 === 1 ? '#17b3a3' : '#fdf3e3',
      size: `${(seededRandom(i * 41) * 6 + 3).toFixed(1)}px`,
    }));
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFinished(true);
      onComplete?.();
    }, TOTAL_MS);
    return () => clearTimeout(timer);
  }, [onComplete]);

  if (finished) return null;

  return (
    <div className="splash-wrapper" aria-hidden="true">
      {/* retro rays + glow background */}
      <div className="splash-rays" />
      <div className="splash-glow" />

      {/* flying tiny dots */}
      <div className="particles-layer">
        {particles.map((p) => (
          <span
            key={p.id}
            className="particle"
            style={
              {
                '--ox': p.ox,
                '--oy': p.oy,
                '--delay': p.delay,
                '--c': p.c,
                '--size': p.size,
              } as ScatterStyle
            }
          />
        ))}
      </div>

      <div className="splash-card">
        {/* MACHINERIES vertical badge on the left edge */}
        <div
          className="side-badge scatter"
          style={sc('-60vw', '0', '0deg', '0', '0.1s')}
        >
          MACHINERIES
        </div>

        {/* Central stage: CFT logo (red frame) surrounded by 4 machine squares */}
        <div className="logo-stage">
          {/* TOP machine square */}
          <div
            className="machine-square pos-top scatter"
            style={sc('0', '-70vh', '0deg', '0', '0.1s')}
          >
            <img
              src="/images/CFT_Machinery/extruder.png"
              alt="Extruder machine"
            />
          </div>

          {/* LEFT machine square */}
          <div
            className="machine-square pos-left scatter"
            style={sc('-70vw', '0', '0deg', '0', '0.16s')}
          >
            <img
              src="/images/CFT_Machinery/sheeting machine.png"
              alt="Sheeting machine"
            />
          </div>

          {/* RIGHT machine square */}
          <div
            className="machine-square pos-right scatter"
            style={sc('70vw', '0', '0deg', '0', '0.22s')}
          >
            <img
              src="/images/CFT_Machinery/RING MASTERR.png"
              alt="Ring master machine"
            />
          </div>

          {/* BOTTOM machine square */}
          <div
            className="machine-square pos-bottom scatter"
            style={sc('0', '70vh', '0deg', '0', '0.28s')}
          >
            <img
              src="/images/CFT_Machinery/gulab jamun.png"
              alt="Gulab jamun machine"
            />
          </div>

          {/* CENTER: CFT logo inside a red square frame */}
          <div
            className="cft-frame scatter"
            style={sc('0', '0', '0deg', '0.4', '0.02s')}
          >
            <div className="cft-inner">
              <div className="logo-row">
                <span className="logo-letter">C</span>
                <span className="logo-letter">F</span>
                <span className="logo-letter">T</span>
              </div>
              <svg
                viewBox="0 0 200 200"
                width="66"
                height="66"
                className="cft-mic"
              >
                {/* mic body */}
                <path
                  fill="#17b3a3"
                  d="M82,42 h36 a9,9 0 0 1 9,9 v52 a27,27 0 0 1 -27,27 h0 a27,27 0 0 1 -27,-27 v-52 a9,9 0 0 1 9,-9 z"
                />
                {/* mic stand */}
                <path
                  fill="#0e7c72"
                  d="M60,98 a40,40 0 0 0 80,0 h-9 a31,31 0 0 1 -62,0 z"
                />
                <rect x="95" y="138" width="10" height="28" rx="3" fill="#0e7c72" />
                <rect x="78" y="162" width="44" height="9" rx="4" fill="#0e7c72" />
                {/* lightning bolt */}
                <path
                  fill="#f7941d"
                  d="M134,30 l16,26 h-13 l20,20 h-16 l14,26 -36,-18 11,3 -15,-26 h13 z"
                />
              </svg>
            </div>
          </div>
        </div>

        {/* Company name */}
        <h1 className="brand-title">
          <span
            className="scatter"
            style={sc('-80vw', '0', '-25deg', '0', '0.36s')}
          >
            CHARAN FOOD
          </span>
          <span
            className="scatter tech"
            style={sc('80vw', '0', '25deg', '0', '0.46s')}
          >
            TECH
          </span>
        </h1>

        {/* MACHINERIES teal pill under the name */}
        <div
          className="machineries-pill scatter"
          style={sc('0', '40vh', '0deg', '0', '0.56s')}
        >
          MACHINERIES
        </div>

        {/* website */}
        <div
          className="brand-url scatter"
          style={sc('0', '30vh', '0deg', '0', '0.64s')}
        >
          <span className="brand-url-text">www.charanfoodtech.com</span>
          <span className="brand-url-arrow" aria-hidden="true">
            <svg viewBox="0 0 24 24" width="14" height="14">
              <path
                fill="none"
                stroke="currentColor"
                strokeWidth="2.4"
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5 12h14M13 6l6 6-6 6"
              />
            </svg>
          </span>
        </div>

        {/* Contact row */}
        <div className="contact-row">
          <span
            className="contact-item scatter"
            style={sc('-60vw', '40vh', '-20deg', '0', '0.72s')}
          >
            <svg viewBox="0 0 24 24" width="16" height="16" className="ci-icon">
              <path
                fill="#0e7c72"
                d="M6.6 10.8c1.4 2.8 3.8 5.2 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.2.4 2.4.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.6 21 3 13.4 3 4c0-.6.4-1 1-1h3.4c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.4 0 .8-.3 1z"
              />
            </svg>
            +91 91500 81328
          </span>
          <span
            className="contact-item scatter"
            style={sc('0', '50vh', '0deg', '0', '0.8s')}
          >
            <svg viewBox="0 0 24 24" width="16" height="16" className="ci-icon">
              <path
                fill="#0e7c72"
                d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"
              />
            </svg>
            hello@charanfoodtech.com
          </span>
          <span
            className="contact-item scatter"
            style={sc('60vw', '40vh', '20deg', '0', '0.88s')}
          >
            <svg viewBox="0 0 24 24" width="16" height="16" className="ci-icon">
              <path
                fill="#0e7c72"
                d="M12 2C8.1 2 5 5.1 5 9c0 5.2 7 13 7 13s7-7.8 7-13c0-3.9-3.1-7-7-7zm0 9.5A2.5 2.5 0 1 1 12 6.5a2.5 2.5 0 0 1 0 5z"
              />
            </svg>
            Dharmapuri, Tamil Nadu
          </span>
        </div>

        <address
          className="address scatter"
          style={sc('0', '60vh', '0deg', '0', '0.95s')}
        >
          Krishnagiri Main Road, Baisuhalli Village,
          <br />
          Dharmapuri, Tamil Nadu - 635205
        </address>

        <div
          className="follow-strip scatter"
          style={sc('0', '100vh', '0deg', '0', '1.05s')}
        >
          FOLLOW US
        </div>
      </div>
    </div>
  );
};

export default SplashScreen;