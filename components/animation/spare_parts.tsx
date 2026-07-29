'use client'

import React from "react";

export default function SparePartsScene() {
  return (
    <div className="spare-scene">

      {/* Background */}
      <div className="grid" />

      {/* Warehouse Rack */}
      <div className="rack">

        <div className="shelf s1">
          <div className="box red"/>
          <div className="box blue"/>
          <div className="box green"/>
        </div>

        <div className="shelf s2">
          <div className="gear"/>
          <div className="motor"/>
          <div className="bearing"/>
        </div>

        <div className="shelf s3">
          <div className="box blue"/>
          <div className="box red"/>
          <div className="box green"/>
        </div>

      </div>

      {/* Conveyor */}

      <div className="conveyor">

        <div className="belt"/>

        <div className="part p1">⚙️</div>
        <div className="part p2">🔩</div>
        <div className="part p3">🛞</div>

      </div>

      {/* Inventory Panel */}

      <div className="panel">

        <div className="title">
          INVENTORY
        </div>

        <div className="row ok">
          ✔ Bearings
        </div>

        <div className="row ok">
          ✔ Motors
        </div>

        <div className="row ok">
          ✔ Sensors
        </div>

        <div className="row ok">
          ✔ Belts
        </div>

        <div className="row active">
          Dispatch Ready
        </div>

      </div>

      {/* Delivery Truck */}

      <div className="truck">

        <div className="body"/>
        <div className="cab"/>
        <div className="wheel w1"/>
        <div className="wheel w2"/>

      </div>

      {/* Floating Icons */}

      <div className="icon i1">📦</div>
      <div className="icon i2">⚙️</div>
      <div className="icon i3">🚚</div>
      <div className="icon i4">📋</div>

      {/* Labels */}

      <div className="label l1">
        GENUINE PARTS
      </div>

      <div className="label l2">
        READY STOCK
      </div>

      <div className="label l3">
        FAST DELIVERY
      </div>

      <style jsx>{`

.spare-scene{
position:absolute;
inset:0;
overflow:hidden;
border-radius:24px;
background:linear-gradient(180deg,#0b1d32,#071018);
}

.grid{
position:absolute;
inset:0;
background-image:
linear-gradient(rgba(255,255,255,.05) 1px,transparent 1px),
linear-gradient(90deg,rgba(255,255,255,.05) 1px,transparent 1px);
background-size:40px 40px;
animation:gridMove 14s linear infinite;
}

/* Rack */

.rack{
position:absolute;
left:8%;
top:18%;
width:240px;
height:220px;
border:3px solid #64748b;
display:flex;
flex-direction:column;
justify-content:space-between;
padding:12px;
}

.shelf{
display:flex;
justify-content:space-around;
align-items:center;
height:55px;
border-top:2px solid #64748b;
}

.box{
width:34px;
height:34px;
border-radius:6px;
animation:float 3s infinite;
}

.red{background:#ef4444;}
.blue{background:#3b82f6;}
.green{background:#22c55e;}

.gear,.motor,.bearing{
font-size:28px;
animation:float 4s infinite;
}

.gear::before{content:"⚙️";}
.motor::before{content:"🔋";}
.bearing::before{content:"🛞";}

/* Conveyor */

.conveyor{
position:absolute;
left:32%;
bottom:18%;
width:360px;
height:40px;
}

.belt{
height:100%;
background:#334155;
border-radius:20px;
overflow:hidden;
}

.belt::after{
content:"";
display:block;
height:100%;
width:200%;
background:
repeating-linear-gradient(
90deg,
#475569 0 20px,
#334155 20px 40px
);
animation:beltMove 2s linear infinite;
}

.part{
position:absolute;
top:-8px;
font-size:28px;
animation:movePart 6s linear infinite;
}

.p2{animation-delay:2s;}
.p3{animation-delay:4s;}

/* Panel */

.panel{
position:absolute;
right:8%;
top:18%;
width:250px;
padding:18px;
background:rgba(15,23,42,.9);
border:1px solid #38bdf8;
border-radius:12px;
}

.title{
text-align:center;
color:#38bdf8;
letter-spacing:2px;
margin-bottom:12px;
}

.row{
margin-top:10px;
font-size:14px;
color:#cbd5e1;
}

.ok{
color:#22c55e;
}

.active{
color:#38bdf8;
animation:pulse 2s infinite;
}

/* Truck */

.truck{
position:absolute;
right:12%;
bottom:12%;
width:120px;
height:60px;
animation:drive 5s ease-in-out infinite;
}

.body{
position:absolute;
left:0;
top:10px;
width:70px;
height:35px;
background:#3b82f6;
}

.cab{
position:absolute;
right:0;
top:18px;
width:38px;
height:27px;
background:#60a5fa;
}

.wheel{
position:absolute;
bottom:0;
width:18px;
height:18px;
background:#111827;
border-radius:50%;
animation:spin 1s linear infinite;
}

.w1{left:12px;}
.w2{right:10px;}

/* Icons */

.icon{
position:absolute;
font-size:28px;
animation:float 5s infinite;
}

.i1{left:20%;top:10%;}
.i2{left:50%;top:12%;animation-delay:1s;}
.i3{right:16%;top:10%;animation-delay:2s;}
.i4{left:62%;bottom:8%;animation-delay:3s;}

/* Labels */

.label{
position:absolute;
font-size:12px;
letter-spacing:3px;
color:#cbd5e1;
animation:float 5s infinite;
}

.l1{left:8%;bottom:8%;}
.l2{left:42%;top:8%;animation-delay:1s;}
.l3{right:8%;bottom:8%;animation-delay:2s;}

/* Animations */

@keyframes beltMove{
to{transform:translateX(-40px);}
}

@keyframes movePart{
0%{left:0;}
100%{left:300px;}
}

@keyframes drive{
0%,100%{transform:translateX(0);}
50%{transform:translateX(-20px);}
}

@keyframes spin{
to{transform:rotate(360deg);}
}

@keyframes pulse{
0%,100%{opacity:.5;}
50%{opacity:1;}
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