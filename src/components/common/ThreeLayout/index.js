import React from 'react';
import './index.css'

export default  function ThreeLayout(props) {
  const defaultProps = {
    minWidth: 800,
    leftWidth: 200,
    rightWidth: 200
  }

  const datas = Object.assign({}, defaultProps, props)

  return (
    <div className='threeLayout' style={{
      minWidth: datas.minWidth,
    }}>
      <div className='main' >
        {datas.children}
      </div>
      <div className='leftSide' style={{
        width: datas.leftWidth,
      }}>
        {datas.left}
      </div>
      <div className='rightSide' style={{
        width: datas.rightWidth,
      }}>
         {datas.right}
      </div>
    </div>
  );
}



