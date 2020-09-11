import React, {useState} from 'react';
import { Quote } from './Quote';
import './Input.css';


const Input = (props) => {

	const [message, setMessage] = useState("I don't know the question, but the answer is sex.");
	const updateMessage = () => {

		setMessage(Quote[Math.floor(Math.random() * (40- 0) + 0)]);
	}

	return(
		<div>
			<button onClick={updateMessage}><b> Click for Quote </b></button><br/><br/><br/>
			<h3><i>{message}</i></h3>
		</div>
	);
}

export default Input