window.onload = () => {
    const menu = document.getElementById('menu');
    const nav = document.querySelector('.header-nav');

    showAndHide(menu, nav, 'header-nav_active');
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

export const showAndHide = (button, container, className) =>{
    button.addEventListener('click', ()=>{
        container.classList.toggle(className);
    });
}

export const autoGrow = (textarea) =>{
    textarea.style.height = 'auto';
    textarea.style.height = (textarea.scrollHeight) + "px";
}