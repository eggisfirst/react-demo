import React, { Component } from 'react'
import types from '../../utils/commonTypes'
import PropsTypes from 'prop-types'
export default class Select extends Component {
  static defaulProps = {
    value: '',
    loves: []
  }

  static PropsTypes = {
    name: PropsTypes.string.isRequired,
    value: PropsTypes.string.isRequired,
    onChange: PropsTypes.func,
    loves: types.groupCheckBox.isRequired
  }

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
      <select value={this.props.value} name={this.props.name} onChange={this.handleChange}>
        {this.getSelect()}
      </select>
    )
  }
}
