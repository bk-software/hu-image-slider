const imagesArray = [
  'OHR.HickmanBridge_ROW9566895207_1920x1080.jpg',
  'OHR.LongsPeak_ROW9098186381_1920x1080.jpg',
  'OHR.NoctilucentClouds_ROW9144099035_1920x1080.jpg',
  'OHR.SpiralHill_ROW7328923046_1920x1080.jpg',
];

function prevImage() {
  console.log('You press prev image');
  const imageURL = 'images/' + imagesArray[0];
  document.getElementById('slider-image').src = imageURL;
}

function nextImage() {
  const imageURL = 'images/' + imagesArray[1];
  document.getElementById('slider-image').src = imageURL;
}

document.getElementById('prev').addEventListener('click', prevImage);
document.getElementById('next').addEventListener('click', nextImage);
