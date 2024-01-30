import { Navigate } from "react-router-dom";

function ProtectedRoutes({ children }) {
  const token = JSON.parse(sessionStorage.getItem("token"))

  return (
    token ? children : <Navigate to="/login" />
  )
}

export default ProtectedRoutes