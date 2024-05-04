import {Component} from 'react'

import './index.css'

class RandomNumberGenerator extends Component {
  state = {
    number: 0,
  }

  onGenerateNumber = () => {
    const randomNumber = Math.ceil(Math.random() * 100)
    this.setState({
      number: randomNumber,
    })
  }

  render() {
    const {number} = this.state
    return (
      <div className="bg-container">
        <div className="content-container">
          <h1 className="title">Random Number</h1>
          <p className="description">
            Generate a random number in the range of 0 to 100
          </p>
          <button
            className="generate-btn"
            onClick={this.onGenerateNumber}
            type="button"
          >
            Generate
          </button>
          <p className="random-number">{number}</p>
        </div>
      </div>
    )
  }
}

export default RandomNumberGenerator
