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
const close_popup = document.querySelectorAll('.close_popup');
// const slide = document.querySelector('.slide');

// IDEA:
// multiplicar el ancho por el index del array para recorrer el slider
let slideN = 0;
// slides_container.setAttribute('style', `grid-template-columns: repeat(${slidesContent.length}, 100%);`);
slidesContent.forEach((i, ï, ä) => {
   slides_container.innerHTML += `
      <div class="slide">
         <img src="../media/slider-proyecto/${window.innerWidth >= 600 ? i.large : i.small}" alt="" class="modelos_img">
          <div class="modelos_title ${i.title}">
                  ${i.title}
            </div>
         <div class="modelos_tipo">
            <p ><b class="${i.title}">Ver distribución</b></p>            
         </div>
      </div>
   `;
});

/********************************************/
// let initialCoords = 0;
// let finalCoords = 0;

// slides_container.addEventListener('touchstart', function (e) {
//    initialCoords = e.touches[0].clientX;
//    // console.log(initialCoords);
// });

// slides_container.addEventListener('touchmove', function (e) {
//    finalCoords = e.touches[0].clientX;
//    // console.log(finalCoords);
// });

// slides_container.addEventListener('touchend', function (e) {
//    if (finalCoords < (initialCoords - 70) ) {
//       go_right();
//    }
//    else if (finalCoords > (initialCoords + 70) ) {
//       go_left();
//    }
// });


/*********************************/

document.addEventListener('click', function(e){
   if (e.target.classList.contains('allende')) {
      e.stopPropagation();
      e.preventDefault();
      document.getElementById('allende').classList.remove('display_none');
   }
   if (e.target.classList.contains('morelos')) {
      e.stopPropagation();
      e.preventDefault();
      document.getElementById('morelos').classList.remove('display_none');
   }
});

close_popup.forEach((i, ï, ä)=>{
   i.addEventListener('click', ()=>{
      document.getElementById('morelos').classList.add('display_none');
      document.getElementById('allende').classList.add('display_none');
   });
});