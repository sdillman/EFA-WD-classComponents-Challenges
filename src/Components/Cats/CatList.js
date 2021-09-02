import React, { Component } from 'react';
class CatList extends Component {

  // note to me: we're not setting state, so we don't need the below!
    // constructor(props) {
    //   super(props);
    // }

render() {
  return (
      <div>
        { this.props.cats.map(cat => <li>{cat}</li> )}
      </div>
    )
  }
}

export default CatList;
