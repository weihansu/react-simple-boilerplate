import React, {Component} from 'react';
import Messages from './Message.jsx';

class Message extends Component {

  render() {
    console.log("render <MessageList />");
    const userMessages = this.props.message.messages.map((message, index) => (
      <div className="message" key={index}>
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