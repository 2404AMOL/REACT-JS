/* eslint-disable react/prop-types */
import { useId } from "react"

function Input({
    label,
    amount,
    onAmountChange,
    onCurrencyChange,
    currencyOptions =[],
    selectCurrency="usd",
    amountDisable = false,
    currencyDisable = false,
    className=""
}) 

{
  let amountInputId= useId()
  return (
    <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>
        <div className="w-1/2">
            <label htmlFor={amountInputId} className="text-black/40 mb-2">{label}</label>
            <input 
            id={amountInputId}
            type="number" 
            placeholder="Amount" 
            disabled={amountDisable}
            className="outline-none w-full bg-transparent py-1.5"
            value={amount}
            onChange={(e)=>onAmountChange && onAmountChange(Number(e.target.value))}
            />
        </div>
        <div className="w-1/2 flex flex-wrap justify-end text-right">
        <p className="text-black/40 mb-2 w-full">Currency Type</p>
        <select className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
        value={selectCurrency}
<<<<<<< HEAD
        onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
=======
        onChange={onCurrencyChange}
>>>>>>> 4e16b180a04bf88637fdb562df0500e6e72d0e04
        disabled={currencyDisable}
        >
          {currencyOptions.map((currency)=>(
            <option key={currency} value={currency}>{currency}</option>
          ))}
        </select>
        </div>
    </div>
  )
}
export default Input
