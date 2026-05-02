import React from 'react'

function LoadingSpinner() {
  return (
    <div className="bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 p-5 shadow-sm">

      <div className="animate-pulse">


        <div className="flex justify-between items-start mb-4">
          <div>
            <div className="h-6 bg-slate-200 dark:bg-slate-700 rounded-lg w-40 mb-2"></div>
            <div className="h-4 bg-slate-200 dark:bg-slate-700 rounded w-24"></div>
          </div>
          <div className="w-10 h-10 bg-slate-200 dark:bg-slate-700 rounded-xl"></div>
        </div>

        <div className="h-5 bg-slate-200 dark:bg-slate-700 rounded-full w-32 mb-4"></div>


        <div className="grid grid-cols-2 md:grid-cols-3 gap-2.5">

          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className="bg-slate-100 dark:bg-slate-700 rounded-xl p-3.5">
              <div className="h-3 bg-slate-200 dark:bg-slate-600 rounded w-16 mb-2"></div>
              <div className="h-6 bg-slate-200 dark:bg-slate-600 rounded w-20"></div>
            </div>
          ))}
        </div>

      </div>
    </div>
  )
}

export default LoadingSpinner
