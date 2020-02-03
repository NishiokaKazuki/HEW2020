import React from 'react'
import styled from 'styled-components'

import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'

const useStyles = makeStyles((theme: Theme) => createStyles({
  toolbar: {
    ...theme.mixins.toolbar
  },
}))

const About: React.FC = () => {
  const classes = useStyles()

  return (
    <Root>
      <div className={classes.toolbar} />
      <H1>About</H1>
      <StyledPaper>
        <section>
          <H1>自動販売機とは</H1>
          <p>自動販売機です。ほげほげほげほげほげほげほげほげほげほげほげほげ</p>
        </section>
      </StyledPaper>
      <StyledPaper>
        <section>
          <H1>構成要素</H1>
          <p>本アプリでは下記技術を用いており、各サービスの仕様変更ならびに障害発生時には、本アプリの提供・公開を中断する場合もございます。予めご了承下さい。</p>
          <H2>フロントエンド：</H2>
          <ul>
            <li>TypeScript</li>
            <li>React</li>
            <li>Redux</li>
            <li>Material-UI</li>
          </ul>
          <H2>バックエンド：</H2>
          <ul>
            <li>Go</li>
            <li>AWS</li>
            <li>Docker</li>
            <li>Kubernetes</li>
          </ul>
          <H2>Web API：</H2>
          <ul>
            <li>Google Maps</li>
          </ul>
          <H2>その他技術：</H2>
          <ul>
            <li>gRPC</li>
          </ul>
        </section>
      </StyledPaper>
      <StyledPaper>
        <section>
          <H1>プロフィール</H1>
          <FlexDiv>
            <Div>
              <H2>バックエンド</H2>
              <p>西岡 和樹</p>
              <p>HAL大阪 ロボット学科</p>
              <Ul>
                <li>
                  <a href="https://github.com/NishiokaKazuki" target="_blank" rel="noopener noreferrer">
                    GitHub
                  </a>
                </li>
                <li>
                  <a href="https://twitter.com/kazuking_93" target="_blank" rel="noopener noreferrer">
                    Twitter
                  </a>
                </li>
              </Ul>
            </Div>
            <Div>
              <H2>フロントエンド</H2>
              <p>近藤 大暉</p>
              <p>HAL大阪 IT学科</p>
              <Ul>
                <li>
                  <a href="https://github.com/hirokikondo86" target="_blank" rel="noopener noreferrer">
                    GitHub
                  </a>
                </li>
                <li>
                  <a href="https://twitter.com/KHiroki86_" target="_blank" rel="noopener noreferrer">
                    Twitter
                  </a>
                </li>
              </Ul>
            </Div>
          </FlexDiv>
        </section>
      </StyledPaper>
      <StyledPaper>
        <p>
          ※ 当アプリはジョークアプリとしてご利用下さい。<br />
          ※ 当アプリを使用した如何なる損害やトラブルの責任は一切負いかねますので予めご了承ください。
        </p>
      </StyledPaper>
    </Root>
  )
}

const Root = styled.div`
  padding-bottom: 50px;
`

const StyledPaper = styled(Paper)`
  margin: 0 20px;
  margin-bottom: 20px;
  padding: 20px;
`

const H1 = styled.h1`
  text-align: center;
`

const H2 = styled.h2`
  margin-top: 0;
  font-size: 18px;
`
const Ul = styled.ul`
  padding-left: 18px;
`
const FlexDiv = styled.div`
  display: flex;
  justify-content: center;
`
const Div = styled.div`
  margin: 0 30px;
`
export default About