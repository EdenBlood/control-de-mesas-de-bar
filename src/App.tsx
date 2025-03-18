import { useReducer } from "react";
import MenuItem from "./components/MenuItem"
import OrderContents from "./components/OrderContents";
import OrderTotal from "./components/OrderTotal";
import TipPercentageForm from "./components/TipPercentageForm";

import { menuItems } from "./data/db"
import { initialState, orderReducer } from "./reducers/order-reducer";

function App() {

  const [ state, dispatch ] = useReducer( orderReducer, initialState );

  return (
    <>
      <header className="bg-teal-400 py-5">
        <h1 className="text-center text-4xl font-black text-white">Calculadora de Propinas y Consumo</h1>
      </header>

      <main className="max-w-7xl mx-auto my-10 md:flex md:flex-cols md:gap-8">
        <div className="border dark:border-gray-700 rounded-3xl shadow-lg border-slate-300 dark:shadow-gray-500/30 md:w-1/2 p-5">
          <h2 className="text-center text-4xl font-black">Menú</h2>
          <div className="space-y-4 mt-10">
            { menuItems.map( item => (
              <MenuItem 
                key={item.id}
                item={item}
                dispatch={dispatch}
              />
            ))}
          </div>
        </div>

        <div className="md:w-1/2">
          <div className="border border-dashed border-slate-300 dark:border-gray-700 shadow-lg dark:shadow-gray-500/30 p-5 rounded-3xl space-y-10">
            <OrderContents 
              order={state.order}
              dispatch={dispatch}
            />

            { state.order.length === 0 ? '' 
            : (
              <>
                <TipPercentageForm dispatch={dispatch} tip={state.tip} />
                <OrderTotal order={state.order} tip={state.tip} dispatch={dispatch} />
              </>
            ) }

          </div>

        </div>
      </main>
      
    </>
  )
}

export default App