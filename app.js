let currentPageId = 'home-page';

function showPage(pageIdToShow) {
  console.log('you clicked me');
  if (currentPageId == pageIdToShow) {
    return;
  }

  console.log(' after the if');

  // Show the page
  document.getElementById(pageIdToShow).classList.remove('d-none');

  // Hide the page
  document.getElementById(currentPageId).classList.add('d-none');

  currentPageId = pageIdToShow;
}

function makeMenuLinkChangePage(linkId, pageToShow) {
  const pageLinkElement = document.getElementById(linkId);
  pageLinkElement.addEventListener('click', function () {
    showPage(pageToShow);
  });
}

makeMenuLinkChangePage('home-page-link', 'home-page');
makeMenuLinkChangePage('about-page-link', 'about-page');
makeMenuLinkChangePage('news-page-link', 'news-page');
