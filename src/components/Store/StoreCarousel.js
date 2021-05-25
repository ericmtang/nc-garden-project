import React from 'react';
import { UncontrolledCarousel } from 'reactstrap';

const items = [
  {
    src: "https://www.burpee.com/dw/image/v2/ABAQ_PRD/on/demandware.static/-/Sites-masterCatalog_Burpee/default/dw0758775b/Images/Product%20Images/prod500099/prod500099.jpg?sw=322&sh=380&sm=fit",
    altText: 'Slide 1',
    caption: 'Slide 1',
    header: 'Slide 1 Header',
    key: '1'
  },
  {
    src: "https://www.burpee.com/dw/image/v2/ABAQ_PRD/on/demandware.static/-/Sites-masterCatalog_Burpee/default/dw102e75c0/Images/Product%20Images/prod500099/prod500099_alt1.jpg?sw=322&sh=380&sm=fit",
    altText: 'Slide 2',
    caption: 'Slide 2',
    header: 'Slide 2 Header',
    key: '2'
  },
  {
    src: "https://www.burpee.com/dw/image/v2/ABAQ_PRD/on/demandware.static/-/Sites-masterCatalog_Burpee/default/dw6abbb7f3/Images/Product%20Images/prod500099/prod500099_alt5.jpg?sw=322&sh=380&sm=fit",
    altText: 'Slide 3',
    caption: 'Slide 3',
    header: 'Slide 3 Header',
    key: '3'
  }
];

const Example = () => <UncontrolledCarousel items={items} />;

export default Example;