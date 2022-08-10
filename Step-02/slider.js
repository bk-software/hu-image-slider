function prevImage() {
  console.log('You press prev image');
  document.getElementById('slider-image').src =
    'images/OHR.LongsPeak_ROW9098186381_1920x1080.jpg';
}

function nextImage() {
  document.getElementById('slider-image').src =
    'images/OHR.NoctilucentClouds_ROW9144099035_1920x1080.jpg';
}

document.getElementById('prev').addEventListener('click', prevImage);
document.getElementById('next').addEventListener('click', nextImage);
