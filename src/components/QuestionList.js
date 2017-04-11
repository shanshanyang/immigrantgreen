import React from 'react';

const QuestionList = (props) => {
  const questions = props.items.map((item, index) => (
    <li key={index}>
      {item.key}
    </li>
  ));
  return (
    <ul>{questions}</ul>
  );
};

export default QuestionList;
