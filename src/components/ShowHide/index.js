import {Component} from 'react'

import './index.css'

class ShowHide extends Component {
  state = {firstName: false, lastName: false}

  firstNameClick = () => {
    const {firstName} = this.state
    if (firstName) {
      this.setState({firstName: false})
    } else {
      this.setState({firstName: true})
    }
  }

  secondNameClick = () => {
    const {lastName} = this.state
    if (lastName) {
      this.setState({lastName: false})
    } else {
      this.setState({lastName: true})
    }
  }

  render() {
    const {firstName, lastName} = this.state
    return (
      <div className="container">
        <h1 className="heading"> Show/Hide </h1>
        <div className="btn_container">
          <div className="firstName_con">
            <button
              onClick={this.firstNameClick}
              type="button"
              className="button"
            >
              Show/Hide Firstname
            </button>
            {firstName ? <p className="names">Joe</p> : null}
          </div>

          <div className="secondName_con">
            <button
              onClick={this.secondNameClick}
              type="button"
              className="button"
            >
              Show/Hide Lastname
            </button>
            {lastName ? <p className="names">Jonas</p> : null}
          </div>
        </div>
      </div>
    )
  }
}

export default ShowHide
