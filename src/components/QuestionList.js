import React from 'react';

class QuestionList extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {

  }

  getQuestionArray() { 
    const qlist = [];
    for (let i in this.props.items) {
      qlist.push(Object.assign(this.props.items[i], {'id': i}));
    }
    return qlist;
  }

  render() {
    const questions = this.getQuestionArray().map((item, index) => (
      <li key={index}>
        <p>{item.id}</p>  
        <p>{item.label}</p>
        <input type='{item.type}'></input>
      </li>
    ));
    return (
      <ul>{questions}</ul>
    );
  }
};

export default QuestionList;
