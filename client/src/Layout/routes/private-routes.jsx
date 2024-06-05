import { Outlet, Navigate } from 'react-router-dom'

const PrivateRoutes = () => {
    // code for authentication for private routes i.e. admin pages
    let auth = {'token': false}
    return(
        auth.token ? <Outlet/> : <Navigate to="/login"/>
    )
}

export default PrivateRoutes