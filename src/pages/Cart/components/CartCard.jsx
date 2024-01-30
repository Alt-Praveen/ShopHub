import { Link } from "react-router-dom"
import { useCart } from "../../../contexts"

function CartCard({ product }) {
  const { removeFromCart } = useCart()

  return (
    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
      <td className="p-4">
        <img src={product.image} className="w-16 max-w-full max-h-full" alt={product.title} />
      </td>
      <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
        <Link to={`/products/${product.id}`}>{product.title}</Link>
      </td>
      <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
        ${product.price}
      </td>
      <td className="px-6 py-4">
        <button onClick={() => removeFromCart(product)} className="font-medium text-red-600 dark:text-red-500 hover:underline">
          Remove
        </button>
      </td>
    </tr>
  )
}

export default CartCard