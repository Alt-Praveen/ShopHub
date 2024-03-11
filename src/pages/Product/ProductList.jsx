import { useEffect, useState } from "react"
import ProductCard from "../../components/ProductCard";
import FilterBar from "./components/FilterBar";
import useTitle from "../../hooks/useTitle";
import { useFilter } from "../../contexts";

function ProductList() {
  // const [products, setProducts] = useState([]);
  const [showFilter, setShowFilter] = useState(false)
  useTitle("Products");

  const { products, initialProductList } = useFilter();
  // console.log(products);

  useEffect(() => {
    async function fetchProducts() {
      const response = await fetch(`${import.meta.env.VITE_APP_HOST}/products`);
      const data = await response.json();
      // setProducts(data);
      initialProductList(data)
    }
    fetchProducts();
  }, [])

  return (
    <main>
      <section>
        <div className="flex justify-between border-solid text-2xl">
          <span>
            All Products ({products.length})
          </span>
          <span>
            <button onClick={() => setShowFilter(!showFilter)}>Filters</button>
          </span>
        </div>
        {showFilter && <FilterBar setShowFilter={setShowFilter} />}
        <div className="p-5 m-2 flex flex-wrap justify-center">
          {products.map((product) => (
            <ProductCard product={product} key={product.id} />
          ))}
        </div>
      </section>
    </main>
  )
}

export default ProductList