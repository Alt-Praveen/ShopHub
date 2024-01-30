import { useCart } from "../../contexts";
import CartEmpty from "./components/CartEmpty";
import CartList from "./components/CartList";

function CartPage() {
  const { cartList } = useCart()
  const cartListLength = cartList.length

  return (
    <main>
      {cartListLength ? <CartList /> : <CartEmpty />}
    </main>
  )
}

export default CartPage