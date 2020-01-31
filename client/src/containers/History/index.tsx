import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'

import { makeStyles } from '@material-ui/core/styles'
import TreeView from '@material-ui/lab/TreeView'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import ChevronRightIcon from '@material-ui/icons/ChevronRight'
import TreeItem from '@material-ui/lab/TreeItem'

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
              <TreeView
                defaultCollapseIcon={<ExpandMoreIcon />}
                defaultExpandIcon={<ChevronRightIcon />}
              >
                <TreeItem nodeId="1" label="{history.company.name} {history.store.address}">
                  {history.products.map((product: any, i: any) => (
                    <TreeItem nodeId="{i}" label="{product.name} ¥{product.price}" />
                  ))}
                </TreeItem>
              </TreeView>
            </section>
          </>
        ))
      }
    </Root>
  )
}

const useStyles = makeStyles(theme => ({
  toolbar: theme.mixins.toolbar,
}))

const Root = styled.div`
      padding-bottom: 50px;
    `

const H1 = styled.h1`
      text-align: center;
    `

export default History