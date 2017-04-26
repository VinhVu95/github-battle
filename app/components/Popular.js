var React = require('react');
var PropTypes = require('prop-types');

function SelectLanguage(props){
	var languages = ['All','Javascript','Ruby','Java','CSS','Python'];
		
	return (<ul className='languages'>
			{languages.map(function(lang){
				console.log('Down there!', this); //undefined
				return(
					<li style={ lang === props.selectedLanguage ? {color: '#d0021b'} : null }
						onClick={props.onSelect.bind(null, lang)} 
						key={lang}>
						{lang}
					</li>
				)
			})} 
		</ul>
	)
}


SelectLanguage.propTypes = {
	selectedLanguage: PropTypes.string.isRequired,
	onSelect: PropTypes.func.isRequired
};

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
		
		console.log('Up here!', this); // React component refer to 'this'
		return(
			<div>
				<SelectLanguage 
				selectedLanguage = {this.state.selectedLanguage}
				onSelect = {this.updateLanguague} />
			</div>
		)
	}
}

module.exports = Popular;
