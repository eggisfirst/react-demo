import React, { Component } from 'react'

export default class FormTest extends Component {
  state = {
    loginId: '',
    loginPwd: '',
    city: 'shanghai',
    sex: '',
    checkLoves: [],
    loves: [
      {
        text: '篮球',
        value: "basketball"
      },
      {
        text: '足球',
        value: "football"
      },
      {
        text: '其他',
        value: "others"
      }
    ]
  }

  getCheckBoxs = () => {
    let bs = this.state.loves.map(it => (
      <label key={it.value}>
        <input  type="checkbox" name="checkLoves" 
                value={it.value}
                checked={this.state.checkLoves.includes(it.value)}
                onChange={this.handleChange}/>
        {it.text}
      </label>
    ))
    return bs
  }

  handleChange = e => {
    let name = e.target.name
    
    let val = e.target.value
    if(e.target.type === 'checkbox') {
      if(e.target.checked) {
        val = [...this.state.checkLoves, val]
      }else {
        val = this.state.checkLoves.filter(l => l !== val)
      }
    }

    this.setState({
      [name]: val
    })
  }

  render() {
    const bs = this.getCheckBoxs()
    return (
      <div>
        <p>
          <input type="text" name="loginId" value={this.state.loginId} onChange={this.handleChange} />
        </p>
        <p>
          <input type="text" name="loginPwd" value={this.state.loginPwd} onChange={this.handleChange} />
        </p>
        <p>
          <select name='city' value={this.state.city} onChange={this.handleChange}>
            <option value="shanghai">上海</option>
            <option value="beijing">北京</option>
            <option value="shenzhen">深圳</option>
          </select>
        </p>
        <p>
          <label>
            <input type="radio" name="sex" id="sex" value='male' onChange={this.handleChange} />
            男
          </label>
          <label>
            <input type="radio" name="sex" id="sex" value='female' onChange={this.handleChange} />
            女
          </label>
        </p>


        {bs}

        <button onClick={() => {
          console.log(this.state)
        }}>查看表单数据</button>
      </div>
    )
  }
}
