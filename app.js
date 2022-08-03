const homePageLinkElement = document.getElementById('home-page-link');
console.log(homePageLinkElement);

homePageLinkElement.addEventListener('click', function () {
  console.log('you clicked me');
  document.getElementById('home-page').classList.remove('d-none');

  document.getElementById('about-page').classList.add('d-none');
});

const aboutPageLinkElement = document.getElementById('about-page-link');
console.log(homePageLinkElement);

aboutPageLinkElement.addEventListener('click', function () {
  console.log('you clicked me');
  document.getElementById('about-page').classList.remove('d-none');

  document.getElementById('home-page').classList.add('d-none');
});
