import React from 'react'
import { useEffect } from "react"
import styled from 'styled-components'

import { makeStyles } from '@material-ui/core/styles'

import { SexTypes } from "../../proto/enums_pb"
import { SignUpRequest } from "../../proto/messages_pb"
import { WebAppServiceClient } from "../../proto/web_app_service_pb_service"

const Signup: React.FC = () => {
  const classes = useStyles()

  useEffect(() => {
    const req = new SignUpRequest()
    req.setName("近藤")
    req.setSex(SexTypes.SEX_MALE)
    req.setAge(22)
    req.setUserId("khiroki86")
    req.setUserPw("password")

    const client = new WebAppServiceClient("http://localhost:49201", {})
    client.signUp(req, (err, res) => {
      if (err || res === null) {
        throw err
      }
      console.log(res.getMessage())
    })
  })
  return (
    <Root>
      <div className={classes.toolbar} />
      <h1>Signup</h1>
      <h1>Signup</h1>
      <h1>Signup</h1>
    </Root>
  )
}

const useStyles = makeStyles(theme => ({
  toolbar: theme.mixins.toolbar,
}))

const Root = styled.div`
  padding-bottom: 50px;
`

export default Signup