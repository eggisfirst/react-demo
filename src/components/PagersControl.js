import React, { Component } from 'react'
import Pagers from './Pagers'


export default class PagersControl extends Component {
  state = {
    current:3,
    total: 100,
    limit: 10,
    pagePanel: 5
  }
  onPageChange = (newPage) => {
    this.setState({
      current: newPage
    })
  }
  render() {
    return (
      <div>
        <Pagers {...this.state} onPageChange={this.onPageChange}/>
      </div>
    )
  }
}
