import React, {Component} from 'react';
import Message from './MessageList.jsx';
import ChatBar from './ChatBar.jsx';
import NavBar from './NavBar.jsx';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: "Your Name (Optional)",
      messages: []
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    if (e.keyCode === 13) {

      const newMessage = {
        username: 'Bob',
        content: e.target.value
      }
      this.socket.send(JSON.stringify(newMessage));
      e.target.value = '';

    }
  }

  componentDidMount() {
    console.log("componentDidMount <App />");

    // Create WebSocket connection.
    this.socket = new WebSocket("ws://localhost:3001");
    // Connection opened
    this.socket.addEventListener('open', (e) => {
      console.log('Connected to server')
    })

    // Listen for messages
    // other way to listen => this.socket.onmessage = (event) => {
    this.socket.addEventListener('message', (event) => {
      let dataMessage = JSON.parse(event.data)

      // code to handle incoming message
      const newMessage = dataMessage.data;
      this.setState({messages: [newMessage, ...this.state.messages]});


    })
  }

  render() {
    console.log("render <App />");

    return (
      <div>
        <NavBar />
        {(this.state.messages.length > 0) && <Message message={this.state.messages}/>}

        <ChatBar defaultValue={this.state.currentUser} sendMessage={this.handleChange}/>

      </div>
    );
  }
}

export default App;
