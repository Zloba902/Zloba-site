


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


