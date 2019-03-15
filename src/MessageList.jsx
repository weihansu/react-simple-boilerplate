import React, {Component} from 'react';
import Notification from './Notification.jsx';

class Message extends Component {

  render() {
    console.log("render <MessageList />");

    const userMessages = this.props.message.map((message, index) => (
      <div key={index}>
      {!message.username && <Notification notification={message} />}
      <div className="message">
        <span className="message-username" style={{color: message.color}}>{message.username}</span>
        <span className="message-content">{message.content}</span>
      </div>
      {(message.username && message.content.match(/(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|gif|png)/g))
        &&
        <div className="message-img">
          <img src={message.content.match(/(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|gif|png)/g)[0]} />
        </div>
      }
      </div>
      )
    );

    return (
      <main className="messages">
        {userMessages}
      </main>
      );
  };
};

export default Message;