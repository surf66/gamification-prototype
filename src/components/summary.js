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

export class Summary extends React.Component {
  render() {
    return (
      <div>
        <p>Summary</p>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Summary);