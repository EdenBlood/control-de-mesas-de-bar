import { Dispatch } from "react"
import { OrderActions } from "../reducers/order-reducer"

type TipPercentageFormProps = {
  dispatch: Dispatch<OrderActions>
  tip: number
}

const tipOptions = [
  {
    id: 'tip-10',
    value: .10,
    label: '10%'
  },
  {
    id: 'tip-25',
    value: .25,
    label: '25%'
  },
  {
    id: 'tip-50',
    value: .50,
    label: '50%'
  }
]

export default function TipPercentageForm({dispatch, tip} : TipPercentageFormProps) {
  return (
    <div>
      <h3 className="font-black text-2xl">Propina:</h3>

      <form>
        {tipOptions.map( t => (
        <div key={t.id} className="flex gap-2">
          <label className="font-semibold" htmlFor={t.id}>{t.label}</label>
          <input 
            type="radio" 
            id={t.id} 
            value={t.value} 
            name="tip"
            checked={tip === t.value}
            onChange={ e => dispatch({ type: 'add-tip', payload: { value: +e.target.value } } )}
          />
        </div>
        ))}
      </form>
    </div>
  )
}
