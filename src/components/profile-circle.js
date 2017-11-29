import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { completeTask } from '../actions/index';
import { setupVars, stepAnimation } from '../utils/draw-circle';
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

export class ProfileCircle extends React.Component {

  constructor() {
    super();

    this._calculateTaskCompletion = this._calculateTaskCompletion.bind(this);
  }

  componentDidMount() {
    this._drawCircle();
  }

  render() {

    return (
      <div className="profile">
        <canvas ref="circle" width="96" height="96">
        </canvas>
        <div class="icon user">
          <svg>
            <title>User</title>
            <use xlinkHref="#icon-user"></use>
          </svg>
        </div>
        <p><strong>Welcome back James</strong></p>
      </div>
    );
  }

  _drawCircle() {
    let percentComplete = this._calculateTaskCompletion();
    setupVars(this.refs.circle, percentComplete)
    stepAnimation();
  }

  _calculateTaskCompletion() {
    let tasks = this.props.tasks;
    let taskKeys = Object.keys(tasks);
    let totalTasks = taskKeys.length;
    let completedTasks = taskKeys.filter(function(key) {
      return tasks[key]
    });
    let numberOfCompletedTasks = completedTasks.length;

    return (numberOfCompletedTasks / totalTasks) * 100;
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfileCircle);