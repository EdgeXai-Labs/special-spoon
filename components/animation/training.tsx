'use client'

import React from 'react'

export default function TrainingScene() {
  return (
    <div className="training-scene">

      {/* Background */}
      <div className="grid" />

      {/* Large Machine */}
      <div className="machine">
        <div className="screen" />
        <div className="button b1" />
        <div className="button b2" />
        <div className="button b3" />
      </div>

      {/* Trainer */}
      <div className="trainer">
        <div className="head" />
        <div className="body" />
        <div className="arm" />
      </div>

      {/* Operator */}
      <div className="operator">
        <div className="head" />
        <div className="body" />
      </div>

      {/* Floating Instruction Panel */}
      <div className="instruction">
        <div className="title">TRAINING</div>

        <div className="line done" />
        <div className="line done" />
        <div className="line active" />
        <div className="line" />
      </div>

      {/* Learning Icons */}

      <div className="icon icon1">📖</div>
      <div className="icon icon2">⚙️</div>
      <div className="icon icon3">🛠️</div>
      <div className="icon icon4">✅</div>

      {/* Animated Checkpoints */}

      <div className="checkpoint c1"/>
      <div className="checkpoint c2"/>
      <div className="checkpoint c3"/>

      {/* Labels */}

      <div className="label l1">OPERATOR TRAINING</div>
      <div className="label l2">SAFETY PROCEDURE</div>
      <div className="label l3">MACHINE DEMO</div>

      <style jsx>{`

.training-scene{
position:absolute;
inset:0;
overflow:hidden;
border-radius:24px;
background:
linear-gradient(180deg,#0f1d30,#09111b);
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
right:12%;
top:22%;
width:240px;
height:180px;
background:#334155;
border-radius:12px;
border:2px solid #60a5fa;
}

.screen{
position:absolute;
left:30px;
top:25px;
width:180px;
height:80px;
background:#0ea5e9;
border-radius:8px;
animation:screenGlow 2s infinite;
}

.button{
position:absolute;
bottom:25px;
width:16px;
height:16px;
border-radius:50%;
background:#22c55e;
animation:blink 1.5s infinite;
}

.b1{left:55px;}
.b2{left:90px;animation-delay:.5s;}
.b3{left:125px;animation-delay:1s;}

/* ---------------- */

.trainer,
.operator{
position:absolute;
width:36px;
height:90px;
bottom:80px;
}

.trainer{
left:22%;
animation:trainerMove 2s ease-in-out infinite;
}

.operator{
left:35%;
}

.head{
width:20px;
height:20px;
border-radius:50%;
background:#fde68a;
margin:auto;
}

.body{
width:14px;
height:45px;
background:#60a5fa;
margin:4px auto;
}

.arm{
width:40px;
height:5px;
background:#fde68a;
position:absolute;
top:36px;
left:24px;
transform-origin:left center;
animation:point 2s infinite;
}

/* ---------------- */

.instruction{
position:absolute;
left:50%;
top:18%;
transform:translateX(-50%);
width:220px;
padding:16px;
background:rgba(15,23,42,.85);
border:1px solid #38bdf8;
border-radius:12px;
}

.title{
font-size:13px;
letter-spacing:3px;
margin-bottom:12px;
color:#38bdf8;
text-align:center;
}

.line{
height:8px;
background:#334155;
margin-top:10px;
border-radius:10px;
}

.done{
background:#22c55e;
}

.active{
background:#38bdf8;
animation:progress 2s infinite;
}

/* ---------------- */

.icon{
position:absolute;
font-size:28px;
animation:float 4s ease-in-out infinite;
}

.icon1{
left:10%;
top:16%;
}

.icon2{
left:74%;
top:12%;
animation-delay:1s;
}

.icon3{
left:78%;
bottom:18%;
animation-delay:2s;
}

.icon4{
left:18%;
bottom:16%;
animation-delay:3s;
}

/* ---------------- */

.checkpoint{
position:absolute;
width:12px;
height:12px;
border-radius:50%;
background:#22c55e;
box-shadow:0 0 15px #22c55e;
animation:pulse 2s infinite;
}

.c1{
left:44%;
top:28%;
}

.c2{
left:57%;
top:38%;
animation-delay:.7s;
}

.c3{
left:49%;
top:56%;
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
left:8%;
top:8%;
}

.l2{
right:10%;
top:10%;
animation-delay:1s;
}

.l3{
left:36%;
bottom:8%;
animation-delay:2s;
}

/* ---------------- */

@keyframes trainerMove{

0%,100%{
transform:translateX(0);
}

50%{
transform:translateX(10px);
}

}

@keyframes point{

0%,100%{
transform:rotate(0deg);
}

50%{
transform:rotate(-25deg);
}

}

@keyframes progress{

0%{
width:20%;
}

100%{
width:100%;
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

@keyframes screenGlow{

0%,100%{
box-shadow:0 0 10px #0ea5e9;
}

50%{
box-shadow:0 0 25px #38bdf8;
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