import React, { Component } from 'react'

export default class Select extends Component {
  handleChange = e => {
    this.props.onChange(e.target.value)
  }


  getSelect = () => {
    const bs = this.props.loves.map(it => (
      <option value={it.value} key={it.value}>{it.text}</option>
    ))
    return bs
  }
  render() {
    return (
      <select name={this.props.name} onChange={this.handleChange}>
        {this.getSelect()}
      </select>
    )
  }
}
