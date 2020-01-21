import React from 'react'

import DrawerItems from "./DrawerItems"

import { makeStyles } from '@material-ui/core/styles'
import Drawer from '@material-ui/core/Drawer'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import Divider from '@material-ui/core/Divider'
import Hidden from '@material-ui/core/Hidden'

const Menu: React.FC = () => {
    const classes = useStyles()
    const [open, setOpen] = React.useState(false)

    const handleDrawerToggle = () => {
        setOpen(!open)
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
                        open={open}
                        onClose={handleDrawerToggle}
                        ModalProps={{
                            keepMounted: true, // Better open performance on mobile.
                        }}
                        classes={{
                            paper: classes.drawerPaper,
                        }}
                    >
                        <div className={classes.toolbar} />
                        <Divider />
                        <DrawerItems />
                    </Drawer>
                </Hidden>
            </nav>
        </div>
    )
}

const useStyles = makeStyles(theme => ({
    toolbar: theme.mixins.toolbar,
    drawerPaper: {
        width: '70%'
    }
}))

export default Menu