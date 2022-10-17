import { useAuthCtx } from "../context/AuthProvider"
import { Navigate, Link } from "react-router-dom"

const Portal = () => {
  const { redirect, redirectPath, setUsername, checkLoginOrRegister } = useAuthCtx()

  return (
    <main className='portal'>
      {redirect &&
        <Navigate to={redirectPath} replace={true} />
      }

      <header>
        <h2>Log in or create an account</h2>
        <p>Your Wordle stats will be linked to your account and will update wherever you play.</p>
      </header>

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

      <aside className='portal-or'>
        <hr />
        <p>or</p>
      </aside>

      <section className='portal-sso'>
        <button>Continue with Google</button>
        <button>Continue with Facebook</button>
        <button>Continue with Apple</button>
      </section>

      <p>
        <small>This app was developed as a side project for my portfolio. Since it wont be maintained forever, I figured it would be irresponsible to store any of your sensetive data so only a username is used to sign up. By omitting the email address there isnt a way to verify a password reset so I removed the ability.</small>
      </p>

      <aside className='portal-return'>
        <Link to='/'>
          Return to game
        </Link>
      </aside>
    </main>
  )
}

export default Portal
