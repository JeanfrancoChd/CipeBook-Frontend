import { Navigate, Outlet } from "react-router-dom"

export const ProtectedRoute = ({ isAuthenticate, children, redirecTo = "/login" }) => {

    if (!isAuthenticate && !localStorage.getItem("user")) {
        return <Navigate to={redirecTo} />
    }
    return children ? children : <Outlet />
}
