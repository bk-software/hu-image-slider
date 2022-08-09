let currentPageId = '#home-page';

['home', 'about', 'news'].forEach(key => {
    const linkID = `#${key}-page-link`;
    const pageID = `#${key}-page`;

    const pageLinkElement = document.querySelector(linkID);

    pageLinkElement.addEventListener('click', () => {
        document.querySelector(currentPageId).classList.add('d-none');
        document.querySelector(pageID).classList.remove('d-none');

        document.querySelector('nav .active').classList.remove('active');
        pageLinkElement.classList.add('active');

        currentPageId = pageID;
    });
});
