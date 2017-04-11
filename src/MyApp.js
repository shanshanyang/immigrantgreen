import React from 'react';
import { sections } from './components/firebase';
import SectionList from './components/sectionList';
import './app.css';

// page navigation
// const routes = ['/about', '/contact'];

class MyApp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      sections: [],
    };
  }

  componentDidMount() {
    sections.once('value').then((snapshot) => {
      const sectionVal = [];
      snapshot.forEach((childSnapshot) => {
        sectionVal.push(childSnapshot.val());
      });
      this.setState({
        sections: sectionVal,
      });
    });

    // fields.once('value').then((snapshot) => {
    //   const filedsVal = [];
    //   snapshot.forEach((childSnapshot) => {
    //     filedsVal.push(childSnapshot.val());
    //   });
    //   this.setState({
    //     fields: filedsVal,
    //   });
    // });
  }

  render() {
    return <SectionList items={this.state.sections} />;
  }
}

export default MyApp;
