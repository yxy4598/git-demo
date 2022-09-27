import xyrequest from "../request"

export function getDetailInfos(houseId) {
  return xyrequest.get({
    url: '/detail/infos',
    params: {
      houseId: houseId
    }
  })
}