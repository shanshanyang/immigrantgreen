import React from 'react';
import PDF from './data/pdf';
import SsHeader from './header';
import './app.css';

// api
import FirebaseApi from './api/firebase';

// page navigation
const routes = ['/about', '/contact'];

const Pages = (props) => {
  const pages = props.items.map((item, index) => (
    <li key={index}>Page{index}</li>
  ));

  return <ul>{pages}</ul>;
};

const Questions = (props) => {
  const texts = props.items.Texts.map((item, index) => (
    <div key={index}>
      {decodeURIComponent(item.R[0].T)}
    </div>
  ));

  return <div> {texts} </div>;
};

const MyApp = () => {
  const containerStyle = {
    width: `${PDF.formImage.Width}%`,
  };

  return (
    <div style={containerStyle} className="wrapper">
      <SsHeader routes={routes} />
      <Pages items={PDF.formImage.Pages} />
      <Questions items={PDF.formImage.Pages[0]} />
    </div>
  );
};

export default MyApp;
