'use client'

import React from 'react'

export default function ManufacturingScene() {
  return (
    <div className="manufacturing-scene">

      {/* Factory Background */}
      <div className="factory-grid" />

      {/* Smoke */}
      <div className="smoke smoke1" />
      <div className="smoke smoke2" />
      <div className="smoke smoke3" />

      {/* Conveyor Belt */}
      <div className="conveyor">
        <div className="belt" />

        <div className="roller r1" />
        <div className="roller r2" />
        <div className="roller r3" />
        <div className="roller r4" />
        <div className="roller r5" />

        <div className="box b1" />
        <div className="box b2" />
        <div className="box b3" />
      </div>

      {/* Robotic Arm */}
      <div className="robot">
        <div className="base" />
        <div className="arm arm1" />
        <div className="joint joint1" />
        <div className="arm arm2" />
        <div className="joint joint2" />
        <div className="welder" />
      </div>

      {/* Sparks */}
      <div className="spark s1" />
      <div className="spark s2" />
      <div className="spark s3" />
      <div className="spark s4" />
      <div className="spark s5" />
      <div className="spark s6" />
      <div className="spark s7" />
      <div className="spark s8" />

      {/* Hydraulic Press */}
      <div className="press">
        <div className="press-head" />
        <div className="press-column left" />
        <div className="press-column right" />
        <div className="press-table" />
      </div>

      {/* Heat Glow */}
      <div className="heat" />

      {/* Labels */}
      <div className="label l1">ROBOTIC WELDING</div>
      <div className="label l2">AUTOMATED LINE</div>
      <div className="label l3">QUALITY CONTROL</div>

      <style jsx>{`

.manufacturing-scene{
position:absolute;
inset:0;
overflow:hidden;
border-radius:24px;
background:
linear-gradient(180deg,#121212 0%,#1d1d1d 55%,#0f0f0f 100%);
}

/* ===================== */

.factory-grid{
position:absolute;
inset:0;
background-image:
linear-gradient(rgba(255,255,255,.03) 1px,transparent 1px),
linear-gradient(90deg,rgba(255,255,255,.03) 1px,transparent 1px);
background-size:40px 40px;
}

/* ===================== */

.conveyor{
position:absolute;
left:5%;
right:5%;
bottom:60px;
height:70px;
}

.belt{
position:absolute;
width:100%;
height:18px;
top:25px;

background:
repeating-linear-gradient(
90deg,
#555 0,
#555 20px,
#777 20px,
#777 40px
);

animation:beltMove 1s linear infinite;
}

.roller{
position:absolute;
bottom:0;
width:30px;
height:30px;
border-radius:50%;
background:#888;
animation:rollerSpin 1s linear infinite;
}

.r1{left:2%;}
.r2{left:25%;}
.r3{left:48%;}
.r4{left:71%;}
.r5{left:94%;}

.box{
position:absolute;
width:45px;
height:35px;
background:#4ade80;
border-radius:4px;
bottom:38px;
animation:moveBox 8s linear infinite;
}

.b2{
animation-delay:2.5s;
background:#60a5fa;
}

.b3{
animation-delay:5s;
background:#fbbf24;
}

/* ===================== */

.robot{
position:absolute;
left:22%;
top:28%;
width:220px;
height:220px;
}

.base{
position:absolute;
bottom:0;
left:35px;
width:70px;
height:40px;
background:#475569;
border-radius:8px;
}

.arm{
position:absolute;
height:16px;
background:#94a3b8;
transform-origin:left center;
}

.arm1{
width:90px;
left:70px;
bottom:80px;
animation:armRotate1 2s ease-in-out infinite alternate;
}

.arm2{
width:75px;
left:125px;
bottom:132px;
animation:armRotate2 2s ease-in-out infinite alternate;
}

.joint{
position:absolute;
width:18px;
height:18px;
background:#cbd5e1;
border-radius:50%;
}

.joint1{
left:145px;
bottom:126px;
}

.joint2{
left:188px;
bottom:166px;
}

.welder{
position:absolute;
left:198px;
bottom:150px;
width:8px;
height:40px;
background:#f8fafc;
}

/* ===================== */

.spark{
position:absolute;
width:5px;
height:5px;
background:#fbbf24;
border-radius:50%;
opacity:0;
}

.s1{left:47%;top:42%;animation:spark 1s infinite;}
.s2{left:48%;top:43%;animation:spark .9s infinite .1s;}
.s3{left:49%;top:42%;animation:spark .8s infinite .2s;}
.s4{left:48%;top:41%;animation:spark .7s infinite .3s;}
.s5{left:47%;top:43%;animation:spark .9s infinite .15s;}
.s6{left:46%;top:42%;animation:spark .75s infinite;}
.s7{left:49%;top:44%;animation:spark .8s infinite .25s;}
.s8{left:50%;top:42%;animation:spark .95s infinite .2s;}

/* ===================== */

.press{
position:absolute;
right:11%;
top:20%;
width:180px;
height:260px;
}

.press-head{
position:absolute;
left:20px;
top:0;
width:140px;
height:55px;
background:#475569;
animation:press 2s ease-in-out infinite;
}

.press-column{
position:absolute;
width:16px;
height:200px;
background:#64748b;
}

.left{
left:35px;
}

.right{
right:35px;
}

.press-table{
position:absolute;
bottom:0;
left:0;
width:180px;
height:24px;
background:#64748b;
}

/* ===================== */

.smoke{
position:absolute;
width:90px;
height:90px;
background:rgba(255,255,255,.05);
border-radius:50%;
filter:blur(16px);
animation:smoke 6s linear infinite;
}

.smoke1{
left:18%;
bottom:90px;
}

.smoke2{
left:62%;
bottom:120px;
animation-delay:2s;
}

.smoke3{
left:80%;
bottom:80px;
animation-delay:4s;
}

/* ===================== */

.heat{
position:absolute;
inset:0;
background:
radial-gradient(circle at center,
rgba(255,120,0,.16),
transparent 60%);
animation:heat 2s ease-in-out infinite;
}

/* ===================== */

.label{
position:absolute;
font-size:12px;
letter-spacing:3px;
color:#f8fafc;
opacity:.7;
}

.l1{
left:8%;
top:12%;
}

.l2{
right:8%;
top:12%;
}

.l3{
left:35%;
bottom:12%;
}

/* ===================== */

@keyframes beltMove{

0%{
background-position:0 0;
}

100%{
background-position:40px 0;
}

}

@keyframes rollerSpin{

to{
transform:rotate(360deg);
}

}

@keyframes moveBox{

0%{
left:-50px;
}

100%{
left:105%;
}

}

@keyframes armRotate1{

from{
transform:rotate(-35deg);
}

to{
transform:rotate(-5deg);
}

}

@keyframes armRotate2{

from{
transform:rotate(50deg);
}

to{
transform:rotate(10deg);
}

}

@keyframes spark{

0%{
opacity:1;
transform:translate(0,0) scale(1);
}

100%{
opacity:0;
transform:
translate(
calc((var(--x,1) * 35px)),
-35px)
scale(0);
}

}

@keyframes press{

0%,100%{
transform:translateY(0);
}

50%{
transform:translateY(90px);
}

}

@keyframes smoke{

0%{
transform:translateY(0) scale(.6);
opacity:.2;
}

100%{
transform:translateY(-140px) scale(1.8);
opacity:0;
}

}

@keyframes heat{

0%,100%{
opacity:.4;
}

50%{
opacity:.9;
}

}

      `}</style>

    </div>
  )
}