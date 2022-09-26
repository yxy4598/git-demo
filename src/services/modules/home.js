import xyRequest from '../request'

export function getHomeHotSuggests() {
  return xyRequest.get({ 
    url: "/home/hotSuggests" 
  })
}

export function getHomeCategories() {
  return xyRequest.get({
    url: "/home/categories"
  })
}

export function getHomeHouseList(currentPage) {
  return xyRequest.get({
    url: "/home/houselist",
    params: {
      page: currentPage
    }
  })
}