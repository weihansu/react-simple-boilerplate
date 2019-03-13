import React, {Component} from 'react';
import Message from './MessageList.jsx';
import ChatBar from './ChatBar.jsx';
import NavBar from './NavBar.jsx';
import dataMessages from './Message.jsx';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: "Your Name (Optional)",
      messages: dataMessages
    };
  }
  componentDidMount() {
    console.log("componentDidMount <App />");
    setTimeout(() => {
      console.log("Simulating incoming message");

      // Add a new message to the list of messages in the data store
      const newMessage = {id: 3, username: "Michelle", content: "Hello there!"};
      // Update the state of the app component.
      // Calling setState will trigger a call to render() in App and all child components.
      dataMessages.messages.push(newMessage)
      this.setState({messages: dataMessages});
    }, 3000);
  }

  render() {
    console.log("render <App />");
    const userExist = this.state.messages.currentUser
      ?
      <ChatBar defaultValue={this.state.messages.currentUser.name}/>
      :
      <ChatBar defaultValue={this.state.currentUser}/>;

    return (
      <div>
        <NavBar />
        {this.state.messages && <Message message={this.state.messages}/>}

        {userExist}

      </div>
    );
  }
}

export default App;
