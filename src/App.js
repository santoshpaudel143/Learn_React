import React,  {useState, useEffect} from 'react';
import './App.css';
import Test from './Test.js';
import firebase from 'firebase';
import db from "./firebase";
import Message from './Message.js'

function App() {
  const [input, setInput] = useState('');
  const [message, setMessage] = useState([]);
  const [userName, setUserName] = useState('');

  useEffect(()=>{
    setUserName(prompt('Enter Your username'))
  },[]);

  useEffect(() => {
        // run once when the app component loads
    db.collection('message').orderBy('timestamp', 'asc').onSnapshot(snapshot => {
           setMessage(snapshot.docs.map(doc => ({id: doc.id, message: doc.data()})))
        });
    }, []);

  const sendMessage = (event)=> {
    event.preventDefault();
    db.collection('message').add({
      message: input,
      userName: userName,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    });
    setInput('');
  }

  return (
    <div className="App">
      <div className="title">
        <marquee direction = "Right" bgcolor="Blue" text = "Blue"><b><h1>The BOSS_ Chatting Group</h1></b></marquee>
      </div>
      <div id='div2'>
      {
        message.map(({id, message}) => {
          return (
            <Message psr={userName} userName={message.userName}
            message={message.message}/>
          );
        })
      }
      </div>
      <div id='div3'>
       <form>
          <input placeholder="Type your message" onChange={event => setInput (event.target.value)} value={input}/>
          <button onClick={sendMessage} disabled={!input}> Send </button>
      </form>
      </div>
    </div>
  );
}
export default App;
    
