'use client'

import React from 'react'

export default function InstallationScene() {
  return (
    <div className="installation-scene">

      {/* Background */}
      <div className="grid" />

      {/* Construction Floor */}
      <div className="floor" />

      {/* Crane */}
      <div className="crane">
        <div className="tower" />
        <div className="beam" />
        <div className="hook-line" />
        <div className="hook" />

        <div className="machine">
          <div className="machine-door" />
        </div>
      </div>

      {/* Workers */}
      <div className="worker w1">
        <div className="head" />
        <div className="body" />
      </div>

      <div className="worker w2">
        <div className="head" />
        <div className="body" />
      </div>

      {/* Tools */}
      <div className="tool tool1">🔧</div>
      <div className="tool tool2">⚙️</div>
      <div className="tool tool3">📐</div>

      {/* Checkpoints */}
      <div className="checkpoint c1">✔</div>
      <div className="checkpoint c2">✔</div>
      <div className="checkpoint c3">✔</div>

      {/* Floating Labels */}
      <div className="label l1">FOUNDATION</div>
      <div className="label l2">ALIGNMENT</div>
      <div className="label l3">COMMISSIONING</div>

      <style jsx>{`

.installation-scene{
position:absolute;
inset:0;
overflow:hidden;
border-radius:24px;
background:
linear-gradient(180deg,#162233 0%,#0b1220 100%);
}

/* ======================= */

.grid{
position:absolute;
inset:0;
background-image:
linear-gradient(rgba(255,255,255,.04) 1px,transparent 1px),
linear-gradient(90deg,rgba(255,255,255,.04) 1px,transparent 1px);
background-size:40px 40px;
animation:gridMove 12s linear infinite;
}

/* ======================= */

.floor{
position:absolute;
left:0;
right:0;
bottom:0;
height:70px;
background:#374151;
}

/* ======================= */

.crane{
position:absolute;
left:12%;
bottom:70px;
width:420px;
height:300px;
}

.tower{
position:absolute;
left:40px;
bottom:0;
width:18px;
height:260px;
background:#f59e0b;
}

.beam{
position:absolute;
left:40px;
top:20px;
width:260px;
height:14px;
background:#f59e0b;
}

.hook-line{
position:absolute;
left:280px;
top:34px;
width:3px;
height:100px;
background:#d1d5db;
animation:lift 4s ease-in-out infinite;
}

.hook{
position:absolute;
left:270px;
top:125px;
width:22px;
height:22px;
border:4px solid #d1d5db;
border-top:none;
border-radius:0 0 12px 12px;
animation:lift 4s ease-in-out infinite;
}

.machine{
position:absolute;
left:220px;
top:145px;
width:90px;
height:70px;
background:#3b82f6;
border-radius:8px;
animation:lift 4s ease-in-out infinite;
}

.machine-door{
position:absolute;
left:25px;
top:18px;
width:40px;
height:32px;
border:2px solid white;
}

/* ======================= */

.worker{
position:absolute;
bottom:70px;
width:30px;
height:70px;
animation:workerMove 2s ease-in-out infinite;
}

.w1{
left:63%;
}

.w2{
left:74%;
animation-delay:1s;
}

.head{
width:18px;
height:18px;
border-radius:50%;
background:#fde68a;
margin:auto;
}

.body{
width:12px;
height:40px;
background:#60a5fa;
margin:4px auto;
}

/* ======================= */

.tool{
position:absolute;
font-size:24px;
animation:toolFloat 3s ease-in-out infinite;
}

.tool1{
left:58%;
top:28%;
}

.tool2{
left:77%;
top:36%;
animation-delay:1s;
}

.tool3{
left:67%;
top:18%;
animation-delay:2s;
}

/* ======================= */

.checkpoint{
position:absolute;
color:#22c55e;
font-size:28px;
animation:blink 2s infinite;
}

.c1{
left:52%;
top:22%;
}

.c2{
left:70%;
top:58%;
animation-delay:.5s;
}

.c3{
left:82%;
top:32%;
animation-delay:1s;
}

/* ======================= */

.label{
position:absolute;
font-size:12px;
letter-spacing:3px;
color:#cbd5e1;
opacity:.8;
animation:float 4s ease-in-out infinite;
}

.l1{
left:8%;
top:12%;
}

.l2{
right:10%;
top:18%;
animation-delay:1s;
}

.l3{
left:38%;
bottom:16%;
animation-delay:2s;
}

/* ======================= */

@keyframes lift{

0%,100%{
transform:translateY(0);
}

50%{
transform:translateY(-60px);
}

}

@keyframes workerMove{

0%,100%{
transform:translateX(0);
}

50%{
transform:translateX(10px);
}

}

@keyframes toolFloat{

0%,100%{
transform:translateY(0);
}

50%{
transform:translateY(-10px);
}

}

@keyframes blink{

0%,100%{
opacity:.3;
transform:scale(.9);
}

50%{
opacity:1;
transform:scale(1.2);
}

}

@keyframes float{

0%,100%{
transform:translateY(0);
}

50%{
transform:translateY(-8px);
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