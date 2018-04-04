import React, { Component } from 'react';
import Clipboard from 'react-clipboard.js';
// import PropTypes from 'prop-types';

import step1 from '@images/calendar-step-1.png';
import step2 from '@images/calendar-step-2.png';

class Calendar extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }
  render() {
    return (
      <div>
        <h1>The groupbuy calendar</h1>
        <p>
          With the Keebtrack calendar you have on overview of all the groupbuys and when they end
          inside your calendar!
        </p>
        <p>
          <Clipboard className="p-2 btn btn-primary" data-clipboard-text="https://api.keebtrack.com/calendar">
            Copy the calendar API link
          </Clipboard>
        </p>
        <p>
          And after that paste it in your favorite calendar app
        </p>
        <img className="img-fluid" src={ step1 } alt="logo" />
        <p>
          It is important to note that you want to set the sync time low enough!
        </p>
        <img className="img-fluid" src={ step2 } alt="logo" />
        <p>
          And now you should have a working calendar with all the group buys <span role="img">👍</span>
        </p>
      </div>
    );
  }
}

Calendar.propTypes = {
  //   onClickHandler: PropTypes.func
};

Calendar.defaultProps = {
  //   onClickHandler: () => null
};

export default Calendar;