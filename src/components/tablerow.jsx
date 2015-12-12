var React = require('react');

module.exports = React.createClass({
  render: function(){
    return <tr>
        <td>{this.props.lecture}</td>
        <td>{this.props.monday}</td>
        <td>{this.props.tuesday}</td>
        <td>{this.props.wednesday}</td>
        <td>{this.props.thursday}</td>
        <td>{this.props.friday}</td>
        <td>{this.props.saturday}</td>
        <td>{this.props.seventh}</td>
      </tr>

  }
});
