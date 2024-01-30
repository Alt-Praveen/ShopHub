import { Link } from "react-router-dom"

function CartEmpty() {
  return (
    <section className="max-w-4xl p-6 bg-white border border-gray-200 rounded-lg dark:bg-gray-800 dark:border-gray-700 text-2xl text-center mx-auto my-10 py-5 dark:text-slate-100">
      <div>
        <p>Oops! Your cart looks empty!</p>
        <p>Add Products to your cart from our collection.</p>
      </div>
      <Link to="/products" type="button" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
        Browse Products
      </Link>
    </section>
  )
}

export default CartEmpty