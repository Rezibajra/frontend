import  React,{Component}  from 'react';
import { Widget, addResponseMessage } from 'react-chat-widget';
import 'react-chat-widget/lib/styles.css';
import Axios from 'axios';
import { async } from 'q';

export default class App extends Component {
  
    componentDidMount() {
      addResponseMessage("Minor Project!");
    }
      
    handleNewUserMessage = async(newMessage) => {
      console.log(`New message incoming! ${newMessage}`);
        // Now send the message throught the backend API
       const response= await Axios.post('https://fierce-coast-25055.herokuapp.com/msg',{
          userMsg: newMessage
        })
        console.log(response.data)
       addResponseMessage(response.data.msg);
    }

    render() {
      
      return (
        <div className="App">
          <Widget
            handleNewUserMessage={this.handleNewUserMessage}
            profileAvatar='/ncit.jpg'
            title="Welcome"
            subtitle=""
          />
          
          </div>
        );
      } 
    }
