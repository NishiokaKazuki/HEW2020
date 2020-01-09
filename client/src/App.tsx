import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom"
import styled from 'styled-components'

import {
    createMuiTheme,
    ThemeProvider
} from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'

import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import reducers from './reducers'

import ScrollToTop from './components/ScrollToTop'
import Header from './components/Header'
import Login from './components/Login'
import Top from './components/Top'
import MyPage from './components/MyPage'
import Signup from './components/Signup'
import About from './components/About'

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

const store = createStore(
    reducers,
    applyMiddleware(thunk),
)

const App: React.FC = () => {
    return (
        <>
            <Provider store={store}>
                <ThemeProvider theme={theme}>
                    <Router>
                        <ScrollToTop />
                        <Header />
                        <Login />
                        <Main>
                            <RenderRoute />
                        </Main>
                    </Router>
                </ThemeProvider>
            </Provider>
        </>
    )
}

const RenderRoute: React.FC = () => {
    return (
        <Switch>
            <Route exact path="/"><Top /></Route>
            <Route exact path="/mypage"><MyPage /></Route>
            <Route exact path="/signup"><Signup /></Route>
            <Route exact path="/about"><About /></Route>
        </Switch>
    )
}

const Main = styled.main`
    width: 500px
    margin: 0 auto
    background-color: red
`

export default App