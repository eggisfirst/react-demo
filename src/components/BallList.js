import React, { Component } from 'react'
import {getRamdon} from '../utils/index'
import Ball from './Ball'
export default class BallList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      ballList: []
    }

    const timer = setInterval(() => {
      const xSpeed = getRamdon(200, 500)
      const ySpeed = getRamdon(200,500)
      const left = getRamdon(0, document.documentElement.clientWidth - 100)
      const top = getRamdon(0, document.documentElement.clientHeight - 100)
      const bg = `rgba(${getRamdon(0,255)},${getRamdon(0,255)},${getRamdon(0,255)})`
      const newBall = {
        xSpeed,
        ySpeed,
        bg,
        left,
        top
      }
      this.setState({
        ballList: [...this.state.ballList,newBall ]
      })
      if(this.state.ballList.length === 10) {
        clearInterval(timer)
      }
    }, 1000);
  }
  render() {
    const balls = this.state.ballList.map(it => <Ball {...it} />)
    return (
      <div>
        {balls}
      </div>
    )
  }
}
