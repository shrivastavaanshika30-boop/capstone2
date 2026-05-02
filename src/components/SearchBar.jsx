import React, { useState } from 'react'

function SearchBar({ onSearch, placeholder = 'Enter a city name...', label }) {

  const [inputValue, setInputValue] = useState('')

  function handleSearch() {
    const trimmed = inputValue.trim() 
    if (trimmed) {
      onSearch(trimmed) 
    }
  }

  function handleKeyDown(event) {
    if (event.key === 'Enter') {
      handleSearch()
    }
  }

  return (
    <div className="w-full">

      {label && (
        <p className="text-sm font-medium text-slate-600 dark:text-slate-400 mb-2">
          {label}
        </p>
      )}


      <div className="flex gap-2">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)} 
          onKeyDown={handleKeyDown}
          placeholder={placeholder}
          className="
            flex-1 px-4 py-2.5 rounded-xl border border-slate-200
            dark:border-slate-600 bg-white dark:bg-slate-800
            text-slate-800 dark:text-white placeholder-slate-400
            focus:outline-none focus:ring-2 focus:ring-blue-500
            text-sm transition-colors
          "
        />
        <button
          onClick={handleSearch}
          className="
            px-5 py-2.5 bg-blue-600 hover:bg-blue-700 active:scale-95
            text-white text-sm font-medium rounded-xl transition-all
          "
        >
          Search
        </button>
      </div>
    </div>
  )
}

export default SearchBar
