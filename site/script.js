const P=[['index','Home'],['about','About'],['skills','Skills'],['projects','Work'],['education','Education'],['contact','Contact']];
const cur=document.body.dataset.page;
document.body.insertAdjacentHTML('afterbegin',`<nav><div class="wrap"><a class="logo" href="index.html"><b>H</b>HARI<i>VISHNU</i></a><button id="burger" aria-label="Menu">☰</button><div class="links">${P.map(([f,n])=>`<a href="${f}.html" class="${f==cur?'on':''}">${n}</a>`).join('')}<a class="pill" href="assets/resume.pdf" target="_blank">Resume</a></div></div></nav>`);
document.body.insertAdjacentHTML('beforeend',`<footer><div class="wrap">© 2026 Harivishnu R U · Python Full Stack Developer</div></footer>
<button id="askb">● ASK HARI</button><div id="askp" class="neon"><header>ASK HARI · QUICK ANSWERS</header><div id="msgs"><p>Hi! Pick a question below.</p></div><div class="q"></div></div>`);
document.getElementById('burger').onclick=()=>document.querySelector('.links').classList.toggle('open');
addEventListener('mousemove',e=>{document.body.style.setProperty('--mx',e.clientX+'px');document.body.style.setProperty('--my',e.clientY+'px')});
// reveal + animated bars/rings
const io=new IntersectionObserver(es=>es.forEach(e=>{if(!e.isIntersecting)return;const t=e.target;t.classList.add('in');
 t.querySelectorAll('.bar u').forEach(u=>u.style.width=u.dataset.w+'%');
 t.querySelectorAll('.ring .v').forEach(c=>c.style.strokeDashoffset=283*(1-c.dataset.v/100));
 t.querySelectorAll('[data-n]').forEach(n=>{let k=0,to=+n.dataset.n;const s=setInterval(()=>{n.firstChild.nodeValue=++k;if(k>=to)clearInterval(s)},120)});io.unobserve(t)}),{threshold:.2});
document.querySelectorAll('.rv').forEach(el=>io.observe(el));
// typing
const ty=document.getElementById('type');if(ty){const W=['Python Full Stack Developer','Django Developer','Frontend Developer','Problem Solver'];let w=0,i=0,d=0;(function f(){const s=W[w];ty.textContent=s.slice(0,i);i+=d?-1:1;if(i>s.length){d=1;return setTimeout(f,1400)}if(i<0){d=0;w=(w+1)%W.length}setTimeout(f,d?40:85)})()}
// holo tilt
const c=document.querySelector('.card3d');if(c){c.parentElement.onmousemove=e=>{const r=c.getBoundingClientRect(),x=(e.clientX-r.left)/r.width-.5,y=(e.clientY-r.top)/r.height-.5;c.style.transform=`rotateY(${x*22}deg) rotateX(${-y*22}deg)`};c.parentElement.onmouseleave=()=>c.style.transform=''}
// ask widget (answers come from his resume – no backend)
const A={'Who is Hari?':'Harivishnu R U – an ECE graduate turned Python Full Stack developer, trained in Django, JavaScript and MySQL.','Skills?':'Python, Django, HTML, CSS, JavaScript, Bootstrap, MySQL and Git, plus embedded-systems and VLSI basics.','Experience?':'Internships at BSNL, Matt Engineering Solutions and AK Info Park (Python Full Stack), plus Advanced Python Full Stack training at IPCS Global, Trivandrum.','Contact?':'hariradhakrishnan04@gmail.com · +91 63792 20414'};
const m=document.getElementById('msgs'),q=document.querySelector('#askp .q');
Object.keys(A).forEach(k=>{const b=document.createElement('button');b.textContent=k;b.onclick=()=>{m.insertAdjacentHTML('beforeend',`<p class="u">${k}</p><p>${A[k]}</p>`);m.scrollTop=m.scrollHeight};q.append(b)});
document.getElementById('askb').onclick=()=>document.getElementById('askp').classList.toggle('open');
// contact form → opens mail client
const f=document.querySelector('form');if(f)f.onsubmit=e=>{e.preventDefault();const[n,em,msg]=f.elements;location.href=`mailto:hariradhakrishnan04@gmail.com?subject=${encodeURIComponent('Portfolio message from '+n.value)}&body=${encodeURIComponent(msg.value+'\n\n'+em.value)}`};
