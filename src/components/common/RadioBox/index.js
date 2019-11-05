import React, { Component } from 'react'
import types from '../../utils/commonTypes'
import PropsTypes from 'prop-types'
export default class RadioBox extends Component {
  static defaulProps = {
    radioName: '',
    loves: []
  }

  static PropsTypes = {
    name: PropsTypes.string.isRequired,
    radioName: PropsTypes.string.isRequired,
    onChange: PropsTypes.func,
    loves: types.groupCheckBox.isRequired
  }


  handleChange = e => {
    this.props.onChange(e.target.value)
  }


  getRadioBox = () => {
    const bs = this.props.loves.map(it => (
      <label key={it.value}>
        <input  type="radio" name={this.props.name}
                value={it.value}
                checked={this.props.radioName === it.value}
                onChange={this.handleChange}/>
        {it.text}
      </label>
    ))
    return bs
  }
  render() {
    return (
      <div>
        {this.getRadioBox()}
      </div>
    )
  }
}
