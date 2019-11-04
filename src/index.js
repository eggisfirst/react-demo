import React from 'react';
import ReactDOM from 'react-dom';

// import img1 from './assets/1.jpg'
// import img2 from './assets/2.jpg'

// let container =  document.getElementById('root')

// let srcs = [img1,img2]

// let index = 0

// let timer = null

// function render() {
//   ReactDOM.render(<img src={srcs[index]} alt=""/>,container);
// }

// function start() {
//   stop()
//   timer = setInterval(() => {
//     index = (index + 1)%2
//     render()
//   }, 2000);
// }

// function stop() {
//   clearInterval(timer)
// }

// render()

// start()

// container.onmouseenter = function() {
//   stop()
// }

// container.onmouseleave = function () {
//   start()
// }
// import StudentsList from './components/StudentsList'
//   const list = [{
//      name: "123",
//      date: "123"
//    }, {
//      name: "234",
//      date: "345"
//    }]

//  ReactDOM.render(<StudentsList stus={list} />,document.getElementById('root'))

// import Ball from './components/Ball'
// import BallList from './components/BallList'

// import PagersControl from './components/PagersControl'
import Modal from './components/Modal'

import { Component } from 'react'

export default class Test extends Component {
  state = {
    showModal: false
  }

  onShow = () => {
    this.setState({
      showModal: true
    })
  }
  onHide = () => {
    this.setState({
      showModal: false
    })
  }

  render() {
    return (
      <div>
        {
          this.state.showModal ?
            <Modal onClose={this.onHide}>
              <div className='modal_center' style={{
                position: "absolute",
                top: '50%',
                left: "50%",
                transform: "translate(-50%,-50%)",
                background: '#fff'
              }}>
                <h1>asdasdads</h1>
                <button onClick={this.onHide}>关闭朦层</button>
              </div>
            </Modal> : null
        }
        <button onClick={this.onShow}>显示朦层</button>
      </div>
    )
  }
}


ReactDOM.render(<Test />, document.getElementById('root'))







