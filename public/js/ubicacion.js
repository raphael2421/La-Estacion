// js esversion: 2018

let drag1 = document.querySelector('#drag-1');
const mapa_border = document.querySelector('.mapa_border');

var angleScale = {
   angle: 0,
   scale: 1
}
var gestureArea = document.querySelector('.gesture-area')
var scaleElement = document.querySelector('.scale-element')
var resetTimeout

////////////////////////////////////
function dragMoveListener(event) {
   var target = event.target
   // keep the dragged position in the data-x/data-y attributes
   let x = (parseFloat(target.getAttribute('data-x')) || 0) + event.dx
   if (x >= 0) {
      x = 0
   }
   if (x <= -document.querySelector('#drag-1').offsetWidth + mapa_border.offsetWidth) {
      x = -document.querySelector('#drag-1').offsetWidth + mapa_border.offsetWidth;
   }

   let y = (parseFloat(target.getAttribute('data-y')) || 0) + event.dy
   if (y >= 0) {
      y = 0
   }
   if (y <= -document.querySelector('#drag-1').offsetHeight + mapa_border.offsetHeight) {
      // console.log(-mapa_border.offsetHeight +22);
      y = -document.querySelector('#drag-1').offsetHeight + mapa_border.offsetHeight;
   }

   // translate the element
   target.style.webkitTransform =
      target.style.transform =
      'translate(' + x + 'px, ' + y + 'px)';

   // update the posiion attributes
   target.setAttribute('data-x', x);
   target.setAttribute('data-y', y);
}
/////////////////////////////////

interact(gestureArea)
   .gesturable({
      listeners: {
         start(event) {
            angleScale.angle -= event.angle

            // clearTimeout(resetTimeout)
            // scaleElement.classList.remove('reset')
         },
         move(event) {
            // document.body.appendChild(new Text(event.scale))
            var currentAngle = event.angle + angleScale.angle
            var currentScale = event.scale * angleScale.scale

            scaleElement.style.webkitTransform =
               scaleElement.style.transform =
               'scale(' + currentScale + ')'

            // uses the dragMoveListener from the draggable demo above
            dragMoveListener(event)
            drag1 = '';
         },
         end(event) {
            angleScale.angle = angleScale.angle + event.angle
            angleScale.scale = angleScale.scale * event.scale
            drag1 = document.querySelector('#drag-1');

            // resetTimeout = setTimeout(reset, 1000)
            // scaleElement.classList.add('reset')
         }
      }
   })
   .draggable({
      listeners: { move: dragMoveListener }
   })

function reset() {
   scaleElement.style.webkitTransform =
      scaleElement.style.transform =
      'scale(1)'

   angleScale.angle = 0
   angleScale.scale = 1
}





///////////////////////////////////

/* 

// target elements with the "draggable" class
interact('.draggable')
   .draggable({
      // enable inertial throwing
      inertia: true,
      // keep the element within the area of it's parent
      modifiers: [
         // interact.modifiers.restrictRect({
         //    restriction: 'parent',
         //    endOnly: true
         // })
      ],
      // enable autoScroll
      autoScroll: true,

      listeners: {
         // call this function on every dragmove event
         move: dragMoveListener,

         // call this function on every dragend event
         // end(event) {
         //    var textEl = event.target.querySelector('p')

         //    textEl && (textEl.textContent =
         //       'moved a distance of ' +
         //       (Math.sqrt(Math.pow(event.pageX - event.x0, 2) +
         //          Math.pow(event.pageY - event.y0, 2) | 0))
         //          .toFixed(2) + 'px')
         // }
      }
   })

function dragMoveListener(event) {
   // console.log(drag1.offsetHeight);
   // console.log(drag1.offsetWidth);
   var target = event.target
   // keep the dragged position in the data-x/data-y attributes
   let x = (parseFloat(target.getAttribute('data-x')) || 0) + event.dx
   if (x >= 0 ) {
      x = 0
   }
   if (x <= -drag1.offsetWidth + mapa_border.offsetWidth) {
      x = -drag1.offsetWidth + mapa_border.offsetWidth;
   }

   let y = (parseFloat(target.getAttribute('data-y')) || 0) + event.dy
   if (y >= 0) {
      y = 0
   }
   if (y <= -drag1.offsetHeight + mapa_border.offsetHeight) {
      // console.log(-mapa_border.offsetHeight +22);
      y = -drag1.offsetHeight + mapa_border.offsetHeight;
   }

   // translate the element
   target.style.webkitTransform =
      target.style.transform =
      'translate(' + x + 'px, ' + y + 'px)'

   // update the posiion attributes
   target.setAttribute('data-x', x)
   target.setAttribute('data-y', y)
}

// this function is used later in the resizing and gesture demos
window.dragMoveListener = dragMoveListener




if (window.innerWidth >= 600) {
   drag1.style.webkitTransform =
      drag1.style.transform =
      'translate(' + -30 + 'px, ' + -360 + 'px)'
   drag1.setAttribute('data-x', -30)
   drag1.setAttribute('data-y', -360)
} else{
   drag1.style.webkitTransform =
      drag1.style.transform =
      'translate(' + -50 + 'px, ' + -130 + 'px)'
   drag1.setAttribute('data-x', -50)
   drag1.setAttribute('data-y', -130)
}

*/