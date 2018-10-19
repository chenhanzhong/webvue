import axios from 'axios'
import config from '../config'

export default {
  getToken (cb) {
    axios.get(`${config['api'].replace('api/', 'oauth/token/') + location.href.match(/\?code=.*/)}`)
      .then(res => {
        // debugger
        if (res && res.data) {
          cb(res.data)
        } else {
          this.$Message.error('token获取失败')
          console.log('token获取失败')
        }
      }).catch((e) => {
        console.log(e)
        localStorage.removeItem('AuthToken')
      })
  }
}
