import { Route, Routes } from "react-router-dom"
import { HomePage, ProductList, Register, Login, PageNotFound, OrderPage, CartPage, ProductDetail } from "../pages"
import ProtectedRoutes from "./ProtectedRoutes"

function AllRoutes() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="products" element={<ProductList />} />
        <Route path="products/:id" element={<ProductDetail />} />

        <Route path="register" element={<Register />} />
        <Route path="login" element={<Login />} />

        <Route path="cart" element={<ProtectedRoutes><CartPage /></ProtectedRoutes>} />
        <Route path="order-page" element={<ProtectedRoutes><OrderPage /></ProtectedRoutes>} />

        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  )
}

export default AllRoutes
