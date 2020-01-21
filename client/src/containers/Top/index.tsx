import React from 'react'
import styled from 'styled-components'

import { makeStyles } from '@material-ui/core/styles'

const TopPage: React.FC = () => {
  const classes = useStyles()

  return (
    <>
      <div className={classes.toolbar} />
      <h1>TopPage</h1>
      <h1>TopPage</h1>
      <h1>TopPage</h1>
    </>
  )
}

const useStyles = makeStyles(theme => ({
  toolbar: theme.mixins.toolbar,
}))

export default TopPage