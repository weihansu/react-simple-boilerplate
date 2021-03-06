import React, {Component} from 'react';
import Message from './MessageList.jsx';
import ChatBar from './ChatBar.jsx';
import NavBar from './NavBar.jsx';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: "Anonymous",
      oldUser: "Anonymous",
      messages: [],
      totalUsers: 0
    };
    this._handleMessage = this._handleMessage.bind(this);
    this._handleChange = this._handleChange.bind(this);
  };

  _handleChange(e) {
    this.setState({
      currentUser: e.target.value
    });
  };

  _handleMessage(e) {
    if (e.keyCode === 13) {
      const newMessage = {
        username: this.state.currentUser,
        content: e.target.value,
      }

      if (this.state.currentUser !== this.state.oldUser) {
        const noticationMessage = `${this.state.oldUser} changed their name to ${this.state.currentUser}`
        this.socket.send(JSON.stringify({
          type: 'postNotification',
          data: noticationMessage
        }));
      };

      this.socket.send(JSON.stringify({
        type: 'postMessage',
        data: newMessage
        })
      );

      e.target.value = '';
      this.setState({
        oldUser: this.state.currentUser
      });

    };
  };

  componentDidMount() {
    console.log("componentDidMount <App />");

    // Create WebSocket connection.
    this.socket = new WebSocket("ws://localhost:3001");
    // Connection opened
    this.socket.addEventListener('open', (e) => {
      console.log('Connected to server')
    });

    // Listen for messages
    this.socket.addEventListener('message', (event) => {
      const serverMessage = JSON.parse(event.data);
      const typeMessage = serverMessage.type;
      const newMessage = serverMessage.data;

      switch (typeMessage) {
        case 'incomingUsers':
          this.setState({totalUsers: serverMessage.connections});
          break;
        case 'incomingNotification':
          this.setState({messages: [newMessage, ...this.state.messages]});
          break;
        default:
          this.setState({messages: [newMessage, ...this.state.messages]});
          break;
      };

    });
  }

  render() {
    console.log("render <App />");

    return (
      <div>
        <NavBar totalUsers={this.state.totalUsers} />
        {(this.state.messages.length > 0) && <Message message={this.state.messages}/>}
        <ChatBar defaultValue={this.state.currentUser} sendMessage={this._handleMessage} sendName={this._handleChange}/>
      </div>
    );
  };
};

export default App;
