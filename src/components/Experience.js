import React, { Component } from 'react';
import '../styles/Experience.css';

export default class Experience extends Component {
    // eslint-disable-next-line no-useless-constructor
  constructor () {
    super();
  }

  
  render() {
    const { display, experience, handler } = this.props;
    // get today's date info
    const d = new Date();
    const year = d.getFullYear();
    const month = d.getMonth();
    const day = d.getDate();
    const date = year + '-' + month + '-' + day;

    if(display === 'form') {
      return (
        <div>
          <h2><u>Experience</u></h2>
          <div id="experienceForm">
            <label htmlFor="companyName">Company Name: </label>
            <input id="companyName" name="experience" type="text" required value={experience.job.companyName} onChange={handler}/>
            <label htmlFor="positionTitle">Title of Position</label>
            <input id="positionTitle" name="experience" type="text" required value={experience.job.positionTitle} onChange={handler}/>
            <label htmlFor="mainTasks">Main Tasks: </label>
            <textarea id="mainTasks" name="experience" cols="15" rows="15" required value={experience.job.mainTasks} onChange={handler}/>
            <label htmlFor="startDate">Start Date: </label>
            <input id="startDate" name="experience" type="date" required value={experience.job.startDate} onChange={handler}/>
            <label htmlFor="endDate">End Date: </label>
            <input id="endDate" name="experience" type="date" max={date} required value={experience.job.endDate} onChange={handler}/>
          </div>
        </div>
      );
    }
    else if(display === 'info') {
      return (
        <div>
         <h2><u>Experience</u></h2>
         <p>Company Name: {experience.job.companyName}</p>
         <p>Title of Position: {experience.job.positionTitle}</p>
         <p id="jobDescription">Main Tasks: {experience.job.mainTasks}</p>
         <p>Started: {experience.job.startDate}</p>
         <p>Ended: {experience.job.endDate}</p>

        </div>
      )
    }
  }
}
