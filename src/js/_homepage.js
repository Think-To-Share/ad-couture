import { tns } from 'tiny-slider/src/tiny-slider'
import GLightbox from 'glightbox';
const lightbox = GLightbox({});

if (document.querySelector('.top-bar')) {
    tns({
        container: '.top-bar .slides',
        items: 1,
        nav: false,
        autoplay: true,
        controls:false,
        autoplayTimeout:3000,
        autoplayButtonOutput: false,
    })
}