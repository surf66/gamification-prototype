import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { clearNotification } from '../actions/index';

function mapDispatchToProps(dispatch) {
  return ({
    clearNotification: bindActionCreators(clearNotification, dispatch)
  })
}

function mapStateToProps(state) {
  return {
    notifications: state.notifications,
  }
}

export class Notification extends React.Component {

  constructor(props) {
    super(props);
    
    this.notificationOffsetHeight = 46;
    this.animateOutDuration = 3000;
    this.animateOutNotificationTimeout = undefined;
    this.hideNotificationDuration = 600;
    this.hideNotificationTimeout = undefined;
    
    this.state = {
      isVisible: undefined
    };
  }

  componentWillReceiveProps(nextProps) {
    if(!nextProps.notifications) {
      return;
    }

    if(this.state.isVisible) {
      this.setState({ isVisible: false });
      clearTimeout(this.debounceTimeout);
      this.debounceTimeout = setTimeout(() => { this._showNotification(nextProps.notifications) }, 450);
      return;
    }
    this._showNotification(nextProps.notifications);
  }

  render() {
    return (
      <div className={`notifications ${this.state.isVisible ? '' : 'closed'} text-center text-white`}>
        <div className="icon">
          <svg className="fill-white">
            <title>{this.iconName}</title>
            <use xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref={`#icon-${this.iconName}`}></use>
          </svg>
        </div>
        <span>{this.message}</span>
      </div>
    );
  }

  _showNotification(notification) {
    this.message = notification.message;
    this.iconName = notification.iconName;

    this.setState({ isVisible: true });

    clearTimeout(this.animateOutNotificationTimeout);
    this.animateOutNotificationTimeout = setTimeout(() => {
      this._animateOutNotification();
      clearTimeout(this.hideNotificationTimeout);
      this.hideNotificationTimeout = setTimeout(() => {
        this._hideNotification();
        this.props.clearNotification();
      }, this.hideNotificationDuration);

    }, this.animateOutDuration);
  }

  _animateOutNotification() {
    this.setState( { isVisible: false } );
  }

  _hideNotification() {
    this.message = undefined;
    this.iconName = undefined;
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Notification);