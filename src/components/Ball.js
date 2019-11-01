import React, { Component } from 'react'
import './css/ball.css'

export default class Ball extends Component {
  

  constructor(props) {
    super(props);
    this.state = {
      left: this.props.left || 0,
      top: this.props.top || 0,
      xSpeed: this.props.xSpeed,
      ySpeed: this.props.ySpeed,
      bg: this.props.bg || 'red'
    }
    const time = 16

    setInterval(() => {
      
      const xDis = this.state.xSpeed * time/1000
      const yDis = this.state.ySpeed * time/1000
      let newLeft = this.state.left + xDis
      let newTop = this.state.top + yDis
    
      if (newLeft <= 0) {
        newLeft = 0;
        this.setState({
            xSpeed: -this.state.xSpeed //横坐标反向
        })
    }
    else if (newLeft >= document.documentElement.clientWidth - 100) {
        newLeft = document.documentElement.clientWidth - 100;
        this.setState({
            xSpeed: -this.state.xSpeed //横坐标反向
        })
    }

    if (newTop <= 0) {
        newTop = 0;
        this.setState({
            ySpeed: -this.state.ySpeed //纵坐标反向
        })
    }
    else if (newTop >= document.documentElement.clientHeight - 100) {
        newTop = document.documentElement.clientHeight - 100;
        this.setState({
            ySpeed: -this.state.ySpeed //纵坐标反向
        })
    }
    this.setState({
      left: newLeft,
      top: newTop
    })
    }, time);
  }

  render() {
    return (
      <div className='ball' style={{
        top: this.state.top,
        left: this.state.left,
        background: this.state.bg
      }}>
        
      </div>
    )
  }
}
