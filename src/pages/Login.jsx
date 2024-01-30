import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate()
  async function handleLogin(event) {
    event.preventDefault();

    const authDetails = {
      email: event.target.email.value,
      password: event.target.password.value,
    }

    const response = await fetch("http://localhost:3000/login", {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(authDetails)
    })
    const data = await response.json()
    console.log(data);

    data.accessToken ? navigate("/products") : alert(`${data}`);

    if (data.accessToken) {
      sessionStorage.setItem("token", JSON.stringify(data.accessToken));
      sessionStorage.setItem("userId", JSON.stringify(data.user.id));
    }
  }

  return (
    <form onSubmit={handleLogin} className="p-10 max-w-sm mx-auto">
      <h1 className="mb-2 text-2xl text-center font-bold underline tracking-tight text-gray-900">Login</h1>
      <div className="mb-5">
        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 ">Your email</label>
        <input type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@flowbite.com" required />
      </div>
      <div className="mb-5">
        <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 ">Your password</label>
        <input type="password" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
      </div>
      <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Login</button>
    </form>
  )
}

export default Login