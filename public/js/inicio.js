// esversion 2018

// slider
const chevron_left = document.querySelector('.chevron_left');
const chevron_right = document.querySelector('.chevron_right');
const slides_container = document.querySelector('.slides_container');
const slide = document.querySelector('.slide');
const slide_header = document.querySelector('.slide_header');
const slide_img = document.querySelector('.slide_img');

// {
//    title: '',
//       small: 'proyecto.jpg',
//          large: 'proyecto-XL.jpg'
// },
// <img class="slide_img swipe" src="../media/galeria/photo4-XL.jpg" />
const slidesContent = [
   {
      title: '',
      small: 'video.m4v',
      large: 'video.m4v'
   },
  
   {
      title: '',
      small: 'departamento.jpg',
      large: 'departamento-XL.jpg'
   },
   {
      title: '',
      small: 'experiencias.jpg',
      large: 'experiencias-XL.jpg'
   },
   {
      title: '',
      small: 'rooftop.jpg',
      large: 'rooftop-XL.jpg'
   },
   {
      title: '',
      small: 'alberca.jpg',
      large: 'alberca-XL.jpg'
   },
   {
      title: '',
      small: 'bar.jpg',
      large: 'bar-XL.jpg'
   },
   {
      title: '',
      small: 'salon-de-juegos.jpg',
      large: 'salon-de-juegos-XL.jpg'
   },
]

//
// IDEA:
// multiplicar el ancho por el index del array para recorrer el slider

// slider video: ${window.innerWidth >= 600 ? `<video class="slide_img swipe" src="../media/slider-inicio/video.mp4" autoplay="true" muted="true" loop="true"></video>` : `<img class="slide_img swipe" src="../media/slider-inicio/${window.innerWidth >= 600 ? i.large : i.small}" alt="${i.title}">`}
// sin video: <img class="slide_img swipe" src="../media/slider-inicio/${window.innerWidth >= 600 ? i.large : i.small}" alt="${i.title}">
let slideN = 0;
slides_container.setAttribute('style', `grid-template-columns: repeat(${slidesContent.length}, 100%);`);
slidesContent.forEach((i, ï, ä)=>{
   slides_container.innerHTML += `
      <div class="slide">
         <div class="slide_header">
            <p class="slide_header_txt"> ${i.title} </p>
         </div>
         ${( ï == 0) ? `<video class="slide_img swipe" src="../media/slider-inicio/video.m4v" autoplay="true" muted="true" loop="true"></video>` : `<img class="slide_img swipe" src="../media/slider-inicio/${window.innerWidth >= 600 ? i.large : i.small}" alt="${i.title}">`}
      </div>
   `;
});

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
   e.preventDefault();
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
   event.preventDefault();
}, false);


////// auto slide
function autoSlide() {
   go_right();
}

let slideInterval = setInterval(autoSlide, 2800);

window.addEventListener('click', ()=>{
   clearInterval(slideInterval);
});