import React from 'react'
import styled from 'styled-components'

import { makeStyles } from '@material-ui/core/styles'

const Search: React.FC = () => {
  const classes = useStyles()

  return (
    <Root>
      <div id="map"></div>
      <div className={classes.toolbar} />
      <H1>店舗検索</H1>

      <GoogleMapWrapper>
        <GoogleMapReact
          bootstrapURLKeys={{
            key: 'AIzaSyDXmfufz94HbjCTfGwUBF4TCIwJ2_j-KW8'
          }}
          center={center}
          defaultZoom={15}
          yesIWantToUseGoogleMapApiInternals
        >
          <Me
            lat={lat}
            lng={lng}
          />
          {/* <Pin>とshopをmap()で回す */}
        </GoogleMapReact>
      </GoogleMapWrapper>
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

const GoogleMapWrapper = styled.div`
  margin: 0 auto;
`

export default Search