import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import GitHubIcon from '@material-ui/icons/GitHub'

import Menu from './Menu'
import Share from './Share'

const Header: React.FC = () => {
    return (
        <>
            <div>
                <AppBar position="fixed">
                    <Toolbar>
                        <Menu />
                        <StyledLink to="/">
                            <GitHubIcon />自動販売機
                        </StyledLink>
                        <Share />
                    </Toolbar>
                </AppBar>
            </div>
        </>
    )
}

const StyledLink = styled(Link)`
    margin: auto;
    text-decoration: none;
    color: white;
`

export default Header