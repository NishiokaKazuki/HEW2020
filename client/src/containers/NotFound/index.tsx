import React from 'react'
import styled from 'styled-components'

import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'

const useStyles = makeStyles((theme: Theme) => createStyles({
    toolbar: {
        ...theme.mixins.toolbar
    },
}))

const NotFound: React.FC = () => {
    const classes = useStyles()

    return (
        <Root>
            <div className={classes.toolbar} />
            <H1>404 Not Found</H1>
            <P>申し訳御座いません。</P>
            <P>お探しのページは見つかりませんでした。</P>
        </Root>
    )
}


const Root = styled.div`
  padding-bottom: 50px;
`

const H1 = styled.h1`
    text-align: center;
    margin-top: 50px;
`

const P = styled.p`
    text-align: center;
`

export default NotFound