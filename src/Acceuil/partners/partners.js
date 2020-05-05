import React from 'react';
import { UncontrolledCarousel } from 'reactstrap';

const items = [
  {
    src: 'p1.png',
    altText: 'Slide 1',
    caption: 'Slide 1',
    header: 'Slide 1 Header',
    key: '1'
  },
  {
    src: 'p2.png',
    altText: 'Slide 2',
    caption: 'Slide 2',
    header: 'Slide 2 Header',
    key: '2'
  },
  {
    src: 'p3.png',
    altText: 'Slide 3',
    caption: 'Slide 3',
    header: 'Slide 3 Header',
    key: '3'
  }
];

const Partners = () =>( <div>
   <h1 className="title">Partenaires</h1>
<UncontrolledCarousel items={items}/>
</div>)

export default Partners;