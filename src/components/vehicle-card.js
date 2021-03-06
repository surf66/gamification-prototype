import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { completeTask, setNotification } from '../actions/index';

function mapDispatchToProps(dispatch) {
  return ({
    completeTask: bindActionCreators(completeTask, dispatch),
    setNotification: bindActionCreators(setNotification, dispatch)
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
    this._enquire = this._enquire.bind(this);
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
        {!this.props.hideCtas &&
          <div>
            <button className="secondary fixed-width spacer" onClick={this._addToShortlist}>
              <div className="icon">
                <svg className="fill-dark-blue">
                  <title>Favourite</title>
                  <use xlinkHref="#icon-favourite"></use>
                </svg>
              </div>
              <span>Add Favourite</span>
            </button>
            <button className="fixed-width" onClick={this._enquire}>Enquire</button>
          </div>
        }
      </div>
    );
  }

  _addToShortlist() {
    this.props.completeTask('shortlistVehicle');
    this.props.setNotification({ message: 'Added to Your Cars', iconName: 'favourited' });
  }

  _enquire() {
    this.props.completeTask('vehicleEnquiry');
    this.props.setNotification({ message: 'Enquiry sent', iconName: 'tick' });
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(VehicleCard);