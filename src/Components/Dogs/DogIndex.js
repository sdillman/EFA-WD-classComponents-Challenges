import React, { Component } from "react"

class DogIndex extends Component {
    constructor(props) {
        super(props)
        this.state = {
            img: ''
        }
    }

    getDog = () => {
        fetch('https://dog.ceo/api/breeds/image/random')
            .then(res => res.json())
            .then(data => {
                this.setState({
                    img: data.message
                })
            },
                err => {
                    this.setState({ err })
                })
            .catch((err) => console.log(err))
    }

    componentDidMount() {
        this.getDog()
    }

    render() {
        return (
            <div>
                <button onClick={() => {
                    this.getDog();
                }}>I need more dog!</button>
                <br />
                <br />
                <img src={this.state.img} alt={"Image of a dog"} />
            </div>
        )
    }
}

export default DogIndex;