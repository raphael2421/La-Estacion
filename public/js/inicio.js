// esversion 2018

// slider
const chevron_left = document.querySelector('.chevron_left');
const chevron_right = document.querySelector('.chevron_right');
const slide_header = document.querySelector('.slide_header');
const slide_img = document.querySelector('.slide_img');
const slide = document.querySelector('.slide');
const slides_container = document.querySelector('.slides_container');


const slidesContent = [
   {
      title: 'proyecto',
      small: 'slide0.jpg',
      large: 'slide0-XL.jpg'
   },
   {
      title: 'alberca',
      small: 'slide1.jpg',
      large: 'slide1-XL.jpg'
   },
   {
      title: 'salón de juegos',
      small: 'slide2.jpg',
      large: 'slide2-XL.jpg'
   },
   {
      title: 'experiencias',
      small: 'slide3.jpg',
      large: 'slide3-XL.jpg'
   },
   {
      title: 'rooftop',
      small: 'slide4.jpg',
      large: 'slide4-XL.jpg'
   }
]

// IDEA:
// multiplicar el ancho por el index del array para recorrer el slider
let slideN = 0;
slides_container.setAttribute('style', `grid-template-columns: repeat(${slidesContent.length}, 100%);`);
slidesContent.forEach((i, ï, ä)=>{
   slides_container.innerHTML += `
      <div class="slide">
         <div class="slide_header">
            <p class="slide_header_txt"> ${i.title} </p>
         </div>
         <img class="slide_img" src="../media/${window.innerWidth >= 600 ? i.large : i.small}" alt="${i.title}">
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
   if (window.innerWidth > 1370) {
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
   if (window.innerWidth > 1370) {
      let width = window.innerWidth - 17;
      slides_container.style.transform = `translate(-${width * slideN}px)`;
   } else{
      slides_container.style.transform = `translate(-${window.innerWidth * slideN}px)`;
   }
}

/********************** Touch Move ***************************/
/// IDEA
// let initialCoords let finalCoords
// on touch start get and set initialCoords
// on touch move  update finalCoords
// on touch end compare initial and final coords
// decide where to go
let initialCoords = 0;
let finalCoords = 0;

slides_container.addEventListener('touchstart', function (e) {
   initialCoords = e.touches[0].clientX;
   // console.log(initialCoords);
});

slides_container.addEventListener('touchmove', function (e) {
   finalCoords = e.touches[0].clientX;
   // console.log(finalCoords);
});

slides_container.addEventListener('touchend', function (e) {
   if (finalCoords < initialCoords -50) {
      go_right();
   }
   else if (finalCoords > initialCoords +50) {
      go_left();
   }
   else{
      e.preventDefault();
   }
});

