import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'

import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import TreeView from '@material-ui/lab/TreeView'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import ChevronRightIcon from '@material-ui/icons/ChevronRight'
import TreeItem from '@material-ui/lab/TreeItem'

const useStyles = makeStyles((theme: Theme) => createStyles({
  toolbar: {
    ...theme.mixins.toolbar
  },
}))

const History: React.FC = () => {
  const classes = useStyles()
  const histories = useSelector((state: any) => state.HistoryReducer.histories)

  return (
    <Root>
      <div className={classes.toolbar} />
      <H1>購入履歴</H1>
      <TreeView
        defaultCollapseIcon={<ExpandMoreIcon />}
        defaultExpandIcon={<ChevronRightIcon />}
      >
        {
          histories.map((history: any, i: any) => (
            <>
              <TreeItem nodeId={i} label={history.date}>
                <label>{history.store.address} {history.company.name} {history.sum}</label>
                {history.products.map((product: any, i: any) => (
                  <>
                    <TreeItem nodeId={i} label={product.name}>
                    </TreeItem>
                  </>
                ))}
              </TreeItem>
            </>
          ))
        }
      </TreeView>
    </Root >
  )
}

const Root = styled.div`
  padding-bottom: 50px;
`

const H1 = styled.h1`
  text-align: center;
`

export default History