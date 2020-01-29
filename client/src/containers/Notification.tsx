import React from 'react'
import styled from 'styled-components'

import { useSelector, useDispatch } from "react-redux"

import * as actionTypes from "../utils/actionTypes"

import { makeStyles } from '@material-ui/core/styles'
import Snackbar from '@material-ui/core/Snackbar'
import SnackbarContent from '@material-ui/core/SnackbarContent'
import IconButton from '@material-ui/core/IconButton'
import CloseIcon from '@material-ui/icons/Close'
import CheckCircleIcon from '@material-ui/icons/CheckCircle'
import WarningIcon from '@material-ui/icons/Warning'
import ErrorIcon from '@material-ui/icons/Error'
import InfoIcon from '@material-ui/icons/Info'

interface iVariantIcon {
    [key: string]: any,    // シグネチャー
}

interface iClasses {
    [key: string]: string,
}

const variantIcon: iVariantIcon = {
    success: CheckCircleIcon,
    warning: WarningIcon,
    error: ErrorIcon,
    info: InfoIcon,
}

const Notification: React.FC = () => {
    const classes: iClasses = useStyles()

    const dispatch = useDispatch()
    const closeNotification = () => dispatch({ type: actionTypes.CLOSE_NOTIFICATION })

    const notificationOpen = useSelector((state: any) => state.NotificationReducer.notificationOpen)
    const variant = useSelector((state: any) => state.NotificationReducer.variant)
    const message = useSelector((state: any) => state.NotificationReducer.message)

    const Icon = variantIcon[variant]

    return (
        <Snackbar
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'center',
            }}
            open={notificationOpen}
            autoHideDuration={1200}
            onClose={closeNotification}
        >
            <SnackbarContent
                className={classes[variant]}
                aria-describedby="client-snackbar"
                message={
                    <Span>
                        <Icon className={classes.icon} />
                        {message}
                    </Span>
                }
                action={[
                    <IconButton
                        key="close"
                        aria-label="Close"
                        color="inherit"
                        onClick={closeNotification}
                    >
                        <StyledCloseIcon />
                    </IconButton>
                ]}
            />
        </Snackbar>
    )
}

const useStyles = makeStyles(() => ({
    success: {
        backgroundColor: '#0074bf',
    },
    error: {
        backgroundColor: '#c93a40',
    },
    info: {
        backgroundColor: '#0074bf',
    },
    warning: {
        backgroundColor: '#c93a40',
    },
    icon: {
        fontSize: 20,
        opacity: 0.9,
        marginRight: 10
    }
}))

const Span = styled.span`
    display: 'flex';
    alignItems: 'center';
`

const StyledCloseIcon = styled(CloseIcon)`
    font-size: 20;
`

export default Notification