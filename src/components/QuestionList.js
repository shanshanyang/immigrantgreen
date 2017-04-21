import React from 'react';
import QuestionOptions from './questionOption';

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
      {item.type}
      {item.required}
      <QuestionOptions options={item.options} type={item.type}/>
    </li>
  ));
  
  return (
     <ul>{questions}</ul>
  );
}

export default QuestionList;
