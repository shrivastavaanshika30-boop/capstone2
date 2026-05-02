import React from 'react'


function getWeatherEmoji(id) {
  if (id >= 200 && id < 300) return '⛈️'  
  if (id >= 300 && id < 400) return '🌦️'  
  if (id >= 500 && id < 600) return '🌧️' 
  if (id >= 600 && id < 700) return '❄️'   
  if (id >= 700 && id < 800) return '🌫️'  
  if (id === 800)             return '☀️'   
  if (id > 800)               return '⛅'  
  return '🌤️'
}


function getAQIInfo(aqi) {
  const levels = [
    { label: 'Good',      color: 'bg-green-100 text-green-800'   },
    { label: 'Fair',      color: 'bg-yellow-100 text-yellow-800' },
    { label: 'Moderate',  color: 'bg-orange-100 text-orange-800' },
    { label: 'Poor',      color: 'bg-red-100 text-red-800'       },
    { label: 'Very Poor', color: 'bg-purple-100 text-purple-800' },
  ]
  return levels[aqi - 1] || { label: 'Unknown', color: 'bg-slate-100 text-slate-700' }
}


function MetricCard({ label, value, unit, sub }) {
  return (
    <div className="bg-slate-50 dark:bg-slate-700 rounded-xl p-3.5">
      <p className="text-xs font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wide mb-1">
        {label}
      </p>
      <p className="text-xl font-semibold text-slate-800 dark:text-white">
        {value}
        <span className="text-sm font-normal text-slate-500 dark:text-slate-400 ml-0.5">
          {unit}
        </span>
      </p>
      {sub && (
        <p className="text-xs text-slate-400 dark:text-slate-500 mt-0.5">{sub}</p>
      )}
    </div>
  )
}


function CityCard({ data }) {
  const emoji = getWeatherEmoji(data.weatherId)
  const aqiInfo = getAQIInfo(data.aqi)

  return (
    <div className="bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 p-5 shadow-sm">

      <div className="flex items-start justify-between mb-4">
        <div>
          <h2 className="text-xl font-semibold text-slate-800 dark:text-white">
            {data.name}, {data.country}
          </h2>
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-0.5 capitalize">
            {data.description}
          </p>
        </div>

        <span className="text-4xl">{emoji}</span>
      </div>


      <div className="flex items-center gap-2 mb-4">
        <span className="text-xs font-medium text-slate-500 dark:text-slate-400">
          Air Quality:
        </span>
        <span className={`text-xs font-semibold px-2.5 py-0.5 rounded-full ${aqiInfo.color}`}>
          {aqiInfo.label} (AQI {data.aqi}/5)
        </span>
      </div>


      <div className="grid grid-cols-2 md:grid-cols-3 gap-2.5">
        <MetricCard
          label="Temperature"
          value={`${data.temp}°`}
          unit="C"
          sub={`Feels like ${data.feelsLike}°C`}
        />
        <MetricCard
          label="Humidity"
          value={data.humidity}
          unit="%"
        />
        <MetricCard
          label="Wind Speed"
          value={data.windSpeed}
          unit=" km/h"
        />
        <MetricCard
          label="PM2.5"
          value={data.pm2_5}
          unit=" µg/m³"
          sub="Fine particles"
        />
        <MetricCard
          label="PM10"
          value={data.pm10}
          unit=" µg/m³"
          sub="Coarse particles"
        />
        <MetricCard
          label="NO₂"
          value={data.no2}
          unit=" µg/m³"
          sub="Nitrogen dioxide"
        />
      </div>


      <p className="text-xs text-slate-400 dark:text-slate-500 mt-3 text-right">
        Today: {data.tempMin}° – {data.tempMax}°C
      </p>
    </div>
  )
}

export default CityCard
