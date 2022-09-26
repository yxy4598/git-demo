import xyRequest from "../request"

export function getCityAll() {
  return xyRequest.get({
    url: "/city/all"
  })
}