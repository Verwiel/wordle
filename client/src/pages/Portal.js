import { useAuthCtx } from "../context/AuthProvider"
import { Navigate } from "react-router-dom"

const Portal = () => {
  const { redirect, redirectPath, setUsername, checkLoginOrRegister } = useAuthCtx()

  return (
    <main className='homepage'>
      {redirect &&
        <Navigate  to={redirectPath} replace={true} />
      }

      <h2>Log in or create a free account to save your stats.</h2>
      <p>Your Wordle stats will be linked to your account and will update wherever you play.</p>

      <form onSubmit={checkLoginOrRegister}>
        <label htmlFor="">
          Username
          <input 
            type="text" 
            minLength={8} 
            onChange={(e) => setUsername(e.target.value)} 
            required 
          />
        </label>

        <button>Continue</button>
      </form>

      <p>or</p>

      <button>Continue with Google</button>
      <button>Continue with Facebook</button>
      <button>Continue with Apple</button>
    </main>
  )
}

export default Portal

// Please enter a valid email address.
// Please enter your username.
