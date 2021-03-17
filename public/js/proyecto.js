// esversion: 2018

const slidesContent = [
   {
      title: 'allende',
      type: 'Tipo A',
      mts: '100',
      small: 'la-estacion-allende.jpg',
      large: 'la-estacion-allende-XL.jpg'
   },
   {
      title: 'morelos',
      type: 'Tipo B',
      mts: '65',
      small: 'la-estacion-morelos.jpg',
      large: 'la-estacion-morelos-XL.jpg'
   },   
]

const chevron_left = document.querySelector('.chevron_left');
const chevron_right = document.querySelector('.chevron_right');
const slides_container = document.querySelector('.slides_container');
const slide = document.querySelector('.slide');
// const slide = document.querySelector('.slide');

// IDEA:
// multiplicar el ancho por el index del array para recorrer el slider
let slideN = 0;
slides_container.setAttribute('style', `grid-template-columns: repeat(${slidesContent.length}, 100%);`);
slidesContent.forEach((i, ï, ä) => {
   slides_container.innerHTML += `
      <div class="slide">
         <img src="../media/slider-proyecto/${window.innerWidth >= 600 ? i.large : i.small}" alt="" class="modelos_img">
          <div class="modelos_title">
                  ${i.title}
            </div>
         <div class="modelos_tipo">
            <p>Residencia <strong>${i.type}</strong></p>
            <p class="m2">${i.mts}m<sup>2</sup></p>
         </div>
      </div>
   `;
});

/***********************************************/
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
   } else {
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
   } else {
      slides_container.style.transform = `translate(-${window.innerWidth * slideN}px)`;
   }
}

/********************************************/
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
   if (finalCoords < initialCoords - 50) {
      go_right();
   }
   else if (finalCoords > initialCoords + 50) {
      go_left();
   }
   else {
      e.preventDefault();
   }
});