// esversion 2018

// slider
const chevron_left = document.querySelector('.chevron_left');
const chevron_right = document.querySelector('.chevron_right');
const slides_container = document.querySelector('.slides_container');
const slide = document.querySelector('.slide');
const slide_header = document.querySelector('.slide_header');
const slide_img = document.querySelector('.slide_img');
const slidesContent = document.querySelectorAll('.slide_img');

let slideN = 0;

// go left
chevron_left.addEventListener('click', go_left);
function go_left() {
   slideN--
   if (slideN < 0) {
      slideN = slidesContent.length - 1;
   }
   if (window.innerWidth >= 1250) {
      let width = window.innerWidth - 17;
      slides_container.style.transform = `translate(-${width * slideN}px)`;
   } else{
      slides_container.style.transform = `translate(-${window.innerWidth * slideN}px)`;
   }
   
} // go_left


// go right
chevron_right.addEventListener('click', go_right);
function go_right() {
   slideN++
   if (slideN > slidesContent.length - 1) {
      slideN = 0;
   }
   if (window.innerWidth >= 1250) {
      let width = window.innerWidth - 17;
      slides_container.style.transform = `translate(-${width * slideN}px)`;
   } else{
      slides_container.style.transform = `translate(-${window.innerWidth * slideN}px)`;
   }
}

/********************** Touch Move ***************************/
/// IDEA
// let initialCoordsX let finalCoordsX
// on touch start get and set initialCoordsX
// on touch move  update finalCoordsX
// on touch end compare initial and final coords
// decide where to go
let initialCoordsX = 0;
let finalCoordsX = 0;

let initialCoordsY = 0;
let finalCoordsY = 0;

document.addEventListener('touchstart', function (e) {
   clearInterval(slideInterval);
   // e.preventDefault();
   document.querySelectorAll('.slide_header_txt').forEach((i, ï, ä) => {
      i.innerText = 'Y:' + Math.floor(e.touches[0].clientY) + ' X:' + Math.floor(e.touches[0].clientX);
   });
   if (e.target.classList.contains('swipe')) {
      e.stopPropagation();
      initialCoordsX = e.touches[0].clientX;
      initialCoordsY = e.touches[0].clientY;
   }
   // console.log(initialCoordsX);
});

document.addEventListener('touchmove', function (e) {
   document.querySelectorAll('.slide_header_txt').forEach((i, ï, ä)=>{
      i.innerText = 'Y:' + Math.floor(e.touches[0].clientY) + ' X:' + Math.floor(e.touches[0].clientX);
   });
   if (e.target.classList.contains('swipe')) {
      e.stopPropagation();
   finalCoordsX = e.touches[0].clientX;
   finalCoordsY = e.touches[0].clientY;
   // console.log(finalCoordsX);
   }
});

document.addEventListener('touchend', function (e) {
   if ((finalCoordsX < initialCoordsX - 30) && (finalCoordsY > initialCoordsY - 30)) {
      go_right();
   }
   if ((finalCoordsX > initialCoordsX + 30) && (finalCoordsY < initialCoordsY + 30)) {
      go_left();
   }
});

document.body.addEventListener('touchmove', function (event) {
   // event.preventDefault();
}, false);


////// auto slide
function autoSlide() {
   go_right();
}

let slideInterval;


window.addEventListener('click', ()=>{
   clearInterval(slideInterval);
});


///////// si es touch show finger
window.addEventListener('load', () => {

   // if (window.matchMedia("(pointer: coarse)").matches) {
   //    // touchscreen
   //    console.log('touchscreen');
   //    // touchscreen
   //    let img = document.createElement('img');
   //    img.setAttribute('src', '../media/dedo.svg');
   //    document.body.appendChild(img);
   //    img.classList.add('touch_anim');
   //    setTimeout(() => {
   //       img.classList.add('finger_fadeout');
   //    }, 3200);
   // }
});
slideInterval = setInterval(autoSlide, 3600);


////////////// cookie
const fc_refID = document.getElementById('fc_refID');
const fc_refURL = document.getElementById('fc_refURL');
fc_refID.value = getCookie('refid');
fc_refURL.value = getCookie('refurl');

function getCookie(name) {
   function escape(s) { return s.replace(/([.*+?\^$(){}|\[\]\/\\])/g, '\\$1'); }
   var match = document.cookie.match(RegExp('(?:^|;\\s*)' + escape(name) + '=([^;]*)'));
   return match ? match[1] : null;
}

window.addEventListener('load', function () {
   if (window.location.hash === '#contacto') {
      document.getElementById('contacto').scrollIntoView();
   }

   if (document.querySelector('.forma_msj').innerText === "Tu solicitud fue enviada") {
      document.getElementById('contacto').scrollIntoView();
   }

});