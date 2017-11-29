import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { completeTask } from '../actions/index';

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
    let taskKeys = Object.keys(this.props.tasks);
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
        <h1>Your tasks</h1>

        <p className="large">{numberOfCompletedTasks} out of {numberOfTasks} tasks completed</p>
        <div className="elevated-panel">

          {this.props.tasks.getPreApproved ? 
          <p>
            <div className="icon">
              <svg>
                <title>Approved</title>
                <use xlinkHref="#icon-approved"></use>
              </svg>
            </div>

            <strike>Become pre-approved for your finance</strike>
          </p>
          :
          <p>
            <div className="icon">
              <svg>
                <title>Approved</title>
                <use xlinkHref="#icon-approved"></use>
              </svg>
            </div>

            Become pre-approved for your finance
          </p>
          }

          {this.props.tasks.speakToSalesAdvisor ? 
            <p>
              <div className="icon">
                <svg>
                  <title>Approved</title>
                  <use xlinkHref="#icon-approved"></use>
                </svg>
              </div>
              <strike>Contact your sales advisor</strike>
            </p> 
            : 
            <p>
              <div className="icon">
                <svg>
                  <title>Approved</title>
                  <use xlinkHref="#icon-approved"></use>
                </svg>
              </div>
              Contact your sales advisor
            </p> 
          }
          {this.props.tasks.shortlistVehicle ? 
            <p>
              <div className="icon">
                <svg>
                  <title>Approved</title>
                  <use xlinkHref="#icon-approved"></use>
                </svg>
              </div>
              <strike>Add a vehicle to your shortlist</strike>
            </p> 
            :
            <p>
              <div className="icon">
                <svg>
                  <title>Approved</title>
                  <use xlinkHref="#icon-approved"></use>
                </svg>
              </div>
              Add a vehicle to your shortlist
            </p> 
          }
          {this.props.tasks.vehicleEnquiry ? 
            <p>
              <div className="icon">
                <svg>
                  <title>Approved</title>
                  <use xlinkHref="#icon-approved"></use>
                </svg>
              </div>
              <strike>Enquire about a vehicle</strike>
            </p> 
            : 
            <p>
              <div className="icon">
                <svg>
                  <title>Approved</title>
                  <use xlinkHref="#icon-approved"></use>
                </svg>
              </div>
              Enquire about a vehicle
            </p> 
          }
          {this.props.tasks.uploadUtilityBill ? 
            <p>
              <div className="icon">
                <svg>
                  <title>Approved</title>
                  <use xlinkHref="#icon-approved"></use>
                </svg>
              </div>
              <strike>Upload a utility bill so we can verify your bank account</strike>
            </p> 
            :
            <p>
              <div className="icon">
                <svg>
                  <title>Approved</title>
                  <use xlinkHref="#icon-approved"></use>
                </svg>
              </div>
              Upload a utility bill so we can verify your bank account
            </p> 
          }
          {this.props.tasks.uploadPhotoId ? 
            <p>
              <div className="icon">
                <svg>
                  <title>Approved</title>
                  <use xlinkHref="#icon-approved"></use>
                </svg>
              </div>
              <strike>Upload a photo of yourself for identification</strike>
            </p> 
            :
            <p>
              <div className="icon">
                <svg>
                  <title>Approved</title>
                  <use xlinkHref="#icon-approved"></use>
                </svg>
              </div>
              Upload a photo of yourself for identification
            </p> 
          }
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Tasks);