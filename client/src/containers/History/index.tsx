import React, { useEffect } from 'react'

import { useSelector, useDispatch } from 'react-redux'
import * as actions from '../../actions'

import styled from 'styled-components'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import TreeView from '@material-ui/lab/TreeView'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import ChevronRightIcon from '@material-ui/icons/ChevronRight'
import TreeItem from '@material-ui/lab/TreeItem'

import User from '../../class/User'

const useStyles = makeStyles((theme: Theme) => createStyles({
  toolbar: {
    ...theme.mixins.toolbar
  },
}))

const History: React.FC = () => {
  const classes = useStyles()
  const dispatch = useDispatch()
  const histories = useSelector((state: any) => state.HistoryReducer.histories)
  const token = User.get('token')
  let isChanged = true

  useEffect(() => {
    dispatch(actions.getHistory(token))
  }, [isChanged])

  return (
    <Root>
      <div className={classes.toolbar} />
      <H1>一ヶ月の購入履歴</H1>
      <TreeView
        defaultCollapseIcon={<ExpandMoreIcon />}
        defaultExpandIcon={<ChevronRightIcon />}
      >
        {histories.length === 0 ? <P>購入した商品はありません</P> :
          histories.map((history: any, i: string) => (
            <React.Fragment key={i}>
              <TreeItem nodeId={i + ''} label={`${history.date}　` + `${history.store.address}　` + `${history.company.name}　` + `¥${history.sum}`}>
                {history.products.map((product: any, j: string) => (
                  <React.Fragment key={j}>
                    <TreeItem nodeId={j + ''} label={`${product.name}　　` + `¥${product.price}`}>
                    </TreeItem>
                  </React.Fragment>
                ))}
              </TreeItem>
            </React.Fragment>
          ))}
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
const P = styled.p`
  text-align: center;
`

export default History