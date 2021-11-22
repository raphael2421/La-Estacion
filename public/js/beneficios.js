// esversion: 2018
const blog = document.querySelector('.blog');
const blogContent = [
   {
      title: 'Day of the Dead Celebration',
      img: 'day-of-the-dead-san-miguel-de-allende.jpg',
      imgxl: '',
      text: `San Miguel de Allende, a colonial-era city in Mexico’s central highlands, is known for its baroque Spanish architecture, thriving arts scene, and cultural festivals. In the city’s historic cobblestoned center lies the neo-Gothic church Parroquia de San Miguel Arcángel, whose dramatic pink towers rise above the main plaza, El Jardín. The Templo de San Francisco church nearby has an 18th-century churrigueresque facade. <br> <p><strong>Day of the Dead Celebrations</strong></p>

This trip is planned around Mexico’s “Day of the Dead” celebrations which takes place from October 31 through November 3, 2021. “La Calaca” is an amazing display of participatory art and culture devoted to the Mexico’s “Day of the Dead” celebrations that seeks to honor, promote, and explore the traditions and themes of Día de Muertos, highlighting the tradition’s ability to transform the loss into celebration. In the end, we are all calacas!`,
      content: ''
   },
   {
      title: 'Plusvalía',
      img: 'san miguel 640x640.jpg',
      imgxl: '',
      text: `Por más de 7 años, San Miguel de Allende se mantiene como <strong>una de las ciudades más atractivas para invertir en bienes raíces</strong>, ya que ha brindado mayor plusvalía a tráves de los años.</b>`,
      content: ''
   },
   {
      title: `Una inversión segura`,
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
      title: `Nombrada <b>la mejor <br>
ciudad pequeña</b> <br>
del mundo <br>
para vivir.`,
      img: 'litsie-gonzalez-m-ei-f-cggi-7-e-unsplash.png',
      imgxl: '',
      text: `Nombrada la mejor ciudad pequeña del mundo para vivir por la revista <strong>Condé Nast Traveler</strong>, San Miguel de Allende se convirtió en el primer lugar turístico sin playa de América Latina en recibir el Sello de Viaje seguro (TSS) por parte del Consejo Mundial de Viajes y Turismo (WTTC).`,
      content: ''
   },
   {
      title: `Gastronomía`,
      img: 'capa-2.jpg',
      imgxl: '',
      text: `Sin duda alguna San Miguel de Allende cuenta con la combinación perfecta entre contemporaneidad y tradición.`,
      content: ''
   },
   {
      title: `San Miguel de Allende <br> Patrimonio de la
humanidad.`,
      img: 'kazuend-2-kx-eb-8-g-5-vo-unsplash.png',
      imgxl: '',
      text: `Ciudad representativa
en todo su esplendor de
la cultura mexicana,
nombrada por la <b>UNESCO,</b>
Patrimonio de la Humanidad.`,
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