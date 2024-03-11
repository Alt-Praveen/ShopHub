import { Link } from "react-router-dom"
import { useState } from "react"
import { useCart } from "../../contexts"
import DropdownLoggedIn from "../DropdownLoggedIn"
import DropdownLoggedOut from "../DropdownLoggedOut"

function Header() {
  const [showDropdown, setShowDropdown] = useState(false);
  const token = JSON.parse(sessionStorage.getItem("token"))
  const { cartList } = useCart()

  return (
    <header>
      <nav className="bg-white border-gray-200 dark:bg-gray-900">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
          <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
            <img src="/logo.png" className="h-10" alt="ShopHub Logo" />
          </Link>
          <div className="flex items-center space-x-6 rtl:space-x-reverse">
            <Link to="/cart" className="text-sm text-gray-500 dark:text-white hover:text-indigo-300">
              🛒({`${cartList.length}`})
            </Link>
            <span onClick={() => setShowDropdown(!showDropdown)} className="text-sm cursor-pointer text-blue-600 dark:text-blue-500 hover:text-indigo-300">
              Menu
            </span>
            {showDropdown && (token ? <DropdownLoggedIn setShowDropdown={setShowDropdown} /> : <DropdownLoggedOut setShowDropdown={setShowDropdown} />)}
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header