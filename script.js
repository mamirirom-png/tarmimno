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
// Smooth Scroll

document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

anchor.addEventListener("click",function(e){

e.preventDefault();

document.querySelector(this.getAttribute("href")).scrollIntoView({

behavior:"smooth"

});

});

});
 // Back To Top Button

const topBtn = document.querySelector(".back-top");

if(topBtn){

window.addEventListener("scroll",()=>{

if(window.scrollY > 400){

topBtn.style.display="block";

}else{

topBtn.style.display="none";

}

});


topBtn.addEventListener("click",()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

});

}
// Contact Form Validation

const form = document.querySelector("#contact-form");

if(form){

form.addEventListener("submit",(e)=>{

const name = document.querySelector("#name").value.trim();
const phone = document.querySelector("#phone").value.trim();
const message = document.querySelector("#message").value.trim();


if(name === "" || phone === "" || message === ""){

e.preventDefault();

alert("لطفا تمام فیلدها را کامل کنید");

}

});

}
// WhatsApp Button Animation

const whatsappBtn = document.querySelector(".whatsapp-btn");

if(whatsappBtn){

setInterval(()=>{

whatsappBtn.classList.toggle("pulse");

},2000);

}
// Add Current Year Automatically

const year = document.querySelector(".current-year");

if(year){

year.textContent = new Date().getFullYear();

}
// Loading Screen

window.addEventListener("load",()=>{

const loader = document.querySelector(".loader");

if(loader){

loader.classList.add("hide");

setTimeout(()=>{

loader.style.display="none";

},500);

}

});
// Reveal Navigation On Scroll

const header = document.querySelector("header");

if(header){

window.addEventListener("scroll",()=>{

if(window.scrollY > 80){

header.classList.add("sticky");

}else{

header.classList.remove("sticky");

}

});

}
// Image Lazy Loading

const images = document.querySelectorAll("img");

images.forEach(img=>{

img.setAttribute("loading","lazy");

});
// Phone Number Click Tracking

const phoneLinks = document.querySelectorAll('a[href^="tel:"]');

phoneLinks.forEach(link=>{

link.addEventListener("click",()=>{

console.log("Phone call button clicked");

});

});
// FAQ Accordion

const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach(item=>{

const question = item.querySelector(".faq-question");

if(question){

question.addEventListener("click",()=>{

item.classList.toggle("active");

});

}

});
// Detect User Device

const isMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);

if(isMobile){

document.body.classList.add("mobile-device");

}else{

document.body.classList.add("desktop-device");

}
// Auto Update Copyright Text

const copyright = document.querySelector(".copyright-year");

if(copyright){

copyright.innerHTML = new Date().getFullYear();

}
// External Links Security

const externalLinks = document.querySelectorAll('a[target="_blank"]');

externalLinks.forEach(link=>{

link.setAttribute("rel","noopener noreferrer");

});
// Prevent Empty Links

const emptyLinks = document.querySelectorAll('a[href="#"]');

emptyLinks.forEach(link=>{

link.addEventListener("click",(e)=>{

e.preventDefault();

});

});
// Page Visit Counter (Local)

let visits = localStorage.getItem("pageVisits");

if(!visits){

visits = 1;

}else{

visits++;

}

localStorage.setItem("pageVisits", visits);
// Dynamic Page Title

let originalTitle = document.title;

document.addEventListener("visibilitychange",()=>{

if(document.hidden){

document.title = "برگردید به ترمیم‌نو ❤️";

}else{

document.title = originalTitle;

}

});
// Console Welcome Message

console.log(
"🌿 به وب‌سایت ترمیم‌نو خوش آمدید | هر زخم، آغاز یک بهبود"
);
// Handle Broken Images

const allImages = document.querySelectorAll("img");

allImages.forEach(img=>{

img.addEventListener("error",()=>{

img.src="assets/default-image.png";

});

});
