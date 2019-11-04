import React, { Component } from 'react'

export default class RadioBox extends Component {
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
