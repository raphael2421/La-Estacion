// esversion: 2018
const blog = document.querySelector('.blog');
const blogContent = [
   {
      title: '',
      img: 'mexico-5756222.png',
      imgxl: '',
      text: `Por más de 7 años, se ha
            mantenido como una de las
            ciudades más atractivas para
            invertir en bienes raíces ya
            que ha brindado mayor
            plusvalía a través de los años.  <b>Hoy en día, el porcentaje
            de plusvalía ronda
            en un 11% anual.</b>`,
      content: ''
   },
   {
      title: `San Miguel
               de Allende`,
      img: 'landscapes-1426130.png',
      imgxl: '',
      text: `Una de las mejores ciudades
para invertir debido a sus
condiciones turísticas y su
<b>desarrollada infraestructura</b> gracias a la potencialización
nacional y extranjera.`,
      content: ''
   },
   {
      title: `Nombrada la mejor
ciudad pequeña
del mundo.`,
      img: 'litsie-gonzalez-m-ei-f-cggi-7-e-unsplash.png',
      imgxl: '',
      text: `San Miguel de Allende
se convirtió en el primer lugar turístico sin playa de América Latina en recibir el <b>Sello de
Viaje seguro (TSS) por parte
del Consejo Mundial de
Viajes y Turismo (WTTC)</b>`,
      content: ''
   },
   {
      title: ``,
      img: 'jesus-rocha-2-w-9-ez-azv-m-8-m-unsplash.png',
      imgxl: '',
      text: `Gastronomía y hotelería,
sin duda alguna
San Miguel de Allende
cuenta con la combinación
perfecta entre
contemporaneidad y tradición.`,
      content: ''
   },
   {
      title: `Nombrada la mejor
ciudad pequeña
del mundo.`,
      img: 'kazuend-2-kx-eb-8-g-5-vo-unsplash.png',
      imgxl: '',
      text: `Ciudad representativa
en todo su esplendor de
la cultura mexicana,
<b>nombrada por la UNESCO,
Patrimonio de la Humanidad.</b>`,
      content: ''
   },
];


// crea un nuevo globo de chat
let booleanNegate = true;
function blog_post(data) {
   let oddEvenClass = '';
   if (booleanNegate === true) {
      oddEvenClass = '_right';
   } else {
      oddEvenClass = '_left';
   }
   // para ahcer mas facil el manejo creamos una variavle que contenga el elemento que vamos a crear en este caso un div
   let post = document.createElement('article');
   // una vez creado podemos manipularlo como cualquier elemento ya existente en el DOM
   // es decir, podemos agregar o quitar atributos como classes IDs href style cualquier cosa
   post.classList.add('blog_post');
   post.innerHTML = `
         <div class="blog_head">
         <h1 class="blog_title${oddEvenClass}">
            ${data.title}
         </h1>
         <img class="blog_img${oddEvenClass}" src="../media/blog/${data.img}" alt=""></div>
      <div class="blog_text">
         <p>${data.text}</p>
      </div>
      <div class="blog_content">${data.content}</div>
   `;
   blog.append(post);
   // Javascript boolean Negate
   booleanNegate = !booleanNegate;
}


blogContent.forEach((i, ï, ä)=>{
   blog_post(i);
});