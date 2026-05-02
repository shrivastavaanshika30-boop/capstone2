import React from 'react'
import { Link } from 'react-router-dom'

function AboutPage() {
  return (
    <main className="max-w-2xl mx-auto px-4 py-12">
      <h1 className="text-2xl font-bold text-slate-800 dark:text-white mb-4">
        About This Project
      </h1>

      <div className="space-y-4 text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
        <p>
          This dashboard shows real-time weather and air quality data for any city
          in the world, using free APIs from OpenWeatherMap.
        </p>

        <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-4">
          <h2 className="font-semibold text-slate-800 dark:text-white mb-2">Tech Stack</h2>
          <ul className="space-y-1">
            <li><strong>React</strong> — UI framework</li>
            <li><strong>Vite</strong> — super-fast dev server</li>
            <li><strong>Tailwind CSS</strong> — utility-first styling</li>
            <li><strong>Axios</strong> — HTTP requests to the API</li>
            <li><strong>React Router</strong> — navigation between pages</li>
          </ul>
        </div>

        <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-4">
          <h2 className="font-semibold text-slate-800 dark:text-white mb-2">APIs Used</h2>
          <ul className="space-y-1">
            <li>OpenWeather Current Weather API</li>
            <li>OpenWeather Air Pollution API</li>
          </ul>
          <p className="mt-2 text-xs text-slate-400">Both are free with a free-tier account.</p>
        </div>
      </div>

      <Link
        to="/"
        className="inline-block mt-6 text-sm text-blue-600 dark:text-blue-400 hover:underline"
      >
        ← Back to Dashboard
      </Link>
    </main>
  )
}

export default AboutPage
