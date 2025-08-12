import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./home/index";
import { useUser } from "../contexts/user";
import UnloggedRoute from "../routesProtection/UnloggedRoute";


const routes = createBrowserRouter([
    {
        path:'/',
        element: <UnloggedRoute><Home /></UnloggedRoute>
    },

])

export default function Routes({children}) {

    const { isLogged } = useUser();

    if(isLogged == null) return <div>not logged</div>;

    return (
        <RouterProvider router={routes}>
            {children}
        </RouterProvider>
    )
}