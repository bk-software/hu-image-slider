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

    const sliderButtons = ['#prev-image', '#next-image'].map(id => document.querySelector(id));

    control.addEventListener('click', () => {
        homeToolbar.querySelectorAll('.active').forEach(x => x.classList.remove('active'));
        control.classList.add('active');

        if (lastContainer) { lastContainer.classList.add('d-none');}
        container.classList.remove('d-none');

        switch (key) {
            case 'slide':
                renderPicture();
                sliderButtons.forEach(x => x.classList.remove('disabled'));
                break;
            case 'list':
                renderTable();
                sliderButtons.forEach(x => x.classList.add('disabled'));
                break;
        }

        lastContainer = container;
    });
});

const renderTable = () => {
    document.querySelector('#list-container tbody').innerHTML = pictureData.map(x => {
        return `<tr>
    <td><img style="height: 30px; width:auto;" src="images/${x.name}"></td>
    <td>${x.title}</td>
    <td>${x.credits}</td>
    <td>${x.featured}</td>
</tr>`;
    }).join('');
};