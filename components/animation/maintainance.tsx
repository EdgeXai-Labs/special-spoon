'use client'

import React from 'react'

export default function MaintenanceScene() {
  return (
    <div className="maintenance-scene">

      {/* Background Grid */}
      <div className="grid" />

      {/* Machine */}
      <div className="machine">
        <div className="panel" />
        <div className="warning-light" />
        <div className="display" />
      </div>

      {/* Technician */}
      <div className="technician">
        <div className="head" />
        <div className="body" />
        <div className="arm" />
        <div className="tool">🔧</div>
      </div>

      {/* Rotating Gear */}
      <div className="gear">
        <div className="gear-core" />
      </div>

      {/* Floating Tools */}
      <div className="floating tool1">🛠️</div>
      <div className="floating tool2">⚙️</div>
      <div className="floating tool3">🪛</div>

      {/* Maintenance Checklist */}
      <div className="checklist">

        <div className="title">
          PREVENTIVE MAINTENANCE
        </div>

        <div className="item done">
          ✔ Lubrication
        </div>

        <div className="item done">
          ✔ Inspection
        </div>

        <div className="item active">
          🔄 Calibration
        </div>

        <div className="item">
          ⏳ Performance Test
        </div>

      </div>

      {/* Oil Drops */}

      <span className="oil o1"/>
      <span className="oil o2"/>
      <span className="oil o3"/>

      {/* Pulse Sensors */}

      <span className="sensor s1"/>
      <span className="sensor s2"/>
      <span className="sensor s3"/>

      {/* Labels */}

      <div className="label l1">
        MACHINE HEALTH
      </div>

      <div className="label l2">
        LUBRICATION
      </div>

      <div className="label l3">
        INSPECTION
      </div>

      <style jsx>{`

.maintenance-scene{
position:absolute;
inset:0;
overflow:hidden;
border-radius:24px;
background:
linear-gradient(180deg,#102033,#08111b);
}

/* ---------------- */

.grid{
position:absolute;
inset:0;
background-image:
linear-gradient(rgba(255,255,255,.05) 1px,transparent 1px),
linear-gradient(90deg,rgba(255,255,255,.05) 1px,transparent 1px);
background-size:40px 40px;
animation:gridMove 12s linear infinite;
}

/* ---------------- */

.machine{
position:absolute;
right:10%;
top:22%;
width:240px;
height:180px;
background:#334155;
border:2px solid #60a5fa;
border-radius:14px;
}

.panel{
position:absolute;
left:30px;
top:25px;
width:180px;
height:70px;
background:#1e293b;
border-radius:8px;
}

.display{
position:absolute;
left:55px;
top:45px;
width:130px;
height:20px;
background:#22c55e;
border-radius:4px;
animation:displayPulse 2s infinite;
}

.warning-light{
position:absolute;
right:18px;
top:18px;
width:12px;
height:12px;
border-radius:50%;
background:#f59e0b;
box-shadow:0 0 10px #f59e0b;
animation:blink 1s infinite;
}

/* ---------------- */

.technician{
position:absolute;
left:18%;
bottom:70px;
width:70px;
height:110px;
}

.head{
width:22px;
height:22px;
background:#fde68a;
border-radius:50%;
margin:auto;
}

.body{
width:16px;
height:50px;
background:#3b82f6;
margin:5px auto;
}

.arm{
position:absolute;
left:42px;
top:36px;
width:42px;
height:5px;
background:#fde68a;
transform-origin:left;
animation:repair 2s infinite;
}

.tool{
position:absolute;
left:72px;
top:26px;
font-size:22px;
animation:toolMove 2s infinite;
}

/* ---------------- */

.gear{
position:absolute;
left:48%;
top:48%;
width:100px;
height:100px;
margin-left:-50px;
margin-top:-50px;
border-radius:50%;
border:5px solid #60a5fa;
animation:spin 8s linear infinite;
}

.gear::before{
content:"";
position:absolute;
inset:-10px;
border:3px dashed #60a5fa;
border-radius:50%;
}

.gear-core{
position:absolute;
left:50%;
top:50%;
width:24px;
height:24px;
margin-left:-12px;
margin-top:-12px;
border-radius:50%;
background:#60a5fa;
}

/* ---------------- */

.checklist{
position:absolute;
left:8%;
top:12%;
width:250px;
padding:16px;
background:rgba(15,23,42,.85);
border:1px solid #38bdf8;
border-radius:12px;
}

.title{
font-size:12px;
letter-spacing:2px;
color:#38bdf8;
margin-bottom:10px;
}

.item{
margin-top:10px;
font-size:14px;
color:#cbd5e1;
}

.done{
color:#22c55e;
}

.active{
animation:flash 1.5s infinite;
}

/* ---------------- */

.floating{
position:absolute;
font-size:26px;
animation:float 4s infinite ease-in-out;
}

.tool1{
right:12%;
top:12%;
}

.tool2{
left:62%;
top:18%;
animation-delay:1s;
}

.tool3{
right:20%;
bottom:18%;
animation-delay:2s;
}

/* ---------------- */

.sensor{
position:absolute;
width:10px;
height:10px;
border-radius:50%;
background:#22c55e;
box-shadow:0 0 10px #22c55e;
animation:pulse 2s infinite;
}

.s1{
left:40%;
top:28%;
}

.s2{
left:62%;
top:38%;
animation-delay:.7s;
}

.s3{
left:54%;
top:64%;
animation-delay:1.4s;
}

/* ---------------- */

.oil{
position:absolute;
width:8px;
height:14px;
background:#2563eb;
border-radius:50%;
animation:drop 3s infinite;
}

.o1{
left:66%;
top:42%;
}

.o2{
left:68%;
top:44%;
animation-delay:.7s;
}

.o3{
left:70%;
top:40%;
animation-delay:1.4s;
}

/* ---------------- */

.label{
position:absolute;
font-size:12px;
letter-spacing:3px;
color:#cbd5e1;
animation:float 5s infinite;
}

.l1{
left:10%;
bottom:10%;
}

.l2{
right:10%;
top:10%;
animation-delay:1s;
}

.l3{
right:12%;
bottom:16%;
animation-delay:2s;
}

/* ---------------- */

@keyframes spin{
to{
transform:rotate(360deg);
}
}

@keyframes repair{
0%,100%{
transform:rotate(10deg);
}
50%{
transform:rotate(-35deg);
}
}

@keyframes toolMove{
0%,100%{
transform:translateY(0);
}
50%{
transform:translateY(8px);
}
}

@keyframes blink{
0%,100%{
opacity:.4;
}
50%{
opacity:1;
}
}

@keyframes displayPulse{
0%,100%{
opacity:.5;
}
50%{
opacity:1;
box-shadow:0 0 12px #22c55e;
}
}

@keyframes flash{
0%,100%{
opacity:.4;
}
50%{
opacity:1;
}
}

@keyframes pulse{
0%,100%{
transform:scale(1);
}
50%{
transform:scale(1.5);
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

@keyframes drop{
0%{
transform:translateY(0);
opacity:1;
}
100%{
transform:translateY(30px);
opacity:0;
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