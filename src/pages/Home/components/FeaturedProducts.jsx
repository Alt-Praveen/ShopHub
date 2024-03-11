import { useEffect, useState } from "react"
import ProductCard from "../../../components/ProductCard"

function FeaturedProducts() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchFeatured() {
      const response = await fetch(`${import.meta.env.VITE_APP_HOST}/featured_products/`)
      const data = await response.json();
      setProducts(data);
    }
    fetchFeatured();
  }, [])

  return (
    <section className="p-5 m-2">
      <h5 className="mb-2 text-2xl text-center font-bold underline tracking-tight text-gray-900">
        Featured Products
      </h5>
      <div className="flex flex-wrap justify-center lg:flex-row">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  )
}

export default FeaturedProducts