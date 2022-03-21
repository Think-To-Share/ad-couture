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

const videoImage  = document.querySelector('.video-image');
const video  = document.querySelector('.video');
videoImage.addEventListener('click', event => {
    if(window.innerWidth >= 768){
        video.classList.remove('hide')
        videoImage.classList.add('hide')
        return;
    }
    const myGallery = GLightbox({
        elements: [
            {
                'href': 'https://www.youtube.com/embed/JHJ9RZ6APAg',
                'type': 'video',
                'source': 'youtube', //vimeo, youtube or local
                'width': 900,
            },
        ],
        autoplayVideos: true,
    });
    myGallery.open();  
})

document.querySelector('#search-menu').classList.remove('toggled');

document.querySelector('#search-icon').addEventListener('click',function(e) {
    e.stopPropagation();
    document.querySelector('#search-menu').classList.toggle('toggled');
    document.querySelector("#popup-search").focus();
});

document.querySelector('#search-menu input').addEventListener('click', function(e) {
    e.stopPropagation();
});

document.querySelector('#search-menu, body').addEventListener('click',function() {
    document.querySelector('#search-menu').classList.remove('toggled');
});