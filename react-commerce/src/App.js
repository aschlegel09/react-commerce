import React, { Component } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Profile from './components/Profile';
import Container from './components/Container';
import Blog from './components/Blog';
import Product from './components/Product';
import Button from './components/Button';
import { Widget, addResponseMessage } from 'react-chat-widget';

import 'react-chat-widget/lib/styles.css';

import logo from './logo.svg';

class App extends Component {
  componentDidMount() {
    addResponseMessage("Welcome to our chat! How can I assist you today?");
  }

  handleNewUserMessage = (newMessage) => {
    console.log(`New message incoming! ${newMessage}`);
    // addResponseMessage(response);
  }

  render() {
    return (
      <div className="App">
        <div>
          <Navbar />
        </div>
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-2 d-none d-md-block bg-light sidebar">
              <Profile />
            </div>
            <div className="col-md-9">
              <Container />
              <div className="mt-2">
                <Blog />
                <Product />
                <Button />
              </div>
              <Widget
                handleNewUserMessage={this.handleNewUserMessage}
                profileAvatar={logo}
                title="My New Title of Chat"
                subtitle="And subtitle"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
