import React from 'react';
import './index.css'
import PropTypes from 'prop-types'
import types from '../../utils/commonTypes'

ThreeLayout.defaultProps = {
  minWidth: 800,
  leftWidth: 200,
  rightWidth: 200
}
ThreeLayout.PropTypes = {
  minWidth: PropTypes.number,
  leftWidth: PropTypes.number,
  rightWidth: PropTypes.number,
  children: types.children
}


export default  function ThreeLayout(props) {
 


  return (
    <div className='threeLayout' style={{
      minWidth: props.minWidth,
    }}>
      <div className='main' >
        {props.children}
      </div>
      <div className='leftSide' style={{
        width: props.leftWidth,
      }}>
        {props.left}
      </div>
      <div className='rightSide' style={{
        width: props.rightWidth,
      }}>
         {props.right}
      </div>
    </div>
  );
}



