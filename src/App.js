import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { completeTask } from './actions/index';
import './App.css';

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

export class App extends React.Component {

  constructor(props) {
    super(props);
    console.log(props);
  }

  render() {
    return (
      <div>
        <p>Gamification</p>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
