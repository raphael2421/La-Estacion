// esversion 2018

// slider
const chevron_left = document.querySelector('.chevron_left');
const chevron_right = document.querySelector('.chevron_right');
const slide_header = document.querySelector('.slide_header');
const slide_img = document.querySelector('.slide_img');
const slide = document.querySelector('.slide');


const slidesContent = [
   {
      title: 'proyecto',
      img: 'slide0.jpg'
   },
   {
      title: 'alberca',
      img: 'slide1.jpg'
   },
   {
      title: 'salón de juegos',
      img: 'slide2.jpg'
   },
   {
      title: 'experiencias',
      img: 'slide3.jpg'
   },
   {
      title: 'rooftop',
      img: 'slide4.jpg'
   }
]
let slideN = 0;

window.addEventListener('load', ()=>{
   slide_header.innerHTML = `<p>${slidesContent[slideN].title}</p>`;
   slide_img.setAttribute('src', `../media/${slidesContent[slideN].img}`);
});

chevron_left.addEventListener('click', go_left);
function go_left() {
   slideN--
   if (slideN < 0) {
      slideN = slidesContent.length - 1;
   }
   
   slide.classList.remove('slide_fadein_left');
   slide.classList.add('slide_fadeout_left');
   chevron_left.removeEventListener('click', go_left);

   setTimeout(()=>{
      slide.classList.add('slide_fadein_left');
      slide.classList.remove('slide_fadeout_left');
      slide_img.setAttribute('src', `../media/${slidesContent[slideN].img}`);
      slide_header.innerHTML = `<p>${slidesContent[slideN].title}</p>`;
      chevron_left.addEventListener('click', go_left);
   },300);

   
} // go_left

chevron_right.addEventListener('click', go_right);
function go_right() {
   slideN++
   if (slideN > slidesContent.length - 1) {
      slideN = 0;
   }

   slide.classList.toggle('slide_fadein');
   slide.classList.toggle('slide_fadeout');
   chevron_right.removeEventListener('click', go_right);

   setTimeout(() => {
      slide.classList.toggle('slide_fadeout');
      slide.classList.toggle('slide_fadein');
      slide_img.setAttribute('src', `../media/${slidesContent[slideN].img}`);
      slide_header.innerHTML = `<p>${slidesContent[slideN].title}</p>`;
      chevron_right.addEventListener('click', go_right);
   }, 390);
}

/// IDEA
// let initialCoords let finalCoords
// on touch start get and set initialCoords
// on touch move  update finalCoords
// on touch end compare initial and final coords
// decide where to go


/********************** Touch Move ***************************/
let initialCoords = 0;
let finalCoords = 0;

slide.addEventListener('touchstart', function (e) {
   initialCoords = e.touches[0].clientX;
   // console.log(initialCoords);
});

slide.addEventListener('touchmove', function (e) {
   finalCoords = e.touches[0].clientX;
   // console.log(finalCoords);
});

slide.addEventListener('touchend', function (e) {
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
