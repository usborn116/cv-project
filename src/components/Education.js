import React, { Component } from 'react'

export default class Education extends Component {
  constructor(props) {
    super(props)
    this.showForm = this.showForm.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.deleteSchool = this.deleteSchool.bind(this)
    this.addChangedSchool = this.addChangedSchool.bind(this)
    this.state = {
      showForm: false,
      education: []
    }
  }

  handleSubmit = (e) => {
    e.preventDefault()
    let inputs = e.target.getElementsByTagName('input')
    console.log(inputs[0].value)

    let newSchool = {
      name: inputs[0].value,
      cert: inputs[1].value,
      completed: inputs[2].value,
      edit: false
    }

    this.setState(prev => ({
      education: [...prev.education, newSchool],
      showForm: false
    }))
  }

  showForm = () => {
    this.setState({
      showForm: true
    })
  }

  editSchool = (index) => {
    let newSchools = this.state.education
    let schoolToChange = newSchools[index]
    schoolToChange.edit = true
    newSchools.splice(index, 1, schoolToChange)
    console.log(schoolToChange)
    this.setState({
      education: newSchools
    })
  }

  addChangedSchool = (event) => {
    event.preventDefault()
    let inputs = event.target.getElementsByTagName('input')
    let index = inputs[3].value
    let newSchool = {
      name: inputs[0].value,
      cert: inputs[1].value,
      completed: inputs[2].value,
      edit: false
    }

    let newSchools = this.state.education
    newSchools.splice(index, 1, newSchool)

    this.setState({
      education: newSchools
    })
  }

  deleteSchool = (index) => {
    let newSchools = this.state.education
    newSchools.splice(index, 1)
    console.log('deleteSchool func')
    console.log(index)

    this.setState({
      schools: newSchools
    })
  }

  render() {
    const educationContent = this.state.education.map((school, index) => {
      let element
      if (!school.edit) {
        element = (
          <div key={index}>
            <p>School: {school.name}</p>
            <p>Certificate: {school.cert}</p>
            <p>Completion Date: {school.completed}</p>
            <button onClick={() => this.editSchool(index)}>Edit</button>
            <button onClick={() => this.deleteSchool(index)}>Delete</button>
          </div>
        )
      } else {
        element = (
          <form key={index} onSubmit={this.addChangedSchool}>
          <label className="text-right m-1">School</label>
          <input htmlFor="school" type="text" defaultValue={school.name}/>

          <label className="text-right m-1">Certificate</label>
          <input htmlFor="cert" type="text" defaultValue={school.cert}/>

          <label className="text-right m-1">Completion Date</label>
          <input htmlFor="completed date" type="text" defaultValue={school.completed}/>

          <input type="hidden" value={index} />

         <input type="submit" value="submit" />
        </form>
        )
      }
      return element
    })

    let form

    if (this.state.showForm) {
      form = (
        <form onSubmit={this.handleSubmit}>
        <label className="text-right m-1">School</label>
        <input htmlFor="school" type="text" defaultValue={this.state.name}/>

        <label className="text-right m-1">Certificate</label>
        <input htmlFor="cert" type="text" defaultValue={this.state.email}/>

        <label className="text-right m-1">Completion Date</label>
        <input htmlFor="completed date" type="text" defaultValue={this.state.phone}/>

        <input type="submit" value="submit" />
      </form>
      )
    } else {
      form = <button onClick={this.showForm}>Add Education</button>
    }

    return (
      <div>
        <h2>Education</h2>
        <div>
          {educationContent}
          {form}
        </div>
      </div>
    )
  }
}