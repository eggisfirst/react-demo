import React, { Component } from 'react'
import RadioBox from './index'

export default class Test extends Component {
  state = {
    radioName: '',
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
      radioName: val
    })
  }
  render() {
    return (
      <div>
          <RadioBox {...this.state} onChange={this.onChange}/>
          <button onClick={() => {
            console.log(this.state.radioName)
          }}>show data</button>
      </div>
    )
  }
}
