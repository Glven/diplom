window.onload = function (){
    const menu = document.getElementById('menu');
    const nav = document.querySelector('.header-nav');
    menu.addEventListener('click', ()=>{
        nav.classList.toggle('header-nav_active');
    });
    nav.addEventListener('click', (e)=>{
        if(e.target.classList.contains('header-nav__item')){
            nav.classList.remove('header-nav_active');
        }
    });
    document.addEventListener('click', (e)=>{
        if(!nav.contains(e.target)&&!menu.contains(e.target)){
            nav.classList.remove('header-nav_active');
        }
    });
}