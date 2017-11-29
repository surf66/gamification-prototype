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
    tasks: state.tasks,
  }
}

export class YourCars extends React.Component {
  render() {
    return (
      <p>YourCars</p>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(YourCars);