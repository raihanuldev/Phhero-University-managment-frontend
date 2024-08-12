import { ReactNode } from "react";
import { useAppSelector } from "../../redux/hooks";
import { currentToken } from "../../redux/store";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }:{children: ReactNode}) => {

    const token = useAppSelector(currentToken)
    if(!token){
        return <Navigate to='/login'/>
    }


  return children;
};

export default ProtectedRoute;
