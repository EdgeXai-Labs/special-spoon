'use client'

import React from "react";

export default function TechnicalSupportScene() {
  return (
    <div className="support-scene">

      {/* Background */}
      <div className="grid"/>

      {/* Customer Machine */}
      <div className="machine">
        <div className="screen"/>
        <div className="status"/>
      </div>

      {/* Connection Line */}
      <div className="connection">
        <div className="signal"/>
      </div>

      {/* Support Engineer */}
      <div className="engineer">
        <div className="avatar"/>
        <div className="headset"/>
      </div>

      {/* Support Dashboard */}
      <div className="dashboard">

        <div className="title">
          LIVE SUPPORT
        </div>

        <div className="ticket">
          Ticket #2048
        </div>

        <div className="progress">

          <div className="step done">
            ✔ Connected
          </div>

          <div className="step done">
            ✔ Diagnosing
          </div>

          <div className="step active">
            🔄 Resolving
          </div>

          <div className="step">
            ⏳ Closed
          </div>

        </div>

      </div>

      {/* Chat Bubble */}
      <div className="chat">
        Need help?
      </div>

      {/* Floating Icons */}
      <div className="icon phone">📞</div>
      <div className="icon headset">🎧</div>
      <div className="icon laptop">💻</div>
      <div className="icon tools">🛠️</div>
      <div className="icon check">✅</div>

      {/* Data Packets */}
      <span className="packet p1"/>
      <span className="packet p2"/>
      <span className="packet p3"/>

      {/* Labels */}
      <div className="label l1">
        REMOTE DIAGNOSTICS
      </div>

      <div className="label l2">
        VIDEO ASSISTANCE
      </div>

      <div className="label l3">
        ISSUE RESOLVED
      </div>

      <style jsx>{`

.support-scene{
position:absolute;
inset:0;
overflow:hidden;
border-radius:24px;
background:linear-gradient(180deg,#0b1b31,#071018);
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

/* Machine */

.machine{
position:absolute;
left:10%;
top:34%;
width:170px;
height:140px;
border:2px solid #38bdf8;
background:#334155;
border-radius:12px;
}

.screen{
position:absolute;
left:28px;
top:22px;
width:110px;
height:58px;
background:#22c55e;
border-radius:6px;
animation:screenGlow 2s infinite;
}

.status{
position:absolute;
bottom:20px;
left:75px;
width:16px;
height:16px;
background:#22c55e;
border-radius:50%;
animation:pulse 2s infinite;
}

/* Connection */

.connection{
position:absolute;
left:270px;
top:50%;
width:180px;
height:4px;
background:#1e293b;
overflow:hidden;
}

.signal{
width:50px;
height:100%;
background:#38bdf8;
animation:dataFlow 1.8s linear infinite;
}

/* Engineer */

.engineer{
position:absolute;
left:46%;
top:28%;
width:110px;
height:110px;
border-radius:50%;
background:#1e293b;
border:3px solid #38bdf8;
animation:float 4s infinite;
}

.avatar{
position:absolute;
left:35px;
top:22px;
width:40px;
height:40px;
border-radius:50%;
background:#fde68a;
}

.headset{
position:absolute;
left:26px;
top:16px;
width:58px;
height:52px;
border:4px solid #38bdf8;
border-bottom:none;
border-radius:50%;
}

/* Dashboard */

.dashboard{
position:absolute;
right:8%;
top:18%;
width:270px;
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

.ticket{
color:#22c55e;
margin-bottom:12px;
font-size:14px;
}

.step{
margin-top:10px;
color:#cbd5e1;
font-size:14px;
}

.done{
color:#22c55e;
}

.active{
color:#38bdf8;
animation:pulse 2s infinite;
}

/* Chat */

.chat{
position:absolute;
left:43%;
bottom:18%;
padding:10px 16px;
background:#38bdf8;
border-radius:20px;
color:white;
animation:float 3s infinite;
}

/* Icons */

.icon{
position:absolute;
font-size:28px;
animation:float 5s infinite;
}

.phone{left:18%;top:12%;}
.headset{right:18%;top:12%;animation-delay:1s;}
.laptop{left:60%;bottom:12%;animation-delay:2s;}
.tools{right:16%;bottom:16%;animation-delay:3s;}
.check{left:34%;bottom:10%;animation-delay:4s;}

/* Packets */

.packet{
position:absolute;
width:8px;
height:8px;
background:#38bdf8;
border-radius:50%;
box-shadow:0 0 10px #38bdf8;
animation:packet 2.5s linear infinite;
}

.p1{left:30%;top:49%;}
.p2{left:36%;top:51%;animation-delay:.8s;}
.p3{left:42%;top:49%;animation-delay:1.6s;}

/* Labels */

.label{
position:absolute;
font-size:12px;
letter-spacing:3px;
color:#cbd5e1;
animation:float 5s infinite;
}

.l1{left:8%;bottom:8%;}
.l2{right:8%;top:8%;animation-delay:1s;}
.l3{left:42%;bottom:6%;animation-delay:2s;}

/* Animations */

@keyframes dataFlow{
0%{transform:translateX(-60px);}
100%{transform:translateX(190px);}
}

@keyframes packet{
0%{transform:translateX(0);opacity:0;}
20%{opacity:1;}
100%{transform:translateX(180px);opacity:0;}
}

@keyframes pulse{
0%,100%{transform:scale(1);}
50%{transform:scale(1.2);}
}

@keyframes screenGlow{
0%,100%{box-shadow:0 0 10px #22c55e;}
50%{box-shadow:0 0 22px #22c55e;}
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