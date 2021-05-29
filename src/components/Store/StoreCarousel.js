import React from 'react';
import { UncontrolledCarousel } from 'reactstrap';

const items = [
  {
    src: "https://www.burpee.com/media/catalog/product/cache/f822b5c8450580a710acfcf9cd4f8045/a/c/ac0866cf1a4079d2a543e5c9a41f2d2a87c5e35edee79547869260bcce78bbcc.jpeg",
    altText: 'Slide 1',
    caption: 'Slide 1',
    header: 'Slide 1 Header',
    key: '1'
  },
  {
    src: "https://www.burpee.com/media/catalog/product/cache/f822b5c8450580a710acfcf9cd4f8045/3/a/3a03073c0fca1d86efead20b15b9dc6b114f172f8fcad757b8cb9bf04c0cb7f0.jpeg",
    altText: 'Slide 2',
    caption: 'Slide 2',
    header: 'Slide 2 Header',
    key: '2'
  },
  {
    src: "https://www.burpee.com/media/catalog/product/cache/f822b5c8450580a710acfcf9cd4f8045/c/c/cc66876e059f45f3ae11696aec43c1639a1edd240397cf8c0300feb9bd943a1a.jpeg",
    altText: 'Slide 3',
    caption: 'Slide 3',
    header: 'Slide 3 Header',
    key: '3'
  }
];

const Example = () => <UncontrolledCarousel items={items} />;

export default Example;