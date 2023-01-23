import '@splidejs/splide/css';
import Splide from '@splidejs/splide';

new Splide('.splide').mount();

var splide = new Splide('.splide', {
    type: 'loop',
    perPage: 3,
    focus: 'center',
});

splide.mount();