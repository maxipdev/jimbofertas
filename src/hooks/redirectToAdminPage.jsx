import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "./useAuth";

export const RedirectToAdminPage = ()=> {
    const { userState } = useAuth()

    return userState ? <Navigate to="/admin" /> : <Outlet />
}