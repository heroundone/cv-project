import React, { Component } from 'react';
import '../styles/Education.css';

export default class Education extends Component {
// eslint-disable-next-line no-useless-constructor
  constructor () {
    super();
  }

  
  render() {
    const { display, education, handler } = this.props;
    // get today's date info
    const d = new Date();
    const year = d.getFullYear();
    const month = d.getMonth();
    const day = d.getDate();
    const date = year + '-' + month + '-' + day;
    
    if(display === 'form') {
      return (
        <div>
          <h2><u>Education</u></h2>
          <div id="educationForm">
            <label htmlFor="schoolName">School Name: </label>
            <input id="schoolName" name="education" type="text" required value={education.schoolName} onChange={handler}/>
            <label htmlFor="topicOfStudy">Topic of Study: </label>
            <input id="topicOfStudy" name="education" type="text" required value={education.topicOfStudy} onChange={handler}/>
            <label htmlFor="startDate">Start Date: </label>
            <input id="startDate" name="education" type="date" required value={education.startDate} onChange={handler}/>
            <label htmlFor="endDate">End Date: </label>
            <input id="endDate" name="education" type="date" max={date} required value={education.endDate} onChange={handler}/>
          </div>
        </div>
      );
    }
    else if(display === 'info') {
      return (
        <div>
          <h2><u>Education</u></h2>
            <p>School: {education.schoolName}</p>
            <p>Studied: {education.topicOfStudy}</p>
            <p>Started: {education.startDate}</p>
            <p>Finished: {education.endDate}</p>
        </div>
      )
    }
  }
}

