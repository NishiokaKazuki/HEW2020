import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'

import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom"

import * as actions from './actions'
import * as actionTypes from './utils/actionTypes'

import styled from 'styled-components'

import {
    createMuiTheme,
    ThemeProvider
} from '@material-ui/core/styles'

import ScrollToTop from './components/wrapper/ScrollToTop'
import Auth from './components/wrapper/Auth'
import Loading from './containers/Loading'
import Notification from './containers/Notification'
import Header from './containers/Header'
import Login from './containers/Login'
import Top from './containers/Top'
import MyPage from './containers/MyPage'
import Signup from './containers/Signup'
import About from './containers/About'
import History from './containers/History'
import Search from './containers/Search'

import User from './class/User'

export const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#0074bf',        // 基本の色
            contrastText: '#fff',   // テキストの色
        },
        secondary: {
            main: '#65ace4',
            contrastText: '#fff',
        }
    },
})

const App: React.FC = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        const token = User.get('token')
        if (token) {
            dispatch(actions.getUser(token))
            dispatch({ type: actionTypes.AUTHENTICATE_USER })
        }
    })

    return (
        <>
            <ThemeProvider theme={theme}>
                <Router>
                    <ScrollToTop />
                    <Loading />
                    <Header />
                    <Notification />
                    <Login />
                    <Main>
                        <Switch>
                            <Route exact path="/"><Top /></Route>
                            <Route exact path="/signup"><Signup /></Route>
                            <Route exact path="/about"><About /></Route>
                            <Auth>
                                <AuthRoute />
                            </Auth>
                        </Switch>
                    </Main>
                </Router>
            </ThemeProvider>
        </>
    )
}

const AuthRoute: React.FC = () => {
    return (
        <Switch>
            <Route exact path="/mypage"><MyPage /></Route>
            <Route exact path="/history"><History /></Route>
            <Route exact path="/search"><Search /></Route>
        </Switch>
    )
}

const Main = styled.main`
    width: 500px;
    max-width: 100vw;
    min-height: 100vh;
    margin: 0 auto;
`

export default App