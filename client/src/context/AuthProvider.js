import { createContext, useState, useContext } from 'react'
import axios from 'axios'
import e from 'cors'

const authContext = createContext()

export const useAuthCtx = () => useContext(authContext)


export const AuthProvider = ({ children }) => {
  const [username, setUsername] = useState('')
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

    try {
      let res = await axios.post('/api/auth/signup', body)
      console.log(res.data)
    } catch (error) {
      console.log(error)
    }
  }

  const login = async (e) => {
    e.preventDefault()
    let body = { username: username, password: password }

    try {
      let res = await axios.post('/api/auth/signin', body)
      console.log(res)
    } catch (error) {
      console.log(error)
    }
  }


  return (
    <authContext.Provider value={{
      username,
      password,
      passwordConfirm, 
      redirect,
      redirectPath,
      setUsername,
      setPassword, 
      setPasswordConfirm,
      checkLoginOrRegister,
      createAccount,
      login
    }}>
      {children}
    </authContext.Provider>
  )
}
