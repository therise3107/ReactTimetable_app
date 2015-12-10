var React = require('react');

module.exports = React.createClass({
  getInitialState: function(){
    return {
      val: ''
    }
  }
  ,
  handleChange: function(event){
    this.setState({
      val: event.target.value
    })

  },

  render: function(){
    return <form>
      <div className="row">
        <input
          type = "text"
          placeholder = "search..."
          value = {this.state.val}
          onChange = {this.handleChange}
          />
      </div>
    </form>
  }

})
