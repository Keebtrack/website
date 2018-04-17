import React, { Component } from 'react';
import renderHTML from 'react-render-html';
import PropTypes from 'prop-types';

const renderQuestion = ({
  id,
  question,
  answer,
  isActive
}, clickHandler) => (
  <div onClick={ () => clickHandler(id) } key={ id } className="panel panel-default panel-help active">
    <a>
      <div className="panel-heading">
        <h2>{question}</h2>
      </div>
    </a>
    <div className={ isActive ? 'collapse.show' : 'collapse' }>
      <div className="panel-body">
        <p>{ renderHTML(answer) }</p>
      </div>
    </div>
  </div>
);

renderQuestion.propTypes = {
  question: PropTypes.string,
  answer: PropTypes.string,
  isActive: PropTypes.bool,
  id: PropTypes.number
};

renderQuestion.defaultProps = {
  question: '',
  answer: '',
  isActive: false,
  id: 0
};

class FAQ extends Component {
  constructor() {
    super();
    this.clickActive = this.clickActive.bind(this);

    this.state = {
      questions: [{
        id: 1,
        question: 'How do I add my group buy?',
        answer: `You can use the google form <a href="https://goo.gl/forms/MmXc8KGd25u1R8Zi1">here</a>,
                 and after 10 mins the info will be synced by the server and show up in the calendar and
                 on the website!`,
        isActive: true
      }, {
        id: 2,
        question: 'How do I get the groupbuy calendar?',
        answer: 'Goto <a href="https://keebtrack.com/calendar">this section</a> and follow the instructions!',
        isActive: false
      }]
    };
  }

  clickActive(id) {
    /* eslint-disable */
    this.setState(prevState => ({
      questions: prevState.questions.map(q => {
        if (q.id === id) {
          q.isActive = true;
        } else {
          q.isActive = false;
        }
        return q;
      })
    }));
    /* eslint-enable */
  }

  render() {
    return (
      <div className="tab-content panels-faq">
        <div className="tab-pane active" id="tab1">
          <div className="panel-group" id="help-accordion-1">
            {
              this.state.questions.map(question => renderQuestion(question, this.clickActive))
            }
          </div>
        </div>
      </div>
    );
  }
}

export default FAQ;