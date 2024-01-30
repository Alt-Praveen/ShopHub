import { useState } from "react"
import CartCard from "./CartCard"
import Checkout from "./Checkout"
import { useCart } from "../../../contexts";

function CartList() {
  const [checkout, setCheckout] = useState(false);
  const { cartList, total } = useCart();

  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-16 py-3">
              <span className="sr-only">Image</span>
            </th>
            <th scope="col" className="px-6 py-3">
              Product
            </th>
            <th scope="col" className="px-6 py-3">
              Price
            </th>
            <th scope="col" className="px-6 py-3">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {cartList.map((product) => (
            <CartCard product={product} key={product.id} />
          ))}
        </tbody>
        <tfoot>
          <tr className="font-semibold text-gray-900 ">
            <th scope="row" className="px-6 py-3 text-base">Total</th>
            <td className="px-6 py-3">{cartList.length}</td>
            <td className="px-6 py-3">${total}</td>
            <td className="px-6 py-3">
              <button onClick={() => setCheckout(!checkout)} className="text-white block w-3/4 bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:ring-blue-200 font-medium rounded-lg text-sm px-4 py-2.5 text-center dark:focus:ring-blue-900">
                Place Order
              </button>
            </td>
          </tr>
        </tfoot>
      </table>
      {checkout && <Checkout />}
    </div>
  )
}

export default CartList