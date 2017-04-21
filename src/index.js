import React from 'react';
import { render } from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { AppContainer } from 'react-hot-loader';
import MyApp from './MyApp';


const load = () => render((
  <MuiThemeProvider>
    <AppContainer>
      <MyApp />
    </AppContainer>
  </MuiThemeProvider>
), document.getElementById('root'));

if (module.hot) {
  module.hot.accept('./MyApp', load);
}

load();
