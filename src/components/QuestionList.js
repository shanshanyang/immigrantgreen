import React from 'react';

const QuestionList = (props) => {
  if (!props.items.length) {
    return (
      <p>not loaded</p>
    );
  }

  const questions = props.items.map((item, index) => (
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

export default QuestionList;
