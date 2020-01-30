import React from 'react'
import styled from 'styled-components'

import { useSelector, useDispatch } from "react-redux"

import * as actions from '../../actions'
import * as actionTypes from "../../utils/actionTypes"

import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogTitle from '@material-ui/core/DialogTitle'
import DialogContent from '@material-ui/core/DialogContent'
import IconButton from '@material-ui/core/IconButton'
import Divider from '@material-ui/core/Divider'
import CloseIcon from '@material-ui/icons/Close'

const Login: React.FC = () => {
  const [email, setEmail] = React.useState("")
  const [password, setPassword] = React.useState("")

  const dispatch = useDispatch()
  const loginDialogOpen = useSelector((state: any) => state.LoginDialogReducer.loginDialogOpen)

  const closeLoginDialog = () => dispatch({ type: actionTypes.CLOSE_LOGIN_DIALOG })
  const handleLogin = () => dispatch(
    actions.jwtLogin({ email, password })
  )

  const handleOnChangeEmail = (e: any) => {
    setEmail(e.target.value)
  }
  const handleOnChangePassword = (e: any) => {
    setPassword(e.target.value)
  }

  return (
    <Dialog
      fullWidth={true}
      open={loginDialogOpen}
      onClose={closeLoginDialog}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <div>
        <Title>ログイン</Title>
        <StyledDialogActions>
          <IconButton
            key="close"
            aria-label="Close"
            color="inherit"
            onClick={closeLoginDialog}
          >
            <CloseIcon />
          </IconButton>
        </StyledDialogActions>
      </div>
      <DialogContent>
        <Table>
          <tbody>
            <tr>
              <Th><label htmlFor="email">メールアドレス</label></Th>
            </tr>
            <tr>
              <Td><Input type="email" name="email" id="email" onChange={handleOnChangeEmail} required /></Td>
            </tr>
            <tr>
              <Th><label htmlFor="password">パスワード</label></Th>
            </tr>
            <tr>
              <Td><Input type="password" name="password" id="password" onChange={handleOnChangePassword} required /></Td>
            </tr>
          </tbody>
        </Table>
      </DialogContent>
      <DialogActions><Button onClick={handleLogin}>ログイン</Button></DialogActions>
      <Divider variant="middle" />
      <DialogContent>
        <Title>初めてのお客様</Title>
        <P>サービスを最大限利用するには会員登録が必要です</P>
      </DialogContent>
      <DialogActions><Button>新規会員登録</Button></DialogActions>
    </Dialog>
  )
}

const Title = styled(DialogTitle)`
  text-align: center;
`

const P = styled.p`
  text-align: center;
  padding: 10px;
  font-size: 0.8em;
`

const Table = styled.table`
  width: 100%;
`

const Th = styled.th`
  padding: 3px;
  font-size: 1.2em;
`

const Td = styled.td`
  width: 100%;
  height: 10px;
  padding: 10px;
`

const Input = styled.input`
  width: 100%;
  height: 25px;
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
`

const StyledDialogActions = styled(DialogActions)`
  position: absolute;
  top: 0;
  right: 0;
`

export default Login