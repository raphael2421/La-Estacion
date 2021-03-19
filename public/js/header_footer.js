const menu_icon = document.querySelector('.menu_icon');
const menu_top = document.querySelector('.menu_top');
const close_menu_icon = document.querySelector('.close_menu_icon');
const links_menu = document.querySelectorAll('.menu_link');
const tel_icon = document.querySelector('.tel_icon');
// const menu_top_close = 

menu_icon.addEventListener('click', ()=>{
   menu_top.classList.add('menu_top_open');
   menu_icon.classList.toggle('hidden');
   //
   document.body.setAttribute('overflow', 'hidden');
   // document.body.style.position = 'fixed';
   // document.body.style.top = `-${window.scrollY}px`;
});

function close_menu() {
   menu_top.classList.remove('menu_top_open');
   menu_top.classList.add('menu_top_close');
   menu_icon.classList.toggle('hidden');
   ///
   setTimeout(() => {
      document.querySelector('.menu_top_close').addEventListener('animationend', () => {
         menu_top.classList.remove('menu_top_close');
      });
   }, 10);
   //
   // document.body.style.position = '';
   // document.body.style.top = '';
}

close_menu_icon.addEventListener('click', close_menu);
links_menu.forEach((i, ï, ä)=>{
   i.addEventListener('click', close_menu);
});


function fecha() {
   utc = new Date();
   toLocal = new Date(utc.setHours(utc.getHours() - 6));
   return toLocal.toISOString().slice(0, 19);
}
console.log(fecha());

if ('time') {
   // tel_icon.classList.add('hidden');
}
