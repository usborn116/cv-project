import React, { Component } from "react";
import PersonalData from './components/PersonalData';
import Jobs from './components/Jobs';
import Education from './components/Education';

class App extends Component {
  constructor() {
    super();

    this.state = {
      personal: { 
        name: '',
        email: '',
        phone: ''
      },
    };
  };

  render() {
    const { personal } = this.state;

    return (
      <div>
        <PersonalData  />
        <Jobs />
        <Education />
      </div>
    );
  }
}

export default App;