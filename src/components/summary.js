import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { completeTask } from '../actions/index';
import VehicleCard from './vehicle-card';
import ProfileCircle from './profile-circle';
import './summary.css';

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

export class Summary extends React.Component {

  constructor() {
    super();
    this._getCurrentTime = this._getCurrentTime.bind(this);
    this._formatDate = this._formatDate.bind(this);
  }

  render() {
    return (
      <div>
        <ProfileCircle />
        {this.props.tasks.shortlistVehicle ? (
          <section>
            <h3>Vehicles you like</h3>
            <VehicleCard hideCtas={true} />
          </section>
        ) : (
          <section>
            <h3>Vehicles you like</h3>
            <p>Vehicles you favourite will appear here</p>
          </section>
        )}
        {this.props.tasks.vehicleEnquiry ? (
          <section>
            <h3>Enquiries you've made</h3>
            <p className="large">Your sales advisor will see these and be in touch.</p>
            <div>
              <strong>Range Rover Evoque, 2006</strong>
              <p className="small text-dark-grey">Enquiry sent {this._getCurrentTime()}</p>
            </div>
          </section>
        ) : (
          <section>
            <h3>Enquiries you've made</h3>
            <p className="large">Any vehicle enquires you make will appear here</p>
          </section>
        )}
      </div>
    );
  }

  _getCurrentTime() {
    let d = new Date();
    let e = this._formatDate(d);
    return e;
  }

  _formatDate(date) {
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var ampm = hours >= 12 ? 'pm' : 'am';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? '0'+minutes : minutes;
    var strTime = hours + ':' + minutes + ' ' + ampm;
    return date.getMonth()+1 + "/" + date.getDate() + "/" + date.getFullYear() + " at " + strTime;
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Summary);