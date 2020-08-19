import axios from 'axios'
// import { config } from '../config'

const request = async ({ method, url, data }) => {
  try {
    const result = await axios({method: method, url: url, data: data});

    console.log('HTTP status', result.status)
    console.log('HTTP response data', result.data)

    return result;
  
  } catch (e) {
    console.log('request', e)
    return null
  }
}

export {
  request,
}
