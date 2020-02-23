import React, { useEffect } from 'react'
import styled from 'styled-components'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import GoogleMapReact from 'google-map-react'
import { Me, Pin } from '../../components/MapIcons'
import requestApi from '../../helper/requestApi'
import key from '../../config/map'
import User from '../../class/User'

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
  const [shops, setShops] = React.useState([])
  const [lat, setLat] = React.useState(0)
  const [lng, setLng] = React.useState(0)
  const center: iCenter = { lat: lat, lng: lng }
  const token = User.get('token')
  let isChanged = true

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(pos => {
      const lat = pos.coords.latitude
      const lng = pos.coords.longitude
      setLat(lat);
      setLng(lng);
      (async () => {
        await requestApi(token, lat, lng)
          .then((res: { getStore: () => string }) => {
            const shopRes = JSON.parse(res.getStore())
            setShops(shopRes.results)
          })
          .catch((e: any) => {
            console.log(e)
          })
      })()
    })
  }, [isChanged])

  return (
    <Root>
      <div className={classes.toolbar} />
      <H1>店舗検索</H1>
      {shops.length === 0 ?
        <P>周辺にお店がありません…。</P> :
        <P>周辺にお店が {shops.length} 個ありました。</P>}
      <GoogleMapWrapper>
        <GoogleMapReact
          bootstrapURLKeys={{
            key: key
          }}
          center={center}
          defaultZoom={15}
          yesIWantToUseGoogleMapApiInternals
        >
          <Me
            lat={lat}
            lng={lng}
          />
          {shops.map((shop: any, i: any) => (
            <Pin
              key={i}
              lat={shop.geometry.location.lat}
              lng={shop.geometry.location.lng}
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
const GoogleMapWrapper = styled.div`
  margin: 0 auto;
  width: 500px;
  height: 500px;
`
const H1 = styled.h1`
  text-align: center;
`
const P = styled.p`
  text-align: center;
`

export default Search
