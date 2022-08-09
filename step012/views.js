let currentViewID = '#slide-view-selector';

const getElements = arr => arr.map(id => document.getElementById(id));

const controlsContainers = {
    slide: getElements(['slide-view-selector', 'single-image-container']),
    list: getElements(['list-view-selector', 'list-container'])
};
const homeToolbar = document.querySelector('#home-toolbar');

let lastContainer = document.querySelector('#single-image-container');

['slide', 'list'].forEach(key => {
    const [control, container] = controlsContainers[key];

    control.addEventListener('click', () => {
        homeToolbar.querySelectorAll('.active').forEach(x => x.classList.remove('active'));
        control.classList.add('active');

        if (lastContainer) { lastContainer.classList.add('d-none');}
        container.classList.remove('d-none');

        lastContainer = container;
    });
});