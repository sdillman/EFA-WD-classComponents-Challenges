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
      const searchResults = this.state.things.filter(thing => thing.includes(this.state.searchTerm))
      console.log("");
      return searchResults; //dummy while working out the search function
    };

    handleSearch(e) {
      this.setState({
        searchTerm: e.target.value
      })
    }
// onBlur  in the render so that when clicking out of the search box, you'll get a result - of everything if needed
  render() {
    return (
      <div>
        <Input placeholder='Search Here' value={this.state.searchTerm} onChange={this.handleSearch.bind(this)} onBlur={this.handleSearch.bind(this)} />
        <h3>Results:</h3>
        <p> {this.searchFunction(this.state.searchTerm).map(thing => (
          <li>{thing}</li>
        ))}</p>
      </div>
    );
  }
}

export default SearchIndex;
