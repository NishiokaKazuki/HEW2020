import React from 'react'
import User from '../../class/User'
import NotFound from '../../containers/NotFound'

const Auth = (props: any) => {
    if (User.isLoggedIn()) {
        return props.children
    } else {
        return (
            <NotFound />
        )
    }
}

export default Auth