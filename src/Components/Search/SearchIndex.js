import React from 'react';
import {Input} from 'reactstrap';

class SearchIndex extends React.Component {

    constructor(props) {
      super(props);
      this.state = {
        things: ['pen', 'marker', 'eraser', 'notebook', 'pencil', 'scissors', 'highlighter', 'stapler', 'paper clip', 'binder', 'hole punch', 'laminator', 'laminating sheets', 'protective sheets', 'index cards'],
        searchTerm: this.props.searchTerm
      };
    }

    searchFunction() {

      const searchResults = [];
      searchResults.push(this.state.things[1])
      console.log(this.state.things[1]);
      return searchResults; //dummy while working out the search function
    };

  render() {
    return (
      <div>
        <Input placeholder='Search Here' value={this.state.searchTerm}/>
        <h3>Results: {this.searchFunction()}</h3>
      </div>
    );
  }
}

export default SearchIndex;
