import { useEffect } from "react"
import { useParams } from "react-router-dom"
import { useAuthCtx } from "../context/AuthProvider"

const Register = () => {
  const { username, password, passwordConfirm, setUsername, setPassword, setPasswordConfirm, createAccount } = useAuthCtx()
  const { user } = useParams()

  useEffect(() => {
    setUsername(user)
  }, [])

  return (
    <main>
      <h2>Finish creating your free account.</h2>
      <p>Your Wordle stats will be linked to your account and will update wherever you play.</p>

      <form onSubmit={createAccount}>
        <label htmlFor="">
          Username
          <input 
            type="text" 
            value={username} 
            minLength={8}
            onChange={(e) => setUsername(e.target.value)} 
            required 
          />
        </label>
        <label htmlFor="">
          Password
          <input 
            type="password" 
            value={password} 
            minLength={8}
            onChange={(e) => setPassword(e.target.value)} 
            required 
          />
        </label>
        <label htmlFor="">
          Confirm Password
          <input 
            type="password" 
            value={passwordConfirm} 
            minLength={8}
            onChange={(e) => setPasswordConfirm(e.target.value)} 
            required 
          />
        </label>
        <button>Create Account</button>
      </form>
    </main>
  )
}

export default Register
