import React, { Component } from 'react'

export default class CheckBox extends Component {
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
