import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { completeTask } from '../actions/index';
import VehicleCard from './vehicle-card';

function mapDispatchToProps(dispatch) {
  return ({
    completeTask: bindActionCreators(completeTask, dispatch)
  })
}

function mapStateToProps(state) {
  return {
    tasks: state.tasks,
  }
}

export class Search extends React.Component {
  render() {
    return (
      <VehicleCard />
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Search);