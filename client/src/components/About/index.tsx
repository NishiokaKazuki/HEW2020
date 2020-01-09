import React from 'react'
import styled from 'styled-components'

import { makeStyles } from '@material-ui/core/styles'

const About: React.FC = () => {
  const classes = useStyles()

  return (
    <>
      <div className={classes.toolbar} />
      <h1>About</h1>
      <h1>About</h1>
      <h1>About</h1>
    </>
  )
}

const useStyles = makeStyles(theme => ({
  toolbar: theme.mixins.toolbar,
}))

export default About