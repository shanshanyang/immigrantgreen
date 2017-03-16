import React from 'react';
import PDF from './data/pdf';
import './app.css';

const PdfPageList = (props) => {
  const pages = props.items.map((item, index) => (
    <li key={index}>
      {decodeURIComponent(item.R[0].T)}
    </li>
  ));

  return <ul>{pages}</ul>;
};

const MyApp = () => {
  const containerStyle = {
    width: `${PDF.formImage.Width}%`,
  };

  return (
    <div style={containerStyle} className="wrapper">
      <PdfPageList items={PDF.formImage.Pages[0].Texts} />
    </div>
  );
};

export default MyApp;
