var React = require('react');

class Popular extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			selectedLanguage: 'All'
		};
		this.updateLanguague = this.updateLanguague.bind(this); // We want updateLanguage function always be 
																// called at the right context, 'this' React component
	}

	updateLanguague(lang){
		this.setState(function(){
			return{
				selectedLanguage: lang
			}
		});
	}
	
	render(){
		var languages = ['All','Javascript','Ruby','Java','CSS','Python'];
		console.log('Up here!', this); // React component refer to 'this'
		return(
			<ul className='languages'>
				{languages.map(function(lang){
					console.log('Down there!', this); //undefined
					return(
						<li style={ lang === this.state.selectedLanguage ? {color: '#d0021b'} : null }
							onClick={this.updateLanguague.bind(null, lang)} 
							key={lang}>
							{lang}
						</li>
						)
					}, this) // passing 'this' keyword as second argument -- context of function (the first argument)
				} 
			</ul>
		)
	}
}

module.exports = Popular;
