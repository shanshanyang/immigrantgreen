import React from 'react';
import QuestionList from './questionList';
import { getQuestionRef } from './firebase';
import Text from 'material-ui/Text';


class SectionList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoaded: false,
      isActive: false,
      index: 0,
      questions: []
    };
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


  // if else template to render sub-title
  render() {
    const sections = this.props.items.map((item, index) => {
      let subsections;
      if (item.subsections) { 
        subsections = item.subsections.map((item, index) => {
          return (
            <li key={index}>
              <Text title="subtitle" onClick={(e) => this.loadQuestions(e)} data-index={index}>{item.label}</Text>
            </li>
          )
        });
      }
      return (
        <li key={index}>
          <Text title="title" onClick={(e) => this.loadQuestions(e)} data-index={index}>{item.label}</Text>
          <ul>{subsections}</ul>
        </li>
      );
    });
    
    return (
      <div>
        <ul>{sections}</ul>
        <QuestionList items={this.state.questions} />
      </div>
    );
  }
};

export default SectionList;
