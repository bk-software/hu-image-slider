let currentPageId = 'home-page';

function makeMenuLinkChangePage(linkId, pageToShow) {
  const pageLinkElement = document.getElementById(linkId);
  console.log(pageLinkElement);

  pageLinkElement.addEventListener('click', function () {
    console.log('you clicked me');
    if (currentPageId == pageToShow) {
      return;
    }

    console.log(' after the if');

    // Show the page
    document.getElementById(pageToShow).classList.remove('d-none');

    // Hide the page
    document.getElementById(currentPageId).classList.add('d-none');

    currentPageId = pageToShow;
  });
}

makeMenuLinkChangePage('home-page-link', 'home-page');
makeMenuLinkChangePage('about-page-link', 'about-page');
makeMenuLinkChangePage('news-page-link', 'news-page');
