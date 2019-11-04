import React, { Component } from 'react'
import CheckBox from './index'

export default class Test extends Component {
  state = {
    checkLoves: [],
    loves: [
      {
        value: 'football',
        text: '足球'
      },
      {
        value: 'basketball',
        text: '篮球'
      },
      {
        value: 'others',
        text: '其他'
      }
    ],
    name: 'loves'
  }
  onChange = (val) => {
    this.setState({
      checkLoves: val
    })
    console.log(this.state.checkLoves)
  }
  render() {
    return (
      <div>
          <CheckBox {...this.state} onChange={this.onChange}/>
      </div>
    )
  }
}
