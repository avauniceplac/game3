/* ===== Morfo (mascote SVG — coração) ===== */
/* mood: idle | happy | sad | trophy | star | cheer ; cls opcional */
function cito(mood='idle',cls=''){
  const red='#ff5d6c',redD='#e23b4d',cheek='#ff5d8f',gold='#ffcf3f',goldD='#e0a010',ink='#7a1420',shine='#ffffff';
  let eyes,mouth,arms='',extra='',crown='';
  const bodyPath="M50 82 C 22 60, 18 36, 34 28 C 44 23, 50 32, 50 38 C 50 32, 56 23, 66 28 C 82 36, 78 60, 50 82 Z";
  const happyEyes=`<path d="M36 50 q5 -6 10 0" stroke="${ink}" stroke-width="3.2" fill="none" stroke-linecap="round"/>
        <path d="M54 50 q5 -6 10 0" stroke="${ink}" stroke-width="3.2" fill="none" stroke-linecap="round"/>`;
  const bigSmile=`<path d="M41 60 q9 9 18 0" stroke="${ink}" stroke-width="3.2" fill="${shine}" stroke-linecap="round"/>`;
  const upArms=`<path class="arm-l" d="M26 62 q-12 -6 -12 -18" stroke="${redD}" stroke-width="6.5" fill="none" stroke-linecap="round"/>
        <path class="arm-r" d="M74 62 q12 -6 12 -18" stroke="${redD}" stroke-width="6.5" fill="none" stroke-linecap="round"/>`;
  const cheeks=`<circle cx="33" cy="58" r="4.5" fill="${cheek}" opacity=".55"/><circle cx="67" cy="58" r="4.5" fill="${cheek}" opacity=".55"/>`;

  if(mood==='happy'){eyes=happyEyes;mouth=bigSmile;arms=upArms;extra=cheeks;}
  else if(mood==='trophy'){
    eyes=`<g class="twinkle"><path d="M37 48 l1.5 3.2 3.4 .4 -2.5 2.4 .6 3.4 -3 -1.7 -3 1.7 .6 -3.4 -2.5 -2.4 3.4 -.4z" fill="${ink}"/>
      <path d="M59 48 l1.5 3.2 3.4 .4 -2.5 2.4 .6 3.4 -3 -1.7 -3 1.7 .6 -3.4 -2.5 -2.4 3.4 -.4z" fill="${ink}"/></g>`;
    mouth=bigSmile;arms=upArms;extra=cheeks;
    crown=`<g class="trophy-up"><path d="M42 14 h16 v5 q0 8 -8 9 q-8 -1 -8 -9z" fill="${gold}" stroke="${goldD}" stroke-width="1.6"/>
      <path d="M42 15 q-6 0 -6 5 q0 4 6 4" fill="none" stroke="${goldD}" stroke-width="1.6"/>
      <path d="M58 15 q6 0 6 5 q0 4 -6 4" fill="none" stroke="${goldD}" stroke-width="1.6"/>
      <rect x="48" y="27" width="4" height="4" fill="${goldD}"/></g>`;
  }
  else if(mood==='star'){eyes=happyEyes;mouth=bigSmile;arms=upArms;extra=cheeks;
    crown=`<g class="twinkle"><path d="M16 26 l1.2 2.6 2.8 .3 -2 1.9 .5 2.8 -2.5 -1.4 -2.5 1.4 .5 -2.8 -2 -1.9 2.8 -.3z" fill="${gold}"/>
      <path d="M84 24 l1.2 2.6 2.8 .3 -2 1.9 .5 2.8 -2.5 -1.4 -2.5 1.4 .5 -2.8 -2 -1.9 2.8 -.3z" fill="${gold}"/></g>`;}
  else if(mood==='cheer'){
    eyes=`<circle cx="41" cy="51" r="4" fill="${ink}"/><circle cx="59" cy="51" r="4" fill="${ink}"/>
      <circle cx="42.3" cy="49.7" r="1.3" fill="#fff"/><circle cx="60.3" cy="49.7" r="1.3" fill="#fff"/>`;
    mouth=`<path d="M42 60 q8 7 16 0" stroke="${ink}" stroke-width="3.2" fill="none" stroke-linecap="round"/>`;
    arms=`<path class="arm-wave" d="M74 62 q13 -5 12 -17" stroke="${redD}" stroke-width="6.5" fill="none" stroke-linecap="round"/>
      <path d="M26 64 q-9 2 -9 10" stroke="${redD}" stroke-width="6.5" fill="none" stroke-linecap="round"/>`;
    extra=cheeks;
  }
  else if(mood==='sad'){
    eyes=`<line x1="34" y1="48" x2="45" y2="55" stroke="${ink}" stroke-width="3.2" stroke-linecap="round"/>
      <line x1="45" y1="48" x2="34" y2="55" stroke="${ink}" stroke-width="3.2" stroke-linecap="round"/>
      <line x1="55" y1="48" x2="66" y2="55" stroke="${ink}" stroke-width="3.2" stroke-linecap="round"/>
      <line x1="66" y1="48" x2="55" y2="55" stroke="${ink}" stroke-width="3.2" stroke-linecap="round"/>`;
    mouth=`<path d="M41 66 q9 -7 18 0" stroke="${ink}" stroke-width="3.2" fill="none" stroke-linecap="round"/>`;
    arms=`<path d="M26 64 q-9 4 -9 12" stroke="${redD}" stroke-width="6.5" fill="none" stroke-linecap="round"/>
      <path d="M74 64 q9 4 9 12" stroke="${redD}" stroke-width="6.5" fill="none" stroke-linecap="round"/>`;
  }
  else{ /* idle */
    eyes=`<circle cx="41" cy="51" r="4" fill="${ink}" class="blink"/><circle cx="59" cy="51" r="4" fill="${ink}" class="blink"/>`;
    mouth=`<path d="M42 60 q8 6 16 0" stroke="${ink}" stroke-width="3.2" fill="none" stroke-linecap="round"/>`;
    arms=`<path d="M26 64 q-9 2 -9 10" stroke="${redD}" stroke-width="6.5" fill="none" stroke-linecap="round"/>
      <path d="M74 64 q9 2 9 10" stroke="${redD}" stroke-width="6.5" fill="none" stroke-linecap="round"/>`;
    extra=`<circle cx="34" cy="57" r="3.6" fill="${cheek}" opacity=".45"/><circle cx="66" cy="57" r="3.6" fill="${cheek}" opacity=".45"/>`;
  }
  return `<svg class="cito ${cls}" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    ${crown}${arms}
    <path d="${bodyPath}" fill="${red}" stroke="${redD}" stroke-width="3" stroke-linejoin="round"/>
    <path d="M40 34 c -6 2, -8 9, -5 15" fill="none" stroke="${shine}" stroke-width="4" stroke-linecap="round" opacity=".45"/>
    ${extra}${eyes}${mouth}
  </svg>`;
}

/* ===== logo ===== */
const LOGO_DATA="data:image/png;base64,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";
document.getElementById('hudLogo').src=LOGO_DATA;

const isTouch=window.matchMedia('(hover:none)').matches||'ontouchstart' in window;

/* ===== som (Web Audio, sintetizado, sem arquivos) ===== */
let soundOn=true, actx=null;
function initAudio(){ if(!actx){try{actx=new (window.AudioContext||window.webkitAudioContext)();}catch(e){actx=null;}} if(actx&&actx.state==='suspended')actx.resume(); }
function tone(freq,start,dur,type='sine',vol=0.2){
  if(!actx)return;
  const o=actx.createOscillator(),g=actx.createGain();
  o.type=type;o.frequency.value=freq;
  const t=actx.currentTime+start;
  g.gain.setValueAtTime(0,t);
  g.gain.linearRampToValueAtTime(vol,t+0.015);
  g.gain.exponentialRampToValueAtTime(0.0001,t+dur);
  o.connect(g);g.connect(actx.destination);
  o.start(t);o.stop(t+dur+0.02);
}
const SFX={
  click(){ if(!soundOn||!actx)return; tone(320,0,0.05,'triangle',0.08); },
  correct(){ if(!soundOn||!actx)return; [523,659,784].forEach((f,i)=>tone(f,i*0.08,0.18,'sine',0.18)); },
  wrong(){ if(!soundOn||!actx)return; tone(300,0,0.16,'sine',0.14); tone(220,0.1,0.2,'sine',0.12); },
  fanfare(){ if(!soundOn||!actx)return; const seq=[[523,0],[659,0.12],[784,0.24],[1047,0.4]]; seq.forEach(([f,t])=>tone(f,t,0.35,'triangle',0.2)); tone(1319,0.56,0.5,'sine',0.16); },
};
function updateMute(){
  const btn=document.getElementById('muteBtn');
  btn.textContent=soundOn?'🔊':'🔇';
  btn.classList.toggle('off',!soundOn);
}
document.getElementById('muteBtn').addEventListener('click',()=>{
  soundOn=!soundOn; updateMute(); if(soundOn){initAudio();SFX.click();}
});
/* clique de botões em geral (delegação) */
document.addEventListener('click',(e)=>{
  const b=e.target.closest('button');
  if(!b)return;
  if(b.id==='muteBtn')return; // já tratado
  initAudio();
  SFX.click();
},true);

function shuffle(a){a=[...a];for(let i=a.length-1;i>0;i--){const j=Math.random()*(i+1)|0;[a[i],a[j]]=[a[j],a[i]]}return a}
function say(t){document.getElementById('srStatus').textContent=t}

/* ===== estado ===== */
let xp=0, results=[], streak=0;
let hintsLeft=3;                 // dicas por partida
let usedHintAny=false;           // usou dica em alguma questão? (afeta o troféu)
function addXP(n){
  xp+=n;document.getElementById('xpTxt').textContent=xp;
  const l=Math.floor(xp/300)+1;document.getElementById('lvl').textContent=l;
  document.getElementById('xpFill').style.width=((xp%300)/300*100)+'%';
}
function bumpStreak(hit){
  if(hit)streak++;else streak=0;
  const box=document.getElementById('streakBox');
  document.getElementById('streakN').textContent=streak;
  box.classList.toggle('on',streak>=2);
}
function updateHints(){
  const box=document.getElementById('hintBox');
  if(box)document.getElementById('hintN').textContent=hintsLeft;
}
/* node = referência ao bloco do flow, pra permitir "corrigir só os erros" */
function record(tipo,titulo,acertou,node,comDica){results.push({tipo,titulo,acertou,node,comDica:!!comDica});}
function confetti(){
  const cols=['#0a9a5a','#f2823c','#7b5cff','#ffcf3f','#ff5d8f','#38c6e8'];
  const box=document.getElementById('confetti');
  for(let i=0;i<28;i++){
    const c=document.createElement('div');c.className='conf';
    c.style.left=(50+(Math.random()*40-20))+'%';
    c.style.top=(30+Math.random()*10)+'%';
    c.style.background=cols[i%cols.length];
    c.style.animationDelay=(Math.random()*.2)+'s';
    c.style.transform='translateX('+(Math.random()*200-100)+'px)';
    box.appendChild(c);setTimeout(()=>c.remove(),1600);
  }
}


/* ===== CONTEÚDO — Integração Morfofuncional (injetado) ===== */

/* QUESTÕES DE ALTERNATIVA (quiz) */
const QUIZ = [
  { meta:"Sistema cardiovascular", titulo:"Estruturas que impedem o refluxo",
    q:"O fluxo sanguíneo precisa seguir em sentido único para garantir a eficiência do ciclo cardíaco. Algumas estruturas anatômicas impedem o refluxo de sangue venoso. Assinale a alternativa que apresenta o nome dessas estruturas.",
    options:[
      {t:"Válvulas venais.",correct:true},
      {t:"Ventrículo ou câmara cardíaca.",correct:false},
      {t:"Epicárdio.",correct:false},
      {t:"Endotélio.",correct:false},
      {t:"Arteríola.",correct:false},
    ],
    why:"As válvulas venais garantem que o sangue siga em sentido único, impedindo o refluxo venoso e mantendo a eficiência do ciclo cardíaco. O ventrículo é uma câmara (não uma válvula), o epicárdio é a camada externa do coração, o endotélio reveste os vasos internamente e a arteríola é um vaso de pequeno calibre — nenhum deles impede refluxo.",
    hint:"A palavra-chave é 'impedir o refluxo' — pense na estrutura que funciona como uma portinha de sentido único." },
];

/* QUESTÃO DE VERDADEIRO OU FALSO (novo formato) */
const TRUEFALSE = {
  meta:"Verdadeiro ou Falso",
  titulo:"Propriocepção",
  intro:"Sobre as informações recebidas dos proprioceptores (receptores da pele, articulações, músculos e tendões), classifique cada afirmativa como Verdadeira ou Falsa.",
  items:[
    {txt:"Fornecem feedback sobre a tensão, a extensão e a contração muscular.", ans:true},
    {txt:"Informam a posição dos membros e do corpo e os movimentos articulares.", ans:true},
    {txt:"Recebem os estímulos captados pelos receptores visuais.", ans:false},
    {txt:"São os responsáveis diretos pelo paladar e pelo olfato.", ans:false},
  ],
  why:"Os proprioceptores fornecem feedback sobre a tensão, a extensão e a contração muscular, além da posição dos membros e do corpo e dos movimentos articulares — permitindo o conhecimento consciente da movimentação e da posição do corpo no espaço. Não captam estímulos visuais, olfativos, táteis ou gustativos, que são função de órgãos sensoriais específicos.",
  hint:"Proprio = 'próprio'. Pense no que o corpo sente de si mesmo (músculo, tendão, articulação), não nos cinco sentidos externos."
};

/* QUESTÃO DE COMPLETAR A FRASE (fill) */
const FILL = {
  meta:"Complete a frase",
  titulo:"Conceitos-chave de respiração e circulação",
  parts:[
    {txt:"A reoxigenação do sangue é chamada de "},{blank:"hematose"},
    {txt:" e ocorre nos "},{blank:"alvéolos pulmonares"},
    {txt:". Para que o sangue siga em sentido único e não haja refluxo venoso, atuam as "},{blank:"válvulas venais"},{txt:"."},
  ],
  distratores:["endotélio","átrios cardíacos","mitocôndria"],
  why:"Corretos: hematose, alvéolos pulmonares e válvulas venais. Os distratores não cabem: o endotélio reveste os vasos, os átrios são câmaras cardíacas e a mitocôndria é uma organela da respiração celular (não da hematose pulmonar)."
};

/* QUESTÃO DE ORDENAR (order) */
const ORDER = {
  meta:"Ordene as etapas do caminho do oxigênio, da entrada de ar até a entrega às células",
  titulo:"Trajeto da oxigenação",
  intro:"Ordene as etapas do caminho do oxigênio, da entrada de ar até a entrega às células.",
  correct:[
    "Ar rico em O2 é inalado e chega aos pulmões",
    "Hematose nos alvéolos pulmonares (reoxigenação)",
    "Sangue arterial oxigenado circula pelo corpo",
    "Nos tecidos: liberação de O2 e captação de CO2",
  ],
  why:"A hematose (reoxigenação do sangue) ocorre nos alvéolos pulmonares. Depois, o sangue arterial oxigenado segue pela circulação sistêmica até os tecidos, onde as células recebem O2 e eliminam CO2. Sequência: ar inalado → alvéolos (hematose) → sangue arterial → tecidos."
};

/* QUESTÃO DE CLASSIFICAR (classify) */
const CLASSIFY = {
  meta:"Classifique",
  titulo:"Fibras musculares",
  groups:{
    "Fibras intrafusais":["Agem como receptor de estiramento","Detectam mudanças de comprimento"],
    "Fibras extrafusais":["Responsáveis pela força na contração"],
  },
  why:"As fibras intrafusais agem como receptor de estiramento e detectam mudanças de comprimento do músculo (função sensorial, ligada ao fuso muscular). As fibras extrafusais são responsáveis pela força exercida durante a contração (função motora). Ambas fazem sinapse com neurônios motores alfa e gama."
};

const WIN=[{h:"Mandou bem!"},{h:"Isso aí!"},{h:"Perfeito!"},{h:"Show!"},{h:"Você arrasou!"}];
const LOSE=[
  {h:"Quase!",b:""},
  {h:"Ops, essa escapou!",b:""},
  {h:"Foi por pouco!",b:""},
];
const pick=a=>a[Math.random()*a.length|0];

/* ===== sequência ===== */
let flow=[], step=0;
function buildFlow(){
  /* 5 questões, uma de cada formato, em ordem fixa e variada */
  flow=[
    {type:'truefalse',data:TRUEFALSE},
    {type:'order',data:ORDER},
    {type:'classify',data:CLASSIFY},
    {type:'quiz',data:QUIZ[0]},
    {type:'fill',data:FILL},
  ];
}
function trail(){
  let s='<div class="trail">';
  for(let i=0;i<flow.length;i++){const cls=i<step?'done':(i===step?'active':'');s+=`<div class="tstep ${cls}"></div>`;}
  return s+'</div>';
}

/* ===== abertura ===== */
function intro(){
  document.getElementById('confetti').innerHTML='';
  const stage=document.getElementById('stage');
  stage.innerHTML=`<div class="card intro">
     <div class="intro-cito">${cito('happy')}</div>
     <h1>Revisão — Integração Morfofuncional</h1>
     <p>Oi! Eu sou o Morfo. Bora revisar juntos?</p>
     <p class="sub">Integração Morfofuncional do Corpo Humano · São 5 desafios diferentes: verdadeiro ou falso, ordenar, classificar, escolher e completar. Eu explico cada resposta no caminho.</p>
     <div class="badges"><span class="badge b1">V ou F</span><span class="badge b2">Arraste</span><span class="badge b3">Complete</span></div>
     <div class="hook">Quanto melhor você for, mais eu comemoro no fim. Será que rola o troféu de <b>Morfo Expert</b>? 🏆<br><span>Travou? Você tem 3 dicas por partida.</span></div>
     <div class="actions"><button class="btn wide" id="startBtn">Começar</button></div>
   </div>`;
  document.getElementById('startBtn').onclick=()=>{
    xp=0;results=[];step=0;streak=0;hintsLeft=3;usedHintAny=false;
    document.getElementById('xpTxt').textContent=0;
    document.getElementById('xpFill').style.width='0%';
    document.getElementById('lvl').textContent=1;
    document.getElementById('streakBox').classList.remove('on');
    document.getElementById('streakN').textContent=0;
    buildFlow();renderStep();
  };
}
function renderStep(){
  if(step>=flow.length)return finalScreen();
  const n=flow[step];
  ({quiz:renderQuiz,truefalse:renderTrueFalse,fill:renderFill,order:renderOrder,classify:renderClassify})[n.type](n.data,n);
  window.scrollTo({top:0,behavior:'smooth'});
}
function advance(){step++;renderStep();}

function winFB(fb,why,xpn,withHint){
  fb.className='fb win show';
  const badge=withHint?`<span class="fb-xp dim">+${xpn} XP · com dica</span>`:`<span class="fb-xp">+${xpn} XP</span>`;
  fb.innerHTML=`<div class="fb-cito">${cito('happy')}</div><div class="fb-txt">
    <div class="fb-head">${pick(WIN).h}</div>
    <div class="fb-body">${why}</div>${badge}</div>`;
  confetti();SFX.correct();
}
function loseFB(fb,why){
  const m=pick(LOSE);
  fb.className='fb lose show';
  fb.innerHTML=`<div class="fb-cito">${cito('sad')}</div><div class="fb-txt">
    <div class="fb-head">${m.h}</div><div class="fb-body">${why}</div></div>`;
  SFX.wrong();
}

/* ===== QUIZ ===== */
function renderQuiz(q,node){
  const opts=shuffle(q.options);
  let hintUsed=false;
  const canHint = hintsLeft>0 && q.hint;
  const stage=document.getElementById('stage');
  stage.innerHTML=`<div class="card">${trail()}
    <div class="topbar">
      <div class="eyebrow">${q.meta}</div>
      ${q.hint?`<button class="hint-btn" id="hintBtn" ${canHint?'':'disabled'}>💡 Dica <span class="hint-count" id="hintN">${hintsLeft}</span></button>`:''}
    </div>
    <div class="qtext">${q.q.replace(/\n/g,'<br>')}</div>
    <div class="hint-box" id="hintText"></div>
    <div id="opts"></div>
    <div class="fb" id="fb"></div>
    <div class="actions" id="afterBox" style="display:none"><button class="btn purple" id="nextBtn">${step+1<flow.length?'Continuar':'Ver resultado'}</button></div>
   </div>`;

  const hintBtn=document.getElementById('hintBtn');
  if(hintBtn){
    hintBtn.onclick=()=>{
      if(hintsLeft<=0||hintUsed)return;
      hintUsed=true;usedHintAny=true;hintsLeft--;
      const ht=document.getElementById('hintText');
      ht.textContent='💡 '+q.hint;ht.classList.add('show');
      hintBtn.disabled=true;hintBtn.querySelector('.hint-count').textContent=hintsLeft;
      say('Dica usada.');
    };
  }
  const box=document.getElementById('opts');
  opts.forEach((o,i)=>{
    const b=document.createElement('button');b.className='opt';b.innerHTML=o.t;
    b.onclick=()=>{
      if(hintBtn)hintBtn.disabled=true;
      document.querySelectorAll('.opt').forEach((el,j)=>{el.disabled=true;
        if(opts[j].correct){el.classList.add('correct');el.insertAdjacentHTML('beforeend',' <span class="tag">✓</span>');}
        else if(j===i){el.classList.add('wrong');el.insertAdjacentHTML('beforeend',' <span class="tag">✕</span>');}
      });
      const fb=document.getElementById('fb');
      if(o.correct){
        const gain=hintUsed?50:100;
        addXP(gain);bumpStreak(true);
        winFB(fb,q.why,gain,hintUsed);
        record('Pergunta',q.titulo,true,node,hintUsed);say('Correto!');
      }else{
        bumpStreak(false);loseFB(fb,q.why);
        record('Pergunta',q.titulo,false,node,hintUsed);say('Incorreto.');
      }
      document.getElementById('afterBox').style.display='flex';
      document.getElementById('nextBtn').onclick=advance;
    };
    box.appendChild(b);
  });
}

/* ===== VERDADEIRO OU FALSO ===== */
function renderTrueFalse(T,node){
  let hintUsed=false;
  const canHint = hintsLeft>0 && T.hint;
  const stage=document.getElementById('stage');
  let rows='';
  T.items.forEach((it,i)=>{
    rows+=`<div class="tf-row" data-i="${i}">
      <div class="tf-txt">${it.txt}</div>
      <div class="tf-btns">
        <button class="tf-opt" data-i="${i}" data-val="true">V</button>
        <button class="tf-opt" data-i="${i}" data-val="false">F</button>
      </div>
    </div>`;
  });
  stage.innerHTML=`<div class="card">${trail()}
    <div class="topbar">
      <div class="eyebrow">${T.meta}</div>
      ${T.hint?`<button class="hint-btn" id="hintBtn" ${canHint?'':'disabled'}>💡 Dica <span class="hint-count" id="hintN">${hintsLeft}</span></button>`:''}
    </div>
    <div class="qtext">${T.intro}</div>
    <div class="hint-box" id="hintText"></div>
    <div class="tf-list" id="tfList">${rows}</div>
    <div class="actions"><button class="btn" id="checkTF" disabled>Conferir</button></div>
    <div class="fb" id="fb"></div>
    <div class="actions" id="afterBox" style="display:none"><button class="btn purple" id="nextBtn">${step+1<flow.length?'Continuar':'Ver resultado'}</button></div>
   </div>`;

  const hintBtn=document.getElementById('hintBtn');
  if(hintBtn){
    hintBtn.onclick=()=>{
      if(hintsLeft<=0||hintUsed)return;
      hintUsed=true;usedHintAny=true;hintsLeft--;
      const ht=document.getElementById('hintText');
      ht.textContent='💡 '+T.hint;ht.classList.add('show');
      hintBtn.disabled=true;hintBtn.querySelector('.hint-count').textContent=hintsLeft;
      say('Dica usada.');
    };
  }

  const picks={};
  document.querySelectorAll('.tf-opt').forEach(b=>{
    b.onclick=()=>{
      const i=b.dataset.i;
      document.querySelectorAll(`.tf-opt[data-i="${i}"]`).forEach(x=>x.classList.remove('sel'));
      b.classList.add('sel');
      picks[i]=(b.dataset.val==='true');
      if(Object.keys(picks).length===T.items.length)document.getElementById('checkTF').disabled=false;
    };
  });

  document.getElementById('checkTF').onclick=()=>{
    let ok=true;
    T.items.forEach((it,i)=>{
      const row=document.querySelector(`.tf-row[data-i="${i}"]`);
      const good=picks[i]===it.ans;
      if(!good)ok=false;
      document.querySelectorAll(`.tf-opt[data-i="${i}"]`).forEach(x=>{
        x.disabled=true;
        const isThis=(x.dataset.val==='true')===it.ans;
        if(isThis)x.classList.add('tf-correct');
        if(x.classList.contains('sel')&&!good)x.classList.add('tf-wrong');
      });
      row.classList.add(good?'tf-ok':'tf-no');
    });
    if(hintBtn)hintBtn.disabled=true;
    document.getElementById('checkTF').disabled=true;
    const fb=document.getElementById('fb');
    if(ok){
      const gain=hintUsed?70:140;
      addXP(gain);bumpStreak(true);
      winFB(fb,T.why,gain,hintUsed);
      record('Verdadeiro ou Falso',T.titulo,true,node,hintUsed);say('Correto!');
    }else{
      bumpStreak(false);loseFB(fb,T.why);
      record('Verdadeiro ou Falso',T.titulo,false,node,hintUsed);say('Incorreto.');
    }
    document.getElementById('afterBox').style.display='flex';
    document.getElementById('nextBtn').onclick=advance;
  };
}

/* ===== COMPLETAR ===== */
function renderFill(F,node){
  const answers=F.parts.filter(p=>p.blank).map(p=>p.blank);
  const bank=shuffle([...answers,...F.distratores]);
  const stage=document.getElementById('stage');
  let html=`<div class="card">${trail()}<div class="eyebrow">${F.meta}</div><div class="qtext" id="sentence">`;
  let bi=0;F.parts.forEach(p=>{if(p.blank){html+=`<span class="blank" data-ans="${p.blank}" data-slot="${bi++}">?</span>`;}else html+=p.txt;});
  html+='</div><div class="hint">Toque num termo pra preencher. Toque na lacuna pra devolver.</div><div class="chips" id="bank"></div>';
  html+='<div class="actions"><button class="btn" id="checkFill" disabled>Conferir</button></div>';
  html+='<div class="fb" id="fb"></div><div class="actions" id="afterBox" style="display:none"><button class="btn purple" id="nextBtn">Continuar</button></div></div>';
  stage.innerHTML=html;
  const bankEl=document.getElementById('bank');
  bank.forEach((w,i)=>{
    const c=document.createElement('button');c.className='chip';c.textContent=w;c.dataset.chip=i;
    c.onclick=()=>{const t=[...document.querySelectorAll('.blank')].find(b=>b.textContent==='?');if(!t)return;
      t.textContent=w;t.classList.add('filled');t.dataset.picked=w;t.dataset.fromChip=i;
      c.classList.add('used');c.disabled=true;refresh();};
    bankEl.appendChild(c);
  });
  document.querySelectorAll('.blank').forEach(b=>{
    b.onclick=()=>{if(!b.classList.contains('filled'))return;
      const chip=document.querySelector(`.chip[data-chip="${b.dataset.fromChip}"]`);
      if(chip){chip.classList.remove('used');chip.disabled=false;}
      b.textContent='?';b.classList.remove('filled');b.style.color='';b.style.borderColor='';
      delete b.dataset.picked;delete b.dataset.fromChip;refresh();};
  });
  function refresh(){document.getElementById('checkFill').disabled=![...document.querySelectorAll('.blank')].every(b=>b.classList.contains('filled'));}
  document.getElementById('checkFill').onclick=()=>{
    let ok=true;
    document.querySelectorAll('.blank').forEach(b=>{const good=b.dataset.picked===b.dataset.ans;
      b.style.color=good?'var(--ok)':'var(--no)';b.style.borderColor=good?'var(--ok)':'var(--no)';
      b.onclick=null;b.style.cursor='default';if(!good)ok=false;});
    document.querySelectorAll('.chip').forEach(c=>c.disabled=true);
    document.getElementById('checkFill').disabled=true;
    const fb=document.getElementById('fb');
    if(ok){addXP(100);bumpStreak(true);winFB(fb,'Todos os termos no lugar certo.',100);record('Completar',F.titulo,true,node,false);}
    else{bumpStreak(false);loseFB(fb,'Os termos em vermelho não encaixam. '+F.why);record('Completar',F.titulo,false,node,false);}
    document.getElementById('afterBox').style.display='flex';
    document.getElementById('nextBtn').onclick=advance;
  };
}

/* ===== ORDENAR ===== */
function renderOrder(O,node){
  let items=shuffle(O.correct);while(items.join()===O.correct.join())items=shuffle(O.correct);
  const stage=document.getElementById('stage');
  stage.innerHTML=`<div class="card">${trail()}<div class="eyebrow">${O.meta}</div>
    <div class="qtext">Coloque as etapas da coleta na ordem certa.</div>
    <div class="hint">${isTouch?'Toque num item e depois em outro pra trocar.':'Arraste pra reordenar.'}</div>
    <ul class="order-list" id="olist"></ul>
    <div class="actions"><button class="btn" id="checkOrder">Conferir ordem</button></div>
    <div class="fb" id="fb"></div><div class="actions" id="afterBox" style="display:none"><button class="btn purple" id="nextBtn">Continuar</button></div></div>`;
  const list=document.getElementById('olist');
  items.forEach(txt=>{const li=document.createElement('li');li.className='order-item';li.draggable=!isTouch;li.tabIndex=0;
    li.innerHTML=`<span class="grip">⠿</span><span class="pos"></span><span class="lbl">${txt}</span>`;list.appendChild(li);});
  if(isTouch)tapSwap(list);else dragSort(list);
  document.getElementById('checkOrder').onclick=()=>{
    let ok=true;[...list.children].forEach((li,i)=>{const txt=li.querySelector('.lbl').textContent;const good=O.correct[i]===txt;
      li.classList.add(good?'correct':'wrong');li.classList.remove('selected');li.querySelector('.pos').textContent=i+1;li.draggable=false;if(!good)ok=false;});
    document.getElementById('checkOrder').disabled=true;
    const fb=document.getElementById('fb');
    if(ok){addXP(120);bumpStreak(true);winFB(fb,O.why,120);record('Ordenar',O.titulo,true,node,false);}
    else{bumpStreak(false);loseFB(fb,'A ordem certa: '+O.why);record('Ordenar',O.titulo,false,node,false);}
    document.getElementById('afterBox').style.display='flex';
    document.getElementById('nextBtn').onclick=advance;
  };
}
function dragSort(list){let dragged=null;
  list.addEventListener('dragstart',e=>{dragged=e.target.closest('.order-item');dragged.classList.add('dragging');});
  list.addEventListener('dragend',()=>{if(dragged)dragged.classList.remove('dragging');dragged=null;});
  list.addEventListener('dragover',e=>{e.preventDefault();const t=e.target.closest('.order-item');if(!t||t===dragged)return;
    const r=t.getBoundingClientRect();const after=e.clientY>r.top+r.height/2;list.insertBefore(dragged,after?t.nextSibling:t);});
}
function tapSwap(list){let sel=null;
  list.addEventListener('click',e=>{const li=e.target.closest('.order-item');if(!li)return;
    if(!sel){sel=li;li.classList.add('selected');say('Item selecionado. Toque em outro pra trocar.');return;}
    if(sel===li){sel.classList.remove('selected');sel=null;return;}
    const ph=document.createElement('li');list.insertBefore(ph,sel);list.insertBefore(sel,li);list.insertBefore(li,ph);list.removeChild(ph);
    sel.classList.remove('selected');sel=null;});
}

/* ===== CLASSIFICAR ===== */
function renderClassify(C,node){
  const cats=Object.keys(C.groups);const map={};cats.forEach(c=>C.groups[c].forEach(t=>map[t]=c));
  const tokens=shuffle(Object.keys(map));
  const stage=document.getElementById('stage');
  stage.innerHTML=`<div class="card">${trail()}<div class="eyebrow">${C.meta}</div>
    <div class="qtext">Coloque cada célula no grupo certo.</div>
    <div class="hint">${isTouch?'Toque na célula e depois no grupo. Pra devolver, toque nela e no banco.':'Arraste as células. Dá pra devolver ao banco ou trocar antes de conferir.'}</div>
    <div class="pool" id="pool" data-cat="__pool"><span class="pool-lbl">Banco</span></div>
    <div class="bins"><div class="bin" data-cat="${cats[0]}"><div class="bin-title">${cats[0]}</div></div><div class="bin" data-cat="${cats[1]}"><div class="bin-title">${cats[1]}</div></div></div>
    <div class="actions"><button class="btn" id="checkCls" disabled>Conferir</button></div>
    <div class="fb" id="fb"></div><div class="actions" id="afterBox" style="display:none"><button class="btn purple" id="nextBtn">Continuar</button></div></div>`;
  const pool=document.getElementById('pool');
  tokens.forEach(t=>{const el=document.createElement('div');el.className='tokk';el.draggable=!isTouch;el.textContent=t;el.dataset.cat=map[t];el.tabIndex=0;
    if(!isTouch){el.addEventListener('dragstart',e=>{e.dataTransfer.setData('text',t);el.classList.add('dragging');window._drag=el;});
      el.addEventListener('dragend',()=>el.classList.remove('dragging'));}
    pool.appendChild(el);});
  const zones=[pool,...document.querySelectorAll('.bin')];
  if(!isTouch){zones.forEach(z=>{
    z.addEventListener('dragover',e=>{e.preventDefault();z.classList.add('over');});
    z.addEventListener('dragleave',()=>z.classList.remove('over'));
    z.addEventListener('drop',e=>{e.preventDefault();z.classList.remove('over');if(window._drag){z.appendChild(window._drag);window._drag=null;}refresh();});});
  }else{let sel=null;
    document.getElementById('stage').addEventListener('click',e=>{const tok=e.target.closest('.tokk');const zone=e.target.closest('.pool,.bin');
      if(tok){if(sel)sel.classList.remove('selected');sel=(sel===tok)?null:tok;if(sel)sel.classList.add('selected');return;}
      if(zone&&sel){zone.appendChild(sel);sel.classList.remove('selected');sel=null;refresh();}});}
  function refresh(){document.getElementById('checkCls').disabled=!!document.querySelector('#pool .tokk');}
  document.getElementById('checkCls').onclick=()=>{
    let ok=true;document.querySelectorAll('.bin').forEach(bin=>{bin.querySelectorAll('.tokk').forEach(el=>{
      const good=el.dataset.cat===bin.dataset.cat;el.classList.add(good?'ok':'no');el.classList.remove('selected');el.draggable=false;if(!good)ok=false;});});
    document.getElementById('checkCls').disabled=true;
    const fb=document.getElementById('fb');
    if(ok){addXP(140);bumpStreak(true);winFB(fb,C.why,140);record('Classificar',C.titulo,true,node,false);}
    else{bumpStreak(false);loseFB(fb,C.why);record('Classificar',C.titulo,false,node,false);}
    document.getElementById('afterBox').style.display='flex';
    document.getElementById('nextBtn').onclick=advance;
  };
}

/* ===== final ===== */
function finalScreen(){
  const total=results.length, hits=results.filter(r=>r.acertou).length;
  const pct=total?Math.round(hits/total*100):0;
  const misses=results.filter(r=>!r.acertou);
  const perfect = misses.length===0;
  const perfectClean = perfect && !usedHintAny;   // gabarito sem dica → troféu

  /* 5 níveis de Morfo */
  let mood,title,msg,special=false;
  if(perfectClean){
    mood='trophy';title='GABARITO! 🏆';msg='Você acertou tudo sem usar nenhuma dica. Revisão impecável — você é <b>Morfo Expert</b>!';special=true;
  }else if(perfect){
    mood='star';title='Acertou tudo!';msg='Mandou muito bem! Refaça sem usar dica pra desbloquear o troféu de <b>Morfo Expert</b>.';
  }else if(pct>=70){
    mood='happy';title='Muito bom!';msg='Você domina boa parte do conteúdo. Corrija o que escapou e busque o gabarito.';
  }else if(pct>=40){
    mood='cheer';title='Tá no caminho!';msg='Bom começo. Uma revisada nos pontos que faltaram e você chega lá.';
  }else{
    mood='cheer';title='Bora de novo!';msg='Revisar mais uma vez vai firmar o conteúdo. Você consegue!';
  }

  let recap;
  if(misses.length){recap='<div class="recap"><h3>Pra reforçar</h3>'+misses.map(m=>`<div class="recap-item miss"><span class="mk">✕</span><span>${m.tipo}: ${m.titulo}</span></div>`).join('')+'</div>';}
  else{recap='<div class="recap"><h3>Resultado</h3><div class="recap-item hit"><span class="mk">✓</span><span>Você acertou tudo. Que revisão!</span></div></div>';}

  const seal = special?'<div class="seal">🏅 Morfo Expert</div>':'';
  const stage=document.getElementById('stage');
  stage.innerHTML=`<div class="card final ${special?'gold':''}">
     ${special?'<div class="rays"></div>':''}
     <div class="final-cito">${cito(mood)}</div>
     ${seal}
     <h2>${title}</h2>
     <div class="score">${hits}<small>/${total} · ${pct}%</small></div>
     <p>${msg}</p>${recap}
     <div class="actions">
       ${misses.length?'<button class="btn purple" id="fixBtn">Corrigir os que errei</button>':''}
       <button class="btn ${misses.length?'ghost':'wide'}" id="againBtn">Jogar de novo</button>
     </div>
   </div>`;
  document.getElementById('againBtn').onclick=intro;
  const fixBtn=document.getElementById('fixBtn');
  if(fixBtn)fixBtn.onclick=startCorrections;
  if(special){confettiBig();SFX.fanfare();}
  else if(perfect||pct>=70){confetti();SFX.correct();}
}
function confettiBig(){for(let k=0;k<5;k++)setTimeout(confetti,k*180);}

/* refaz só as questões erradas, mantendo XP e nível atuais */
function startCorrections(){
  const wrongNodes=results.filter(r=>!r.acertou).map(r=>r.node).filter(Boolean);
  if(!wrongNodes.length){return intro();}
  flow=shuffle(wrongNodes);
  step=0;results=[];streak=0;
  document.getElementById('streakBox').classList.remove('on');
  document.getElementById('streakN').textContent=0;
  renderStep();
}

updateMute();
intro();
