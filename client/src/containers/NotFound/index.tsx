import React from 'react'
import styled from 'styled-components'

import { makeStyles } from '@material-ui/core/styles'

const NotFound: React.FC = () => {
    const classes = useStyles()

    return (
        <>
            <div className={classes.toolbar} />
            <H1>404 Not Found</H1>
            <P>申し訳御座いません。</P>
            <P>お探しのページは見つかりませんでした。</P>
        </>
    )
}

const useStyles = makeStyles(theme => ({
    toolbar: theme.mixins.toolbar,
}))

const H1 = styled.h1`
    text-align: center;
    margin-top: 50px;
`

const P = styled.p`
    text-align: center;
`

export default NotFound