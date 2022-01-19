import React, { Component } from 'react'

export default class Education extends Component {
// eslint-disable-next-line no-useless-constructor
  constructor () {
    super();
  }

  
  render() {
    const { display } = this.props;

    if(display === 'form') {
      return (
        <div>
          
        </div>
      );
    }
    else if(display === 'info') {
      return (
        <div>
            
        </div>
      )
    }
  }
}

