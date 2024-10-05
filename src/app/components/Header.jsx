import React from 'react'

const Header = () => {
  return (
    <header className="w-9/12 bg-white p-4 flex justify-between items-center mx-auto">
    <div className="flex items-center">
      <img src="/logo.png" alt="Logo" className="w-5 h-5" />
    </div>
    <nav className="flex items-center space-x-4">
      <a href="#" className="text-sm font-semibold">JOIN COMMUNITY</a>
      <a href="#" className="text-sm font-semibold">LOGIN</a>
      <a href="#" className="text-sm font-semibold">SELF CHECK</a>
    </nav>
  </header>
  )
}

export default Header
