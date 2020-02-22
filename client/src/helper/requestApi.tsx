import { WebAppServiceClient } from "../proto/web_app_service_pb_service"
import { ShopRequest } from "../proto/messages_pb"

/**
 * 店舗検索関数
 *
 * @param {number} lat <緯度>
 * @param {number} lng <経度>
 * @return {object} res <店舗情報>
 */
const requestApi = (lat: number, lng: number): any => {
    return new Promise(resolve => {
        const req = new ShopRequest()
        req.setLat(lat)
        req.setLng(lng)

        const client = new WebAppServiceClient("http://localhost:8080", {})
        client.shop(req, (err: any, res: any) => {
            if (err || res === null) {
                throw err
            }
            resolve(res)
        })
    })
}

export default requestApi