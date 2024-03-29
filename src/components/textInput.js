import React from 'react';
import { createStyleSheet } from 'jss-theme-reactor';
import customPropTypes from 'material-ui/utils/customPropTypes';
import Input from 'material-ui/Input/Input';

const styleSheet = createStyleSheet('TextInputs', () => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  input: {
    margin: 10,
  },
}));
// disabled; error;
export default function TextInputs(props, context) {
  const classes = context.styleManager.render(styleSheet);
  return (
    <div className={classes.container}>
      <Input
        placeholder="Placeholder"
        className={classes.input}
      />
    </div>
  );
}

TextInputs.contextTypes = {
  styleManager: customPropTypes.muiRequired,
};