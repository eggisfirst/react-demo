import React from 'react';
import './css/pages.css'

export default function Pagers(props) {
  const allPageNum = getAllPageNum(props)
  const minMumber = getMinNumber(props)
  const maxNumber = getMaxNumber(minMumber,allPageNum, props)
  let numbers = []
  for(let i = minMumber; i <= maxNumber; i ++) {
    numbers.push(<span className={i === props.current? 'item active' : "item"} onClick={() => { onClickPage(i, allPageNum, props) }}>{i}</span>)
  }

  return (
    <>
      <span className={props.current === 1 ? 'item disable' : 'item'} onClick={() => { onClickPage(1, allPageNum, props) }}>首页</span>
      <span className={props.current === 1 ? 'item disable' : 'item'} onClick={() => { onClickPage(props.current - 1, allPageNum, props) }}>上一页</span>
      {numbers}
      <span className={props.current === allPageNum ? 'item disable' : 'item'} onClick={() => { onClickPage(props.current + 1, allPageNum, props) }}>下一页</span>
      <span className={props.current === allPageNum ? 'item disable' : 'item'} onClick={() => { onClickPage(allPageNum, allPageNum, props) }}>尾页</span>

      <span>{props.current}</span>
      /
      <span>{allPageNum}</span>
    </>
  )
}

/**
 * 获取总页数
 * @param {*} props 
 */
function getAllPageNum(props) {
  return Math.ceil(props.total / props.limit)
}

/**
 * 点击事件
 * @param {*点击后的页数} newPage 
 * @param {*总页数} allPageNum 
 * @param {*} props 
 */
function onClickPage(newPage, allPageNum, props) {
  if (props.current === newPage) {
    return
  }
  if (newPage <= 1) {
    newPage = 1
  } else if (newPage >= allPageNum) {
    newPage = allPageNum
  }
  props.onPageChange && props.onPageChange(newPage)
}

function getMinNumber(props) {
  let min = props.current - Math.floor(props.pagePanel / 2)
  if(min <= 1) {
    min = 1
  }
  return min
}

function getMaxNumber(min,allPageNum, props) {
  let max = min + props.pagePanel - 1
  if(max >= allPageNum) {
    max = allPageNum
  }
  return max
}