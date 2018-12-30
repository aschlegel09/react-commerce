import React, { Component } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Profile from './components/Profile';
import Container from './components/Container';
import Blog from './components/Blog';
import Product from './components/Product';
import Button from './components/Button';
import { Widget, addResponseMessage } from 'react-chat-widget';
import Google from './components/GoogleLogin';
import Facebook from './components/FacebookLogin';
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

  constructor() {
    super();
    this.state = { isAuthenticated: false, user: null, token: '' };
  }

  logout = () => {
    this.setState({ isAuthenticated: false, token: '', user: null })
  };

  responseGoogle = (response) => {
    console.log(response);
}

  onFailure = (error) => {
    alert(error);
  }

  render() {
    let signInModal = !!this.state.isAuthenticated ?
            (
                <div>
                    <p>Authenticated</p>
                    <div>
                        {this.state.user.email}
                    </div>
                    <div>
                        <button onClick={this.logout} className="button">
                            Log out
                        </button>
                    </div>
                </div>
            ) :
            (
                <div>
                    <Facebook />
                    <Google />
                </div>
            );

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
              { signInModal }
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
