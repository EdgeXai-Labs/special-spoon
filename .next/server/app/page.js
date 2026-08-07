(()=>{var e={};e.id=931,e.ids=[931],e.modules={7849:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external")},2934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},5403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},4580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},4749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},5869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},8923:(e,a,t)=>{"use strict";t.r(a),t.d(a,{GlobalError:()=>n.a,__next_app__:()=>p,originalPathname:()=>m,pages:()=>d,routeModule:()=>f,tree:()=>c});var i=t(482),r=t(9108),s=t(2563),n=t.n(s),o=t(8300),l={};for(let e in o)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(l[e]=()=>o[e]);t.d(a,l);let c=["",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(t.bind(t,2737)),"C:\\EdgeXai Labs LLP\\special-spoon\\app\\page.tsx"]}]},{layout:[()=>Promise.resolve().then(t.bind(t,2917)),"C:\\EdgeXai Labs LLP\\special-spoon\\app\\layout.tsx"],"not-found":[()=>Promise.resolve().then(t.t.bind(t,9361,23)),"next/dist/client/components/not-found-error"]}],d=["C:\\EdgeXai Labs LLP\\special-spoon\\app\\page.tsx"],m="/page",p={require:t,loadChunk:()=>Promise.resolve()},f=new i.AppPageRouteModule({definition:{kind:r.x.APP_PAGE,page:"/page",pathname:"/",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:c}})},4923:(e,a,t)=>{Promise.resolve().then(t.bind(t,4793)),Promise.resolve().then(t.bind(t,2514)),Promise.resolve().then(t.bind(t,5629)),Promise.resolve().then(t.bind(t,2722)),Promise.resolve().then(t.bind(t,7227)),Promise.resolve().then(t.bind(t,4469)),Promise.resolve().then(t.bind(t,7999)),Promise.resolve().then(t.bind(t,3877)),Promise.resolve().then(t.bind(t,7575)),Promise.resolve().then(t.bind(t,7702)),Promise.resolve().then(t.bind(t,9644)),Promise.resolve().then(t.bind(t,267))},4793:(e,a,t)=>{"use strict";t.r(a),t.d(a,{default:()=>n});var i=t(5344),r=t(3729);let s=[{icon:"\uD83D\uDCC8",title:"Higher Production",desc:"More output, same manpower",color:"#3b82f6"},{icon:"\uD83D\uDCA7",title:"Lower Oil Use",desc:"Optimized frying technology",color:"#eab308"},{icon:"\uD83D\uDC77",title:"Less Labour Cost",desc:"Automation does the work",color:"#ef4444"},{icon:"✅",title:"Consistent Quality",desc:"Uniform every batch",color:"#3b82f6"},{icon:"⚡",title:"Faster Cycles",desc:"Higher output, less time",color:"#eab308"},{icon:"\uD83E\uDD47",title:"Food Grade SS",desc:"Corrosion resistant build",color:"#ef4444"},{icon:"\uD83E\uDDFC",title:"Easy Cleaning",desc:"Hygienic by design",color:"#3b82f6"},{icon:"\uD83D\uDCA1",title:"Energy Efficient",desc:"Lower power bills",color:"#eab308"},{icon:"\uD83D\uDD27",title:"Low Maintenance",desc:"Heavy-duty components",color:"#ef4444"},{icon:"⏰",title:"Long Machine Life",desc:"Years of continuous run",color:"#3b82f6"},{icon:"\uD83E\uDDE9",title:"Modular Design",desc:"Expand anytime",color:"#eab308"},{icon:"\uD83C\uDFAF",title:"Easy Operation",desc:"Simple controls",color:"#ef4444"},{icon:"⚙️",title:"Custom Built",desc:"Made to your need",color:"#3b82f6"},{icon:"\uD83D\uDEE1️",title:"Safety First",desc:"Emergency stop systems",color:"#eab308"},{icon:"\uD83D\uDCAA",title:"Reliable 24\xd77",desc:"Built for non-stop work",color:"#ef4444"}];function n(){let[e,a]=(0,r.useState)(0),[t,n]=(0,r.useState)("converging");(0,r.useEffect)(()=>{let e;return"converging"===t?e=setTimeout(()=>{n("spotlight")},600):"spotlight"===t?e=setTimeout(()=>{n("imploding")},2800):"imploding"===t&&(e=setTimeout(()=>{a(e=>(e+1)%s.length),n("converging")},500)),()=>clearTimeout(e)},[t]);let o=s[e],l=a=>{let t=a/s.length*2*Math.PI-Math.PI/2,i=a===e;return{transform:`translate(calc(-50% + ${420*Math.cos(t)}px), calc(-50% + ${220*Math.sin(t)}px)) scale(${i?1.15:.9})`,opacity:i?1:.55,zIndex:i?20:5,top:"50%",left:"50%"}};return(0,i.jsxs)("section",{className:"section bg-dark benefits-section",style:{padding:"3rem 1rem",background:"radial-gradient(circle at center, #F8FAFC 0%, #E2E8F0 100%)",color:"var(--text-primary)",overflow:"hidden",position:"relative"},children:[(0,i.jsxs)("div",{className:"section-header",style:{textAlign:"center",marginBottom:"3rem",position:"relative",zIndex:10},children:[i.jsx("h2",{className:"section-title",style:{fontSize:"2.5rem",fontWeight:"800",color:"var(--text-primary)"},children:"Why Choose Our Machines"}),i.jsx("p",{className:"section-subtitle",style:{color:"var(--text-secondary)",fontSize:"1.1rem",marginTop:"0.5rem"},children:"Measurable improvements in productivity, cost, and quality"})]}),(0,i.jsxs)("div",{className:"benefits-orbit-stage",style:{position:"relative",width:"100%",maxWidth:"1100px",height:"600px",margin:"0 auto",display:"flex",alignItems:"center",justifyContent:"center",perspective:"1200px",overflow:"visible"},children:[i.jsx("div",{className:"orbit-ring"}),i.jsx("div",{className:"orbit-ring-outer"}),i.jsx("div",{className:"benefits-satellites-layer",children:s.map((t,r)=>(0,i.jsxs)("button",{onClick:()=>{n("imploding"),setTimeout(()=>{a(r),n("converging")},400)},style:{position:"absolute",background:r===e?`linear-gradient(135deg, ${t.color}15, rgba(255, 255, 255, 0.95))`:"rgba(255, 255, 255, 0.8)",border:`2px solid ${r===e?t.color:"rgba(15, 23, 42, 0.15)"}`,borderRadius:"50px",padding:"0.5rem 1.1rem",display:"flex",alignItems:"center",gap:"0.5rem",color:r===e?t.color:"var(--text-secondary)",cursor:"pointer",transition:"all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.27)",boxShadow:r===e?`0 0 22px ${t.color}33, 0 4px 20px rgba(0,0,0,0.06)`:"0 2px 12px rgba(0,0,0,0.04)",backdropFilter:"blur(8px)",whiteSpace:"nowrap",...l(r)},children:[i.jsx("span",{style:{fontSize:"1.3rem",lineHeight:1},children:t.icon}),i.jsx("span",{style:{fontSize:"0.78rem",fontWeight:"700",color:r===e?t.color:"var(--text-secondary)",letterSpacing:"0.3px"},children:t.title})]},r))}),(0,i.jsxs)("div",{className:`center-core-hub ${t}`,style:{position:"absolute",width:"380px",padding:"2.5rem 2rem",background:"linear-gradient(135deg, rgba(255, 255, 255, 0.95) 0%, rgba(248, 250, 252, 0.98) 100%)",backdropFilter:"blur(16px)",borderRadius:"28px",border:`2px solid ${o.color}`,boxShadow:`0 10px 40px rgba(0, 0, 0, 0.05), inset 0 0 20px ${o.color}05`,display:"flex",flexDirection:"column",alignItems:"center",textAlign:"center",zIndex:30},children:[i.jsx("div",{style:{position:"absolute",inset:"-4px",borderRadius:"32px",background:`radial-gradient(circle, ${o.color}15 0%, transparent 70%)`,zIndex:-1,animation:"corePulse 2s infinite ease-in-out"}}),i.jsx("div",{style:{width:"90px",height:"90px",borderRadius:"50%",background:"rgba(255, 255, 255, 0.9)",border:`3px solid ${o.color}`,display:"flex",alignItems:"center",justifyContent:"center",fontSize:"3rem",marginBottom:"1rem",boxShadow:`0 8px 20px ${o.color}33`},children:i.jsx("span",{className:"floating-icon",children:o.icon})}),(0,i.jsxs)("span",{style:{fontSize:"0.75rem",fontWeight:"bold",color:o.color,letterSpacing:"2px",textTransform:"uppercase",marginBottom:"0.4rem"},children:["BENEFIT ",e+1," OF ",s.length]}),i.jsx("h3",{style:{fontSize:"1.8rem",fontWeight:"800",color:"var(--text-primary)",marginBottom:"0.5rem"},children:o.title}),i.jsx("p",{style:{color:"var(--text-secondary)",fontSize:"1.05rem",lineHeight:"1.5",margin:0},children:o.desc})]})]}),i.jsx("div",{style:{display:"flex",justifyContent:"center",gap:"0.4rem",flexWrap:"wrap",maxWidth:"800px",margin:"2.5rem auto 0 auto",position:"relative",zIndex:10},children:s.map((t,r)=>i.jsx("button",{onClick:()=>{n("imploding"),setTimeout(()=>{a(r),n("converging")},400)},style:{width:"12px",height:"12px",borderRadius:"50%",background:r===e?o.color:"#cbd5e1",border:"none",cursor:"pointer",transition:"all 0.3s ease",transform:r===e?"scale(1.4)":"scale(1)",boxShadow:r===e?`0 0 10px ${o.color}`:"none"},title:t.title},r))}),i.jsx("style",{dangerouslySetInnerHTML:{__html:`
        /* ======================================
           BENEFITS ORBITAL SECTION – RESPONSIVE
           ====================================== */

        /* Desktop: full orbital stage */
        .benefits-orbit-stage {
          height: 600px;
          overflow: visible;
        }

        /* Orbit rings (desktop only) */
        .orbit-ring {
          position: absolute;
          width: 840px;
          height: 440px;
          border: 1px dashed rgba(51, 65, 85, 0.5);
          border-radius: 50%;
          transform: rotateX(12deg);
          pointer-events: none;
          animation: orbitSpin 60s linear infinite;
        }

        .orbit-ring-outer {
          position: absolute;
          width: 980px;
          height: 520px;
          border: 1px solid rgba(59, 130, 246, 0.12);
          border-radius: 50%;
          transform: rotateX(12deg);
          pointer-events: none;
          animation: orbitSpin 80s linear infinite reverse;
        }

        @keyframes orbitSpin {
          from { transform: rotateX(12deg) rotateZ(0deg); }
          to   { transform: rotateX(12deg) rotateZ(360deg); }
        }

        /* Center Core Assembly Dynamic Animation States */
        .center-core-hub.converging {
          animation: flyToCenter 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.27) forwards;
        }

        .center-core-hub.spotlight {
          transform: scale(1) translateZ(0);
          opacity: 1;
        }

        .center-core-hub.imploding {
          animation: implodeToCenter 0.5s cubic-bezier(0.6, -0.28, 0.735, 0.045) forwards;
        }

        /* 1. Convergence Motion (Flies in from Satellite to Center) */
        @keyframes flyToCenter {
          0% {
            opacity: 0;
            transform: scale(0.2) rotate(-15deg);
          }
          70% {
            transform: scale(1.06) rotate(3deg);
            opacity: 0.9;
          }
          100% {
            opacity: 1;
            transform: scale(1) rotate(0deg);
          }
        }

        /* 2. Implosion Motion (Shrinks back into focal point before next comes in) */
        @keyframes implodeToCenter {
          0% {
            opacity: 1;
            transform: scale(1);
          }
          100% {
            opacity: 0;
            transform: scale(0.3) rotate(15deg);
          }
        }

        /* Continuous Floating Icon */
        .floating-icon {
          animation: floatAnimation 2.5s ease-in-out infinite alternate;
        }

        @keyframes floatAnimation {
          0% { transform: translateY(-3px) scale(1); }
          100% { transform: translateY(3px) scale(1.08); }
        }

        @keyframes corePulse {
          0%, 100% { opacity: 0.4; }
          50% { opacity: 0.8; }
        }

        /* ========================
           MOBILE (< 768px)
           ======================== */
        @media (max-width: 767px) {
          .benefits-orbit-stage {
            height: auto;
            min-height: unset;
            overflow: visible;
            padding: 0;
          }

          /* Hide satellites and orbit rings on mobile */
          .benefits-satellites-layer,
          .orbit-ring,
          .orbit-ring-outer {
            display: none;
          }

          /* Full-width center card on mobile */
          .center-core-hub {
            position: static !important;
            width: 100% !important;
            max-width: 340px;
            margin: 0 auto;
            padding: 2rem 1.5rem !important;
          }
        }

        /* ========================
           TABLET (768px – 1023px)
           ======================== */
        @media (min-width: 768px) and (max-width: 1023px) {
          .benefits-orbit-stage {
            height: 500px;
          }
        }
      `}})]})}},2514:(e,a,t)=>{"use strict";t.r(a),t.d(a,{default:()=>n});var i=t(5344),r=t(3729);let s=[{icon:"\uD83D\uDC77",topic:"Manpower",old:{label:"More workers on every shift",metric:"12",unit:"workers",bar:95},now:{label:"A small trained team runs it",metric:"3",unit:"workers",bar:25},win:"75% less manpower"},{icon:"\uD83D\uDEE2️",topic:"Oil Consumption",old:{label:"Oil burns fast, changed often",metric:"High",unit:"usage",bar:90},now:{label:"Filtration reuses clean oil",metric:"−30%",unit:"oil cost",bar:35},win:"Oil bill cut by a third"},{icon:"⚡",topic:"Production Speed",old:{label:"Slow, capped by hand work",metric:"80",unit:"kg/hr",bar:28},now:{label:"Continuous line, no bottleneck",metric:"500",unit:"kg/hr",bar:96},win:"6\xd7 more output"},{icon:"\uD83C\uDFAF",topic:"Product Quality",old:{label:"Every batch looks different",metric:"Varies",unit:"batch to batch",bar:30},now:{label:"Same colour, crisp, salt — always",metric:"100%",unit:"uniform",bar:100},win:"Buyers stop complaining"},{icon:"\uD83D\uDDD1️",topic:"Wastage",old:{label:"Broken and burnt product piles up",metric:"8%",unit:"wasted",bar:85},now:{label:"Controlled slicing and frying",metric:"2%",unit:"wasted",bar:22},win:"4\xd7 less thrown away"},{icon:"\uD83D\uDD27",topic:"Reliability",old:{label:"Breaks down in peak season",metric:"Often",unit:"stoppages",bar:88},now:{label:"Built to run all season",metric:"Rare",unit:"stoppages",bar:18},win:"No peak-season panic"},{icon:"\uD83E\uDDFC",topic:"Cleaning & Hygiene",old:{label:"Hours of scrubbing by hand",metric:"3 hrs",unit:"per clean",bar:92},now:{label:"Food-grade steel, quick wash-down",metric:"30 min",unit:"per clean",bar:20},win:"Back to production faster"},{icon:"\uD83D\uDCB0",topic:"Running Cost",old:{label:"Labour, oil and power add up",metric:"High",unit:"per kg",bar:93},now:{label:"Lower cost on every kilo made",metric:"Low",unit:"per kg",bar:30},win:"Margin goes up permanently"}];function n(){let[e,a]=(0,r.useState)(0),[t,n]=(0,r.useState)(!1),o=(0,r.useRef)(null);(0,r.useEffect)(()=>{let e=o.current;if(!e)return;if("undefined"==typeof IntersectionObserver){n(!0);return}let a=new IntersectionObserver(e=>{e[0].isIntersecting&&(n(!0),a.disconnect())},{threshold:.2});return a.observe(e),()=>a.disconnect()},[]),(0,r.useEffect)(()=>{if(!t)return;let e=setTimeout(()=>a(e=>(e+1)%s.length),3400);return()=>clearTimeout(e)},[e,t]);let l=s[e];return(0,i.jsxs)("section",{id:"comparison",ref:o,className:`cp-section ${t?"is-visible":""}`,children:[(0,i.jsxs)("div",{className:"cp-backdrop","aria-hidden":"true",children:[i.jsx("span",{className:"cp-glow cp-glow-left"}),i.jsx("span",{className:"cp-glow cp-glow-right"})]}),(0,i.jsxs)("div",{className:"cp-header",children:[i.jsx("span",{className:"cp-eyebrow",children:"Before & After"}),i.jsx("h2",{className:"cp-title",children:"Why Automation?"}),i.jsx("p",{className:"cp-subtitle",children:"Same product. Completely different business."})]}),(0,i.jsxs)("div",{className:"cp-arena",children:[(0,i.jsxs)("div",{className:"cp-topic",children:[i.jsx("span",{className:"cp-topic-icon",children:l.icon}),i.jsx("span",{className:"cp-topic-name",children:l.topic})]},`topic-${e}`),(0,i.jsxs)("div",{className:"cp-duel",children:[(0,i.jsxs)("div",{className:"cp-side cp-side-old",children:[(0,i.jsxs)("div",{className:"cp-side-tag",children:[i.jsx("span",{className:"cp-side-mark",children:"✕"}),"Traditional"]}),i.jsx("div",{className:"cp-meter",children:i.jsx("div",{className:"cp-meter-fill cp-fill-old",style:{height:`${l.old.bar}%`}})}),i.jsx("div",{className:"cp-metric cp-metric-old",children:l.old.metric}),i.jsx("div",{className:"cp-unit",children:l.old.unit}),i.jsx("p",{className:"cp-desc",children:l.old.label})]},`old-${e}`),(0,i.jsxs)("div",{className:"cp-vs","aria-hidden":"true",children:[i.jsx("span",{className:"cp-vs-ring"}),i.jsx("span",{className:"cp-vs-text",children:"VS"})]}),(0,i.jsxs)("div",{className:"cp-side cp-side-new",children:[(0,i.jsxs)("div",{className:"cp-side-tag cp-side-tag-new",children:[i.jsx("span",{className:"cp-side-mark cp-side-mark-new",children:"✓"}),"Our Machines"]}),i.jsx("div",{className:"cp-meter",children:i.jsx("div",{className:"cp-meter-fill cp-fill-new",style:{height:`${l.now.bar}%`}})}),i.jsx("div",{className:"cp-metric cp-metric-new",children:l.now.metric}),i.jsx("div",{className:"cp-unit",children:l.now.unit}),i.jsx("p",{className:"cp-desc",children:l.now.label})]},`new-${e}`)]}),(0,i.jsxs)("div",{className:"cp-verdict",children:[i.jsx("span",{className:"cp-verdict-icon",children:"\uD83C\uDFC6"}),l.win]},`win-${e}`)]}),i.jsx("div",{className:"cp-rail",children:s.map((t,r)=>(0,i.jsxs)("button",{className:`cp-rail-item ${r===e?"is-active":""}`,onClick:()=>a(r),"aria-label":t.topic,children:[i.jsx("span",{className:"cp-rail-icon",children:t.icon}),i.jsx("span",{className:"cp-rail-label",children:t.topic}),r===e&&i.jsx("span",{className:"cp-rail-bar",children:i.jsx("span",{className:"cp-rail-bar-fill"})})]},t.topic))}),i.jsx("style",{dangerouslySetInnerHTML:{__html:`
        /* ============================================
           WHY AUTOMATION — HEAD TO HEAD ARENA
           ============================================ */
        .cp-section {
          position: relative;
          overflow: hidden;
          padding: 3.5rem 1rem 3rem;
          background:
            radial-gradient(ellipse at 50% 100%, rgba(22,163,74,0.06) 0%, transparent 60%),
            radial-gradient(circle at center, #F8FAFC 0%, #E2E8F0 100%);
        }

        .cp-backdrop { position: absolute; inset: 0; pointer-events: none; }
        .cp-glow { position: absolute; top: 20%; width: 300px; height: 300px; border-radius: 50%; filter: blur(70px); }
        .cp-glow-left { left: -100px; background: rgba(220,38,38,0.13); }
        .cp-glow-right { right: -100px; background: rgba(22,163,74,0.13); }

        /* ---------- Header ---------- */
        .cp-header { position: relative; z-index: 2; text-align: center; margin-bottom: 2.25rem; }

        .cp-eyebrow {
          display: inline-block;
          padding: 0.35rem 1rem;
          border: 1px solid var(--border);
          border-radius: 50px;
          background: rgba(255,255,255,0.8);
          color: var(--accent);
          font-size: 0.7rem;
          font-weight: 800;
          letter-spacing: 1.6px;
          text-transform: uppercase;
          margin-bottom: 1rem;
        }
        .cp-title {
          font-size: 1.9rem;
          font-weight: 800;
          color: var(--text-primary);
          line-height: 1.2;
          margin: 0 0 0.5rem;
        }
        .cp-subtitle { color: var(--text-secondary); font-size: 1rem; margin: 0; }

        /* ---------- Arena ---------- */
        .cp-arena {
          position: relative;
          z-index: 2;
          max-width: 980px;
          margin: 0 auto;
          padding: 1.5rem 1rem 1.5rem;
          border: 1px solid var(--border);
          border-radius: 26px;
          background: rgba(255,255,255,0.9);
          backdrop-filter: blur(10px);
          box-shadow: 0 22px 60px rgba(15,23,42,0.07);
        }

        /* ---------- Topic pill ---------- */
        .cp-topic {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.55rem;
          margin-bottom: 1.5rem;
          animation: cpDropIn 0.5s cubic-bezier(0.22,1,0.36,1) both;
        }
        @keyframes cpDropIn {
          0%   { opacity: 0; transform: translateY(-12px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .cp-topic-icon { font-size: 1.6rem; }
        .cp-topic-name {
          font-size: 1.05rem;
          font-weight: 800;
          letter-spacing: 0.4px;
          color: var(--text-primary);
        }

        /* ---------- Duel ---------- */
        .cp-duel {
          display: grid;
          grid-template-columns: 1fr auto 1fr;
          gap: 0.5rem;
          align-items: stretch;
        }

        .cp-side {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          padding: 1rem 0.4rem;
          border-radius: 20px;
        }
        .cp-side-old {
          background: linear-gradient(180deg, rgba(220,38,38,0.05) 0%, rgba(220,38,38,0.01) 100%);
          animation: cpSlideL 0.55s cubic-bezier(0.22,1,0.36,1) both;
        }
        .cp-side-new {
          background: linear-gradient(180deg, rgba(22,163,74,0.05) 0%, rgba(22,163,74,0.01) 100%);
          animation: cpSlideR 0.55s cubic-bezier(0.22,1,0.36,1) 0.08s both;
        }
        @keyframes cpSlideL {
          0%   { opacity: 0; transform: translateX(-26px); }
          100% { opacity: 1; transform: translateX(0); }
        }
        @keyframes cpSlideR {
          0%   { opacity: 0; transform: translateX(26px); }
          100% { opacity: 1; transform: translateX(0); }
        }

        .cp-side-tag {
          display: inline-flex;
          align-items: center;
          gap: 0.35rem;
          padding: 0.28rem 0.7rem;
          border-radius: 50px;
          background: rgba(220,38,38,0.10);
          color: #B91C1C;
          font-size: 0.64rem;
          font-weight: 800;
          letter-spacing: 1px;
          text-transform: uppercase;
          margin-bottom: 0.9rem;
        }
        .cp-side-tag-new { background: rgba(22,163,74,0.10); color: #15803D; }

        .cp-side-mark {
          width: 15px; height: 15px;
          border-radius: 50%;
          background: #DC2626;
          color: #fff;
          font-size: 0.6rem;
          display: flex; align-items: center; justify-content: center;
        }
        .cp-side-mark-new { background: #16A34A; }

        /* ---------- Meter ---------- */
        .cp-meter {
          position: relative;
          width: 40px;
          height: 110px;
          border-radius: 12px;
          background: rgba(15,23,42,0.05);
          overflow: hidden;
          display: flex;
          align-items: flex-end;
          margin-bottom: 0.85rem;
        }
        .cp-meter-fill {
          width: 100%;
          border-radius: 12px;
          transition: height 0.85s cubic-bezier(0.22,1,0.36,1);
        }
        .cp-fill-old {
          background: linear-gradient(180deg, #EF4444, #B91C1C);
          box-shadow: 0 0 18px rgba(220,38,38,0.4);
        }
        .cp-fill-new {
          background: linear-gradient(180deg, #22C55E, #15803D);
          box-shadow: 0 0 18px rgba(22,163,74,0.4);
        }

        .cp-metric {
          font-size: 1.5rem;
          font-weight: 900;
          line-height: 1.1;
        }
        .cp-metric-old { color: #B91C1C; }
        .cp-metric-new { color: #15803D; }

        .cp-unit {
          font-size: 0.62rem;
          font-weight: 700;
          letter-spacing: 0.8px;
          text-transform: uppercase;
          color: var(--text-tertiary);
          margin-top: 0.1rem;
        }

        .cp-desc {
          margin: 0.7rem 0 0;
          font-size: 0.78rem;
          line-height: 1.5;
          color: var(--text-secondary);
          max-width: 180px;
        }

        /* ---------- VS badge ---------- */
        .cp-vs {
          position: relative;
          align-self: center;
          width: 46px; height: 46px;
          flex-shrink: 0;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .cp-vs-ring {
          position: absolute;
          inset: 0;
          border-radius: 50%;
          border: 2px solid transparent;
          background: linear-gradient(135deg, #DC2626, #16A34A) border-box;
          -webkit-mask: linear-gradient(#000 0 0) padding-box, linear-gradient(#000 0 0);
          -webkit-mask-composite: xor;
          mask-composite: exclude;
          animation: cpSpin 6s linear infinite;
        }
        @keyframes cpSpin { to { transform: rotate(360deg); } }
        .cp-vs-text {
          font-size: 0.78rem;
          font-weight: 900;
          letter-spacing: 0.5px;
          background: linear-gradient(135deg, #DC2626, #16A34A);
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        /* ---------- Verdict ---------- */
        .cp-verdict {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          margin-top: 1.5rem;
          padding: 0.75rem 1rem;
          border: 1px solid rgba(22,163,74,0.22);
          border-radius: 16px;
          background: linear-gradient(135deg, rgba(22,163,74,0.10), rgba(22,163,74,0.03));
          color: #15803D;
          font-size: 0.92rem;
          font-weight: 800;
          text-align: center;
          animation: cpVerdictIn 0.55s cubic-bezier(0.175,0.885,0.32,1.3) 0.35s both;
        }
        @keyframes cpVerdictIn {
          0%   { opacity: 0; transform: translateY(14px) scale(0.94); }
          100% { opacity: 1; transform: translateY(0) scale(1); }
        }
        .cp-verdict-icon { font-size: 1.1rem; }

        /* ---------- Round rail ---------- */
        .cp-rail {
          position: relative;
          z-index: 2;
          display: flex;
          gap: 0.5rem;
          max-width: 980px;
          margin: 1.5rem auto 0;
          padding: 0 0.25rem 0.5rem;
          overflow-x: auto;
          scrollbar-width: none;
        }
        .cp-rail::-webkit-scrollbar { display: none; }

        .cp-rail-item {
          position: relative;
          flex: 0 0 auto;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.3rem;
          padding: 0.6rem 0.75rem 0.7rem;
          border: 1px solid var(--border);
          border-radius: 14px;
          background: #FFFFFF;
          cursor: pointer;
          transition: all 0.3s ease;
          overflow: hidden;
        }
        .cp-rail-item:hover { transform: translateY(-2px); border-color: var(--accent); }
        .cp-rail-item.is-active {
          border-color: var(--accent);
          box-shadow: 0 8px 22px rgba(220,38,38,0.14);
        }

        .cp-rail-icon { font-size: 1.15rem; opacity: 0.55; transition: opacity 0.3s ease; }
        .cp-rail-item.is-active .cp-rail-icon { opacity: 1; }

        .cp-rail-label {
          font-size: 0.64rem;
          font-weight: 700;
          letter-spacing: 0.4px;
          color: var(--text-tertiary);
          white-space: nowrap;
        }
        .cp-rail-item.is-active .cp-rail-label { color: var(--text-primary); }

        .cp-rail-bar {
          position: absolute;
          bottom: 0; left: 0;
          width: 100%;
          height: 3px;
          background: rgba(220,38,38,0.12);
        }
        .cp-rail-bar-fill {
          display: block;
          height: 100%;
          background: linear-gradient(90deg, #DC2626, #EF4444);
          animation: cpTick 3400ms linear both;
        }
        @keyframes cpTick { from { width: 0%; } to { width: 100%; } }

        /* ============================================
           TABLET (>= 768px)
           ============================================ */
        @media (min-width: 768px) {
          .cp-section { padding: 5rem 2rem 4rem; }
          .cp-title { font-size: 2.5rem; }
          .cp-subtitle { font-size: 1.1rem; }
          .cp-arena { padding: 2.25rem 2rem 2rem; }
          .cp-topic-icon { font-size: 2.1rem; }
          .cp-topic-name { font-size: 1.35rem; }
          .cp-duel { gap: 1.25rem; }
          .cp-side { padding: 1.5rem 1rem; }
          .cp-meter { width: 54px; height: 150px; }
          .cp-metric { font-size: 2.1rem; }
          .cp-unit { font-size: 0.68rem; }
          .cp-desc { font-size: 0.88rem; max-width: 240px; }
          .cp-vs { width: 62px; height: 62px; }
          .cp-vs-text { font-size: 1rem; }
          .cp-verdict { font-size: 1.05rem; padding: 0.9rem 1.5rem; }
          .cp-rail { justify-content: center; flex-wrap: wrap; overflow-x: visible; }
          .cp-rail-label { font-size: 0.7rem; }
        }

        @media (min-width: 1024px) {
          .cp-arena { padding: 2.75rem 2.5rem 2.25rem; }
          .cp-meter { height: 170px; }
        }

        /* ============================================
           REDUCED MOTION
           ============================================ */
        @media (prefers-reduced-motion: reduce) {
          .cp-topic, .cp-side-old, .cp-side-new, .cp-verdict { animation: none !important; }
          .cp-vs-ring, .cp-rail-bar-fill { animation: none !important; }
          .cp-meter-fill { transition: none !important; }
        }
      `}})]})}},5629:(e,a,t)=>{"use strict";t.r(a),t.d(a,{default:()=>m});var i=t(5344),r=t(3729),s=t.n(r);let n={phone1:"+91 98442 06206",whatsapp:"+91 98442 06206",whatsappLink:"https://wa.me/919999999999",email:"sales@charanfoodtech.com",address:["Krishnagiri Main Road","Baisuhalli Village, Dharmapuri","Tamil Nadu – 635205"]},o=[{key:"chips",icon:"\uD83E\uDD54",label:"Potato Chips Line"},{key:"banana",icon:"\uD83C\uDF4C",label:"Banana Chips Line"},{key:"namkeen",icon:"\uD83E\uDD68",label:"Namkeen Line"},{key:"fryer",icon:"\uD83C\uDF73",label:"Automatic Fryer"},{key:"custom",icon:"⚙️",label:"Custom Machine"},{key:"other",icon:"\uD83D\uDCAC",label:"Not Sure Yet"}],l=[{key:"small",icon:"\uD83C\uDFE0",label:"Starting Out",sub:"Under 100 kg/hr"},{key:"mid",icon:"\uD83C\uDFE2",label:"Growing Plant",sub:"100 – 500 kg/hr"},{key:"large",icon:"\uD83C\uDFED",label:"Large Scale",sub:"500 kg/hr +"},{key:"unsure",icon:"\uD83E\uDD14",label:"Need Advice",sub:"Help me decide"}],c=[{icon:"\uD83D\uDCDE",label:"Call Us",value:n.phone1,href:"tel:+919999999999",tint:"#DC2626"},{icon:"\uD83D\uDCAC",label:"WhatsApp",value:n.whatsapp,href:n.whatsappLink,tint:"#16A34A"},{icon:"\uD83D\uDCE7",label:"Email",value:n.email,href:`mailto:${n.email}`,tint:"#D97706"}],d=["What You Need","Your Scale","Your Details"];function m(){let[e,a]=(0,r.useState)(0),[t,m]=(0,r.useState)(null),[p,f]=(0,r.useState)(null),[x,b]=(0,r.useState)({name:"",phone:"",email:"",note:""}),[g,u]=(0,r.useState)(!1),[h,y]=(0,r.useState)(!1),k=(0,r.useRef)(null);(0,r.useEffect)(()=>{let e=k.current;if(!e)return;if("undefined"==typeof IntersectionObserver){y(!0);return}let a=new IntersectionObserver(e=>{e[0].isIntersecting&&(y(!0),a.disconnect())},{threshold:.1});return a.observe(e),()=>a.disconnect()},[]);let w=e=>{m(e),setTimeout(()=>a(1),420)},j=e=>{f(e),setTimeout(()=>a(2),420)},v=o.find(e=>e.key===t),z=l.find(e=>e.key===p),N=""!==x.name.trim()&&""!==x.phone.trim();return(0,i.jsxs)("section",{id:"contact",ref:k,className:`ct-section ${h?"is-visible":""}`,children:[(0,i.jsxs)("div",{className:"ct-backdrop","aria-hidden":"true",children:[i.jsx("span",{className:"ct-orb ct-orb-1"}),i.jsx("span",{className:"ct-orb ct-orb-2"})]}),(0,i.jsxs)("div",{className:"ct-header",children:[(0,i.jsxs)("span",{className:"ct-eyebrow",children:[i.jsx("span",{className:"ct-eyebrow-dot"}),"Reply Within 24 Hours"]}),i.jsx("h2",{className:"ct-title",children:"Tell Us What You Want To Build"}),i.jsx("p",{className:"ct-subtitle",children:"Three quick taps. No long forms."})]}),(0,i.jsxs)("div",{className:"ct-grid",children:[(0,i.jsxs)("div",{className:"ct-wizard",children:[(0,i.jsxs)("div",{className:"ct-rail",children:[i.jsx("div",{className:"ct-rail-line",children:i.jsx("div",{className:"ct-rail-fill",style:{width:`${(e+1)/3*100}%`}})}),d.map((t,r)=>(0,i.jsxs)("button",{className:`ct-step ${r===e?"is-active":""} ${r<e?"is-done":""}`,onClick:()=>r<e&&a(r),disabled:r>e,"aria-label":t,children:[i.jsx("span",{className:"ct-step-dot",children:r<e?"✓":r+1}),i.jsx("span",{className:"ct-step-label",children:t})]},t))]}),i.jsx("div",{className:"ct-panel",children:g?(0,i.jsxs)("div",{className:"ct-success",children:[i.jsx("div",{className:"ct-success-ring",children:i.jsx("span",{className:"ct-success-tick",children:"✓"})}),i.jsx("h3",{className:"ct-success-title",children:"Inquiry Received"}),(0,i.jsxs)("p",{className:"ct-success-text",children:["Thanks ",x.name.split(" ")[0]||"there"," — an engineer will call you within 24 hours."]}),i.jsx("button",{className:"ct-btn ct-btn-ghost",onClick:()=>{u(!1),a(0),m(null),f(null),b({name:"",phone:"",email:"",note:""})},children:"Send Another Inquiry"})]}):0===e?(0,i.jsxs)(i.Fragment,{children:[i.jsx("h3",{className:"ct-panel-title",children:"Which machine are you looking for?"}),i.jsx("div",{className:"ct-options ct-options-3",children:o.map((e,a)=>(0,i.jsxs)("button",{className:`ct-option ${t===e.key?"is-picked":""}`,style:{animationDelay:`${.06*a}s`},onClick:()=>w(e.key),children:[i.jsx("span",{className:"ct-option-icon",children:e.icon}),i.jsx("span",{className:"ct-option-label",children:e.label})]},e.key))})]}):1===e?(0,i.jsxs)(i.Fragment,{children:[i.jsx("h3",{className:"ct-panel-title",children:"What production scale?"}),i.jsx("div",{className:"ct-options ct-options-2",children:l.map((e,a)=>(0,i.jsxs)("button",{className:`ct-option ct-option-wide ${p===e.key?"is-picked":""}`,style:{animationDelay:`${.07*a}s`},onClick:()=>j(e.key),children:[i.jsx("span",{className:"ct-option-icon",children:e.icon}),(0,i.jsxs)("span",{className:"ct-option-body",children:[i.jsx("span",{className:"ct-option-label",children:e.label}),i.jsx("span",{className:"ct-option-sub",children:e.sub})]})]},e.key))}),i.jsx("button",{className:"ct-back",onClick:()=>a(0),children:"‹ Back"})]}):(0,i.jsxs)(i.Fragment,{children:[i.jsx("h3",{className:"ct-panel-title",children:"Where should we reach you?"}),(0,i.jsxs)("div",{className:"ct-chips",children:[v&&(0,i.jsxs)("span",{className:"ct-chip",onClick:()=>a(0),children:[v.icon," ",v.label]}),z&&(0,i.jsxs)("span",{className:"ct-chip",onClick:()=>a(1),children:[z.icon," ",z.label]})]}),(0,i.jsxs)("form",{className:"ct-form",onSubmit:e=>{e.preventDefault(),u(!0)},children:[(0,i.jsxs)("div",{className:"ct-field",children:[i.jsx("input",{id:"ct-name",className:"ct-input",type:"text",required:!0,placeholder:" ",value:x.name,onChange:e=>b({...x,name:e.target.value})}),i.jsx("label",{htmlFor:"ct-name",className:"ct-label",children:"Your Name *"})]}),(0,i.jsxs)("div",{className:"ct-field",children:[i.jsx("input",{id:"ct-phone",className:"ct-input",type:"tel",required:!0,placeholder:" ",value:x.phone,onChange:e=>b({...x,phone:e.target.value})}),i.jsx("label",{htmlFor:"ct-phone",className:"ct-label",children:"Phone Number *"})]}),(0,i.jsxs)("div",{className:"ct-field",children:[i.jsx("input",{id:"ct-email",className:"ct-input",type:"email",placeholder:" ",value:x.email,onChange:e=>b({...x,email:e.target.value})}),i.jsx("label",{htmlFor:"ct-email",className:"ct-label",children:"Email (optional)"})]}),(0,i.jsxs)("div",{className:"ct-field",children:[i.jsx("textarea",{id:"ct-note",className:"ct-input ct-textarea",rows:3,placeholder:" ",value:x.note,onChange:e=>b({...x,note:e.target.value})}),i.jsx("label",{htmlFor:"ct-note",className:"ct-label",children:"Anything specific? (optional)"})]}),(0,i.jsxs)("div",{className:"ct-form-actions",children:[i.jsx("button",{type:"button",className:"ct-back",onClick:()=>a(1),children:"‹ Back"}),i.jsx("button",{type:"submit",className:"ct-btn ct-btn-primary",disabled:!N,children:"Send Inquiry →"})]})]})]})},g?"sent":`step-${e}`)]}),(0,i.jsxs)("aside",{className:"ct-aside",children:[i.jsx("div",{className:"ct-channels",children:c.map((e,a)=>(0,i.jsxs)("a",{href:e.href,target:e.href.startsWith("http")?"_blank":void 0,rel:e.href.startsWith("http")?"noopener noreferrer":void 0,className:"ct-channel",style:{transitionDelay:`${90*a}ms`},children:[i.jsx("span",{className:"ct-channel-icon",style:{background:`${e.tint}14`,color:e.tint},children:e.icon}),(0,i.jsxs)("span",{className:"ct-channel-body",children:[i.jsx("span",{className:"ct-channel-label",children:e.label}),i.jsx("span",{className:"ct-channel-value",children:e.value})]}),i.jsx("span",{className:"ct-channel-arrow",style:{color:e.tint},children:"→"})]},e.label))}),(0,i.jsxs)("div",{className:"ct-info",children:[(0,i.jsxs)("div",{className:"ct-info-row",children:[i.jsx("span",{className:"ct-info-icon",children:"\uD83D\uDCCD"}),(0,i.jsxs)("div",{children:[i.jsx("div",{className:"ct-info-label",children:"Factory"}),i.jsx("p",{className:"ct-info-text",children:n.address.map((e,a)=>(0,i.jsxs)(s().Fragment,{children:[e,a<n.address.length-1&&i.jsx("br",{})]},a))})]})]}),(0,i.jsxs)("div",{className:"ct-info-row",children:[i.jsx("span",{className:"ct-info-icon",children:"⏰"}),(0,i.jsxs)("div",{children:[i.jsx("div",{className:"ct-info-label",children:"Working Hours"}),(0,i.jsxs)("p",{className:"ct-info-text",children:["Mon – Sat",i.jsx("br",{})]}),(0,i.jsxs)("span",{className:"ct-badge",children:[i.jsx("span",{className:"ct-badge-dot"}),"24\xd77 Emergency Support"]})]})]})]})]})]}),i.jsx("style",{dangerouslySetInnerHTML:{__html:`
        /* ============================================
           GET IN TOUCH — GUIDED INQUIRY
           ============================================ */
        .ct-section {
          position: relative;
          overflow: hidden;
          padding: 3.5rem 1rem 3.5rem;
          background:
            radial-gradient(ellipse at 80% 0%, rgba(220,38,38,0.05) 0%, transparent 55%),
            radial-gradient(circle at center, #F8FAFC 0%, #E2E8F0 100%);
        }

        .ct-backdrop { position: absolute; inset: 0; pointer-events: none; overflow: hidden; }
        .ct-orb {
          position: absolute;
          border-radius: 50%;
          filter: blur(60px);
          opacity: 0.5;
        }
        .ct-orb-1 {
          width: 340px; height: 340px;
          top: -80px; left: -80px;
          background: rgba(220,38,38,0.12);
          animation: ctDrift 14s ease-in-out infinite alternate;
        }
        .ct-orb-2 {
          width: 380px; height: 380px;
          bottom: -120px; right: -100px;
          background: rgba(22,163,74,0.10);
          animation: ctDrift 18s ease-in-out infinite alternate-reverse;
        }
        @keyframes ctDrift {
          0%   { transform: translate(0, 0) scale(1); }
          100% { transform: translate(40px, -30px) scale(1.12); }
        }

        /* ---------- Header ---------- */
        .ct-header { position: relative; z-index: 2; text-align: center; margin-bottom: 2.5rem; }

        .ct-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.35rem 0.9rem;
          border: 1px solid rgba(22,163,74,0.22);
          border-radius: 50px;
          background: rgba(22,163,74,0.08);
          color: #16A34A;
          font-size: 0.7rem;
          font-weight: 700;
          letter-spacing: 1.4px;
          text-transform: uppercase;
          margin-bottom: 1rem;
        }
        .ct-eyebrow-dot {
          width: 7px; height: 7px;
          border-radius: 50%;
          background: #16A34A;
          animation: ctPing 1.8s ease-out infinite;
        }
        @keyframes ctPing {
          0%   { box-shadow: 0 0 0 0 rgba(22,163,74,0.6); }
          70%  { box-shadow: 0 0 0 9px rgba(22,163,74,0); }
          100% { box-shadow: 0 0 0 0 rgba(22,163,74,0); }
        }

        .ct-title {
          font-size: 1.85rem;
          font-weight: 800;
          line-height: 1.22;
          color: var(--text-primary);
          margin: 0 0 0.5rem;
        }
        .ct-subtitle { color: var(--text-secondary); font-size: 0.98rem; margin: 0; }

        /* ---------- Layout ---------- */
        .ct-grid {
          position: relative;
          z-index: 2;
          display: grid;
          grid-template-columns: 1fr;
          gap: 1.5rem;
          max-width: 1120px;
          margin: 0 auto;
        }

        /* ---------- Step rail ---------- */
        .ct-rail {
          position: relative;
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          margin-bottom: 1.5rem;
        }
        .ct-rail-line {
          position: absolute;
          top: 17px;
          left: 16%;
          right: 16%;
          height: 2px;
          background: var(--border);
          border-radius: 2px;
          overflow: hidden;
        }
        .ct-rail-fill {
          height: 100%;
          border-radius: 2px;
          background: linear-gradient(90deg, #DC2626, #EF4444);
          transition: width 0.6s cubic-bezier(0.22,1,0.36,1);
        }

        .ct-step {
          position: relative;
          z-index: 1;
          background: none;
          border: none;
          padding: 0;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.45rem;
          cursor: default;
        }
        .ct-step.is-done { cursor: pointer; }

        .ct-step-dot {
          width: 36px; height: 36px;
          border-radius: 50%;
          border: 2px solid var(--border);
          background: #FFFFFF;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 0.85rem;
          font-weight: 800;
          color: var(--text-tertiary);
          transition: all 0.45s cubic-bezier(0.175,0.885,0.32,1.27);
        }
        .ct-step.is-active .ct-step-dot {
          border-color: var(--accent);
          background: rgba(220,38,38,0.08);
          color: var(--accent);
          transform: scale(1.15);
          box-shadow: 0 0 0 6px rgba(220,38,38,0.10);
        }
        .ct-step.is-done .ct-step-dot {
          border-color: var(--accent);
          background: var(--accent);
          color: #fff;
        }

        .ct-step-label {
          font-size: 0.66rem;
          font-weight: 700;
          letter-spacing: 0.6px;
          text-transform: uppercase;
          color: var(--text-tertiary);
          text-align: center;
        }
        .ct-step.is-active .ct-step-label { color: var(--accent); }

        /* ---------- Panel ---------- */
        .ct-panel {
          border: 1px solid var(--border);
          border-radius: 24px;
          background: #FFFFFF;
          padding: 1.5rem 1.25rem;
          box-shadow: 0 18px 50px rgba(15,23,42,0.06);
          animation: ctPanelIn 0.5s cubic-bezier(0.22,1,0.36,1) both;
        }
        @keyframes ctPanelIn {
          0%   { opacity: 0; transform: translateY(16px) scale(0.99); }
          100% { opacity: 1; transform: translateY(0) scale(1); }
        }

        .ct-panel-title {
          font-size: 1.1rem;
          font-weight: 800;
          color: var(--text-primary);
          margin: 0 0 1.15rem;
          text-align: center;
        }

        /* ---------- Options ---------- */
        .ct-options { display: grid; gap: 0.7rem; }
        .ct-options-3 { grid-template-columns: repeat(2, 1fr); }
        .ct-options-2 { grid-template-columns: 1fr; }

        .ct-option {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          padding: 1.1rem 0.6rem;
          border: 1.5px solid var(--border);
          border-radius: 18px;
          background: #FFFFFF;
          cursor: pointer;
          text-align: center;
          transition: transform 0.28s cubic-bezier(0.175,0.885,0.32,1.27),
                      border-color 0.28s ease, box-shadow 0.28s ease, background 0.28s ease;
          animation: ctOptionIn 0.45s cubic-bezier(0.22,1,0.36,1) both;
        }
        @keyframes ctOptionIn {
          0%   { opacity: 0; transform: translateY(14px) scale(0.96); }
          100% { opacity: 1; transform: translateY(0) scale(1); }
        }

        .ct-option:hover {
          transform: translateY(-4px);
          border-color: var(--accent);
          box-shadow: 0 12px 28px rgba(220,38,38,0.13);
        }
        .ct-option.is-picked {
          border-color: var(--accent);
          background: rgba(220,38,38,0.05);
          box-shadow: 0 0 0 4px rgba(220,38,38,0.10);
          transform: scale(1.03);
        }

        .ct-option-wide {
          flex-direction: row;
          justify-content: flex-start;
          text-align: left;
          gap: 0.85rem;
          padding: 1rem;
        }
        .ct-option-body { display: flex; flex-direction: column; gap: 0.1rem; }

        .ct-option-icon { font-size: 1.75rem; line-height: 1; }
        .ct-option-label { font-size: 0.85rem; font-weight: 700; color: var(--text-primary); }
        .ct-option-sub { font-size: 0.74rem; color: var(--text-secondary); }

        /* ---------- Recap chips ---------- */
        .ct-chips { display: flex; flex-wrap: wrap; gap: 0.45rem; justify-content: center; margin-bottom: 1.15rem; }
        .ct-chip {
          padding: 0.35rem 0.8rem;
          border: 1px solid rgba(220,38,38,0.22);
          border-radius: 50px;
          background: rgba(220,38,38,0.06);
          color: var(--accent);
          font-size: 0.74rem;
          font-weight: 700;
          cursor: pointer;
          transition: all 0.25s ease;
        }
        .ct-chip:hover { background: rgba(220,38,38,0.12); }

        /* ---------- Form ---------- */
        .ct-form { display: grid; gap: 1.1rem; }

        .ct-field { position: relative; }

        .ct-input {
          width: 100%;
          padding: 1.15rem 0.9rem 0.55rem;
          border: 1.5px solid var(--border);
          border-radius: 14px;
          background: #FFFFFF;
          font-size: 0.92rem;
          font-family: inherit;
          color: var(--text-primary);
          outline: none;
          transition: border-color 0.25s ease, box-shadow 0.25s ease;
        }
        .ct-input:focus {
          border-color: var(--accent);
          box-shadow: 0 0 0 4px rgba(220,38,38,0.09);
        }
        .ct-textarea { resize: vertical; min-height: 88px; padding-top: 1.35rem; }

        .ct-label {
          position: absolute;
          left: 0.95rem;
          top: 0.92rem;
          font-size: 0.9rem;
          color: var(--text-tertiary);
          pointer-events: none;
          transition: all 0.22s ease;
        }
        .ct-input:focus + .ct-label,
        .ct-input:not(:placeholder-shown) + .ct-label {
          top: 0.35rem;
          font-size: 0.66rem;
          font-weight: 700;
          letter-spacing: 0.5px;
          text-transform: uppercase;
          color: var(--accent);
        }

        .ct-form-actions {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 0.75rem;
          flex-wrap: wrap;
        }

        /* ---------- Buttons ---------- */
        .ct-btn {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          padding: 0.85rem 1.5rem;
          border: none;
          border-radius: 50px;
          font-size: 0.9rem;
          font-weight: 700;
          font-family: inherit;
          cursor: pointer;
          transition: all 0.3s ease;
        }
        .ct-btn-primary {
          background: linear-gradient(135deg, #DC2626, #EF4444);
          color: #fff;
          box-shadow: 0 10px 26px rgba(220,38,38,0.28);
        }
        .ct-btn-primary:hover:not(:disabled) {
          transform: translateY(-3px);
          box-shadow: 0 16px 34px rgba(220,38,38,0.36);
        }
        .ct-btn-primary:disabled { opacity: 0.45; cursor: not-allowed; box-shadow: none; }

        .ct-btn-ghost {
          background: #FFFFFF;
          color: var(--text-primary);
          border: 1px solid var(--border);
        }
        .ct-btn-ghost:hover { transform: translateY(-2px); box-shadow: 0 8px 20px rgba(15,23,42,0.08); }

        .ct-back {
          background: none;
          border: none;
          padding: 0.5rem 0;
          margin-top: 1rem;
          color: var(--text-secondary);
          font-size: 0.85rem;
          font-weight: 700;
          font-family: inherit;
          cursor: pointer;
          transition: color 0.25s ease;
        }
        .ct-form-actions .ct-back { margin-top: 0; }
        .ct-back:hover { color: var(--accent); }

        /* ---------- Success ---------- */
        .ct-success { text-align: center; padding: 1.5rem 0.5rem; }

        .ct-success-ring {
          width: 78px; height: 78px;
          margin: 0 auto 1.15rem;
          border-radius: 50%;
          border: 3px solid #16A34A;
          background: rgba(22,163,74,0.08);
          display: flex;
          align-items: center;
          justify-content: center;
          animation: ctPop 0.55s cubic-bezier(0.175,0.885,0.32,1.4) both;
        }
        @keyframes ctPop {
          0%   { opacity: 0; transform: scale(0.3) rotate(-25deg); }
          100% { opacity: 1; transform: scale(1) rotate(0); }
        }
        .ct-success-tick { font-size: 2.2rem; color: #16A34A; font-weight: 900; }

        .ct-success-title {
          font-size: 1.35rem;
          font-weight: 800;
          color: var(--text-primary);
          margin: 0 0 0.4rem;
        }
        .ct-success-text {
          color: var(--text-secondary);
          font-size: 0.95rem;
          margin: 0 0 1.35rem;
          line-height: 1.55;
        }

        /* ---------- Side rail ---------- */
        .ct-aside { display: grid; gap: 1rem; align-content: start; }

        .ct-channels { display: grid; gap: 0.65rem; }

        .ct-channel {
          display: flex;
          align-items: center;
          gap: 0.85rem;
          padding: 0.9rem 1rem;
          border: 1px solid var(--border);
          border-radius: 18px;
          background: #FFFFFF;
          text-decoration: none;
          box-shadow: 0 6px 20px rgba(15,23,42,0.04);
          opacity: 0;
          transform: translateY(16px);
          transition: opacity 0.6s ease, transform 0.35s cubic-bezier(0.22,1,0.36,1), box-shadow 0.3s ease;
        }
        .ct-section.is-visible .ct-channel { opacity: 1; transform: translateY(0); }
        .ct-channel:hover {
          transform: translateY(-3px);
          box-shadow: 0 14px 30px rgba(15,23,42,0.09);
        }

        .ct-channel-icon {
          width: 44px; height: 44px;
          flex-shrink: 0;
          border-radius: 13px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.25rem;
        }
        .ct-channel-body { display: flex; flex-direction: column; gap: 0.05rem; min-width: 0; }
        .ct-channel-label {
          font-size: 0.66rem;
          font-weight: 800;
          letter-spacing: 1.1px;
          text-transform: uppercase;
          color: var(--text-tertiary);
        }
        .ct-channel-value { font-size: 0.9rem; font-weight: 700; color: var(--text-primary); }
        .ct-channel-arrow {
          margin-left: auto;
          font-size: 1.1rem;
          font-weight: 700;
          transition: transform 0.3s ease;
        }
        .ct-channel:hover .ct-channel-arrow { transform: translateX(4px); }

        /* ---------- Info block ---------- */
        .ct-info {
          display: grid;
          gap: 1.15rem;
          padding: 1.25rem;
          border: 1px solid var(--border);
          border-radius: 20px;
          background: #FFFFFF;
          box-shadow: 0 6px 20px rgba(15,23,42,0.04);
        }
        .ct-info-row { display: flex; gap: 0.8rem; align-items: flex-start; }
        .ct-info-icon { font-size: 1.15rem; line-height: 1.3; flex-shrink: 0; }
        .ct-info-label {
          font-size: 0.66rem;
          font-weight: 800;
          letter-spacing: 1.1px;
          text-transform: uppercase;
          color: var(--accent);
          margin-bottom: 0.2rem;
        }
        .ct-info-text {
          margin: 0;
          font-size: 0.87rem;
          color: var(--text-secondary);
          line-height: 1.55;
        }

        .ct-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          margin-top: 0.55rem;
          padding: 0.28rem 0.7rem;
          border: 1px solid rgba(22,163,74,0.22);
          border-radius: 50px;
          background: rgba(22,163,74,0.08);
          color: #16A34A;
          font-size: 0.7rem;
          font-weight: 700;
        }
        .ct-badge-dot {
          width: 6px; height: 6px;
          border-radius: 50%;
          background: #16A34A;
          animation: ctPing 1.8s ease-out infinite;
        }

        /* ---------- Map ---------- */
        .ct-map {
          border: 1px solid var(--border);
          border-radius: 20px;
          overflow: hidden;
          background: #FFFFFF;
          height: 200px;
          box-shadow: 0 6px 20px rgba(15,23,42,0.04);
        }
        .ct-map iframe { width: 100%; height: 100%; border: 0; display: block; }

        .ct-map-placeholder {
          height: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 0.25rem;
          background:
            repeating-linear-gradient(45deg, rgba(15,23,42,0.02) 0 12px, transparent 12px 24px),
            #F8FAFC;
        }
        .ct-map-pin { font-size: 1.75rem; animation: ctBob 2.4s ease-in-out infinite alternate; }
        @keyframes ctBob {
          0%   { transform: translateY(-3px); }
          100% { transform: translateY(3px); }
        }
        .ct-map-text { font-size: 0.9rem; font-weight: 700; color: var(--text-secondary); }
        .ct-map-hint { font-size: 0.72rem; color: var(--text-tertiary); }

        /* ============================================
           TABLET (>= 640px)
           ============================================ */
        @media (min-width: 640px) {
          .ct-options-3 { grid-template-columns: repeat(3, 1fr); }
          .ct-options-2 { grid-template-columns: repeat(2, 1fr); }
          .ct-form { grid-template-columns: 1fr 1fr; }
          .ct-field:nth-child(4),
          .ct-form-actions { grid-column: 1 / -1; }
        }

        /* ============================================
           TABLET / DESKTOP (>= 768px)
           ============================================ */
        @media (min-width: 768px) {
          .ct-section { padding: 5rem 2rem 4.5rem; }
          .ct-title { font-size: 2.6rem; }
          .ct-subtitle { font-size: 1.1rem; }
          .ct-panel { padding: 2.25rem 2rem; }
          .ct-panel-title { font-size: 1.35rem; margin-bottom: 1.5rem; }
          .ct-step-dot { width: 42px; height: 42px; font-size: 0.95rem; }
          .ct-step-label { font-size: 0.7rem; }
          .ct-rail-line { top: 20px; }
          .ct-option { padding: 1.35rem 0.8rem; }
          .ct-option-icon { font-size: 2rem; }
          .ct-option-label { font-size: 0.9rem; }
          .ct-map { height: 240px; }
        }

        /* ============================================
           DESKTOP (>= 1024px)
           ============================================ */
        @media (min-width: 1024px) {
          .ct-grid { grid-template-columns: 1.5fr 1fr; gap: 2rem; align-items: start; }
        }

        /* ============================================
           REDUCED MOTION
           ============================================ */
        @media (prefers-reduced-motion: reduce) {
          .ct-orb, .ct-eyebrow-dot, .ct-badge-dot, .ct-map-pin { animation: none !important; }
          .ct-panel, .ct-option, .ct-success-ring { animation: none !important; }
          .ct-channel { opacity: 1 !important; transform: none !important; }
        }
      `}})]})}},7227:(e,a,t)=>{"use strict";t.r(a),t.d(a,{default:()=>r});var i=t(5344);function r(){let e=(e,a)=>{e.preventDefault();let t=document.getElementById(a);t&&t.scrollIntoView({behavior:"smooth",block:"start"})};return(0,i.jsxs)("section",{id:"home",className:"hero",children:[i.jsx("div",{className:"hero-bg"}),(0,i.jsxs)("div",{className:"hero-content",children:[(0,i.jsxs)("h1",{children:["Engineering Better ",i.jsx("span",{className:"hero-highlight",children:"Food Manufacturing"})]}),i.jsx("p",{children:"We design, manufacture, customize and install industrial food processing machinery that improves productivity, reduces operating costs and delivers consistent product quality."}),(0,i.jsxs)("div",{className:"hero-buttons",children:[i.jsx("a",{href:"#contact",onClick:a=>e(a,"contact"),className:"btn btn-primary",children:"Request Quote"}),i.jsx("a",{href:"#products",onClick:a=>e(a,"products"),className:"btn btn-secondary",children:"Explore Machines"})]})]})]})}},4469:(e,a,t)=>{"use strict";t.r(a),t.d(a,{default:()=>n});var i=t(5344),r=t(3729);let s=[{icon:"\uD83E\uDD54",title:"Snack Foods",color:"#f59e0b",services:["Namkeen Manufacturing","Potato Chips Production","Banana Chips Processing","Extruded Snacks"]},{icon:"\uD83C\uDF5E",title:"Bakery",color:"#10b981",services:["Commercial Bakery","Industrial Baking","Bread Production","Pastry Manufacturing"]},{icon:"\uD83C\uDFE8",title:"Commercial Kitchen",color:"#3b82f6",services:["Cloud Kitchen","Central Kitchen","Hotels","Restaurants"]},{icon:"\uD83C\uDFED",title:"Food Processing",color:"#8b5cf6",services:["Large Scale Processing","Production Lines","Quality Control Systems","Packaging Solutions"]},{icon:"⚙️",title:"Custom Industrial",color:"#ef4444",services:["Custom Machinery","Special Equipment","Automation Solutions","Process Engineering"]}];function n(){let[e,a]=(0,r.useState)(0),[t,n]=(0,r.useState)("converging");(0,r.useEffect)(()=>{let e;return"converging"===t?e=setTimeout(()=>n("spotlight"),600):"spotlight"===t?e=setTimeout(()=>n("imploding"),3e3):"imploding"===t&&(e=setTimeout(()=>{a(e=>(e+1)%s.length),n("converging")},500)),()=>clearTimeout(e)},[t]);let o=s[e],l=a=>{let t=a/s.length*2*Math.PI-Math.PI/2,i=a===e;return{top:"50%",left:"50%",transform:`translate(calc(-50% + ${450*Math.cos(t)}px), calc(-50% + ${235*Math.sin(t)}px)) scale(${i?1.15:.92})`,opacity:i?1:.65,zIndex:i?35:15}},c=t=>{t!==e&&(n("imploding"),setTimeout(()=>{a(t),n("converging")},400))};return(0,i.jsxs)("section",{id:"industries",className:"section bg-card",style:{padding:"3rem 1rem",background:"radial-gradient(circle at center, #F8FAFC 0%, #E2E8F0 100%)",color:"var(--text-primary)",overflow:"hidden",position:"relative"},children:[(0,i.jsxs)("div",{style:{textAlign:"center",marginBottom:"3rem",position:"relative",zIndex:10},children:[i.jsx("h2",{className:"section-title",style:{fontSize:"2.5rem",fontWeight:"800",color:"var(--text-primary)"},children:"Industries We Serve"}),i.jsx("p",{className:"section-subtitle",style:{color:"var(--text-secondary)",fontSize:"1.1rem",marginTop:"0.5rem"},children:"Delivering specialized machinery solutions across diverse food manufacturing sectors"})]}),(0,i.jsxs)("div",{className:"ind-orbit-stage",style:{position:"relative",width:"100%",maxWidth:"1200px",height:"560px",margin:"0 auto",display:"flex",alignItems:"center",justifyContent:"center",perspective:"1200px",overflow:"visible"},children:[i.jsx("div",{className:"ind-orbit-ring"}),i.jsx("div",{className:"ind-orbit-ring-outer"}),i.jsx("div",{className:"ind-satellites-layer",children:s.map((a,t)=>(0,i.jsxs)("button",{onClick:()=>c(t),style:{position:"absolute",background:t===e?`linear-gradient(135deg, ${a.color}15, rgba(255, 255, 255, 0.95))`:"rgba(255, 255, 255, 0.8)",border:`2px solid ${t===e?a.color:"rgba(15, 23, 42, 0.15)"}`,borderRadius:"60px",padding:"0.75rem 1.5rem",display:"flex",flexDirection:"column",alignItems:"center",gap:"0.3rem",color:t===e?a.color:"var(--text-secondary)",cursor:"pointer",transition:"all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.27)",boxShadow:t===e?`0 0 28px ${a.color}33, 0 6px 24px rgba(0,0,0,0.06)`:"0 2px 12px rgba(0,0,0,0.04)",backdropFilter:"blur(10px)",minWidth:"120px",textAlign:"center",...l(t)},children:[i.jsx("span",{style:{fontSize:"2rem",lineHeight:1},children:a.icon}),i.jsx("span",{style:{fontSize:"0.78rem",fontWeight:"700",color:t===e?a.color:"var(--text-secondary)",letterSpacing:"0.3px",whiteSpace:"nowrap"},children:a.title})]},t))}),(0,i.jsxs)("div",{className:`ind-core-hub ${t}`,style:{position:"absolute",width:"360px",padding:"2.5rem 2rem",background:"linear-gradient(135deg, rgba(255, 255, 255, 0.95) 0%, rgba(248, 250, 252, 0.98) 100%)",backdropFilter:"blur(20px)",borderRadius:"28px",border:`2px solid ${o.color}`,boxShadow:`0 10px 40px rgba(0, 0, 0, 0.05), inset 0 0 25px ${o.color}05`,display:"flex",flexDirection:"column",alignItems:"center",textAlign:"center",zIndex:30},children:[i.jsx("div",{style:{position:"absolute",inset:"-6px",borderRadius:"34px",background:`radial-gradient(circle, ${o.color}15 0%, transparent 70%)`,zIndex:-1,animation:"indCorePulse 2s infinite ease-in-out"}}),i.jsx("div",{style:{width:"86px",height:"86px",borderRadius:"50%",background:"rgba(255, 255, 255, 0.9)",border:`3px solid ${o.color}`,display:"flex",alignItems:"center",justifyContent:"center",fontSize:"2.8rem",marginBottom:"1rem",boxShadow:`0 8px 20px ${o.color}33`},children:i.jsx("span",{className:"ind-float-icon",children:o.icon})}),(0,i.jsxs)("span",{style:{fontSize:"0.72rem",fontWeight:"700",color:o.color,letterSpacing:"2px",textTransform:"uppercase",marginBottom:"0.3rem"},children:[e+1," of ",s.length," Sectors"]}),i.jsx("h3",{style:{fontSize:"1.7rem",fontWeight:"800",color:"var(--text-primary)",marginBottom:"1rem"},children:o.title}),i.jsx("ul",{style:{listStyle:"none",padding:0,margin:0,width:"100%"},children:o.services.map((e,a)=>(0,i.jsxs)("li",{style:{display:"flex",alignItems:"center",gap:"0.6rem",padding:"0.4rem 0",color:"var(--text-secondary)",fontSize:"0.9rem",borderBottom:a<o.services.length-1?"1px solid rgba(0,0,0,0.06)":"none",animation:`indItemFadeIn 0.4s ease ${.08*a}s both`},children:[i.jsx("span",{style:{width:"8px",height:"8px",borderRadius:"50%",background:o.color,flexShrink:0,boxShadow:`0 0 6px ${o.color}`}}),e]},a))})]})]}),i.jsx("div",{style:{display:"flex",justifyContent:"center",gap:"0.5rem",marginTop:"2.5rem",position:"relative",zIndex:10},children:s.map((a,t)=>i.jsx("button",{onClick:()=>c(t),title:a.title,style:{width:"12px",height:"12px",borderRadius:"50%",background:t===e?o.color:"#cbd5e1",border:"none",cursor:"pointer",transition:"all 0.3s ease",transform:t===e?"scale(1.5)":"scale(1)",boxShadow:t===e?`0 0 10px ${o.color}`:"none"}},t))}),i.jsx("style",{dangerouslySetInnerHTML:{__html:`
        /* Industries Orbital Stage — Responsive */
        .ind-orbit-stage {
          height: 560px;
          overflow: visible;
        }

        .ind-orbit-ring {
          position: absolute;
          width: 900px;
          height: 470px;
          border: 1px dashed rgba(51, 65, 85, 0.45);
          border-radius: 50%;
          transform: rotateX(12deg);
          pointer-events: none;
          animation: indOrbitSpin 55s linear infinite;
        }

        .ind-orbit-ring-outer {
          position: absolute;
          width: 1040px;
          height: 540px;
          border: 1px solid rgba(59, 130, 246, 0.1);
          border-radius: 50%;
          transform: rotateX(12deg);
          pointer-events: none;
          animation: indOrbitSpin 75s linear infinite reverse;
        }

        @keyframes indOrbitSpin {
          from { transform: rotateX(12deg) rotateZ(0deg); }
          to   { transform: rotateX(12deg) rotateZ(360deg); }
        }

        .ind-core-hub.converging {
          animation: indFlyIn 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.27) forwards;
        }
        .ind-core-hub.spotlight {
          transform: scale(1) translateZ(0);
          opacity: 1;
        }
        .ind-core-hub.imploding {
          animation: indImplode 0.5s cubic-bezier(0.6, -0.28, 0.735, 0.045) forwards;
        }

        @keyframes indFlyIn {
          0%   { opacity: 0; transform: scale(0.2) rotate(-12deg); }
          70%  { transform: scale(1.05) rotate(2deg); opacity: 0.9; }
          100% { opacity: 1; transform: scale(1) rotate(0deg); }
        }
        @keyframes indImplode {
          0%   { opacity: 1; transform: scale(1); }
          100% { opacity: 0; transform: scale(0.25) rotate(12deg); }
        }

        .ind-float-icon {
          animation: indFloat 2.5s ease-in-out infinite alternate;
          display: inline-block;
        }
        @keyframes indFloat {
          0%   { transform: translateY(-3px) scale(1); }
          100% { transform: translateY(3px) scale(1.08); }
        }

        @keyframes indCorePulse {
          0%, 100% { opacity: 0.35; }
          50%       { opacity: 0.75; }
        }

        @keyframes indItemFadeIn {
          from { opacity: 0; transform: translateX(-8px); }
          to   { opacity: 1; transform: translateX(0); }
        }

        /* ========================
           MOBILE (< 768px)
           ======================== */
        @media (max-width: 767px) {
          .ind-orbit-stage {
            height: auto;
            overflow: visible;
          }
          .ind-satellites-layer,
          .ind-orbit-ring,
          .ind-orbit-ring-outer {
            display: none;
          }
          .ind-core-hub {
            position: static !important;
            width: 100% !important;
            max-width: 360px;
            margin: 0 auto;
            padding: 2rem 1.5rem !important;
          }
        }

        /* ========================
           TABLET (768px - 1023px)
           ======================== */
        @media (min-width: 768px) and (max-width: 1023px) {
          .ind-orbit-stage {
            height: 480px;
          }
        }
      `}})]})}},3877:(e,a,t)=>{"use strict";t.r(a),t.d(a,{default:()=>c});var i=t(5344),r=t(7412),s=t.n(r),n=t(3729);let o=["All","Fryers","Cutting","Forming","Processing","Automation"],l=[{image:"/images/CFT_Machinery/Continous fryer Line Process.png",title:"Continuous Fryer Line",category:"Fryers"},{image:"/images/CFT_Machinery/Continous fryer Line Process-02.png",title:"Fryer Line Process II",category:"Fryers"},{image:"/images/CFT_Machinery/Continous fryer Line Process-03.png",title:"Fryer Line Process III",category:"Fryers"},{image:"/images/CFT_Machinery/continus fryer-02.png",title:"Continuous Fryer",category:"Fryers"},{image:"/images/CFT_Machinery/circular batch fryer-with bhoondi.png",title:"Circular Batch Fryer",category:"Fryers"},{image:"/images/CFT_Machinery/rectangular batch fryer-02.png",title:"Rectangular Batch Fryer",category:"Fryers"},{image:"/images/CFT_Machinery/extruder.png",title:"Extruder Machine",category:"Forming"},{image:"/images/CFT_Machinery/RING MASTERR.png",title:"Ring Master",category:"Forming"},{image:"/images/CFT_Machinery/sheeting machine.png",title:"Sheeting Machine",category:"Forming"},{image:"/images/CFT_Machinery/ball divider.png",title:"Ball Divider",category:"Forming"},{image:"/images/CFT_Machinery/double stage servo based.png",title:"Double Stage Servo Cutter",category:"Cutting"},{image:"/images/CFT_Machinery/Sweet cutting_Single stage servo based.png",title:"Single Stage Servo Cutter",category:"Cutting"},{image:"/images/CFT_Machinery/hot press with oven.png",title:"Hot Press with Oven",category:"Processing"},{image:"/images/CFT_Machinery/hot press.png",title:"Hot Press",category:"Processing"},{image:"/images/CFT_Machinery/Masala Peanut mc.png",title:"Masala Peanut Machine",category:"Processing"},{image:"/images/CFT_Machinery/MOONG DHAL.png",title:"Moong Dal Machine",category:"Processing"},{image:"/images/CFT_Machinery/KHARA BHOONDI.png",title:"Khara Bhoondi Line",category:"Processing"},{image:"/images/CFT_Machinery/Nippattu mc.png",title:"Nippattu Machine",category:"Processing"},{image:"/images/CFT_Machinery/seedai machine.png",title:"Seedai Machine",category:"Processing"},{image:"/images/CFT_Machinery/gulab jamun.png",title:"Gulab Jamun Machine",category:"Processing"},{image:"/images/CFT_Machinery/pick & place1.png",title:"Pick & Place System",category:"Automation"}];function c(){let[e,a]=(0,n.useState)("All"),[t,r]=(0,n.useState)(0),[c,d]=(0,n.useState)("right"),[m,p]=(0,n.useState)(!1),f=(0,n.useRef)(null),x="All"===e?l:l.filter(a=>a.category===e);(0,n.useEffect)(()=>{r(0),d("right")},[e]),(0,n.useEffect)(()=>{if(m||x.length<=1)return;let e=setInterval(()=>{d("right"),r(e=>(e+1)%x.length)},4e3);return()=>clearInterval(e)},[m,x.length,e]),(0,n.useEffect)(()=>{if(!f.current)return;let e=f.current,a=e.children[t];if(a){let t=e.clientWidth,i=a.offsetLeft,r=a.clientWidth;e.scrollTo({left:i-t/2+r/2,behavior:"smooth"})}},[t]);let b=e=>{e!==t&&(d(e>t?"right":"left"),r(e))},g=x[t]??x[0];return g?(0,i.jsxs)("section",{id:"products",className:"section bg-dark",children:[(0,i.jsxs)("div",{className:"section-header",children:[i.jsx("h2",{className:"section-title",children:"What We Manufacture"}),i.jsx("p",{className:"section-subtitle",children:"Premium food processing machinery — built for performance"})]}),i.jsx("div",{className:"product-filters",children:o.map(t=>{let r="All"===t?l.length:l.filter(e=>e.category===t).length;return(0,i.jsxs)("button",{className:`filter-btn${e===t?" active":""}`,onClick:()=>a(t),children:[t,i.jsx("span",{className:"filter-count",children:r})]},t)})}),(0,i.jsxs)("div",{className:"showcase-main",onMouseEnter:()=>p(!0),onMouseLeave:()=>p(!1),children:[(0,i.jsxs)("div",{className:`showcase-window slide-from-${c}`,children:[i.jsx(s(),{src:g.image,alt:g.title,fill:!0,sizes:"(max-width: 768px) 100vw, 80vw",style:{objectFit:"contain"},priority:!0}),(0,i.jsxs)("div",{className:"showcase-overlay",children:[i.jsx("span",{className:"showcase-category-badge",children:g.category}),i.jsx("h3",{className:"showcase-title",children:g.title})]})]},`slide-${t}-${e}`),i.jsx("button",{className:"showcase-nav showcase-prev",onClick:()=>{d("left"),r(e=>(e-1+x.length)%x.length)},"aria-label":"Previous",children:"‹"}),i.jsx("button",{className:"showcase-nav showcase-next",onClick:()=>{d("right"),r(e=>(e+1)%x.length)},"aria-label":"Next",children:"›"}),(0,i.jsxs)("div",{className:"showcase-counter",children:[i.jsx("strong",{children:String(t+1).padStart(2,"0")}),(0,i.jsxs)("span",{children:["\xa0/\xa0",String(x.length).padStart(2,"0")]})]}),m&&i.jsx("div",{className:"showcase-paused",children:"⏸\xa0Paused"})]}),i.jsx("div",{className:"showcase-progress-track",children:!m&&i.jsx("div",{className:"showcase-progress-fill"},`bar-${t}-${e}`)}),i.jsx("div",{className:"showcase-thumbs",ref:f,children:x.map((e,a)=>i.jsx("button",{className:`thumb-btn${a===t?" active":""}`,onClick:()=>b(a),title:e.title,"aria-label":`View ${e.title}`,children:i.jsx(s(),{src:e.image,alt:e.title,fill:!0,sizes:"90px",style:{objectFit:"contain"}})},a))}),(0,i.jsxs)("div",{className:"showcase-cta",children:[(0,i.jsxs)("p",{className:"showcase-cta-label",children:["Interested in ",i.jsx("strong",{children:g.title}),"?"]}),i.jsx("a",{href:"#contact",className:"btn btn-primary",children:"Get a Quote →"})]})]}):null}},7575:(e,a,t)=>{"use strict";t.r(a),t.d(a,{default:()=>w});var i=t(5344),r=t(3729),s=t(7983),n=t.n(s);function o(){return(0,i.jsxs)("div",{className:"jsx-7a4865528c61de75 blueprint-scene",children:[i.jsx("div",{className:"jsx-7a4865528c61de75 bp-grid"}),i.jsx("div",{className:"jsx-7a4865528c61de75 bp-scan"}),(0,i.jsxs)("svg",{viewBox:"0 0 900 500",preserveAspectRatio:"none",className:"jsx-7a4865528c61de75 bp-layout",children:[i.jsx("rect",{x:"80",y:"60",width:"740",height:"360",className:"jsx-7a4865528c61de75 bp-outline"}),i.jsx("rect",{x:"130",y:"110",width:"130",height:"90",className:"jsx-7a4865528c61de75 bp-room delay1"}),i.jsx("rect",{x:"330",y:"110",width:"160",height:"90",className:"jsx-7a4865528c61de75 bp-room delay2"}),i.jsx("rect",{x:"560",y:"110",width:"180",height:"90",className:"jsx-7a4865528c61de75 bp-room delay3"}),i.jsx("rect",{x:"130",y:"260",width:"210",height:"100",className:"jsx-7a4865528c61de75 bp-room delay4"}),i.jsx("rect",{x:"420",y:"260",width:"320",height:"100",className:"jsx-7a4865528c61de75 bp-room delay5"}),i.jsx("line",{x1:"260",y1:"155",x2:"330",y2:"155",className:"jsx-7a4865528c61de75 bp-line delay2"}),i.jsx("line",{x1:"490",y1:"155",x2:"560",y2:"155",className:"jsx-7a4865528c61de75 bp-line delay3"}),i.jsx("line",{x1:"235",y1:"200",x2:"235",y2:"260",className:"jsx-7a4865528c61de75 bp-line delay4"}),i.jsx("line",{x1:"340",y1:"310",x2:"420",y2:"310",className:"jsx-7a4865528c61de75 bp-line delay5"}),i.jsx("line",{x1:"80",y1:"40",x2:"820",y2:"40",className:"jsx-7a4865528c61de75 bp-measure"}),i.jsx("line",{x1:"80",y1:"40",x2:"80",y2:"55",className:"jsx-7a4865528c61de75 bp-measure"}),i.jsx("line",{x1:"820",y1:"40",x2:"820",y2:"55",className:"jsx-7a4865528c61de75 bp-measure"}),i.jsx("text",{x:"450",y:"32",className:"jsx-7a4865528c61de75 bp-text",children:"FACTORY LAYOUT"})]}),i.jsx("span",{className:"jsx-7a4865528c61de75 bp-node n1"}),i.jsx("span",{className:"jsx-7a4865528c61de75 bp-node n2"}),i.jsx("span",{className:"jsx-7a4865528c61de75 bp-node n3"}),i.jsx("span",{className:"jsx-7a4865528c61de75 bp-node n4"}),i.jsx("div",{className:"jsx-7a4865528c61de75 bp-label l1",children:"CAD"}),i.jsx("div",{className:"jsx-7a4865528c61de75 bp-label l2",children:"FLOW"}),i.jsx("div",{className:"jsx-7a4865528c61de75 bp-label l3",children:"LAYOUT"}),i.jsx(n(),{id:"7a4865528c61de75",children:".blueprint-scene.jsx-7a4865528c61de75{position:absolute;inset:0;overflow:hidden;-webkit-border-radius:24px;-moz-border-radius:24px;border-radius:24px;background:-webkit-radial-gradient(center,circle,#123e73 0%,#09101b 75%);background:-moz-radial-gradient(center,circle,#123e73 0%,#09101b 75%);background:-o-radial-gradient(center,circle,#123e73 0%,#09101b 75%);background:radial-gradient(circle at center,#123e73 0%,#09101b 75%)}.bp-grid.jsx-7a4865528c61de75{position:absolute;inset:0;background-image:-webkit-linear-gradient(rgba(96,165,250,.08)1px,transparent 1px),-webkit-linear-gradient(left,rgba(96,165,250,.08)1px,transparent 1px);background-image:-moz-linear-gradient(rgba(96,165,250,.08)1px,transparent 1px),-moz-linear-gradient(left,rgba(96,165,250,.08)1px,transparent 1px);background-image:-o-linear-gradient(rgba(96,165,250,.08)1px,transparent 1px),-o-linear-gradient(left,rgba(96,165,250,.08)1px,transparent 1px);background-image:linear-gradient(rgba(96,165,250,.08)1px,transparent 1px),linear-gradient(90deg,rgba(96,165,250,.08)1px,transparent 1px);-webkit-background-size:40px 40px;-moz-background-size:40px 40px;-o-background-size:40px 40px;background-size:40px 40px;-webkit-animation:gridMove 15s linear infinite;-moz-animation:gridMove 15s linear infinite;-o-animation:gridMove 15s linear infinite;animation:gridMove 15s linear infinite}.bp-layout.jsx-7a4865528c61de75{position:absolute;inset:0;width:100%;height:100%;opacity:.8}.bp-outline.jsx-7a4865528c61de75{fill:none;stroke:#60a5fa;stroke-width:2;stroke-dasharray:1800;stroke-dashoffset:1800;-webkit-animation:draw 5s forwards infinite;-moz-animation:draw 5s forwards infinite;-o-animation:draw 5s forwards infinite;animation:draw 5s forwards infinite}.bp-room.jsx-7a4865528c61de75{fill:rgba(59,130,246,.08);stroke:#60a5fa;stroke-width:2;stroke-dasharray:500;stroke-dashoffset:500;-webkit-animation:draw 2s forwards;-moz-animation:draw 2s forwards;-o-animation:draw 2s forwards;animation:draw 2s forwards;-webkit-animation-iteration-count:infinite;-moz-animation-iteration-count:infinite;-o-animation-iteration-count:infinite;animation-iteration-count:infinite}.bp-line.jsx-7a4865528c61de75{stroke:#60a5fa;stroke-width:2;stroke-dasharray:200;stroke-dashoffset:200;-webkit-animation:draw 2s forwards infinite;-moz-animation:draw 2s forwards infinite;-o-animation:draw 2s forwards infinite;animation:draw 2s forwards infinite}.bp-measure.jsx-7a4865528c61de75{stroke:#93c5fd;stroke-width:1;stroke-dasharray:6}.bp-text.jsx-7a4865528c61de75{fill:#bfdbfe;font-size:20px;text-anchor:middle;font-family:sans-serif;letter-spacing:4px}.bp-scan.jsx-7a4865528c61de75{position:absolute;width:100%;height:3px;background:#7dd3fc;-webkit-box-shadow:0 0 20px#38bdf8;-moz-box-shadow:0 0 20px#38bdf8;box-shadow:0 0 20px#38bdf8;-webkit-animation:scan 4s linear infinite;-moz-animation:scan 4s linear infinite;-o-animation:scan 4s linear infinite;animation:scan 4s linear infinite}.bp-node.jsx-7a4865528c61de75{position:absolute;width:10px;height:10px;background:#93c5fd;-webkit-border-radius:50%;-moz-border-radius:50%;border-radius:50%;-webkit-box-shadow:0 0 15px#60a5fa;-moz-box-shadow:0 0 15px#60a5fa;box-shadow:0 0 15px#60a5fa;-webkit-animation:pulse 2s infinite;-moz-animation:pulse 2s infinite;-o-animation:pulse 2s infinite;animation:pulse 2s infinite}.n1.jsx-7a4865528c61de75{left:20%;top:28%}.n2.jsx-7a4865528c61de75{left:42%;top:33%}.n3.jsx-7a4865528c61de75{left:70%;top:30%}.n4.jsx-7a4865528c61de75{left:55%;top:63%}.bp-label.jsx-7a4865528c61de75{position:absolute;color:#bfdbfe;font-size:12px;letter-spacing:2px;opacity:.6;-webkit-animation:float 5s ease-in-out infinite;-moz-animation:float 5s ease-in-out infinite;-o-animation:float 5s ease-in-out infinite;animation:float 5s ease-in-out infinite}.l1.jsx-7a4865528c61de75{left:12%;top:10%}.l2.jsx-7a4865528c61de75{right:18%;top:20%;-webkit-animation-delay:1s;-moz-animation-delay:1s;-o-animation-delay:1s;animation-delay:1s}.l3.jsx-7a4865528c61de75{left:60%;bottom:18%;-webkit-animation-delay:2s;-moz-animation-delay:2s;-o-animation-delay:2s;animation-delay:2s}.delay1.jsx-7a4865528c61de75{-webkit-animation-delay:.3s;-moz-animation-delay:.3s;-o-animation-delay:.3s;animation-delay:.3s}.delay2.jsx-7a4865528c61de75{-webkit-animation-delay:.8s;-moz-animation-delay:.8s;-o-animation-delay:.8s;animation-delay:.8s}.delay3.jsx-7a4865528c61de75{-webkit-animation-delay:1.3s;-moz-animation-delay:1.3s;-o-animation-delay:1.3s;animation-delay:1.3s}.delay4.jsx-7a4865528c61de75{-webkit-animation-delay:1.8s;-moz-animation-delay:1.8s;-o-animation-delay:1.8s;animation-delay:1.8s}.delay5.jsx-7a4865528c61de75{-webkit-animation-delay:2.3s;-moz-animation-delay:2.3s;-o-animation-delay:2.3s;animation-delay:2.3s}@-webkit-keyframes draw{to{stroke-dashoffset:0}}@-moz-keyframes draw{to{stroke-dashoffset:0}}@-o-keyframes draw{to{stroke-dashoffset:0}}@keyframes draw{to{stroke-dashoffset:0}}@-webkit-keyframes scan{from{-webkit-transform:translatey(-20px);transform:translatey(-20px)}to{-webkit-transform:translatey(520px);transform:translatey(520px)}}@-moz-keyframes scan{from{-moz-transform:translatey(-20px);transform:translatey(-20px)}to{-moz-transform:translatey(520px);transform:translatey(520px)}}@-o-keyframes scan{from{-o-transform:translatey(-20px);transform:translatey(-20px)}to{-o-transform:translatey(520px);transform:translatey(520px)}}@keyframes scan{from{-webkit-transform:translatey(-20px);-moz-transform:translatey(-20px);-o-transform:translatey(-20px);transform:translatey(-20px)}to{-webkit-transform:translatey(520px);-moz-transform:translatey(520px);-o-transform:translatey(520px);transform:translatey(520px)}}@-webkit-keyframes pulse{0%,100%{-webkit-transform:scale(1);transform:scale(1);opacity:.6}50%{-webkit-transform:scale(1.7);transform:scale(1.7);opacity:1}}@-moz-keyframes pulse{0%,100%{-moz-transform:scale(1);transform:scale(1);opacity:.6}50%{-moz-transform:scale(1.7);transform:scale(1.7);opacity:1}}@-o-keyframes pulse{0%,100%{-o-transform:scale(1);transform:scale(1);opacity:.6}50%{-o-transform:scale(1.7);transform:scale(1.7);opacity:1}}@keyframes pulse{0%,100%{-webkit-transform:scale(1);-moz-transform:scale(1);-o-transform:scale(1);transform:scale(1);opacity:.6}50%{-webkit-transform:scale(1.7);-moz-transform:scale(1.7);-o-transform:scale(1.7);transform:scale(1.7);opacity:1}}@-webkit-keyframes float{0%,100%{-webkit-transform:translatey(0);transform:translatey(0)}50%{-webkit-transform:translatey(-10px);transform:translatey(-10px)}}@-moz-keyframes float{0%,100%{-moz-transform:translatey(0);transform:translatey(0)}50%{-moz-transform:translatey(-10px);transform:translatey(-10px)}}@-o-keyframes float{0%,100%{-o-transform:translatey(0);transform:translatey(0)}50%{-o-transform:translatey(-10px);transform:translatey(-10px)}}@keyframes float{0%,100%{-webkit-transform:translatey(0);-moz-transform:translatey(0);-o-transform:translatey(0);transform:translatey(0)}50%{-webkit-transform:translatey(-10px);-moz-transform:translatey(-10px);-o-transform:translatey(-10px);transform:translatey(-10px)}}@-webkit-keyframes gridMove{from{background-position:0 0}to{background-position:40px 40px}}@-moz-keyframes gridMove{from{background-position:0 0}to{background-position:40px 40px}}@-o-keyframes gridMove{from{background-position:0 0}to{background-position:40px 40px}}@keyframes gridMove{from{background-position:0 0}to{background-position:40px 40px}}"})]})}function l(){return(0,i.jsxs)("div",{className:"jsx-26421d14fda858b5 machine-scene",children:[i.jsx("div",{className:"jsx-26421d14fda858b5 design-grid"}),(0,i.jsxs)("svg",{viewBox:"0 0 1000 500",className:"jsx-26421d14fda858b5 cad-lines",children:[i.jsx("line",{x1:"180",y1:"120",x2:"500",y2:"250",className:"jsx-26421d14fda858b5 wire"}),i.jsx("line",{x1:"500",y1:"250",x2:"790",y2:"120",className:"jsx-26421d14fda858b5 wire"}),i.jsx("line",{x1:"500",y1:"250",x2:"500",y2:"420",className:"jsx-26421d14fda858b5 wire"}),i.jsx("circle",{cx:"180",cy:"120",r:"6",className:"jsx-26421d14fda858b5 node"}),i.jsx("circle",{cx:"500",cy:"250",r:"7",className:"jsx-26421d14fda858b5 node"}),i.jsx("circle",{cx:"790",cy:"120",r:"6",className:"jsx-26421d14fda858b5 node"}),i.jsx("circle",{cx:"500",cy:"420",r:"6",className:"jsx-26421d14fda858b5 node"})]}),i.jsx("div",{className:"jsx-26421d14fda858b5 gear gear-main",children:i.jsx("div",{className:"jsx-26421d14fda858b5 gear-core"})}),i.jsx("div",{className:"jsx-26421d14fda858b5 gear gear-small",children:i.jsx("div",{className:"jsx-26421d14fda858b5 gear-core"})}),i.jsx("div",{className:"jsx-26421d14fda858b5 gear gear-third",children:i.jsx("div",{className:"jsx-26421d14fda858b5 gear-core"})}),i.jsx("div",{className:"jsx-26421d14fda858b5 part frame"}),i.jsx("div",{className:"jsx-26421d14fda858b5 part shaft"}),i.jsx("div",{className:"jsx-26421d14fda858b5 part motor"}),i.jsx("div",{className:"jsx-26421d14fda858b5 part bearing"}),i.jsx("div",{className:"jsx-26421d14fda858b5 part bolt"}),i.jsx("div",{className:"jsx-26421d14fda858b5 label l1",children:"FRAME"}),i.jsx("div",{className:"jsx-26421d14fda858b5 label l2",children:"BEARING"}),i.jsx("div",{className:"jsx-26421d14fda858b5 label l3",children:"MOTOR"}),i.jsx("div",{className:"jsx-26421d14fda858b5 label l4",children:"SHAFT"}),i.jsx("div",{className:"jsx-26421d14fda858b5 ring"}),i.jsx("div",{className:"jsx-26421d14fda858b5 scan-circle"}),i.jsx(n(),{id:"26421d14fda858b5",children:'.machine-scene.jsx-26421d14fda858b5{position:absolute;inset:0;overflow:hidden;-webkit-border-radius:24px;-moz-border-radius:24px;border-radius:24px;background:-webkit-radial-gradient(center,circle,#0f2748 0%,#09111b 75%);background:-moz-radial-gradient(center,circle,#0f2748 0%,#09111b 75%);background:-o-radial-gradient(center,circle,#0f2748 0%,#09111b 75%);background:radial-gradient(circle at center,#0f2748 0%,#09111b 75%)}.design-grid.jsx-26421d14fda858b5{position:absolute;inset:0;background-image:-webkit-linear-gradient(rgba(96,165,250,.06)1px,transparent 1px),-webkit-linear-gradient(left,rgba(96,165,250,.06)1px,transparent 1px);background-image:-moz-linear-gradient(rgba(96,165,250,.06)1px,transparent 1px),-moz-linear-gradient(left,rgba(96,165,250,.06)1px,transparent 1px);background-image:-o-linear-gradient(rgba(96,165,250,.06)1px,transparent 1px),-o-linear-gradient(left,rgba(96,165,250,.06)1px,transparent 1px);background-image:linear-gradient(rgba(96,165,250,.06)1px,transparent 1px),linear-gradient(90deg,rgba(96,165,250,.06)1px,transparent 1px);-webkit-background-size:35px 35px;-moz-background-size:35px 35px;-o-background-size:35px 35px;background-size:35px 35px;-webkit-animation:gridMove 18s linear infinite;-moz-animation:gridMove 18s linear infinite;-o-animation:gridMove 18s linear infinite;animation:gridMove 18s linear infinite}.cad-lines.jsx-26421d14fda858b5{position:absolute;width:100%;height:100%}.wire.jsx-26421d14fda858b5{stroke:#60a5fa;stroke-width:2;stroke-dasharray:14;-webkit-animation:flow 4s linear infinite;-moz-animation:flow 4s linear infinite;-o-animation:flow 4s linear infinite;animation:flow 4s linear infinite}.node.jsx-26421d14fda858b5{fill:#60a5fa;-webkit-animation:pulse 2s infinite;-moz-animation:pulse 2s infinite;-o-animation:pulse 2s infinite;animation:pulse 2s infinite}.gear.jsx-26421d14fda858b5{position:absolute;border:5px solid#60a5fa;-webkit-border-radius:50%;-moz-border-radius:50%;border-radius:50%;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-shadow:0 0 20px rgba(59,130,246,.4);-moz-box-shadow:0 0 20px rgba(59,130,246,.4);box-shadow:0 0 20px rgba(59,130,246,.4)}.gear.jsx-26421d14fda858b5::before{content:"";position:absolute;inset:-10px;-webkit-border-radius:50%;-moz-border-radius:50%;border-radius:50%;border:3px dashed#60a5fa}.gear-core.jsx-26421d14fda858b5{width:30%;height:30%;-webkit-border-radius:50%;-moz-border-radius:50%;border-radius:50%;background:#60a5fa}.gear-main.jsx-26421d14fda858b5{width:140px;height:140px;left:42%;top:34%;-webkit-animation:rotateCW 8s linear infinite;-moz-animation:rotateCW 8s linear infinite;-o-animation:rotateCW 8s linear infinite;animation:rotateCW 8s linear infinite}.gear-small.jsx-26421d14fda858b5{width:90px;height:90px;left:28%;top:22%;-webkit-animation:rotateCCW 6s linear infinite;-moz-animation:rotateCCW 6s linear infinite;-o-animation:rotateCCW 6s linear infinite;animation:rotateCCW 6s linear infinite}.gear-third.jsx-26421d14fda858b5{width:70px;height:70px;left:63%;top:22%;-webkit-animation:rotateCCW 5s linear infinite;-moz-animation:rotateCCW 5s linear infinite;-o-animation:rotateCCW 5s linear infinite;animation:rotateCCW 5s linear infinite}.part.jsx-26421d14fda858b5{position:absolute;background:#60a5fa;opacity:.8}.frame.jsx-26421d14fda858b5{width:170px;height:10px;left:39%;top:70%;-webkit-animation:assemble1 3s ease-in-out infinite;-moz-animation:assemble1 3s ease-in-out infinite;-o-animation:assemble1 3s ease-in-out infinite;animation:assemble1 3s ease-in-out infinite}.shaft.jsx-26421d14fda858b5{width:14px;height:110px;left:48.5%;top:54%;-webkit-animation:assemble2 3s ease-in-out infinite;-moz-animation:assemble2 3s ease-in-out infinite;-o-animation:assemble2 3s ease-in-out infinite;animation:assemble2 3s ease-in-out infinite}.motor.jsx-26421d14fda858b5{width:65px;height:45px;left:28%;top:60%;-webkit-border-radius:8px;-moz-border-radius:8px;border-radius:8px;-webkit-animation:assemble3 3s ease-in-out infinite;-moz-animation:assemble3 3s ease-in-out infinite;-o-animation:assemble3 3s ease-in-out infinite;animation:assemble3 3s ease-in-out infinite}.bearing.jsx-26421d14fda858b5{width:36px;height:36px;left:67%;top:57%;-webkit-border-radius:50%;-moz-border-radius:50%;border-radius:50%;border:4px solid#60a5fa;background:transparent;-webkit-animation:assemble4 3s ease-in-out infinite;-moz-animation:assemble4 3s ease-in-out infinite;-o-animation:assemble4 3s ease-in-out infinite;animation:assemble4 3s ease-in-out infinite}.bolt.jsx-26421d14fda858b5{width:12px;height:12px;left:58%;top:30%;-webkit-border-radius:50%;-moz-border-radius:50%;border-radius:50%;-webkit-animation:boltSpin 2s linear infinite;-moz-animation:boltSpin 2s linear infinite;-o-animation:boltSpin 2s linear infinite;animation:boltSpin 2s linear infinite}.label.jsx-26421d14fda858b5{position:absolute;font-size:12px;letter-spacing:3px;color:#cbd5e1;opacity:.75;-webkit-animation:float 5s ease-in-out infinite;-moz-animation:float 5s ease-in-out infinite;-o-animation:float 5s ease-in-out infinite;animation:float 5s ease-in-out infinite}.l1.jsx-26421d14fda858b5{left:14%;top:15%}.l2.jsx-26421d14fda858b5{right:18%;top:16%;-webkit-animation-delay:1s;-moz-animation-delay:1s;-o-animation-delay:1s;animation-delay:1s}.l3.jsx-26421d14fda858b5{left:18%;bottom:18%;-webkit-animation-delay:2s;-moz-animation-delay:2s;-o-animation-delay:2s;animation-delay:2s}.l4.jsx-26421d14fda858b5{right:20%;bottom:15%;-webkit-animation-delay:3s;-moz-animation-delay:3s;-o-animation-delay:3s;animation-delay:3s}.ring.jsx-26421d14fda858b5{position:absolute;width:280px;height:280px;-webkit-border-radius:50%;-moz-border-radius:50%;border-radius:50%;border:2px dashed rgba(96,165,250,.3);left:50%;top:50%;-webkit-transform:translate(-50%,-50%);-moz-transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);-o-transform:translate(-50%,-50%);transform:translate(-50%,-50%);-webkit-animation:ringRotate 20s linear infinite;-moz-animation:ringRotate 20s linear infinite;-o-animation:ringRotate 20s linear infinite;animation:ringRotate 20s linear infinite}.scan-circle.jsx-26421d14fda858b5{position:absolute;width:300px;height:300px;-webkit-border-radius:50%;-moz-border-radius:50%;border-radius:50%;left:50%;top:50%;-webkit-transform:translate(-50%,-50%);-moz-transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);-o-transform:translate(-50%,-50%);transform:translate(-50%,-50%);background:conic-gradient(transparent 0deg,rgba(96,165,250,.5)25deg,transparent 45deg);-webkit-animation:scanRotate 3s linear infinite;-moz-animation:scanRotate 3s linear infinite;-o-animation:scanRotate 3s linear infinite;animation:scanRotate 3s linear infinite;mix-blend-mode:screen}@-webkit-keyframes rotateCW{to{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@-moz-keyframes rotateCW{to{-moz-transform:rotate(360deg);transform:rotate(360deg)}}@-o-keyframes rotateCW{to{-o-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes rotateCW{to{-webkit-transform:rotate(360deg);-moz-transform:rotate(360deg);-o-transform:rotate(360deg);transform:rotate(360deg)}}@-webkit-keyframes rotateCCW{to{-webkit-transform:rotate(-360deg);transform:rotate(-360deg)}}@-moz-keyframes rotateCCW{to{-moz-transform:rotate(-360deg);transform:rotate(-360deg)}}@-o-keyframes rotateCCW{to{-o-transform:rotate(-360deg);transform:rotate(-360deg)}}@keyframes rotateCCW{to{-webkit-transform:rotate(-360deg);-moz-transform:rotate(-360deg);-o-transform:rotate(-360deg);transform:rotate(-360deg)}}@-webkit-keyframes pulse{0%,100%{-webkit-transform:scale(1);transform:scale(1)}50%{-webkit-transform:scale(1.5);transform:scale(1.5)}}@-moz-keyframes pulse{0%,100%{-moz-transform:scale(1);transform:scale(1)}50%{-moz-transform:scale(1.5);transform:scale(1.5)}}@-o-keyframes pulse{0%,100%{-o-transform:scale(1);transform:scale(1)}50%{-o-transform:scale(1.5);transform:scale(1.5)}}@keyframes pulse{0%,100%{-webkit-transform:scale(1);-moz-transform:scale(1);-o-transform:scale(1);transform:scale(1)}50%{-webkit-transform:scale(1.5);-moz-transform:scale(1.5);-o-transform:scale(1.5);transform:scale(1.5)}}@-webkit-keyframes flow{from{stroke-dashoffset:40}to{stroke-dashoffset:0}}@-moz-keyframes flow{from{stroke-dashoffset:40}to{stroke-dashoffset:0}}@-o-keyframes flow{from{stroke-dashoffset:40}to{stroke-dashoffset:0}}@keyframes flow{from{stroke-dashoffset:40}to{stroke-dashoffset:0}}@-webkit-keyframes assemble1{0%{-webkit-transform:translatey(60px);transform:translatey(60px);opacity:0}30%,100%{-webkit-transform:translatey(0);transform:translatey(0);opacity:1}}@-moz-keyframes assemble1{0%{-moz-transform:translatey(60px);transform:translatey(60px);opacity:0}30%,100%{-moz-transform:translatey(0);transform:translatey(0);opacity:1}}@-o-keyframes assemble1{0%{-o-transform:translatey(60px);transform:translatey(60px);opacity:0}30%,100%{-o-transform:translatey(0);transform:translatey(0);opacity:1}}@keyframes assemble1{0%{-webkit-transform:translatey(60px);-moz-transform:translatey(60px);-o-transform:translatey(60px);transform:translatey(60px);opacity:0}30%,100%{-webkit-transform:translatey(0);-moz-transform:translatey(0);-o-transform:translatey(0);transform:translatey(0);opacity:1}}@-webkit-keyframes assemble2{0%{-webkit-transform:translatex(-80px);transform:translatex(-80px);opacity:0}40%,100%{-webkit-transform:translatex(0);transform:translatex(0);opacity:1}}@-moz-keyframes assemble2{0%{-moz-transform:translatex(-80px);transform:translatex(-80px);opacity:0}40%,100%{-moz-transform:translatex(0);transform:translatex(0);opacity:1}}@-o-keyframes assemble2{0%{-o-transform:translatex(-80px);transform:translatex(-80px);opacity:0}40%,100%{-o-transform:translatex(0);transform:translatex(0);opacity:1}}@keyframes assemble2{0%{-webkit-transform:translatex(-80px);-moz-transform:translatex(-80px);-o-transform:translatex(-80px);transform:translatex(-80px);opacity:0}40%,100%{-webkit-transform:translatex(0);-moz-transform:translatex(0);-o-transform:translatex(0);transform:translatex(0);opacity:1}}@-webkit-keyframes assemble3{0%{-webkit-transform:translatex(-120px);transform:translatex(-120px);opacity:0}45%,100%{-webkit-transform:translatex(0);transform:translatex(0);opacity:1}}@-moz-keyframes assemble3{0%{-moz-transform:translatex(-120px);transform:translatex(-120px);opacity:0}45%,100%{-moz-transform:translatex(0);transform:translatex(0);opacity:1}}@-o-keyframes assemble3{0%{-o-transform:translatex(-120px);transform:translatex(-120px);opacity:0}45%,100%{-o-transform:translatex(0);transform:translatex(0);opacity:1}}@keyframes assemble3{0%{-webkit-transform:translatex(-120px);-moz-transform:translatex(-120px);-o-transform:translatex(-120px);transform:translatex(-120px);opacity:0}45%,100%{-webkit-transform:translatex(0);-moz-transform:translatex(0);-o-transform:translatex(0);transform:translatex(0);opacity:1}}@-webkit-keyframes assemble4{0%{-webkit-transform:translatex(120px);transform:translatex(120px);opacity:0}45%,100%{-webkit-transform:translatex(0);transform:translatex(0);opacity:1}}@-moz-keyframes assemble4{0%{-moz-transform:translatex(120px);transform:translatex(120px);opacity:0}45%,100%{-moz-transform:translatex(0);transform:translatex(0);opacity:1}}@-o-keyframes assemble4{0%{-o-transform:translatex(120px);transform:translatex(120px);opacity:0}45%,100%{-o-transform:translatex(0);transform:translatex(0);opacity:1}}@keyframes assemble4{0%{-webkit-transform:translatex(120px);-moz-transform:translatex(120px);-o-transform:translatex(120px);transform:translatex(120px);opacity:0}45%,100%{-webkit-transform:translatex(0);-moz-transform:translatex(0);-o-transform:translatex(0);transform:translatex(0);opacity:1}}@-webkit-keyframes boltSpin{to{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@-moz-keyframes boltSpin{to{-moz-transform:rotate(360deg);transform:rotate(360deg)}}@-o-keyframes boltSpin{to{-o-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes boltSpin{to{-webkit-transform:rotate(360deg);-moz-transform:rotate(360deg);-o-transform:rotate(360deg);transform:rotate(360deg)}}@-webkit-keyframes float{0%,100%{-webkit-transform:translatey(0);transform:translatey(0)}50%{-webkit-transform:translatey(-12px);transform:translatey(-12px)}}@-moz-keyframes float{0%,100%{-moz-transform:translatey(0);transform:translatey(0)}50%{-moz-transform:translatey(-12px);transform:translatey(-12px)}}@-o-keyframes float{0%,100%{-o-transform:translatey(0);transform:translatey(0)}50%{-o-transform:translatey(-12px);transform:translatey(-12px)}}@keyframes float{0%,100%{-webkit-transform:translatey(0);-moz-transform:translatey(0);-o-transform:translatey(0);transform:translatey(0)}50%{-webkit-transform:translatey(-12px);-moz-transform:translatey(-12px);-o-transform:translatey(-12px);transform:translatey(-12px)}}@-webkit-keyframes ringRotate{to{-webkit-transform:translate(-50%,-50%)rotate(360deg);transform:translate(-50%,-50%)rotate(360deg)}}@-moz-keyframes ringRotate{to{-moz-transform:translate(-50%,-50%)rotate(360deg);transform:translate(-50%,-50%)rotate(360deg)}}@-o-keyframes ringRotate{to{-o-transform:translate(-50%,-50%)rotate(360deg);transform:translate(-50%,-50%)rotate(360deg)}}@keyframes ringRotate{to{-webkit-transform:translate(-50%,-50%)rotate(360deg);-moz-transform:translate(-50%,-50%)rotate(360deg);-o-transform:translate(-50%,-50%)rotate(360deg);transform:translate(-50%,-50%)rotate(360deg)}}@-webkit-keyframes scanRotate{to{-webkit-transform:translate(-50%,-50%)rotate(360deg);transform:translate(-50%,-50%)rotate(360deg)}}@-moz-keyframes scanRotate{to{-moz-transform:translate(-50%,-50%)rotate(360deg);transform:translate(-50%,-50%)rotate(360deg)}}@-o-keyframes scanRotate{to{-o-transform:translate(-50%,-50%)rotate(360deg);transform:translate(-50%,-50%)rotate(360deg)}}@keyframes scanRotate{to{-webkit-transform:translate(-50%,-50%)rotate(360deg);-moz-transform:translate(-50%,-50%)rotate(360deg);-o-transform:translate(-50%,-50%)rotate(360deg);transform:translate(-50%,-50%)rotate(360deg)}}@-webkit-keyframes gridMove{from{background-position:0 0}to{background-position:35px 35px}}@-moz-keyframes gridMove{from{background-position:0 0}to{background-position:35px 35px}}@-o-keyframes gridMove{from{background-position:0 0}to{background-position:35px 35px}}@keyframes gridMove{from{background-position:0 0}to{background-position:35px 35px}}'})]})}function c(){return(0,i.jsxs)("div",{className:"jsx-c428303c603776a4 manufacturing-scene",children:[i.jsx("div",{className:"jsx-c428303c603776a4 factory-grid"}),i.jsx("div",{className:"jsx-c428303c603776a4 smoke smoke1"}),i.jsx("div",{className:"jsx-c428303c603776a4 smoke smoke2"}),i.jsx("div",{className:"jsx-c428303c603776a4 smoke smoke3"}),(0,i.jsxs)("div",{className:"jsx-c428303c603776a4 conveyor",children:[i.jsx("div",{className:"jsx-c428303c603776a4 belt"}),i.jsx("div",{className:"jsx-c428303c603776a4 roller r1"}),i.jsx("div",{className:"jsx-c428303c603776a4 roller r2"}),i.jsx("div",{className:"jsx-c428303c603776a4 roller r3"}),i.jsx("div",{className:"jsx-c428303c603776a4 roller r4"}),i.jsx("div",{className:"jsx-c428303c603776a4 roller r5"}),i.jsx("div",{className:"jsx-c428303c603776a4 box b1"}),i.jsx("div",{className:"jsx-c428303c603776a4 box b2"}),i.jsx("div",{className:"jsx-c428303c603776a4 box b3"})]}),(0,i.jsxs)("div",{className:"jsx-c428303c603776a4 robot",children:[i.jsx("div",{className:"jsx-c428303c603776a4 base"}),i.jsx("div",{className:"jsx-c428303c603776a4 arm arm1"}),i.jsx("div",{className:"jsx-c428303c603776a4 joint joint1"}),i.jsx("div",{className:"jsx-c428303c603776a4 arm arm2"}),i.jsx("div",{className:"jsx-c428303c603776a4 joint joint2"}),i.jsx("div",{className:"jsx-c428303c603776a4 welder"})]}),i.jsx("div",{className:"jsx-c428303c603776a4 spark s1"}),i.jsx("div",{className:"jsx-c428303c603776a4 spark s2"}),i.jsx("div",{className:"jsx-c428303c603776a4 spark s3"}),i.jsx("div",{className:"jsx-c428303c603776a4 spark s4"}),i.jsx("div",{className:"jsx-c428303c603776a4 spark s5"}),i.jsx("div",{className:"jsx-c428303c603776a4 spark s6"}),i.jsx("div",{className:"jsx-c428303c603776a4 spark s7"}),i.jsx("div",{className:"jsx-c428303c603776a4 spark s8"}),(0,i.jsxs)("div",{className:"jsx-c428303c603776a4 press",children:[i.jsx("div",{className:"jsx-c428303c603776a4 press-head"}),i.jsx("div",{className:"jsx-c428303c603776a4 press-column left"}),i.jsx("div",{className:"jsx-c428303c603776a4 press-column right"}),i.jsx("div",{className:"jsx-c428303c603776a4 press-table"})]}),i.jsx("div",{className:"jsx-c428303c603776a4 heat"}),i.jsx("div",{className:"jsx-c428303c603776a4 label l1",children:"ROBOTIC WELDING"}),i.jsx("div",{className:"jsx-c428303c603776a4 label l2",children:"AUTOMATED LINE"}),i.jsx("div",{className:"jsx-c428303c603776a4 label l3",children:"QUALITY CONTROL"}),i.jsx(n(),{id:"c428303c603776a4",children:".manufacturing-scene.jsx-c428303c603776a4{position:absolute;inset:0;overflow:hidden;-webkit-border-radius:24px;-moz-border-radius:24px;border-radius:24px;background:-webkit-linear-gradient(top,#121212 0%,#1d1d1d 55%,#0f0f0f 100%);background:-moz-linear-gradient(top,#121212 0%,#1d1d1d 55%,#0f0f0f 100%);background:-o-linear-gradient(top,#121212 0%,#1d1d1d 55%,#0f0f0f 100%);background:linear-gradient(180deg,#121212 0%,#1d1d1d 55%,#0f0f0f 100%)}.factory-grid.jsx-c428303c603776a4{position:absolute;inset:0;background-image:-webkit-linear-gradient(rgba(255,255,255,.03)1px,transparent 1px),-webkit-linear-gradient(left,rgba(255,255,255,.03)1px,transparent 1px);background-image:-moz-linear-gradient(rgba(255,255,255,.03)1px,transparent 1px),-moz-linear-gradient(left,rgba(255,255,255,.03)1px,transparent 1px);background-image:-o-linear-gradient(rgba(255,255,255,.03)1px,transparent 1px),-o-linear-gradient(left,rgba(255,255,255,.03)1px,transparent 1px);background-image:linear-gradient(rgba(255,255,255,.03)1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.03)1px,transparent 1px);-webkit-background-size:40px 40px;-moz-background-size:40px 40px;-o-background-size:40px 40px;background-size:40px 40px}.conveyor.jsx-c428303c603776a4{position:absolute;left:5%;right:5%;bottom:60px;height:70px}.belt.jsx-c428303c603776a4{position:absolute;width:100%;height:18px;top:25px;background:-webkit-repeating-linear-gradient(left,#555 0,#555 20px,#777 20px,#777 40px);background:-moz-repeating-linear-gradient(left,#555 0,#555 20px,#777 20px,#777 40px);background:-o-repeating-linear-gradient(left,#555 0,#555 20px,#777 20px,#777 40px);background:repeating-linear-gradient(90deg,#555 0,#555 20px,#777 20px,#777 40px);-webkit-animation:beltMove 1s linear infinite;-moz-animation:beltMove 1s linear infinite;-o-animation:beltMove 1s linear infinite;animation:beltMove 1s linear infinite}.roller.jsx-c428303c603776a4{position:absolute;bottom:0;width:30px;height:30px;-webkit-border-radius:50%;-moz-border-radius:50%;border-radius:50%;background:#888;-webkit-animation:rollerSpin 1s linear infinite;-moz-animation:rollerSpin 1s linear infinite;-o-animation:rollerSpin 1s linear infinite;animation:rollerSpin 1s linear infinite}.r1.jsx-c428303c603776a4{left:2%}.r2.jsx-c428303c603776a4{left:25%}.r3.jsx-c428303c603776a4{left:48%}.r4.jsx-c428303c603776a4{left:71%}.r5.jsx-c428303c603776a4{left:94%}.box.jsx-c428303c603776a4{position:absolute;width:45px;height:35px;background:#4ade80;-webkit-border-radius:4px;-moz-border-radius:4px;border-radius:4px;bottom:38px;-webkit-animation:moveBox 8s linear infinite;-moz-animation:moveBox 8s linear infinite;-o-animation:moveBox 8s linear infinite;animation:moveBox 8s linear infinite}.b2.jsx-c428303c603776a4{-webkit-animation-delay:2.5s;-moz-animation-delay:2.5s;-o-animation-delay:2.5s;animation-delay:2.5s;background:#60a5fa}.b3.jsx-c428303c603776a4{-webkit-animation-delay:5s;-moz-animation-delay:5s;-o-animation-delay:5s;animation-delay:5s;background:#fbbf24}.robot.jsx-c428303c603776a4{position:absolute;left:22%;top:28%;width:220px;height:220px}.base.jsx-c428303c603776a4{position:absolute;bottom:0;left:35px;width:70px;height:40px;background:#475569;-webkit-border-radius:8px;-moz-border-radius:8px;border-radius:8px}.arm.jsx-c428303c603776a4{position:absolute;height:16px;background:#94a3b8;-webkit-transform-origin:left center;-moz-transform-origin:left center;-ms-transform-origin:left center;-o-transform-origin:left center;transform-origin:left center}.arm1.jsx-c428303c603776a4{width:90px;left:70px;bottom:80px;-webkit-animation:armRotate1 2s ease-in-out infinite alternate;-moz-animation:armRotate1 2s ease-in-out infinite alternate;-o-animation:armRotate1 2s ease-in-out infinite alternate;animation:armRotate1 2s ease-in-out infinite alternate}.arm2.jsx-c428303c603776a4{width:75px;left:125px;bottom:132px;-webkit-animation:armRotate2 2s ease-in-out infinite alternate;-moz-animation:armRotate2 2s ease-in-out infinite alternate;-o-animation:armRotate2 2s ease-in-out infinite alternate;animation:armRotate2 2s ease-in-out infinite alternate}.joint.jsx-c428303c603776a4{position:absolute;width:18px;height:18px;background:#cbd5e1;-webkit-border-radius:50%;-moz-border-radius:50%;border-radius:50%}.joint1.jsx-c428303c603776a4{left:145px;bottom:126px}.joint2.jsx-c428303c603776a4{left:188px;bottom:166px}.welder.jsx-c428303c603776a4{position:absolute;left:198px;bottom:150px;width:8px;height:40px;background:#f8fafc}.spark.jsx-c428303c603776a4{position:absolute;width:5px;height:5px;background:#fbbf24;-webkit-border-radius:50%;-moz-border-radius:50%;border-radius:50%;opacity:0}.s1.jsx-c428303c603776a4{left:47%;top:42%;-webkit-animation:spark 1s infinite;-moz-animation:spark 1s infinite;-o-animation:spark 1s infinite;animation:spark 1s infinite}.s2.jsx-c428303c603776a4{left:48%;top:43%;-webkit-animation:spark.9s infinite.1s;-moz-animation:spark.9s infinite.1s;-o-animation:spark.9s infinite.1s;animation:spark.9s infinite.1s}.s3.jsx-c428303c603776a4{left:49%;top:42%;-webkit-animation:spark.8s infinite.2s;-moz-animation:spark.8s infinite.2s;-o-animation:spark.8s infinite.2s;animation:spark.8s infinite.2s}.s4.jsx-c428303c603776a4{left:48%;top:41%;-webkit-animation:spark.7s infinite.3s;-moz-animation:spark.7s infinite.3s;-o-animation:spark.7s infinite.3s;animation:spark.7s infinite.3s}.s5.jsx-c428303c603776a4{left:47%;top:43%;-webkit-animation:spark.9s infinite.15s;-moz-animation:spark.9s infinite.15s;-o-animation:spark.9s infinite.15s;animation:spark.9s infinite.15s}.s6.jsx-c428303c603776a4{left:46%;top:42%;-webkit-animation:spark.75s infinite;-moz-animation:spark.75s infinite;-o-animation:spark.75s infinite;animation:spark.75s infinite}.s7.jsx-c428303c603776a4{left:49%;top:44%;-webkit-animation:spark.8s infinite.25s;-moz-animation:spark.8s infinite.25s;-o-animation:spark.8s infinite.25s;animation:spark.8s infinite.25s}.s8.jsx-c428303c603776a4{left:50%;top:42%;-webkit-animation:spark.95s infinite.2s;-moz-animation:spark.95s infinite.2s;-o-animation:spark.95s infinite.2s;animation:spark.95s infinite.2s}.press.jsx-c428303c603776a4{position:absolute;right:11%;top:20%;width:180px;height:260px}.press-head.jsx-c428303c603776a4{position:absolute;left:20px;top:0;width:140px;height:55px;background:#475569;-webkit-animation:press 2s ease-in-out infinite;-moz-animation:press 2s ease-in-out infinite;-o-animation:press 2s ease-in-out infinite;animation:press 2s ease-in-out infinite}.press-column.jsx-c428303c603776a4{position:absolute;width:16px;height:200px;background:#64748b}.left.jsx-c428303c603776a4{left:35px}.right.jsx-c428303c603776a4{right:35px}.press-table.jsx-c428303c603776a4{position:absolute;bottom:0;left:0;width:180px;height:24px;background:#64748b}.smoke.jsx-c428303c603776a4{position:absolute;width:90px;height:90px;background:rgba(255,255,255,.05);-webkit-border-radius:50%;-moz-border-radius:50%;border-radius:50%;-webkit-filter:blur(16px);filter:blur(16px);-webkit-animation:smoke 6s linear infinite;-moz-animation:smoke 6s linear infinite;-o-animation:smoke 6s linear infinite;animation:smoke 6s linear infinite}.smoke1.jsx-c428303c603776a4{left:18%;bottom:90px}.smoke2.jsx-c428303c603776a4{left:62%;bottom:120px;-webkit-animation-delay:2s;-moz-animation-delay:2s;-o-animation-delay:2s;animation-delay:2s}.smoke3.jsx-c428303c603776a4{left:80%;bottom:80px;-webkit-animation-delay:4s;-moz-animation-delay:4s;-o-animation-delay:4s;animation-delay:4s}.heat.jsx-c428303c603776a4{position:absolute;inset:0;background:-webkit-radial-gradient(center,circle,rgba(255,120,0,.16),transparent 60%);background:-moz-radial-gradient(center,circle,rgba(255,120,0,.16),transparent 60%);background:-o-radial-gradient(center,circle,rgba(255,120,0,.16),transparent 60%);background:radial-gradient(circle at center,rgba(255,120,0,.16),transparent 60%);-webkit-animation:heat 2s ease-in-out infinite;-moz-animation:heat 2s ease-in-out infinite;-o-animation:heat 2s ease-in-out infinite;animation:heat 2s ease-in-out infinite}.label.jsx-c428303c603776a4{position:absolute;font-size:12px;letter-spacing:3px;color:#f8fafc;opacity:.7}.l1.jsx-c428303c603776a4{left:8%;top:12%}.l2.jsx-c428303c603776a4{right:8%;top:12%}.l3.jsx-c428303c603776a4{left:35%;bottom:12%}@-webkit-keyframes beltMove{0%{background-position:0 0}100%{background-position:40px 0}}@-moz-keyframes beltMove{0%{background-position:0 0}100%{background-position:40px 0}}@-o-keyframes beltMove{0%{background-position:0 0}100%{background-position:40px 0}}@keyframes beltMove{0%{background-position:0 0}100%{background-position:40px 0}}@-webkit-keyframes rollerSpin{to{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@-moz-keyframes rollerSpin{to{-moz-transform:rotate(360deg);transform:rotate(360deg)}}@-o-keyframes rollerSpin{to{-o-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes rollerSpin{to{-webkit-transform:rotate(360deg);-moz-transform:rotate(360deg);-o-transform:rotate(360deg);transform:rotate(360deg)}}@-webkit-keyframes moveBox{0%{left:-50px}100%{left:105%}}@-moz-keyframes moveBox{0%{left:-50px}100%{left:105%}}@-o-keyframes moveBox{0%{left:-50px}100%{left:105%}}@keyframes moveBox{0%{left:-50px}100%{left:105%}}@-webkit-keyframes armRotate1{from{-webkit-transform:rotate(-35deg);transform:rotate(-35deg)}to{-webkit-transform:rotate(-5deg);transform:rotate(-5deg)}}@-moz-keyframes armRotate1{from{-moz-transform:rotate(-35deg);transform:rotate(-35deg)}to{-moz-transform:rotate(-5deg);transform:rotate(-5deg)}}@-o-keyframes armRotate1{from{-o-transform:rotate(-35deg);transform:rotate(-35deg)}to{-o-transform:rotate(-5deg);transform:rotate(-5deg)}}@keyframes armRotate1{from{-webkit-transform:rotate(-35deg);-moz-transform:rotate(-35deg);-o-transform:rotate(-35deg);transform:rotate(-35deg)}to{-webkit-transform:rotate(-5deg);-moz-transform:rotate(-5deg);-o-transform:rotate(-5deg);transform:rotate(-5deg)}}@-webkit-keyframes armRotate2{from{-webkit-transform:rotate(50deg);transform:rotate(50deg)}to{-webkit-transform:rotate(10deg);transform:rotate(10deg)}}@-moz-keyframes armRotate2{from{-moz-transform:rotate(50deg);transform:rotate(50deg)}to{-moz-transform:rotate(10deg);transform:rotate(10deg)}}@-o-keyframes armRotate2{from{-o-transform:rotate(50deg);transform:rotate(50deg)}to{-o-transform:rotate(10deg);transform:rotate(10deg)}}@keyframes armRotate2{from{-webkit-transform:rotate(50deg);-moz-transform:rotate(50deg);-o-transform:rotate(50deg);transform:rotate(50deg)}to{-webkit-transform:rotate(10deg);-moz-transform:rotate(10deg);-o-transform:rotate(10deg);transform:rotate(10deg)}}@-webkit-keyframes spark{0%{opacity:1;-webkit-transform:translate(0,0)scale(1);transform:translate(0,0)scale(1)}100%{opacity:0;-webkit-transform:translate(-webkit-calc((var(--x,1)*35px)),-35px)scale(0);transform:translate(-webkit-calc((var(--x,1)*35px)),-35px)scale(0);transform:translate(calc((var(--x,1)*35px)),-35px)scale(0)}}@-moz-keyframes spark{0%{opacity:1;-moz-transform:translate(0,0)scale(1);transform:translate(0,0)scale(1)}100%{opacity:0;-moz-transform:translate(-moz-calc((var(--x,1)*35px)),-35px)scale(0);transform:translate(-moz-calc((var(--x,1)*35px)),-35px)scale(0);transform:translate(calc((var(--x,1)*35px)),-35px)scale(0)}}@-o-keyframes spark{0%{opacity:1;-o-transform:translate(0,0)scale(1);transform:translate(0,0)scale(1)}100%{opacity:0;-o-transform:translate(calc((var(--x,1)*35px)),-35px)scale(0);transform:translate(calc((var(--x,1)*35px)),-35px)scale(0)}}@keyframes spark{0%{opacity:1;-webkit-transform:translate(0,0)scale(1);-moz-transform:translate(0,0)scale(1);-o-transform:translate(0,0)scale(1);transform:translate(0,0)scale(1)}100%{opacity:0;-webkit-transform:translate(-webkit-calc((var(--x,1)*35px)),-35px)scale(0);-moz-transform:translate(-moz-calc((var(--x,1)*35px)),-35px)scale(0);-o-transform:translate(calc((var(--x,1)*35px)),-35px)scale(0);transform:translate(-webkit-calc((var(--x,1)*35px)),-35px)scale(0);transform:translate(-moz-calc((var(--x,1)*35px)),-35px)scale(0);transform:translate(calc((var(--x,1)*35px)),-35px)scale(0)}}@-webkit-keyframes press{0%,100%{-webkit-transform:translatey(0);transform:translatey(0)}50%{-webkit-transform:translatey(90px);transform:translatey(90px)}}@-moz-keyframes press{0%,100%{-moz-transform:translatey(0);transform:translatey(0)}50%{-moz-transform:translatey(90px);transform:translatey(90px)}}@-o-keyframes press{0%,100%{-o-transform:translatey(0);transform:translatey(0)}50%{-o-transform:translatey(90px);transform:translatey(90px)}}@keyframes press{0%,100%{-webkit-transform:translatey(0);-moz-transform:translatey(0);-o-transform:translatey(0);transform:translatey(0)}50%{-webkit-transform:translatey(90px);-moz-transform:translatey(90px);-o-transform:translatey(90px);transform:translatey(90px)}}@-webkit-keyframes smoke{0%{-webkit-transform:translatey(0)scale(.6);transform:translatey(0)scale(.6);opacity:.2}100%{-webkit-transform:translatey(-140px)scale(1.8);transform:translatey(-140px)scale(1.8);opacity:0}}@-moz-keyframes smoke{0%{-moz-transform:translatey(0)scale(.6);transform:translatey(0)scale(.6);opacity:.2}100%{-moz-transform:translatey(-140px)scale(1.8);transform:translatey(-140px)scale(1.8);opacity:0}}@-o-keyframes smoke{0%{-o-transform:translatey(0)scale(.6);transform:translatey(0)scale(.6);opacity:.2}100%{-o-transform:translatey(-140px)scale(1.8);transform:translatey(-140px)scale(1.8);opacity:0}}@keyframes smoke{0%{-webkit-transform:translatey(0)scale(.6);-moz-transform:translatey(0)scale(.6);-o-transform:translatey(0)scale(.6);transform:translatey(0)scale(.6);opacity:.2}100%{-webkit-transform:translatey(-140px)scale(1.8);-moz-transform:translatey(-140px)scale(1.8);-o-transform:translatey(-140px)scale(1.8);transform:translatey(-140px)scale(1.8);opacity:0}}@-webkit-keyframes heat{0%,100%{opacity:.4}50%{opacity:.9}}@-moz-keyframes heat{0%,100%{opacity:.4}50%{opacity:.9}}@-o-keyframes heat{0%,100%{opacity:.4}50%{opacity:.9}}@keyframes heat{0%,100%{opacity:.4}50%{opacity:.9}}"})]})}function d(){return(0,i.jsxs)("div",{className:"jsx-ac1e396ccb85b76f testing-scene",children:[i.jsx("div",{className:"jsx-ac1e396ccb85b76f grid"}),i.jsx("div",{className:"jsx-ac1e396ccb85b76f scanner",children:i.jsx("div",{className:"jsx-ac1e396ccb85b76f scan-line"})}),(0,i.jsxs)("div",{className:"jsx-ac1e396ccb85b76f machine",children:[i.jsx("div",{className:"jsx-ac1e396ccb85b76f machine-box"}),i.jsx("div",{className:"jsx-ac1e396ccb85b76f sensor top"}),i.jsx("div",{className:"jsx-ac1e396ccb85b76f sensor left"}),i.jsx("div",{className:"jsx-ac1e396ccb85b76f sensor right"}),i.jsx("div",{className:"jsx-ac1e396ccb85b76f sensor bottom"})]}),i.jsx("div",{className:"jsx-ac1e396ccb85b76f ring r1"}),i.jsx("div",{className:"jsx-ac1e396ccb85b76f ring r2"}),i.jsx("div",{className:"jsx-ac1e396ccb85b76f ring r3"}),(0,i.jsxs)("div",{className:"jsx-ac1e396ccb85b76f gauge g1",children:[i.jsx("span",{className:"jsx-ac1e396ccb85b76f",children:"Pressure"}),i.jsx("strong",{className:"jsx-ac1e396ccb85b76f",children:"98%"})]}),(0,i.jsxs)("div",{className:"jsx-ac1e396ccb85b76f gauge g2",children:[i.jsx("span",{className:"jsx-ac1e396ccb85b76f",children:"Accuracy"}),i.jsx("strong",{className:"jsx-ac1e396ccb85b76f",children:"99.8%"})]}),(0,i.jsxs)("div",{className:"jsx-ac1e396ccb85b76f gauge g3",children:[i.jsx("span",{className:"jsx-ac1e396ccb85b76f",children:"Temperature"}),i.jsx("strong",{className:"jsx-ac1e396ccb85b76f",children:"38\xb0C"})]}),i.jsx("div",{className:"jsx-ac1e396ccb85b76f check c1",children:"✔"}),i.jsx("div",{className:"jsx-ac1e396ccb85b76f check c2",children:"✔"}),i.jsx("div",{className:"jsx-ac1e396ccb85b76f check c3",children:"✔"}),i.jsx("span",{className:"jsx-ac1e396ccb85b76f dot d1"}),i.jsx("span",{className:"jsx-ac1e396ccb85b76f dot d2"}),i.jsx("span",{className:"jsx-ac1e396ccb85b76f dot d3"}),i.jsx("span",{className:"jsx-ac1e396ccb85b76f dot d4"}),i.jsx("div",{className:"jsx-ac1e396ccb85b76f label l1",children:"QUALITY TEST"}),i.jsx("div",{className:"jsx-ac1e396ccb85b76f label l2",children:"DIMENSION CHECK"}),i.jsx("div",{className:"jsx-ac1e396ccb85b76f label l3",children:"FINAL INSPECTION"}),i.jsx(n(),{id:"ac1e396ccb85b76f",children:".testing-scene.jsx-ac1e396ccb85b76f{position:absolute;inset:0;overflow:hidden;-webkit-border-radius:24px;-moz-border-radius:24px;border-radius:24px;background:-webkit-radial-gradient(circle,#12314d 0%,#08111d 80%);background:-moz-radial-gradient(circle,#12314d 0%,#08111d 80%);background:-o-radial-gradient(circle,#12314d 0%,#08111d 80%);background:radial-gradient(circle,#12314d 0%,#08111d 80%)}.grid.jsx-ac1e396ccb85b76f{position:absolute;inset:0;background-image:-webkit-linear-gradient(rgba(255,255,255,.05)1px,transparent 1px),-webkit-linear-gradient(left,rgba(255,255,255,.05)1px,transparent 1px);background-image:-moz-linear-gradient(rgba(255,255,255,.05)1px,transparent 1px),-moz-linear-gradient(left,rgba(255,255,255,.05)1px,transparent 1px);background-image:-o-linear-gradient(rgba(255,255,255,.05)1px,transparent 1px),-o-linear-gradient(left,rgba(255,255,255,.05)1px,transparent 1px);background-image:linear-gradient(rgba(255,255,255,.05)1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.05)1px,transparent 1px);-webkit-background-size:35px 35px;-moz-background-size:35px 35px;-o-background-size:35px 35px;background-size:35px 35px;-webkit-animation:gridMove 12s linear infinite;-moz-animation:gridMove 12s linear infinite;-o-animation:gridMove 12s linear infinite;animation:gridMove 12s linear infinite}.machine.jsx-ac1e396ccb85b76f{position:absolute;left:50%;top:50%;width:180px;height:180px;-webkit-transform:translate(-50%,-50%);-moz-transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);-o-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}.machine-box.jsx-ac1e396ccb85b76f{position:absolute;width:140px;height:140px;left:20px;top:20px;border:3px solid#38bdf8;background:rgba(56,189,248,.08);-webkit-border-radius:12px;-moz-border-radius:12px;border-radius:12px}.sensor.jsx-ac1e396ccb85b76f{position:absolute;width:16px;height:16px;background:#38bdf8;-webkit-border-radius:50%;-moz-border-radius:50%;border-radius:50%;-webkit-box-shadow:0 0 15px#38bdf8;-moz-box-shadow:0 0 15px#38bdf8;box-shadow:0 0 15px#38bdf8;-webkit-animation:pulse 1.5s infinite;-moz-animation:pulse 1.5s infinite;-o-animation:pulse 1.5s infinite;animation:pulse 1.5s infinite}.top.jsx-ac1e396ccb85b76f{top:0;left:82px}.left.jsx-ac1e396ccb85b76f{left:0;top:82px}.right.jsx-ac1e396ccb85b76f{right:0;top:82px}.bottom.jsx-ac1e396ccb85b76f{bottom:0;left:82px}.scanner.jsx-ac1e396ccb85b76f{position:absolute;left:50%;top:50%;width:220px;height:220px;-webkit-transform:translate(-50%,-50%);-moz-transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);-o-transform:translate(-50%,-50%);transform:translate(-50%,-50%);overflow:hidden;-webkit-border-radius:50%;-moz-border-radius:50%;border-radius:50%}.scan-line.jsx-ac1e396ccb85b76f{position:absolute;width:100%;height:3px;background:#38bdf8;-webkit-box-shadow:0 0 18px#38bdf8;-moz-box-shadow:0 0 18px#38bdf8;box-shadow:0 0 18px#38bdf8;-webkit-animation:scan 3s linear infinite;-moz-animation:scan 3s linear infinite;-o-animation:scan 3s linear infinite;animation:scan 3s linear infinite}.ring.jsx-ac1e396ccb85b76f{position:absolute;border:2px solid rgba(56,189,248,.25);-webkit-border-radius:50%;-moz-border-radius:50%;border-radius:50%;left:50%;top:50%;-webkit-transform:translate(-50%,-50%);-moz-transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);-o-transform:translate(-50%,-50%);transform:translate(-50%,-50%);-webkit-animation:ring 2.8s infinite;-moz-animation:ring 2.8s infinite;-o-animation:ring 2.8s infinite;animation:ring 2.8s infinite}.r1.jsx-ac1e396ccb85b76f{width:160px;height:160px}.r2.jsx-ac1e396ccb85b76f{width:230px;height:230px;-webkit-animation-delay:.6s;-moz-animation-delay:.6s;-o-animation-delay:.6s;animation-delay:.6s}.r3.jsx-ac1e396ccb85b76f{width:300px;height:300px;-webkit-animation-delay:1.2s;-moz-animation-delay:1.2s;-o-animation-delay:1.2s;animation-delay:1.2s}.gauge.jsx-ac1e396ccb85b76f{position:absolute;padding:10px 14px;background:rgba(15,23,42,.8);border:1px solid#38bdf8;-webkit-border-radius:8px;-moz-border-radius:8px;border-radius:8px;font-size:12px;color:white;-webkit-animation:float 4s ease-in-out infinite;-moz-animation:float 4s ease-in-out infinite;-o-animation:float 4s ease-in-out infinite;animation:float 4s ease-in-out infinite}.gauge.jsx-ac1e396ccb85b76f strong.jsx-ac1e396ccb85b76f{display:block;font-size:20px;margin-top:3px;color:#38bdf8}.g1.jsx-ac1e396ccb85b76f{left:8%;top:18%}.g2.jsx-ac1e396ccb85b76f{right:8%;top:22%;-webkit-animation-delay:1s;-moz-animation-delay:1s;-o-animation-delay:1s;animation-delay:1s}.g3.jsx-ac1e396ccb85b76f{left:36%;bottom:12%;-webkit-animation-delay:2s;-moz-animation-delay:2s;-o-animation-delay:2s;animation-delay:2s}.check.jsx-ac1e396ccb85b76f{position:absolute;font-size:30px;color:#22c55e;-webkit-animation:check 2s infinite;-moz-animation:check 2s infinite;-o-animation:check 2s infinite;animation:check 2s infinite}.c1.jsx-ac1e396ccb85b76f{left:26%;top:28%}.c2.jsx-ac1e396ccb85b76f{right:24%;top:42%;-webkit-animation-delay:.5s;-moz-animation-delay:.5s;-o-animation-delay:.5s;animation-delay:.5s}.c3.jsx-ac1e396ccb85b76f{left:48%;bottom:24%;-webkit-animation-delay:1s;-moz-animation-delay:1s;-o-animation-delay:1s;animation-delay:1s}.dot.jsx-ac1e396ccb85b76f{position:absolute;width:8px;height:8px;-webkit-border-radius:50%;-moz-border-radius:50%;border-radius:50%;background:#38bdf8;-webkit-box-shadow:0 0 10px#38bdf8;-moz-box-shadow:0 0 10px#38bdf8;box-shadow:0 0 10px#38bdf8;-webkit-animation:pulse 1.4s infinite;-moz-animation:pulse 1.4s infinite;-o-animation:pulse 1.4s infinite;animation:pulse 1.4s infinite}.d1.jsx-ac1e396ccb85b76f{left:25%;top:30%}.d2.jsx-ac1e396ccb85b76f{left:74%;top:28%}.d3.jsx-ac1e396ccb85b76f{left:26%;top:72%}.d4.jsx-ac1e396ccb85b76f{left:72%;top:74%}.label.jsx-ac1e396ccb85b76f{position:absolute;font-size:12px;letter-spacing:3px;color:#cbd5e1;opacity:.8;-webkit-animation:float 5s ease-in-out infinite;-moz-animation:float 5s ease-in-out infinite;-o-animation:float 5s ease-in-out infinite;animation:float 5s ease-in-out infinite}.l1.jsx-ac1e396ccb85b76f{left:10%;top:8%}.l2.jsx-ac1e396ccb85b76f{right:8%;top:10%;-webkit-animation-delay:1s;-moz-animation-delay:1s;-o-animation-delay:1s;animation-delay:1s}.l3.jsx-ac1e396ccb85b76f{left:34%;bottom:5%;-webkit-animation-delay:2s;-moz-animation-delay:2s;-o-animation-delay:2s;animation-delay:2s}@-webkit-keyframes scan{0%{-webkit-transform:translatey(0);transform:translatey(0)}100%{-webkit-transform:translatey(220px);transform:translatey(220px)}}@-moz-keyframes scan{0%{-moz-transform:translatey(0);transform:translatey(0)}100%{-moz-transform:translatey(220px);transform:translatey(220px)}}@-o-keyframes scan{0%{-o-transform:translatey(0);transform:translatey(0)}100%{-o-transform:translatey(220px);transform:translatey(220px)}}@keyframes scan{0%{-webkit-transform:translatey(0);-moz-transform:translatey(0);-o-transform:translatey(0);transform:translatey(0)}100%{-webkit-transform:translatey(220px);-moz-transform:translatey(220px);-o-transform:translatey(220px);transform:translatey(220px)}}@-webkit-keyframes pulse{0%,100%{-webkit-transform:scale(1);transform:scale(1)}50%{-webkit-transform:scale(1.5);transform:scale(1.5)}}@-moz-keyframes pulse{0%,100%{-moz-transform:scale(1);transform:scale(1)}50%{-moz-transform:scale(1.5);transform:scale(1.5)}}@-o-keyframes pulse{0%,100%{-o-transform:scale(1);transform:scale(1)}50%{-o-transform:scale(1.5);transform:scale(1.5)}}@keyframes pulse{0%,100%{-webkit-transform:scale(1);-moz-transform:scale(1);-o-transform:scale(1);transform:scale(1)}50%{-webkit-transform:scale(1.5);-moz-transform:scale(1.5);-o-transform:scale(1.5);transform:scale(1.5)}}@-webkit-keyframes ring{0%{-webkit-transform:translate(-50%,-50%)scale(.7);transform:translate(-50%,-50%)scale(.7);opacity:1}100%{-webkit-transform:translate(-50%,-50%)scale(1.4);transform:translate(-50%,-50%)scale(1.4);opacity:0}}@-moz-keyframes ring{0%{-moz-transform:translate(-50%,-50%)scale(.7);transform:translate(-50%,-50%)scale(.7);opacity:1}100%{-moz-transform:translate(-50%,-50%)scale(1.4);transform:translate(-50%,-50%)scale(1.4);opacity:0}}@-o-keyframes ring{0%{-o-transform:translate(-50%,-50%)scale(.7);transform:translate(-50%,-50%)scale(.7);opacity:1}100%{-o-transform:translate(-50%,-50%)scale(1.4);transform:translate(-50%,-50%)scale(1.4);opacity:0}}@keyframes ring{0%{-webkit-transform:translate(-50%,-50%)scale(.7);-moz-transform:translate(-50%,-50%)scale(.7);-o-transform:translate(-50%,-50%)scale(.7);transform:translate(-50%,-50%)scale(.7);opacity:1}100%{-webkit-transform:translate(-50%,-50%)scale(1.4);-moz-transform:translate(-50%,-50%)scale(1.4);-o-transform:translate(-50%,-50%)scale(1.4);transform:translate(-50%,-50%)scale(1.4);opacity:0}}@-webkit-keyframes float{0%,100%{-webkit-transform:translatey(0);transform:translatey(0)}50%{-webkit-transform:translatey(-10px);transform:translatey(-10px)}}@-moz-keyframes float{0%,100%{-moz-transform:translatey(0);transform:translatey(0)}50%{-moz-transform:translatey(-10px);transform:translatey(-10px)}}@-o-keyframes float{0%,100%{-o-transform:translatey(0);transform:translatey(0)}50%{-o-transform:translatey(-10px);transform:translatey(-10px)}}@keyframes float{0%,100%{-webkit-transform:translatey(0);-moz-transform:translatey(0);-o-transform:translatey(0);transform:translatey(0)}50%{-webkit-transform:translatey(-10px);-moz-transform:translatey(-10px);-o-transform:translatey(-10px);transform:translatey(-10px)}}@-webkit-keyframes check{0%,100%{opacity:.3;-webkit-transform:scale(.8);transform:scale(.8)}50%{opacity:1;-webkit-transform:scale(1.2);transform:scale(1.2)}}@-moz-keyframes check{0%,100%{opacity:.3;-moz-transform:scale(.8);transform:scale(.8)}50%{opacity:1;-moz-transform:scale(1.2);transform:scale(1.2)}}@-o-keyframes check{0%,100%{opacity:.3;-o-transform:scale(.8);transform:scale(.8)}50%{opacity:1;-o-transform:scale(1.2);transform:scale(1.2)}}@keyframes check{0%,100%{opacity:.3;-webkit-transform:scale(.8);-moz-transform:scale(.8);-o-transform:scale(.8);transform:scale(.8)}50%{opacity:1;-webkit-transform:scale(1.2);-moz-transform:scale(1.2);-o-transform:scale(1.2);transform:scale(1.2)}}@-webkit-keyframes gridMove{from{background-position:0 0}to{background-position:35px 35px}}@-moz-keyframes gridMove{from{background-position:0 0}to{background-position:35px 35px}}@-o-keyframes gridMove{from{background-position:0 0}to{background-position:35px 35px}}@keyframes gridMove{from{background-position:0 0}to{background-position:35px 35px}}"})]})}function m(){return(0,i.jsxs)("div",{className:"jsx-157c2f6b4c98aa42 installation-scene",children:[i.jsx("div",{className:"jsx-157c2f6b4c98aa42 grid"}),i.jsx("div",{className:"jsx-157c2f6b4c98aa42 floor"}),(0,i.jsxs)("div",{className:"jsx-157c2f6b4c98aa42 crane",children:[i.jsx("div",{className:"jsx-157c2f6b4c98aa42 tower"}),i.jsx("div",{className:"jsx-157c2f6b4c98aa42 beam"}),i.jsx("div",{className:"jsx-157c2f6b4c98aa42 hook-line"}),i.jsx("div",{className:"jsx-157c2f6b4c98aa42 hook"}),i.jsx("div",{className:"jsx-157c2f6b4c98aa42 machine",children:i.jsx("div",{className:"jsx-157c2f6b4c98aa42 machine-door"})})]}),(0,i.jsxs)("div",{className:"jsx-157c2f6b4c98aa42 worker w1",children:[i.jsx("div",{className:"jsx-157c2f6b4c98aa42 head"}),i.jsx("div",{className:"jsx-157c2f6b4c98aa42 body"})]}),(0,i.jsxs)("div",{className:"jsx-157c2f6b4c98aa42 worker w2",children:[i.jsx("div",{className:"jsx-157c2f6b4c98aa42 head"}),i.jsx("div",{className:"jsx-157c2f6b4c98aa42 body"})]}),i.jsx("div",{className:"jsx-157c2f6b4c98aa42 tool tool1",children:"\uD83D\uDD27"}),i.jsx("div",{className:"jsx-157c2f6b4c98aa42 tool tool2",children:"⚙️"}),i.jsx("div",{className:"jsx-157c2f6b4c98aa42 tool tool3",children:"\uD83D\uDCD0"}),i.jsx("div",{className:"jsx-157c2f6b4c98aa42 checkpoint c1",children:"✔"}),i.jsx("div",{className:"jsx-157c2f6b4c98aa42 checkpoint c2",children:"✔"}),i.jsx("div",{className:"jsx-157c2f6b4c98aa42 checkpoint c3",children:"✔"}),i.jsx("div",{className:"jsx-157c2f6b4c98aa42 label l1",children:"FOUNDATION"}),i.jsx("div",{className:"jsx-157c2f6b4c98aa42 label l2",children:"ALIGNMENT"}),i.jsx("div",{className:"jsx-157c2f6b4c98aa42 label l3",children:"COMMISSIONING"}),i.jsx(n(),{id:"157c2f6b4c98aa42",children:".installation-scene.jsx-157c2f6b4c98aa42{position:absolute;inset:0;overflow:hidden;-webkit-border-radius:24px;-moz-border-radius:24px;border-radius:24px;background:-webkit-linear-gradient(top,#162233 0%,#0b1220 100%);background:-moz-linear-gradient(top,#162233 0%,#0b1220 100%);background:-o-linear-gradient(top,#162233 0%,#0b1220 100%);background:linear-gradient(180deg,#162233 0%,#0b1220 100%)}.grid.jsx-157c2f6b4c98aa42{position:absolute;inset:0;background-image:-webkit-linear-gradient(rgba(255,255,255,.04)1px,transparent 1px),-webkit-linear-gradient(left,rgba(255,255,255,.04)1px,transparent 1px);background-image:-moz-linear-gradient(rgba(255,255,255,.04)1px,transparent 1px),-moz-linear-gradient(left,rgba(255,255,255,.04)1px,transparent 1px);background-image:-o-linear-gradient(rgba(255,255,255,.04)1px,transparent 1px),-o-linear-gradient(left,rgba(255,255,255,.04)1px,transparent 1px);background-image:linear-gradient(rgba(255,255,255,.04)1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.04)1px,transparent 1px);-webkit-background-size:40px 40px;-moz-background-size:40px 40px;-o-background-size:40px 40px;background-size:40px 40px;-webkit-animation:gridMove 12s linear infinite;-moz-animation:gridMove 12s linear infinite;-o-animation:gridMove 12s linear infinite;animation:gridMove 12s linear infinite}.floor.jsx-157c2f6b4c98aa42{position:absolute;left:0;right:0;bottom:0;height:70px;background:#374151}.crane.jsx-157c2f6b4c98aa42{position:absolute;left:12%;bottom:70px;width:420px;height:300px}.tower.jsx-157c2f6b4c98aa42{position:absolute;left:40px;bottom:0;width:18px;height:260px;background:#f59e0b}.beam.jsx-157c2f6b4c98aa42{position:absolute;left:40px;top:20px;width:260px;height:14px;background:#f59e0b}.hook-line.jsx-157c2f6b4c98aa42{position:absolute;left:280px;top:34px;width:3px;height:100px;background:#d1d5db;-webkit-animation:lift 4s ease-in-out infinite;-moz-animation:lift 4s ease-in-out infinite;-o-animation:lift 4s ease-in-out infinite;animation:lift 4s ease-in-out infinite}.hook.jsx-157c2f6b4c98aa42{position:absolute;left:270px;top:125px;width:22px;height:22px;border:4px solid#d1d5db;border-top:none;-webkit-border-radius:0 0 12px 12px;-moz-border-radius:0 0 12px 12px;border-radius:0 0 12px 12px;-webkit-animation:lift 4s ease-in-out infinite;-moz-animation:lift 4s ease-in-out infinite;-o-animation:lift 4s ease-in-out infinite;animation:lift 4s ease-in-out infinite}.machine.jsx-157c2f6b4c98aa42{position:absolute;left:220px;top:145px;width:90px;height:70px;background:#3b82f6;-webkit-border-radius:8px;-moz-border-radius:8px;border-radius:8px;-webkit-animation:lift 4s ease-in-out infinite;-moz-animation:lift 4s ease-in-out infinite;-o-animation:lift 4s ease-in-out infinite;animation:lift 4s ease-in-out infinite}.machine-door.jsx-157c2f6b4c98aa42{position:absolute;left:25px;top:18px;width:40px;height:32px;border:2px solid white}.worker.jsx-157c2f6b4c98aa42{position:absolute;bottom:70px;width:30px;height:70px;-webkit-animation:workerMove 2s ease-in-out infinite;-moz-animation:workerMove 2s ease-in-out infinite;-o-animation:workerMove 2s ease-in-out infinite;animation:workerMove 2s ease-in-out infinite}.w1.jsx-157c2f6b4c98aa42{left:63%}.w2.jsx-157c2f6b4c98aa42{left:74%;-webkit-animation-delay:1s;-moz-animation-delay:1s;-o-animation-delay:1s;animation-delay:1s}.head.jsx-157c2f6b4c98aa42{width:18px;height:18px;-webkit-border-radius:50%;-moz-border-radius:50%;border-radius:50%;background:#fde68a;margin:auto}.body.jsx-157c2f6b4c98aa42{width:12px;height:40px;background:#60a5fa;margin:4px auto}.tool.jsx-157c2f6b4c98aa42{position:absolute;font-size:24px;-webkit-animation:toolFloat 3s ease-in-out infinite;-moz-animation:toolFloat 3s ease-in-out infinite;-o-animation:toolFloat 3s ease-in-out infinite;animation:toolFloat 3s ease-in-out infinite}.tool1.jsx-157c2f6b4c98aa42{left:58%;top:28%}.tool2.jsx-157c2f6b4c98aa42{left:77%;top:36%;-webkit-animation-delay:1s;-moz-animation-delay:1s;-o-animation-delay:1s;animation-delay:1s}.tool3.jsx-157c2f6b4c98aa42{left:67%;top:18%;-webkit-animation-delay:2s;-moz-animation-delay:2s;-o-animation-delay:2s;animation-delay:2s}.checkpoint.jsx-157c2f6b4c98aa42{position:absolute;color:#22c55e;font-size:28px;-webkit-animation:blink 2s infinite;-moz-animation:blink 2s infinite;-o-animation:blink 2s infinite;animation:blink 2s infinite}.c1.jsx-157c2f6b4c98aa42{left:52%;top:22%}.c2.jsx-157c2f6b4c98aa42{left:70%;top:58%;-webkit-animation-delay:.5s;-moz-animation-delay:.5s;-o-animation-delay:.5s;animation-delay:.5s}.c3.jsx-157c2f6b4c98aa42{left:82%;top:32%;-webkit-animation-delay:1s;-moz-animation-delay:1s;-o-animation-delay:1s;animation-delay:1s}.label.jsx-157c2f6b4c98aa42{position:absolute;font-size:12px;letter-spacing:3px;color:#cbd5e1;opacity:.8;-webkit-animation:float 4s ease-in-out infinite;-moz-animation:float 4s ease-in-out infinite;-o-animation:float 4s ease-in-out infinite;animation:float 4s ease-in-out infinite}.l1.jsx-157c2f6b4c98aa42{left:8%;top:12%}.l2.jsx-157c2f6b4c98aa42{right:10%;top:18%;-webkit-animation-delay:1s;-moz-animation-delay:1s;-o-animation-delay:1s;animation-delay:1s}.l3.jsx-157c2f6b4c98aa42{left:38%;bottom:16%;-webkit-animation-delay:2s;-moz-animation-delay:2s;-o-animation-delay:2s;animation-delay:2s}@-webkit-keyframes lift{0%,100%{-webkit-transform:translatey(0);transform:translatey(0)}50%{-webkit-transform:translatey(-60px);transform:translatey(-60px)}}@-moz-keyframes lift{0%,100%{-moz-transform:translatey(0);transform:translatey(0)}50%{-moz-transform:translatey(-60px);transform:translatey(-60px)}}@-o-keyframes lift{0%,100%{-o-transform:translatey(0);transform:translatey(0)}50%{-o-transform:translatey(-60px);transform:translatey(-60px)}}@keyframes lift{0%,100%{-webkit-transform:translatey(0);-moz-transform:translatey(0);-o-transform:translatey(0);transform:translatey(0)}50%{-webkit-transform:translatey(-60px);-moz-transform:translatey(-60px);-o-transform:translatey(-60px);transform:translatey(-60px)}}@-webkit-keyframes workerMove{0%,100%{-webkit-transform:translatex(0);transform:translatex(0)}50%{-webkit-transform:translatex(10px);transform:translatex(10px)}}@-moz-keyframes workerMove{0%,100%{-moz-transform:translatex(0);transform:translatex(0)}50%{-moz-transform:translatex(10px);transform:translatex(10px)}}@-o-keyframes workerMove{0%,100%{-o-transform:translatex(0);transform:translatex(0)}50%{-o-transform:translatex(10px);transform:translatex(10px)}}@keyframes workerMove{0%,100%{-webkit-transform:translatex(0);-moz-transform:translatex(0);-o-transform:translatex(0);transform:translatex(0)}50%{-webkit-transform:translatex(10px);-moz-transform:translatex(10px);-o-transform:translatex(10px);transform:translatex(10px)}}@-webkit-keyframes toolFloat{0%,100%{-webkit-transform:translatey(0);transform:translatey(0)}50%{-webkit-transform:translatey(-10px);transform:translatey(-10px)}}@-moz-keyframes toolFloat{0%,100%{-moz-transform:translatey(0);transform:translatey(0)}50%{-moz-transform:translatey(-10px);transform:translatey(-10px)}}@-o-keyframes toolFloat{0%,100%{-o-transform:translatey(0);transform:translatey(0)}50%{-o-transform:translatey(-10px);transform:translatey(-10px)}}@keyframes toolFloat{0%,100%{-webkit-transform:translatey(0);-moz-transform:translatey(0);-o-transform:translatey(0);transform:translatey(0)}50%{-webkit-transform:translatey(-10px);-moz-transform:translatey(-10px);-o-transform:translatey(-10px);transform:translatey(-10px)}}@-webkit-keyframes blink{0%,100%{opacity:.3;-webkit-transform:scale(.9);transform:scale(.9)}50%{opacity:1;-webkit-transform:scale(1.2);transform:scale(1.2)}}@-moz-keyframes blink{0%,100%{opacity:.3;-moz-transform:scale(.9);transform:scale(.9)}50%{opacity:1;-moz-transform:scale(1.2);transform:scale(1.2)}}@-o-keyframes blink{0%,100%{opacity:.3;-o-transform:scale(.9);transform:scale(.9)}50%{opacity:1;-o-transform:scale(1.2);transform:scale(1.2)}}@keyframes blink{0%,100%{opacity:.3;-webkit-transform:scale(.9);-moz-transform:scale(.9);-o-transform:scale(.9);transform:scale(.9)}50%{opacity:1;-webkit-transform:scale(1.2);-moz-transform:scale(1.2);-o-transform:scale(1.2);transform:scale(1.2)}}@-webkit-keyframes float{0%,100%{-webkit-transform:translatey(0);transform:translatey(0)}50%{-webkit-transform:translatey(-8px);transform:translatey(-8px)}}@-moz-keyframes float{0%,100%{-moz-transform:translatey(0);transform:translatey(0)}50%{-moz-transform:translatey(-8px);transform:translatey(-8px)}}@-o-keyframes float{0%,100%{-o-transform:translatey(0);transform:translatey(0)}50%{-o-transform:translatey(-8px);transform:translatey(-8px)}}@keyframes float{0%,100%{-webkit-transform:translatey(0);-moz-transform:translatey(0);-o-transform:translatey(0);transform:translatey(0)}50%{-webkit-transform:translatey(-8px);-moz-transform:translatey(-8px);-o-transform:translatey(-8px);transform:translatey(-8px)}}@-webkit-keyframes gridMove{from{background-position:0 0}to{background-position:40px 40px}}@-moz-keyframes gridMove{from{background-position:0 0}to{background-position:40px 40px}}@-o-keyframes gridMove{from{background-position:0 0}to{background-position:40px 40px}}@keyframes gridMove{from{background-position:0 0}to{background-position:40px 40px}}"})]})}function p(){return(0,i.jsxs)("div",{className:"jsx-34f8c9c727ed2ded training-scene",children:[i.jsx("div",{className:"jsx-34f8c9c727ed2ded grid"}),(0,i.jsxs)("div",{className:"jsx-34f8c9c727ed2ded machine",children:[i.jsx("div",{className:"jsx-34f8c9c727ed2ded screen"}),i.jsx("div",{className:"jsx-34f8c9c727ed2ded button b1"}),i.jsx("div",{className:"jsx-34f8c9c727ed2ded button b2"}),i.jsx("div",{className:"jsx-34f8c9c727ed2ded button b3"})]}),(0,i.jsxs)("div",{className:"jsx-34f8c9c727ed2ded trainer",children:[i.jsx("div",{className:"jsx-34f8c9c727ed2ded head"}),i.jsx("div",{className:"jsx-34f8c9c727ed2ded body"}),i.jsx("div",{className:"jsx-34f8c9c727ed2ded arm"})]}),(0,i.jsxs)("div",{className:"jsx-34f8c9c727ed2ded operator",children:[i.jsx("div",{className:"jsx-34f8c9c727ed2ded head"}),i.jsx("div",{className:"jsx-34f8c9c727ed2ded body"})]}),(0,i.jsxs)("div",{className:"jsx-34f8c9c727ed2ded instruction",children:[i.jsx("div",{className:"jsx-34f8c9c727ed2ded title",children:"TRAINING"}),i.jsx("div",{className:"jsx-34f8c9c727ed2ded line done"}),i.jsx("div",{className:"jsx-34f8c9c727ed2ded line done"}),i.jsx("div",{className:"jsx-34f8c9c727ed2ded line active"}),i.jsx("div",{className:"jsx-34f8c9c727ed2ded line"})]}),i.jsx("div",{className:"jsx-34f8c9c727ed2ded icon icon1",children:"\uD83D\uDCD6"}),i.jsx("div",{className:"jsx-34f8c9c727ed2ded icon icon2",children:"⚙️"}),i.jsx("div",{className:"jsx-34f8c9c727ed2ded icon icon3",children:"\uD83D\uDEE0️"}),i.jsx("div",{className:"jsx-34f8c9c727ed2ded icon icon4",children:"✅"}),i.jsx("div",{className:"jsx-34f8c9c727ed2ded checkpoint c1"}),i.jsx("div",{className:"jsx-34f8c9c727ed2ded checkpoint c2"}),i.jsx("div",{className:"jsx-34f8c9c727ed2ded checkpoint c3"}),i.jsx("div",{className:"jsx-34f8c9c727ed2ded label l1",children:"OPERATOR TRAINING"}),i.jsx("div",{className:"jsx-34f8c9c727ed2ded label l2",children:"SAFETY PROCEDURE"}),i.jsx("div",{className:"jsx-34f8c9c727ed2ded label l3",children:"MACHINE DEMO"}),i.jsx(n(),{id:"34f8c9c727ed2ded",children:".training-scene.jsx-34f8c9c727ed2ded{position:absolute;inset:0;overflow:hidden;-webkit-border-radius:24px;-moz-border-radius:24px;border-radius:24px;background:-webkit-linear-gradient(top,#0f1d30,#09111b);background:-moz-linear-gradient(top,#0f1d30,#09111b);background:-o-linear-gradient(top,#0f1d30,#09111b);background:linear-gradient(180deg,#0f1d30,#09111b)}.grid.jsx-34f8c9c727ed2ded{position:absolute;inset:0;background-image:-webkit-linear-gradient(rgba(255,255,255,.05)1px,transparent 1px),-webkit-linear-gradient(left,rgba(255,255,255,.05)1px,transparent 1px);background-image:-moz-linear-gradient(rgba(255,255,255,.05)1px,transparent 1px),-moz-linear-gradient(left,rgba(255,255,255,.05)1px,transparent 1px);background-image:-o-linear-gradient(rgba(255,255,255,.05)1px,transparent 1px),-o-linear-gradient(left,rgba(255,255,255,.05)1px,transparent 1px);background-image:linear-gradient(rgba(255,255,255,.05)1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.05)1px,transparent 1px);-webkit-background-size:40px 40px;-moz-background-size:40px 40px;-o-background-size:40px 40px;background-size:40px 40px;-webkit-animation:gridMove 12s linear infinite;-moz-animation:gridMove 12s linear infinite;-o-animation:gridMove 12s linear infinite;animation:gridMove 12s linear infinite}.machine.jsx-34f8c9c727ed2ded{position:absolute;right:12%;top:22%;width:240px;height:180px;background:#334155;-webkit-border-radius:12px;-moz-border-radius:12px;border-radius:12px;border:2px solid#60a5fa}.screen.jsx-34f8c9c727ed2ded{position:absolute;left:30px;top:25px;width:180px;height:80px;background:#0ea5e9;-webkit-border-radius:8px;-moz-border-radius:8px;border-radius:8px;-webkit-animation:screenGlow 2s infinite;-moz-animation:screenGlow 2s infinite;-o-animation:screenGlow 2s infinite;animation:screenGlow 2s infinite}.button.jsx-34f8c9c727ed2ded{position:absolute;bottom:25px;width:16px;height:16px;-webkit-border-radius:50%;-moz-border-radius:50%;border-radius:50%;background:#22c55e;-webkit-animation:blink 1.5s infinite;-moz-animation:blink 1.5s infinite;-o-animation:blink 1.5s infinite;animation:blink 1.5s infinite}.b1.jsx-34f8c9c727ed2ded{left:55px}.b2.jsx-34f8c9c727ed2ded{left:90px;-webkit-animation-delay:.5s;-moz-animation-delay:.5s;-o-animation-delay:.5s;animation-delay:.5s}.b3.jsx-34f8c9c727ed2ded{left:125px;-webkit-animation-delay:1s;-moz-animation-delay:1s;-o-animation-delay:1s;animation-delay:1s}.trainer.jsx-34f8c9c727ed2ded,.operator.jsx-34f8c9c727ed2ded{position:absolute;width:36px;height:90px;bottom:80px}.trainer.jsx-34f8c9c727ed2ded{left:22%;-webkit-animation:trainerMove 2s ease-in-out infinite;-moz-animation:trainerMove 2s ease-in-out infinite;-o-animation:trainerMove 2s ease-in-out infinite;animation:trainerMove 2s ease-in-out infinite}.operator.jsx-34f8c9c727ed2ded{left:35%}.head.jsx-34f8c9c727ed2ded{width:20px;height:20px;-webkit-border-radius:50%;-moz-border-radius:50%;border-radius:50%;background:#fde68a;margin:auto}.body.jsx-34f8c9c727ed2ded{width:14px;height:45px;background:#60a5fa;margin:4px auto}.arm.jsx-34f8c9c727ed2ded{width:40px;height:5px;background:#fde68a;position:absolute;top:36px;left:24px;-webkit-transform-origin:left center;-moz-transform-origin:left center;-ms-transform-origin:left center;-o-transform-origin:left center;transform-origin:left center;-webkit-animation:point 2s infinite;-moz-animation:point 2s infinite;-o-animation:point 2s infinite;animation:point 2s infinite}.instruction.jsx-34f8c9c727ed2ded{position:absolute;left:50%;top:18%;-webkit-transform:translatex(-50%);-moz-transform:translatex(-50%);-ms-transform:translatex(-50%);-o-transform:translatex(-50%);transform:translatex(-50%);width:220px;padding:16px;background:rgba(15,23,42,.85);border:1px solid#38bdf8;-webkit-border-radius:12px;-moz-border-radius:12px;border-radius:12px}.title.jsx-34f8c9c727ed2ded{font-size:13px;letter-spacing:3px;margin-bottom:12px;color:#38bdf8;text-align:center}.line.jsx-34f8c9c727ed2ded{height:8px;background:#334155;margin-top:10px;-webkit-border-radius:10px;-moz-border-radius:10px;border-radius:10px}.done.jsx-34f8c9c727ed2ded{background:#22c55e}.active.jsx-34f8c9c727ed2ded{background:#38bdf8;-webkit-animation:progress 2s infinite;-moz-animation:progress 2s infinite;-o-animation:progress 2s infinite;animation:progress 2s infinite}.icon.jsx-34f8c9c727ed2ded{position:absolute;font-size:28px;-webkit-animation:float 4s ease-in-out infinite;-moz-animation:float 4s ease-in-out infinite;-o-animation:float 4s ease-in-out infinite;animation:float 4s ease-in-out infinite}.icon1.jsx-34f8c9c727ed2ded{left:10%;top:16%}.icon2.jsx-34f8c9c727ed2ded{left:74%;top:12%;-webkit-animation-delay:1s;-moz-animation-delay:1s;-o-animation-delay:1s;animation-delay:1s}.icon3.jsx-34f8c9c727ed2ded{left:78%;bottom:18%;-webkit-animation-delay:2s;-moz-animation-delay:2s;-o-animation-delay:2s;animation-delay:2s}.icon4.jsx-34f8c9c727ed2ded{left:18%;bottom:16%;-webkit-animation-delay:3s;-moz-animation-delay:3s;-o-animation-delay:3s;animation-delay:3s}.checkpoint.jsx-34f8c9c727ed2ded{position:absolute;width:12px;height:12px;-webkit-border-radius:50%;-moz-border-radius:50%;border-radius:50%;background:#22c55e;-webkit-box-shadow:0 0 15px#22c55e;-moz-box-shadow:0 0 15px#22c55e;box-shadow:0 0 15px#22c55e;-webkit-animation:pulse 2s infinite;-moz-animation:pulse 2s infinite;-o-animation:pulse 2s infinite;animation:pulse 2s infinite}.c1.jsx-34f8c9c727ed2ded{left:44%;top:28%}.c2.jsx-34f8c9c727ed2ded{left:57%;top:38%;-webkit-animation-delay:.7s;-moz-animation-delay:.7s;-o-animation-delay:.7s;animation-delay:.7s}.c3.jsx-34f8c9c727ed2ded{left:49%;top:56%;-webkit-animation-delay:1.4s;-moz-animation-delay:1.4s;-o-animation-delay:1.4s;animation-delay:1.4s}.label.jsx-34f8c9c727ed2ded{position:absolute;font-size:12px;letter-spacing:3px;color:#cbd5e1;-webkit-animation:float 5s infinite;-moz-animation:float 5s infinite;-o-animation:float 5s infinite;animation:float 5s infinite}.l1.jsx-34f8c9c727ed2ded{left:8%;top:8%}.l2.jsx-34f8c9c727ed2ded{right:10%;top:10%;-webkit-animation-delay:1s;-moz-animation-delay:1s;-o-animation-delay:1s;animation-delay:1s}.l3.jsx-34f8c9c727ed2ded{left:36%;bottom:8%;-webkit-animation-delay:2s;-moz-animation-delay:2s;-o-animation-delay:2s;animation-delay:2s}@-webkit-keyframes trainerMove{0%,100%{-webkit-transform:translatex(0);transform:translatex(0)}50%{-webkit-transform:translatex(10px);transform:translatex(10px)}}@-moz-keyframes trainerMove{0%,100%{-moz-transform:translatex(0);transform:translatex(0)}50%{-moz-transform:translatex(10px);transform:translatex(10px)}}@-o-keyframes trainerMove{0%,100%{-o-transform:translatex(0);transform:translatex(0)}50%{-o-transform:translatex(10px);transform:translatex(10px)}}@keyframes trainerMove{0%,100%{-webkit-transform:translatex(0);-moz-transform:translatex(0);-o-transform:translatex(0);transform:translatex(0)}50%{-webkit-transform:translatex(10px);-moz-transform:translatex(10px);-o-transform:translatex(10px);transform:translatex(10px)}}@-webkit-keyframes point{0%,100%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}50%{-webkit-transform:rotate(-25deg);transform:rotate(-25deg)}}@-moz-keyframes point{0%,100%{-moz-transform:rotate(0deg);transform:rotate(0deg)}50%{-moz-transform:rotate(-25deg);transform:rotate(-25deg)}}@-o-keyframes point{0%,100%{-o-transform:rotate(0deg);transform:rotate(0deg)}50%{-o-transform:rotate(-25deg);transform:rotate(-25deg)}}@keyframes point{0%,100%{-webkit-transform:rotate(0deg);-moz-transform:rotate(0deg);-o-transform:rotate(0deg);transform:rotate(0deg)}50%{-webkit-transform:rotate(-25deg);-moz-transform:rotate(-25deg);-o-transform:rotate(-25deg);transform:rotate(-25deg)}}@-webkit-keyframes progress{0%{width:20%}100%{width:100%}}@-moz-keyframes progress{0%{width:20%}100%{width:100%}}@-o-keyframes progress{0%{width:20%}100%{width:100%}}@keyframes progress{0%{width:20%}100%{width:100%}}@-webkit-keyframes pulse{0%,100%{-webkit-transform:scale(1);transform:scale(1)}50%{-webkit-transform:scale(1.5);transform:scale(1.5)}}@-moz-keyframes pulse{0%,100%{-moz-transform:scale(1);transform:scale(1)}50%{-moz-transform:scale(1.5);transform:scale(1.5)}}@-o-keyframes pulse{0%,100%{-o-transform:scale(1);transform:scale(1)}50%{-o-transform:scale(1.5);transform:scale(1.5)}}@keyframes pulse{0%,100%{-webkit-transform:scale(1);-moz-transform:scale(1);-o-transform:scale(1);transform:scale(1)}50%{-webkit-transform:scale(1.5);-moz-transform:scale(1.5);-o-transform:scale(1.5);transform:scale(1.5)}}@-webkit-keyframes screenGlow{0%,100%{-webkit-box-shadow:0 0 10px#0ea5e9;box-shadow:0 0 10px#0ea5e9}50%{-webkit-box-shadow:0 0 25px#38bdf8;box-shadow:0 0 25px#38bdf8}}@-moz-keyframes screenGlow{0%,100%{-moz-box-shadow:0 0 10px#0ea5e9;box-shadow:0 0 10px#0ea5e9}50%{-moz-box-shadow:0 0 25px#38bdf8;box-shadow:0 0 25px#38bdf8}}@-o-keyframes screenGlow{0%,100%{box-shadow:0 0 10px#0ea5e9}50%{box-shadow:0 0 25px#38bdf8}}@keyframes screenGlow{0%,100%{-webkit-box-shadow:0 0 10px#0ea5e9;-moz-box-shadow:0 0 10px#0ea5e9;box-shadow:0 0 10px#0ea5e9}50%{-webkit-box-shadow:0 0 25px#38bdf8;-moz-box-shadow:0 0 25px#38bdf8;box-shadow:0 0 25px#38bdf8}}@-webkit-keyframes blink{0%,100%{opacity:.4}50%{opacity:1}}@-moz-keyframes blink{0%,100%{opacity:.4}50%{opacity:1}}@-o-keyframes blink{0%,100%{opacity:.4}50%{opacity:1}}@keyframes blink{0%,100%{opacity:.4}50%{opacity:1}}@-webkit-keyframes float{0%,100%{-webkit-transform:translatey(0);transform:translatey(0)}50%{-webkit-transform:translatey(-10px);transform:translatey(-10px)}}@-moz-keyframes float{0%,100%{-moz-transform:translatey(0);transform:translatey(0)}50%{-moz-transform:translatey(-10px);transform:translatey(-10px)}}@-o-keyframes float{0%,100%{-o-transform:translatey(0);transform:translatey(0)}50%{-o-transform:translatey(-10px);transform:translatey(-10px)}}@keyframes float{0%,100%{-webkit-transform:translatey(0);-moz-transform:translatey(0);-o-transform:translatey(0);transform:translatey(0)}50%{-webkit-transform:translatey(-10px);-moz-transform:translatey(-10px);-o-transform:translatey(-10px);transform:translatey(-10px)}}@-webkit-keyframes gridMove{from{background-position:0 0}to{background-position:40px 40px}}@-moz-keyframes gridMove{from{background-position:0 0}to{background-position:40px 40px}}@-o-keyframes gridMove{from{background-position:0 0}to{background-position:40px 40px}}@keyframes gridMove{from{background-position:0 0}to{background-position:40px 40px}}"})]})}function f(){return(0,i.jsxs)("div",{className:"jsx-de408b314d85c817 maintenance-scene",children:[i.jsx("div",{className:"jsx-de408b314d85c817 grid"}),(0,i.jsxs)("div",{className:"jsx-de408b314d85c817 machine",children:[i.jsx("div",{className:"jsx-de408b314d85c817 panel"}),i.jsx("div",{className:"jsx-de408b314d85c817 warning-light"}),i.jsx("div",{className:"jsx-de408b314d85c817 display"})]}),(0,i.jsxs)("div",{className:"jsx-de408b314d85c817 technician",children:[i.jsx("div",{className:"jsx-de408b314d85c817 head"}),i.jsx("div",{className:"jsx-de408b314d85c817 body"}),i.jsx("div",{className:"jsx-de408b314d85c817 arm"}),i.jsx("div",{className:"jsx-de408b314d85c817 tool",children:"\uD83D\uDD27"})]}),i.jsx("div",{className:"jsx-de408b314d85c817 gear",children:i.jsx("div",{className:"jsx-de408b314d85c817 gear-core"})}),i.jsx("div",{className:"jsx-de408b314d85c817 floating tool1",children:"\uD83D\uDEE0️"}),i.jsx("div",{className:"jsx-de408b314d85c817 floating tool2",children:"⚙️"}),i.jsx("div",{className:"jsx-de408b314d85c817 floating tool3",children:"\uD83E\uDE9B"}),(0,i.jsxs)("div",{className:"jsx-de408b314d85c817 checklist",children:[i.jsx("div",{className:"jsx-de408b314d85c817 title",children:"PREVENTIVE MAINTENANCE"}),i.jsx("div",{className:"jsx-de408b314d85c817 item done",children:"✔ Lubrication"}),i.jsx("div",{className:"jsx-de408b314d85c817 item done",children:"✔ Inspection"}),i.jsx("div",{className:"jsx-de408b314d85c817 item active",children:"\uD83D\uDD04 Calibration"}),i.jsx("div",{className:"jsx-de408b314d85c817 item",children:"⏳ Performance Test"})]}),i.jsx("span",{className:"jsx-de408b314d85c817 oil o1"}),i.jsx("span",{className:"jsx-de408b314d85c817 oil o2"}),i.jsx("span",{className:"jsx-de408b314d85c817 oil o3"}),i.jsx("span",{className:"jsx-de408b314d85c817 sensor s1"}),i.jsx("span",{className:"jsx-de408b314d85c817 sensor s2"}),i.jsx("span",{className:"jsx-de408b314d85c817 sensor s3"}),i.jsx("div",{className:"jsx-de408b314d85c817 label l1",children:"MACHINE HEALTH"}),i.jsx("div",{className:"jsx-de408b314d85c817 label l2",children:"LUBRICATION"}),i.jsx("div",{className:"jsx-de408b314d85c817 label l3",children:"INSPECTION"}),i.jsx(n(),{id:"de408b314d85c817",children:'.maintenance-scene.jsx-de408b314d85c817{position:absolute;inset:0;overflow:hidden;-webkit-border-radius:24px;-moz-border-radius:24px;border-radius:24px;background:-webkit-linear-gradient(top,#102033,#08111b);background:-moz-linear-gradient(top,#102033,#08111b);background:-o-linear-gradient(top,#102033,#08111b);background:linear-gradient(180deg,#102033,#08111b)}.grid.jsx-de408b314d85c817{position:absolute;inset:0;background-image:-webkit-linear-gradient(rgba(255,255,255,.05)1px,transparent 1px),-webkit-linear-gradient(left,rgba(255,255,255,.05)1px,transparent 1px);background-image:-moz-linear-gradient(rgba(255,255,255,.05)1px,transparent 1px),-moz-linear-gradient(left,rgba(255,255,255,.05)1px,transparent 1px);background-image:-o-linear-gradient(rgba(255,255,255,.05)1px,transparent 1px),-o-linear-gradient(left,rgba(255,255,255,.05)1px,transparent 1px);background-image:linear-gradient(rgba(255,255,255,.05)1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.05)1px,transparent 1px);-webkit-background-size:40px 40px;-moz-background-size:40px 40px;-o-background-size:40px 40px;background-size:40px 40px;-webkit-animation:gridMove 12s linear infinite;-moz-animation:gridMove 12s linear infinite;-o-animation:gridMove 12s linear infinite;animation:gridMove 12s linear infinite}.machine.jsx-de408b314d85c817{position:absolute;right:10%;top:22%;width:240px;height:180px;background:#334155;border:2px solid#60a5fa;-webkit-border-radius:14px;-moz-border-radius:14px;border-radius:14px}.panel.jsx-de408b314d85c817{position:absolute;left:30px;top:25px;width:180px;height:70px;background:#1e293b;-webkit-border-radius:8px;-moz-border-radius:8px;border-radius:8px}.display.jsx-de408b314d85c817{position:absolute;left:55px;top:45px;width:130px;height:20px;background:#22c55e;-webkit-border-radius:4px;-moz-border-radius:4px;border-radius:4px;-webkit-animation:displayPulse 2s infinite;-moz-animation:displayPulse 2s infinite;-o-animation:displayPulse 2s infinite;animation:displayPulse 2s infinite}.warning-light.jsx-de408b314d85c817{position:absolute;right:18px;top:18px;width:12px;height:12px;-webkit-border-radius:50%;-moz-border-radius:50%;border-radius:50%;background:#f59e0b;-webkit-box-shadow:0 0 10px#f59e0b;-moz-box-shadow:0 0 10px#f59e0b;box-shadow:0 0 10px#f59e0b;-webkit-animation:blink 1s infinite;-moz-animation:blink 1s infinite;-o-animation:blink 1s infinite;animation:blink 1s infinite}.technician.jsx-de408b314d85c817{position:absolute;left:18%;bottom:70px;width:70px;height:110px}.head.jsx-de408b314d85c817{width:22px;height:22px;background:#fde68a;-webkit-border-radius:50%;-moz-border-radius:50%;border-radius:50%;margin:auto}.body.jsx-de408b314d85c817{width:16px;height:50px;background:#3b82f6;margin:5px auto}.arm.jsx-de408b314d85c817{position:absolute;left:42px;top:36px;width:42px;height:5px;background:#fde68a;-webkit-transform-origin:left;-moz-transform-origin:left;-ms-transform-origin:left;-o-transform-origin:left;transform-origin:left;-webkit-animation:repair 2s infinite;-moz-animation:repair 2s infinite;-o-animation:repair 2s infinite;animation:repair 2s infinite}.tool.jsx-de408b314d85c817{position:absolute;left:72px;top:26px;font-size:22px;-webkit-animation:toolMove 2s infinite;-moz-animation:toolMove 2s infinite;-o-animation:toolMove 2s infinite;animation:toolMove 2s infinite}.gear.jsx-de408b314d85c817{position:absolute;left:48%;top:48%;width:100px;height:100px;margin-left:-50px;margin-top:-50px;-webkit-border-radius:50%;-moz-border-radius:50%;border-radius:50%;border:5px solid#60a5fa;-webkit-animation:spin 8s linear infinite;-moz-animation:spin 8s linear infinite;-o-animation:spin 8s linear infinite;animation:spin 8s linear infinite}.gear.jsx-de408b314d85c817::before{content:"";position:absolute;inset:-10px;border:3px dashed#60a5fa;-webkit-border-radius:50%;-moz-border-radius:50%;border-radius:50%}.gear-core.jsx-de408b314d85c817{position:absolute;left:50%;top:50%;width:24px;height:24px;margin-left:-12px;margin-top:-12px;-webkit-border-radius:50%;-moz-border-radius:50%;border-radius:50%;background:#60a5fa}.checklist.jsx-de408b314d85c817{position:absolute;left:8%;top:12%;width:250px;padding:16px;background:rgba(15,23,42,.85);border:1px solid#38bdf8;-webkit-border-radius:12px;-moz-border-radius:12px;border-radius:12px}.title.jsx-de408b314d85c817{font-size:12px;letter-spacing:2px;color:#38bdf8;margin-bottom:10px}.item.jsx-de408b314d85c817{margin-top:10px;font-size:14px;color:#cbd5e1}.done.jsx-de408b314d85c817{color:#22c55e}.active.jsx-de408b314d85c817{-webkit-animation:flash 1.5s infinite;-moz-animation:flash 1.5s infinite;-o-animation:flash 1.5s infinite;animation:flash 1.5s infinite}.floating.jsx-de408b314d85c817{position:absolute;font-size:26px;-webkit-animation:float 4s infinite ease-in-out;-moz-animation:float 4s infinite ease-in-out;-o-animation:float 4s infinite ease-in-out;animation:float 4s infinite ease-in-out}.tool1.jsx-de408b314d85c817{right:12%;top:12%}.tool2.jsx-de408b314d85c817{left:62%;top:18%;-webkit-animation-delay:1s;-moz-animation-delay:1s;-o-animation-delay:1s;animation-delay:1s}.tool3.jsx-de408b314d85c817{right:20%;bottom:18%;-webkit-animation-delay:2s;-moz-animation-delay:2s;-o-animation-delay:2s;animation-delay:2s}.sensor.jsx-de408b314d85c817{position:absolute;width:10px;height:10px;-webkit-border-radius:50%;-moz-border-radius:50%;border-radius:50%;background:#22c55e;-webkit-box-shadow:0 0 10px#22c55e;-moz-box-shadow:0 0 10px#22c55e;box-shadow:0 0 10px#22c55e;-webkit-animation:pulse 2s infinite;-moz-animation:pulse 2s infinite;-o-animation:pulse 2s infinite;animation:pulse 2s infinite}.s1.jsx-de408b314d85c817{left:40%;top:28%}.s2.jsx-de408b314d85c817{left:62%;top:38%;-webkit-animation-delay:.7s;-moz-animation-delay:.7s;-o-animation-delay:.7s;animation-delay:.7s}.s3.jsx-de408b314d85c817{left:54%;top:64%;-webkit-animation-delay:1.4s;-moz-animation-delay:1.4s;-o-animation-delay:1.4s;animation-delay:1.4s}.oil.jsx-de408b314d85c817{position:absolute;width:8px;height:14px;background:#2563eb;-webkit-border-radius:50%;-moz-border-radius:50%;border-radius:50%;-webkit-animation:drop 3s infinite;-moz-animation:drop 3s infinite;-o-animation:drop 3s infinite;animation:drop 3s infinite}.o1.jsx-de408b314d85c817{left:66%;top:42%}.o2.jsx-de408b314d85c817{left:68%;top:44%;-webkit-animation-delay:.7s;-moz-animation-delay:.7s;-o-animation-delay:.7s;animation-delay:.7s}.o3.jsx-de408b314d85c817{left:70%;top:40%;-webkit-animation-delay:1.4s;-moz-animation-delay:1.4s;-o-animation-delay:1.4s;animation-delay:1.4s}.label.jsx-de408b314d85c817{position:absolute;font-size:12px;letter-spacing:3px;color:#cbd5e1;-webkit-animation:float 5s infinite;-moz-animation:float 5s infinite;-o-animation:float 5s infinite;animation:float 5s infinite}.l1.jsx-de408b314d85c817{left:10%;bottom:10%}.l2.jsx-de408b314d85c817{right:10%;top:10%;-webkit-animation-delay:1s;-moz-animation-delay:1s;-o-animation-delay:1s;animation-delay:1s}.l3.jsx-de408b314d85c817{right:12%;bottom:16%;-webkit-animation-delay:2s;-moz-animation-delay:2s;-o-animation-delay:2s;animation-delay:2s}@-webkit-keyframes spin{to{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@-moz-keyframes spin{to{-moz-transform:rotate(360deg);transform:rotate(360deg)}}@-o-keyframes spin{to{-o-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes spin{to{-webkit-transform:rotate(360deg);-moz-transform:rotate(360deg);-o-transform:rotate(360deg);transform:rotate(360deg)}}@-webkit-keyframes repair{0%,100%{-webkit-transform:rotate(10deg);transform:rotate(10deg)}50%{-webkit-transform:rotate(-35deg);transform:rotate(-35deg)}}@-moz-keyframes repair{0%,100%{-moz-transform:rotate(10deg);transform:rotate(10deg)}50%{-moz-transform:rotate(-35deg);transform:rotate(-35deg)}}@-o-keyframes repair{0%,100%{-o-transform:rotate(10deg);transform:rotate(10deg)}50%{-o-transform:rotate(-35deg);transform:rotate(-35deg)}}@keyframes repair{0%,100%{-webkit-transform:rotate(10deg);-moz-transform:rotate(10deg);-o-transform:rotate(10deg);transform:rotate(10deg)}50%{-webkit-transform:rotate(-35deg);-moz-transform:rotate(-35deg);-o-transform:rotate(-35deg);transform:rotate(-35deg)}}@-webkit-keyframes toolMove{0%,100%{-webkit-transform:translatey(0);transform:translatey(0)}50%{-webkit-transform:translatey(8px);transform:translatey(8px)}}@-moz-keyframes toolMove{0%,100%{-moz-transform:translatey(0);transform:translatey(0)}50%{-moz-transform:translatey(8px);transform:translatey(8px)}}@-o-keyframes toolMove{0%,100%{-o-transform:translatey(0);transform:translatey(0)}50%{-o-transform:translatey(8px);transform:translatey(8px)}}@keyframes toolMove{0%,100%{-webkit-transform:translatey(0);-moz-transform:translatey(0);-o-transform:translatey(0);transform:translatey(0)}50%{-webkit-transform:translatey(8px);-moz-transform:translatey(8px);-o-transform:translatey(8px);transform:translatey(8px)}}@-webkit-keyframes blink{0%,100%{opacity:.4}50%{opacity:1}}@-moz-keyframes blink{0%,100%{opacity:.4}50%{opacity:1}}@-o-keyframes blink{0%,100%{opacity:.4}50%{opacity:1}}@keyframes blink{0%,100%{opacity:.4}50%{opacity:1}}@-webkit-keyframes displayPulse{0%,100%{opacity:.5}50%{opacity:1;-webkit-box-shadow:0 0 12px#22c55e;box-shadow:0 0 12px#22c55e}}@-moz-keyframes displayPulse{0%,100%{opacity:.5}50%{opacity:1;-moz-box-shadow:0 0 12px#22c55e;box-shadow:0 0 12px#22c55e}}@-o-keyframes displayPulse{0%,100%{opacity:.5}50%{opacity:1;box-shadow:0 0 12px#22c55e}}@keyframes displayPulse{0%,100%{opacity:.5}50%{opacity:1;-webkit-box-shadow:0 0 12px#22c55e;-moz-box-shadow:0 0 12px#22c55e;box-shadow:0 0 12px#22c55e}}@-webkit-keyframes flash{0%,100%{opacity:.4}50%{opacity:1}}@-moz-keyframes flash{0%,100%{opacity:.4}50%{opacity:1}}@-o-keyframes flash{0%,100%{opacity:.4}50%{opacity:1}}@keyframes flash{0%,100%{opacity:.4}50%{opacity:1}}@-webkit-keyframes pulse{0%,100%{-webkit-transform:scale(1);transform:scale(1)}50%{-webkit-transform:scale(1.5);transform:scale(1.5)}}@-moz-keyframes pulse{0%,100%{-moz-transform:scale(1);transform:scale(1)}50%{-moz-transform:scale(1.5);transform:scale(1.5)}}@-o-keyframes pulse{0%,100%{-o-transform:scale(1);transform:scale(1)}50%{-o-transform:scale(1.5);transform:scale(1.5)}}@keyframes pulse{0%,100%{-webkit-transform:scale(1);-moz-transform:scale(1);-o-transform:scale(1);transform:scale(1)}50%{-webkit-transform:scale(1.5);-moz-transform:scale(1.5);-o-transform:scale(1.5);transform:scale(1.5)}}@-webkit-keyframes float{0%,100%{-webkit-transform:translatey(0);transform:translatey(0)}50%{-webkit-transform:translatey(-10px);transform:translatey(-10px)}}@-moz-keyframes float{0%,100%{-moz-transform:translatey(0);transform:translatey(0)}50%{-moz-transform:translatey(-10px);transform:translatey(-10px)}}@-o-keyframes float{0%,100%{-o-transform:translatey(0);transform:translatey(0)}50%{-o-transform:translatey(-10px);transform:translatey(-10px)}}@keyframes float{0%,100%{-webkit-transform:translatey(0);-moz-transform:translatey(0);-o-transform:translatey(0);transform:translatey(0)}50%{-webkit-transform:translatey(-10px);-moz-transform:translatey(-10px);-o-transform:translatey(-10px);transform:translatey(-10px)}}@-webkit-keyframes drop{0%{-webkit-transform:translatey(0);transform:translatey(0);opacity:1}100%{-webkit-transform:translatey(30px);transform:translatey(30px);opacity:0}}@-moz-keyframes drop{0%{-moz-transform:translatey(0);transform:translatey(0);opacity:1}100%{-moz-transform:translatey(30px);transform:translatey(30px);opacity:0}}@-o-keyframes drop{0%{-o-transform:translatey(0);transform:translatey(0);opacity:1}100%{-o-transform:translatey(30px);transform:translatey(30px);opacity:0}}@keyframes drop{0%{-webkit-transform:translatey(0);-moz-transform:translatey(0);-o-transform:translatey(0);transform:translatey(0);opacity:1}100%{-webkit-transform:translatey(30px);-moz-transform:translatey(30px);-o-transform:translatey(30px);transform:translatey(30px);opacity:0}}@-webkit-keyframes gridMove{from{background-position:0 0}to{background-position:40px 40px}}@-moz-keyframes gridMove{from{background-position:0 0}to{background-position:40px 40px}}@-o-keyframes gridMove{from{background-position:0 0}to{background-position:40px 40px}}@keyframes gridMove{from{background-position:0 0}to{background-position:40px 40px}}'})]})}function x(){return(0,i.jsxs)("div",{className:"jsx-ab970a20286331c7 annual-service-scene",children:[i.jsx("div",{className:"jsx-ab970a20286331c7 grid"}),(0,i.jsxs)("div",{className:"jsx-ab970a20286331c7 calendar",children:[i.jsx("div",{className:"jsx-ab970a20286331c7 calendar-header",children:"ANNUAL SERVICE"}),i.jsx("div",{className:"jsx-ab970a20286331c7 calendar-grid",children:Array.from({length:35}).map((e,a)=>i.jsx("div",{className:`jsx-ab970a20286331c7 day ${[5,12,19,26].includes(a)?"service":""}`},a))})]}),(0,i.jsxs)("div",{className:"jsx-ab970a20286331c7 engineer",children:[i.jsx("div",{className:"jsx-ab970a20286331c7 head"}),i.jsx("div",{className:"jsx-ab970a20286331c7 body"}),i.jsx("div",{className:"jsx-ab970a20286331c7 arm"}),i.jsx("div",{className:"jsx-ab970a20286331c7 tool",children:"\uD83D\uDD27"})]}),(0,i.jsxs)("div",{className:"jsx-ab970a20286331c7 machine",children:[i.jsx("div",{className:"jsx-ab970a20286331c7 display"}),i.jsx("div",{className:"jsx-ab970a20286331c7 indicator i1"}),i.jsx("div",{className:"jsx-ab970a20286331c7 indicator i2"}),i.jsx("div",{className:"jsx-ab970a20286331c7 indicator i3"})]}),(0,i.jsxs)("div",{className:"jsx-ab970a20286331c7 clock",children:[i.jsx("div",{className:"jsx-ab970a20286331c7 hour"}),i.jsx("div",{className:"jsx-ab970a20286331c7 minute"})]}),i.jsx("div",{className:"jsx-ab970a20286331c7 badge",children:"✔ Scheduled"}),i.jsx("div",{className:"jsx-ab970a20286331c7 icon icon1",children:"\uD83D\uDCC5"}),i.jsx("div",{className:"jsx-ab970a20286331c7 icon icon2",children:"\uD83D\uDEE0️"}),i.jsx("div",{className:"jsx-ab970a20286331c7 icon icon3",children:"⚙️"}),i.jsx("div",{className:"jsx-ab970a20286331c7 icon icon4",children:"\uD83D\uDCCB"}),(0,i.jsxs)("div",{className:"jsx-ab970a20286331c7 timeline",children:[i.jsx("div",{className:"jsx-ab970a20286331c7 line"}),i.jsx("div",{className:"jsx-ab970a20286331c7 point p1"}),i.jsx("div",{className:"jsx-ab970a20286331c7 point p2"}),i.jsx("div",{className:"jsx-ab970a20286331c7 point p3"}),i.jsx("div",{className:"jsx-ab970a20286331c7 point p4"})]}),i.jsx("div",{className:"jsx-ab970a20286331c7 label l1",children:"YEARLY INSPECTION"}),i.jsx("div",{className:"jsx-ab970a20286331c7 label l2",children:"PREVENTIVE SERVICE"}),i.jsx("div",{className:"jsx-ab970a20286331c7 label l3",children:"NEXT VISIT"}),i.jsx(n(),{id:"ab970a20286331c7",children:".annual-service-scene.jsx-ab970a20286331c7{position:absolute;inset:0;overflow:hidden;-webkit-border-radius:24px;-moz-border-radius:24px;border-radius:24px;background:-webkit-linear-gradient(top,#10253b,#08111b);background:-moz-linear-gradient(top,#10253b,#08111b);background:-o-linear-gradient(top,#10253b,#08111b);background:linear-gradient(180deg,#10253b,#08111b)}.grid.jsx-ab970a20286331c7{position:absolute;inset:0;background-image:-webkit-linear-gradient(rgba(255,255,255,.05)1px,transparent 1px),-webkit-linear-gradient(left,rgba(255,255,255,.05)1px,transparent 1px);background-image:-moz-linear-gradient(rgba(255,255,255,.05)1px,transparent 1px),-moz-linear-gradient(left,rgba(255,255,255,.05)1px,transparent 1px);background-image:-o-linear-gradient(rgba(255,255,255,.05)1px,transparent 1px),-o-linear-gradient(left,rgba(255,255,255,.05)1px,transparent 1px);background-image:linear-gradient(rgba(255,255,255,.05)1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.05)1px,transparent 1px);-webkit-background-size:40px 40px;-moz-background-size:40px 40px;-o-background-size:40px 40px;background-size:40px 40px;-webkit-animation:gridMove 14s linear infinite;-moz-animation:gridMove 14s linear infinite;-o-animation:gridMove 14s linear infinite;animation:gridMove 14s linear infinite}.calendar.jsx-ab970a20286331c7{position:absolute;left:8%;top:12%;width:260px;padding:16px;background:#1e293b;border:2px solid#38bdf8;-webkit-border-radius:12px;-moz-border-radius:12px;border-radius:12px}.calendar-header.jsx-ab970a20286331c7{text-align:center;color:#38bdf8;margin-bottom:14px;font-size:13px;letter-spacing:2px}.calendar-grid.jsx-ab970a20286331c7{display:grid;grid-template-columns:repeat(7,1fr);gap:6px}.day.jsx-ab970a20286331c7{height:20px;background:#334155;-webkit-border-radius:4px;-moz-border-radius:4px;border-radius:4px}.service.jsx-ab970a20286331c7{background:#22c55e;-webkit-animation:serviceBlink 2s infinite;-moz-animation:serviceBlink 2s infinite;-o-animation:serviceBlink 2s infinite;animation:serviceBlink 2s infinite}.machine.jsx-ab970a20286331c7{position:absolute;right:12%;top:24%;width:220px;height:170px;background:#334155;-webkit-border-radius:12px;-moz-border-radius:12px;border-radius:12px;border:2px solid#60a5fa}.display.jsx-ab970a20286331c7{position:absolute;left:35px;top:30px;width:150px;height:55px;background:#22c55e;-webkit-border-radius:8px;-moz-border-radius:8px;border-radius:8px;-webkit-animation:displayPulse 2s infinite;-moz-animation:displayPulse 2s infinite;-o-animation:displayPulse 2s infinite;animation:displayPulse 2s infinite}.indicator.jsx-ab970a20286331c7{position:absolute;bottom:28px;width:14px;height:14px;-webkit-border-radius:50%;-moz-border-radius:50%;border-radius:50%;background:#22c55e;-webkit-animation:pulse 2s infinite;-moz-animation:pulse 2s infinite;-o-animation:pulse 2s infinite;animation:pulse 2s infinite}.i1.jsx-ab970a20286331c7{left:55px}.i2.jsx-ab970a20286331c7{left:95px;-webkit-animation-delay:.6s;-moz-animation-delay:.6s;-o-animation-delay:.6s;animation-delay:.6s}.i3.jsx-ab970a20286331c7{left:135px;-webkit-animation-delay:1.2s;-moz-animation-delay:1.2s;-o-animation-delay:1.2s;animation-delay:1.2s}.engineer.jsx-ab970a20286331c7{position:absolute;left:43%;bottom:70px;width:70px;height:110px}.head.jsx-ab970a20286331c7{width:22px;height:22px;-webkit-border-radius:50%;-moz-border-radius:50%;border-radius:50%;background:#fde68a;margin:auto}.body.jsx-ab970a20286331c7{width:16px;height:48px;background:#3b82f6;margin:5px auto}.arm.jsx-ab970a20286331c7{position:absolute;top:36px;left:38px;width:42px;height:5px;background:#fde68a;-webkit-transform-origin:left;-moz-transform-origin:left;-ms-transform-origin:left;-o-transform-origin:left;transform-origin:left;-webkit-animation:repair 2s infinite;-moz-animation:repair 2s infinite;-o-animation:repair 2s infinite;animation:repair 2s infinite}.tool.jsx-ab970a20286331c7{position:absolute;left:68px;top:22px;font-size:22px;-webkit-animation:toolMove 2s infinite;-moz-animation:toolMove 2s infinite;-o-animation:toolMove 2s infinite;animation:toolMove 2s infinite}.clock.jsx-ab970a20286331c7{position:absolute;right:34%;top:14%;width:90px;height:90px;-webkit-border-radius:50%;-moz-border-radius:50%;border-radius:50%;border:4px solid#38bdf8}.hour.jsx-ab970a20286331c7{position:absolute;left:43px;top:22px;width:4px;height:22px;background:white;-webkit-transform-origin:bottom;-moz-transform-origin:bottom;-ms-transform-origin:bottom;-o-transform-origin:bottom;transform-origin:bottom;-webkit-animation:hourRotate 24s linear infinite;-moz-animation:hourRotate 24s linear infinite;-o-animation:hourRotate 24s linear infinite;animation:hourRotate 24s linear infinite}.minute.jsx-ab970a20286331c7{position:absolute;left:43px;top:12px;width:3px;height:34px;background:#38bdf8;-webkit-transform-origin:bottom;-moz-transform-origin:bottom;-ms-transform-origin:bottom;-o-transform-origin:bottom;transform-origin:bottom;-webkit-animation:minuteRotate 6s linear infinite;-moz-animation:minuteRotate 6s linear infinite;-o-animation:minuteRotate 6s linear infinite;animation:minuteRotate 6s linear infinite}.badge.jsx-ab970a20286331c7{position:absolute;right:10%;bottom:16%;padding:12px 20px;background:#22c55e;-webkit-border-radius:30px;-moz-border-radius:30px;border-radius:30px;font-weight:bold;color:white;-webkit-animation:badgePulse 2s infinite;-moz-animation:badgePulse 2s infinite;-o-animation:badgePulse 2s infinite;animation:badgePulse 2s infinite}.icon.jsx-ab970a20286331c7{position:absolute;font-size:26px;-webkit-animation:float 5s infinite ease-in-out;-moz-animation:float 5s infinite ease-in-out;-o-animation:float 5s infinite ease-in-out;animation:float 5s infinite ease-in-out}.icon1.jsx-ab970a20286331c7{left:35%;top:16%}.icon2.jsx-ab970a20286331c7{left:70%;top:12%;-webkit-animation-delay:1s;-moz-animation-delay:1s;-o-animation-delay:1s;animation-delay:1s}.icon3.jsx-ab970a20286331c7{left:62%;bottom:14%;-webkit-animation-delay:2s;-moz-animation-delay:2s;-o-animation-delay:2s;animation-delay:2s}.icon4.jsx-ab970a20286331c7{left:14%;bottom:18%;-webkit-animation-delay:3s;-moz-animation-delay:3s;-o-animation-delay:3s;animation-delay:3s}.timeline.jsx-ab970a20286331c7{position:absolute;left:50%;bottom:32px;-webkit-transform:translatex(-50%);-moz-transform:translatex(-50%);-ms-transform:translatex(-50%);-o-transform:translatex(-50%);transform:translatex(-50%);width:360px}.line.jsx-ab970a20286331c7{height:4px;background:#334155}.point.jsx-ab970a20286331c7{position:absolute;top:-5px;width:14px;height:14px;-webkit-border-radius:50%;-moz-border-radius:50%;border-radius:50%;background:#22c55e;-webkit-animation:pulse 2s infinite;-moz-animation:pulse 2s infinite;-o-animation:pulse 2s infinite;animation:pulse 2s infinite}.p1.jsx-ab970a20286331c7{left:0}.p2.jsx-ab970a20286331c7{left:33%}.p3.jsx-ab970a20286331c7{left:66%}.p4.jsx-ab970a20286331c7{right:0}.label.jsx-ab970a20286331c7{position:absolute;font-size:12px;letter-spacing:3px;color:#cbd5e1;-webkit-animation:float 4s infinite;-moz-animation:float 4s infinite;-o-animation:float 4s infinite;animation:float 4s infinite}.l1.jsx-ab970a20286331c7{left:10%;bottom:8%}.l2.jsx-ab970a20286331c7{right:8%;top:10%;-webkit-animation-delay:1s;-moz-animation-delay:1s;-o-animation-delay:1s;animation-delay:1s}.l3.jsx-ab970a20286331c7{left:46%;top:8%;-webkit-animation-delay:2s;-moz-animation-delay:2s;-o-animation-delay:2s;animation-delay:2s}@-webkit-keyframes pulse{0%,100%{-webkit-transform:scale(1);transform:scale(1)}50%{-webkit-transform:scale(1.4);transform:scale(1.4)}}@-moz-keyframes pulse{0%,100%{-moz-transform:scale(1);transform:scale(1)}50%{-moz-transform:scale(1.4);transform:scale(1.4)}}@-o-keyframes pulse{0%,100%{-o-transform:scale(1);transform:scale(1)}50%{-o-transform:scale(1.4);transform:scale(1.4)}}@keyframes pulse{0%,100%{-webkit-transform:scale(1);-moz-transform:scale(1);-o-transform:scale(1);transform:scale(1)}50%{-webkit-transform:scale(1.4);-moz-transform:scale(1.4);-o-transform:scale(1.4);transform:scale(1.4)}}@-webkit-keyframes serviceBlink{0%,100%{opacity:.5}50%{opacity:1}}@-moz-keyframes serviceBlink{0%,100%{opacity:.5}50%{opacity:1}}@-o-keyframes serviceBlink{0%,100%{opacity:.5}50%{opacity:1}}@keyframes serviceBlink{0%,100%{opacity:.5}50%{opacity:1}}@-webkit-keyframes displayPulse{0%,100%{-webkit-box-shadow:0 0 10px#22c55e;box-shadow:0 0 10px#22c55e}50%{-webkit-box-shadow:0 0 25px#22c55e;box-shadow:0 0 25px#22c55e}}@-moz-keyframes displayPulse{0%,100%{-moz-box-shadow:0 0 10px#22c55e;box-shadow:0 0 10px#22c55e}50%{-moz-box-shadow:0 0 25px#22c55e;box-shadow:0 0 25px#22c55e}}@-o-keyframes displayPulse{0%,100%{box-shadow:0 0 10px#22c55e}50%{box-shadow:0 0 25px#22c55e}}@keyframes displayPulse{0%,100%{-webkit-box-shadow:0 0 10px#22c55e;-moz-box-shadow:0 0 10px#22c55e;box-shadow:0 0 10px#22c55e}50%{-webkit-box-shadow:0 0 25px#22c55e;-moz-box-shadow:0 0 25px#22c55e;box-shadow:0 0 25px#22c55e}}@-webkit-keyframes repair{0%,100%{-webkit-transform:rotate(10deg);transform:rotate(10deg)}50%{-webkit-transform:rotate(-25deg);transform:rotate(-25deg)}}@-moz-keyframes repair{0%,100%{-moz-transform:rotate(10deg);transform:rotate(10deg)}50%{-moz-transform:rotate(-25deg);transform:rotate(-25deg)}}@-o-keyframes repair{0%,100%{-o-transform:rotate(10deg);transform:rotate(10deg)}50%{-o-transform:rotate(-25deg);transform:rotate(-25deg)}}@keyframes repair{0%,100%{-webkit-transform:rotate(10deg);-moz-transform:rotate(10deg);-o-transform:rotate(10deg);transform:rotate(10deg)}50%{-webkit-transform:rotate(-25deg);-moz-transform:rotate(-25deg);-o-transform:rotate(-25deg);transform:rotate(-25deg)}}@-webkit-keyframes toolMove{0%,100%{-webkit-transform:translatey(0);transform:translatey(0)}50%{-webkit-transform:translatey(8px);transform:translatey(8px)}}@-moz-keyframes toolMove{0%,100%{-moz-transform:translatey(0);transform:translatey(0)}50%{-moz-transform:translatey(8px);transform:translatey(8px)}}@-o-keyframes toolMove{0%,100%{-o-transform:translatey(0);transform:translatey(0)}50%{-o-transform:translatey(8px);transform:translatey(8px)}}@keyframes toolMove{0%,100%{-webkit-transform:translatey(0);-moz-transform:translatey(0);-o-transform:translatey(0);transform:translatey(0)}50%{-webkit-transform:translatey(8px);-moz-transform:translatey(8px);-o-transform:translatey(8px);transform:translatey(8px)}}@-webkit-keyframes hourRotate{to{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@-moz-keyframes hourRotate{to{-moz-transform:rotate(360deg);transform:rotate(360deg)}}@-o-keyframes hourRotate{to{-o-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes hourRotate{to{-webkit-transform:rotate(360deg);-moz-transform:rotate(360deg);-o-transform:rotate(360deg);transform:rotate(360deg)}}@-webkit-keyframes minuteRotate{to{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@-moz-keyframes minuteRotate{to{-moz-transform:rotate(360deg);transform:rotate(360deg)}}@-o-keyframes minuteRotate{to{-o-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes minuteRotate{to{-webkit-transform:rotate(360deg);-moz-transform:rotate(360deg);-o-transform:rotate(360deg);transform:rotate(360deg)}}@-webkit-keyframes badgePulse{0%,100%{-webkit-transform:scale(1);transform:scale(1)}50%{-webkit-transform:scale(1.08);transform:scale(1.08)}}@-moz-keyframes badgePulse{0%,100%{-moz-transform:scale(1);transform:scale(1)}50%{-moz-transform:scale(1.08);transform:scale(1.08)}}@-o-keyframes badgePulse{0%,100%{-o-transform:scale(1);transform:scale(1)}50%{-o-transform:scale(1.08);transform:scale(1.08)}}@keyframes badgePulse{0%,100%{-webkit-transform:scale(1);-moz-transform:scale(1);-o-transform:scale(1);transform:scale(1)}50%{-webkit-transform:scale(1.08);-moz-transform:scale(1.08);-o-transform:scale(1.08);transform:scale(1.08)}}@-webkit-keyframes float{0%,100%{-webkit-transform:translatey(0);transform:translatey(0)}50%{-webkit-transform:translatey(-10px);transform:translatey(-10px)}}@-moz-keyframes float{0%,100%{-moz-transform:translatey(0);transform:translatey(0)}50%{-moz-transform:translatey(-10px);transform:translatey(-10px)}}@-o-keyframes float{0%,100%{-o-transform:translatey(0);transform:translatey(0)}50%{-o-transform:translatey(-10px);transform:translatey(-10px)}}@keyframes float{0%,100%{-webkit-transform:translatey(0);-moz-transform:translatey(0);-o-transform:translatey(0);transform:translatey(0)}50%{-webkit-transform:translatey(-10px);-moz-transform:translatey(-10px);-o-transform:translatey(-10px);transform:translatey(-10px)}}@-webkit-keyframes gridMove{from{background-position:0 0}to{background-position:40px 40px}}@-moz-keyframes gridMove{from{background-position:0 0}to{background-position:40px 40px}}@-o-keyframes gridMove{from{background-position:0 0}to{background-position:40px 40px}}@keyframes gridMove{from{background-position:0 0}to{background-position:40px 40px}}"})]})}function b(){return(0,i.jsxs)("div",{className:"jsx-1958c4855ffdbe34 upgrade-scene",children:[i.jsx("div",{className:"jsx-1958c4855ffdbe34 grid"}),i.jsx("div",{className:"jsx-1958c4855ffdbe34 machine old",children:i.jsx("div",{className:"jsx-1958c4855ffdbe34 screen"})}),i.jsx("div",{className:"jsx-1958c4855ffdbe34 beam",children:i.jsx("div",{className:"jsx-1958c4855ffdbe34 particles"})}),(0,i.jsxs)("div",{className:"jsx-1958c4855ffdbe34 machine modern",children:[i.jsx("div",{className:"jsx-1958c4855ffdbe34 screen"}),(0,i.jsxs)("div",{className:"jsx-1958c4855ffdbe34 wifi",children:[i.jsx("span",{className:"jsx-1958c4855ffdbe34"}),i.jsx("span",{className:"jsx-1958c4855ffdbe34"}),i.jsx("span",{className:"jsx-1958c4855ffdbe34"})]})]}),(0,i.jsxs)("div",{className:"jsx-1958c4855ffdbe34 progress",children:[i.jsx("div",{className:"jsx-1958c4855ffdbe34 title",children:"SYSTEM UPGRADE"}),i.jsx("div",{className:"jsx-1958c4855ffdbe34 bar",children:i.jsx("div",{className:"jsx-1958c4855ffdbe34 fill"})}),i.jsx("div",{className:"jsx-1958c4855ffdbe34 status",children:"Installing firmware..."})]}),i.jsx("div",{className:"jsx-1958c4855ffdbe34 icon cpu",children:"\uD83D\uDCBB"}),i.jsx("div",{className:"jsx-1958c4855ffdbe34 icon chip",children:"\uD83E\uDDE0"}),i.jsx("div",{className:"jsx-1958c4855ffdbe34 icon cloud",children:"☁️"}),i.jsx("div",{className:"jsx-1958c4855ffdbe34 icon ai",children:"⚡"}),i.jsx("span",{className:"jsx-1958c4855ffdbe34 packet p1"}),i.jsx("span",{className:"jsx-1958c4855ffdbe34 packet p2"}),i.jsx("span",{className:"jsx-1958c4855ffdbe34 packet p3"}),i.jsx("span",{className:"jsx-1958c4855ffdbe34 packet p4"}),i.jsx("div",{className:"jsx-1958c4855ffdbe34 label l1",children:"LEGACY SYSTEM"}),i.jsx("div",{className:"jsx-1958c4855ffdbe34 label l2",children:"AI ENABLED"}),i.jsx("div",{className:"jsx-1958c4855ffdbe34 label l3",children:"REMOTE MONITORING"}),i.jsx(n(),{id:"1958c4855ffdbe34",children:".upgrade-scene.jsx-1958c4855ffdbe34{position:absolute;inset:0;overflow:hidden;-webkit-border-radius:24px;-moz-border-radius:24px;border-radius:24px;background:-webkit-linear-gradient(top,#0b1b30,#071018);background:-moz-linear-gradient(top,#0b1b30,#071018);background:-o-linear-gradient(top,#0b1b30,#071018);background:linear-gradient(180deg,#0b1b30,#071018)}.grid.jsx-1958c4855ffdbe34{position:absolute;inset:0;background-image:-webkit-linear-gradient(rgba(255,255,255,.05)1px,transparent 1px),-webkit-linear-gradient(left,rgba(255,255,255,.05)1px,transparent 1px);background-image:-moz-linear-gradient(rgba(255,255,255,.05)1px,transparent 1px),-moz-linear-gradient(left,rgba(255,255,255,.05)1px,transparent 1px);background-image:-o-linear-gradient(rgba(255,255,255,.05)1px,transparent 1px),-o-linear-gradient(left,rgba(255,255,255,.05)1px,transparent 1px);background-image:linear-gradient(rgba(255,255,255,.05)1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.05)1px,transparent 1px);-webkit-background-size:40px 40px;-moz-background-size:40px 40px;-o-background-size:40px 40px;background-size:40px 40px;-webkit-animation:gridMove 14s linear infinite;-moz-animation:gridMove 14s linear infinite;-o-animation:gridMove 14s linear infinite;animation:gridMove 14s linear infinite}.machine.jsx-1958c4855ffdbe34{position:absolute;top:32%;width:160px;height:140px;-webkit-border-radius:12px;-moz-border-radius:12px;border-radius:12px;border:2px solid#38bdf8}.old.jsx-1958c4855ffdbe34{left:10%;background:#374151;opacity:.6}.modern.jsx-1958c4855ffdbe34{right:10%;background:#0f3d62;-webkit-box-shadow:0 0 30px rgba(56,189,248,.45);-moz-box-shadow:0 0 30px rgba(56,189,248,.45);box-shadow:0 0 30px rgba(56,189,248,.45)}.screen.jsx-1958c4855ffdbe34{position:absolute;left:25px;top:22px;width:110px;height:60px;background:#22c55e;-webkit-border-radius:6px;-moz-border-radius:6px;border-radius:6px;-webkit-animation:screenGlow 2s infinite;-moz-animation:screenGlow 2s infinite;-o-animation:screenGlow 2s infinite;animation:screenGlow 2s infinite}.beam.jsx-1958c4855ffdbe34{position:absolute;left:50%;top:50%;width:220px;height:8px;-webkit-transform:translate(-50%,-50%);-moz-transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);-o-transform:translate(-50%,-50%);transform:translate(-50%,-50%);background:-webkit-linear-gradient(left,transparent,#38bdf8,transparent);background:-moz-linear-gradient(left,transparent,#38bdf8,transparent);background:-o-linear-gradient(left,transparent,#38bdf8,transparent);background:linear-gradient(90deg,transparent,#38bdf8,transparent);overflow:hidden}.particles.jsx-1958c4855ffdbe34{position:absolute;inset:0;background:-webkit-repeating-linear-gradient(left,transparent 0 18px,white 18px 22px);background:-moz-repeating-linear-gradient(left,transparent 0 18px,white 18px 22px);background:-o-repeating-linear-gradient(left,transparent 0 18px,white 18px 22px);background:repeating-linear-gradient(90deg,transparent 0 18px,white 18px 22px);-webkit-animation:dataFlow 2s linear infinite;-moz-animation:dataFlow 2s linear infinite;-o-animation:dataFlow 2s linear infinite;animation:dataFlow 2s linear infinite}.progress.jsx-1958c4855ffdbe34{position:absolute;left:50%;top:14%;-webkit-transform:translatex(-50%);-moz-transform:translatex(-50%);-ms-transform:translatex(-50%);-o-transform:translatex(-50%);transform:translatex(-50%);width:260px;padding:16px;background:rgba(15,23,42,.9);border:1px solid#38bdf8;-webkit-border-radius:12px;-moz-border-radius:12px;border-radius:12px}.title.jsx-1958c4855ffdbe34{text-align:center;color:#38bdf8;letter-spacing:3px;font-size:13px}.bar.jsx-1958c4855ffdbe34{margin-top:14px;height:10px;background:#1e293b;-webkit-border-radius:20px;-moz-border-radius:20px;border-radius:20px;overflow:hidden}.fill.jsx-1958c4855ffdbe34{height:100%;width:0;background:#22c55e;-webkit-animation:loading 4s infinite;-moz-animation:loading 4s infinite;-o-animation:loading 4s infinite;animation:loading 4s infinite}.status.jsx-1958c4855ffdbe34{margin-top:10px;font-size:12px;text-align:center;color:#cbd5e1}.wifi.jsx-1958c4855ffdbe34{position:absolute;top:-26px;left:58px}.wifi.jsx-1958c4855ffdbe34 span.jsx-1958c4855ffdbe34{display:block;width:26px;height:26px;border:2px solid#38bdf8;border-color:#38bdf8 transparent transparent transparent;-webkit-border-radius:50%;-moz-border-radius:50%;border-radius:50%;margin-top:-16px;-webkit-animation:wifi 2s infinite;-moz-animation:wifi 2s infinite;-o-animation:wifi 2s infinite;animation:wifi 2s infinite}.wifi.jsx-1958c4855ffdbe34 span.jsx-1958c4855ffdbe34:nth-child(2){-webkit-animation-delay:.4s;-moz-animation-delay:.4s;-o-animation-delay:.4s;animation-delay:.4s}.wifi.jsx-1958c4855ffdbe34 span.jsx-1958c4855ffdbe34:nth-child(3){-webkit-animation-delay:.8s;-moz-animation-delay:.8s;-o-animation-delay:.8s;animation-delay:.8s}.icon.jsx-1958c4855ffdbe34{position:absolute;font-size:28px;-webkit-animation:float 5s infinite ease-in-out;-moz-animation:float 5s infinite ease-in-out;-o-animation:float 5s infinite ease-in-out;animation:float 5s infinite ease-in-out}.cpu.jsx-1958c4855ffdbe34{left:20%;top:15%}.chip.jsx-1958c4855ffdbe34{right:18%;top:18%;-webkit-animation-delay:1s;-moz-animation-delay:1s;-o-animation-delay:1s;animation-delay:1s}.cloud.jsx-1958c4855ffdbe34{left:24%;bottom:18%;-webkit-animation-delay:2s;-moz-animation-delay:2s;-o-animation-delay:2s;animation-delay:2s}.ai.jsx-1958c4855ffdbe34{right:22%;bottom:16%;-webkit-animation-delay:3s;-moz-animation-delay:3s;-o-animation-delay:3s;animation-delay:3s}.packet.jsx-1958c4855ffdbe34{position:absolute;width:8px;height:8px;background:#38bdf8;-webkit-border-radius:50%;-moz-border-radius:50%;border-radius:50%;-webkit-box-shadow:0 0 10px#38bdf8;-moz-box-shadow:0 0 10px#38bdf8;box-shadow:0 0 10px#38bdf8;-webkit-animation:packet 3s linear infinite;-moz-animation:packet 3s linear infinite;-o-animation:packet 3s linear infinite;animation:packet 3s linear infinite}.p1.jsx-1958c4855ffdbe34{top:48%;left:32%}.p2.jsx-1958c4855ffdbe34{top:50%;left:36%;-webkit-animation-delay:.7s;-moz-animation-delay:.7s;-o-animation-delay:.7s;animation-delay:.7s}.p3.jsx-1958c4855ffdbe34{top:46%;left:40%;-webkit-animation-delay:1.4s;-moz-animation-delay:1.4s;-o-animation-delay:1.4s;animation-delay:1.4s}.p4.jsx-1958c4855ffdbe34{top:52%;left:44%;-webkit-animation-delay:2.1s;-moz-animation-delay:2.1s;-o-animation-delay:2.1s;animation-delay:2.1s}.label.jsx-1958c4855ffdbe34{position:absolute;font-size:12px;letter-spacing:3px;color:#cbd5e1;-webkit-animation:float 5s infinite;-moz-animation:float 5s infinite;-o-animation:float 5s infinite;animation:float 5s infinite}.l1.jsx-1958c4855ffdbe34{left:8%;bottom:8%}.l2.jsx-1958c4855ffdbe34{right:8%;bottom:8%;-webkit-animation-delay:1s;-moz-animation-delay:1s;-o-animation-delay:1s;animation-delay:1s}.l3.jsx-1958c4855ffdbe34{left:36%;top:90%;-webkit-animation-delay:2s;-moz-animation-delay:2s;-o-animation-delay:2s;animation-delay:2s}@-webkit-keyframes loading{0%{width:0}100%{width:100%}}@-moz-keyframes loading{0%{width:0}100%{width:100%}}@-o-keyframes loading{0%{width:0}100%{width:100%}}@keyframes loading{0%{width:0}100%{width:100%}}@-webkit-keyframes dataFlow{from{background-position:0}to{background-position:40px}}@-moz-keyframes dataFlow{from{background-position:0}to{background-position:40px}}@-o-keyframes dataFlow{from{background-position:0}to{background-position:40px}}@keyframes dataFlow{from{background-position:0}to{background-position:40px}}@-webkit-keyframes packet{0%{-webkit-transform:translatex(0);transform:translatex(0);opacity:0}20%{opacity:1}100%{-webkit-transform:translatex(360px);transform:translatex(360px);opacity:0}}@-moz-keyframes packet{0%{-moz-transform:translatex(0);transform:translatex(0);opacity:0}20%{opacity:1}100%{-moz-transform:translatex(360px);transform:translatex(360px);opacity:0}}@-o-keyframes packet{0%{-o-transform:translatex(0);transform:translatex(0);opacity:0}20%{opacity:1}100%{-o-transform:translatex(360px);transform:translatex(360px);opacity:0}}@keyframes packet{0%{-webkit-transform:translatex(0);-moz-transform:translatex(0);-o-transform:translatex(0);transform:translatex(0);opacity:0}20%{opacity:1}100%{-webkit-transform:translatex(360px);-moz-transform:translatex(360px);-o-transform:translatex(360px);transform:translatex(360px);opacity:0}}@-webkit-keyframes wifi{0%,100%{opacity:.2}50%{opacity:1}}@-moz-keyframes wifi{0%,100%{opacity:.2}50%{opacity:1}}@-o-keyframes wifi{0%,100%{opacity:.2}50%{opacity:1}}@keyframes wifi{0%,100%{opacity:.2}50%{opacity:1}}@-webkit-keyframes screenGlow{0%,100%{-webkit-box-shadow:0 0 8px#22c55e;box-shadow:0 0 8px#22c55e}50%{-webkit-box-shadow:0 0 20px#22c55e;box-shadow:0 0 20px#22c55e}}@-moz-keyframes screenGlow{0%,100%{-moz-box-shadow:0 0 8px#22c55e;box-shadow:0 0 8px#22c55e}50%{-moz-box-shadow:0 0 20px#22c55e;box-shadow:0 0 20px#22c55e}}@-o-keyframes screenGlow{0%,100%{box-shadow:0 0 8px#22c55e}50%{box-shadow:0 0 20px#22c55e}}@keyframes screenGlow{0%,100%{-webkit-box-shadow:0 0 8px#22c55e;-moz-box-shadow:0 0 8px#22c55e;box-shadow:0 0 8px#22c55e}50%{-webkit-box-shadow:0 0 20px#22c55e;-moz-box-shadow:0 0 20px#22c55e;box-shadow:0 0 20px#22c55e}}@-webkit-keyframes float{0%,100%{-webkit-transform:translatey(0);transform:translatey(0)}50%{-webkit-transform:translatey(-10px);transform:translatey(-10px)}}@-moz-keyframes float{0%,100%{-moz-transform:translatey(0);transform:translatey(0)}50%{-moz-transform:translatey(-10px);transform:translatey(-10px)}}@-o-keyframes float{0%,100%{-o-transform:translatey(0);transform:translatey(0)}50%{-o-transform:translatey(-10px);transform:translatey(-10px)}}@keyframes float{0%,100%{-webkit-transform:translatey(0);-moz-transform:translatey(0);-o-transform:translatey(0);transform:translatey(0)}50%{-webkit-transform:translatey(-10px);-moz-transform:translatey(-10px);-o-transform:translatey(-10px);transform:translatey(-10px)}}@-webkit-keyframes gridMove{from{background-position:0 0}to{background-position:40px 40px}}@-moz-keyframes gridMove{from{background-position:0 0}to{background-position:40px 40px}}@-o-keyframes gridMove{from{background-position:0 0}to{background-position:40px 40px}}@keyframes gridMove{from{background-position:0 0}to{background-position:40px 40px}}"})]})}function g(){return(0,i.jsxs)("div",{className:"jsx-72d7138357721cfe amc-scene",children:[i.jsx("div",{className:"jsx-72d7138357721cfe grid"}),(0,i.jsxs)("div",{className:"jsx-72d7138357721cfe machine",children:[i.jsx("div",{className:"jsx-72d7138357721cfe screen"}),i.jsx("div",{className:"jsx-72d7138357721cfe indicator"})]}),i.jsx("div",{className:"jsx-72d7138357721cfe shield",children:"\uD83D\uDEE1️"}),i.jsx("div",{className:"jsx-72d7138357721cfe connection",children:i.jsx("div",{className:"jsx-72d7138357721cfe flow"})}),(0,i.jsxs)("div",{className:"jsx-72d7138357721cfe dashboard",children:[i.jsx("div",{className:"jsx-72d7138357721cfe title",children:"AMC DASHBOARD"}),i.jsx("div",{className:"jsx-72d7138357721cfe status online",children:"● Machine Online"}),i.jsx("div",{className:"jsx-72d7138357721cfe status",children:"✔ Scheduled Visit"}),i.jsx("div",{className:"jsx-72d7138357721cfe status",children:"✔ Health Check"}),i.jsx("div",{className:"jsx-72d7138357721cfe status",children:"✔ Spare Coverage"}),i.jsx("div",{className:"jsx-72d7138357721cfe status",children:"✔ Remote Support"})]}),i.jsx("div",{className:"jsx-72d7138357721cfe support",children:"24\xd77"}),(0,i.jsxs)("div",{className:"jsx-72d7138357721cfe cycle",children:[i.jsx("div",{className:"jsx-72d7138357721cfe circle"}),i.jsx("div",{className:"jsx-72d7138357721cfe arrow a1"}),i.jsx("div",{className:"jsx-72d7138357721cfe arrow a2"}),i.jsx("div",{className:"jsx-72d7138357721cfe arrow a3"})]}),i.jsx("div",{className:"jsx-72d7138357721cfe icon calendar",children:"\uD83D\uDCC5"}),i.jsx("div",{className:"jsx-72d7138357721cfe icon phone",children:"\uD83C\uDFA7"}),i.jsx("div",{className:"jsx-72d7138357721cfe icon wrench",children:"\uD83D\uDD27"}),i.jsx("div",{className:"jsx-72d7138357721cfe icon analytics",children:"\uD83D\uDCCA"}),i.jsx("div",{className:"jsx-72d7138357721cfe label l1",children:"CONTRACT ACTIVE"}),i.jsx("div",{className:"jsx-72d7138357721cfe label l2",children:"REMOTE MONITORING"}),i.jsx("div",{className:"jsx-72d7138357721cfe label l3",children:"PREVENTIVE SERVICE"}),i.jsx(n(),{id:"72d7138357721cfe",children:".amc-scene.jsx-72d7138357721cfe{position:absolute;inset:0;overflow:hidden;-webkit-border-radius:24px;-moz-border-radius:24px;border-radius:24px;background:-webkit-linear-gradient(top,#0b1d32,#071018);background:-moz-linear-gradient(top,#0b1d32,#071018);background:-o-linear-gradient(top,#0b1d32,#071018);background:linear-gradient(180deg,#0b1d32,#071018)}.grid.jsx-72d7138357721cfe{position:absolute;inset:0;background-image:-webkit-linear-gradient(rgba(255,255,255,.05)1px,transparent 1px),-webkit-linear-gradient(left,rgba(255,255,255,.05)1px,transparent 1px);background-image:-moz-linear-gradient(rgba(255,255,255,.05)1px,transparent 1px),-moz-linear-gradient(left,rgba(255,255,255,.05)1px,transparent 1px);background-image:-o-linear-gradient(rgba(255,255,255,.05)1px,transparent 1px),-o-linear-gradient(left,rgba(255,255,255,.05)1px,transparent 1px);background-image:linear-gradient(rgba(255,255,255,.05)1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.05)1px,transparent 1px);-webkit-background-size:40px 40px;-moz-background-size:40px 40px;-o-background-size:40px 40px;background-size:40px 40px;-webkit-animation:gridMove 15s linear infinite;-moz-animation:gridMove 15s linear infinite;-o-animation:gridMove 15s linear infinite;animation:gridMove 15s linear infinite}.machine.jsx-72d7138357721cfe{position:absolute;left:10%;top:35%;width:160px;height:140px;background:#334155;border:2px solid#38bdf8;-webkit-border-radius:12px;-moz-border-radius:12px;border-radius:12px}.screen.jsx-72d7138357721cfe{position:absolute;left:25px;top:20px;width:110px;height:60px;background:#22c55e;-webkit-border-radius:6px;-moz-border-radius:6px;border-radius:6px;-webkit-animation:glow 2s infinite;-moz-animation:glow 2s infinite;-o-animation:glow 2s infinite;animation:glow 2s infinite}.indicator.jsx-72d7138357721cfe{position:absolute;bottom:22px;left:70px;width:16px;height:16px;-webkit-border-radius:50%;-moz-border-radius:50%;border-radius:50%;background:#22c55e;-webkit-animation:pulse 2s infinite;-moz-animation:pulse 2s infinite;-o-animation:pulse 2s infinite;animation:pulse 2s infinite}.connection.jsx-72d7138357721cfe{position:absolute;left:270px;top:50%;width:180px;height:4px;background:#1e293b;overflow:hidden}.flow.jsx-72d7138357721cfe{width:60px;height:100%;background:#38bdf8;-webkit-animation:dataFlow 2s linear infinite;-moz-animation:dataFlow 2s linear infinite;-o-animation:dataFlow 2s linear infinite;animation:dataFlow 2s linear infinite}.dashboard.jsx-72d7138357721cfe{position:absolute;right:8%;top:18%;width:260px;padding:18px;background:rgba(15,23,42,.9);border:1px solid#38bdf8;-webkit-border-radius:12px;-moz-border-radius:12px;border-radius:12px}.title.jsx-72d7138357721cfe{text-align:center;letter-spacing:2px;color:#38bdf8;margin-bottom:14px}.status.jsx-72d7138357721cfe{margin-top:10px;color:#cbd5e1;font-size:14px}.online.jsx-72d7138357721cfe{color:#22c55e}.shield.jsx-72d7138357721cfe{position:absolute;left:46%;top:26%;font-size:56px;-webkit-animation:float 4s infinite;-moz-animation:float 4s infinite;-o-animation:float 4s infinite;animation:float 4s infinite}.support.jsx-72d7138357721cfe{position:absolute;left:46%;bottom:18%;font-size:34px;font-weight:bold;color:#38bdf8;-webkit-animation:pulse 2s infinite;-moz-animation:pulse 2s infinite;-o-animation:pulse 2s infinite;animation:pulse 2s infinite}.cycle.jsx-72d7138357721cfe{position:absolute;left:42%;top:52%;width:120px;height:120px}.circle.jsx-72d7138357721cfe{width:100%;height:100%;border:3px dashed#22c55e;-webkit-border-radius:50%;-moz-border-radius:50%;border-radius:50%;-webkit-animation:spin 8s linear infinite;-moz-animation:spin 8s linear infinite;-o-animation:spin 8s linear infinite;animation:spin 8s linear infinite}.arrow.jsx-72d7138357721cfe{position:absolute;width:14px;height:14px;background:#22c55e;-webkit-transform:rotate(45deg);-moz-transform:rotate(45deg);-ms-transform:rotate(45deg);-o-transform:rotate(45deg);transform:rotate(45deg)}.a1.jsx-72d7138357721cfe{top:-6px;left:50%}.a2.jsx-72d7138357721cfe{right:-6px;top:50%}.a3.jsx-72d7138357721cfe{left:50%;bottom:-6px}.icon.jsx-72d7138357721cfe{position:absolute;font-size:28px;-webkit-animation:float 5s infinite ease-in-out;-moz-animation:float 5s infinite ease-in-out;-o-animation:float 5s infinite ease-in-out;animation:float 5s infinite ease-in-out}.calendar.jsx-72d7138357721cfe{left:20%;top:14%}.phone.jsx-72d7138357721cfe{right:20%;top:12%;-webkit-animation-delay:1s;-moz-animation-delay:1s;-o-animation-delay:1s;animation-delay:1s}.wrench.jsx-72d7138357721cfe{left:22%;bottom:14%;-webkit-animation-delay:2s;-moz-animation-delay:2s;-o-animation-delay:2s;animation-delay:2s}.analytics.jsx-72d7138357721cfe{right:18%;bottom:16%;-webkit-animation-delay:3s;-moz-animation-delay:3s;-o-animation-delay:3s;animation-delay:3s}.label.jsx-72d7138357721cfe{position:absolute;font-size:12px;letter-spacing:3px;color:#cbd5e1;-webkit-animation:float 5s infinite;-moz-animation:float 5s infinite;-o-animation:float 5s infinite;animation:float 5s infinite}.l1.jsx-72d7138357721cfe{left:8%;bottom:8%}.l2.jsx-72d7138357721cfe{right:8%;bottom:8%;-webkit-animation-delay:1s;-moz-animation-delay:1s;-o-animation-delay:1s;animation-delay:1s}.l3.jsx-72d7138357721cfe{left:36%;top:10%;-webkit-animation-delay:2s;-moz-animation-delay:2s;-o-animation-delay:2s;animation-delay:2s}@-webkit-keyframes spin{to{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@-moz-keyframes spin{to{-moz-transform:rotate(360deg);transform:rotate(360deg)}}@-o-keyframes spin{to{-o-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes spin{to{-webkit-transform:rotate(360deg);-moz-transform:rotate(360deg);-o-transform:rotate(360deg);transform:rotate(360deg)}}@-webkit-keyframes pulse{0%,100%{-webkit-transform:scale(1);transform:scale(1)}50%{-webkit-transform:scale(1.2);transform:scale(1.2)}}@-moz-keyframes pulse{0%,100%{-moz-transform:scale(1);transform:scale(1)}50%{-moz-transform:scale(1.2);transform:scale(1.2)}}@-o-keyframes pulse{0%,100%{-o-transform:scale(1);transform:scale(1)}50%{-o-transform:scale(1.2);transform:scale(1.2)}}@keyframes pulse{0%,100%{-webkit-transform:scale(1);-moz-transform:scale(1);-o-transform:scale(1);transform:scale(1)}50%{-webkit-transform:scale(1.2);-moz-transform:scale(1.2);-o-transform:scale(1.2);transform:scale(1.2)}}@-webkit-keyframes glow{0%,100%{-webkit-box-shadow:0 0 10px#22c55e;box-shadow:0 0 10px#22c55e}50%{-webkit-box-shadow:0 0 24px#22c55e;box-shadow:0 0 24px#22c55e}}@-moz-keyframes glow{0%,100%{-moz-box-shadow:0 0 10px#22c55e;box-shadow:0 0 10px#22c55e}50%{-moz-box-shadow:0 0 24px#22c55e;box-shadow:0 0 24px#22c55e}}@-o-keyframes glow{0%,100%{box-shadow:0 0 10px#22c55e}50%{box-shadow:0 0 24px#22c55e}}@keyframes glow{0%,100%{-webkit-box-shadow:0 0 10px#22c55e;-moz-box-shadow:0 0 10px#22c55e;box-shadow:0 0 10px#22c55e}50%{-webkit-box-shadow:0 0 24px#22c55e;-moz-box-shadow:0 0 24px#22c55e;box-shadow:0 0 24px#22c55e}}@-webkit-keyframes dataFlow{0%{-webkit-transform:translatex(-70px);transform:translatex(-70px)}100%{-webkit-transform:translatex(190px);transform:translatex(190px)}}@-moz-keyframes dataFlow{0%{-moz-transform:translatex(-70px);transform:translatex(-70px)}100%{-moz-transform:translatex(190px);transform:translatex(190px)}}@-o-keyframes dataFlow{0%{-o-transform:translatex(-70px);transform:translatex(-70px)}100%{-o-transform:translatex(190px);transform:translatex(190px)}}@keyframes dataFlow{0%{-webkit-transform:translatex(-70px);-moz-transform:translatex(-70px);-o-transform:translatex(-70px);transform:translatex(-70px)}100%{-webkit-transform:translatex(190px);-moz-transform:translatex(190px);-o-transform:translatex(190px);transform:translatex(190px)}}@-webkit-keyframes float{0%,100%{-webkit-transform:translatey(0);transform:translatey(0)}50%{-webkit-transform:translatey(-10px);transform:translatey(-10px)}}@-moz-keyframes float{0%,100%{-moz-transform:translatey(0);transform:translatey(0)}50%{-moz-transform:translatey(-10px);transform:translatey(-10px)}}@-o-keyframes float{0%,100%{-o-transform:translatey(0);transform:translatey(0)}50%{-o-transform:translatey(-10px);transform:translatey(-10px)}}@keyframes float{0%,100%{-webkit-transform:translatey(0);-moz-transform:translatey(0);-o-transform:translatey(0);transform:translatey(0)}50%{-webkit-transform:translatey(-10px);-moz-transform:translatey(-10px);-o-transform:translatey(-10px);transform:translatey(-10px)}}@-webkit-keyframes gridMove{from{background-position:0 0}to{background-position:40px 40px}}@-moz-keyframes gridMove{from{background-position:0 0}to{background-position:40px 40px}}@-o-keyframes gridMove{from{background-position:0 0}to{background-position:40px 40px}}@keyframes gridMove{from{background-position:0 0}to{background-position:40px 40px}}"})]})}function u(){return(0,i.jsxs)("div",{className:"jsx-b13e1e9a5cdb933c spare-scene",children:[i.jsx("div",{className:"jsx-b13e1e9a5cdb933c grid"}),(0,i.jsxs)("div",{className:"jsx-b13e1e9a5cdb933c rack",children:[(0,i.jsxs)("div",{className:"jsx-b13e1e9a5cdb933c shelf s1",children:[i.jsx("div",{className:"jsx-b13e1e9a5cdb933c box red"}),i.jsx("div",{className:"jsx-b13e1e9a5cdb933c box blue"}),i.jsx("div",{className:"jsx-b13e1e9a5cdb933c box green"})]}),(0,i.jsxs)("div",{className:"jsx-b13e1e9a5cdb933c shelf s2",children:[i.jsx("div",{className:"jsx-b13e1e9a5cdb933c gear"}),i.jsx("div",{className:"jsx-b13e1e9a5cdb933c motor"}),i.jsx("div",{className:"jsx-b13e1e9a5cdb933c bearing"})]}),(0,i.jsxs)("div",{className:"jsx-b13e1e9a5cdb933c shelf s3",children:[i.jsx("div",{className:"jsx-b13e1e9a5cdb933c box blue"}),i.jsx("div",{className:"jsx-b13e1e9a5cdb933c box red"}),i.jsx("div",{className:"jsx-b13e1e9a5cdb933c box green"})]})]}),(0,i.jsxs)("div",{className:"jsx-b13e1e9a5cdb933c conveyor",children:[i.jsx("div",{className:"jsx-b13e1e9a5cdb933c belt"}),i.jsx("div",{className:"jsx-b13e1e9a5cdb933c part p1",children:"⚙️"}),i.jsx("div",{className:"jsx-b13e1e9a5cdb933c part p2",children:"\uD83D\uDD29"}),i.jsx("div",{className:"jsx-b13e1e9a5cdb933c part p3",children:"\uD83D\uDEDE"})]}),(0,i.jsxs)("div",{className:"jsx-b13e1e9a5cdb933c panel",children:[i.jsx("div",{className:"jsx-b13e1e9a5cdb933c title",children:"INVENTORY"}),i.jsx("div",{className:"jsx-b13e1e9a5cdb933c row ok",children:"✔ Bearings"}),i.jsx("div",{className:"jsx-b13e1e9a5cdb933c row ok",children:"✔ Motors"}),i.jsx("div",{className:"jsx-b13e1e9a5cdb933c row ok",children:"✔ Sensors"}),i.jsx("div",{className:"jsx-b13e1e9a5cdb933c row ok",children:"✔ Belts"}),i.jsx("div",{className:"jsx-b13e1e9a5cdb933c row active",children:"Dispatch Ready"})]}),(0,i.jsxs)("div",{className:"jsx-b13e1e9a5cdb933c truck",children:[i.jsx("div",{className:"jsx-b13e1e9a5cdb933c body"}),i.jsx("div",{className:"jsx-b13e1e9a5cdb933c cab"}),i.jsx("div",{className:"jsx-b13e1e9a5cdb933c wheel w1"}),i.jsx("div",{className:"jsx-b13e1e9a5cdb933c wheel w2"})]}),i.jsx("div",{className:"jsx-b13e1e9a5cdb933c icon i1",children:"\uD83D\uDCE6"}),i.jsx("div",{className:"jsx-b13e1e9a5cdb933c icon i2",children:"⚙️"}),i.jsx("div",{className:"jsx-b13e1e9a5cdb933c icon i3",children:"\uD83D\uDE9A"}),i.jsx("div",{className:"jsx-b13e1e9a5cdb933c icon i4",children:"\uD83D\uDCCB"}),i.jsx("div",{className:"jsx-b13e1e9a5cdb933c label l1",children:"GENUINE PARTS"}),i.jsx("div",{className:"jsx-b13e1e9a5cdb933c label l2",children:"READY STOCK"}),i.jsx("div",{className:"jsx-b13e1e9a5cdb933c label l3",children:"FAST DELIVERY"}),i.jsx(n(),{id:"b13e1e9a5cdb933c",children:'.spare-scene.jsx-b13e1e9a5cdb933c{position:absolute;inset:0;overflow:hidden;-webkit-border-radius:24px;-moz-border-radius:24px;border-radius:24px;background:-webkit-linear-gradient(top,#0b1d32,#071018);background:-moz-linear-gradient(top,#0b1d32,#071018);background:-o-linear-gradient(top,#0b1d32,#071018);background:linear-gradient(180deg,#0b1d32,#071018)}.grid.jsx-b13e1e9a5cdb933c{position:absolute;inset:0;background-image:-webkit-linear-gradient(rgba(255,255,255,.05)1px,transparent 1px),-webkit-linear-gradient(left,rgba(255,255,255,.05)1px,transparent 1px);background-image:-moz-linear-gradient(rgba(255,255,255,.05)1px,transparent 1px),-moz-linear-gradient(left,rgba(255,255,255,.05)1px,transparent 1px);background-image:-o-linear-gradient(rgba(255,255,255,.05)1px,transparent 1px),-o-linear-gradient(left,rgba(255,255,255,.05)1px,transparent 1px);background-image:linear-gradient(rgba(255,255,255,.05)1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.05)1px,transparent 1px);-webkit-background-size:40px 40px;-moz-background-size:40px 40px;-o-background-size:40px 40px;background-size:40px 40px;-webkit-animation:gridMove 14s linear infinite;-moz-animation:gridMove 14s linear infinite;-o-animation:gridMove 14s linear infinite;animation:gridMove 14s linear infinite}.rack.jsx-b13e1e9a5cdb933c{position:absolute;left:8%;top:18%;width:240px;height:220px;border:3px solid#64748b;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:justify;-webkit-justify-content:space-between;-moz-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;padding:12px}.shelf.jsx-b13e1e9a5cdb933c{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-justify-content:space-around;-ms-flex-pack:distribute;justify-content:space-around;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;height:55px;border-top:2px solid#64748b}.box.jsx-b13e1e9a5cdb933c{width:34px;height:34px;-webkit-border-radius:6px;-moz-border-radius:6px;border-radius:6px;-webkit-animation:float 3s infinite;-moz-animation:float 3s infinite;-o-animation:float 3s infinite;animation:float 3s infinite}.red.jsx-b13e1e9a5cdb933c{background:#ef4444}.blue.jsx-b13e1e9a5cdb933c{background:#3b82f6}.green.jsx-b13e1e9a5cdb933c{background:#22c55e}.gear.jsx-b13e1e9a5cdb933c,.motor.jsx-b13e1e9a5cdb933c,.bearing.jsx-b13e1e9a5cdb933c{font-size:28px;-webkit-animation:float 4s infinite;-moz-animation:float 4s infinite;-o-animation:float 4s infinite;animation:float 4s infinite}.gear.jsx-b13e1e9a5cdb933c::before{content:"⚙️"}.motor.jsx-b13e1e9a5cdb933c::before{content:"\uD83D\uDD0B"}.bearing.jsx-b13e1e9a5cdb933c::before{content:"\uD83D\uDEDE"}.conveyor.jsx-b13e1e9a5cdb933c{position:absolute;left:32%;bottom:18%;width:360px;height:40px}.belt.jsx-b13e1e9a5cdb933c{height:100%;background:#334155;-webkit-border-radius:20px;-moz-border-radius:20px;border-radius:20px;overflow:hidden}.belt.jsx-b13e1e9a5cdb933c::after{content:"";display:block;height:100%;width:200%;background:-webkit-repeating-linear-gradient(left,#475569 0 20px,#334155 20px 40px);background:-moz-repeating-linear-gradient(left,#475569 0 20px,#334155 20px 40px);background:-o-repeating-linear-gradient(left,#475569 0 20px,#334155 20px 40px);background:repeating-linear-gradient(90deg,#475569 0 20px,#334155 20px 40px);-webkit-animation:beltMove 2s linear infinite;-moz-animation:beltMove 2s linear infinite;-o-animation:beltMove 2s linear infinite;animation:beltMove 2s linear infinite}.part.jsx-b13e1e9a5cdb933c{position:absolute;top:-8px;font-size:28px;-webkit-animation:movePart 6s linear infinite;-moz-animation:movePart 6s linear infinite;-o-animation:movePart 6s linear infinite;animation:movePart 6s linear infinite}.p2.jsx-b13e1e9a5cdb933c{-webkit-animation-delay:2s;-moz-animation-delay:2s;-o-animation-delay:2s;animation-delay:2s}.p3.jsx-b13e1e9a5cdb933c{-webkit-animation-delay:4s;-moz-animation-delay:4s;-o-animation-delay:4s;animation-delay:4s}.panel.jsx-b13e1e9a5cdb933c{position:absolute;right:8%;top:18%;width:250px;padding:18px;background:rgba(15,23,42,.9);border:1px solid#38bdf8;-webkit-border-radius:12px;-moz-border-radius:12px;border-radius:12px}.title.jsx-b13e1e9a5cdb933c{text-align:center;color:#38bdf8;letter-spacing:2px;margin-bottom:12px}.row.jsx-b13e1e9a5cdb933c{margin-top:10px;font-size:14px;color:#cbd5e1}.ok.jsx-b13e1e9a5cdb933c{color:#22c55e}.active.jsx-b13e1e9a5cdb933c{color:#38bdf8;-webkit-animation:pulse 2s infinite;-moz-animation:pulse 2s infinite;-o-animation:pulse 2s infinite;animation:pulse 2s infinite}.truck.jsx-b13e1e9a5cdb933c{position:absolute;right:12%;bottom:12%;width:120px;height:60px;-webkit-animation:drive 5s ease-in-out infinite;-moz-animation:drive 5s ease-in-out infinite;-o-animation:drive 5s ease-in-out infinite;animation:drive 5s ease-in-out infinite}.body.jsx-b13e1e9a5cdb933c{position:absolute;left:0;top:10px;width:70px;height:35px;background:#3b82f6}.cab.jsx-b13e1e9a5cdb933c{position:absolute;right:0;top:18px;width:38px;height:27px;background:#60a5fa}.wheel.jsx-b13e1e9a5cdb933c{position:absolute;bottom:0;width:18px;height:18px;background:#111827;-webkit-border-radius:50%;-moz-border-radius:50%;border-radius:50%;-webkit-animation:spin 1s linear infinite;-moz-animation:spin 1s linear infinite;-o-animation:spin 1s linear infinite;animation:spin 1s linear infinite}.w1.jsx-b13e1e9a5cdb933c{left:12px}.w2.jsx-b13e1e9a5cdb933c{right:10px}.icon.jsx-b13e1e9a5cdb933c{position:absolute;font-size:28px;-webkit-animation:float 5s infinite;-moz-animation:float 5s infinite;-o-animation:float 5s infinite;animation:float 5s infinite}.i1.jsx-b13e1e9a5cdb933c{left:20%;top:10%}.i2.jsx-b13e1e9a5cdb933c{left:50%;top:12%;-webkit-animation-delay:1s;-moz-animation-delay:1s;-o-animation-delay:1s;animation-delay:1s}.i3.jsx-b13e1e9a5cdb933c{right:16%;top:10%;-webkit-animation-delay:2s;-moz-animation-delay:2s;-o-animation-delay:2s;animation-delay:2s}.i4.jsx-b13e1e9a5cdb933c{left:62%;bottom:8%;-webkit-animation-delay:3s;-moz-animation-delay:3s;-o-animation-delay:3s;animation-delay:3s}.label.jsx-b13e1e9a5cdb933c{position:absolute;font-size:12px;letter-spacing:3px;color:#cbd5e1;-webkit-animation:float 5s infinite;-moz-animation:float 5s infinite;-o-animation:float 5s infinite;animation:float 5s infinite}.l1.jsx-b13e1e9a5cdb933c{left:8%;bottom:8%}.l2.jsx-b13e1e9a5cdb933c{left:42%;top:8%;-webkit-animation-delay:1s;-moz-animation-delay:1s;-o-animation-delay:1s;animation-delay:1s}.l3.jsx-b13e1e9a5cdb933c{right:8%;bottom:8%;-webkit-animation-delay:2s;-moz-animation-delay:2s;-o-animation-delay:2s;animation-delay:2s}@-webkit-keyframes beltMove{to{-webkit-transform:translatex(-40px);transform:translatex(-40px)}}@-moz-keyframes beltMove{to{-moz-transform:translatex(-40px);transform:translatex(-40px)}}@-o-keyframes beltMove{to{-o-transform:translatex(-40px);transform:translatex(-40px)}}@keyframes beltMove{to{-webkit-transform:translatex(-40px);-moz-transform:translatex(-40px);-o-transform:translatex(-40px);transform:translatex(-40px)}}@-webkit-keyframes movePart{0%{left:0}100%{left:300px}}@-moz-keyframes movePart{0%{left:0}100%{left:300px}}@-o-keyframes movePart{0%{left:0}100%{left:300px}}@keyframes movePart{0%{left:0}100%{left:300px}}@-webkit-keyframes drive{0%,100%{-webkit-transform:translatex(0);transform:translatex(0)}50%{-webkit-transform:translatex(-20px);transform:translatex(-20px)}}@-moz-keyframes drive{0%,100%{-moz-transform:translatex(0);transform:translatex(0)}50%{-moz-transform:translatex(-20px);transform:translatex(-20px)}}@-o-keyframes drive{0%,100%{-o-transform:translatex(0);transform:translatex(0)}50%{-o-transform:translatex(-20px);transform:translatex(-20px)}}@keyframes drive{0%,100%{-webkit-transform:translatex(0);-moz-transform:translatex(0);-o-transform:translatex(0);transform:translatex(0)}50%{-webkit-transform:translatex(-20px);-moz-transform:translatex(-20px);-o-transform:translatex(-20px);transform:translatex(-20px)}}@-webkit-keyframes spin{to{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@-moz-keyframes spin{to{-moz-transform:rotate(360deg);transform:rotate(360deg)}}@-o-keyframes spin{to{-o-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes spin{to{-webkit-transform:rotate(360deg);-moz-transform:rotate(360deg);-o-transform:rotate(360deg);transform:rotate(360deg)}}@-webkit-keyframes pulse{0%,100%{opacity:.5}50%{opacity:1}}@-moz-keyframes pulse{0%,100%{opacity:.5}50%{opacity:1}}@-o-keyframes pulse{0%,100%{opacity:.5}50%{opacity:1}}@keyframes pulse{0%,100%{opacity:.5}50%{opacity:1}}@-webkit-keyframes float{0%,100%{-webkit-transform:translatey(0);transform:translatey(0)}50%{-webkit-transform:translatey(-10px);transform:translatey(-10px)}}@-moz-keyframes float{0%,100%{-moz-transform:translatey(0);transform:translatey(0)}50%{-moz-transform:translatey(-10px);transform:translatey(-10px)}}@-o-keyframes float{0%,100%{-o-transform:translatey(0);transform:translatey(0)}50%{-o-transform:translatey(-10px);transform:translatey(-10px)}}@keyframes float{0%,100%{-webkit-transform:translatey(0);-moz-transform:translatey(0);-o-transform:translatey(0);transform:translatey(0)}50%{-webkit-transform:translatey(-10px);-moz-transform:translatey(-10px);-o-transform:translatey(-10px);transform:translatey(-10px)}}@-webkit-keyframes gridMove{from{background-position:0 0}to{background-position:40px 40px}}@-moz-keyframes gridMove{from{background-position:0 0}to{background-position:40px 40px}}@-o-keyframes gridMove{from{background-position:0 0}to{background-position:40px 40px}}@keyframes gridMove{from{background-position:0 0}to{background-position:40px 40px}}'})]})}function h(){return(0,i.jsxs)("div",{className:"jsx-1c30e4dd06bad6a5 support-scene",children:[i.jsx("div",{className:"jsx-1c30e4dd06bad6a5 grid"}),(0,i.jsxs)("div",{className:"jsx-1c30e4dd06bad6a5 machine",children:[i.jsx("div",{className:"jsx-1c30e4dd06bad6a5 screen"}),i.jsx("div",{className:"jsx-1c30e4dd06bad6a5 status"})]}),i.jsx("div",{className:"jsx-1c30e4dd06bad6a5 connection",children:i.jsx("div",{className:"jsx-1c30e4dd06bad6a5 signal"})}),(0,i.jsxs)("div",{className:"jsx-1c30e4dd06bad6a5 engineer",children:[i.jsx("div",{className:"jsx-1c30e4dd06bad6a5 avatar"}),i.jsx("div",{className:"jsx-1c30e4dd06bad6a5 headset"})]}),(0,i.jsxs)("div",{className:"jsx-1c30e4dd06bad6a5 dashboard",children:[i.jsx("div",{className:"jsx-1c30e4dd06bad6a5 title",children:"LIVE SUPPORT"}),i.jsx("div",{className:"jsx-1c30e4dd06bad6a5 ticket",children:"Ticket #2048"}),(0,i.jsxs)("div",{className:"jsx-1c30e4dd06bad6a5 progress",children:[i.jsx("div",{className:"jsx-1c30e4dd06bad6a5 step done",children:"✔ Connected"}),i.jsx("div",{className:"jsx-1c30e4dd06bad6a5 step done",children:"✔ Diagnosing"}),i.jsx("div",{className:"jsx-1c30e4dd06bad6a5 step active",children:"\uD83D\uDD04 Resolving"}),i.jsx("div",{className:"jsx-1c30e4dd06bad6a5 step",children:"⏳ Closed"})]})]}),i.jsx("div",{className:"jsx-1c30e4dd06bad6a5 chat",children:"Need help?"}),i.jsx("div",{className:"jsx-1c30e4dd06bad6a5 icon phone",children:"\uD83D\uDCDE"}),i.jsx("div",{className:"jsx-1c30e4dd06bad6a5 icon headset",children:"\uD83C\uDFA7"}),i.jsx("div",{className:"jsx-1c30e4dd06bad6a5 icon laptop",children:"\uD83D\uDCBB"}),i.jsx("div",{className:"jsx-1c30e4dd06bad6a5 icon tools",children:"\uD83D\uDEE0️"}),i.jsx("div",{className:"jsx-1c30e4dd06bad6a5 icon check",children:"✅"}),i.jsx("span",{className:"jsx-1c30e4dd06bad6a5 packet p1"}),i.jsx("span",{className:"jsx-1c30e4dd06bad6a5 packet p2"}),i.jsx("span",{className:"jsx-1c30e4dd06bad6a5 packet p3"}),i.jsx("div",{className:"jsx-1c30e4dd06bad6a5 label l1",children:"REMOTE DIAGNOSTICS"}),i.jsx("div",{className:"jsx-1c30e4dd06bad6a5 label l2",children:"VIDEO ASSISTANCE"}),i.jsx("div",{className:"jsx-1c30e4dd06bad6a5 label l3",children:"ISSUE RESOLVED"}),i.jsx(n(),{id:"1c30e4dd06bad6a5",children:".support-scene.jsx-1c30e4dd06bad6a5{position:absolute;inset:0;overflow:hidden;-webkit-border-radius:24px;-moz-border-radius:24px;border-radius:24px;background:-webkit-linear-gradient(top,#0b1b31,#071018);background:-moz-linear-gradient(top,#0b1b31,#071018);background:-o-linear-gradient(top,#0b1b31,#071018);background:linear-gradient(180deg,#0b1b31,#071018)}.grid.jsx-1c30e4dd06bad6a5{position:absolute;inset:0;background-image:-webkit-linear-gradient(rgba(255,255,255,.05)1px,transparent 1px),-webkit-linear-gradient(left,rgba(255,255,255,.05)1px,transparent 1px);background-image:-moz-linear-gradient(rgba(255,255,255,.05)1px,transparent 1px),-moz-linear-gradient(left,rgba(255,255,255,.05)1px,transparent 1px);background-image:-o-linear-gradient(rgba(255,255,255,.05)1px,transparent 1px),-o-linear-gradient(left,rgba(255,255,255,.05)1px,transparent 1px);background-image:linear-gradient(rgba(255,255,255,.05)1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.05)1px,transparent 1px);-webkit-background-size:40px 40px;-moz-background-size:40px 40px;-o-background-size:40px 40px;background-size:40px 40px;-webkit-animation:gridMove 14s linear infinite;-moz-animation:gridMove 14s linear infinite;-o-animation:gridMove 14s linear infinite;animation:gridMove 14s linear infinite}.machine.jsx-1c30e4dd06bad6a5{position:absolute;left:10%;top:34%;width:170px;height:140px;border:2px solid#38bdf8;background:#334155;-webkit-border-radius:12px;-moz-border-radius:12px;border-radius:12px}.screen.jsx-1c30e4dd06bad6a5{position:absolute;left:28px;top:22px;width:110px;height:58px;background:#22c55e;-webkit-border-radius:6px;-moz-border-radius:6px;border-radius:6px;-webkit-animation:screenGlow 2s infinite;-moz-animation:screenGlow 2s infinite;-o-animation:screenGlow 2s infinite;animation:screenGlow 2s infinite}.status.jsx-1c30e4dd06bad6a5{position:absolute;bottom:20px;left:75px;width:16px;height:16px;background:#22c55e;-webkit-border-radius:50%;-moz-border-radius:50%;border-radius:50%;-webkit-animation:pulse 2s infinite;-moz-animation:pulse 2s infinite;-o-animation:pulse 2s infinite;animation:pulse 2s infinite}.connection.jsx-1c30e4dd06bad6a5{position:absolute;left:270px;top:50%;width:180px;height:4px;background:#1e293b;overflow:hidden}.signal.jsx-1c30e4dd06bad6a5{width:50px;height:100%;background:#38bdf8;-webkit-animation:dataFlow 1.8s linear infinite;-moz-animation:dataFlow 1.8s linear infinite;-o-animation:dataFlow 1.8s linear infinite;animation:dataFlow 1.8s linear infinite}.engineer.jsx-1c30e4dd06bad6a5{position:absolute;left:46%;top:28%;width:110px;height:110px;-webkit-border-radius:50%;-moz-border-radius:50%;border-radius:50%;background:#1e293b;border:3px solid#38bdf8;-webkit-animation:float 4s infinite;-moz-animation:float 4s infinite;-o-animation:float 4s infinite;animation:float 4s infinite}.avatar.jsx-1c30e4dd06bad6a5{position:absolute;left:35px;top:22px;width:40px;height:40px;-webkit-border-radius:50%;-moz-border-radius:50%;border-radius:50%;background:#fde68a}.headset.jsx-1c30e4dd06bad6a5{position:absolute;left:26px;top:16px;width:58px;height:52px;border:4px solid#38bdf8;border-bottom:none;-webkit-border-radius:50%;-moz-border-radius:50%;border-radius:50%}.dashboard.jsx-1c30e4dd06bad6a5{position:absolute;right:8%;top:18%;width:270px;padding:18px;background:rgba(15,23,42,.9);border:1px solid#38bdf8;-webkit-border-radius:12px;-moz-border-radius:12px;border-radius:12px}.title.jsx-1c30e4dd06bad6a5{text-align:center;color:#38bdf8;letter-spacing:2px;margin-bottom:12px}.ticket.jsx-1c30e4dd06bad6a5{color:#22c55e;margin-bottom:12px;font-size:14px}.step.jsx-1c30e4dd06bad6a5{margin-top:10px;color:#cbd5e1;font-size:14px}.done.jsx-1c30e4dd06bad6a5{color:#22c55e}.active.jsx-1c30e4dd06bad6a5{color:#38bdf8;-webkit-animation:pulse 2s infinite;-moz-animation:pulse 2s infinite;-o-animation:pulse 2s infinite;animation:pulse 2s infinite}.chat.jsx-1c30e4dd06bad6a5{position:absolute;left:43%;bottom:18%;padding:10px 16px;background:#38bdf8;-webkit-border-radius:20px;-moz-border-radius:20px;border-radius:20px;color:white;-webkit-animation:float 3s infinite;-moz-animation:float 3s infinite;-o-animation:float 3s infinite;animation:float 3s infinite}.icon.jsx-1c30e4dd06bad6a5{position:absolute;font-size:28px;-webkit-animation:float 5s infinite;-moz-animation:float 5s infinite;-o-animation:float 5s infinite;animation:float 5s infinite}.phone.jsx-1c30e4dd06bad6a5{left:18%;top:12%}.headset.jsx-1c30e4dd06bad6a5{right:18%;top:12%;-webkit-animation-delay:1s;-moz-animation-delay:1s;-o-animation-delay:1s;animation-delay:1s}.laptop.jsx-1c30e4dd06bad6a5{left:60%;bottom:12%;-webkit-animation-delay:2s;-moz-animation-delay:2s;-o-animation-delay:2s;animation-delay:2s}.tools.jsx-1c30e4dd06bad6a5{right:16%;bottom:16%;-webkit-animation-delay:3s;-moz-animation-delay:3s;-o-animation-delay:3s;animation-delay:3s}.check.jsx-1c30e4dd06bad6a5{left:34%;bottom:10%;-webkit-animation-delay:4s;-moz-animation-delay:4s;-o-animation-delay:4s;animation-delay:4s}.packet.jsx-1c30e4dd06bad6a5{position:absolute;width:8px;height:8px;background:#38bdf8;-webkit-border-radius:50%;-moz-border-radius:50%;border-radius:50%;-webkit-box-shadow:0 0 10px#38bdf8;-moz-box-shadow:0 0 10px#38bdf8;box-shadow:0 0 10px#38bdf8;-webkit-animation:packet 2.5s linear infinite;-moz-animation:packet 2.5s linear infinite;-o-animation:packet 2.5s linear infinite;animation:packet 2.5s linear infinite}.p1.jsx-1c30e4dd06bad6a5{left:30%;top:49%}.p2.jsx-1c30e4dd06bad6a5{left:36%;top:51%;-webkit-animation-delay:.8s;-moz-animation-delay:.8s;-o-animation-delay:.8s;animation-delay:.8s}.p3.jsx-1c30e4dd06bad6a5{left:42%;top:49%;-webkit-animation-delay:1.6s;-moz-animation-delay:1.6s;-o-animation-delay:1.6s;animation-delay:1.6s}.label.jsx-1c30e4dd06bad6a5{position:absolute;font-size:12px;letter-spacing:3px;color:#cbd5e1;-webkit-animation:float 5s infinite;-moz-animation:float 5s infinite;-o-animation:float 5s infinite;animation:float 5s infinite}.l1.jsx-1c30e4dd06bad6a5{left:8%;bottom:8%}.l2.jsx-1c30e4dd06bad6a5{right:8%;top:8%;-webkit-animation-delay:1s;-moz-animation-delay:1s;-o-animation-delay:1s;animation-delay:1s}.l3.jsx-1c30e4dd06bad6a5{left:42%;bottom:6%;-webkit-animation-delay:2s;-moz-animation-delay:2s;-o-animation-delay:2s;animation-delay:2s}@-webkit-keyframes dataFlow{0%{-webkit-transform:translatex(-60px);transform:translatex(-60px)}100%{-webkit-transform:translatex(190px);transform:translatex(190px)}}@-moz-keyframes dataFlow{0%{-moz-transform:translatex(-60px);transform:translatex(-60px)}100%{-moz-transform:translatex(190px);transform:translatex(190px)}}@-o-keyframes dataFlow{0%{-o-transform:translatex(-60px);transform:translatex(-60px)}100%{-o-transform:translatex(190px);transform:translatex(190px)}}@keyframes dataFlow{0%{-webkit-transform:translatex(-60px);-moz-transform:translatex(-60px);-o-transform:translatex(-60px);transform:translatex(-60px)}100%{-webkit-transform:translatex(190px);-moz-transform:translatex(190px);-o-transform:translatex(190px);transform:translatex(190px)}}@-webkit-keyframes packet{0%{-webkit-transform:translatex(0);transform:translatex(0);opacity:0}20%{opacity:1}100%{-webkit-transform:translatex(180px);transform:translatex(180px);opacity:0}}@-moz-keyframes packet{0%{-moz-transform:translatex(0);transform:translatex(0);opacity:0}20%{opacity:1}100%{-moz-transform:translatex(180px);transform:translatex(180px);opacity:0}}@-o-keyframes packet{0%{-o-transform:translatex(0);transform:translatex(0);opacity:0}20%{opacity:1}100%{-o-transform:translatex(180px);transform:translatex(180px);opacity:0}}@keyframes packet{0%{-webkit-transform:translatex(0);-moz-transform:translatex(0);-o-transform:translatex(0);transform:translatex(0);opacity:0}20%{opacity:1}100%{-webkit-transform:translatex(180px);-moz-transform:translatex(180px);-o-transform:translatex(180px);transform:translatex(180px);opacity:0}}@-webkit-keyframes pulse{0%,100%{-webkit-transform:scale(1);transform:scale(1)}50%{-webkit-transform:scale(1.2);transform:scale(1.2)}}@-moz-keyframes pulse{0%,100%{-moz-transform:scale(1);transform:scale(1)}50%{-moz-transform:scale(1.2);transform:scale(1.2)}}@-o-keyframes pulse{0%,100%{-o-transform:scale(1);transform:scale(1)}50%{-o-transform:scale(1.2);transform:scale(1.2)}}@keyframes pulse{0%,100%{-webkit-transform:scale(1);-moz-transform:scale(1);-o-transform:scale(1);transform:scale(1)}50%{-webkit-transform:scale(1.2);-moz-transform:scale(1.2);-o-transform:scale(1.2);transform:scale(1.2)}}@-webkit-keyframes screenGlow{0%,100%{-webkit-box-shadow:0 0 10px#22c55e;box-shadow:0 0 10px#22c55e}50%{-webkit-box-shadow:0 0 22px#22c55e;box-shadow:0 0 22px#22c55e}}@-moz-keyframes screenGlow{0%,100%{-moz-box-shadow:0 0 10px#22c55e;box-shadow:0 0 10px#22c55e}50%{-moz-box-shadow:0 0 22px#22c55e;box-shadow:0 0 22px#22c55e}}@-o-keyframes screenGlow{0%,100%{box-shadow:0 0 10px#22c55e}50%{box-shadow:0 0 22px#22c55e}}@keyframes screenGlow{0%,100%{-webkit-box-shadow:0 0 10px#22c55e;-moz-box-shadow:0 0 10px#22c55e;box-shadow:0 0 10px#22c55e}50%{-webkit-box-shadow:0 0 22px#22c55e;-moz-box-shadow:0 0 22px#22c55e;box-shadow:0 0 22px#22c55e}}@-webkit-keyframes float{0%,100%{-webkit-transform:translatey(0);transform:translatey(0)}50%{-webkit-transform:translatey(-10px);transform:translatey(-10px)}}@-moz-keyframes float{0%,100%{-moz-transform:translatey(0);transform:translatey(0)}50%{-moz-transform:translatey(-10px);transform:translatey(-10px)}}@-o-keyframes float{0%,100%{-o-transform:translatey(0);transform:translatey(0)}50%{-o-transform:translatey(-10px);transform:translatey(-10px)}}@keyframes float{0%,100%{-webkit-transform:translatey(0);-moz-transform:translatey(0);-o-transform:translatey(0);transform:translatey(0)}50%{-webkit-transform:translatey(-10px);-moz-transform:translatey(-10px);-o-transform:translatey(-10px);transform:translatey(-10px)}}@-webkit-keyframes gridMove{from{background-position:0 0}to{background-position:40px 40px}}@-moz-keyframes gridMove{from{background-position:0 0}to{background-position:40px 40px}}@-o-keyframes gridMove{from{background-position:0 0}to{background-position:40px 40px}}@keyframes gridMove{from{background-position:0 0}to{background-position:40px 40px}}"})]})}let y=[{id:1,title:"Plant Planning",desc:"Complete factory layout and workflow design",icon:"\uD83D\uDCD0",type:"blueprint"},{id:2,title:"Machine Design",desc:"Custom engineering based on your requirements",icon:"✏️",type:"design"},{id:3,title:"Manufacturing",desc:"In-house fabrication with quality control",icon:"\uD83C\uDFED",type:"fabrication"},{id:4,title:"Testing",desc:"Performance validation and optimization",icon:"✅",type:"testing"},{id:5,title:"Installation",desc:"Complete setup and commissioning",icon:"\uD83D\uDD27",type:"installation"},{id:6,title:"Operator Training",desc:"Comprehensive hands-on training program",icon:"\uD83D\uDC68‍\uD83C\uDFEB",type:"training"},{id:7,title:"Maintenance",desc:"Regular servicing and preventive care",icon:"\uD83D\uDD04",type:"maintenance"},{id:8,title:"Annual Service",desc:"Scheduled maintenance contracts available",icon:"\uD83D\uDCC5",type:"calendar"},{id:9,title:"Machine Upgrade",desc:"Technology updates and capacity expansion",icon:"⬆️",type:"upgrade"},{id:10,title:"AMC",desc:"Comprehensive annual maintenance contracts",icon:"\uD83D\uDEE1️",type:"shield"},{id:11,title:"Spare Parts",desc:"Genuine parts with quick dispatch",icon:"\uD83D\uDD29",type:"parts"},{id:12,title:"Technical Support",desc:"24/7 expert assistance available",icon:"\uD83D\uDCDE",type:"support"}],k=e=>{switch(e){case"blueprint":return i.jsx(o,{});case"design":return i.jsx(l,{});case"fabrication":return i.jsx(c,{});case"testing":return i.jsx(d,{});case"installation":return i.jsx(m,{});case"training":return i.jsx(p,{});case"maintenance":return i.jsx(f,{});case"calendar":return i.jsx(x,{});case"upgrade":return i.jsx(b,{});case"shield":return i.jsx(g,{});case"parts":return i.jsx(u,{});case"support":return i.jsx(h,{});default:return null}};function w(){let[e,a]=(0,r.useState)(0),[t,s]=(0,r.useState)("falling"),[n,o]=(0,r.useState)(!0);(0,r.useEffect)(()=>{let e;if(n)return"falling"===t?e=setTimeout(()=>{s("active")},700):"active"===t?e=setTimeout(()=>{s("vanishing")},3200):"vanishing"===t&&(e=setTimeout(()=>{a(e=>(e+1)%y.length),s("falling")},600)),()=>clearTimeout(e)},[t,n]);let l=y[e],c=e=>{s("vanishing"),setTimeout(()=>{a(e),s("falling")},400)};return(0,i.jsxs)("section",{className:"section bg-card",style:{padding:"4rem 1.5rem",background:"var(--bg-dark)",color:"var(--text-primary)",overflow:"hidden"},children:[(0,i.jsxs)("div",{className:"section-header",style:{textAlign:"center",marginBottom:"2.5rem"},children:[i.jsx("h2",{className:"section-title",style:{fontSize:"2.5rem",fontWeight:"800",color:"var(--text-primary)"},children:"Complete Manufacturing Solutions"}),i.jsx("p",{className:"section-subtitle",style:{color:"var(--text-secondary)",fontSize:"1.1rem",marginTop:"0.5rem"},children:"We don't just sell machines. We provide end-to-end manufacturing partnership."})]}),i.jsx("div",{style:{display:"flex",justifyContent:"center",gap:"0.5rem",maxWidth:"900px",margin:"0 auto 3rem auto",flexWrap:"wrap"},children:y.map((a,t)=>(0,i.jsxs)("button",{onClick:()=>c(t),style:{padding:"0.4rem 0.8rem",borderRadius:"20px",border:t===e?"1px solid var(--accent)":"1px solid var(--border)",background:t===e?"rgba(220, 38, 38, 0.1)":"var(--bg-card)",color:t===e?"var(--accent)":"var(--text-secondary)",fontSize:"0.8rem",fontWeight:"600",cursor:"pointer",transition:"all 0.3s ease",boxShadow:t===e?"0 0 10px rgba(220, 38, 38, 0.15)":"none"},children:["Step ",a.id]},a.id))}),i.jsx("div",{style:{position:"relative",maxWidth:"900px",margin:"0 auto",perspective:"1000px"},className:"solutions-stage-wrap",children:(0,i.jsxs)("div",{className:`stage-card ${t}`,children:[i.jsx("div",{className:"scene-container",children:k(l.type)}),(0,i.jsxs)("div",{className:"content-container",children:[(0,i.jsxs)("div",{style:{background:"linear-gradient(90deg, #dc2626, #ef4444)",padding:"0.3rem 1.2rem",borderRadius:"50px",fontSize:"0.85rem",fontWeight:"bold",letterSpacing:"1.5px",textTransform:"uppercase",color:"#ffffff",marginBottom:"1.5rem",boxShadow:"0 4px 14px rgba(220, 38, 38, 0.4)",display:"inline-block"},children:["STAGE ",l.id," OF 12"]}),i.jsx("h3",{style:{fontSize:"2.2rem",fontWeight:"bold",color:"var(--text-primary)",marginBottom:"1rem"},children:l.title}),i.jsx("p",{style:{color:"var(--text-secondary)",fontSize:"1.1rem",lineHeight:"1.6",margin:0},children:l.desc})]})]})}),(0,i.jsxs)("div",{style:{display:"flex",justifyContent:"center",gap:"0.75rem",marginTop:"2rem",flexWrap:"wrap"},children:[i.jsx("button",{onClick:()=>{s("vanishing"),setTimeout(()=>{a(e=>e>0?e-1:y.length-1),s("falling")},400)},style:{padding:"0.6rem 1.4rem",background:"var(--bg-elevated)",color:"var(--text-primary)",border:"1px solid var(--border)",borderRadius:"10px",cursor:"pointer",fontWeight:"600"},children:"Previous Stage"}),i.jsx("button",{onClick:()=>o(!n),style:{padding:"0.6rem 1.4rem",background:n?"rgba(220, 38, 38, 0.1)":"rgba(22, 163, 74, 0.1)",color:n?"var(--accent)":"var(--success)",border:`1px solid ${n?"var(--accent)":"var(--success)"}`,borderRadius:"10px",cursor:"pointer",fontWeight:"600"},children:n?"Pause Auto Play ⏸":"Play Auto Sequence ▶"}),i.jsx("button",{onClick:()=>{s("vanishing"),setTimeout(()=>{a(e=>(e+1)%y.length),s("falling")},400)},style:{padding:"0.6rem 1.4rem",background:"#dc2626",color:"#fff",border:"none",borderRadius:"10px",cursor:"pointer",fontWeight:"600",boxShadow:"0 4px 12px rgba(220, 38, 38, 0.4)"},children:"Next Stage ➔"})]}),i.jsx("style",{dangerouslySetInnerHTML:{__html:`
        /* Stage Card Dynamic State Transitions */
        .stage-card {
          position: absolute;
          inset: 0;
          display: flex;
          flex-direction: row;
          align-items: stretch;
          background: linear-gradient(145deg, #131c2e 0%, #0d131f 100%);
          border: 1px solid rgba(239, 68, 68, 0.35);
          border-radius: 24px;
          overflow: hidden;
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.7), inset 0 1px 1px rgba(255, 255, 255, 0.1);
          height: 100%;
        }

        .scene-container {
          position: relative;
          flex: 1.3;
          height: 100%;
          overflow: hidden;
        }

        .content-container {
          flex: 0.7;
          padding: 2.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: flex-start;
          text-align: left;
          background: rgba(15, 23, 42, 0.7);
          border-left: 1px solid rgba(59, 130, 246, 0.2);
          z-index: 5;
        }

        .stage-card.falling {
          animation: fallFromAbove 0.7s cubic-bezier(0.175, 0.885, 0.32, 1.27) forwards;
        }

        .stage-card.active {
          transform: translateY(0) scale(1);
          opacity: 1;
        }

        .stage-card.vanishing {
          animation: vanishToBottom 0.6s ease-in forwards;
        }

        /* 1. Fall from top Animation */
        @keyframes fallFromAbove {
          0% {
            opacity: 0;
            transform: translateY(-250px) scale(0.8) rotateX(15deg);
          }
          70% {
            transform: translateY(15px) scale(1.02) rotateX(-5deg);
          }
          100% {
            opacity: 1;
            transform: translateY(0) scale(1) rotateX(0deg);
          }
        }

        /* 2. Vanish down Animation */
        @keyframes vanishToBottom {
          0% {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
          100% {
            opacity: 0;
            transform: translateY(250px) scale(0.85) rotateX(-20deg);
          }
        }

        /* ========================
           MOBILE (< 768px)
           ======================== */
        @media (max-width: 767px) {
          .stage-card {
            flex-direction: column;
          }
          .scene-container {
            flex: none;
            height: 200px;
            width: 100%;
          }
          .content-container {
            flex: 1;
            padding: 1.25rem;
            border-left: none;
            border-top: 1px solid rgba(59, 130, 246, 0.2);
          }
          .solutions-stage-wrap {
            height: 460px;
          }
        }

        /* ========================
           TABLET (768px - 1023px)
           ======================== */
        @media (min-width: 768px) and (max-width: 1023px) {
          .solutions-stage-wrap {
            height: 420px;
          }
          .content-container {
            padding: 2rem 1.5rem;
          }
        }

        /* DESKTOP */
        @media (min-width: 1024px) {
          .solutions-stage-wrap {
            height: 480px;
          }
        }
      `}})]})}},7702:(e,a,t)=>{"use strict";t.r(a),t.d(a,{default:()=>o});var i=t(5344),r=t(3729);t(3297);let s=[!0,!0,!0,!0,!0,!0,!0,!1,!1,!0,!1,!0,!0,!1,!1,!0,!0,!0],n=()=>i.jsx("div",{className:"plan-container",children:i.jsx("div",{className:"plan-card",children:(0,i.jsxs)("div",{className:"plan-inner",children:[(0,i.jsxs)("div",{className:"logo-section",children:[(0,i.jsxs)("div",{className:"logo-wrapper",children:[(0,i.jsxs)("div",{className:"pixel-logo",children:[(0,i.jsxs)("div",{className:"grid-block top-left",children:[i.jsx("span",{className:"sq red"}),i.jsx("span",{className:"sq red"}),i.jsx("span",{className:"sq gray"}),i.jsx("span",{className:"sq red"}),i.jsx("span",{className:"sq gray"}),i.jsx("span",{className:"sq gray"}),i.jsx("span",{className:"sq red"}),i.jsx("span",{className:"sq red"}),i.jsx("span",{className:"sq gray"})]}),(0,i.jsxs)("div",{className:"diamond",children:[i.jsx("span",{className:"d-sq"}),i.jsx("span",{className:"d-sq"}),i.jsx("span",{className:"d-sq"}),i.jsx("span",{className:"d-sq"})]})]}),i.jsx("div",{className:"bottom-grid",children:Array.from({length:18}).map((e,a)=>i.jsx("span",{className:`sq ${s[a]?"red":"gray"}`,style:{animationDelay:`${.5+.05*a}s`}},a))})]}),(0,i.jsxs)("div",{className:"brand-text",children:[(0,i.jsxs)("h1",{className:"cft",children:[i.jsx("span",{children:"C"}),i.jsx("span",{children:"F"}),i.jsx("span",{children:"T"})]}),i.jsx("h2",{className:"machineries",children:"Machineries"})]})]}),(0,i.jsxs)("div",{className:"website-btn",children:[i.jsx("span",{className:"url",children:"www.charanfoodtech.com"}),i.jsx("span",{className:"arrow-circle",children:"↗"})]})]})})}),o=({children:e})=>{let[a,t]=(0,r.useState)(!0);return(0,r.useEffect)(()=>{let e=setTimeout(()=>t(!1),2e3);return()=>clearTimeout(e)},[]),(0,i.jsxs)(i.Fragment,{children:[a&&i.jsx("div",{className:"splash-overlay",children:i.jsx(n,{})}),i.jsx("div",{style:{opacity:a?0:1,transition:"opacity 0.6s ease"},children:e})]})}},9644:(e,a,t)=>{"use strict";t.r(a),t.d(a,{default:()=>l});var i=t(5344),r=t(3729);let s=[{key:"install",step:"Day 1",title:"We Install It For You",tagline:"Our engineers commission the machine on your floor",icon:"\uD83D\uDD27",color:"#DC2626",items:[{icon:"\uD83D\uDD27",label:"Complete Commissioning"},{icon:"\uD83D\uDC68‍\uD83C\uDFEB",label:"Operator Training"},{icon:"\uD83D\uDCF9",label:"Video Demos & Guides"},{icon:"\uD83D\uDCCB",label:"Handover Checklist"}]},{key:"reach",step:"Any Day",title:"We Are One Call Away",tagline:"Four ways to reach a real technician, not a call centre",icon:"\uD83D\uDCDE",color:"#16A34A",items:[{icon:"\uD83D\uDCDE",label:"Direct Phone Line"},{icon:"\uD83D\uDCAC",label:"WhatsApp Support"},{icon:"\uD83D\uDDA5️",label:"Remote Diagnosis"},{icon:"\uD83D\uDE97",label:"On-Site Visit"}]},{key:"maintain",step:"Every Month",title:"We Prevent The Breakdown",tagline:"Scheduled service so problems never reach your line",icon:"\uD83D\uDD04",color:"#D97706",items:[{icon:"\uD83D\uDD04",label:"Preventive Maintenance"},{icon:"\uD83D\uDCC5",label:"AMC Plans"},{icon:"\uD83D\uDD29",label:"Genuine Spare Parts"},{icon:"\uD83D\uDCC8",label:"Performance Tuning"}]},{key:"emergency",step:"Worst Day",title:"We Show Up Fast",tagline:"Line stopped? That becomes our emergency too",icon:"\uD83D\uDEA8",color:"#B91C1C",items:[{icon:"\uD83D\uDEA8",label:"Emergency Breakdown"},{icon:"⏱️",label:"24 Hour Response"},{icon:"⬆️",label:"Machine Upgrades"},{icon:"\uD83C\uDF93",label:"Lifetime Guidance"}]}],n=[{value:24,suffix:"h",label:"Response Time",sub:"Anywhere in India",color:"#DC2626"},{value:100,suffix:"%",label:"Genuine Spares",sub:"Direct from our plant",color:"#D97706"},{value:30,suffix:"+",label:"Years Supporting",sub:"Machines still running",color:"#16A34A"},{value:500,suffix:"+",label:"Plants Serviced",sub:"Across 20+ states",color:"#0F172A"}],o=[{t:"0 min",title:"You Reach Us",desc:"Call or WhatsApp — a person picks up",icon:"\uD83D\uDCDE"},{t:"15 min",title:"Engineer Assigned",desc:"Your case gets a named technician",icon:"\uD83D\uDC68‍\uD83D\uDD27"},{t:"2 hrs",title:"Remote Diagnosis",desc:"Most issues solved over video",icon:"\uD83D\uDDA5️"},{t:"24 hrs",title:"On-Site If Needed",desc:"Field engineer reaches your plant",icon:"\uD83D\uDE9A"}];function l(){let[e,a]=(0,r.useState)(0),[t,l]=(0,r.useState)(0),[d,m]=(0,r.useState)(!1),[p,f]=(0,r.useState)(!1),x=(0,r.useRef)(null);(0,r.useEffect)(()=>{let e=x.current;if(!e)return;if("undefined"==typeof IntersectionObserver){f(!0);return}let a=new IntersectionObserver(e=>{e[0].isIntersecting&&(f(!0),a.disconnect())},{threshold:.12});return a.observe(e),()=>a.disconnect()},[]),(0,r.useEffect)(()=>{if(d||!p)return;let e=setTimeout(()=>{a(e=>(e+1)%s.length)},4200);return()=>clearTimeout(e)},[e,d,p]),(0,r.useEffect)(()=>{if(!p)return;let e=setTimeout(()=>l(e=>(e+1)%(o.length+1)),t===o.length?2400:1600);return()=>clearTimeout(e)},[t,p]);let b=s[e];return(0,i.jsxs)("section",{id:"support",ref:x,className:`sp-section ${p?"is-visible":""}`,onMouseEnter:()=>m(!0),onMouseLeave:()=>m(!1),children:[(0,i.jsxs)("div",{className:"sp-backdrop","aria-hidden":"true",children:[i.jsx("div",{className:"sp-radar",style:{borderColor:`${b.color}20`}}),i.jsx("div",{className:"sp-radar sp-radar-2",style:{borderColor:`${b.color}16`}}),i.jsx("div",{className:"sp-glow",style:{background:`radial-gradient(circle, ${b.color}14 0%, transparent 62%)`}})]}),(0,i.jsxs)("div",{className:"sp-header",children:[(0,i.jsxs)("span",{className:"sp-live",children:[i.jsx("span",{className:"sp-live-dot"}),"Support Desk Active"]}),(0,i.jsxs)("h2",{className:"sp-title",children:["Support Doesn't End",i.jsx("br",{}),i.jsx("span",{style:{color:b.color,transition:"color 0.8s ease"},children:"After Delivery"})]}),i.jsx("p",{className:"sp-subtitle",children:"Most suppliers vanish after installation. That is where we start."})]}),i.jsx("div",{className:"sp-stats",children:n.map((e,a)=>(0,i.jsxs)("div",{className:"sp-stat",style:{transitionDelay:`${110*a}ms`},children:[(0,i.jsxs)("div",{className:"sp-stat-num",style:{color:e.color},children:[i.jsx(c,{to:e.value,start:p,duration:1400+200*a}),i.jsx("span",{className:"sp-stat-suffix",children:e.suffix})]}),i.jsx("div",{className:"sp-stat-label",children:e.label}),i.jsx("div",{className:"sp-stat-sub",children:e.sub}),i.jsx("span",{className:"sp-stat-bar",style:{background:e.color}})]},e.label))}),(0,i.jsxs)("div",{className:"sp-clock-block",children:[(0,i.jsxs)("div",{className:"sp-block-head",children:[i.jsx("span",{className:"sp-block-tag",children:"If Your Line Stops Today"}),i.jsx("h3",{className:"sp-block-title",children:"This Is What Happens Next"})]}),(0,i.jsxs)("div",{className:"sp-clock",children:[i.jsx("div",{className:"sp-clock-line",children:i.jsx("div",{className:"sp-clock-fill",style:{"--fill":`${Math.min(t,o.length)/o.length*100}%`}})}),o.map((e,a)=>{let r=t>a;return(0,i.jsxs)("div",{className:`sp-tick ${r?"is-reached":""}`,children:[(0,i.jsxs)("span",{className:"sp-tick-dot",children:[i.jsx("span",{className:"sp-tick-icon",children:e.icon}),r&&i.jsx("span",{className:"sp-tick-ring"})]}),i.jsx("span",{className:"sp-tick-time",children:e.t}),i.jsx("span",{className:"sp-tick-title",children:e.title}),i.jsx("span",{className:"sp-tick-desc",children:e.desc})]},e.t)})]})]}),(0,i.jsxs)("div",{className:"sp-compare",children:[(0,i.jsxs)("div",{className:"sp-compare-row",children:[i.jsx("span",{className:"sp-compare-label",children:"Typical supplier"}),i.jsx("div",{className:"sp-compare-track",children:i.jsx("span",{className:"sp-compare-bar sp-bad"})}),i.jsx("span",{className:"sp-compare-value sp-bad-text",children:"3–5 days lost"})]}),(0,i.jsxs)("div",{className:"sp-compare-row",children:[i.jsx("span",{className:"sp-compare-label",children:"With our service team"}),i.jsx("div",{className:"sp-compare-track",children:i.jsx("span",{className:"sp-compare-bar sp-good"})}),i.jsx("span",{className:"sp-compare-value sp-good-text",children:"Same day, mostly"})]})]}),(0,i.jsxs)("div",{className:"sp-journey",children:[(0,i.jsxs)("div",{className:"sp-block-head",children:[i.jsx("span",{className:"sp-block-tag",children:"Full Machine Lifecycle"}),i.jsx("h3",{className:"sp-block-title",children:"We Stay With You Throughout"})]}),(0,i.jsxs)("div",{className:"sp-rail",children:[i.jsx("div",{className:"sp-rail-line",children:i.jsx("div",{className:"sp-rail-fill",style:{width:`${(e+1)/s.length*100}%`,background:`linear-gradient(90deg, #DC2626, ${b.color})`}})}),s.map((t,r)=>{let s=r===e,n=r<e;return(0,i.jsxs)("button",{className:`sp-node ${s?"is-active":""} ${n?"is-done":""}`,onClick:()=>a(r),"aria-label":t.title,children:[i.jsx("span",{className:"sp-node-dot",style:{borderColor:s||n?t.color:"var(--border)",background:s?`${t.color}12`:n?t.color:"#FFFFFF",boxShadow:s?`0 0 0 6px ${t.color}14, 0 8px 22px ${t.color}33`:"0 2px 8px rgba(15,23,42,0.05)"},children:i.jsx("span",{className:"sp-node-icon",children:n?"✓":t.icon})}),i.jsx("span",{className:"sp-node-step",style:{color:s?t.color:void 0},children:t.step})]},t.key)})]}),(0,i.jsxs)("div",{className:"sp-panel",style:{borderColor:`${b.color}33`,boxShadow:`0 24px 70px rgba(15, 23, 42, 0.07), inset 0 0 60px ${b.color}06`},children:[(0,i.jsxs)("div",{className:"sp-panel-head",children:[i.jsx("span",{className:"sp-panel-icon",style:{background:`${b.color}12`,borderColor:b.color,boxShadow:`0 8px 26px ${b.color}2E`},children:b.icon}),(0,i.jsxs)("div",{children:[(0,i.jsxs)("div",{className:"sp-panel-step",style:{color:b.color},children:["Stage ",e+1," of ",s.length," \xb7 ",b.step]}),i.jsx("h3",{className:"sp-panel-title",children:b.title}),i.jsx("p",{className:"sp-panel-tag",children:b.tagline})]})]}),i.jsx("div",{className:"sp-items",children:b.items.map((e,a)=>(0,i.jsxs)("div",{className:"sp-item",style:{animationDelay:`${.12+.09*a}s`,borderColor:`${b.color}26`,background:`${b.color}08`},children:[i.jsx("span",{className:"sp-item-icon",style:{background:`${b.color}18`},children:e.icon}),i.jsx("span",{className:"sp-item-label",children:e.label})]},e.label))}),i.jsx("div",{className:"sp-progress",children:i.jsx("span",{className:`sp-progress-fill ${d?"is-paused":""}`,style:{background:b.color,animationDuration:"4200ms"}},`${e}-${d}`)})]},b.key)]}),(0,i.jsxs)("div",{className:"sp-promise",children:[i.jsx("p",{className:"sp-promise-text",children:"Downtime costs money. Our job is to make sure you never lose a shift."}),(0,i.jsxs)("div",{className:"sp-actions",children:[i.jsx("a",{href:"tel:+919999999999",className:"sp-btn sp-btn-primary",children:"\uD83D\uDCDE Call Service Desk"}),i.jsx("a",{href:"https://wa.me/919999999999",target:"_blank",rel:"noopener noreferrer",className:"sp-btn sp-btn-ghost",children:"\uD83D\uDCAC WhatsApp Us"})]})]}),i.jsx("style",{dangerouslySetInnerHTML:{__html:`
        /* ============================================
           SUPPORT & SERVICE — ANIMATED JOURNEY
           ============================================ */
        .sp-section {
          position: relative;
          overflow: hidden;
          padding: 3.5rem 1rem 3rem;
          background:
            radial-gradient(ellipse at 20% 0%, rgba(220,38,38,0.05) 0%, transparent 55%),
            radial-gradient(circle at center, #F8FAFC 0%, #E2E8F0 100%);
        }

        /* ---------- Backdrop ---------- */
        .sp-backdrop { position: absolute; inset: 0; pointer-events: none; overflow: hidden; }

        .sp-radar {
          position: absolute;
          top: 50%; left: 50%;
          width: 620px; height: 620px;
          margin: -310px 0 0 -310px;
          border: 1px solid;
          border-radius: 50%;
          animation: spRadar 4s ease-out infinite;
          transition: border-color 0.8s ease;
        }
        .sp-radar-2 { animation-delay: 2s; }

        @keyframes spRadar {
          0%   { transform: scale(0.35); opacity: 0.9; }
          100% { transform: scale(1.6); opacity: 0; }
        }

        .sp-glow {
          position: absolute;
          top: 50%; left: 50%;
          width: 900px; height: 900px;
          margin: -450px 0 0 -450px;
          transition: background 0.9s ease;
        }

        /* ---------- Header ---------- */
        .sp-header { position: relative; z-index: 2; text-align: center; margin-bottom: 2.5rem; }

        .sp-live {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.35rem 0.9rem;
          border: 1px solid rgba(22,163,74,0.22);
          border-radius: 50px;
          background: rgba(22,163,74,0.08);
          color: #16A34A;
          font-size: 0.7rem;
          font-weight: 700;
          letter-spacing: 1.4px;
          text-transform: uppercase;
          margin-bottom: 1.1rem;
        }
        .sp-live-dot {
          width: 7px; height: 7px;
          border-radius: 50%;
          background: #16A34A;
          box-shadow: 0 0 0 0 rgba(22,163,74,0.7);
          animation: spPing 1.8s ease-out infinite;
        }
        @keyframes spPing {
          0%   { box-shadow: 0 0 0 0 rgba(22,163,74,0.65); }
          70%  { box-shadow: 0 0 0 9px rgba(22,163,74,0); }
          100% { box-shadow: 0 0 0 0 rgba(22,163,74,0); }
        }

        .sp-title {
          font-size: 1.85rem;
          font-weight: 800;
          line-height: 1.22;
          color: var(--text-primary);
          margin: 0 0 0.6rem;
        }

        .sp-subtitle { color: var(--text-secondary); font-size: 0.98rem; margin: 0; }

        /* ---------- Shared block heading ---------- */
        .sp-block-head { text-align: center; margin-bottom: 1.75rem; }
        .sp-block-tag {
          display: inline-block;
          font-size: 0.66rem;
          font-weight: 800;
          letter-spacing: 1.6px;
          text-transform: uppercase;
          color: var(--accent);
          margin-bottom: 0.4rem;
        }
        .sp-block-title {
          font-size: 1.3rem;
          font-weight: 800;
          color: var(--text-primary);
          margin: 0;
          line-height: 1.3;
        }

        /* ---------- Stats ---------- */
        .sp-stats {
          position: relative;
          z-index: 2;
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 0.75rem;
          max-width: 1080px;
          margin: 0 auto 3.5rem;
        }

        .sp-stat {
          position: relative;
          overflow: hidden;
          padding: 1.1rem 0.9rem 1.2rem;
          border: 1px solid var(--border);
          border-radius: 18px;
          background: #FFFFFF;
          box-shadow: 0 6px 22px rgba(15,23,42,0.04);
          opacity: 0;
          transform: translateY(22px);
          transition: opacity 0.7s ease, transform 0.7s cubic-bezier(0.22,1,0.36,1);
        }
        .sp-section.is-visible .sp-stat { opacity: 1; transform: translateY(0); }

        .sp-stat-num {
          display: flex;
          align-items: baseline;
          gap: 0.1rem;
          font-size: 1.9rem;
          font-weight: 800;
          line-height: 1;
          font-variant-numeric: tabular-nums;
        }
        .sp-stat-suffix { font-size: 1.1rem; font-weight: 700; }

        .sp-stat-label {
          margin-top: 0.4rem;
          font-size: 0.82rem;
          font-weight: 700;
          color: var(--text-primary);
        }
        .sp-stat-sub { font-size: 0.7rem; color: var(--text-secondary); margin-top: 0.1rem; }

        .sp-stat-bar {
          position: absolute;
          left: 0; bottom: 0;
          height: 2px; width: 0;
          transition: width 1.2s ease 0.4s;
        }
        .sp-section.is-visible .sp-stat-bar { width: 100%; }

        /* ---------- Response clock ---------- */
        .sp-clock-block {
          position: relative;
          z-index: 2;
          max-width: 1080px;
          margin: 0 auto 2.5rem;
        }

        .sp-clock {
          position: relative;
          display: grid;
          grid-template-columns: 1fr;
          gap: 0.75rem;
        }

        /* Mobile: vertical spine */
        .sp-clock-line {
          position: absolute;
          left: 23px;
          top: 12px;
          bottom: 12px;
          width: 2px;
          background: var(--border);
          border-radius: 2px;
          overflow: hidden;
        }
        .sp-clock-fill {
          position: absolute;
          left: 0; top: 0;
          width: 100%;
          height: var(--fill, 0%);
          background: linear-gradient(180deg, #DC2626, #16A34A);
          transition: height 0.7s cubic-bezier(0.22,1,0.36,1);
        }

        .sp-tick {
          position: relative;
          display: grid;
          grid-template-columns: 48px 1fr;
          grid-template-areas:
            "dot time"
            "dot title"
            "dot desc";
          align-items: center;
          column-gap: 0.85rem;
          padding: 0.5rem 0;
          opacity: 0.45;
          transition: opacity 0.5s ease;
        }
        .sp-tick.is-reached { opacity: 1; }

        .sp-tick-dot {
          grid-area: dot;
          position: relative;
          width: 48px; height: 48px;
          border-radius: 50%;
          border: 2px solid var(--border);
          background: #FFFFFF;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.5s cubic-bezier(0.175,0.885,0.32,1.27);
        }
        .sp-tick.is-reached .sp-tick-dot {
          border-color: var(--accent);
          background: rgba(220,38,38,0.07);
          transform: scale(1.08);
        }
        .sp-tick-icon { font-size: 1.15rem; line-height: 1; }

        .sp-tick-ring {
          position: absolute;
          inset: -4px;
          border-radius: 50%;
          border: 2px solid var(--accent);
          animation: spTickRing 1.4s ease-out infinite;
        }
        @keyframes spTickRing {
          0%   { transform: scale(0.85); opacity: 0.7; }
          100% { transform: scale(1.35); opacity: 0; }
        }

        .sp-tick-time {
          grid-area: time;
          font-size: 0.68rem;
          font-weight: 800;
          letter-spacing: 1.2px;
          text-transform: uppercase;
          color: var(--accent);
        }
        .sp-tick-title {
          grid-area: title;
          font-size: 0.95rem;
          font-weight: 700;
          color: var(--text-primary);
        }
        .sp-tick-desc {
          grid-area: desc;
          font-size: 0.8rem;
          color: var(--text-secondary);
          line-height: 1.4;
        }

        /* ---------- Downtime comparison ---------- */
        .sp-compare {
          position: relative;
          z-index: 2;
          max-width: 1080px;
          margin: 0 auto 3.5rem;
          padding: 1.25rem 1.1rem;
          border: 1px solid var(--border);
          border-radius: 20px;
          background: #FFFFFF;
          box-shadow: 0 6px 22px rgba(15,23,42,0.04);
          display: grid;
          gap: 0.9rem;
        }

        .sp-compare-row {
          display: grid;
          grid-template-columns: 1fr;
          gap: 0.35rem;
          align-items: center;
        }

        .sp-compare-label {
          font-size: 0.8rem;
          font-weight: 700;
          color: var(--text-secondary);
        }

        .sp-compare-track {
          height: 12px;
          border-radius: 12px;
          background: rgba(15,23,42,0.05);
          overflow: hidden;
        }

        .sp-compare-bar {
          display: block;
          height: 100%;
          width: 0;
          border-radius: 12px;
          transition: width 1.4s cubic-bezier(0.22,1,0.36,1) 0.3s;
        }
        .sp-bad  { background: linear-gradient(90deg, #F87171, #B91C1C); }
        .sp-good { background: linear-gradient(90deg, #4ADE80, #16A34A); }

        .sp-section.is-visible .sp-bad  { width: 92%; }
        .sp-section.is-visible .sp-good { width: 22%; }

        .sp-compare-value { font-size: 0.85rem; font-weight: 800; }
        .sp-bad-text  { color: #B91C1C; }
        .sp-good-text { color: #16A34A; }

        /* ---------- Journey ---------- */
        .sp-journey {
          position: relative;
          z-index: 2;
          max-width: 1080px;
          margin: 0 auto;
        }

        /* Stage rail */
        .sp-rail {
          position: relative;
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 0.25rem;
          margin-bottom: 1.75rem;
        }

        .sp-rail-line {
          position: absolute;
          top: 24px;
          left: 12%;
          right: 12%;
          height: 2px;
          background: var(--border);
          border-radius: 2px;
          overflow: hidden;
        }
        .sp-rail-fill {
          height: 100%;
          border-radius: 2px;
          transition: width 0.7s cubic-bezier(0.22,1,0.36,1), background 0.7s ease;
        }

        .sp-node {
          position: relative;
          z-index: 1;
          background: none;
          border: none;
          padding: 0;
          cursor: pointer;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.5rem;
        }

        .sp-node-dot {
          width: 48px; height: 48px;
          border: 2px solid;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.5s cubic-bezier(0.175,0.885,0.32,1.27);
        }
        .sp-node.is-active .sp-node-dot { transform: scale(1.14); }
        .sp-node:hover .sp-node-dot { transform: scale(1.08); }

        .sp-node-icon { font-size: 1.15rem; line-height: 1; }
        .sp-node.is-done .sp-node-icon { color: #fff; font-weight: 900; }

        .sp-node-step {
          font-size: 0.64rem;
          font-weight: 700;
          letter-spacing: 0.8px;
          text-transform: uppercase;
          color: var(--text-secondary);
          transition: color 0.4s ease;
          text-align: center;
        }

        /* Active panel */
        .sp-panel {
          position: relative;
          border: 1px solid var(--border);
          border-radius: 24px;
          padding: 1.5rem 1.25rem 1.75rem;
          background: #FFFFFF;
          animation: spPanelIn 0.6s cubic-bezier(0.22,1,0.36,1) both;
        }

        @keyframes spPanelIn {
          0%   { opacity: 0; transform: translateY(18px) scale(0.985); }
          100% { opacity: 1; transform: translateY(0) scale(1); }
        }

        .sp-panel-head { display: flex; gap: 1rem; align-items: flex-start; margin-bottom: 1.35rem; }

        .sp-panel-icon {
          width: 60px; height: 60px;
          flex-shrink: 0;
          border: 2px solid;
          border-radius: 18px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.8rem;
          animation: spIconFloat 3s ease-in-out infinite alternate;
        }
        @keyframes spIconFloat {
          0%   { transform: translateY(-3px); }
          100% { transform: translateY(3px); }
        }

        .sp-panel-step {
          font-size: 0.66rem;
          font-weight: 800;
          letter-spacing: 1.4px;
          text-transform: uppercase;
          margin-bottom: 0.3rem;
        }
        .sp-panel-title {
          font-size: 1.35rem;
          font-weight: 800;
          color: var(--text-primary);
          margin: 0 0 0.3rem;
          line-height: 1.25;
        }
        .sp-panel-tag { font-size: 0.88rem; color: var(--text-secondary); margin: 0; line-height: 1.5; }

        .sp-items {
          display: grid;
          grid-template-columns: 1fr;
          gap: 0.6rem;
        }

        .sp-item {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          padding: 0.7rem 0.85rem;
          border: 1px solid;
          border-radius: 14px;
          animation: spItemIn 0.5s cubic-bezier(0.22,1,0.36,1) both;
        }
        @keyframes spItemIn {
          0%   { opacity: 0; transform: translateX(-14px); }
          100% { opacity: 1; transform: translateX(0); }
        }

        .sp-item-icon {
          width: 34px; height: 34px;
          flex-shrink: 0;
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.05rem;
        }
        .sp-item-label { font-size: 0.86rem; font-weight: 600; color: var(--text-primary); }

        .sp-progress {
          margin-top: 1.35rem;
          height: 3px;
          background: var(--border);
          border-radius: 3px;
          overflow: hidden;
        }
        .sp-progress-fill {
          display: block;
          height: 100%;
          width: 100%;
          transform-origin: left center;
          animation: spProgress linear forwards;
        }
        .sp-progress-fill.is-paused { animation-play-state: paused; }
        @keyframes spProgress {
          from { transform: scaleX(0); }
          to   { transform: scaleX(1); }
        }

        /* ---------- Promise ---------- */
        .sp-promise {
          position: relative;
          z-index: 2;
          max-width: 1080px;
          margin: 2.5rem auto 0;
          text-align: center;
        }
        .sp-promise-text {
          font-size: 1.05rem;
          font-weight: 700;
          color: var(--text-primary);
          margin: 0 0 1.25rem;
          line-height: 1.5;
        }
        .sp-actions { display: flex; flex-wrap: wrap; gap: 0.75rem; justify-content: center; }

        .sp-btn {
          display: inline-flex;
          align-items: center;
          gap: 0.45rem;
          padding: 0.8rem 1.4rem;
          border-radius: 50px;
          font-size: 0.9rem;
          font-weight: 700;
          text-decoration: none;
          transition: all 0.3s ease;
        }
        .sp-btn-primary {
          background: linear-gradient(135deg, #DC2626, #EF4444);
          color: #fff;
          box-shadow: 0 10px 28px rgba(220,38,38,0.28);
        }
        .sp-btn-primary:hover { transform: translateY(-3px); box-shadow: 0 16px 36px rgba(220,38,38,0.38); }

        .sp-btn-ghost {
          background: #FFFFFF;
          color: var(--text-primary);
          border: 1px solid var(--border);
          box-shadow: 0 4px 16px rgba(15,23,42,0.05);
        }
        .sp-btn-ghost:hover { transform: translateY(-3px); box-shadow: 0 10px 26px rgba(15,23,42,0.09); }

        /* ============================================
           TABLET (>= 640px)
           ============================================ */
        @media (min-width: 640px) {
          .sp-items { grid-template-columns: 1fr 1fr; }

          .sp-compare-row {
            grid-template-columns: 190px 1fr 130px;
            gap: 1rem;
          }
          .sp-compare-value { text-align: right; }
        }

        /* ============================================
           TABLET / DESKTOP (>= 768px)
           ============================================ */
        @media (min-width: 768px) {
          .sp-section { padding: 5rem 2rem 4rem; }
          .sp-title { font-size: 2.6rem; }
          .sp-subtitle { font-size: 1.1rem; }
          .sp-block-title { font-size: 1.7rem; }
          .sp-stats { grid-template-columns: repeat(4, 1fr); gap: 1rem; }
          .sp-stat { padding: 1.4rem 1.2rem 1.5rem; }
          .sp-stat-num { font-size: 2.4rem; }

          /* Clock becomes a horizontal timeline */
          .sp-clock { grid-template-columns: repeat(4, 1fr); gap: 1rem; }
          .sp-clock-line {
            left: 12%; right: 12%;
            top: 24px; bottom: auto;
            width: auto; height: 2px;
          }
          .sp-clock-fill {
            width: var(--fill, 0%);
            height: 100%;
            background: linear-gradient(90deg, #DC2626, #16A34A);
            transition: width 0.7s cubic-bezier(0.22,1,0.36,1);
          }
          .sp-tick {
            grid-template-columns: 1fr;
            grid-template-areas: "dot" "time" "title" "desc";
            justify-items: center;
            text-align: center;
            row-gap: 0.3rem;
            padding: 0;
          }

          .sp-compare { padding: 1.75rem 1.75rem; }

          .sp-node-dot { width: 58px; height: 58px; }
          .sp-node-icon { font-size: 1.4rem; }
          .sp-node-step { font-size: 0.7rem; }
          .sp-rail-line { top: 29px; }
          .sp-panel { padding: 2.25rem 2rem 2rem; }
          .sp-panel-icon { width: 74px; height: 74px; font-size: 2.2rem; }
          .sp-panel-title { font-size: 1.7rem; }
          .sp-panel-tag { font-size: 0.98rem; }
          .sp-promise-text { font-size: 1.2rem; }
        }

        /* ============================================
           DESKTOP (>= 1024px)
           ============================================ */
        @media (min-width: 1024px) {
          .sp-panel {
            display: grid;
            grid-template-columns: 1fr 1.15fr;
            gap: 2.5rem;
            align-items: center;
            padding: 2.5rem;
          }
          .sp-panel-head { margin-bottom: 0; }
          .sp-progress { grid-column: 1 / -1; margin-top: 1.5rem; }
          .sp-items { gap: 0.75rem; }
        }

        /* ============================================
           REDUCED MOTION
           ============================================ */
        @media (prefers-reduced-motion: reduce) {
          .sp-radar, .sp-live-dot, .sp-panel-icon, .sp-tick-ring { animation: none !important; }
          .sp-panel, .sp-item, .sp-progress-fill { animation: none !important; }
          .sp-stat { opacity: 1 !important; transform: none !important; }
          .sp-tick { opacity: 1 !important; }
        }
      `}})]})}function c({to:e,start:a,duration:t}){let[s,n]=(0,r.useState)(0);return(0,r.useEffect)(()=>{if(!a)return;let i=0,r=performance.now(),s=a=>{let o=Math.min((a-r)/t,1);n(Math.round(e*(1-Math.pow(1-o,3)))),o<1&&(i=requestAnimationFrame(s))};return i=requestAnimationFrame(s),()=>cancelAnimationFrame(i)},[a,e,t]),i.jsx(i.Fragment,{children:s})}},267:(e,a,t)=>{"use strict";t.r(a),t.d(a,{default:()=>o});var i=t(5344),r=t(3729);let s=[{name:"Rajesh Patel",role:"Managing Director",company:"Shree Snacks Pvt. Ltd.",location:"Rajkot, Gujarat",machine:"Automatic Potato Chips Line — 300 kg/hr",quote:"They studied our plant, redesigned the line and installed it in three weeks. Wastage came down and the machine has not stopped once.",metric:{value:"+60%",label:"Output"},metric2:{value:"−30%",label:"Oil Cost"},rating:5,color:"#F59E0B",initials:"RP"},{name:"Mohammed Iqbal",role:"Plant Head",company:"Al-Noor Foods",location:"Hyderabad, Telangana",machine:"Continuous Fryer + Seasoning System",quote:"What sold us was the service promise — and they kept it. Two years in, zero unplanned shutdowns during peak season.",metric:{value:"0",label:"Breakdowns"},metric2:{value:"4 hrs",label:"Response"},rating:5,color:"#3B82F6",initials:"MI"},{name:"Priya Deshmukh",role:"Founder",company:"Sahyadri Namkeen",location:"Pune, Maharashtra",machine:"Namkeen Line with Extruder",quote:"We started with one machine and grew into a full line. They never pushed us to buy more than we needed.",metric:{value:"3\xd7",label:"Capacity"},metric2:{value:"8 Mo",label:"ROI"},rating:5,color:"#10B981",initials:"PD"},{name:"Suresh Nair",role:"Operations Manager",company:"Kerala Banana Chips Co.",location:"Thrissur, Kerala",machine:"Banana Chips Slicing & Frying Line",quote:"Colour, crispness, salt — identical in every packet now. Our buyers noticed before we even told them.",metric:{value:"100%",label:"Consistency"},metric2:{value:"−40%",label:"Labour"},rating:5,color:"#EF4444",initials:"SN"},{name:"Amit Agarwal",role:"Director",company:"Marwar Food Industries",location:"Jodhpur, Rajasthan",machine:"Custom Gulab Jamun Ball Forming Machine",quote:"No ready machine existed for what we make. They built one from scratch. That is engineering, not selling.",metric:{value:"24\xd77",label:"Uptime"},metric2:{value:"Custom",label:"Built to Spec"},rating:5,color:"#8B5CF6",initials:"AA"},{name:"Vikram Reddy",role:"Proprietor",company:"Annapurna Foods",location:"Vijayawada, Andhra Pradesh",machine:"Automatic Fryer with Oil Filtration",quote:"Their engineer trained my whole floor team for free. Six months later he still picks up the phone.",metric:{value:"−35%",label:"Power Use"},metric2:{value:"2 Days",label:"Install Time"},rating:5,color:"#0EA5E9",initials:"VR"}];function n(e){let a=Math.imul(e+2654435769,2246822507);return a^=a>>>13,a=Math.imul(a,3266489909),((a^=a>>>16)>>>0)/4294967296}function o(){let e=Math.ceil(s.length/2),[a,t]=(0,r.useState)(0),[o,l]=(0,r.useState)("building"),[c,d]=(0,r.useState)(!1);(0,r.useEffect)(()=>{let a;if(!c||"holding"!==o)return a="building"===o?setTimeout(()=>l("holding"),750):"holding"===o?setTimeout(()=>l("shattering"),2e3):setTimeout(()=>{t(a=>(a+1)%e),l("building")},750),()=>clearTimeout(a)},[o,c,e]);let m=(0,r.useMemo)(()=>{let e=[];for(let a=0;a<7;a++)for(let t=0;t<9;t++){let i=9*a+t,r=(t+.5)/9,s=(a+.5)/7,o=(r-.5)*2,l=(s-.5)*2;e.push({left:`${100*r}%`,top:`${100*s}%`,dx:o*(70+130*n(i))+(n(i+91)-.5)*60,dy:l*(60+110*n(i+7))-40+(n(i+53)-.5)*50,delay:260*n(i+17),size:4+5*n(i+29)})}return e},[]),p=e=>{e!==a&&(l("shattering"),setTimeout(()=>{t(e),l("building")},750))},f=s.slice(2*a,2*a+2),x=f[0]?.color??"#3B82F6";return(0,i.jsxs)("section",{id:"testimonials",className:"ts-section",children:[i.jsx("div",{className:"ts-ambient",style:{background:`radial-gradient(ellipse at 50% 40%, ${x}22 0%, transparent 65%)`}}),(0,i.jsxs)("div",{className:"ts-header",children:[i.jsx("span",{className:"ts-eyebrow",style:{color:x,borderColor:`${x}55`},children:"★ Trusted by 500+ Manufacturers"}),i.jsx("h2",{className:"ts-title",children:"What Our Customers Say"}),i.jsx("p",{className:"ts-subtitle",children:"Real voices from plants running our machines every day"})]}),i.jsx("div",{className:"ts-stage",children:f.map((e,t)=>(0,i.jsxs)("div",{className:"ts-slot",children:[(0,i.jsxs)("article",{className:`ts-card ts-${o}`,style:{animationDelay:`${90*t}ms`,borderColor:e.color,boxShadow:`0 24px 60px rgba(15,23,42,0.10), 0 0 0 1px ${e.color}22, inset 0 0 40px ${e.color}08`},children:[i.jsx("span",{className:"ts-quote-mark",style:{color:`${e.color}1F`},children:"“"}),i.jsx("div",{className:"ts-stars","aria-label":`${e.rating} out of 5`,children:Array.from({length:e.rating}).map((e,a)=>i.jsx("span",{className:"ts-star",style:{animationDelay:`${.25+.07*a}s`},children:"★"},a))}),i.jsx("blockquote",{className:"ts-quote",children:e.quote}),(0,i.jsxs)("div",{className:"ts-metrics",children:[(0,i.jsxs)("div",{className:"ts-metric",style:{borderColor:`${e.color}33`,background:`${e.color}0D`},children:[i.jsx("strong",{style:{color:e.color},children:e.metric.value}),i.jsx("span",{children:e.metric.label})]}),(0,i.jsxs)("div",{className:"ts-metric",style:{borderColor:`${e.color}33`,background:`${e.color}0D`},children:[i.jsx("strong",{style:{color:e.color},children:e.metric2.value}),i.jsx("span",{children:e.metric2.label})]})]}),(0,i.jsxs)("div",{className:"ts-author",children:[i.jsx("div",{className:"ts-avatar",style:{background:`linear-gradient(135deg, ${e.color} 0%, ${e.color}AA 100%)`,boxShadow:`0 8px 20px ${e.color}44`},children:e.initials}),(0,i.jsxs)("div",{className:"ts-author-meta",children:[i.jsx("div",{className:"ts-name",children:e.name}),(0,i.jsxs)("div",{className:"ts-role",children:[e.role,", ",e.company]}),(0,i.jsxs)("div",{className:"ts-location",children:["\uD83D\uDCCD ",e.location]})]})]}),(0,i.jsxs)("div",{className:"ts-machine",style:{borderTopColor:`${e.color}22`},children:[i.jsx("span",{className:"ts-machine-dot",style:{background:e.color,boxShadow:`0 0 8px ${e.color}`}}),e.machine]})]}),i.jsx("div",{className:`ts-pieces ts-${o}`,"aria-hidden":"true",children:m.map((a,r)=>i.jsx("span",{className:"ts-piece",style:{left:a.left,top:a.top,width:`${a.size}px`,height:`${a.size}px`,background:e.color,boxShadow:`0 0 6px ${e.color}88`,animationDelay:`${a.delay+90*t}ms`,"--dx":`${a.dx}px`,"--dy":`${a.dy}px`}},r))})]},`${a}-${t}`))}),i.jsx("div",{className:"ts-pager",children:Array.from({length:e}).map((e,t)=>i.jsx("button",{className:`ts-pagedot ${t===a?"is-active":""}`,onClick:()=>p(t),"aria-label":`Show testimonials ${2*t+1} and ${2*t+2}`,style:t===a?{background:x,boxShadow:`0 0 12px ${x}`}:void 0},t))}),i.jsx("style",{dangerouslySetInnerHTML:{__html:`
        /* ============================================
           TESTIMONIALS — TWO-UP DISINTEGRATION SLIDER
           ============================================ */
        .ts-section {
          position: relative;
          overflow: hidden;
          padding: 3.5rem 1rem 3rem;
          background: radial-gradient(circle at center, #F8FAFC 0%, #E2E8F0 100%);
        }

        .ts-ambient {
          position: absolute;
          inset: 0;
          pointer-events: none;
          transition: background 0.9s ease;
        }

        /* ---------- Header ---------- */
        .ts-header {
          position: relative;
          z-index: 2;
          text-align: center;
          margin-bottom: 2.5rem;
        }

        .ts-eyebrow {
          display: inline-block;
          padding: 0.35rem 1rem;
          border: 1px solid;
          border-radius: 50px;
          font-size: 0.72rem;
          font-weight: 700;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          background: rgba(255,255,255,0.7);
          backdrop-filter: blur(8px);
          margin-bottom: 1rem;
          transition: color 0.7s ease, border-color 0.7s ease;
        }

        .ts-title {
          font-size: 1.9rem;
          font-weight: 800;
          color: #0F172A;
          margin: 0 0 0.5rem;
          line-height: 1.2;
        }

        .ts-subtitle { color: #64748B; font-size: 1rem; margin: 0; }

        /* ---------- Two-up stage ---------- */
        .ts-stage {
          position: relative;
          z-index: 2;
          display: grid;
          grid-template-columns: 1fr;
          gap: 1.5rem;
          max-width: 1120px;
          margin: 0 auto;
          align-items: stretch;
        }

        /* The slot is a fixed frame — cards vanish and rebuild inside it,
           they never travel sideways */
        .ts-slot {
          position: relative;
          min-height: 380px;
          display: flex;
        }

        .ts-card {
          position: relative;
          width: 100%;
          background: linear-gradient(135deg, rgba(255,255,255,0.97) 0%, rgba(248,250,252,0.99) 100%);
          backdrop-filter: blur(16px);
          border: 2px solid;
          border-radius: 26px;
          padding: 2rem 1.6rem 1.6rem;
          text-align: left;
          display: flex;
          flex-direction: column;
          transform-origin: center center;
        }

        /* --- Card phase animations --- */
        .ts-card.ts-building {
          animation: tsCardBuild 750ms cubic-bezier(0.22, 1, 0.36, 1) both;
        }
        .ts-card.ts-holding { opacity: 1; filter: none; transform: none; }
        .ts-card.ts-shattering {
          animation: tsCardShatter 750ms cubic-bezier(0.55, 0, 0.85, 0.35) both;
        }

        @keyframes tsCardBuild {
          0%   { opacity: 0; filter: blur(14px); transform: scale(0.9); }
          55%  { opacity: 0.75; filter: blur(4px); transform: scale(1.015); }
          100% { opacity: 1; filter: blur(0); transform: scale(1); }
        }

        @keyframes tsCardShatter {
          0%   { opacity: 1; filter: blur(0); transform: scale(1); }
          40%  { opacity: 0.6; filter: blur(5px); transform: scale(1.02); }
          100% { opacity: 0; filter: blur(16px); transform: scale(0.9); }
        }

        /* ---------- Particle field ---------- */
        .ts-pieces {
          position: absolute;
          inset: 0;
          pointer-events: none;
          border-radius: 26px;
          overflow: visible;
        }
        .ts-pieces.ts-holding { opacity: 0; }

        .ts-piece {
          position: absolute;
          border-radius: 50%;
          opacity: 0;
          will-change: transform, opacity;
        }

        .ts-pieces.ts-shattering .ts-piece {
          animation: tsPieceOut 750ms cubic-bezier(0.3, 0, 0.7, 1) both;
        }
        .ts-pieces.ts-building .ts-piece {
          animation: tsPieceIn 750ms cubic-bezier(0.3, 0, 0.7, 1) both;
        }

        /* Fly apart into scattered dots */
        @keyframes tsPieceOut {
          0%   { opacity: 0; transform: translate(-50%, -50%) scale(0.3); }
          22%  { opacity: 1; transform: translate(-50%, -50%) scale(1); }
          100% { opacity: 0; transform: translate(calc(-50% + var(--dx)), calc(-50% + var(--dy))) scale(0.15); }
        }

        /* Rush back in and settle into the rebuilt card */
        @keyframes tsPieceIn {
          0%   { opacity: 0; transform: translate(calc(-50% + var(--dx)), calc(-50% + var(--dy))) scale(0.15); }
          35%  { opacity: 1; }
          80%  { opacity: 0.7; transform: translate(-50%, -50%) scale(1); }
          100% { opacity: 0; transform: translate(-50%, -50%) scale(0.3); }
        }

        /* ---------- Card internals ---------- */
        .ts-quote-mark {
          position: absolute;
          top: 0.1rem;
          right: 1.25rem;
          font-size: 5.5rem;
          line-height: 1;
          font-family: Georgia, 'Times New Roman', serif;
          pointer-events: none;
          user-select: none;
        }

        .ts-stars { display: flex; gap: 0.15rem; margin-bottom: 0.9rem; font-size: 1rem; color: #F59E0B; }
        .ts-card.ts-building .ts-star,
        .ts-card.ts-holding .ts-star {
          animation: tsStarPop 0.45s cubic-bezier(0.175, 0.885, 0.32, 1.4) both;
        }
        @keyframes tsStarPop {
          0%   { opacity: 0; transform: scale(0.2) rotate(-40deg); }
          100% { opacity: 1; transform: scale(1) rotate(0deg); }
        }

        .ts-quote {
          margin: 0 0 1.25rem;
          font-size: 1rem;
          line-height: 1.65;
          color: #1E293B;
          font-weight: 500;
        }

        .ts-metrics { display: flex; gap: 0.6rem; margin-bottom: 1.25rem; flex-wrap: wrap; }

        .ts-metric {
          flex: 1 1 110px;
          border: 1px solid;
          border-radius: 14px;
          padding: 0.55rem 0.8rem;
          display: flex;
          flex-direction: column;
          gap: 0.1rem;
        }
        .ts-metric strong { font-size: 1.25rem; font-weight: 800; line-height: 1.1; }
        .ts-metric span {
          font-size: 0.66rem;
          font-weight: 600;
          letter-spacing: 0.8px;
          text-transform: uppercase;
          color: #64748B;
        }

        .ts-author { display: flex; align-items: center; gap: 0.8rem; margin-top: auto; }

        .ts-avatar {
          width: 50px; height: 50px;
          flex-shrink: 0;
          border-radius: 50%;
          display: flex; align-items: center; justify-content: center;
          color: #fff; font-weight: 800; font-size: 1rem; letter-spacing: 0.5px;
        }

        .ts-author-meta { min-width: 0; }
        .ts-name { font-weight: 800; font-size: 0.96rem; color: #0F172A; }
        .ts-role { font-size: 0.8rem; color: #475569; }
        .ts-location { font-size: 0.74rem; color: #94A3B8; margin-top: 0.15rem; }

        .ts-machine {
          display: flex; align-items: center; gap: 0.5rem;
          margin-top: 1rem; padding-top: 0.85rem;
          border-top: 1px solid;
          font-size: 0.76rem; font-weight: 600; color: #475569;
        }
        .ts-machine-dot { width: 8px; height: 8px; border-radius: 50%; flex-shrink: 0; }

        /* ---------- Pager ---------- */
        .ts-pager {
          position: relative;
          z-index: 2;
          display: flex;
          justify-content: center;
          gap: 0.5rem;
          margin-top: 2rem;
        }
        .ts-pagedot {
          width: 10px; height: 10px;
          border-radius: 50%;
          border: none;
          background: #CBD5E1;
          cursor: pointer;
          padding: 0;
          transition: all 0.35s ease;
        }
        .ts-pagedot.is-active { width: 32px; border-radius: 6px; }

        /* ============================================
           TABLET & UP — the two cards sit side by side
           ============================================ */
        @media (min-width: 768px) {
          .ts-section { padding: 5rem 2rem 4rem; }
          .ts-title { font-size: 2.5rem; }
          .ts-subtitle { font-size: 1.1rem; }
          .ts-stage { grid-template-columns: 1fr 1fr; gap: 2rem; }
          .ts-slot { min-height: 420px; }
          .ts-card { padding: 2.25rem 2rem 1.75rem; }
          .ts-quote { font-size: 1.05rem; }
          .ts-quote-mark { font-size: 7rem; }
          .ts-avatar { width: 56px; height: 56px; font-size: 1.1rem; }
        }

        @media (min-width: 1024px) {
          .ts-stage { gap: 2.5rem; }
          .ts-card { padding: 2.5rem 2.25rem 2rem; }
          .ts-quote { font-size: 1.1rem; line-height: 1.7; }
        }

        /* ============================================
           REDUCED MOTION — plain crossfade, no particles
           ============================================ */
        @media (prefers-reduced-motion: reduce) {
          .ts-pieces { display: none; }
          .ts-card.ts-building,
          .ts-card.ts-shattering,
          .ts-star {
            animation: none !important;
          }
          .ts-card.ts-building { opacity: 1; }
          .ts-card.ts-shattering { opacity: 0; transition: opacity 0.3s linear; }
        }
      `}})]})}},1900:(e,a,t)=>{"use strict";Object.defineProperty(a,"__esModule",{value:!0}),Object.defineProperty(a,"Image",{enumerable:!0,get:function(){return y}});let i=t(9694),r=t(7824),s=t(5344),n=r._(t(3729)),o=i._(t(1202)),l=i._(t(1758)),c=t(3855),d=t(3053),m=t(4187);t(837);let p=t(6150),f=i._(t(4931)),x={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!1};function b(e,a,t,i,r,s){let n=null==e?void 0:e.src;e&&e["data-loaded-src"]!==n&&(e["data-loaded-src"]=n,("decode"in e?e.decode():Promise.resolve()).catch(()=>{}).then(()=>{if(e.parentElement&&e.isConnected){if("empty"!==a&&r(!0),null==t?void 0:t.current){let a=new Event("load");Object.defineProperty(a,"target",{writable:!1,value:e});let i=!1,r=!1;t.current({...a,nativeEvent:a,currentTarget:e,target:e,isDefaultPrevented:()=>i,isPropagationStopped:()=>r,persist:()=>{},preventDefault:()=>{i=!0,a.preventDefault()},stopPropagation:()=>{r=!0,a.stopPropagation()}})}(null==i?void 0:i.current)&&i.current(e)}}))}function g(e){let[a,t]=n.version.split(".",2),i=parseInt(a,10),r=parseInt(t,10);return i>18||18===i&&r>=3?{fetchPriority:e}:{fetchpriority:e}}globalThis.__NEXT_IMAGE_IMPORTED=!0;let u=(0,n.forwardRef)((e,a)=>{let{src:t,srcSet:i,sizes:r,height:o,width:l,decoding:c,className:d,style:m,fetchPriority:p,placeholder:f,loading:x,unoptimized:u,fill:h,onLoadRef:y,onLoadingCompleteRef:k,setBlurComplete:w,setShowAltText:j,onLoad:v,onError:z,...N}=e;return(0,s.jsx)("img",{...N,...g(p),loading:x,width:l,height:o,decoding:c,"data-nimg":h?"fill":"1",className:d,style:m,sizes:r,srcSet:i,src:t,ref:(0,n.useCallback)(e=>{a&&("function"==typeof a?a(e):"object"==typeof a&&(a.current=e)),e&&(z&&(e.src=e.src),e.complete&&b(e,f,y,k,w,u))},[t,f,y,k,w,z,u,a]),onLoad:e=>{b(e.currentTarget,f,y,k,w,u)},onError:e=>{j(!0),"empty"!==f&&w(!0),z&&z(e)}})});function h(e){let{isAppRouter:a,imgAttributes:t}=e,i={as:"image",imageSrcSet:t.srcSet,imageSizes:t.sizes,crossOrigin:t.crossOrigin,referrerPolicy:t.referrerPolicy,...g(t.fetchPriority)};return a&&o.default.preload?(o.default.preload(t.src,i),null):(0,s.jsx)(l.default,{children:(0,s.jsx)("link",{rel:"preload",href:t.srcSet?void 0:t.src,...i},"__nimg-"+t.src+t.srcSet+t.sizes)})}let y=(0,n.forwardRef)((e,a)=>{let t=(0,n.useContext)(p.RouterContext),i=(0,n.useContext)(m.ImageConfigContext),r=(0,n.useMemo)(()=>{let e=x||i||d.imageConfigDefault,a=[...e.deviceSizes,...e.imageSizes].sort((e,a)=>e-a),t=e.deviceSizes.sort((e,a)=>e-a);return{...e,allSizes:a,deviceSizes:t}},[i]),{onLoad:o,onLoadingComplete:l}=e,b=(0,n.useRef)(o);(0,n.useEffect)(()=>{b.current=o},[o]);let g=(0,n.useRef)(l);(0,n.useEffect)(()=>{g.current=l},[l]);let[y,k]=(0,n.useState)(!1),[w,j]=(0,n.useState)(!1),{props:v,meta:z}=(0,c.getImgProps)(e,{defaultLoader:f.default,imgConf:r,blurComplete:y,showAltText:w});return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(u,{...v,unoptimized:z.unoptimized,placeholder:z.placeholder,fill:z.fill,onLoadRef:b,onLoadingCompleteRef:g,setBlurComplete:k,setShowAltText:j,ref:a}),z.priority?(0,s.jsx)(h,{isAppRouter:!t,imgAttributes:v}):null]})});("function"==typeof a.default||"object"==typeof a.default&&null!==a.default)&&void 0===a.default.__esModule&&(Object.defineProperty(a.default,"__esModule",{value:!0}),Object.assign(a.default,a),e.exports=a.default)},9408:()=>{},7637:(e,a,t)=>{"use strict";e.exports=t(6372).vendored.contexts.AmpContext},2158:(e,a,t)=>{"use strict";e.exports=t(6372).vendored.contexts.HeadManagerContext},4187:(e,a,t)=>{"use strict";e.exports=t(6372).vendored.contexts.ImageConfigContext},3126:(e,a)=>{"use strict";function t(e){let{ampFirst:a=!1,hybrid:t=!1,hasQuery:i=!1}=void 0===e?{}:e;return a||t&&i}Object.defineProperty(a,"__esModule",{value:!0}),Object.defineProperty(a,"isInAmpMode",{enumerable:!0,get:function(){return t}})},3855:(e,a,t)=>{"use strict";Object.defineProperty(a,"__esModule",{value:!0}),Object.defineProperty(a,"getImgProps",{enumerable:!0,get:function(){return o}}),t(837);let i=t(6358),r=t(3053);function s(e){return void 0!==e.default}function n(e){return void 0===e?e:"number"==typeof e?Number.isFinite(e)?e:NaN:"string"==typeof e&&/^[0-9]+$/.test(e)?parseInt(e,10):NaN}function o(e,a){var t;let o,l,c,{src:d,sizes:m,unoptimized:p=!1,priority:f=!1,loading:x,className:b,quality:g,width:u,height:h,fill:y=!1,style:k,onLoad:w,onLoadingComplete:j,placeholder:v="empty",blurDataURL:z,fetchPriority:N,layout:D,objectFit:C,objectPosition:S,lazyBoundary:M,lazyRoot:F,...E}=e,{imgConf:P,showAltText:A,blurComplete:T,defaultLoader:I}=a,R=P||r.imageConfigDefault;if("allSizes"in R)o=R;else{let e=[...R.deviceSizes,...R.imageSizes].sort((e,a)=>e-a),a=R.deviceSizes.sort((e,a)=>e-a);o={...R,allSizes:e,deviceSizes:a}}let _=E.loader||I;delete E.loader,delete E.srcSet;let O="__next_img_default"in _;if(O){if("custom"===o.loader)throw Error('Image with src "'+d+'" is missing "loader" prop.\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader')}else{let e=_;_=a=>{let{config:t,...i}=a;return e(i)}}if(D){"fill"===D&&(y=!0);let e={intrinsic:{maxWidth:"100%",height:"auto"},responsive:{width:"100%",height:"auto"}}[D];e&&(k={...k,...e});let a={responsive:"100vw",fill:"100vw"}[D];a&&!m&&(m=a)}let $="",L=n(u),B=n(h);if("object"==typeof(t=d)&&(s(t)||void 0!==t.src)){let e=s(d)?d.default:d;if(!e.src)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received "+JSON.stringify(e));if(!e.height||!e.width)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received "+JSON.stringify(e));if(l=e.blurWidth,c=e.blurHeight,z=z||e.blurDataURL,$=e.src,!y){if(L||B){if(L&&!B){let a=L/e.width;B=Math.round(e.height*a)}else if(!L&&B){let a=B/e.height;L=Math.round(e.width*a)}}else L=e.width,B=e.height}}let W=!f&&("lazy"===x||void 0===x);(!(d="string"==typeof d?d:$)||d.startsWith("data:")||d.startsWith("blob:"))&&(p=!0,W=!1),o.unoptimized&&(p=!0),O&&d.endsWith(".svg")&&!o.dangerouslyAllowSVG&&(p=!0),f&&(N="high");let q=n(g),Y=Object.assign(y?{position:"absolute",height:"100%",width:"100%",left:0,top:0,right:0,bottom:0,objectFit:C,objectPosition:S}:{},A?{}:{color:"transparent"},k),G=T||"empty"===v?null:"blur"===v?'url("data:image/svg+xml;charset=utf-8,'+(0,i.getImageBlurSvg)({widthInt:L,heightInt:B,blurWidth:l,blurHeight:c,blurDataURL:z||"",objectFit:Y.objectFit})+'")':'url("'+v+'")',H=G?{backgroundSize:Y.objectFit||"cover",backgroundPosition:Y.objectPosition||"50% 50%",backgroundRepeat:"no-repeat",backgroundImage:G}:{},U=function(e){let{config:a,src:t,unoptimized:i,width:r,quality:s,sizes:n,loader:o}=e;if(i)return{src:t,srcSet:void 0,sizes:void 0};let{widths:l,kind:c}=function(e,a,t){let{deviceSizes:i,allSizes:r}=e;if(t){let e=/(^|\s)(1?\d?\d)vw/g,a=[];for(let i;i=e.exec(t);i)a.push(parseInt(i[2]));if(a.length){let e=.01*Math.min(...a);return{widths:r.filter(a=>a>=i[0]*e),kind:"w"}}return{widths:r,kind:"w"}}return"number"!=typeof a?{widths:i,kind:"w"}:{widths:[...new Set([a,2*a].map(e=>r.find(a=>a>=e)||r[r.length-1]))],kind:"x"}}(a,r,n),d=l.length-1;return{sizes:n||"w"!==c?n:"100vw",srcSet:l.map((e,i)=>o({config:a,src:t,quality:s,width:e})+" "+("w"===c?e:i+1)+c).join(", "),src:o({config:a,src:t,quality:s,width:l[d]})}}({config:o,src:d,unoptimized:p,width:L,quality:q,sizes:m,loader:_});return{props:{...E,loading:W?"lazy":x,fetchPriority:N,width:L,height:B,decoding:"async",className:b,style:{...Y,...H},sizes:U.sizes,srcSet:U.srcSet,src:U.src},meta:{unoptimized:p,priority:f,placeholder:v,fill:y}}}},1758:(e,a,t)=>{"use strict";Object.defineProperty(a,"__esModule",{value:!0}),function(e,a){for(var t in a)Object.defineProperty(e,t,{enumerable:!0,get:a[t]})}(a,{defaultHead:function(){return m},default:function(){return b}});let i=t(9694),r=t(7824),s=t(5344),n=r._(t(3729)),o=i._(t(7984)),l=t(7637),c=t(2158),d=t(3126);function m(e){void 0===e&&(e=!1);let a=[(0,s.jsx)("meta",{charSet:"utf-8"})];return e||a.push((0,s.jsx)("meta",{name:"viewport",content:"width=device-width"})),a}function p(e,a){return"string"==typeof a||"number"==typeof a?e:a.type===n.default.Fragment?e.concat(n.default.Children.toArray(a.props.children).reduce((e,a)=>"string"==typeof a||"number"==typeof a?e:e.concat(a),[])):e.concat(a)}t(837);let f=["name","httpEquiv","charSet","itemProp"];function x(e,a){let{inAmpMode:t}=a;return e.reduce(p,[]).reverse().concat(m(t).reverse()).filter(function(){let e=new Set,a=new Set,t=new Set,i={};return r=>{let s=!0,n=!1;if(r.key&&"number"!=typeof r.key&&r.key.indexOf("$")>0){n=!0;let a=r.key.slice(r.key.indexOf("$")+1);e.has(a)?s=!1:e.add(a)}switch(r.type){case"title":case"base":a.has(r.type)?s=!1:a.add(r.type);break;case"meta":for(let e=0,a=f.length;e<a;e++){let a=f[e];if(r.props.hasOwnProperty(a)){if("charSet"===a)t.has(a)?s=!1:t.add(a);else{let e=r.props[a],t=i[a]||new Set;("name"!==a||!n)&&t.has(e)?s=!1:(t.add(e),i[a]=t)}}}}return s}}()).reverse().map((e,a)=>{let i=e.key||a;if(!t&&"link"===e.type&&e.props.href&&["https://fonts.googleapis.com/css","https://use.typekit.net/"].some(a=>e.props.href.startsWith(a))){let a={...e.props||{}};return a["data-href"]=a.href,a.href=void 0,a["data-optimized-fonts"]=!0,n.default.cloneElement(e,a)}return n.default.cloneElement(e,{key:i})})}let b=function(e){let{children:a}=e,t=(0,n.useContext)(l.AmpStateContext),i=(0,n.useContext)(c.HeadManagerContext);return(0,s.jsx)(o.default,{reduceComponentsToState:x,headManager:i,inAmpMode:(0,d.isInAmpMode)(t),children:a})};("function"==typeof a.default||"object"==typeof a.default&&null!==a.default)&&void 0===a.default.__esModule&&(Object.defineProperty(a.default,"__esModule",{value:!0}),Object.assign(a.default,a),e.exports=a.default)},6358:(e,a)=>{"use strict";function t(e){let{widthInt:a,heightInt:t,blurWidth:i,blurHeight:r,blurDataURL:s,objectFit:n}=e,o=i?40*i:a,l=r?40*r:t,c=o&&l?"viewBox='0 0 "+o+" "+l+"'":"";return"%3Csvg xmlns='http://www.w3.org/2000/svg' "+c+"%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3CfeColorMatrix values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1' result='s'/%3E%3CfeFlood x='0' y='0' width='100%25' height='100%25'/%3E%3CfeComposite operator='out' in='s'/%3E%3CfeComposite in2='SourceGraphic'/%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3C/filter%3E%3Cimage width='100%25' height='100%25' x='0' y='0' preserveAspectRatio='"+(c?"none":"contain"===n?"xMidYMid":"cover"===n?"xMidYMid slice":"none")+"' style='filter: url(%23b);' href='"+s+"'/%3E%3C/svg%3E"}Object.defineProperty(a,"__esModule",{value:!0}),Object.defineProperty(a,"getImageBlurSvg",{enumerable:!0,get:function(){return t}})},3053:(e,a)=>{"use strict";Object.defineProperty(a,"__esModule",{value:!0}),function(e,a){for(var t in a)Object.defineProperty(e,t,{enumerable:!0,get:a[t]})}(a,{VALID_LOADERS:function(){return t},imageConfigDefault:function(){return i}});let t=["default","imgix","cloudinary","akamai","custom"],i={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",loaderFile:"",domains:[],disableStaticImages:!1,minimumCacheTTL:60,formats:["image/webp"],dangerouslyAllowSVG:!1,contentSecurityPolicy:"script-src 'none'; frame-src 'none'; sandbox;",contentDispositionType:"inline",remotePatterns:[],unoptimized:!1}},7412:(e,a,t)=>{"use strict";Object.defineProperty(a,"__esModule",{value:!0}),function(e,a){for(var t in a)Object.defineProperty(e,t,{enumerable:!0,get:a[t]})}(a,{getImageProps:function(){return o},default:function(){return l}});let i=t(9694),r=t(3855),s=t(1900),n=i._(t(4931)),o=e=>{let{props:a}=(0,r.getImgProps)(e,{defaultLoader:n.default,imgConf:{deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!1}});for(let[e,t]of Object.entries(a))void 0===t&&delete a[e];return{props:a}},l=s.Image},4931:(e,a)=>{"use strict";function t(e){let{config:a,src:t,width:i,quality:r}=e;return a.path+"?url="+encodeURIComponent(t)+"&w="+i+"&q="+(r||75)}Object.defineProperty(a,"__esModule",{value:!0}),Object.defineProperty(a,"default",{enumerable:!0,get:function(){return i}}),t.__next_img_default=!0;let i=t},7984:(e,a,t)=>{"use strict";Object.defineProperty(a,"__esModule",{value:!0}),Object.defineProperty(a,"default",{enumerable:!0,get:function(){return n}});let i=t(3729),r=()=>{},s=()=>{};function n(e){var a;let{headManager:t,reduceComponentsToState:n}=e;function o(){if(t&&t.mountedInstances){let a=i.Children.toArray(Array.from(t.mountedInstances).filter(Boolean));t.updateHead(n(a,e))}}return null==t||null==(a=t.mountedInstances)||a.add(e.children),o(),r(()=>{var a;return null==t||null==(a=t.mountedInstances)||a.add(e.children),()=>{var a;null==t||null==(a=t.mountedInstances)||a.delete(e.children)}}),r(()=>(t&&(t._pendingUpdate=o),()=>{t&&(t._pendingUpdate=o)})),s(()=>(t&&t._pendingUpdate&&(t._pendingUpdate(),t._pendingUpdate=null),()=>{t&&t._pendingUpdate&&(t._pendingUpdate(),t._pendingUpdate=null)})),null}},8630:(e,a,t)=>{t(9408);var i=t(3729),r=function(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}(i);function s(e,a){for(var t=0;t<a.length;t++){var i=a[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}var n="undefined"!=typeof process&&process.env&&!0,o=function(e){return"[object String]"===Object.prototype.toString.call(e)},l=function(){function e(e){var a=void 0===e?{}:e,t=a.name,i=void 0===t?"stylesheet":t,r=a.optimizeForSpeed,s=void 0===r?n:r;c(o(i),"`name` must be a string"),this._name=i,this._deletedRulePlaceholder="#"+i+"-deleted-rule____{}",c("boolean"==typeof s,"`optimizeForSpeed` must be a boolean"),this._optimizeForSpeed=s,this._serverSheet=void 0,this._tags=[],this._injected=!1,this._rulesCount=0,this._nonce=null}var a,t=e.prototype;return t.setOptimizeForSpeed=function(e){c("boolean"==typeof e,"`setOptimizeForSpeed` accepts a boolean"),c(0===this._rulesCount,"optimizeForSpeed cannot be when rules have already been inserted"),this.flush(),this._optimizeForSpeed=e,this.inject()},t.isOptimizeForSpeed=function(){return this._optimizeForSpeed},t.inject=function(){var e=this;c(!this._injected,"sheet already injected"),this._injected=!0,this._serverSheet={cssRules:[],insertRule:function(a,t){return"number"==typeof t?e._serverSheet.cssRules[t]={cssText:a}:e._serverSheet.cssRules.push({cssText:a}),t},deleteRule:function(a){e._serverSheet.cssRules[a]=null}}},t.getSheetForTag=function(e){if(e.sheet)return e.sheet;for(var a=0;a<document.styleSheets.length;a++)if(document.styleSheets[a].ownerNode===e)return document.styleSheets[a]},t.getSheet=function(){return this.getSheetForTag(this._tags[this._tags.length-1])},t.insertRule=function(e,a){return c(o(e),"`insertRule` accepts only strings"),"number"!=typeof a&&(a=this._serverSheet.cssRules.length),this._serverSheet.insertRule(e,a),this._rulesCount++},t.replaceRule=function(e,a){this._optimizeForSpeed;var t=this._serverSheet;if(a.trim()||(a=this._deletedRulePlaceholder),!t.cssRules[e])return e;t.deleteRule(e);try{t.insertRule(a,e)}catch(i){n||console.warn("StyleSheet: illegal rule: \n\n"+a+"\n\nSee https://stackoverflow.com/q/20007992 for more info"),t.insertRule(this._deletedRulePlaceholder,e)}return e},t.deleteRule=function(e){this._serverSheet.deleteRule(e)},t.flush=function(){this._injected=!1,this._rulesCount=0,this._serverSheet.cssRules=[]},t.cssRules=function(){return this._serverSheet.cssRules},t.makeStyleTag=function(e,a,t){a&&c(o(a),"makeStyleTag accepts only strings as second parameter");var i=document.createElement("style");this._nonce&&i.setAttribute("nonce",this._nonce),i.type="text/css",i.setAttribute("data-"+e,""),a&&i.appendChild(document.createTextNode(a));var r=document.head||document.getElementsByTagName("head")[0];return t?r.insertBefore(i,t):r.appendChild(i),i},s(e.prototype,[{key:"length",get:function(){return this._rulesCount}}]),a&&s(e,a),e}();function c(e,a){if(!e)throw Error("StyleSheet: "+a+".")}var d=function(e){for(var a=5381,t=e.length;t;)a=33*a^e.charCodeAt(--t);return a>>>0},m={};function p(e,a){if(!a)return"jsx-"+e;var t=String(a),i=e+t;return m[i]||(m[i]="jsx-"+d(e+"-"+t)),m[i]}function f(e,a){var t=e+(a=a.replace(/\/style/gi,"\\/style"));return m[t]||(m[t]=a.replace(/__jsx-style-dynamic-selector/g,e)),m[t]}var x=i.createContext(null);x.displayName="StyleSheetContext",r.default.useInsertionEffect||r.default.useLayoutEffect;var b=void 0;function g(e){var a=b||i.useContext(x);return a&&a.add(e),null}g.dynamic=function(e){return e.map(function(e){return p(e[0],e[1])}).join(" ")},a.style=g},7983:(e,a,t)=>{"use strict";e.exports=t(8630).style},2737:(e,a,t)=>{"use strict";t.r(a),t.d(a,{default:()=>Q});var i=t(5036),r=t(8406),s=t(6843);let n=(0,s.createProxy)(String.raw`C:\EdgeXai Labs LLP\special-spoon\components\Hero.tsx`),{__esModule:o,$$typeof:l}=n,c=n.default;var d=t(6966);let m=(0,s.createProxy)(String.raw`C:\EdgeXai Labs LLP\special-spoon\components\Industries.tsx`),{__esModule:p,$$typeof:f}=m,x=m.default,b=(0,s.createProxy)(String.raw`C:\EdgeXai Labs LLP\special-spoon\components\Products.tsx`),{__esModule:g,$$typeof:u}=b,h=b.default,y=(0,s.createProxy)(String.raw`C:\EdgeXai Labs LLP\special-spoon\components\Solutions.tsx`),{__esModule:k,$$typeof:w}=y,j=y.default,v=(0,s.createProxy)(String.raw`C:\EdgeXai Labs LLP\special-spoon\components\Benefits.tsx`),{__esModule:z,$$typeof:N}=v,D=v.default,C=(0,s.createProxy)(String.raw`C:\EdgeXai Labs LLP\special-spoon\components\Comparison.tsx`),{__esModule:S,$$typeof:M}=C,F=C.default,E=(0,s.createProxy)(String.raw`C:\EdgeXai Labs LLP\special-spoon\components\Support.tsx`),{__esModule:P,$$typeof:A}=E,T=E.default;function I(){return(0,i.jsxs)("section",{className:"section bg-card",children:[(0,i.jsxs)("div",{className:"section-header",children:[i.jsx("h2",{className:"section-title",children:"Need a Machine That Doesn't Exist?"}),i.jsx("p",{className:"section-subtitle",children:"Our engineering team designs and manufactures custom food processing machinery based on your production requirements."})]}),i.jsx("div",{style:{maxWidth:"900px",margin:"0 auto",textAlign:"center"},children:(0,i.jsxs)("div",{className:"feature-box",children:[i.jsx("h3",{children:"We Convert Your Production Challenges Into Engineered Solutions"}),i.jsx("p",{children:"Every food manufacturer has unique requirements. Standard machines don't always fit. That's where our custom engineering team steps in. We design, prototype, test and manufacture machinery specifically for your production needs."}),i.jsx("div",{style:{marginTop:"1.25rem"},children:i.jsx("a",{href:"#contact",className:"btn btn-primary",children:"Discuss Your Requirement"})})]})})]})}let R=(0,s.createProxy)(String.raw`C:\EdgeXai Labs LLP\special-spoon\components\TestimonialSlider.tsx`),{__esModule:_,$$typeof:O}=R,$=R.default;function L(){return(0,i.jsxs)("section",{className:"section bg-dark",children:[(0,i.jsxs)("div",{className:"section-header",children:[i.jsx("h2",{className:"section-title",children:"Success Stories"}),i.jsx("p",{className:"section-subtitle",children:"Real results from real customers"})]}),i.jsx("div",{className:"grid grid-2",children:[{company:"Snack Food Manufacturer, Gujarat",product:"Potato Chips Production Line",quote:'"After installing the automated chips line, our production increased by 60% while our oil consumption dropped by 30%. The machine reliability and after-sales support have been excellent."',stats:[{value:"+60%",label:"Production"},{value:"-30%",label:"Oil Cost"},{value:"8 Months",label:"ROI"}]},{company:"Namkeen Producer, Rajasthan",product:"Automatic Fryer System",quote:'"The machine quality is outstanding and the support team has been incredibly responsive. We\'ve reduced our labor requirement by 40% and product quality is much more consistent now."',stats:[{value:"-40%",label:"Labour"},{value:"100%",label:"Consistency"},{value:"3 Years",label:"No Breakdown"}]}].map((e,a)=>(0,i.jsxs)("div",{className:"card testimonial-card",children:[(0,i.jsxs)("div",{style:{marginBottom:"0.75rem"},children:[i.jsx("div",{style:{color:"var(--accent)",fontSize:"1.2rem",fontWeight:600},children:e.company}),i.jsx("div",{style:{color:"var(--text-secondary)",fontSize:"0.9rem"},children:e.product})]}),i.jsx("p",{style:{color:"var(--text-primary)",lineHeight:1.6,marginBottom:"1rem"},children:e.quote}),i.jsx("div",{className:"testimonial-stats",children:e.stats.map((e,a)=>(0,i.jsxs)("div",{children:[i.jsx("div",{style:{color:"var(--accent)",fontSize:"1.5rem",fontWeight:700},children:e.value}),i.jsx("div",{style:{color:"var(--text-secondary)",fontSize:"0.9rem"},children:e.label})]},a))})]},a))})]})}function B(){return(0,i.jsxs)("section",{className:"section bg-card",children:[(0,i.jsxs)("div",{className:"section-header",children:[i.jsx("h2",{className:"section-title",children:"Frequently Asked Questions"}),i.jsx("p",{className:"section-subtitle",children:"Everything you need to know about our machines and services"})]}),i.jsx("div",{className:"faq-container",children:[{question:"Can you customize machines according to our requirements?",answer:"Yes, absolutely. Custom machine design is one of our core strengths. Our engineering team can modify existing designs or create completely new machines based on your production needs, space constraints, and output requirements."},{question:"Do you provide installation and commissioning?",answer:"Yes, we provide complete installation and commissioning services. Our technicians will set up the machine at your facility, test it, and ensure it's running at optimal performance before handover."},{question:"Do you provide operator training?",answer:"Yes, comprehensive operator training is included. We train your team on machine operation, basic troubleshooting, cleaning procedures, and safety protocols. Training materials and manuals are also provided."},{question:"Do you provide spare parts?",answer:"Yes, we maintain inventory of all critical spare parts and can dispatch them quickly across India. All parts are genuine and manufactured to the same quality standards as the original machine."},{question:"What is the warranty period?",answer:"We provide a standard warranty on all machines. The warranty period varies by machine type and is clearly specified in the quotation. Extended warranty and AMC options are also available."},{question:"What is the typical delivery time?",answer:"Delivery time depends on the machine type and customization level. Standard machines typically take 4-8 weeks, while custom-designed equipment may take 8-12 weeks. Exact timelines are confirmed during quotation."},{question:"Do you export machines internationally?",answer:"Yes, we export to multiple countries. Our machines meet international food processing standards and we can handle export documentation, packaging, and shipping logistics."},{question:"Do you offer Annual Maintenance Contracts (AMC)?",answer:"Yes, we offer comprehensive AMC plans that include scheduled preventive maintenance, priority support, discounted spare parts, and free inspections. AMC ensures your machine runs at peak performance year-round."}].map((e,a)=>(0,i.jsxs)("div",{className:"faq-item",children:[i.jsx("h3",{children:e.question}),i.jsx("p",{children:e.answer})]},a))})]})}let W=(0,s.createProxy)(String.raw`C:\EdgeXai Labs LLP\special-spoon\components\Contact.tsx`),{__esModule:q,$$typeof:Y}=W,G=W.default;var H=t(8392);let U=(0,s.createProxy)(String.raw`C:\EdgeXai Labs LLP\special-spoon\components\SplashGate.tsx`),{__esModule:V,$$typeof:X}=U,K=U.default;function Q(){return(0,i.jsxs)(K,{children:[i.jsx(r.ZP,{}),(0,i.jsxs)("main",{children:[i.jsx(c,{}),i.jsx(d.Z,{}),i.jsx(x,{}),i.jsx(h,{}),i.jsx(j,{}),i.jsx(D,{}),i.jsx(F,{}),i.jsx(T,{}),i.jsx(I,{}),i.jsx($,{}),i.jsx(L,{}),i.jsx(B,{}),i.jsx(G,{})]}),i.jsx(H.ZP,{})]})}},3297:()=>{}};var a=require("../webpack-runtime.js");a.C(e);var t=e=>a(a.s=e),i=a.X(0,[22,506,686],()=>t(8923));module.exports=i})();