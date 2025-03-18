import { Dispatch } from "react"
import formatCurrency from "../helpers"
import { OrderItem } from "../types"
import { OrderActions } from "../reducers/order-reducer"

type OrderContentsProps = {
  order: OrderItem[],
  dispatch: Dispatch<OrderActions>
  
}

export default function OrderContents({order, dispatch} : OrderContentsProps) {
  return (  
    <div>
      <h2 className="text-center mb-10 font-black text-4xl">Consumo</h2>

      <div>
        { order.length === 0 
          ? <p className="text-center font-semibold">La orden esta vacia</p>
          : ( order.map( item => (
            <div className="flex justify-between items-center border-t border-gray-500 last-of-type:border-b my-2 py-4" key={item.id}>
              <div>
                <p className="font-semibold">{item.name} - {formatCurrency( item.price )}</p>
                <p className="font-black">Cant: {item.quantity} - Sub: {formatCurrency( item.price * item.quantity )}</p>
              </div>
              <button
                className="w-8 h-8 cursor-pointer bg-red-600 hover:bg-red-700 dark:bg-red-700 dark:hover:bg-red-800 rounded-full flex justify-center items-center font-bold text-white"
                onClick={() => dispatch({ type: 'delete-item', payload: { id: item.id }})}
              >
                X
              </button>
            </div>
          )))
        }
      </div>


    </div>
  )
}
