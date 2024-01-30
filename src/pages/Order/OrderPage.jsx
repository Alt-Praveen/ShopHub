import { Link } from "react-router-dom"

function OrderPage() {
  return (
    <main >
      <div className="p-5 bg-white border border-gray-700 rounded-lg  hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
        <h5 className="m-5 text-2xl text-center font-bold tracking-tight text-gray-900 dark:text-white">
          Order Placed !
        </h5>
        <Link to="/products" className="font-normal text-gray-700 dark:text-gray-400">
          <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
            Continue Shopping
          </button>
        </Link>
      </div>
    </main>
  )
}

export default OrderPage
