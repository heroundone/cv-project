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
            <label htmlFor="name">Full Name:</label>
            <input id="name" type="text" required value={info.name} onChange={handler}/>
            <label htmlFor="email">Email:</label>
            <input id="email" type="email" required value={info.email} onChange={handler}/>
            <label htmlFor="phoneNumber">Phone Number:</label>
            <input id="phoneNumber" type="text" required value={info.phoneNumber} onChange={handler}/>
          </div>
        );
    }
    else if(display === 'info') {
        return (
        <div>
            <p>{info.name}</p>
            <p>{info.email}</p>
            <p>{info.phoneNumber}</p>
        </div>
        )
    }
    }
    
  }