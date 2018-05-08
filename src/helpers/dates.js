import React from 'react';
import Countdown from 'react-countdown-now';
import moment from 'moment';

const renderer = ({ total, days, hours, minutes, seconds, milliseconds, completed }) => {
  console.log(typeof days)
  if (completed) {
    return <div className="mb-1 text-muted">Ended!</div>
  } else if (days !== 0) {
    return <div className="mb-1 text-muted">{days} days remaining</div>;
  } else {
    return <div className="mb-1 text-muted">{hours} hours, {minutes} minutes and {seconds} seconds</div>;
  }
};


const countDown = (until) => {
  const closeDate = moment(until);
  const today = moment();
  return (<Countdown renderer={renderer} date={ today + closeDate.diff(today, 'miliseconds') } />)
}

export default countDown;