import React, {Component} from 'react';

class Message extends Component {

  render() {
    const userName = this.props.message.currentUser;
    const userMessages = this.props.message.messages.map((message, index) => (
      <div className="message" key={index}>
      <span className="message-username">{message.username}</span>
      <span className="message-content">{message.content}</span>
      </div>
      ));

    return (
      <main className="messages">
        {userMessages}
      </main>
      )
  }
};

export default Message;