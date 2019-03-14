import React, {Component} from 'react';
import Notification from './Notification.jsx';
// import Messages from './Message.jsx';  message.username

class Message extends Component {

  render() {
    console.log("render <MessageList />");
    const userMessages = this.props.message.map((message, index) => (
      <div className="message" key={index}>
      {!message.username && <Notification notification={message} />}
      <span className="message-username">{message.username}</span>
      <span className="message-content">{message.content}</span>
      </div>
      )
    );

    return (
      <main className="messages">
        {userMessages}
      </main>
      )
  }
};

export default Message;