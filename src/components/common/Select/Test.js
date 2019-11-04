import React, { Component } from 'react'
import Select from './index'

export default class Test extends Component {
  state = {
    selectName: '',
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
      selectName: val
    })
  }
  render() {
    return (
      <div>
          <Select {...this.state} onChange={this.onChange}/>
          <button onClick={() => {
            console.log(this.state.selectName)
          }}>show data</button>
      </div>
    )
  }
}
