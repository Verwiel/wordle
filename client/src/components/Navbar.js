import React from 'react'

const Navbar = () => {
  return (
    <nav>
      {/* Just make a login button, this links to other games */}
      <button>Hamburger</button>
      <h1>Wordle</h1>
      {/* All buttons open a modal */}
      <span>
        <button>Help</button>
        <button>Stats</button>
        <button>Settings</button>
      </span>
    </nav>
  )
}

export default Navbar
