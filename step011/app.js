let currentPageId = 'home-page';

const makeMenuLinkChangePage = (linkId, pageToShow) => {
    const pageLinkElement = document.getElementById(linkId);

    pageLinkElement.addEventListener('click', () => {
        document.getElementById(currentPageId).classList.add('d-none');
        document.getElementById(pageToShow).classList.remove('d-none');

        // if no active link, querySelector will return null
        document.querySelector('nav .active')?.classList.remove('active');
        pageLinkElement.classList.add('active');

        currentPageId = pageToShow;
    });
};

makeMenuLinkChangePage('home-page-link', 'home-page');
makeMenuLinkChangePage('about-page-link', 'about-page');
makeMenuLinkChangePage('news-page-link', 'news-page');

