import React, {Component} from 'react'
import '../App.css';
import Info from './Info';
import Education from './Education';
import Experience from './Experience';

export default class App extends Component {
  // eslint-disable-next-line no-useless-constructor
  constructor () {
    super();

    this.state = {
      display: 'form',
      info: {
        name: '',
        email: '',
        phoneNumber: ''
      }

    };

    this.onSubmitCV = this.onSubmitCV.bind(this);
    this.onClickEdit = this.onClickEdit.bind(this);
    this.onChangeInfoHandler = this.onChangeInfoHandler.bind(this);
  }

  onSubmitCV = (e) => {
    e.preventDefault();
    this.setState({
      display: 'info',
     
    })
  }

  onClickEdit = () => {
    this.setState({
      display: 'form'
    })
  }

  onChangeInfoHandler = (e) => {
    const { value } = e.target;
    this.setState({
      info: {
        ...this.state.info,
        [e.target.id]: value
      }
    })
  }


  render() {
    const { display } = this.state

    // if display is 'form' we want the form display so we can edit, otherwise the info is printed
    if(display === 'form') {
      return (
        <div>
          <form onSubmit={this.onSubmitCV}>
            <Info display={display} info={this.state.info} handler={this.onChangeInfoHandler}/>
            <input type="submit" value='Submit Info'/>
          </form>
        </div>
      );
    }
    else if(display === 'info') {
      return (
        <div>
          <Info display={display} info={this.state.info}/>
          <button type="click" onClick={this.onClickEdit}>Edit CV</button>
        </div>
      )
    }
  }
}
