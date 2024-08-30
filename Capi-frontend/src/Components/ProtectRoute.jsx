import { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";

function ProtectRoute({ children }) {
    const [isAuth, setIsAuth] = useState(null); 

    useEffect(() => {
        auth();
    }, []);

    const auth = async () => {
        console.log(localStorage.getItem('token'));
        const token = localStorage.getItem('token');
        if (!token) {
            setIsAuth(false);
            return;
        }else {
            setIsAuth(true);
        }
        
    };

    if (isAuth === null) {
        return <div>Cargando...</div>;
    }

    return isAuth ? children : <Navigate to='/login' />;
}

export default ProtectRoute;
