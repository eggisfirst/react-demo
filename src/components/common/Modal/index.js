  
import React from 'react'
import "./index.css"
import types from '../../utils/commonTypes'
import PropTypes from 'prop-types'

Modal.defaultProps = {
    bg: "rgba(0,0,0,.5)"
}

Modal.PropTypes = {
    bg: PropTypes.string,
    children: types.children,
    onClose: PropTypes.func
}

export default function Modal(props) {
   

    // var defaultProps = { //默认属性
    //     bg: "rgba(0,0,0,.5)"
    // };
    // var datas = Object.assign({}, defaultProps, props);

    return (
        <div onClick={e => {
            if (e.target.className === "modal") {
                props.onClose();
            }
        }} className="modal" style={{
            background: props.bg
        }}>
            {props.children}
        </div>
    )
}