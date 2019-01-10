import React, { Component } from 'react';
import Google from './GoogleLogin.js';
import Facebook from './FacebookLogin.js';
import ReactModal from 'react-modal';

class SignIn extends Component {
  constructor () {
    super();
    this.state = {
      showModal: false
    };
    
    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }
  componentDidMount () {
    
  }
  
  handleOpenModal () {
    this.setState({ showModal: true });
  }
  
  handleCloseModal () {
    this.setState({ showModal: false });
  }
  render() {
    
    return (
      <div>
      <button onClick={this.handleOpenModal}>Sign In Here!!</button>
      <ReactModal 
         ariaHideApp={false}
         isOpen={this.state.showModal}
         contentLabel="Social Media Login"
      >
      <Google /><br />
      <Facebook /><br />
        <button onClick={this.handleCloseModal}>Close Window</button>
      </ReactModal>
    </div>
    )
  } 
}
export default SignIn;