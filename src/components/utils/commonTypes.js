import PropsTypes from 'prop-types'

export default {
  children: PropsTypes.node,
  groupCheckBox: PropsTypes.arrayOf(PropsTypes.shape({
    value: PropsTypes.string.isRequired,
    text: PropsTypes.string.isRequired
  })),
  checkLoves: PropsTypes.arrayOf(PropsTypes.string)
}