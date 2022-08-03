function makeMenuLinkChangePage(linkId, pageToHide, pageToShow) {
  console.log(linkId, pageToHide, pageToShow);
  const pageLinkElement = document.getElementById(linkId);

  pageLinkElement.addEventListener('click', function () {
    console.log('you clicked me');
    document.getElementById(pageToShow).classList.remove('d-none');

    document.getElementById(pageToHide).classList.add('d-none');
  });
}

makeMenuLinkChangePage('home-page-link', 'about-page', 'home-page');
makeMenuLinkChangePage('about-page-link', 'home-page', 'about-page');
