'use client'

import React from 'react'

export default function AnnualServiceScene() {
  return (
    <div className="annual-service-scene">

      {/* Background */}
      <div className="grid"/>

      {/* Calendar */}
      <div className="calendar">

        <div className="calendar-header">
          ANNUAL SERVICE
        </div>

        <div className="calendar-grid">

          {Array.from({length:35}).map((_,i)=>(
            <div
              key={i}
              className={`day ${
                [5,12,19,26].includes(i)
                  ? 'service'
                  : ''
              }`}
            />
          ))}

        </div>

      </div>

      {/* Engineer */}

      <div className="engineer">

        <div className="head"/>
        <div className="body"/>
        <div className="arm"/>
        <div className="tool">🔧</div>

      </div>

      {/* Machine */}

      <div className="machine">

        <div className="display"/>

        <div className="indicator i1"/>
        <div className="indicator i2"/>
        <div className="indicator i3"/>

      </div>

      {/* Clock */}

      <div className="clock">

        <div className="hour"/>
        <div className="minute"/>

      </div>

      {/* Service Badge */}

      <div className="badge">

        ✔ Scheduled

      </div>

      {/* Floating Icons */}

      <div className="icon icon1">📅</div>
      <div className="icon icon2">🛠️</div>
      <div className="icon icon3">⚙️</div>
      <div className="icon icon4">📋</div>

      {/* Timeline */}

      <div className="timeline">

        <div className="line"/>

        <div className="point p1"/>
        <div className="point p2"/>
        <div className="point p3"/>
        <div className="point p4"/>

      </div>

      {/* Labels */}

      <div className="label l1">
        YEARLY INSPECTION
      </div>

      <div className="label l2">
        PREVENTIVE SERVICE
      </div>

      <div className="label l3">
        NEXT VISIT
      </div>

      <style jsx>{`

.annual-service-scene{
position:absolute;
inset:0;
overflow:hidden;
border-radius:24px;
background:
linear-gradient(180deg,#10253b,#08111b);
}

/* ---------------- */

.grid{
position:absolute;
inset:0;
background-image:
linear-gradient(rgba(255,255,255,.05) 1px,transparent 1px),
linear-gradient(90deg,rgba(255,255,255,.05) 1px,transparent 1px);
background-size:40px 40px;
animation:gridMove 14s linear infinite;
}

/* ---------------- */

.calendar{

position:absolute;
left:8%;
top:12%;
width:260px;
padding:16px;
background:#1e293b;
border:2px solid #38bdf8;
border-radius:12px;

}

.calendar-header{

text-align:center;
color:#38bdf8;
margin-bottom:14px;
font-size:13px;
letter-spacing:2px;

}

.calendar-grid{

display:grid;
grid-template-columns:repeat(7,1fr);
gap:6px;

}

.day{

height:20px;
background:#334155;
border-radius:4px;

}

.service{

background:#22c55e;
animation:serviceBlink 2s infinite;

}

/* ---------------- */

.machine{

position:absolute;
right:12%;
top:24%;
width:220px;
height:170px;
background:#334155;
border-radius:12px;
border:2px solid #60a5fa;

}

.display{

position:absolute;
left:35px;
top:30px;
width:150px;
height:55px;
background:#22c55e;
border-radius:8px;
animation:displayPulse 2s infinite;

}

.indicator{

position:absolute;
bottom:28px;
width:14px;
height:14px;
border-radius:50%;
background:#22c55e;

animation:pulse 2s infinite;

}

.i1{left:55px;}
.i2{left:95px;animation-delay:.6s;}
.i3{left:135px;animation-delay:1.2s;}

/* ---------------- */

.engineer{

position:absolute;
left:43%;
bottom:70px;
width:70px;
height:110px;

}

.head{

width:22px;
height:22px;
border-radius:50%;
background:#fde68a;
margin:auto;

}

.body{

width:16px;
height:48px;
background:#3b82f6;
margin:5px auto;

}

.arm{

position:absolute;
top:36px;
left:38px;
width:42px;
height:5px;
background:#fde68a;
transform-origin:left;
animation:repair 2s infinite;

}

.tool{

position:absolute;
left:68px;
top:22px;
font-size:22px;
animation:toolMove 2s infinite;

}

/* ---------------- */

.clock{

position:absolute;
right:34%;
top:14%;
width:90px;
height:90px;
border-radius:50%;
border:4px solid #38bdf8;

}

.hour{

position:absolute;
left:43px;
top:22px;
width:4px;
height:22px;
background:white;
transform-origin:bottom;
animation:hourRotate 24s linear infinite;

}

.minute{

position:absolute;
left:43px;
top:12px;
width:3px;
height:34px;
background:#38bdf8;
transform-origin:bottom;
animation:minuteRotate 6s linear infinite;

}

/* ---------------- */

.badge{

position:absolute;
right:10%;
bottom:16%;
padding:12px 20px;
background:#22c55e;
border-radius:30px;
font-weight:bold;
color:white;
animation:badgePulse 2s infinite;

}

/* ---------------- */

.icon{

position:absolute;
font-size:26px;
animation:float 5s infinite ease-in-out;

}

.icon1{left:35%;top:16%;}
.icon2{left:70%;top:12%;animation-delay:1s;}
.icon3{left:62%;bottom:14%;animation-delay:2s;}
.icon4{left:14%;bottom:18%;animation-delay:3s;}

/* ---------------- */

.timeline{

position:absolute;
left:50%;
bottom:32px;
transform:translateX(-50%);
width:360px;

}

.line{

height:4px;
background:#334155;

}

.point{

position:absolute;
top:-5px;
width:14px;
height:14px;
border-radius:50%;
background:#22c55e;
animation:pulse 2s infinite;

}

.p1{left:0;}
.p2{left:33%;}
.p3{left:66%;}
.p4{right:0;}

/* ---------------- */

.label{

position:absolute;
font-size:12px;
letter-spacing:3px;
color:#cbd5e1;
animation:float 4s infinite;

}

.l1{left:10%;bottom:8%;}
.l2{right:8%;top:10%;animation-delay:1s;}
.l3{left:46%;top:8%;animation-delay:2s;}

/* ---------------- */

@keyframes pulse{
0%,100%{transform:scale(1);}
50%{transform:scale(1.4);}
}

@keyframes serviceBlink{
0%,100%{opacity:.5;}
50%{opacity:1;}
}

@keyframes displayPulse{
0%,100%{box-shadow:0 0 10px #22c55e;}
50%{box-shadow:0 0 25px #22c55e;}
}

@keyframes repair{
0%,100%{transform:rotate(10deg);}
50%{transform:rotate(-25deg);}
}

@keyframes toolMove{
0%,100%{transform:translateY(0);}
50%{transform:translateY(8px);}
}

@keyframes hourRotate{
to{transform:rotate(360deg);}
}

@keyframes minuteRotate{
to{transform:rotate(360deg);}
}

@keyframes badgePulse{
0%,100%{transform:scale(1);}
50%{transform:scale(1.08);}
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