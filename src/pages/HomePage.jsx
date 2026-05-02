import React, { useState } from 'react'
import SearchBar from '../components/SearchBar'
import CityCard from '../components/CityCard'
import LoadingSpinner from '../components/LoadingSpinner'
import useCityData from '../hooks/useCityData'

function HomePage() {

  const city1 = useCityData()
  const city2 = useCityData()


  const [showCompare, setShowCompare] = useState(false)

  return (
    <main className="max-w-4xl mx-auto px-4 py-8">

    
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-slate-800 dark:text-white mb-2">
          City Liveability Dashboard
        </h1>
        <p className="text-slate-500 dark:text-slate-400 text-sm">
          Search any city to see real-time weather and air quality data
        </p>
      </div>

      <section className="mb-6">
        <SearchBar
          onSearch={city1.fetchCity}
          placeholder="Try: Mumbai, London, Tokyo..."
        />
      </section>

   
      {city1.error && (
        <div className="mb-4 p-3.5 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-xl text-red-700 dark:text-red-400 text-sm">
          ⚠️ {city1.error}
        </div>
      )}

      {city1.loading && (
        <div className="mb-4">
          <LoadingSpinner />
        </div>
      )}

      
      {city1.cityData && !city1.loading && (
        <div className="mb-6">
          <CityCard data={city1.cityData} />
        </div>
      )}

   
      {city1.cityData && !showCompare && (
        <div className="text-center mb-6">
          <button
            onClick={() => setShowCompare(true)}
            className="
              text-sm text-blue-600 dark:text-blue-400
              border border-blue-200 dark:border-blue-700
              px-4 py-2 rounded-xl hover:bg-blue-50
              dark:hover:bg-blue-900/20 transition-colors
            "
          >
            + Compare with another city
          </button>
        </div>
      )}

   
      {showCompare && (
        <section>
         
          <div className="flex items-center gap-3 mb-5">
            <div className="flex-1 h-px bg-slate-200 dark:bg-slate-700"></div>
            <span className="text-xs font-medium text-slate-400 dark:text-slate-500 uppercase tracking-wide">
              Comparing with
            </span>
            <div className="flex-1 h-px bg-slate-200 dark:bg-slate-700"></div>
          </div>

          <div className="mb-4">
            <SearchBar
              onSearch={city2.fetchCity}
              placeholder="Enter second city..."
            />
          </div>

          {city2.error && (
            <div className="mb-4 p-3.5 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-xl text-red-700 dark:text-red-400 text-sm">
               {city2.error}
            </div>
          )}


          {city2.loading && (
            <div className="mb-4">
              <LoadingSpinner />
            </div>
          )}


          {city2.cityData && !city2.loading && (
            <CityCard data={city2.cityData} />
          )}


          <div className="text-center mt-4">
            <button
              onClick={() => { setShowCompare(false) }}
              className="text-xs text-slate-400 hover:text-slate-600 dark:hover:text-slate-300"
            >
              Remove comparison
            </button>
          </div>
        </section>
      )}


      {!city1.cityData && !city1.loading && !city1.error && (
        <div className="text-center py-16 text-slate-400 dark:text-slate-600">
          <p className="text-5xl mb-3">🔍</p>
          <p className="text-sm">Search a city above to get started</p>
        </div>
      )}

    </main>
  )
}

export default HomePage
