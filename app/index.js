var React = require('react');
var ReactDOM = require('react-dom');
require('./index.css');

//state, lifecycle event, UI

class App extends React.Component {
	render(){
		return(
			<div>
				Hello World!
			</div>
		)
	}
}

ReactDOM.render(
	<App/>, //Invoke component
	document.getElementById('app')
);