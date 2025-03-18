import { OrderActions } from "../reducers/order-reducer";
import type { MenuItem } from "../types/index"

type MenuItemProps = {
  item: MenuItem,
  dispatch: React.ActionDispatch<[action: OrderActions]>
}

function MenuItem({item, dispatch} : MenuItemProps) {

  return (
    <button
      className="border-2 border-teal-400 w-full p-3 flex justify-between rounded-2xl cursor-pointer hover:bg-teal-200 hover:border-teal-600 dark:hover:bg-teal-800 dark:hover:border-teal-300"
      onClick={() => dispatch({ type: 'add-item', payload: { item } })}
    >
      <p className="font-semibold">{item.name}</p>
      <p className="font-black">${item.price}</p>
    </ button>
  )
}

export default MenuItem;