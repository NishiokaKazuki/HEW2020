import React from 'react'
import styled from 'styled-components'

import { useSelector, useDispatch } from "react-redux"
import { useHistory } from "react-router-dom"

import * as actions from '../../actions'
import * as actionTypes from "../../utils/actionTypes"

import { makeStyles } from '@material-ui/core/styles'

import { SexTypes } from "../../class/User"

const useStyles = makeStyles(theme => ({
  toolbar: theme.mixins.toolbar,
}))

const Signup: React.FC = () => {
  const classes = useStyles()

  let history = useHistory()
  const [name, setName] = React.useState("")
  const [sex, setSex] = React.useState(SexTypes.SEX_ALL)
  const [cfSex, setCfSex] = React.useState("該当なし")
  const [age, setAge] = React.useState(0)
  const [id, setId] = React.useState("")
  const [pw, setPw] = React.useState("")
  const [isConfirmed, setConfirmed] = React.useState(false)

  const dispatch = useDispatch()

  const handleOnChangeName = (e: any) => {
    setName(e.target.value)
  }
  const handleOnChangeId = (e: any) => {
    setId(e.target.value)
  }
  const handleOnChangePassword = (e: any) => {
    setPw(e.target.value)
  }

  const handleConfirmed = () => {
    if (isConfirmed === false) {
      const sexObj: HTMLInputElement = document.getElementById("sex") as HTMLInputElement
      const ageObj: HTMLInputElement = document.getElementById("age") as HTMLInputElement
      const sex: any = sexObj.value
      const age: any = ageObj.value
      setSex(sex)
      setAge(age)

      switch (sex) {
        case '1':
          setCfSex("男性")
          break
        case '2':
          setCfSex("女性")
          break
        default:
          setCfSex("該当なし")
          break
      }

      if (name == "") {
        return dispatch(actions.setNotification('error', '名前を入力してください'))
      } else if (id == "") {
        return dispatch(actions.setNotification('error', 'ユーザIDを入力してください'))
      } else if (pw == "") {
        return dispatch(actions.setNotification('error', 'パスワードを入力してください'))
      } else {
        setConfirmed(true)
      }
    } else {
      setConfirmed(false)
    }
  }

  const handleSignup = () => {
    if (name == "") {
      return dispatch(actions.setNotification('error', '名前を入力してください'))
    } else if (sex == null) {
      return dispatch(actions.setNotification('error', '性別を入力してください'))
    } else if (age == null) {
      return dispatch(actions.setNotification('error', '年齢を入力してください'))
    } else if (id == "") {
      return dispatch(actions.setNotification('error', 'ユーザIDを入力してください'))
    } else if (pw == "") {
      return dispatch(actions.setNotification('error', 'パスワードを入力してください'))
    } else {
      dispatch(actions.signup({ name, sex, age, id, pw }))
      history.push("/")
    }
  }

  const ages: number[] = [...Array(121).keys()]

  const unConfirmed = (
    <>
      <div className={classes.toolbar} />
      <H1>新規会員登録</H1>
      <Table>
        <tbody>
          <tr>
            <Th><label htmlFor="name">名前：</label></Th>
          </tr>
          <tr>
            <Td><Input type="text" name="name" id="name" onChange={handleOnChangeName} placeholder={name} required /></Td>
          </tr>
          <tr>
            <Th><label htmlFor="sex">性別：</label></Th>
          </tr>
          <tr>
            <Td>
              <Select id="sex">
                <option value={SexTypes.SEX_ALL}>該当なし</option>
                <option value={SexTypes.SEX_MALE}>男性</option>
                <option value={SexTypes.SEX_FEMALE}>女性</option>
              </Select>
            </Td>
          </tr>
          <tr>
            <Th><label htmlFor="age">年齢：</label></Th>
          </tr>
          <tr>
            <Td>
              <Select id="age">
                {ages.map((age, i) => <option key={i}>{age}</option>)}
              </Select>　歳
            </Td>
          </tr>
          <tr>
            <Th><label htmlFor="id">ユーザID：</label></Th>
          </tr>
          <tr>
            <Td><Input type="text" name="id" id="id" onChange={handleOnChangeId} placeholder={id} required /></Td>
          </tr>
          <tr>
            <Th><label htmlFor="password">パスワード：</label></Th>
          </tr>
          <tr>
            <Td><Input type="password" name="password" id="password" onChange={handleOnChangePassword} placeholder={pw} required /></Td>
          </tr>
        </tbody>
      </Table>
      <P><Button onClick={handleConfirmed}>確認</Button></P>
    </>
  )

  const confirmed = (
    <>
      <CfTable>
        <tbody>
          <tr>
            <CfTh>名前</CfTh>
            <CfTd>{name}</CfTd>
          </tr>
          <tr>
            <CfTh>性別</CfTh>
            <CfTd>{cfSex}</CfTd>
          </tr>
          <tr>
            <CfTh>年齢</CfTh>
            <CfTd>{age}</CfTd>
          </tr>
          <tr>
            <CfTh>ユーザID</CfTh>
            <CfTd>{id}</CfTd>
          </tr>
          <tr>
            <CfTh>パスワード</CfTh>
            <CfTd>{pw}</CfTd>
          </tr>
        </tbody>
      </CfTable>
      <P><Button onClick={handleSignup}>登録</Button></P>
      <P><Button onClick={handleConfirmed}>変更</Button></P>
    </>
  )

  return (
    <Root>
      {isConfirmed ? confirmed : unConfirmed}
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
  margin-top: 40px;
`

const Button = styled.button`
  width: 70%;
  margin: 0 auto;
  margin-bottom: 10px;
  padding: 10px;
  background-color: #0073bf;
  color: white;
  font-size: 1.2em;
  border-radius: 5px;
  cursor: pointer;
`
const Table = styled.table`
  width: 100%;
  margin-left: 10px;
`

const Th = styled.th`
   padding: 3px;
   padding-left: 10px;
   font-size: 1.2em;
   text-align: left;
 `

const Td = styled.td`
  width: 100%;
  height: 10px;
  padding: 10px;
`

const Input = styled.input`
  width: 90%;
  height: 25px;
`

const Select = styled.select`
  width: 80%;
  height: 25px;
`

const CfTable = styled.table`
  width: 80%;
  margin: 0 auto;
  margin-top: 80px;
  border: solid 1px #000;
  border-collapse: collapse;
`

const CfTh = styled.th`
  padding: 10px 20px;
  background-color: #ddd;
  border: solid 1px #000;
`

const CfTd = styled.td`
  padding: 10px 20px;
  text-align: center;
  border: solid 1px #000;
`

export default Signup