const menu_icon = document.querySelector('.menu_icon');
const menu_top = document.querySelector('.menu_top');
const close_menu_icon = document.querySelector('.close_menu_icon');
// const menu_top_close = 

menu_icon.addEventListener('click', ()=>{
   menu_top.classList.add('menu_top_open');
   menu_icon.classList.toggle('hidden');
   //
   document.body.setAttribute('overflow', 'hidden');
   // document.body.style.position = 'fixed';
   // document.body.style.top = `-${window.scrollY}px`;
});

close_menu_icon.addEventListener('click', ()=>{   
   menu_top.classList.remove('menu_top_open');   
   menu_top.classList.add('menu_top_close');
   menu_icon.classList.toggle('hidden');
   ///
setTimeout(()=>{
   document.querySelector('.menu_top_close').addEventListener('animationend', () => {
      menu_top.classList.remove('menu_top_close');      
   });
},10);
//
   // document.body.style.position = '';
   // document.body.style.top = '';
});



