import React from 'react';
import QuestionList from './QuestionList';
import { getQuestionRef } from './firebase';

class SectionList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoaded: false,
      isActive: false,
      index: 0,
      questions: []
    };

    // this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
  }

  loadQuestions(e) {
  // Can i avoid use persist?
    e.persist();

    const index = Number(e.target.dataset.index);

    getQuestionRef(index).on('value', (snap) => {
      const qlist = snap.val();

      this.setState({
        questions: qlist,
        index: index,
        isLoaded: true
      });
    });

  }

  render() {
    const sections = this.props.items.map((item, index) => (
      <li key={index}>
          <h1 onClick={(e) => this.loadQuestions(e)} data-index={index}>{item.label}</h1>
      </li>
    ));
    
    return (
      <div>
        <ul>{sections}</ul>
        <QuestionList items={this.state.questions} />
      </div>
    );
  }
};

export default SectionList;
