import Modal from './index'

import React,{ Component } from 'react'

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

