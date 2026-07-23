document.addEventListener("DOMContentLoaded",()=>{

const cards=document.querySelectorAll(".card,.feature");

const observer=new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.style.opacity="1";
entry.target.style.transform="translateY(0)";
}

});

},{threshold:0.15});

cards.forEach(card=>{

card.style.opacity="0";
card.style.transform="translateY(50px)";
card.style.transition="all .8s ease";

observer.observe(card);

});

});
// Mobile Menu Toggle

const menuBtn = document.querySelector(".menu-btn");
const navMenu = document.querySelector(".nav-menu");

if(menuBtn && navMenu){

menuBtn.addEventListener("click",()=>{

navMenu.classList.toggle("active");

});

}
