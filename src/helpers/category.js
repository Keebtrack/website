 import React from 'react';

 const getCategory = tag => {
   switch (tag) {
     case 'Keycaps':
       return (<strong className="d-inline-block mb-2 text-primary">Keycaps</strong>);
     case 'Keyboard':
       return (<strong className="d-inline-block mb-2 text-success">Keyboard</strong>);
     case 'Parts':
       return (<strong className="d-inline-block mb-2 text-warning">Parts</strong>);
     case 'Artisan':
       return (<strong className="d-inline-block mb-2 text-danger">Artisan</strong>);
     default:
       return (<strong className="d-inline-block mb-2">{tag}</strong>);
   }
 };

 export default getCategory;