import React, { Component } from 'react';
class CatList extends Component {

    constructor(props) {
      super(props);
      this.state = { cats: props.cats }
    }

render() {
  return (
      <div>
        {this.state.cats.Map(cat => <li>{cat}</li> )}
      </div>
    )
  }
}

export default CatList;
