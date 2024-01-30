import { useContext, createContext, useReducer } from "react"
import { filterReducer } from "../reducers/filterReducer";

const initialState = {
  productList: [],
  sortBy: null,
  ratings: null,
  onlyBestSeller: false,
  onlyInStock: false,
}

const FilterContext = createContext(initialState);

export const FilterProvider = ({ children }) => {
  const [state, dispatch] = useReducer(filterReducer, initialState)

  function initialProductList(products) {
    dispatch({
      type: "PRODUCT_LIST",
      payload: {
        products: products,
      }
    })
  }

  function bestSeller(products) {
    return state.onlyBestSeller ? products.filter(product => product.best_seller === true) : products
  }

  function inStock(products) {
    return state.onlyInStock ? products.filter(product => product.in_stock === true) : products
  }

  function sort(products) {
    if (state.sortBy === "lowtohigh") {
      return products.sort((a, b) => Number(a.price) - Number(b.price))
    }
    if (state.sortBy === "hightolow") {
      return products.sort((a, b) => Number(b.price) - Number(a.price))
    }
    return products
  }

  function rating(products) {
    if (state.ratings === "4STARABOVE") {
      return products.filter(product => product.rating.rate >= 4)
    }
    if (state.ratings === "3STARABOVE") {
      return products.filter(product => product.rating.rate >= 3)
    }
    if (state.ratings === "2STARABOVE") {
      return products.filter(product => product.rating.rate >= 2)
    }
    if (state.ratings === "1STARABOVE") {
      return products.filter(product => product.rating.rate >= 1)
    }
    return products
  }

  const filteredProductList = rating(sort(inStock(bestSeller(state.productList))))

  const value = {
    products: filteredProductList,
    initialProductList,
    state,
    dispatch,
  }

  return (
    <FilterContext.Provider value={value}>
      {children}
    </FilterContext.Provider>
  )
}

export const useFilter = () => useContext(FilterContext)
