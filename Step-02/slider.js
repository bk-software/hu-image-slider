const imagesArray = [
  'OHR.HickmanBridge_ROW9566895207_1920x1080.jpg',
  'OHR.LongsPeak_ROW9098186381_1920x1080.jpg',
  'OHR.NoctilucentClouds_ROW9144099035_1920x1080.jpg',
  'OHR.SpiralHill_ROW7328923046_1920x1080.jpg',
];

function renderImage(imageNumber) {
  const imageURL = 'images/' + imagesArray[imageNumber];
  document.getElementById('slider-image').src = imageURL;
}

function prevImage() {
  renderImage(0);
}

function nextImage() {
  renderImage(1);
}

document.getElementById('prev').addEventListener('click', prevImage);
document.getElementById('next').addEventListener('click', nextImage);
