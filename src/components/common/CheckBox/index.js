import React, { Component } from 'react'
import types from '../../utils/commonTypes'
import PropsTypes from 'prop-types'

export default class CheckBox extends Component {
  static defaulProps = {
    checkLoves: [],
    loves: []
  }

  static PropsTypes = {
    name: PropsTypes.string.isRequired,
    checkLoves: types.checkLoves.isRequired,
    onChange: PropsTypes.func,
    loves: types.groupCheckBox.isRequired
  }


  handleChange = e => {
    let newArrs;
    if(e.target.checked) {
      newArrs = [...this.props.checkLoves, e.target.value]
    }
    else {
      newArrs = this.props.checkLoves.filter(it => it !== e.target.value)
    }
    this.props.onChange(newArrs)
  }


  getCheckBox = () => {
    const bs = this.props.loves.map(it => (
      <label key={it.value}>
        <input  type="checkbox" name={this.props.name}
                value={it.value}
                checked={this.props.checkLoves.includes(it.value)}
                onChange={this.handleChange}/>
        {it.text}
      </label>
    ))
    return bs
  }
  render() {
    return (
      <div>
        {this.getCheckBox()}
      </div>
    )
  }
}
