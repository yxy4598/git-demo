import axios from "axios"
import { BASE_URL, TIMEOUT } from "./config"
import useMainStore from "@/stores/modules/main"

const mainStore = useMainStore()

class XYRequest {
  constructor(baseURL, timeout=10000) {
    this.instance = axios.create({
      baseURL,
      timeout
    })

    // 我们将loading动画写入 request 的拦截器中
    this.instance.interceptors.request.use(config => {
      mainStore.isLoading = true
      return config
    }, err => {
      return err
    })

    this.instance.interceptors.response.use(res => {
      mainStore.isLoading = false
      return res
    }, err => {
      mainStore.isLoading = false
      return err
    })
  }

  request(config) {
    return new Promise((resolve, reject) => {
      this.instance.request(config).then(res => {
        resolve(res)
      }).catch(err => {
        reject(err)
      })
    })
  }

  get(config) {
    return this.request({...config, method: "get"})
  }

  post(config) {
    return this.request({...config, method: "post"})
  }
}

export default new XYRequest(BASE_URL, TIMEOUT)