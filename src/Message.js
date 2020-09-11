import React from 'react';
import './Message.css';

function Message (props){
	const authUser = props.psr === props.userName
	return(
		<div className = 'chat'>
			<div className={authUser ? 'chat1' : 'chat2'}>
				<p><i>{props.userName}</i> : <b><big>{props.message}</big></b></p>
			</div>
		</div>
	);
}
export default Message;