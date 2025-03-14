import { useState } from "react"

import type { MenuItem, OrderItem } from "../types"

const useOrder = () => {

  const [ order, setOrder ] = useState<OrderItem[]>( [] )
  const [ tip, setTip ] = useState(0.10);
  
  const addItem = (item: MenuItem) => {

    const itemExist = order.find(orderItem => orderItem.id === item.id); 

    if (itemExist) {
      const updatedOrder = order.map( orderItem => orderItem.id === item.id 
        ? {...orderItem, quantity: orderItem.quantity + 1} 
        : orderItem
      )
      
      setOrder(updatedOrder);
    } else {
      const newItem : OrderItem = { ...item, quantity: 1 }
      setOrder( [...order, newItem] );
    }
  }

  const deleteItemOrder = (id : MenuItem['id']) => {
    const newOrder = order.filter( orderItem => orderItem.id !== id )
    setOrder( newOrder )
  }
  
  const placeOrder = () => {
    setOrder([])
    setTip(.10)    
  }
  
  
  return {
    order, setOrder, addItem, deleteItemOrder, tip, setTip, placeOrder
  }
}

export default useOrder
