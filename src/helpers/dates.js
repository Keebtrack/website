import React from 'react';

const dateToString = d => `${d.getMonth() + 1}/${d.getDate()}/${d.getFullYear()}`;

const getDates = (from, to) =>
  (<div className="mb-1 text-muted">{dateToString(new Date(from))} - {dateToString(new Date(to))}</div>);

export default getDates;