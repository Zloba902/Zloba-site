


var i = 0;
var txt = "";
var speed = 50;

async function typeWriter() {
    document.getElementById("daily-lines").textContent = "";
    const response = await fetch('slova.json');
    const data = await response.json();

    const randomIndex = Math.floor(Math.random() * data.length);
    txt = data[randomIndex];
    write();
};


function write() {
    if (i < txt.length) {
        document.getElementById("daily-lines").textContent += txt.charAt(i);
        i++;
        setTimeout(write, 50);
    } else {
        i = 0;
    }
}
setInterval(typeWriter, 300000);
typeWriter();

function openModal(src, time, des) {
    const modal = document.getElementById('modal-window-image');
    const modalImg = document.getElementById('modal-image');
    const modalTime = document.getElementById('img-time');
    const modalDescription = document.getElementById('img-description');
    modalTime.textContent = time;
    modalDescription.textContent = des;
    modalImg.src = src;
    modal.showModal();
}


interact('.draggable')
  .draggable({
    listeners: {
      // when a user drags the object ('on dragmove') run this function
      move: dragMoveListener,
      // call this function on every dragend event
      end (event) {
        console.log("item dropped!")
      }
    }
  })

function dragMoveListener (event) {
// all this stuff gets the position of the item while it's being dragged
var target = event.target
// keep the dragged position in the data-x/data-y attributes
var x = (parseFloat(target.getAttribute('data-x')) || 0) + event.dx
var y = (parseFloat(target.getAttribute('data-y')) || 0) + event.dy

// translate the element
target.style.transform = 'translate(' + x + 'px, ' + y + 'px)'

// update the position attributes
target.setAttribute('data-x', x)
target.setAttribute('data-y', y)
}

// this function is used later in the resizing and gesture demos
window.dragMoveListener = dragMoveListener

