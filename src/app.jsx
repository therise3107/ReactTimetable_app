
var React  = require('react');
var ReactDOM = require('react-dom');
var TableRow = require('./components/tablerow');
var SearchBar = require('./components/searchbar');
var Button = require('./components/button');
var Search = require('react-search');
var Reflux = require('reflux');
var TimeTableStore = require('./stores/timetable-store');
var Actions = require('./actions');

var ITEMS = [
    { title: 'javascript', description: 'an awesome language' , dude: ' somebody is me' },
    { title: 'ruby', description: 'a cool language ', dude: ' somebody is me' },
    { title: 'haskell', description: 'a functional language' , dude: ' somebody is me'}
]

var KEYS = ['title', 'description', 'dude']

var KEY = 'title'

var Table = React.createClass({

  mixins: [
    Reflux.listenTo(TimeTableStore, "demohandleClick")
  ],

  getInitialState: function(){
    return {
      heading: 'IT7 sem timetable',
      dd: [],
      clss: []

     }
  },


  handleClick: function(item) {
    this.setState({
      clss: this.state.dd["timetable" + item],
      heading: item + " sem" + "timetable"
    });
  },

  componentWillMount: function(){
    Actions.getTimeTable();

  },

  demohandleClick: function(event, data){
    this.setState({
      dd: data
    });
    this.setState({
      clss: this.state.dd["timetableIT7"]
    })

  },

  render: function(){
    var tablebody = this.state.clss.map(function(table){
      return <TableRow {...table} />
    });

    return <div className="">
        <div className="row">
          <h2>Ymca timetable</h2>
        </div>
        <div className = "row">
        <div className = "two columns">

          <Button
          title = "IT 7th"
          dbname = "IT7"
          whenClicked = {this.handleClick}

          />

          <Button
          title = "CS 7th"
          dbname = "CS7"
          whenClicked = {this.handleClick}

          />

          <Button
          title = "IT 5th"
          dbname = "IT5"
          whenClicked = {this.handleClick}

          />

          <Button
          title = "CS 5th"
          dbname = "CS5"
          whenClicked = {this.handleClick}

          />

        </div>
        <div className = "ten columns">
          <div className= "row">
            <h4>{this.state.heading}</h4>
          </div>
          <Search
            items={ITEMS}
            keys={KEYS}
            searchKey={KEY}
            ItemElement = "table"
          />
          <table className="u-full-width">
          <thead>
            <th>Lecture</th>
            <th>Monday</th>
            <th>Tuesday</th>
            <th>Wednesday</th>
            <th>Thursday</th>
            <th>Friday</th>
            <th>Saturday</th>
          </thead>
          <tbody>
          {tablebody}
        </tbody>
      </table>
        </div>
        </div>
      </div>
  }

});


var element = React.createElement(Table);
ReactDOM.render(element, document.querySelector('.container'));
