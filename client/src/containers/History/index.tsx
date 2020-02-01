import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'

import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  toolbar: theme.mixins.toolbar,
}))

const History: React.FC = () => {
  const classes = useStyles()
  const histories = useSelector((state: any) => state.HistoryReducer.histories)

  return (
    <Root>
      <div className={classes.toolbar} />
      <H1>購入履歴</H1>
      {
        histories.map((history: any, i: any) => (
          <>
            <section key={i}>
              <h1>{history.date}</h1>
              {history.products.map((product: any, i: any) => (
                <>
                  <p>{product.name} ¥{product.price}</p>
                </>
              ))}
            </section>
          </>
        ))
      }
    </Root>
  )
}

const Root = styled.div`
  padding-bottom: 50px;
`

const H1 = styled.h1`
  text-align: center;
`

export default History