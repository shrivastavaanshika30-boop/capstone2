import React, { useState } from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'

function App() {
  const [darkMode, setDarkMode] = useState(false)

  return (
  
    <div className={darkMode ? 'dark' : ''}>
      <div className="min-h-screen bg-slate-50 dark:bg-slate-900 transition-colors duration-300">

       
        <nav className="bg-white dark:bg-slate-800 border-b border-slate-200 dark:border-slate-700 px-6 py-4">
          <div className="max-w-4xl mx-auto flex items-center justify-between">
           
            <Link to="/" className="text-lg font-semibold text-slate-800 dark:text-white">
               City Dashboard
            </Link>

            <div className="flex items-center gap-4">
          
              <Link to="/" className="text-sm text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400">
                Home
              </Link>
              <Link to="/about" className="text-sm text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400">
                About
              </Link>

       
              <button
                onClick={() => setDarkMode(!darkMode)}
                className="text-sm px-3 py-1.5 rounded-lg border border-slate-200 dark:border-slate-600 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors"
              >
                {darkMode ? ' Light' : 'Dark'}
              </button>
            </div>
          </div>
        </nav>



        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>

      </div>
    </div>
  )
}

export default App
