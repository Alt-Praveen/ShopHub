import { Link } from "react-router-dom"

function Hero() {
  return (
    <section className="p-5 m-2 flex flex-row items-center bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <div>
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          Explore our all new collection!!!
        </h5>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <Link to="/products" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
          All Products ➡
        </Link>
      </div>
      <div>
        <img className="rounded-t-lg" src="public\hero.avif" alt="" />
      </div>
    </section>
  )
}

export default Hero