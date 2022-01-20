import React, { Component } from 'react'

export default class Info extends Component {

// eslint-disable-next-line no-useless-constructor
  constructor () {
    super();
}
  
  render() {
    const { info, handler, display } = this.props;
    if(display === 'form') {
        return (
          <div>
            <h2><u>Personal Information</u></h2>
            <label htmlFor="name">Full Name: </label>
            <input id="name" name="info" type="text" required value={info.name} onChange={handler}/>
            <label htmlFor="email">Email: </label>
            <input id="email" name="info" type="email" required value={info.email} onChange={handler}/>
            <label htmlFor="phoneNumber">Phone Number: </label>
            <input id="phoneNumber" name="info" type="text" pattern="\(?\d{3}\)?[ -]?\d{3}[ -]?\d{4}" required value={info.phoneNumber} onChange={handler}/>
          </div>
        );
    }
    else if(display === 'info') {
        return (
        <div>
            <h2><u>Personal Information</u></h2>
            <p>Name: {info.name}</p>
            <p>Email: {info.email}</p>
            <p>Phone Number: {info.phoneNumber}</p>
        </div>
        )
    }
    }
    
  }