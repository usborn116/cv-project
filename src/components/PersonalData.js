import React, { Component } from 'react'

export default class PersonalData extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showForm: false,
      name: '',
      email: '',
      phone: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.form = this.form.bind(this)
    this.info = this.info.bind(this)
    this.editHandler = this.editHandler.bind(this)
  }
  
  handleSubmit(event) {
    event.preventDefault()
    let inputs = event.target.getElementsByTagName('input')
    console.log(inputs)

    this.setState({
      showForm: false,
      name: inputs[0].value,
      email: inputs[1].value,
      phone: inputs[2].value
    })
  }

  editHandler() {
    this.setState({
      showForm: true
    })
  }

  form = () => {
    return (
      <form onSubmit={this.handleSubmit}>
        <label className="text-right m-2">Name</label>
        <input htmlFor="name" type="text" defaultValue={this.state.name}/>

        <label className="text-right m-2">Email</label>
        <input htmlFor="Email" type="email" defaultValue={this.state.email}/>

        <label className="text-right m-2">Phone Number</label>
        <input htmlFor="phone number" type="text" defaultValue={this.state.phone}/>

        <input type="submit" value="submit" />
      </form>
    )
  }
    

  info = () => {
    return(
      <div>
        <p className="m-2">Name: {this.state.name}</p>
        <p className="m-2">Email: {this.state.email}</p>
        <p className="m-2">Phone Number: {this.state.phone}</p>
        <button onClick={this.editHandler}>Edit</button>
      </div>
    )
  }

  render() {
    let content
    if (this.state.showForm) {
      content = this.form()
    } else {
      content = this.info()
    }


    return (
      <div >
        <h2>General Information</h2>
        <div>{content}</div>
      </div>
    )
  }
}