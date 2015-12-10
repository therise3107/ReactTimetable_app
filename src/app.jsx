var React  = require('react');
var TableRow = require('./tablerow');
var SearchBar = require('./searchbar');
var Button = require('./button');

/*
  var ReactRouter = require('react-router');
  var Router = ReactRouter.Router;
  var Route = ReactRouter.Route;
  var Link = ReactRouter.Link;
*/


var Table = React.createClass({

  getInitialState: function(){
    return { clss: this.props.timetableIT7,
      heading: 'IT7 sem timetable'
     }
  },

  getInitialProps: function(){
    return { props: this.props.timetableIT}
  },

  handleClick: function(item) {
    this.setState({
      clss: this.props["timetable" + item],
      heading: item + " sem" + "timetable"
    });
  },

  render: function(){
    var tablebody = this.state.clss.map(function(table){
      return <TableRow {...table} />
    })
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
          <SearchBar />
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



timetableOptions = {
  timetableIT7: [
    {
      key: 1,
      lecture: "1",
      monday: 'Ruby',
      tuesday: 'Python',
      wednesday: 'html',
      thursday: 'css',
      friday: 'js',
      saturday: 'ruby'

    },{
      key: 2,
      lecture: "2",
      monday: 'Ruby',
      tuesday: 'html',
      wednesday: 'Python',
      thursday: 'css',
      friday: 'js',
      saturday: 'css'

    },{
      key: 3,
      lecture: "3",
      monday: 'Python',
      tuesday: 'js',
      wednesday: 'html',
      thursday: 'css',
      friday: 'js',
      saturday: 'css'

    },{
      key: 4,
      lecture: "4",
      monday: 'Python',
      tuesday: 'Ruby',
      wednesday: 'html',
      thursday: 'css',
      friday: 'js',
      saturday: 'ruby'

    },{
      key: 5,
      lecture: "   ",
      monday: '   ',
      tuesday: '   ',
      wednesday: '~~BREAK~~',
      thursday: '   ',
      friday: '   ',
      saturday: '   '

    },{
      key: 6,
      lecture: "5",
      monday: 'Python',
      tuesday: 'Ruby',
      wednesday: 'html',
      thursday: 'css',
      friday: 'js',
      saturday: 'ruby'
    },{
      key: 7,
      lecture: "6",
      monday: 'Python',
      tuesday: 'Ruby',
      wednesday: 'html',
      thursday: 'css',
      friday: 'js',
      saturday: 'ruby'
    },{
      key: 8,
      lecture: "7",
      monday: 'Python',
      tuesday: 'Ruby',
      wednesday: 'html',
      thursday: 'css',
      friday: 'js',
      saturday: 'ruby'
    },{
      key: 9,
      lecture: "8",
      monday: 'Python',
      tuesday: 'Ruby',
      wednesday: 'html',
      thursday: 'css',
      friday: 'js',
      saturday: 'ruby'
    }
  ],

  /* timeable for CS 7th sem*/

  timetableCS7: [
    {
      key: 1,
      lecture: "1",
      monday: 'Ada',
      tuesday: 'Python',
      wednesday: 'Algos',
      thursday: 'Haskel',
      friday: 'js',
      saturday: 'Ruby'

    },{
      key: 2,
      lecture: "2",
      monday: 'Ruby',
      tuesday: 'Ada',
      wednesday: 'Python',
      thursday: 'css',
      friday: 'js',
      saturday: 'Algos'

    },{
      key: 3,
      lecture: "3",
      monday: 'Python',
      tuesday: 'js',
      wednesday: 'Ada',
      thursday: 'Algos',
      friday: 'js',
      saturday: 'Haskel'

    },{
      key: 4,
      lecture: "4",
      monday: 'Python',
      tuesday: 'Ruby',
      wednesday: 'Ada',
      thursday: 'Haskel',
      friday: 'js',
      saturday: 'ruby'
    },{
      key: 5,
      lecture: "   ",
      monday: '   ',
      tuesday: '   ',
      wednesday: '~~BREAK~~',
      thursday: '   ',
      friday: '   ',
      saturday: '   '

    },{
      key: 6,
      lecture: "5",
      monday: 'Python',
      tuesday: 'Ruby',
      wednesday: 'Ada',
      thursday: 'Haskel',
      friday: 'js',
      saturday: 'ruby'
    },{
      key: 7,
      lecture: "6",
      monday: 'Python',
      tuesday: 'Ruby',
      wednesday: 'Ada',
      thursday: 'Haskel',
      friday: 'js',
      saturday: 'ruby'
    },{
      key: 8,
      lecture: "7",
      monday: 'Python',
      tuesday: 'Ruby',
      wednesday: 'Ada',
      thursday: 'Haskel',
      friday: 'js',
      saturday: 'ruby'
    },{
      key: 9,
      lecture: "8",
      monday: 'Python',
      tuesday: 'Ruby',
      wednesday: 'Ada',
      thursday: 'Haskel',
      friday: 'js',
      saturday: 'ruby'
    }
  ],
  // timeable for IT 5th sem

  timetableIT5: [
    {
      key: 1,
      lecture: "1",
      monday: 'OOPS',
      tuesday: 'Lab',
      wednesday: 'Lab',
      thursday: 'Dwdm',
      friday: 'Html',
      saturday: 'html'

    },{
      key: 2,
      lecture: "2",
      monday: 'OOPS',
      tuesday: 'Lab',
      wednesday: 'Lab',
      thursday: 'Dwdm',
      friday: 'Html',
      saturday: 'html'

    },{
      key: 3,
      lecture: '3',
      monday: 'OOPS',
      tuesday: 'Lab',
      wednesday: 'Lab',
      thursday: 'Dwdm',
      friday: 'Html',
      saturday: 'html'

    },{
      key: 4,
      lecture: "4",
      monday: 'OOPS',
      tuesday: 'Lab',
      wednesday: 'Lab',
      thursday: 'Dwdm',
      friday: 'Html',
      saturday: 'html'
    },{
      key: 5,
      lecture: "   ",
      monday: '   ',
      tuesday: '   ',
      wednesday: '~~BREAK~~',
      thursday: '   ',
      friday: '   ',
      saturday: '   '

    },{
      key: 6,
      lecture: "5",
      monday: 'OOPS',
      tuesday: 'Lab',
      wednesday: 'Lab',
      thursday: 'Dwdm',
      friday: 'Html',
      saturday: 'html'

    },{
      key: 7,
      lecture: "6",
      monday: 'OOPS',
      tuesday: 'Lab',
      wednesday: 'Lab',
      thursday: 'Dwdm',
      friday: 'Html',
      saturday: 'html'

    },{
      key: 8,
      lecture: "7",
      monday: 'OOPS',
      tuesday: 'Lab',
      wednesday: 'Lab',
      thursday: 'Dwdm',
      friday: 'Html',
      saturday: 'html'

    },{
      key: 9,
      lecture: "8",
      monday: 'OOPS',
      tuesday: 'Lab',
      wednesday: 'Lab',
      thursday: 'Dwdm',
      friday: 'Html',
      saturday: 'html'

    }
  ],

  // timeable for cs 5ht sem

  timetableCS5: [
    {
      key: 1,
      lecture: "1",
      monday: 'DWDM',
      tuesday: 'Networks',
      wednesday: 'ALGOS',
      thursday: 'YML',
      friday: 'JSON',
      saturday: 'AJAX'

    },{
      key: 2,
      lecture: "2",
      monday: 'DWDM',
      tuesday: 'Networks',
      wednesday: 'ALGOS',
      thursday: 'YML',
      friday: 'JSON',
      saturday: 'AJAX'

    },{
      key: 3,
      lecture: "3",
      monday: 'DWDM',
      tuesday: 'Networks',
      wednesday: 'ALGOS',
      thursday: 'YML',
      friday: 'JSON',
      saturday: 'AJAX'

    },{
      key: 4,
      lecture: "4",
      monday: 'DWDM',
      tuesday: 'Networks',
      wednesday: 'ALGOS',
      thursday: 'YML',
      friday: 'JSON',
      saturday: 'AJAX'
    },{
      key: 5,
      lecture: "   ",
      monday: '   ',
      tuesday: '   ',
      wednesday: '~~BREAK~~',
      thursday: '   ',
      friday: '   ',
      saturday: '   '

    },{
      key: 6,
      lecture: "5",
      monday: 'DWDM',
      tuesday: 'Networks',
      wednesday: 'ALGOS',
      thursday: 'YML',
      friday: 'JSON',
      saturday: 'AJAX'
    },{
      key: 7,
      lecture: "6",
      monday: 'DWDM',
      tuesday: 'Networks',
      wednesday: 'ALGOS',
      thursday: 'YML',
      friday: 'JSON',
      saturday: 'AJAX'
    },{
      key: 8,
      lecture: "7",
      monday: 'DWDM',
      tuesday: 'Networks',
      wednesday: 'ALGOS',
      thursday: 'YML',
      friday: 'JSON',
      saturday: 'AJAX'
    },{
      key: 9,
      lecture: "8",
      monday: 'DWDM',
      tuesday: 'Networks',
      wednesday: 'ALGOS',
      thursday: 'YML',
      friday: 'JSON',
      saturday: 'AJAX'
    }
  ]
};




var element = React.createElement(Table , timetableOptions);
React.render(element, document.querySelector('.container'));
