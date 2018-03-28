import React from 'react';

function getRegion(tag) {
  switch (tag) {
    case 'US':
      return (<strong className="d-inline-block mb-2 text-primary">US</strong>);
    case 'EUROPE':
      return (<strong className="d-inline-block mb-2 text-success">EUROPE</strong>);
    case 'ASIA':
      return (<strong className="d-inline-block mb-2 text-danger">ASIA</strong>);
    default:
      return null;
  }
}

export default getRegion;