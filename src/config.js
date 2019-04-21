
export default {
  api: 'http://localhost:7000',
  headers: () => {
    return {
      'Accept': 'application/vnd.sunmi.v1+json',
      'Authorization': localStorage.getItem('AuthToken')
    }
  }
}
