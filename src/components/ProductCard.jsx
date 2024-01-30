import { Link } from "react-router-dom"
import Ratings from "./Ratings";
import { useCart } from "../contexts";

function ProductCard({ product }) {
  const { id, image, title, price, best_seller, in_stock } = product;
  const { addToCart } = useCart();

  return (
    <div className="w-full max-w-xs bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <Link to={`/products/${id}`} className="relative">
        {best_seller && <span className="absolute top-4 left-2 px-2 bg-orange-500 bg-opacity-90 text-white rounded">
          Best Seller
        </span>}
        <img className="mx-auto block p-5 rounded-t-lg max-h-80 max-w-full" src={image} alt="product image" />
      </Link>

      <div className="px-5 pb-5">
        <Link to={`/products/${id}`}>
          <h5 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
            {title}
          </h5>
        </Link>

        <div className="flex items-center space-x-1 rtl:space-x-reverse mt-2.5 mb-5">
          <Ratings product={product} key={id} />
        </div>

        <div className="flex items-center justify-between">
          <span className="text-3xl font-bold text-gray-900 dark:text-white">${price}</span>
          {in_stock ? (
            <button onClick={() => addToCart(product)} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
              Add to cart +
            </button>
          ) : (
            <button onClick={() => addToCart(product)} className="cursor-not-allowed pointer-events-none bg-gray-300 text-gray-500  font-medium rounded-lg text-sm px-5 py-2.5 text-center ">
              Add to cart +
            </button>
          )}
        </div>
      </div>
    </div>
  )
}

export default ProductCard