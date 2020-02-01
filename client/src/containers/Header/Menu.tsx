import React from 'react'
import styled from 'styled-components'

import { useSelector, useDispatch } from "react-redux"
import * as actionTypes from "../../utils/actionTypes"

import DrawerItems from "./DrawerItems"

import { makeStyles } from '@material-ui/core/styles'
import Drawer from '@material-ui/core/Drawer'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import Divider from '@material-ui/core/Divider'
import Hidden from '@material-ui/core/Hidden'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'

import User from '../../class/User'

const useStyles = makeStyles(theme => ({
    drawerPaper: {
        width: '70%'
    }
}))

const Menu: React.FC = () => {
    const classes = useStyles();
    const dispatch = useDispatch()
    const drawerOpen = useSelector((state: any) => state.DrawerReducer.drawerOpen)
    const userName = useSelector((state: any) => state.UserReducer.name)

    const handleDrawerToggle = () => {
        dispatch({ type: actionTypes.TOGGLE_DRAWER })
    }

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
                        open={drawerOpen}
                        onClose={handleDrawerToggle}
                        ModalProps={{
                            keepMounted: true, // Better open performance on mobile.
                        }}
                        classes={{
                            paper: classes.drawerPaper,
                        }}
                    >
                        <StyledList><ListItem><StyledText>{User.get('token') ? userName + "様" : "ゲスト様"}</StyledText></ListItem></StyledList>
                        <Divider />
                        <DrawerItems />
                    </Drawer>
                </Hidden>
            </nav>
        </div>
    )
}

const StyledList = styled(List)`
    background-color: #ddd;
`

const StyledText = styled(ListItemText)`
    text-align: center;
`

export default Menu