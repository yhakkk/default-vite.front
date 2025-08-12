import { useUser } from "../contexts/user";
import { Navigate } from "react-router-dom";

export default function UnloggedRoute({children}) {
    const { isLogged } = useUser();
 
    if(isLogged) return <Navigate to="/" />;

    return children;
}

