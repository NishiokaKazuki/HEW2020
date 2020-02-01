import React from 'react'
import styled from 'styled-components'
import QRCode from "qrcode.react"
import User from "../../class/User"
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  toolbar: theme.mixins.toolbar,
}))

const MyPage: React.FC = () => {
  const classes = useStyles()
  const [display, setDisplay] = React.useState(false)
  const token: any = User.get('token')

  const renderQRCode = (
    <QRWrapper>
      <QRCode value={token} size={300} />
    </QRWrapper>
  )

  const toggleQR = () => {
    setDisplay(!display)
  }

  return (
    <Root>
      <div className={classes.toolbar} />
      <H1>マイページ</H1>
      <P>あなたのQRコード</P>
      {
        display ?
          renderQRCode
          :
          <P><Button type="button" onClick={toggleQR}>QRコードを表示する</Button></P>
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

const P = styled.p`
  text-align: center;
  margin-bottom: 40px;
`

const Button = styled.button`
  width: 50%;
  margin: 0 auto;
  margin-bottom: 10px;
  padding: 10px;
  background-color: #0073bf;
  color: white;
  font-size: 1.2em;
  border-radius: 5px;
  cursor: pointer;
`

const QRWrapper = styled.div`
  text-align: center;
`

export default MyPage