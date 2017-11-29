import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { completeTask } from '../actions/index';
import ProfileCircle from './profile-circle';
import './tasks.css';

function mapDispatchToProps(dispatch) {
  return ({
    completeTask: bindActionCreators(completeTask, dispatch)
  })
}

function mapStateToProps(state) {
  return {
    tasks: state.tasks
  }
}

export class Tasks extends React.Component {
  render() {
    let tasks = this.props.tasks;
    let numberOfTasks = Object.keys(tasks).length;
    let taskKeys = Object.keys(tasks);
    let completedTasks = taskKeys.filter(function(key) {
      return tasks[key]
    });
    let numberOfCompletedTasks = completedTasks.length;

    let svgStyles = {
      display: 'block', 
      width: '100%'
    }

    return (
      <div>
        <ProfileCircle />
        <p className="text-dark-grey text-center">{numberOfCompletedTasks} out of {numberOfTasks} tasks completed</p>
        <section>
          <p className={`${this.props.tasks.getPreApproved ? ' complete' : ''}`}>
            <div className={`icon tasks circle ${this.props.tasks.getPreApproved ? 'background-dark-green' : 'background-light-grey'}`}>
              <svg className={`${this.props.tasks.getPreApproved ? 'fill-white' : 'fill-light-grey'}`}>
                <title>Approved</title>
                <use xlinkHref="#icon-curved-tick"></use>
              </svg>
            </div>
            Get pre-approved for finance
          </p>
          <p className={`${this.props.tasks.speakToSalesAdvisor ? ' complete' : ''}`}>
            <div className={`icon tasks circle ${this.props.tasks.speakToSalesAdvisor ? 'background-dark-green' : 'background-light-grey'}`}>
              <svg className={`${this.props.tasks.speakToSalesAdvisor ? 'fill-white' : 'fill-light-grey'}`}>
                <title>Approved</title>
                <use xlinkHref="#icon-curved-tick"></use>
              </svg>
            </div>
            Speak with your sales advisor
          </p>
          <p className={`${this.props.tasks.shortlistVehicle ? ' complete' : ''}`}>
            <div className={`icon tasks circle ${this.props.tasks.shortlistVehicle ? 'background-dark-green' : 'background-light-grey'}`}>
              <svg className={`${this.props.tasks.shortlistVehicle ? 'fill-white' : 'fill-light-grey'}`}>
                <title>Approved</title>
                <use xlinkHref="#icon-curved-tick"></use>
              </svg>
            </div>
            Add a vehicle to your shortlist
          </p>
          <p className={`${this.props.tasks.vehicleEnquiry ? ' complete' : ''}`}>
            <div className={`icon tasks circle ${this.props.tasks.vehicleEnquiry ? 'background-dark-green' : 'background-light-grey'}`}>
              <svg className={`${this.props.tasks.vehicleEnquiry ? 'fill-white' : 'fill-light-grey'}`}>
                <title>Approved</title>
                <use xlinkHref="#icon-curved-tick"></use>
              </svg>
            </div>
            Send a vehicle enquiry
          </p>
          <p className={`${this.props.tasks.uploadUtilityBill ? ' complete' : ''}`}>
            <div className={`icon tasks circle ${this.props.tasks.uploadUtilityBill ? 'background-dark-green' : 'background-light-grey'}`}>
              <svg className={`${this.props.tasks.uploadUtilityBill ? 'fill-white' : 'fill-light-grey'}`}>
                <title>Approved</title>
                <use xlinkHref="#icon-curved-tick"></use>
              </svg>
            </div>
            Upload a utility bill so we can verify your bank account
          </p>
          <p className={`${this.props.tasks.uploadPhotoId ? ' complete' : ''}`}>
            <div className={`icon tasks circle ${this.props.tasks.uploadPhotoId ? 'background-dark-green' : 'background-light-grey'}`}>
              <svg className={`${this.props.tasks.uploadPhotoId ? 'fill-white' : 'fill-light-grey'}`}>
                <title>Approved</title>
                <use xlinkHref="#icon-curved-tick"></use>
              </svg>
            </div>
            Upload a photo of yourself so we can properly identify you
          </p>
        </section>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Tasks);