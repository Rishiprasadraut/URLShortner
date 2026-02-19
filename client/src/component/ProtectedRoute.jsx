import { useContext } from "react"
import { AuthContext } from "../context/AuthContext"
import { Navigate } from "react-router-dom"

const ProtectedRoute = ({children}) => {
   
     const {state} = useContext(AuthContext);

     if(!state.token) return <Navigate to='/login' />

  return children
}

export default ProtectedRoute
