
export const filterReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case "PRODUCT_LIST":
      return { productList: payload.products }

    case "SORT_BY":
      return { ...state, sortBy: payload.sortBy }

    case "RATINGS":
      return { ...state, ratings: payload.ratings }

    case "BEST_SELLER_ONLY":
      return { ...state, onlyBestSeller: payload.onlyBestSeller }

    case "IN_STOCK_ONLY":
      return { ...state, onlyInStock: payload.onlyInStock }

    case "CLEAR_FILTER":
      return {
        ...state,
        sortBy: null,
        ratings: null,
        onlyBestSeller: false,
        onlyInStock: false,
      }

    default:
      throw new Error("Not Case Found!")
  }
}
