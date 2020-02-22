import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import requestApi from '../../helper/requestApi'
import styled from 'styled-components'

import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'

import GoogleMapReact from 'google-map-react'
import { Me, Pin } from '../../components/MapIcons'

const useStyles = makeStyles((theme: Theme) => createStyles({
  toolbar: {
    ...theme.mixins.toolbar
  },
}))

interface iCenter {
  lat: number,
  lng: number
}

const Search: React.FC = () => {
  const classes = useStyles()
  const [shops, setShop] = React.useState()
  const [lat, setLat] = React.useState(0)
  const [lng, setLng] = React.useState(0)
  const center: iCenter = { lat: lat, lng: lng }

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(pos => {
      const lat = pos.coords.latitude
      const lng = pos.coords.longitude
      const res = requestApi(lat, lng)

      setShop(res.results)
      setLat(lat)
      setLng(lng)
    })
  })

  return (
    <Root>
      <div className={classes.toolbar} />
      <H1>店舗検索</H1>

      <GoogleMapWrapper>
        <GoogleMapReact
          bootstrapURLKeys={{
            key: '*****'
          }}
          center={center}
          defaultZoom={15}
          yesIWantToUseGoogleMapApiInternals
        >
          <Me
            lat={lat}
            lng={lng}
          />
          {/* <Pin>とshopsをmap()で回す */}
          {shops.map((shop: any, i: string) => (
            <Pin
              key={i}
              lat={shop.lat}
              lng={shop.lng}
            />
          ))}
        </GoogleMapReact>
      </GoogleMapWrapper>
    </Root>
  )
}

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
