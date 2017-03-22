import React from 'react';
import PDF from './data/pdf';
import './app.css';

const PdfPageList = (props) => {
  const texts = props.items.Texts.map((item, index) => (
    <div key={index}>
      {decodeURIComponent(item.R[0].T)}
    </div>
  ));
  // const canvas = document.createElement('canvas');
  // canvas.id     = "CursorLayer";
  // canvas.width  = 1224;
  // canvas.height = 768;
  // const context = canvas.getContext('2d');
  // const lines = props.items.Hlines.map((item, index) => {
  //   context.beginPath();
  //   context.moveTo(0,0);
  //   context.lineTo(item.x, item.y);
  //   context.stroke();
  // });

  // return <canvas width="100%" height=`${props.items.Height}%`>{texts}</canvas>;
  return <div> {texts} </div>
};

const MyApp = () => {
  const containerStyle = {
    width: `${PDF.formImage.Width}%`,
  };

  return (
    <div style={containerStyle} className="wrapper">
      <PdfPageList items={PDF.formImage.Pages[0]} />
    </div>
  );
};

export default MyApp;
