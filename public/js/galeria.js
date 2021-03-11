// esversion 2018
const galeriaIMGs = [
      { thumb: "photo0.jpg", large: "photo0-XL.jpg", alt: "", style: "gallery-img _uno" },
      { thumb: "photo1.jpg", large: "photo1-XL.jpg", alt: "", style: "gallery-img _dos" },
      { thumb: "photo2.jpg", large: "photo2-XL.jpg", alt: "", style: "gallery-img _tres" },
      { thumb: "photo3.jpg", large: "photo3-XL.jpg", alt: "", style: "gallery-img _cuatro" },
      { thumb: "photo4.jpg", large: "photo4-XL.jpg", alt: "", style: "gallery-img _cinco" },   
      { thumb: "photo5.jpg", large: "photo5-XL.jpg", alt: "", style: "gallery-img _uno" },
      { thumb: "photo6.jpg", large: "photo6-XL.jpg", alt: "", style: "gallery-img _dos" },
      { thumb: "photo7.jpg", large: "photo7-XL.jpg", alt: "", style: "gallery-img _tres" },
      { thumb: "photo8.jpg", large: "photo8-XL.jpg", alt: "", style: "gallery-img _cuatro" },
      { thumb: "photo9.jpg", large: "photo9-XL.jpg", alt: "", style: "gallery-img _cinco" },
];


// fill imgs
const galeria_body = document.querySelector('.galeria_body');

galeriaIMGs.forEach((i, ï, ä) => {
   galeria_body.innerHTML += `<img  class="${i.style}" src="../media/galeria/${i.thumb}" alt="${i.alt}" data-imgXL="${i.large}" data-idx="${ï}" />`;
});

/// popup
let idx = 0;
const blackBox = document.querySelector('.blackBox');
const chevron_left = document.querySelector('.chevron_left');
const chevron_right = document.querySelector('.chevron_right');
const blackbox_img = document.querySelector('.blackbox_img');
const gallery_close = document.querySelector('.gallery_close');

document.addEventListener('click', function (e) {
   if (e.target.classList.contains('gallery-img')) {
      e.stopPropagation();
      idx = e.target.getAttribute('data-idx');
      blackbox_img.setAttribute('src', `../media/galeria/${galeriaIMGs[idx].large}`);
      blackBox.classList.remove('display_none');
   }
});

// close gallery
document.addEventListener('click', function (e) {
   if (e.target.classList.contains('blackBox')) {
      e.stopPropagation()
      blackBox.classList.add('display_none');
   }
});
gallery_close.addEventListener('click', ()=>{
   blackBox.classList.add('display_none');
});


///////// next - prev
chevron_right.addEventListener('click', go_right);
function go_right() {
   idx++;
   // console.log(idx);
   if (idx > galeriaIMGs.length - 1) {
      idx = 0;
      blackbox_img.setAttribute('src', `../media/galeria/${galeriaIMGs[idx].large}`);
   } else {
      blackbox_img.setAttribute('src', `../media/galeria/${galeriaIMGs[idx].large}`);
   }
};

chevron_left.addEventListener('click', go_left);
function go_left() {
   idx--;
   // console.log(idx);
   if (idx < 0) {
      idx = galeriaIMGs.length - 1
      blackbox_img.setAttribute('src', `../media/galeria/${galeriaIMGs[idx].large}`);
   } else {
      blackbox_img.setAttribute('src', `../media/galeria/${galeriaIMGs[idx].large}`);
   }
};

window.addEventListener('load', ()=>{   
   galeriaIMGs.forEach((i, ï, ä)=>{
      // console.log(ï);
      blackbox_img.setAttribute('src', `../media/galeria/${galeriaIMGs[ï].large}`);
   });
});

/********************** Touch Move ***************************/
let initialCoords = 0;
let finalCoords = 0;

blackBox.addEventListener('touchstart', function (e) {
   initialCoords = e.touches[0].clientX;
   // console.log(initialCoords);
});

blackBox.addEventListener('touchmove', function (e) {
   finalCoords = e.touches[0].clientX;
   // console.log(finalCoords);
});

blackBox.addEventListener('touchend', function (e) {
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
