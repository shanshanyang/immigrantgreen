import React from 'react';
import PDF from './data/pdf';
import './app.css';

// const pdfPageHlines = (props) => {
  // const Hlines = props.items.map(item => (

          // oc: '#221f1f',
          // x: 2.442,
          // y: 4.995,
          // w: 9,
          // l: 33.39,
          
  // ))
// };
// const pdfPageVlines = (props) => {
            // oc: '#221f1f',
            // x: 36,
            // y: 9.546,
            // w: 0.75,
            // l: 7.551,
          
// };
// const pdfPageFills = (props) => {
            // oc: '#bfc0c3',
            // x: 2.25,
            // y: 9.546,
            // w: 33.75,
            // h: 1.673,
            // clr: -1,
          
// };
// const pdfPageTexts = (props) => {
            // oc: '#221f1f',
            // x: 32.16,
            // y: 1.4740000000000002,
            // w: 3.445,
            // sw: 0.32553125,
            // clr: -1,
            // A: 'left',
            // R: [
            //   {
            //     T: 'USCIS%20%20',
            //     S: -1,
            //     TS: [
            //       0,
            //       15,
            //       1,
            //       0,
            //     ],
            //   },
            // ],
// };
// const pdfPage = (props) => {

// };

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
