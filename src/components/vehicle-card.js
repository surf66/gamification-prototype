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

export class VehicleCard extends React.Component {
  constructor(props) {
    super(props);

    this._addToShortlist = this._addToShortlist.bind(this);
  }

  render() {
    return (
      <div className="vehicle-card">
        <div className="vehicle-thumb">
          <img src="https://i.atcdn.co.uk/imgser-uk/servlet/media?id=be13ed4bfbc54f6c9b49278ef123ecbe&width=1024&height=768" alt="Range Rover Evoque"/>
        </div>
        <div className="vehicle-content">
          <span className="vehicle-price">£8400</span>
          <h4>Range Rover Evoque</h4>
          <ul className="inline-list">
            <li>2006</li>
            <li>Automatic</li>
            <li>Petrol</li>
            <li>113,976 miles</li>
          </ul>
          <div className="vehicle-footer">
            <div className="icon vehicle-mileage">
              <svg className="fill-light-blue">
                <title>Location</title>
                <use xlinkHref="#icon-location"></use>
              </svg>
              <span className="vehicle-distance">6 miles</span>
            </div>
            <a className="add-favourite">
              <div className="icon">
                <svg className="fill-dark-grey">
                  <title>Favourite</title>
                  <use xlinkHref="#icon-favourite"></use>
                </svg>
              </div>
            </a>
          </div>
        </div>
        <button className="secondary fixed-width" onClick={this._addToShortlist}>
          <div className="icon">
            <svg className="fill-dark-blue">
              <title>Favourite</title>
              <use xlinkHref="#icon-favourite"></use>
            </svg>
          </div>
          <span>Add Favourite</span>
        </button>
      </div>
    );
  }

  _addToShortlist() {
    this.props.completeTask("shortlistVehicle");
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(VehicleCard);