import { API_URL } from './url.js'

export default {
  async fetchApi (url:string, method:string = 'GET', data: any) {
    const response = await fetch(`${API_URL}/${url}`, {
      method,
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    const result = await response.json()
    return result
  }
}
