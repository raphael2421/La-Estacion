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



// console.log(Intl.DateTimeFormat().resolvedOptions().timeZone)


const date = new Date();
const dtf = new Intl.DateTimeFormat('es-MX', { hour: 'numeric', minute: 'numeric', second: 'numeric', timeZone: 'America/Mexico_City' });
// const dtf = new Intl.DateTimeFormat('es-MX', { timeZone: 'America/Mexico_City' });
// console.log(dtf.format(date));

///////////////////////
const horario_cerrado = document.getElementById('horario_cerrado');
const horario_abierto = document.getElementById('horario_abierto');
const closed = new Date(horario_cerrado.value);
const open = new Date(horario_abierto.value);

// console.log(dtf.format(open));
// console.log(dtf.format(closed));
// console.log(dtf.format(date));

if ((dtf.format(date) > dtf.format(open) && dtf.format(date) < dtf.format(closed))) {   
   // console.log('abierto');
   tel_icon.classList.remove('hidden');
}


const link_contacto = document.querySelectorAll('.link_contacto');
link_contacto.forEach((i, ï, ä)=>{
   i.addEventListener('click', function(){
      this.classList.add('link_active');
   });
});
function linkContacto(){
   if (window.location.hash == '#contacto') {
      link_contacto.forEach((i, ï, ä)=>{
         i.classList.add('link_active')
      });
   }
}
linkContacto();