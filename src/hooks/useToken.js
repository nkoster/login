import {useState} from 'react'

const storage = sessionStorage // can be replaced by localStorage

function useToken() {

  const getToken = () => {
    const tokenString = storage.getItem('token')
    const userToken = JSON.parse(tokenString)
    return userToken
  }

  const [token, setToken] = useState(getToken())

  const saveToken = userToken => {
    if (!userToken) {
      storage.removeItem('token')
      setToken(null)
      return
    }
    storage.setItem('token', JSON.stringify(userToken))
    setToken(userToken.token)
  }

  return {
    setToken: saveToken,
    token
  }

}

export default useToken
