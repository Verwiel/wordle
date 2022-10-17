import { createContext, useState, useContext } from 'react'
import axios from 'axios'

const authContext = createContext()

export const useAuthCtx = () => useContext(authContext)

export const AuthProvider = ({ children }) => {
  let wordleStorage = localStorage.getItem("wordleClone")
  let token = wordleStorage ? wordleStorage.token : ''

  const [username, setUsername] = useState(wordleStorage ? wordleStorage.username : '')
  const [password, setPassword] = useState('')
  const [passwordConfirm, setPasswordConfirm] = useState('')
  const [redirect, setRedirect] = useState(false)
  const [redirectPath, setRedirectPath] = useState('')

  const checkLoginOrRegister = async (e) => {
    e.preventDefault()
    try {
      let res = await axios.get(`/check-user?username=${username}`)
      setRedirectPath(res.data.redirectPath)
      setRedirect(true)
    } catch (error) {
      console.log(error)
    }
  }

  const createAccount = async (e) => {
    e.preventDefault()
    let body = { username: username, password: password }

    if(password !== passwordConfirm){
      alert('Passwords do not match')
    } else {
      try {
        let res = await axios.post('/api/auth/signup', body)
        const { username, accessToken } = res.data
        let storageData = {
          token: accessToken,
          username: username
        }
        localStorage.setItem("wordleClone", JSON.stringify(storageData))
      } catch (error) {
        console.log(error)
      }
    }
  }

  const login = async (e) => {
    e.preventDefault()
    let body = { username: username, password: password }

    try {
      let res = await axios.post('/api/auth/signin', body)
      const { username, accessToken } = res.data
      let storageData = {
        token: accessToken,
        username: username
      }
      localStorage.setItem("wordleClone", JSON.stringify(storageData))
      console.log('Logged In!')
    } catch (error) {
      console.log(error)
    }
  }

  const getUserFromUrl = (username) => {
    setUsername(username)
  }

  const clearRedirect = () => {
    setRedirectPath('')
    setRedirect(false)
  }

  return (
    <authContext.Provider value={{
      username,
      password,
      passwordConfirm, 
      redirect,
      redirectPath,
      token,
      setUsername,
      setPassword, 
      setPasswordConfirm,
      checkLoginOrRegister,
      createAccount,
      login,
      getUserFromUrl,
      clearRedirect
    }}>
      {children}
    </authContext.Provider>
  )
}
