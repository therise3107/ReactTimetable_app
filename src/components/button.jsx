var React = require('react');


module.exports = React.createClass({

	handleClick: function(){
		this.props.whenClicked(this.props.dbname);
	},

	render: function(){
		return	<div>
		<a
		onClick = {this.handleClick}
		className = "button"
		>
		{this.props.title}
		</a>

		</div>

	}
});
