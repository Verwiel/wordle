import { useEffect } from "react"
import { useParams } from "react-router-dom"
import { useAuthCtx } from "../context/AuthProvider"

const Login = () => {
  const { username, password, setUsername, setPassword, login } = useAuthCtx()
  const { user } = useParams()

  useEffect(() => {
    setUsername(user)
  }, [])

  return (
    <main>
      <h2>Log in</h2>
      <p>Your Wordle stats will be linked to your account and will update wherever you play.</p>

      <form onSubmit={login}>
        <label htmlFor="">
          Username
          <input 
            type="text" 
            minLength={8}  
            value={username} 
            onChange={(e) => setUsername(e.target.value)} 
            required 
          />
        </label>
        <label htmlFor="">
          Password
          <input 
            type="password" 
            minLength={8}
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            required 
          />
        </label>

        {/* <p>Forgot your password?</p> */}

        <button>Log In</button>
      </form>
    </main>
  )
}

export default Login
