let bgnavbar=document.querySelector('#bg-navbar');
window.onscroll=function(){

    let scroll_nav=window.scrollY;

    if(scroll_nav >= 100){
        bgnavbar.classList.add('after-scroll-navbar');
        console.log(scroll_nav);
    }else{
        bgnavbar.classList.remove('after-scroll-navbar');
    }
};

