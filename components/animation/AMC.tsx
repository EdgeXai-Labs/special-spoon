'use client'

import React from 'react'

export default function AMCScene() {
  return (
    <div className="amc-scene">

      {/* Background */}
      <div className="grid"/>

      {/* Customer Machine */}
      <div className="machine">
        <div className="screen"/>
        <div className="indicator"/>
      </div>

      {/* Shield */}
      <div className="shield">
        🛡️
      </div>

      {/* Monitoring Lines */}
      <div className="connection">
        <div className="flow"/>
      </div>

      {/* Dashboard */}
      <div className="dashboard">

        <div className="title">
          AMC DASHBOARD
        </div>

        <div className="status online">
          ● Machine Online
        </div>

        <div className="status">
          ✔ Scheduled Visit
        </div>

        <div className="status">
          ✔ Health Check
        </div>

        <div className="status">
          ✔ Spare Coverage
        </div>

        <div className="status">
          ✔ Remote Support
        </div>

      </div>

      {/* 24x7 */}

      <div className="support">
        24×7
      </div>

      {/* Service Cycle */}

      <div className="cycle">

        <div className="circle"/>

        <div className="arrow a1"/>
        <div className="arrow a2"/>
        <div className="arrow a3"/>

      </div>

      {/* Floating Icons */}

      <div className="icon calendar">📅</div>
      <div className="icon phone">🎧</div>
      <div className="icon wrench">🔧</div>
      <div className="icon analytics">📊</div>

      {/* Labels */}

      <div className="label l1">
        CONTRACT ACTIVE
      </div>

      <div className="label l2">
        REMOTE MONITORING
      </div>

      <div className="label l3">
        PREVENTIVE SERVICE
      </div>

      <style jsx>{`

.amc-scene{
position:absolute;
inset:0;
overflow:hidden;
border-radius:24px;
background:linear-gradient(180deg,#0b1d32,#071018);
}

/* Grid */

.grid{
position:absolute;
inset:0;
background-image:
linear-gradient(rgba(255,255,255,.05) 1px,transparent 1px),
linear-gradient(90deg,rgba(255,255,255,.05) 1px,transparent 1px);
background-size:40px 40px;
animation:gridMove 15s linear infinite;
}

/* Machine */

.machine{
position:absolute;
left:10%;
top:35%;
width:160px;
height:140px;
background:#334155;
border:2px solid #38bdf8;
border-radius:12px;
}

.screen{
position:absolute;
left:25px;
top:20px;
width:110px;
height:60px;
background:#22c55e;
border-radius:6px;
animation:glow 2s infinite;
}

.indicator{
position:absolute;
bottom:22px;
left:70px;
width:16px;
height:16px;
border-radius:50%;
background:#22c55e;
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

.flow{
width:60px;
height:100%;
background:#38bdf8;
animation:dataFlow 2s linear infinite;
}

/* Dashboard */

.dashboard{
position:absolute;
right:8%;
top:18%;
width:260px;
padding:18px;
background:rgba(15,23,42,.9);
border:1px solid #38bdf8;
border-radius:12px;
}

.title{
text-align:center;
letter-spacing:2px;
color:#38bdf8;
margin-bottom:14px;
}

.status{
margin-top:10px;
color:#cbd5e1;
font-size:14px;
}

.online{
color:#22c55e;
}

/* Shield */

.shield{
position:absolute;
left:46%;
top:26%;
font-size:56px;
animation:float 4s infinite;
}

/* 24x7 */

.support{
position:absolute;
left:46%;
bottom:18%;
font-size:34px;
font-weight:bold;
color:#38bdf8;
animation:pulse 2s infinite;
}

/* Cycle */

.cycle{
position:absolute;
left:42%;
top:52%;
width:120px;
height:120px;
}

.circle{
width:100%;
height:100%;
border:3px dashed #22c55e;
border-radius:50%;
animation:spin 8s linear infinite;
}

.arrow{
position:absolute;
width:14px;
height:14px;
background:#22c55e;
transform:rotate(45deg);
}

.a1{top:-6px;left:50%;}
.a2{right:-6px;top:50%;}
.a3{left:50%;bottom:-6px;}

/* Icons */

.icon{
position:absolute;
font-size:28px;
animation:float 5s infinite ease-in-out;
}

.calendar{left:20%;top:14%;}
.phone{right:20%;top:12%;animation-delay:1s;}
.wrench{left:22%;bottom:14%;animation-delay:2s;}
.analytics{right:18%;bottom:16%;animation-delay:3s;}

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
.l3{left:36%;top:10%;animation-delay:2s;}

/* Animations */

@keyframes spin{
to{transform:rotate(360deg);}
}

@keyframes pulse{
0%,100%{transform:scale(1);}
50%{transform:scale(1.2);}
}

@keyframes glow{
0%,100%{box-shadow:0 0 10px #22c55e;}
50%{box-shadow:0 0 24px #22c55e;}
}

@keyframes dataFlow{
0%{transform:translateX(-70px);}
100%{transform:translateX(190px);}
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
  )
}