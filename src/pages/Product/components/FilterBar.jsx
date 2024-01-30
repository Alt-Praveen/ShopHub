import { useFilter } from "../../../contexts"

function FilterBar({ setShowFilter }) {
  const { state, dispatch } = useFilter()

  return (
    <div>
      {/* <button data-drawer-target="default-sidebar" data-drawer-toggle="default-sidebar" aria-controls="default-sidebar" type="button" className="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
        <span className="sr-only">Open sidebar</span>
        <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path clipRule="evenodd" fillRule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
        </svg>
      </button> */}

      <aside id="default-sidebar" className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0" aria-label="Sidebar">
        <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
          <div>
            <h5 id="drawer-navigation-label" className=" text-base font-semibold text-gray-500 uppercase dark:text-gray-400">
              Filters
            </h5>
            <button onClick={() => setShowFilter(false)} type="button" data-drawer-hide="drawer-navigation" aria-controls="drawer-navigation" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 absolute top-2.5 end-2.5 inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" >
              <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
              <span className="sr-only">Close menu</span>
            </button>
          </div>

          <hr />

          <ul className="space-y-2 font-medium">
            <li>
              <h3 className="flex items-center pt-3 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                Sort by
              </h3>
              <div className="flex items-center">
                <input onChange={() => dispatch({ type: "SORT_BY", payload: { sortBy: "lowtohigh" } })} checked={state.sortBy === "lowtohigh" || false} id="sort_by" type="radio" value="" name="sort_by" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                <label htmlFor="sort_by" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                  Price - Low to High
                </label>
              </div>
              <div className="flex items-center">
                <input onChange={() => dispatch({ type: "SORT_BY", payload: { sortBy: "hightolow" } })} checked={state.sortBy === "hightolow" || false} id="sort_by" type="radio" value="" name="sort_by" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                <label htmlFor="sort_by" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                  Price - High to Low
                </label>
              </div>
            </li>

            <li>
              <h3 className="flex items-center pt-3 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                Rating
              </h3>
              <div className="flex items-center">
                <input onChange={() => dispatch({ type: "RATINGS", payload: { ratings: "4STARABOVE" } })} checked={state.ratings === "4STARABOVE" || false} id="ratings" type="radio" value="" name="ratings" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                <label htmlFor="ratings" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                  4 Stars & Above
                </label>
              </div>
              <div className="flex items-center">
                <input onChange={() => dispatch({ type: "RATINGS", payload: { ratings: "3STARABOVE" } })} checked={state.ratings === "3STARABOVE" || false} id="ratings" type="radio" value="" name="ratings" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                <label htmlFor="ratings" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                  3 Stars & Above
                </label>
              </div>
              <div className="flex items-center">
                <input onChange={() => dispatch({ type: "RATINGS", payload: { ratings: "2STARABOVE" } })} checked={state.ratings === "2STARABOVE" || false} id="ratings" type="radio" value="" name="ratings" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                <label htmlFor="ratings" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                  2 Stars & Above
                </label>
              </div>
              <div className="flex items-center">
                <input onChange={() => dispatch({ type: "RATINGS", payload: { ratings: "1STARABOVE" } })} checked={state.ratings === "1STARABOVE" || false} id="ratings" type="radio" value="" name="ratings" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                <label htmlFor="ratings" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                  1 Stars & Above
                </label>
              </div>
            </li>

            <li>
              <h3 className="flex items-center pt-3 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                Other Filters
              </h3>
              <div className="flex items-center">
                <input onChange={() => dispatch({ type: "BEST_SELLER_ONLY", payload: { onlyBestSeller: !state.onlyBestSeller } })}
                  checked={state.onlyBestSeller || false} id="default-checkbox" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                <label htmlFor="default-checkbox" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                  Best Seller Only
                </label>
              </div>
              <div className="flex items-center">
                <input onChange={() => dispatch({ type: "IN_STOCK_ONLY", payload: { onlyInStock: !state.onlyInStock } })}
                  checked={state.onlyInStock || false} id="default-checkbox" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                <label htmlFor="default-checkbox" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                  In Stock Only
                </label>
              </div>
            </li>
          </ul>

          <button onClick={() => dispatch({ type: "CLEAR_FILTER" })} to="/" className="mt-5 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Clear Filter
          </button>
        </div>
      </aside>
    </div>
  )
}

export default FilterBar