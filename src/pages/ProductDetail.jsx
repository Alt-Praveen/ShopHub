import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom'
import Ratings from '../components/Ratings';
import useTitle from '../hooks/useTitle';
import { useCart } from "../contexts/index"

function ProductDetail() {
  const [product, setProduct] = useState({})
  const { id } = useParams();
  useTitle(`${product.title}`)
  const { addToCart } = useCart();

  useEffect(() => {
    async function fetchProducts() {
      const response = await fetch(`http://localhost:3000/products/${id}`);
      const data = await response.json();
      setProduct(data);
    }
    fetchProducts();
  }, [id])

  return (
    <main className="w-full max-w-lg bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <Link to="/">
        <img className="p-8 rounded-t-lg" src={product.image} alt="product image" />
      </Link>

      <div className="px-5 pb-5">
        <Link to="/">
          <h1 className="mt-10 mb-5 text-4xl text-center font-bold text-gray-900 dark:text-slate-200">
            {product.title}
          </h1>
        </Link>

        {Object.keys(product).length > 0 && (
          <div className="flex items-center space-x-1 rtl:space-x-reverse mt-2.5 mb-5">
            <Ratings product={product} key={product.id} />
          </div>
        )}

        <div className="flex items-center justify-left">
          <span className=" focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center text-white	border bg-slate-500 mr-2">
            {product.in_stock ? "IN STOCK" : "OUT OF STOCK"}
          </span>
          {product.best_seller &&
            <span className="focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-amber-600  dark:focus:ring-blue-800 text-white border mr-2">
              Best Seller
            </span>
          }
        </div>

        <div className="flex items-center justify-between">
          <span className="text-3xl font-bold text-gray-900 dark:text-white">${product.price}</span>
          {product.in_stock ? (
            <button onClick={() => addToCart(product)} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
              Add to cart +
            </button>
          ) : (
            <button onClick={() => addToCart(product)} className="cursor-not-allowed pointer-events-none bg-gray-300 text-gray-500  font-medium rounded-lg text-sm px-5 py-2.5 text-center ">
              Add to cart +
            </button>
          )}
        </div>

        <div>
          <p className="font-normal dark:text-gray-400">
            {product.description}
          </p>
        </div>
      </div>
    </main>
  )
}

export default ProductDetail