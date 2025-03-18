import { MenuItem, OrderItem } from "../types"

export type OrderActions = 
  { type: 'add-item', payload: {item: MenuItem} } |
  { type: 'delete-item', payload: {id: MenuItem['id']} } |
  { type: 'place-order' } |
  { type: 'add-tip', payload: { value: number } }

export type OrderState = {
  order: OrderItem[],
  tip: number
}
  
export const initialState : OrderState = {
  order: [],
  tip: 0.1
}

export const orderReducer = ( state: OrderState = initialState, action: OrderActions ) => {

  if (action.type === 'add-item' ) {
    const itemExist = state.order.find(orderItem => orderItem.id === action.payload.item.id); 
    let updatedOrder : OrderItem[] = []
    
    if (itemExist) {
      updatedOrder = state.order.map( orderItem => orderItem.id === action.payload.item.id
        ? {...orderItem, quantity: orderItem.quantity + 1} 
        : orderItem
      )
    } else {
      const newItem : OrderItem = { ...action.payload.item, quantity: 1 }
      updatedOrder = [...state.order, newItem];
    }
    
    return {
      ...state, order: updatedOrder
    }
  }
  
  if (action.type === 'delete-item' ) {
    const newOrder = state.order.filter( orderItem => orderItem.id !== action.payload.id )
    
    return {
      ...state, order: newOrder
    }
  }

  if (action.type === 'place-order' ) {
    const tip = 0.1
    const order : OrderItem[] = []
    return {
      ...state, tip, order
    }
  }

  if (action.type === 'add-tip' ) {
    const tip = action.payload.value
    return {
      ...state, tip
    }
  }
  
  return state
}