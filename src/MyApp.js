import React from 'react';
import PDF from './data/pdf';

const PdfPageList = (props) => {
  const pages = props.items.map(item => (
    <li>
      {decodeURIComponent(item.R[0].T)}
    </li>
  ));

  return <ul>{pages}</ul>;
};

const MyApp = () => (
  <PdfPageList
    items={PDF.formImage.Pages[0].Texts}
  />
);

export default MyApp;
