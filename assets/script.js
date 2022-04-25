document.addEventListener('scroll',e=>{
    const header = document.querySelector("header");
    if(window.scrollY>100) {
        header.classList.add("scroll");

    }else {
        header.classList.remove("scroll");
    }
})

const navShow = () =>{
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const links = document.querySelectorAll('.nav-links li');

    burger.addEventListener('click',()=>{
        nav.classList.toggle('nav-active');

        links.forEach((link,index)=>{
            if(link.style.animation) {
                link.style.animation='';
            }else {
                link.style.animation='linksFade 0.5s ease forwads ${index / 5 + 0.2}s';
            }
        });
        burger.classList.toggle('close');
    });
}

navShow();