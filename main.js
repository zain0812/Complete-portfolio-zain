
document.addEventListener('DOMContentLoaded', function(){
  const appear = new IntersectionObserver((entries, obs)=>{
    entries.forEach(entry=>{
      if(entry.isIntersecting){ entry.target.classList.add('show'); obs.unobserve(entry.target); }
    });
  }, {threshold: 0.08});
  document.querySelectorAll('.fade-in').forEach(el=>appear.observe(el));

  const toggle = document.getElementById('themeToggle');
  if(toggle){
    toggle.addEventListener('click', ()=>{
      if(document.documentElement.classList.contains('light')){
        document.documentElement.classList.remove('light');
        localStorage.setItem('site-theme','dark');
      } else {
        document.documentElement.classList.add('light');
        localStorage.setItem('site-theme','light');
      }
    });
    if(localStorage.getItem('site-theme') === 'light') document.documentElement.classList.add('light');
  }
});
