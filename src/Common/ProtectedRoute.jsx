
import { useNavigate } from 'react-router-dom'

const ProtectedRoute = ({ children }) => {

    const navigate = useNavigate()

    const isLogin = localStorage.getItem("isLogin")
    
    return (
        <div>
            {
                isLogin ? children : navigate("/login")
            }
        </div>
    )
}

export default ProtectedRoute