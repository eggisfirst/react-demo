import React, { Component } from 'react'
import ThreeLayout from './index'

export default class Test extends Component {
  render() {
    return (
      <div>
        <ThreeLayout
          left={<div style={{
            border: '1px solid red'
          }}>左边</div>}
          right={<div style={{
            border: '1px solid red'
          }}>右边</div>}>
          <div style={{ border: "1px solid #f40" }}>
            主区域
          <h1>asdadss</h1>
          </div>
        </ThreeLayout>
      </div>
    )
  }
}
