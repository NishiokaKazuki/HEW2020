import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import GoogleMapReact from 'google-map-react'
import { Me, Pin } from '../../components/MapIcons'
import requestApi from '../../helper/requestApi'
import apiKey from '../../config/googleMap'
import User from '../../class/User'
import { closeNotification } from '../../actions'

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
  const [shops, setShops] = React.useState()
  const [lat, setLat] = React.useState(0)
  const [lng, setLng] = React.useState(0)
  const center: iCenter = { lat: lat, lng: lng }

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(pos => {
      const lat = pos.coords.latitude
      const lng = pos.coords.longitude
      setLat(lat);
      setLng(lng);
      (async () => {
        const token = User.get('token')
        await requestApi(token, lat, lng)
          .then((res: { getStore: () => string }) => {
            setShops(JSON.parse(res.getStore()))
            console.log(res)
          })
          .catch((e: any) => {
            console.log(e)
          })
      })()
    })
  })

  return (
    <Root>
      <div className={classes.toolbar} />
      <H1>店舗検索</H1>

      <GoogleMapWrapper>
        <GoogleMapReact
          bootstrapURLKeys={{
            key: apiKey
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
          {console.log(shops)}
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
