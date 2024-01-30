import { Link, useNavigate } from "react-router-dom"

function DropdownLoggedIn({ setShowDropdown }) {
  const navigate = useNavigate();

  function handleSignout() {
    sessionStorage.removeItem("token");
    sessionStorage.removeItem("userId");
    navigate("/")
  }

  return (
    <div onClick={() => setShowDropdown(false)} id="dropdownAvatar" className="absolute right-0 top-10 z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600" >
      <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownUserAvatarButton">
        <li>
          <Link to="/products" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
            All products
          </Link>
        </li>
      </ul>
      <div className="py-2">
        <span onClick={handleSignout} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">
          Sign out
        </span>
      </div>
    </div>
  )
}

export default DropdownLoggedIn