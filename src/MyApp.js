import React from 'react';
import ReactDOM from 'react-dom';
// import Router from 'react-router-dom';
import { formSections } from './components/firebase';
import SectionList from './components/sectionList';
import Layout from './components/layout';
// import SimpleBottomNavigation from './components/bottomNav';
import ButtonAppBar from './components/header';
import PaperSheet from './components/paperSheet';
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
      <div>
        <ButtonAppBar />
        <SectionList items={this.state.sections} />
      </div>
    );
  }
}

export default MyApp;
