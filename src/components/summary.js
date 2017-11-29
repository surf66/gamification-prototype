import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { completeTask } from '../actions/index';
import VehicleCard from './vehicle-card';
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
  render() {
    return (
      <div>
        <div className="profile">
          <img className="profile-image" src="./images/james.png" alt="James" />
          <p><strong>Welcome back James</strong></p>
        </div>
        {this.props.tasks.shortlistVehicle &&
          <section>
            <VehicleCard />
          </section>
        }
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Summary);