 import React from 'react';

 const getCategory = tag => {
   switch (tag) {
     case 'keycaps':
       return (<strong className="d-inline-block mb-2 text-primary">Keycaps</strong>);
     case 'keyboard':
       return (<strong className="d-inline-block mb-2 text-success">Keyboard</strong>);
     case 'parts':
       return (<strong className="d-inline-block mb-2 text-warning">Parts</strong>);
     case 'artisan':
       return (<strong className="d-inline-block mb-2 text-danger">Artisan</strong>);
     default:
       return (<strong className="d-inline-block mb-2">{tag}</strong>);
   }
 };

 export default getCategory;