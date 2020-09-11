import React,  {Component} from 'react';

class Test extends Component {
	state = {
		count:0
	}
	render() {
		return (
			<div>
				<button onClick={() => this.setState({count:this.state.count + 1})}>Click Me </button>
				<p>Counter: {this.state.count}</p>
			</div>
		);
	}
}
export default Test;