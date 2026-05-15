
import { Navigate } from 'react-router-dom'

const ProtectedRoute = ({ children }) => {

   

    const isLogin = localStorage.getItem("isLogin")

   

    return (
        <div>
            {
                isLogin ? children : <Navigate to="/login" replace />
            }
        </div>
    )
}

export default ProtectedRoute