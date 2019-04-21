import axios from 'axios'
import { Message } from 'iview'
import {Encrypt} from '../utils/aes'
import config from '../config'

export default {
  postUser (cb, {url, data}) {
    let formData = new FormData()
    formData.append('name', Encrypt(data.name))
    formData.append('pwd', Encrypt(data.pwd))
    axios({
      method: 'post',
      url: `${config.api}/api/${url}`,
      headers: {
        'Content-type': 'multipart/form-data'
      },
      data: formData
    })
      .then(res => {
        if (res.data.success || res.data.code === '200') {
          cb(res.data.token)
        } else {
          Message.error(res.data.message)
        }
      }).catch((e) => {
        Message.error(e.message)
      })
  },
  getAuth (cb, token) {
    let formData = new FormData()
    formData.append('token', token)
    axios({
      method: 'post',
      url: `${config.api}/api/auth`,
      headers: {
        'Content-type': 'multipart/form-data'
      },
      data: formData
    }).then(res => {
      if (res.data.success || res.data.code === '200') {
        cb(res.data.data)
      } else {
        Message.error(res.data.message)
      }
    }).catch((e) => {
      Message.error(e.message)
    })
  }
}
