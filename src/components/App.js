import React, {Component} from 'react'
import '../styles/App.css';
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
      },
      education: {
        schoolName: '',
        topicOfStudy: '',
        startDate: '',
        endDate: ''
      },
      experience: {
        jobs: [],
        job: {
          companyName: '',
          positionTitle: '',
          mainTasks: '',
          startDate: '',
          endDate: ''
        }
      }

    };

    this.onSubmitCV = this.onSubmitCV.bind(this);
    this.onClickEdit = this.onClickEdit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  
  // brings up the created CV
  onSubmitCV = (e) => {
    e.preventDefault();
    this.setState({
      display: 'info',
     
    })
  }

  // brings up the form for editing
  onClickEdit = () => {
    this.setState({
      display: 'form'
    })
  }
  
  // handle changes in inputs within the inputs of the components, section refers to which component we are inside of
  handleChange = (e) => {
    const { value, name } = e.target;
    // 'experience' requires slightly different handling
    if(name === 'experience') {
      this.setState({
        [name]: {
          ...this.state[name],
          job: {
            ...this.state[name].job,
            [e.target.id]: value
          }
        }
      })
    }
    else {
      this.setState({
        [name]: {
          ...this.state[name],
          [e.target.id]: value
        }
      })
    }
  }


  render() {
    const { display } = this.state

    // if display is set to 'form' we want the form so we can edit, otherwise the info is displayed
    if(display === 'form') {
      return (
        <div id='cvFormContainer'>
          <form id="cvForm" onSubmit={this.onSubmitCV}>
            <Info display={display} info={this.state.info} handler={this.handleChange}/>
            <Education display={display} education={this.state.education} handler={this.handleChange}/>
            <Experience display={display} experience={this.state.experience} handler={this.handleChange}/>
            <input type="submit" value='Submit Info'/>
          </form>
        </div>
      );
    }
    else if(display === 'info') {
      return (
        <div id="infoContainer">
          <div id="info">
            <Info display={display} info={this.state.info}/>
            <Education display={display} education={this.state.education}/>
            <Experience display={display} experience={this.state.experience}/>
            <button type="click" onClick={this.onClickEdit}>Edit CV</button>
          </div>
        </div>
      )
    }
  }
}
