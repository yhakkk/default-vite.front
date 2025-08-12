import { useUser } from "../contexts/user";
import { Navigate } from "react-router-dom";

export default function LoggedRoute({children}) {
    const { isLogged } = useUser();

    if(!isLogged) return <Navigate to="/login" />;

    return children;
}


