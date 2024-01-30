import { Link } from "react-router-dom"

function DropdownLoggedOut({ setShowDropdown }) {
  return (
    <div id="dropdownAvatar" className="absolute right-0 top-10 z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-40 dark:bg-gray-700 dark:divide-gray-600" >
      <ul onClick={() => setShowDropdown(false)} className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownUserAvatarButton">
        <li>
          <Link to="/products" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
            All products
          </Link>
        </li>
        <li>
          <Link to="/login" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
            Login
          </Link>
        </li>
        <li>
          <Link to="/register" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
            Register
          </Link>
        </li>
      </ul>
    </div>
  )
}

export default DropdownLoggedOut