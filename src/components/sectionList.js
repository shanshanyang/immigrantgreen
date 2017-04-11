import React from 'react';
// import QuestionList from './QuestionList';

class SectionList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoaded: false,
      isActive: false,
    };

    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    alert('mount');
  }

  loadQuestions() {
    this.setState(prevState => ({
      isActive: !prevState.isActive
    }));
    alert('clicked');
  }

  render() {
    const sections = props.items.map((item, index) => (
      <li key={index}>
        <section>
          <h1 onClick={this.loadQuestions}>{item.label}</h1>
        </section>
      </li>
    ));
    return (
      <ul>{sections}</ul>
    );
  }
};

export default SectionList;
