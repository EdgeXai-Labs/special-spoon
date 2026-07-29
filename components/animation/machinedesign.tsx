'use client'

import React from 'react'

export default function MachineDesignScene() {
  return (
    <div className="machine-scene">

      {/* Background Grid */}
      <div className="design-grid" />

      {/* CAD Connection Lines */}
      <svg className="cad-lines" viewBox="0 0 1000 500">

        <line x1="180" y1="120" x2="500" y2="250" className="wire"/>

        <line x1="500" y1="250" x2="790" y2="120" className="wire"/>

        <line x1="500" y1="250" x2="500" y2="420" className="wire"/>

        <circle cx="180" cy="120" r="6" className="node"/>
        <circle cx="500" cy="250" r="7" className="node"/>
        <circle cx="790" cy="120" r="6" className="node"/>
        <circle cx="500" cy="420" r="6" className="node"/>

      </svg>

      {/* Main Gear */}
      <div className="gear gear-main">
        <div className="gear-core"/>
      </div>

      {/* Secondary Gear */}
      <div className="gear gear-small">
        <div className="gear-core"/>
      </div>

      {/* Third Gear */}
      <div className="gear gear-third">
        <div className="gear-core"/>
      </div>

      {/* Exploded Machine Parts */}
      <div className="part frame"/>
      <div className="part shaft"/>
      <div className="part motor"/>
      <div className="part bearing"/>
      <div className="part bolt"/>

      {/* Floating Labels */}
      <div className="label l1">FRAME</div>
      <div className="label l2">BEARING</div>
      <div className="label l3">MOTOR</div>
      <div className="label l4">SHAFT</div>

      {/* Blueprint Ring */}
      <div className="ring"/>

      {/* Scanning Circle */}
      <div className="scan-circle"/>

      <style jsx>{`

.machine-scene{
position:absolute;
inset:0;
overflow:hidden;
border-radius:24px;
background:
radial-gradient(circle at center,#0f2748 0%,#09111b 75%);
}

.design-grid{
position:absolute;
inset:0;
background-image:
linear-gradient(rgba(96,165,250,.06) 1px,transparent 1px),
linear-gradient(90deg,rgba(96,165,250,.06) 1px,transparent 1px);
background-size:35px 35px;
animation:gridMove 18s linear infinite;
}

.cad-lines{
position:absolute;
width:100%;
height:100%;
}

.wire{
stroke:#60a5fa;
stroke-width:2;
stroke-dasharray:14;
animation:flow 4s linear infinite;
}

.node{
fill:#60a5fa;
animation:pulse 2s infinite;
}

.gear{
position:absolute;
border:5px solid #60a5fa;
border-radius:50%;
display:flex;
align-items:center;
justify-content:center;
box-shadow:
0 0 20px rgba(59,130,246,.4);
}

.gear::before{
content:"";
position:absolute;
inset:-10px;
border-radius:50%;
border:3px dashed #60a5fa;
}

.gear-core{
width:30%;
height:30%;
border-radius:50%;
background:#60a5fa;
}

.gear-main{
width:140px;
height:140px;
left:42%;
top:34%;
animation:rotateCW 8s linear infinite;
}

.gear-small{
width:90px;
height:90px;
left:28%;
top:22%;
animation:rotateCCW 6s linear infinite;
}

.gear-third{
width:70px;
height:70px;
left:63%;
top:22%;
animation:rotateCCW 5s linear infinite;
}

.part{
position:absolute;
background:#60a5fa;
opacity:.8;
}

.frame{
width:170px;
height:10px;
left:39%;
top:70%;
animation:assemble1 3s ease-in-out infinite;
}

.shaft{
width:14px;
height:110px;
left:48.5%;
top:54%;
animation:assemble2 3s ease-in-out infinite;
}

.motor{
width:65px;
height:45px;
left:28%;
top:60%;
border-radius:8px;
animation:assemble3 3s ease-in-out infinite;
}

.bearing{
width:36px;
height:36px;
left:67%;
top:57%;
border-radius:50%;
border:4px solid #60a5fa;
background:transparent;
animation:assemble4 3s ease-in-out infinite;
}

.bolt{
width:12px;
height:12px;
left:58%;
top:30%;
border-radius:50%;
animation:boltSpin 2s linear infinite;
}

.label{
position:absolute;
font-size:12px;
letter-spacing:3px;
color:#cbd5e1;
opacity:.75;
animation:float 5s ease-in-out infinite;
}

.l1{left:14%;top:15%;}
.l2{right:18%;top:16%;animation-delay:1s;}
.l3{left:18%;bottom:18%;animation-delay:2s;}
.l4{right:20%;bottom:15%;animation-delay:3s;}

.ring{
position:absolute;
width:280px;
height:280px;
border-radius:50%;
border:2px dashed rgba(96,165,250,.3);
left:50%;
top:50%;
transform:translate(-50%,-50%);
animation:ringRotate 20s linear infinite;
}

.scan-circle{
position:absolute;
width:300px;
height:300px;
border-radius:50%;
left:50%;
top:50%;
transform:translate(-50%,-50%);
background:
conic-gradient(
transparent 0deg,
rgba(96,165,250,.5) 25deg,
transparent 45deg
);
animation:scanRotate 3s linear infinite;
mix-blend-mode:screen;
}

@keyframes rotateCW{
to{transform:rotate(360deg);}
}

@keyframes rotateCCW{
to{transform:rotate(-360deg);}
}

@keyframes pulse{
0%,100%{
transform:scale(1);
}
50%{
transform:scale(1.5);
}
}

@keyframes flow{
from{
stroke-dashoffset:40;
}
to{
stroke-dashoffset:0;
}
}

@keyframes assemble1{
0%{
transform:translateY(60px);
opacity:0;
}
30%,100%{
transform:translateY(0);
opacity:1;
}
}

@keyframes assemble2{
0%{
transform:translateX(-80px);
opacity:0;
}
40%,100%{
transform:translateX(0);
opacity:1;
}
}

@keyframes assemble3{
0%{
transform:translateX(-120px);
opacity:0;
}
45%,100%{
transform:translateX(0);
opacity:1;
}
}

@keyframes assemble4{
0%{
transform:translateX(120px);
opacity:0;
}
45%,100%{
transform:translateX(0);
opacity:1;
}
}

@keyframes boltSpin{
to{
transform:rotate(360deg);
}
}

@keyframes float{
0%,100%{
transform:translateY(0);
}
50%{
transform:translateY(-12px);
}
}

@keyframes ringRotate{
to{
transform:translate(-50%,-50%) rotate(360deg);
}
}

@keyframes scanRotate{
to{
transform:translate(-50%,-50%) rotate(360deg);
}
}

@keyframes gridMove{
from{
background-position:0 0;
}
to{
background-position:35px 35px;
}
}

      `}</style>

    </div>
  )
}