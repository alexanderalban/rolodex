import React, { Component } from 'react';
import axios from 'axios';
import logo from './logo.svg';
import './App.css';

import ContactCard from './ContactCard';
import SmallContactCard from './SmallContactCard';

class App extends Component {

  constructor() {
    super()

    this.state = {
      arrayOfContacts: [],
      isHidden: true
    }
  }


  componentDidMount() {
    axios.get('https://randomuser.me/api?results=25')
      .then( res => {
        const arrayOfContacts = res.data.results
        console.log("axios", arrayOfContacts)
        this.setState({ arrayOfContacts })
      })
  }

  detailToggle = () => {
    let hidden = this.state.isHidden;
    if (hidden === true) {
      this.setState({isHidden: false})
    } else {
      this.setState({isHidden: true})
    }
  }

  render() {
    if (this.state.isHidden === true) {
      console.log("State Hidden", this.state.isHidden)
      return (
        <div className="App">
      <header className="App-header">
        {console.log("results", this.state.arrayOfContacts)}
        <div>
        <button onClick={this.detailToggle}>BUTTON</button>
        <ol>{this.state.arrayOfContacts.map((contact, index) => {
          return (
            <SmallContactCard key={index}
            firstName={contact.name.first}
            lastName={contact.name.last}
            picture={contact.picture.large}
            >
          </SmallContactCard>
        )  
      })}</ol>
      </div>
      </header>
    </div>
  );
      } else {
        return (
          <div className="App">
      <header className="App-header">
        {console.log("results", this.state.arrayOfContacts)}
        <div>
          <button onClick={this.detailToggle}>BUTTON</button>
        <ol>{this.state.arrayOfContacts.map((contact, index) => {
          return (
            
            <ContactCard key={index}
            firstName={contact.name.first}
            lastName={contact.name.last}
            picture={contact.picture.large}
            phone={contact.phone}
            cell={contact.cell}
            email={contact.email}
            city={contact.location.city}
            state={contact.location.state}
            country={contact.location.country}
            >
          </ContactCard>
        )  
      })}</ol>
      </div>
      </header>
    </div>
  );
        
      }
}
}

export default App;