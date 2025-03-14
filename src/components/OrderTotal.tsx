import { useMemo  } from "react"
import { OrderItem } from "../types"
import formatCurrency from "../helpers";

type OrderTotalsProps = {
  order: OrderItem[]
  tip: number
  placeOrder: () => void
}
export default function OrderTotal({order, tip, placeOrder} : OrderTotalsProps) {
  //* Mi manera
  // const [ subTotal, setSubTotal ] = useState(0);
  // const [ total, setTotal ] = useState(0);
  // const [ propinaSelect, setPropinaSelect ] = useState(0.10);
  // const [ propina, setPropina ] = useState(0);

  // useEffect(() => {
  //   const updateResume = () => {
  //     setSubTotal( order.reduce( ( acc, item ) => acc += (item.price * item.quantity),0) )
  //     setPropina( subTotal * propinaSelect )
  //     setTotal( subTotal + propina );
  //   }
  //   updateResume();
  // }, [order, propinaSelect])
  
  //*Video
  const subtotalAmount = useMemo( () => order.reduce( (total, item) => total += (item.price * item.quantity), 0 ), [order])

  const tipAmount = useMemo(() => subtotalAmount * tip ,[tip, subtotalAmount])

  const totalAmount = useMemo( () => subtotalAmount + tipAmount, [subtotalAmount, tipAmount] )
  
  return (
    <>
      <div className="space-y-3">
        <h2 className="font-black text-2xl">Total y Propina:{''}</h2>
        <p>SubTotal a pagar: <span className="font-bold">{formatCurrency(subtotalAmount)}</span></p>
        <p>Propina: <span className="font-bold">{ formatCurrency( tipAmount )}</span></p>
        <p>Total a pagar: <span className="font-bold">{ formatCurrency( totalAmount ) }</span></p>
      </div>
      <button 
        className="text-center w-full dark:bg-white bg-black dark:text-black text-white font-bold uppercase p-4 rounded-xl cursor-pointer hover:dark:bg-gray-200 hover:bg-gray-800 disabled:opacity-50"
        disabled={totalAmount === 0}
        onClick={ placeOrder }
      >
        Guardar Orden
      </button>
    </>
  )
}
