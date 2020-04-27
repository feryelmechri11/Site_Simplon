import React from 'react';
import { UncontrolledCarousel } from 'reactstrap';

const items = [
  {
    src: './assets/images_acceuil/event3.jpg',
    altText: 'Slide 1',
    caption: 'Slide 1',
    header: 'Slide 1 Header',
    key: '1'
  },
  {
    src: './assets/images_acceuil/event2.jpg',
    altText: 'Slide 2',
    caption: 'Slide 2',
    header: 'Slide 2 Header',
    key: '2'
  },
  {
    src: './assets/images_acceuil/event2.jpg',
    altText: 'Slide 3',
    caption: 'Slide 3',
    header: 'Slide 3 Header',
    key: '3'
  }
];

const Carous = () => <UncontrolledCarousel items={items} />;

export default Carous;


 /*  <div class="headerSlide">
<div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="https://vignette.wikia.nocookie.net/hunterxhunter/images/a/a1/Gungi_board.jpg/revision/latest/scale-to-width-down/340?cb=20150512180202&path-prefix=fr" class="d-block w-100" alt="..."/>
      <div class="headerSlideCaption">
        <h5 class="headerSlideCaptionTitre">First slide label</h5>
        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        <button type="button" class="btn btn-outline-success btn-lg">Commencer</button>
      </div>
    </div>
    <div class="carousel-item">
      <img src="https://www.pngmart.com/files/11/Frog-Meme-PNG-Background-Image.png" class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="https://upload.wikimedia.org/wikipedia/fr/e/ee/Capitals_de_Washington_%28administratif%29.png" class="d-block w-100" alt="..."/>
    </div>
  </div>
  <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>
</div> */
