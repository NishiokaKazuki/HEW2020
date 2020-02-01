import React from 'react'
import styled from 'styled-components'

import { makeStyles } from '@material-ui/core/styles'

const TopPage: React.FC = () => {
  return (
    <Root>
      <H1>~ No Checkouts. ~</H1>
      <H1>自動販売機</H1>
    </Root>
  )
}

const Root = styled.div`
  padding-bottom: 50px;
`

const H1 = styled.h1`
  text-align: center;
`

export default TopPage