const toggle=document.getElementById('theme-toggle');
if(localStorage.getItem('theme')==='dark'){document.body.classList.add('dark');}
toggle.addEventListener('click',()=>{
document.body.classList.toggle('dark');
localStorage.setItem('theme',document.body.classList.contains('dark')?'dark':'light');
});

const observer=new IntersectionObserver(entries=>{
entries.forEach(entry=>{
if(entry.isIntersecting) entry.target.classList.add('show');
});
});
document.querySelectorAll('.hidden').forEach(el=>observer.observe(el));

const topBtn=document.getElementById('topBtn');
window.addEventListener('scroll',()=>{
topBtn.style.display=window.scrollY>300?'block':'none';
});
topBtn.onclick=()=>window.scrollTo({top:0,behavior:'smooth'});
