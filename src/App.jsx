import React, {Component} from 'react';
import Message from './Message.jsx';
import ChatBar from './ChatBar.jsx';
import NavBar from './NavBar.jsx';


class App extends Component {
  componentDidMount(){
    console.log('componentDidMount');
  }
  render() {
    return (
      <div>
        <NavBar />
        <Message />
        <ChatBar />
      </div>
    );
  }
}
export default App;
