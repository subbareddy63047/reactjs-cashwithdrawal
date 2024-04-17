// Write your code here
import './index.css'

const DenominationItem = props => {
  const {eachAmount, withdrawFunction} = props
  const {value} = eachAmount
  const withdraw = () => {
    withdrawFunction(value)
  }

  return (
    <li className="each-amount">
      <button type="button" onClick={withdraw}>
        {value}
      </button>
    </li>
  )
}
export default DenominationItem
