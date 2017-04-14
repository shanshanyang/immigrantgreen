import React from 'react';
import QuestionList from './QuestionList';

class SectionList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoaded: false,
      isActive: false,
    };

    // this.handleClick = this.handleClick.bind(this);
  }

  loadQuestions() {
    this.setState(prevState => ({
      isActive: !prevState.isActive,
    }));
  }

  render() {
    const sections = this.props.items.map((item, index) => (
      <li key={index}>
        <section>
          <h1 onClick={this.loadQuestions}>{item.label}</h1>
          <QuestionList items={item} />
        </section>
      </li>
    ));
    return (
      <ul>{sections}</ul>
    );
  }
};

export default SectionList;
