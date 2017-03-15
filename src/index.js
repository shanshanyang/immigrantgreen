import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import MyApp from './MyApp';

const load = () => render((
  <AppContainer>
    <MyApp />
  </AppContainer>
), document.getElementById('root'));

if (module.hot) {
  module.hot.accept('./MyApp', load);
}

load();
