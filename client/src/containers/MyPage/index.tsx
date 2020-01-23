import React from 'react'
import styled from 'styled-components'

import { makeStyles } from '@material-ui/core/styles'

const MyPage: React.FC = () => {
  const classes = useStyles()

  return (
    <Root>
      <div className={classes.toolbar} />
      <h1>MyPage</h1>
      <h1>MyPage</h1>
      <h1>MyPage</h1>
    </Root>
  )
}

const useStyles = makeStyles(theme => ({
  toolbar: theme.mixins.toolbar,
}))

const Root = styled.div`
  padding-bottom: 50px;
`

export default MyPage