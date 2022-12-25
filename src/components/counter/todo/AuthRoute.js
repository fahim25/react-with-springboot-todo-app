import React from "react"
import { Outlet, Navigate  } from "react-router-dom"

const AuthRoute = (props) =>{

    return(
        <>
            if(AuthService.isUserLogin())
                return <Outlet />
            else <Navigate  to="/login" />
            
        </>
    )

}


export default AuthRoute
