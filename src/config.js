
export default {
  sso: 'http://test.sso.sunmi.com/login?clientId=sm5b99e044cf27a',
  api: 'http://testapi.kaoqin.sunmi.com/api/',
  headers: () => {
    return {
      'Accept': 'application/vnd.sunmi.v1+json',
      'Authorization': localStorage.getItem('AuthToken')
    }
  }
}
