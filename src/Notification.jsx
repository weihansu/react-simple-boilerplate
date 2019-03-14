import React, {Component} from 'react';

class Notification extends Component {
  render() {

    console.log('render <Notification />');

    return (
      <div className="notification">
        <span className="notification-content">{this.props.notification}</span>
      </div>
      )

  }
}

export default Notification;