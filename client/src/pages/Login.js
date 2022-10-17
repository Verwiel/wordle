import { useEffect } from "react"
import { useParams, Link } from "react-router-dom"
import { useAuthCtx } from "../context/AuthProvider"

const Login = () => {
  const { username, password, setUsername, setPassword, login, getUserFromUrl, clearRedirect } = useAuthCtx()
  const { user } = useParams()

  useEffect(() => {
    getUserFromUrl(user)
    return () => clearRedirect()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user])

  return (
    <main className='portal'>
      <header>
        <h2>Log in</h2>
        <p>Your Wordle stats will be linked to your account and will update wherever you play.</p>
      </header>

      <form onSubmit={login}>
        <label htmlFor="">
          Username
          <input 
            type="text" 
            minLength={8}  
            defaultValue={username} 
            onChange={(e) => setUsername(e.target.value)} 
            required 
          />
        </label>
        <label htmlFor="">
          Password
          <input 
            type="password" 
            minLength={8}
            defaultValue={password} 
            onChange={(e) => setPassword(e.target.value)} 
            required 
          />
        </label>

        {/* <p>Forgot your password?</p> */}

        <button>Log In</button>
      </form>

      <aside className='portal-return'>
        <Link to='/portal'>
          Return to portal
        </Link>
      </aside>
    </main>
  )
}

export default Login
