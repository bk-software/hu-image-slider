//Array of Objects
const imagesArray = [
  {
    imageURL: 'OHR.HickmanBridge_ROW9566895207_1920x1080.jpg',
    title: 'Image 1 title',
  },
  {
    imageURL: 'OHR.LongsPeak_ROW9098186381_1920x1080.jpg',
    title: 'Image 2 title',
  },
  {
    imageURL: 'OHR.NoctilucentClouds_ROW9144099035_1920x1080.jpg',
    title: 'Image 3 title',
  },
  {
    imageURL: 'OHR.SpiralHill_ROW7328923046_1920x1080.jpg',
    title: 'Image 4 title',
  },
];

let currentImage = 0;

const autoRunButton = document.getElementById('auto-run');
const stopRunButton = document.getElementById('stop-run');
const nextButton = document.getElementById('next');
const prevButton = document.getElementById('prev');

function renderImage() {
  const imageObject = imagesArray[currentImage];
  console.log('imageObject', imageObject);

  const imageURL = 'images/' + imageObject.imageURL;
  document.getElementById('slider-image').src = imageURL;

  document.getElementById('image-title').innerHTML = imageObject.title;
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

  autoRunButton.classList.add('d-none');
  stopRunButton.classList.remove('d-none');
  console.log('interval', interval);
}

/*
The Function stop the slide show images
*/
function stopSlideShow() {
  clearInterval(interval);
  //Set the interval to null so we can run autoSlideShow again
  autoRunButton.classList.remove('d-none');
  stopRunButton.classList.add('d-none');
  interval = null;
  console.log('stopSlideShow interval', interval);
}

prevButton.addEventListener('click', prevImage);
nextButton.addEventListener('click', nextImage);
autoRunButton.addEventListener('click', autoSlideShow);
stopRunButton.addEventListener('click', stopSlideShow);

// document
//   .getElementById('slider-image')
//   .addEventListener('mouseenter', stopSlideShow);

// document
//   .getElementById('slider-image')
//   .addEventListener('mouseleave', autoSlideShow);
