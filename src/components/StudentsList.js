
import React, { Component } from 'react'
import Student from './Student'

export default class StudentsList extends Component {
  render() {
    const student = this.props.stus.map(it => <Student {...it} key={it.name}/>)
    return (
     <ul>
       {student}
     </ul>
    )
  }
}

