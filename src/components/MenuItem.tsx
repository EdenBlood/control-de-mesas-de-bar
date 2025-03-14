import type { MenuItem } from "../types/index"

type MenuItemProps = {
  item: MenuItem;
  addItem: (item: MenuItem) => void;
}

function MenuItem({item, addItem} : MenuItemProps) {

  return (
    <button
      className="border-2 border-teal-400 w-full p-3 flex justify-between rounded-2xl cursor-pointer hover:bg-teal-200 hover:border-teal-600 dark:hover:bg-teal-800 dark:hover:border-teal-300"
      onClick={() => addItem(item)}
    >
      <p className="font-semibold">{item.name}</p>
      <p className="font-black">${item.price}</p>
    </ button>
  )
}

export default MenuItem;