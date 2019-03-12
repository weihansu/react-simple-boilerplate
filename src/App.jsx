import React, {Component} from 'react';
import Message from './MessageList.jsx';
import ChatBar from './ChatBar.jsx';
import NavBar from './NavBar.jsx';
import Messages from './Message.jsx';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: "Your Name (Optional)",
      messages: Messages
    };
  }
  componentDidMount(){
    //console.log(this.state.messages.currentUser ? 'TRUE':'FALSE');
  }
  render() {
    const userExist = this.state.messages.currentUser
      ?
      <ChatBar defaultValue={this.state.messages.currentUser.name}/>
      :
      <ChatBar defaultValue={this.state.currentUser}/>;
    return (
      <div>
        <NavBar />
        <Message message={this.state.messages}/>
        {userExist}

      </div>
    );
  }
}
export default App;
