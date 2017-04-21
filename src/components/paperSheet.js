import React from 'react';
import { createStyleSheet } from 'jss-theme-reactor';
import customPropTypes from 'material-ui/utils/customPropTypes';
import Paper from 'material-ui/Paper';
import Text from 'material-ui/Text';

const styleSheet = createStyleSheet('PaperSheet', (theme) => ({
  root: theme.mixins.gutters({
    paddingTop: 16,
    paddingBottom: 16,
  }),
}));

export default function PaperSheet(props, context, { children }) {
  const classes = context.styleManager.render(styleSheet);
  return (
    <div>
      <Paper className={classes.root} elevation={4}>
        {children}
      </Paper>
    </div>
  );
}

PaperSheet.contextTypes = {
  styleManager: customPropTypes.muiRequired,
};