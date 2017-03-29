import React from 'react';

const SsHeader = (props) => {
  const routing = props.routes.map(item => (<div key={item.toString()}>{item}</div>));
  return <nav> {routing} </nav>;
};

export default SsHeader;

