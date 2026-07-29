'use client'

import React from 'react'

export default function TestingScene() {
  return (
    <div className="testing-scene">

      {/* Background Grid */}
      <div className="grid" />

      {/* Scanner */}
      <div className="scanner">
        <div className="scan-line" />
      </div>

      {/* Machine */}
      <div className="machine">

        <div className="machine-box" />

        <div className="sensor top" />
        <div className="sensor left" />
        <div className="sensor right" />
        <div className="sensor bottom" />

      </div>

      {/* Radar Rings */}
      <div className="ring r1" />
      <div className="ring r2" />
      <div className="ring r3" />

      {/* Digital Gauges */}

      <div className="gauge g1">
        <span>Pressure</span>
        <strong>98%</strong>
      </div>

      <div className="gauge g2">
        <span>Accuracy</span>
        <strong>99.8%</strong>
      </div>

      <div className="gauge g3">
        <span>Temperature</span>
        <strong>38°C</strong>
      </div>

      {/* Check Marks */}

      <div className="check c1">✔</div>
      <div className="check c2">✔</div>
      <div className="check c3">✔</div>

      {/* Pulse Dots */}

      <span className="dot d1"/>
      <span className="dot d2"/>
      <span className="dot d3"/>
      <span className="dot d4"/>

      {/* Floating Labels */}

      <div className="label l1">QUALITY TEST</div>
      <div className="label l2">DIMENSION CHECK</div>
      <div className="label l3">FINAL INSPECTION</div>

      <style jsx>{`

.testing-scene{
position:absolute;
inset:0;
overflow:hidden;
border-radius:24px;
background:
radial-gradient(circle,#12314d 0%,#08111d 80%);
}

/* ---------------- */

.grid{
position:absolute;
inset:0;
background-image:
linear-gradient(rgba(255,255,255,.05) 1px,transparent 1px),
linear-gradient(90deg,rgba(255,255,255,.05) 1px,transparent 1px);
background-size:35px 35px;
animation:gridMove 12s linear infinite;
}

/* ---------------- */

.machine{
position:absolute;
left:50%;
top:50%;
width:180px;
height:180px;
transform:translate(-50%,-50%);
}

.machine-box{
position:absolute;
width:140px;
height:140px;
left:20px;
top:20px;
border:3px solid #38bdf8;
background:rgba(56,189,248,.08);
border-radius:12px;
}

.sensor{
position:absolute;
width:16px;
height:16px;
background:#38bdf8;
border-radius:50%;
box-shadow:0 0 15px #38bdf8;
animation:pulse 1.5s infinite;
}

.top{
top:0;
left:82px;
}

.left{
left:0;
top:82px;
}

.right{
right:0;
top:82px;
}

.bottom{
bottom:0;
left:82px;
}

/* ---------------- */

.scanner{

position:absolute;
left:50%;
top:50%;
width:220px;
height:220px;
transform:translate(-50%,-50%);
overflow:hidden;
border-radius:50%;
}

.scan-line{

position:absolute;
width:100%;
height:3px;
background:#38bdf8;
box-shadow:0 0 18px #38bdf8;
animation:scan 3s linear infinite;
}

/* ---------------- */

.ring{

position:absolute;
border:2px solid rgba(56,189,248,.25);
border-radius:50%;
left:50%;
top:50%;
transform:translate(-50%,-50%);
animation:ring 2.8s infinite;
}

.r1{

width:160px;
height:160px;
}

.r2{

width:230px;
height:230px;
animation-delay:.6s;
}

.r3{

width:300px;
height:300px;
animation-delay:1.2s;
}

/* ---------------- */

.gauge{

position:absolute;
padding:10px 14px;
background:rgba(15,23,42,.8);
border:1px solid #38bdf8;
border-radius:8px;
font-size:12px;
color:white;
animation:float 4s ease-in-out infinite;
}

.gauge strong{
display:block;
font-size:20px;
margin-top:3px;
color:#38bdf8;
}

.g1{
left:8%;
top:18%;
}

.g2{
right:8%;
top:22%;
animation-delay:1s;
}

.g3{
left:36%;
bottom:12%;
animation-delay:2s;
}

/* ---------------- */

.check{

position:absolute;
font-size:30px;
color:#22c55e;
animation:check 2s infinite;
}

.c1{
left:26%;
top:28%;
}

.c2{
right:24%;
top:42%;
animation-delay:.5s;
}

.c3{
left:48%;
bottom:24%;
animation-delay:1s;
}

/* ---------------- */

.dot{

position:absolute;
width:8px;
height:8px;
border-radius:50%;
background:#38bdf8;
box-shadow:0 0 10px #38bdf8;
animation:pulse 1.4s infinite;
}

.d1{left:25%;top:30%;}
.d2{left:74%;top:28%;}
.d3{left:26%;top:72%;}
.d4{left:72%;top:74%;}

/* ---------------- */

.label{

position:absolute;
font-size:12px;
letter-spacing:3px;
color:#cbd5e1;
opacity:.8;
animation:float 5s ease-in-out infinite;
}

.l1{
left:10%;
top:8%;
}

.l2{
right:8%;
top:10%;
animation-delay:1s;
}

.l3{
left:34%;
bottom:5%;
animation-delay:2s;
}

/* ---------------- */

@keyframes scan{

0%{
transform:translateY(0);
}

100%{
transform:translateY(220px);
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

@keyframes ring{

0%{
transform:translate(-50%,-50%) scale(.7);
opacity:1;
}

100%{
transform:translate(-50%,-50%) scale(1.4);
opacity:0;
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

@keyframes check{

0%,100%{
opacity:.3;
transform:scale(.8);
}

50%{
opacity:1;
transform:scale(1.2);
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