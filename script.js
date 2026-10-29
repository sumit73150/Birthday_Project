
/* ============ EDIT YOUR CONTENT HERE ============ */
// Photos: put a URL or data: URI in src. Empty src = cute placeholder. Add as many entries as you like.
const HERO_PHOTO = "img1.jpg";
const PHOTOS = [
 {src:"img2.jpg",cap:"How can someone look this cute without even trying? 🥹💗"},
 {src:"img3.jpg",cap:"Main character energy, always. ✨"},
 {src:"img4.jpg",cap:"A little sunshine in human form. ☀️"},
 {src:"img5.jpg",cap:"Some pictures just make you smile instantly. This is one of them. 🌷"},
 {src:"img6.jpg",cap:"Cutie alert! Someone needs to explain how this level of cuteness is even possible. 🎀"},
 {src:"img7.jpg",cap:"Pretty moments, beautiful memories, and a smile worth remembering. 💕"},
 {src:"img8.jpg",cap:"If happiness had a photograph, it might look a little like this. 🩷"},
 {src:"img9.jpg",cap:"Just a reminder that you deserve all the beautiful things in life. ✨"}
];
const BALLOONS = [
 {c:["#F9C3D2","#F4A7BB"],e:"🎀",t:"A Sweet Birthday Wish",m:"One balloon, one wish: may your life always be filled with happiness, beautiful surprises, and countless reasons to smile. 💗"},
 {c:["#E8E1FA","#C9BDEF"],e:"🌷",t:"Tulip Love",m:"For the girl who loves tulips 🌷 May your life bloom with happiness, just like the prettiest flowers in the garden."},
 {c:["#EAF6FD","#B5DAF0"],e:"🏔️",t:"Mountain Dreams",m:"May you visit all the beautiful mountains you’ve dreamed of, experience magical snowfall, and collect memories that stay with you forever. ❄️🏔️"},
 {c:["#FFF8EF","#E9CC91"],e:"🍮",t:"Something Sweet",m:"A little sweetness for someone who deserves all the sweetness in the world. Hope your birthday is as delightful as your favourite rasmalai! 🍮"},
 {c:["#FFE1CF","#FFB99A"],e:"🤝",t:"Best Friend Forever",m:"From Class 10 to today, I’m genuinely grateful for our friendship. Here’s to more adventures, more laughter, and many more memories together. ❤️ — Sumit"}
];
const GIFTS = ["Your happiness looks good on you. 💖","May your wardrobe and your life be full of beautiful things. 👗","A birthday wish for endless smiles and little shopping adventures. 🛍️"];
const LETTER = ["Dear Vanshika,","Happy Birthday to one of the most special people in my life! ❤️","It’s amazing to think that we’ve been friends since Class 10 and that almost 4.5 years have passed.","We’ve grown, learned, and experienced so many things along the way. I’m genuinely grateful that our friendship has been a part of my life.","Today, I hope you get everything that makes you happy: beautiful tulips, snowy mountain adventures, delicious rasmalai, lovely shopping days, and countless reasons to smile.","I hope you always have the courage to chase your dreams, the opportunity to explore beautiful places, and people around you who appreciate you for who you are.","You deserve a life filled with happiness, success, peace, and beautiful memories.","Thank you for being a part of my journey.","Keep smiling, keep dreaming, and keep being your wonderful self.","Happy Birthday once again, Vanshika! 🎂🌷","With lots of love and best wishes,<br>Your Best Friend,<br>Sumit ❤️"];
/* ================================================= */

const $=s=>document.querySelector(s), RM=matchMedia('(prefers-reduced-motion:reduce)').matches;
const CF=(o={})=>{try{if(window.confetti&&!RM)confetti({particleCount:90,spread:80,origin:{y:.6},colors:['#F4A7BB','#DED6F5','#DCEFFA','#E9CC91','#A8B89A'],...o})}catch(e){}};
function tulip(c,cls=''){return `<svg class="${cls}" viewBox="0 0 60 120" aria-hidden="true"><path d="M30 118V58" stroke="#8fa381" stroke-width="4" fill="none"/><path d="M30 110C10 100 8 84 18 78c6 4 10 14 12 32zM30 100c20-8 24-20 16-28-6 2-12 12-16 28z" fill="#A8B89A"/><g class="head"><path d="M12 28c0 22 8 34 18 34s18-12 18-34c-6 6-10 2-18-6-8 8-12 12-18 6z" fill="${c}"/><path d="M30 22c-4 10-4 26 0 40 4-14 4-30 0-40z" fill="#fff4" /></g></svg>`}
document.querySelectorAll('[data-tulip]').forEach(e=>e.innerHTML=tulip(e.dataset.tulip));
function petals(n=30){if(RM)return;const cs=['#F4A7BB','#F9C3D2','#DED6F5','#fff'];for(let i=0;i<n;i++){const p=document.createElement('i');p.className='petal';p.style.cssText=`left:${Math.random()*100}vw;background:${cs[i%4]};animation-duration:${3+Math.random()*3}s;animation-delay:${Math.random()*1.5}s;`;document.body.appendChild(p);setTimeout(()=>p.remove(),7000)}}
const reveal=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting)e.target.classList.add('in')}),{threshold:.2});
const watchReveals=()=>document.querySelectorAll('.reveal').forEach(e=>reveal.observe(e));

/* Intro */
function enter(){$('#intro').classList.add('gone');document.body.style.overflow='';}
$('#openBtn').onclick=()=>{$('#env').classList.add('open');CF();petals(30);setTimeout(enter,1400)};
$('#skip').onclick=enter;

/* Hero photo */
function photoEl(src,label){return src?`<img src="${src}" alt="${label||'Vanshika'}" loading="lazy">`:`<span>📷 Photo goes here</span>`}
if(HERO_PHOTO)$('[data-hero]').innerHTML=photoEl(HERO_PHOTO);

/* Balloons */
let popped=0;
function buildBalloons(){popped=0;$('#count').textContent='0 of 5 surprises discovered.';$('#bcard').innerHTML='';const f=$('#bfield');f.innerHTML='';
 BALLOONS.forEach((b,i)=>{const w=document.createElement('button');w.className='bwrap';w.setAttribute('aria-label','Pop balloon '+(i+1));w.innerHTML=`<span class="bal" style="--c1:${b.c[0]};--c2:${b.c[1]}">${i+1}</span>`;
  w.onclick=()=>{if(w.dataset.done)return;w.dataset.done=1;w.classList.add('pop');const r=w.getBoundingClientRect();
   CF({particleCount:40,spread:360,startVelocity:20,origin:{x:(r.left+r.width/2)/innerWidth,y:(r.top+40)/innerHeight}});
   setTimeout(()=>{w.style.visibility='hidden';w.style.pointerEvents='none'},260);
   popped++;$('#count').textContent=`${popped} of 5 surprises discovered.`;
   const ill=i===1?tulip('#F4A7BB'):`<span>${b.e}</span>`;
   $('#bcard').innerHTML=`<div class="card pop-in"><div class="ill">${i===1?'<div style="width:50px">'+ill+'</div>':ill}</div><h3 style="font-family:'Playfair Display',serif;margin:.2em 0">${b.t}</h3><p style="margin:0">${b.m}</p></div>`;
   if(popped===5)setTimeout(()=>{CF({particleCount:200,spread:120});petals(40);$('#bcard').innerHTML+=`<div class="card pop-in"><h3 style="font-family:'Playfair Display',serif;margin:0">You found all five surprises! Happy Birthday, Vanshika! 🎂🌷</h3></div>`},500)};
  f.appendChild(w)})}
$('#replay').onclick=buildBalloons;buildBalloons();

/* Gallery */
const rot=[-2.5,1.8,-1,2.6,-1.8,1.2,-2.2,2],ratios=['4/5','1/1','3/4','4/5','5/6','1/1','3/4','4/5'];
function renderGallery(){const m=$('#mason');m.innerHTML='';PHOTOS.forEach((p,i)=>{const b=document.createElement('button');b.className='pol';b.style.transform=`rotate(${rot[i%8]}deg)`;b.setAttribute('aria-label','Open photo '+(i+1));
 b.innerHTML=`<div class="ph" style="--r:${ratios[i%8]}">${photoEl(p.src,'Cute photo '+(i+1))}</div><p>${p.cap}</p>`;if(!p.src)b.querySelector('.ph').innerHTML='<span>🌷 Your photo here<br>🩷</span>';b.onclick=()=>openLB(i);m.appendChild(b)})}
renderGallery();
$('#pick').onchange=e=>{[...e.target.files].forEach((f,i)=>{const u=URL.createObjectURL(f);const j=PHOTOS.findIndex(p=>!p.src);if(j>-1)PHOTOS[j].src=u;else PHOTOS.push({src:u,cap:"Another cutie moment. 💗"})});renderGallery()};
let cur=0;
function openLB(i){cur=(i+PHOTOS.length)%PHOTOS.length;const p=PHOTOS[cur];$('#lbimg').innerHTML=p.src?`<img src="${p.src}" alt="Cute photo ${cur+1}">`:`<div class="ph">🌷 Your photo here 🩷</div>`;$('#lbcap').textContent=p.cap;$('#lb').classList.add('on');$('#close').focus()}
const closeLB=()=>$('#lb').classList.remove('on');
$('#close').onclick=closeLB;$('#prev').onclick=()=>openLB(cur-1);$('#next').onclick=()=>openLB(cur+1);
addEventListener('keydown',e=>{if(!$('#lb').classList.contains('on'))return;if(e.key==='Escape')closeLB();if(e.key==='ArrowLeft')openLB(cur-1);if(e.key==='ArrowRight')openLB(cur+1)});
let sx=0;$('#lb').addEventListener('touchstart',e=>sx=e.touches[0].clientX,{passive:true});$('#lb').addEventListener('touchend',e=>{const d=e.changedTouches[0].clientX-sx;if(Math.abs(d)>50)openLB(cur+(d<0?1:-1))});

/* Tulips */
const cols=['#F4A7BB','#fff','#C9BDEF','#F4A7BB','#fff','#C9BDEF'];
$('#garden').innerHTML=cols.map(c=>`<div class="tl">${tulip(c)}</div>`).join('');
$('#garden2').innerHTML=cols.map(c=>`<div class="tl">${tulip(c)}</div>`).join('');
$('#bloom').onclick=()=>{$('#garden').classList.remove('bud');petals(35);CF({particleCount:40,colors:['#F4A7BB','#fff']})};
new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting)setTimeout(()=>e.target.classList.remove('bud'),600)}),{threshold:.6}).observe($('#garden'));

/* Snow */
const sn=$('#snow');for(let i=0;i<22&&!RM;i++){const f=document.createElement('span');f.className='flake';f.textContent='❄';f.style.cssText=`left:${Math.random()*100}%;font-size:${8+Math.random()*12}px;animation-duration:${6+Math.random()*8}s;animation-delay:-${Math.random()*10}s;opacity:${.5+Math.random()*.5}`;sn.appendChild(f)}
$('#snowBtn').onclick=()=>{$('#snowMsg').classList.remove('hid');$('#snowMsg').classList.add('pop-in')};

/* Rasmalai */
$('#rasma').onclick=()=>{const m=$('#sweetMsg');m.classList.remove('hid');m.classList.remove('pop-in');void m.offsetWidth;m.classList.add('pop-in')};
$('#extra').onclick=()=>{$('#extraMsg').classList.remove('hid');CF({particleCount:50,colors:['#E9CC91','#FFF1B8','#fff'],shapes:['circle'],scalar:.8})};

/* Shopping */
GIFTS.forEach((g,i)=>{const b=document.createElement('button');b.className='gift';b.textContent='🛍️';b.setAttribute('aria-label','Open shopping bag '+(i+1));b.onclick=()=>{b.textContent='🎁';const r=b.getBoundingClientRect();CF({particleCount:50,spread:100,origin:{x:(r.left+r.width/2)/innerWidth,y:(r.top)/innerHeight}});$('#giftMsg').innerHTML=`<p class="pop-in hand" style="margin:0">${g}</p>`};$('#gifts').appendChild(b)});

/* Letter */
$('#paper').innerHTML=LETTER.map((t,i)=>`<p style="animation-delay:${i*.5}s">${t}</p>`).join('');
$('#lbtn').onclick=()=>{$('#paper').classList.add('on');$('#lbtn').classList.add('hid');petals(14)};

/* Cake */
let out=false,stream,raf;
function blow(){if(out)return;out=true;$('#cakeSvg').classList.add('out');$('#wishMsg').classList.remove('hid');$('#relight').classList.remove('hid');CF({particleCount:140});petals(30);stopMic()}
function stopMic(){cancelAnimationFrame(raf);if(stream){stream.getTracks().forEach(t=>t.stop());stream=null}}
$('#blow').onclick=blow;
$('#relight').onclick=()=>{out=false;$('#cakeSvg').classList.remove('out');$('#wishMsg').classList.add('hid');$('#relight').classList.add('hid')};
$('#mic').onclick=async()=>{const n=$('#micNote');if(!navigator.mediaDevices||!navigator.mediaDevices.getUserMedia){n.textContent='Microphone not supported here, use the button instead 💗';return}
 try{stream=await navigator.mediaDevices.getUserMedia({audio:true});const AC=window.AudioContext||window.webkitAudioContext,ctx=new AC(),an=ctx.createAnalyser();an.fftSize=512;ctx.createMediaStreamSource(stream).connect(an);const d=new Uint8Array(an.fftSize);n.textContent='Listening… blow gently toward your phone 🌬️';let base=null,hits=0;
  const loop=()=>{an.getByteTimeDomainData(d);let s=0;for(const v of d)s+=(v-128)**2;const rms=Math.sqrt(s/d.length);if(base===null)base=rms;base=base*.95+rms*.05;if(rms>base+14)hits++;else hits=Math.max(0,hits-1);if(hits>8){blow();ctx.close();n.textContent='';return}raf=requestAnimationFrame(loop)};loop()}
 catch(e){n.textContent='No microphone access, no worries, use the button! 💗'}};

/* Restart */
$('#again').onclick=()=>{buildBalloons();$('#relight').click();$('#garden').classList.add('bud');$('#paper').classList.remove('on');$('#lbtn').classList.remove('hid');$('#snowMsg').classList.add('hid');$('#sweetMsg').classList.add('hid');$('#extraMsg').classList.add('hid');$('#giftMsg').innerHTML='';$('#env').classList.remove('open');$('#intro').classList.remove('gone');scrollTo(0,0)};
let fin=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){CF({particleCount:80});petals(20);fin.disconnect()}}),{threshold:.4});fin.observe($('#final'));
setTimeout(watchReveals,100);
