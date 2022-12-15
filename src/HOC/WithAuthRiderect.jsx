import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'

function WithAuthRedirect(Component, RiderectTo) {
    const ComponentWithRedirect = props => {
        const user = useSelector(state => state.auth.user)
        return Boolean(user?.token) ? (
          <Component {...props} />
        ) : (
          <Navigate to={RiderectTo} />
        );    }
    return ComponentWithRedirect;
}

export default WithAuthRedirect;