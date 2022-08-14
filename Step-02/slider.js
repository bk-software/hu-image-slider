const imagesArray = [
  'OHR.HickmanBridge_ROW9566895207_1920x1080.jpg',
  'OHR.LongsPeak_ROW9098186381_1920x1080.jpg',
  'OHR.NoctilucentClouds_ROW9144099035_1920x1080.jpg',
  'OHR.SpiralHill_ROW7328923046_1920x1080.jpg',
];

let currentImage = 0;

function renderImage() {
  const imageURL = 'images/' + imagesArray[currentImage];
  document.getElementById('slider-image').src = imageURL;
}

function prevImage() {
  currentImage--;
  if (currentImage < 0) {
    currentImage = imagesArray.length - 1;
  }
  console.log('prev currentImage', currentImage);
  renderImage();
}

function nextImage() {
  currentImage++;
  if (currentImage > imagesArray.length - 1) {
    currentImage = 0;
  }

  //console.log('next currentImage', currentImage);
  renderImage();
}

let interval = null;

/*
  The function automatic change the images
*/
function autoSlideShow() {
  if (interval != null) {
    return;
  }

  // This code will run only if the interval variable is null
  interval = setInterval(function () {
    nextImage();
  }, 1000);

  console.log('interval', interval);
}

/*
The Function stop the slide show images
*/
function stopSlideShow() {
  clearInterval(interval);
  //Set the interval to null so we can run autoSlideShow again
  interval = null;
  console.log('stopSlideShow interval', interval);
}

document.getElementById('prev').addEventListener('click', prevImage);
document.getElementById('next').addEventListener('click', nextImage);
document.getElementById('auto-run').addEventListener('click', autoSlideShow);
document.getElementById('stop-run').addEventListener('click', stopSlideShow);

document
  .getElementById('slider-image')
  .addEventListener('mouseenter', stopSlideShow);

document
  .getElementById('slider-image')
  .addEventListener('mouseleave', autoSlideShow);
