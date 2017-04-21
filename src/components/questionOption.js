import React, { Component } from 'react';
import { LabelCheckbox } from 'material-ui/Checkbox';
import { LabelRadio, RadioGroup } from 'material-ui/Radio';
import { FormGroup, FormLabel, FormControl } from 'material-ui/Form';

const QuestionOptions = (props) => { 
  if (!props.options) {
    return (<p>no options</p>);
  }
  let optionList = props.options.map((item, index) => {
    let optionVal = `${item.label} : ${item.value}`; 
    return (
      <li key={index}>
        {item.label}.
        <LabelRadio label={item.value} value={item.label} />
      </li>
    )
  });
  return (
    <FormControl>
      <RadioGroup aria-label="Gender" name="gender">
        <ul>{optionList}</ul>
      </RadioGroup>
    </FormControl>
  )
};

export default QuestionOptions;