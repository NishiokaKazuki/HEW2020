import axios from 'axios'

/* TODO:
https://maps.googleapis.com/maps/api/place/textsearch/json?
query=%E3%82%B3%E3%83%B3%E3%83%93%E3%83%8B&location=43.059856,141.34308&radius=10000
&key=AIzaSyD5Z2K-JgM-o-rH2KzW4WwS85HOm2nuil0
*/

const keyword: string = 'コンビニ'
const url: string = `localhost:8000/api/v1/shop`
const client = axios.create({
    baseURL: url,
    timeout: 2000,
})

/**
 * 店舗検索関数
 *
 * @param {number} lat <緯度>
 * @param {number} lng <経度>
 * @return {json} res <店舗情報>
 */
const requestApi = (lat: number, lng: number): any => {
    client.get(url, {
        params: {
            keyword: keyword,
            lat: lat,
            lng: lng
        }
    })
    .then((res: any) => {
        return res
    })
    .catch((error) => {
        console.log(error)
    })
}

export default requestApi