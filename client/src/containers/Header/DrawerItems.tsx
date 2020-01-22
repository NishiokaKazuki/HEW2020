import React from 'react'
import styled from 'styled-components'

import * as actions from "../../actions"
import * as actionTypes from "../../utils/actionTypes"

import { useSelector, useDispatch } from "react-redux"

import { Link } from 'react-router-dom'

import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import HomeIcon from '@material-ui/icons/Home'
import LockOpen from '@material-ui/icons/LockOpen'
import HowToReg from '@material-ui/icons/HowToReg'
import InfoIcon from '@material-ui/icons/Info'
import Lock from '@material-ui/icons/Lock'
import Done from '@material-ui/icons/Done'
import Search from '@material-ui/icons/Search'
import AccountCircle from '@material-ui/icons/AccountCircle'

const DrawerItems: React.FC = () => {
    const [open, setOpen] = React.useState(false)
    const dispatch = useDispatch()

    const isAuthenticated = useSelector((state: any) => state.AuthReducer.isAuthenticated)

    const handleDrawerToggle = () => {
        setOpen(!open)
    }
    const openLoginDialog = () => {
        dispatch({ type: actionTypes.OPEN_LOGIN_DIALOG })
        handleDrawerToggle()
    }

    const unAuthenticated = (
        <>
            <List onClick={handleDrawerToggle}>
                <StyledLink to="/">
                    <ListItem button>
                        <ListItemIcon>
                            <HomeIcon />
                        </ListItemIcon>
                        <ListItemText primary="トップページ" />
                    </ListItem>
                </StyledLink>
            </List>
            <List onClick={openLoginDialog}>
                <ListItem button>
                    <ListItemIcon>
                        <LockOpen />
                    </ListItemIcon>
                    <ListItemText primary="ログイン" />
                </ListItem>
            </List>
            <List onClick={handleDrawerToggle}>
                <StyledLink to="/signup">
                    <ListItem button>
                        <ListItemIcon>
                            <HowToReg />
                        </ListItemIcon>
                        <ListItemText primary="新規会員登録" />
                    </ListItem>
                </StyledLink>
            </List>
            <List onClick={handleDrawerToggle}>
                <StyledLink to="/about">
                    <ListItem button>
                        <ListItemIcon>
                            <InfoIcon />
                        </ListItemIcon>
                        <ListItemText primary="自動販売機とは" />
                    </ListItem>
                </StyledLink>
            </List>
        </>
    )

    const authenticated = (
        <>
            <List onClick={handleDrawerToggle}>
                <StyledLink to="/">
                    <ListItem button>
                        <ListItemIcon>
                            <HomeIcon />
                        </ListItemIcon>
                        <ListItemText primary="トップページ" />
                    </ListItem>
                </StyledLink>
            </List>
            <List onClick={handleDrawerToggle}>
                <StyledLink to="/history">
                    <ListItem button>
                        <ListItemIcon>
                            <Done />
                        </ListItemIcon>
                        <ListItemText primary="購入履歴" />
                    </ListItem>
                </StyledLink>
            </List>
            <List onClick={handleDrawerToggle}>
                <StyledLink to="/search">
                    <ListItem button>
                        <ListItemIcon>
                            <Search />
                        </ListItemIcon>
                        <ListItemText primary="店舗情報" />
                    </ListItem>
                </StyledLink>
            </List>
            <List onClick={handleDrawerToggle}>
                <StyledLink to="/mypage">
                    <ListItem button>
                        <ListItemIcon>
                            <AccountCircle />
                        </ListItemIcon>
                        <ListItemText primary="マイページ" />
                    </ListItem>
                </StyledLink>
            </List>
            <List onClick={dispatch(actions.jwtLogout)}>
                <StyledLink to="/logout">
                    <ListItem button>
                        <ListItemIcon>
                            <Lock />
                        </ListItemIcon>
                        <ListItemText primary="ログアウト" />
                    </ListItem>
                </StyledLink>
            </List>
            <List onClick={handleDrawerToggle}>
                <StyledLink to="/about">
                    <ListItem button>
                        <ListItemIcon>
                            <InfoIcon />
                        </ListItemIcon>
                        <ListItemText primary="自動販売機とは" />
                    </ListItem>
                </StyledLink>
            </List>
        </>
    )

    return (
        <>
        { isAuthenticated === true ? authenticated : unAuthenticated }
        </>
    )
}

const StyledLink = styled(Link)`
    text-decoration: none;
    color: black;
`

export default DrawerItems