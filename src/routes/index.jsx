import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./home/index";
import Landing from "./landing/index";
import { useUser } from "../contexts/user";
import UnloggedRoute from "../routesProtection/UnloggedRoute";
import MainLayout from "../layouts/MainLayout";


const routes = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        children: [
            {
                index: true,
                element: (
                    <UnloggedRoute>
                        <Landing />
                    </UnloggedRoute>
                )
            },
            {
                path: 'home',
                element: (
                    <UnloggedRoute>
                        <Home />
                    </UnloggedRoute>
                )
            }
        ]
    }
]);

export default function Routes() {

    const { isLogged } = useUser();

    if(isLogged == null) return <div>not logged</div>;

    return (
        <RouterProvider router={routes} />
    )
}