'use client'

import React from "react";

export default function UpgradeScene() {
  return (
    <div className="upgrade-scene">

      {/* Background */}
      <div className="grid" />

      {/* Old Machine */}
      <div className="machine old">
        <div className="screen" />
      </div>

      {/* Upgrade Beam */}
      <div className="beam">
        <div className="particles" />
      </div>

      {/* New Machine */}
      <div className="machine modern">
        <div className="screen" />
        <div className="wifi">
          <span />
          <span />
          <span />
        </div>
      </div>

      {/* Upgrade Progress */}
      <div className="progress">

        <div className="title">
          SYSTEM UPGRADE
        </div>

        <div className="bar">
          <div className="fill" />
        </div>

        <div className="status">
          Installing firmware...
        </div>

      </div>

      {/* Floating Tech Icons */}

      <div className="icon cpu">💻</div>
      <div className="icon chip">🧠</div>
      <div className="icon cloud">☁️</div>
      <div className="icon ai">⚡</div>

      {/* Data Packets */}

      <span className="packet p1"/>
      <span className="packet p2"/>
      <span className="packet p3"/>
      <span className="packet p4"/>

      {/* Labels */}

      <div className="label l1">
        LEGACY SYSTEM
      </div>

      <div className="label l2">
        AI ENABLED
      </div>

      <div className="label l3">
        REMOTE MONITORING
      </div>

      <style jsx>{`

.upgrade-scene{
position:absolute;
inset:0;
overflow:hidden;
border-radius:24px;
background:linear-gradient(180deg,#0b1b30,#071018);
}

/* Grid */

.grid{
position:absolute;
inset:0;
background-image:
linear-gradient(rgba(255,255,255,.05) 1px,transparent 1px),
linear-gradient(90deg,rgba(255,255,255,.05) 1px,transparent 1px);
background-size:40px 40px;
animation:gridMove 14s linear infinite;
}

/* Machines */

.machine{
position:absolute;
top:32%;
width:160px;
height:140px;
border-radius:12px;
border:2px solid #38bdf8;
}

.old{
left:10%;
background:#374151;
opacity:.6;
}

.modern{
right:10%;
background:#0f3d62;
box-shadow:0 0 30px rgba(56,189,248,.45);
}

.screen{
position:absolute;
left:25px;
top:22px;
width:110px;
height:60px;
background:#22c55e;
border-radius:6px;
animation:screenGlow 2s infinite;
}

/* Beam */

.beam{
position:absolute;
left:50%;
top:50%;
width:220px;
height:8px;
transform:translate(-50%,-50%);
background:linear-gradient(90deg,
transparent,
#38bdf8,
transparent);
overflow:hidden;
}

.particles{
position:absolute;
inset:0;
background:
repeating-linear-gradient(
90deg,
transparent 0 18px,
white 18px 22px);
animation:dataFlow 2s linear infinite;
}

/* Progress */

.progress{
position:absolute;
left:50%;
top:14%;
transform:translateX(-50%);
width:260px;
padding:16px;
background:rgba(15,23,42,.9);
border:1px solid #38bdf8;
border-radius:12px;
}

.title{
text-align:center;
color:#38bdf8;
letter-spacing:3px;
font-size:13px;
}

.bar{
margin-top:14px;
height:10px;
background:#1e293b;
border-radius:20px;
overflow:hidden;
}

.fill{
height:100%;
width:0;
background:#22c55e;
animation:loading 4s infinite;
}

.status{
margin-top:10px;
font-size:12px;
text-align:center;
color:#cbd5e1;
}

/* WiFi */

.wifi{
position:absolute;
top:-26px;
left:58px;
}

.wifi span{
display:block;
width:26px;
height:26px;
border:2px solid #38bdf8;
border-color:#38bdf8 transparent transparent transparent;
border-radius:50%;
margin-top:-16px;
animation:wifi 2s infinite;
}

.wifi span:nth-child(2){
animation-delay:.4s;
}

.wifi span:nth-child(3){
animation-delay:.8s;
}

/* Icons */

.icon{
position:absolute;
font-size:28px;
animation:float 5s infinite ease-in-out;
}

.cpu{left:20%;top:15%;}
.chip{right:18%;top:18%;animation-delay:1s;}
.cloud{left:24%;bottom:18%;animation-delay:2s;}
.ai{right:22%;bottom:16%;animation-delay:3s;}

/* Packets */

.packet{
position:absolute;
width:8px;
height:8px;
background:#38bdf8;
border-radius:50%;
box-shadow:0 0 10px #38bdf8;
animation:packet 3s linear infinite;
}

.p1{top:48%;left:32%;}
.p2{top:50%;left:36%;animation-delay:.7s;}
.p3{top:46%;left:40%;animation-delay:1.4s;}
.p4{top:52%;left:44%;animation-delay:2.1s;}

/* Labels */

.label{
position:absolute;
font-size:12px;
letter-spacing:3px;
color:#cbd5e1;
animation:float 5s infinite;
}

.l1{left:8%;bottom:8%;}
.l2{right:8%;bottom:8%;animation-delay:1s;}
.l3{left:36%;top:90%;animation-delay:2s;}

/* Animations */

@keyframes loading{
0%{width:0;}
100%{width:100%;}
}

@keyframes dataFlow{
from{background-position:0;}
to{background-position:40px;}
}

@keyframes packet{
0%{
transform:translateX(0);
opacity:0;
}
20%{
opacity:1;
}
100%{
transform:translateX(360px);
opacity:0;
}
}

@keyframes wifi{
0%,100%{opacity:.2;}
50%{opacity:1;}
}

@keyframes screenGlow{
0%,100%{box-shadow:0 0 8px #22c55e;}
50%{box-shadow:0 0 20px #22c55e;}
}

@keyframes float{
0%,100%{transform:translateY(0);}
50%{transform:translateY(-10px);}
}

@keyframes gridMove{
from{background-position:0 0;}
to{background-position:40px 40px;}
}

      `}</style>

    </div>
  );
}