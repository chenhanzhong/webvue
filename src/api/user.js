import axios from 'axios'

export default {
  postUser (cb, options) {
    console.log(options, 88)
    axios({
      method: 'post',
      url: 'http://chenhanzhong.com:7000/users/create',
      headers: {
        'Content-type': 'application/x-www-form-urlencoded'
      },
      data: options,
      transformRequest: [function (data) {
        let ret = ''
        for (let it in data) {
          ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&'
        }
        return ret
      }]
    })
      .then(res => {
        if (res && res.data) {
          cb(res.data)
        } else {
          this.$Message.error('登陆失败')
          console.log('登陆失败')
        }
      }).catch((e) => {
        console.log(e)
      })
  }
}
