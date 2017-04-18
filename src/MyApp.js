import React from 'react';
// import Router from 'react-router-dom';
import { formSections } from './components/firebase';
import SectionList from './components/sectionList';
import './app.css';

// * Implement Router: landing page - dropdown with form list; tutorial on how to use the site; 
// * select the form and display the entire form page


class MyApp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      sections: []
    };
  }

  componentDidMount() {
    let list = [];
    formSections.on('value', (snap) => {
      list = snap.val(); console.log(list, snap.key);
       this.setState({
        sections: list,
      });
    });
  }

  render() {
    return (
      <SectionList items={this.state.sections} />
    );
  }
}

export default MyApp;
