import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

import { useDispatch } from "react-redux"

import * as actionTypes from "../../utils/actionTypes"

import { makeStyles } from '@material-ui/core/styles'
import Drawer from '@material-ui/core/Drawer'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import Divider from '@material-ui/core/Divider'
import Hidden from '@material-ui/core/Hidden'
import HomeIcon from '@material-ui/icons/Home'
import LockOpen from '@material-ui/icons/LockOpen'
import HowToReg from '@material-ui/icons/HowToReg'
import InfoIcon from '@material-ui/icons/Info'

const Menu: React.FC = () => {
    const [open, setOpen] = React.useState(false)
    const dispatch = useDispatch()
    const classes = useStyles()

    const handleDrawerToggle = () => {
        setOpen(!open);
    }

    const openLoginDialog = () => {
        dispatch({ type: actionTypes.OPEN_LOGIN_DIALOG })
        handleDrawerToggle()
    }

    const drawer = (
        <div>
            <div className={classes.toolbar} />
            <Divider />
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
        </div>
    )

    return (
        <div>
            <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
            >
                <MenuIcon />
            </IconButton>
            <nav aria-label="menu">
                {/* The implementation can be swapped with js to avoid SEO duplication of Styledlinks. */}
                <Hidden smUp implementation="css">
                    <Drawer
                        variant="temporary"
                        anchor="left"
                        open={open}
                        onClose={handleDrawerToggle}
                        ModalProps={{
                            keepMounted: true, // Better open performance on mobile.
                        }}
                        classes={{
                            paper: classes.drawerPaper,
                        }}
                    >
                        {drawer}
                    </Drawer>
                </Hidden>
            </nav>
        </div>
    )
}

const StyledLink = styled(Link)`
    text-decoration: none
    color: black
`

const useStyles = makeStyles(theme => ({
    toolbar: theme.mixins.toolbar,
    drawerPaper: {
        width: '70%'
    }
}))

export default Menu