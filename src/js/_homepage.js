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
if(videoImage) {
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
}