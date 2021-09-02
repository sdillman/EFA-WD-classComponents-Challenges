import React from 'react';
import {Input} from 'reactstrap';

class SearchIndex extends React.Component {

    constructor(props) {
      super(props);
      this.state = {
        things: ['pen', 'marker', 'eraser', 'notebook', 'pencil', 'scissors', 'highlighter', 'stapler', 'paper clip', 'binder', 'hole punch', 'laminator', 'laminating sheets', 'protective sheets', 'index cards']
      }
      searchFunction() {
        this.setState({
          // the input from the form
        })
        let searchResults;
        console.log(this.things[1]);
        return searchResults.push(this.things[1]); //dummy while working out the search function
      };
    }

  

  render() {
    return (
      <div>
        <Input placeholder='Search Here' />
        <h3>Results: {this.searchFunction()}</h3>
      </div>
    );
  }
}

export default SearchIndex;
