'use client'

import React from 'react'

export default function BlueprintScene() {
  return (
    <div className="blueprint-scene">

      {/* Background Grid */}
      <div className="bp-grid" />

      {/* Horizontal Scan */}
      <div className="bp-scan" />

      {/* Factory Layout */}
      <svg
        className="bp-layout"
        viewBox="0 0 900 500"
        preserveAspectRatio="none"
      >
        {/* Outer Factory */}
        <rect
          x="80"
          y="60"
          width="740"
          height="360"
          className="bp-outline"
        />

        {/* Machine Blocks */}
        <rect
          x="130"
          y="110"
          width="130"
          height="90"
          className="bp-room delay1"
        />

        <rect
          x="330"
          y="110"
          width="160"
          height="90"
          className="bp-room delay2"
        />

        <rect
          x="560"
          y="110"
          width="180"
          height="90"
          className="bp-room delay3"
        />

        <rect
          x="130"
          y="260"
          width="210"
          height="100"
          className="bp-room delay4"
        />

        <rect
          x="420"
          y="260"
          width="320"
          height="100"
          className="bp-room delay5"
        />

        {/* Conveyor */}
        <line
          x1="260"
          y1="155"
          x2="330"
          y2="155"
          className="bp-line delay2"
        />

        <line
          x1="490"
          y1="155"
          x2="560"
          y2="155"
          className="bp-line delay3"
        />

        <line
          x1="235"
          y1="200"
          x2="235"
          y2="260"
          className="bp-line delay4"
        />

        <line
          x1="340"
          y1="310"
          x2="420"
          y2="310"
          className="bp-line delay5"
        />

        {/* Dimensions */}
        <line
          x1="80"
          y1="40"
          x2="820"
          y2="40"
          className="bp-measure"
        />

        <line
          x1="80"
          y1="40"
          x2="80"
          y2="55"
          className="bp-measure"
        />

        <line
          x1="820"
          y1="40"
          x2="820"
          y2="55"
          className="bp-measure"
        />

        <text
          x="450"
          y="32"
          className="bp-text"
        >
          FACTORY LAYOUT
        </text>
      </svg>

      {/* Pulse Nodes */}
      <span className="bp-node n1"></span>
      <span className="bp-node n2"></span>
      <span className="bp-node n3"></span>
      <span className="bp-node n4"></span>

      {/* Floating CAD Labels */}
      <div className="bp-label l1">CAD</div>
      <div className="bp-label l2">FLOW</div>
      <div className="bp-label l3">LAYOUT</div>

      <style jsx>{`
        .blueprint-scene {
          position: absolute;
          inset: 0;
          overflow: hidden;
          border-radius: 24px;
          background:
            radial-gradient(circle at center,#123e73 0%,#09101b 75%);
        }

        .bp-grid{
          position:absolute;
          inset:0;
          background-image:
            linear-gradient(rgba(96,165,250,.08) 1px,transparent 1px),
            linear-gradient(90deg,rgba(96,165,250,.08) 1px,transparent 1px);

          background-size:40px 40px;
          animation:gridMove 15s linear infinite;
        }

        .bp-layout{
          position:absolute;
          inset:0;
          width:100%;
          height:100%;
          opacity:.8;
        }

        .bp-outline{
          fill:none;
          stroke:#60a5fa;
          stroke-width:2;
          stroke-dasharray:1800;
          stroke-dashoffset:1800;
          animation:draw 5s forwards infinite;
        }

        .bp-room{
          fill:rgba(59,130,246,.08);
          stroke:#60a5fa;
          stroke-width:2;
          stroke-dasharray:500;
          stroke-dashoffset:500;
          animation:draw 2s forwards;
          animation-iteration-count:infinite;
        }

        .bp-line{
          stroke:#60a5fa;
          stroke-width:2;
          stroke-dasharray:200;
          stroke-dashoffset:200;
          animation:draw 2s forwards infinite;
        }

        .bp-measure{
          stroke:#93c5fd;
          stroke-width:1;
          stroke-dasharray:6;
        }

        .bp-text{
          fill:#bfdbfe;
          font-size:20px;
          text-anchor:middle;
          font-family:sans-serif;
          letter-spacing:4px;
        }

        .bp-scan{
          position:absolute;
          width:100%;
          height:3px;
          background:#7dd3fc;
          box-shadow:0 0 20px #38bdf8;
          animation:scan 4s linear infinite;
        }

        .bp-node{
          position:absolute;
          width:10px;
          height:10px;
          background:#93c5fd;
          border-radius:50%;
          box-shadow:0 0 15px #60a5fa;
          animation:pulse 2s infinite;
        }

        .n1{left:20%;top:28%;}
        .n2{left:42%;top:33%;}
        .n3{left:70%;top:30%;}
        .n4{left:55%;top:63%;}

        .bp-label{
          position:absolute;
          color:#bfdbfe;
          font-size:12px;
          letter-spacing:2px;
          opacity:.6;
          animation:float 5s ease-in-out infinite;
        }

        .l1{left:12%;top:10%;}
        .l2{right:18%;top:20%;animation-delay:1s;}
        .l3{left:60%;bottom:18%;animation-delay:2s;}

        .delay1{animation-delay:.3s;}
        .delay2{animation-delay:.8s;}
        .delay3{animation-delay:1.3s;}
        .delay4{animation-delay:1.8s;}
        .delay5{animation-delay:2.3s;}

        @keyframes draw{
          to{
            stroke-dashoffset:0;
          }
        }

        @keyframes scan{
          from{
            transform:translateY(-20px);
          }
          to{
            transform:translateY(520px);
          }
        }

        @keyframes pulse{
          0%,100%{
            transform:scale(1);
            opacity:.6;
          }
          50%{
            transform:scale(1.7);
            opacity:1;
          }
        }

        @keyframes float{
          0%,100%{
            transform:translateY(0);
          }
          50%{
            transform:translateY(-10px);
          }
        }

        @keyframes gridMove{
          from{
            background-position:0 0;
          }
          to{
            background-position:40px 40px;
          }
        }
      `}</style>

    </div>
  )
}