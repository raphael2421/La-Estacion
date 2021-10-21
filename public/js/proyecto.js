// esversion: 2018
const close_popup = document.querySelectorAll('.close_popup');

const slidesContent = [
   {
      title: 'Calidad',
      type: 'Tipo A',
      mts: '100',
      small: 'calidad.jpg',
      large: 'calidad-XL.jpg',
      content: 'Exclusivos departamentos que te transportan a vivir San Miguel de Allende, equipados con la más alta gama de materiales de calidad para darte a ti, ese espacio único. '
   },
   {
      title: 'Acabados',
      type: 'Tipo B',
      mts: '65',
      small: 'acabados.jpg',
      large: 'acabados-XL.jpg',
      content: 'Espectaculares acabados en muros de tabique de barro aparente, aplanado, con detalles en pórfido sangre de pichón.'
   },
   {
      title: 'color',
      type: 'Tipo B',
      mts: '65',
      small: 'color.jpg',
      large: 'color-XL.jpg',
      content: 'Ambos modelos cuentan con acabados de estuco finamente trabajados, en una paleta de colores bombilla, pinole, infusión y camelado, que ofrece al tacto, la sensación de fina seda y frescura.'
   },
   {
      title: 'sustentable',
      type: 'Tipo B',
      mts: '65',
      small: 'sustentable.jpg',
      large: 'sustentable-XL.jpg',
      content: 'Los departamentos están equipados con cocinas integrales que cuentan con tecnología sustentable haciendo de tu espacio, un lugar seguro y eficiente.'
   },
   {
      title: 'relajante',
      type: 'Tipo B',
      mts: '65',
      small: 'relajante.jpg',
      large: 'relajante-XL.jpg',
      content: 'Baños que incitan a vivir una sensación relajante gracias a sus amplios espacios que cuentan con gabinetes de madera con cubiertas de mármol Santo Tomás, mezcladoras de lujo y piso porcelánico.'
   },
];

const chevron_left = document.querySelector('.chevron_left');
const chevron_right = document.querySelector('.chevron_right');
const slider_container = document.querySelector('.slider_container');

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
         <img class="slide_img swipe" src="../media/slider-proyecto/${window.innerWidth >= 600 ? i.large : i.small}" alt="${i.title}">
         <article class="detalles_box">
            <p class="detalles_title">${i.title}</p>
            <p class="detalles_content">${i.content}</p>
         </article>
      </div>
   `;
});


const detalles_box = document.querySelector('.detalles_box');
if (window.innerWidth >= 1200) {
   chevron_left.setAttribute('style', 'left: 25px; top:334px');
   chevron_right.setAttribute('style', `right: ${(detalles_box.clientWidth + 25)}px; top:334px`);
}
/********************************************/
// go left
chevron_left.addEventListener('mouseup', go_left);
function go_left() {   
   slideN--;
   console.log(slideN);
   if (slideN < 0) {
      slideN = slidesContent.length - 1;
   }
   if (window.innerWidth >= 1200) {
      let width = document.querySelector('.slider_container').clientWidth;
      slides_container.style.transform = `translate(-${width * slideN}px)`;
   } else {
      slides_container.style.transform = `translate(-${window.innerWidth * slideN}px)`;
   }

} // go_left


// go right
chevron_right.addEventListener('mouseup', go_right);
function go_right() {
   slideN++;
   console.log(slideN);
   if (slideN > slidesContent.length - 1) {
      slideN = 0;
   }
   if (window.innerWidth >= 1200) {
      let width = document.querySelector('.slider_container').clientWidth;
      slides_container.style.transform = `translate(-${width * slideN}px)`;
   } else {
      slides_container.style.transform = `translate(-${window.innerWidth * slideN}px)`;
   }
}
let initialCoordsX = 0;
let finalCoordsX = 0;

let initialCoordsY = 0;
let finalCoordsY = 0;

document.addEventListener('touchstart', function (e) {
   e.preventDefault();
   clearInterval(slideInterval);   
   if (e.target.classList.contains('swipe')) {
      e.stopPropagation();
      initialCoordsX = e.touches[0].clientX;
      initialCoordsY = e.touches[0].clientY;
   }

   // console.log(initialCoordsX);
});

document.addEventListener('touchmove', function (e) {
   if (e.target.classList.contains('swipe')) {
      console.log('swipe');
      e.stopPropagation();
      finalCoordsX = e.touches[0].clientX;
      finalCoordsY = e.touches[0].clientY;
      // console.log(finalCoordsX);
   }
});

document.addEventListener('touchend', function (e) {
   clearInterval(slideInterval);
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


/************* Open popup ********************/

document.addEventListener('click', function (e) {
   if (e.target.classList.contains('allende')) {
      e.stopPropagation();
      e.preventDefault();
      document.getElementById('allende').classList.remove('display_none');
   }
   if (e.target.classList.contains('morelos')) {
      e.stopPropagation();
      e.preventDefault();
      document.getElementById('morelos').classList.remove('display_none');
      // new Drift(document.querySelector('.modelos_img_render'), {
      //    // paneContainer: document.querySelector('.modelos_img'),
      //    inlinePane: true,
      // });
   }
 
});

close_popup.forEach((i, ï, ä) => {
   i.addEventListener('click', () => {
      document.getElementById('morelos').classList.add('display_none');
      document.getElementById('allende').classList.add('display_none');
   });
});

// document.querySelectorAll('.modelos_img_render').forEach((i, ï, ä) => {
//    new Drift(i, {
//       // paneContainer: document.querySelector('.modelos_img'),
//       inlinePane: true,
//    });
// });

// modelos_img_render



////// auto slide
function autoSlide() {
   go_right();
}

let slideInterval;

window.addEventListener('load', () => {
   console.log('loaded');
});

const stopSlide = [chevron_left, chevron_right, document.querySelector('.slide_img'), document.querySelector('.detalles_box')];
stopSlide.forEach((i, ï, ä)=>{
   console.log(i);
   i.addEventListener('click', ()=>{
      clearInterval(slideInterval);
   });
});



//// si esta visible

var isInViewport = function (elem) {
   var distance = elem.getBoundingClientRect();
   return (
      distance.top >= 0 &&
      distance.left >= 0 &&
      distance.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      distance.right <= (window.innerWidth || document.documentElement.clientWidth)
   );
};

var findMe = document.querySelector('.slider_container');
let on_off = false;

/*
////////////////////////////////////////
////////////////////////////////////////
////////////////////////////////////////
////////////////////////////////////////
////////////////////////////////////////
////////////////////////////////////////
*/
function jean_big_slider() {
   ////// declara page 1 si no existe una
   let page;
   if (page === undefined) {
      page = 1;
   }
   ///// donde empieza el loop y donde acaba
   let sliderStart;
   let sliderEnd;
   if (sliderStart === undefined) {
      sliderStart = 0;
   }
   if (sliderEnd === undefined) {
      sliderEnd = 2;
   }
   //total paginas para usarlo despues
   let total_pages;
   let per_page = 90;
   let seccion = 'Big Slider';
   // let bigLightBoxSrc = [];
   let contenedor = document.querySelector('.contenedor_biggallery_home');
   /////////////////////////////////////////////////////////////////////////
   function pagina_directa() {
      let v = document.querySelectorAll('.bigpagina_directa');
      let q;
      v.forEach(r => {
         q++;
         r.classList.remove('bigpagina_activa');
      });
      let pd = parseInt(this.getAttribute('id'));
      page = pd;
      galleryQ(pd);
   }

   //// API call
   // galleryQ();
   const  bigLightBoxSrc = [
      {
         large: 'LaEstaciónDepa_0000_20210302_la_estacion_0021.jpg',
         small: '',
         title: ''
      },
      {
         large: 'LaEstaciónDepa_0001_20210302_la_estacion_0020.jpg',
         small: '',
         title: ''
      },
      {
         large: 'LaEstaciónDepa_0002_20210302_la_estacion_0017.jpg',
         small: '',
         title: ''
      },
      {
         large: 'LaEstaciónDepa_0003_20210302_la_estacion_0016.jpg',
         small: '',
         title: ''
      },
      {
         large: 'LaEstaciónDepa_0004_20210302_la_estacion_0013.jpg',
         small: '',
         title: ''
      },
      {
         large: 'LaEstaciónDepa_0005_20210302_la_estacion_0012.jpg',
         small: '',
         title: ''
      },
      {
         large: 'LaEstaciónDepa_0006_20210302_la_estacion_0011.jpg',
         small: '',
         title: ''
      },
      {
         large: 'LaEstaciónDepa_0007_20210302_la_estacion_0010.jpg',
         small: '',
         title: ''
      },
      {
         large: 'LaEstaciónDepa_0008_20210302_la_estacion_0009.jpg',
         small: '',
         title: ''
      },
      {
         large: 'LaEstaciónDepa_0009_20210302_la_estacion_0008.jpg',
         small: '',
         title: ''
      },
      {
         large: 'LaEstaciónDepa_0010_20210302_la_estacion_0006.jpg',
         small: '',
         title: ''
      },
      {
         large: 'LaEstaciónDepa_0011_20210302_la_estacion_0005.jpg',
         small: '',
         title: ''
      },
      {
         large: 'LaEstaciónDepa_0012_20210302_la_estacion_0003.jpg',
         small: '',
         title: ''
      },
      {
         large: 'LaEstaciónDepa_0013_20210302_la_estacion_0002.jpg',
         small: '',
         title: ''
      },
   ];
   /*
   function galleryQ() {
      bigLightBoxSrc = [];
      let xhr = new XMLHttpRequest();
      xhr.withCredentials = true;

      xhr.addEventListener("readystatechange", function () {
         if (this.readyState === 4) {
            // console.log(this.responseText);
            let response = JSON.parse(this.responseText);
            // console.log(response);
            response.forEach(a => {
               bigLightBoxSrc.push({
                  icon: a.icon,
                  featimg: a.featimg,
                  title: a.title,
               });
            });
            crear_galeria(bigLightBoxSrc);
         } //// end readyState === 4 ////
      });
      xhr.open("GET", `${jeanData.siteURL}/wp-json/jean/rest_route/galeria_home?page=${page}&per_page=${per_page}&seccion=${seccion}`);
      xhr.setRequestHeader('X-WP-Nonce', jeanData.nonce);
      xhr.send();
   } /// END function galleryQ()
   */
   crear_galeria(bigLightBoxSrc);
   ////////////// en api call
   function crear_galeria(src) {
      //total_pages = wp[0].total_pages;
      let content = '';
      let masonryCount = 0;
      let o = sliderStart;
      let nav_arrow;
      while (masonryCount < 3) {
         if (o === src.length) {
            o = 0;
         }
         if (o < 0) {
            o = src.length - 1;
         }
         if (masonryCount === 0) {
            nav_arrow = 'biggallery_lizzy_nav_izq';
         } else if (masonryCount === 2) {
            nav_arrow = 'biggallery_lizzy_nav_der';
         } else { nav_arrow = ''; }
         masonryCount++;
         content += `
          <article class="bigmasonry_item_container ${nav_arrow}" photo="${masonryCount - 1}">
            <img class="bigmasonry_item bigsingle_foto" src="../media/slider-proyecto/interiores/${src[o].large}" alt="">
            <div></div>
            <div class="bigmasonry_title bigsingle_foto">
                <h2>${src[o].title}</h2>
            </div>
          </article>
`;
         contenedor.innerHTML = content;
         o++;
         if (masonryCount === 3) {
            contenedor.innerHTML += `
        <div class='biggallery_nav_bottom'>
          <img class='biggallery_lizzy_nav_izq biggallery_nav_mobile' src='../media/slider-proyecto/interiores/left_mobile.svg' alt=''>        
          <div>&nbsp;</div>        
          <img class='biggallery_lizzy_nav_der biggallery_nav_mobile' src='../media/slider-proyecto/interiores/right_mobile.svg' alt=''>
        </div>`;
            botonzotes();
            shadowBox();
         }
      }
   } ////////// END crear_galeria(wp)
   ///////////////////////////////////////////////   ShadowBox   ///////////////////////////////////////
   function shadowBox() {
      const biglightbox_contenedor = document.querySelector('.bigligthbox_lizzy_contenedor');
      const biglightbox_img = document.getElementById('bigligthbox_lizzy_img');
      let slideNumber;
      const sliders = document.querySelectorAll('.bigmasonry_item');
      sliders.forEach((y) => {
         y.addEventListener('click', (e) => {
            biglightbox_contenedor.classList.add('bigligthbox_displaygrid');
            let x = e.target;
            slideNumber = x.getAttribute('src');
            biglightbox_img.setAttribute('src', slideNumber);
            document.body.setAttribute('style', 'overflow:hidden;padding-right:17px');
         }); // end EventListener
      }); // end forEach
      //////////////////////////////////    ShadowBox NAV   //////////////////////////////////

      ////////////////////////////////    ShadowBox CLOSE   //////////////////////////////////
      let close = document.querySelectorAll('.close_bigligthbox');
      close.forEach((a) => {
         a.addEventListener('click', () => {
            biglightbox_contenedor.classList.remove('bigligthbox_displaygrid');
            document.body.removeAttribute('style', 'overflow:hidden');
         });
      });
   } /// end  shadowBox()
   ///////////////////////////////////////////////   ShadowBox   ///////////////////////////////////////

   ////////////// PAGINACION //////// botonzotes
   function botonzotes() {
      let bigSliderLeftNav = document.querySelectorAll('.biggallery_lizzy_nav_izq');
      let bigSliderRightNav = document.querySelectorAll('.biggallery_lizzy_nav_der');

      function big_slider_next() {
         let cards = document.querySelectorAll('.bigsingle_foto');
         sliderStart++;
         if (sliderStart > bigLightBoxSrc.length - 1) {
            sliderStart = 0;
         }
         cards.forEach((x) => {
            x.classList.add('bigslider_move_left');
         });
         //setTimeout(crear_galeria(bigLightBoxSrc), 5000);
         cards[0].addEventListener('animationend', () => {
            crear_galeria(bigLightBoxSrc)
         });
      }
      bigSliderLeftNav.forEach(i => {
         i.addEventListener('click', big_slider_next);
      });

      function big_slider_prev() {
         let cards = document.querySelectorAll('.bigsingle_foto');
         sliderStart--;
         if (sliderStart < 0) {
            sliderStart = bigLightBoxSrc.length - 1;
         }
         cards.forEach((x) => {
            x.classList.add('bigslider_move_right');
         });
         // setTimeout(crear_galeria(bigLightBoxSrc), 5000);
         cards[0].addEventListener('animationend', () => {
            crear_galeria(bigLightBoxSrc)
         });
      }
      bigSliderRightNav.forEach(i => {
         i.addEventListener('click', big_slider_prev);
      });
   }  ///////////// END botones

} /////////// END jean_big_slider()
jean_big_slider();
