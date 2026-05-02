import { useState } from 'react'
import axios from 'axios'

const API_KEY = '37961a30f164ef2612469231d6dfcde6'


const BASE_URL = 'https://api.openweathermap.org'

function useCityData() {

  const [cityData, setCityData] = useState(null)


  const [loading, setLoading] = useState(false)


  const [error, setError] = useState(null)


  async function fetchCity(cityName) {

    setLoading(true)
    setError(null)
    setCityData(null)

    try {

      const weatherResponse = await axios.get(
        `${BASE_URL}/data/2.5/weather`,
        {
          params: {
            q: cityName,      
            appid: API_KEY,   
            units: 'metric',   
          }
        }
      )
      const weather = weatherResponse.data

      
      const { lat, lon } = weather.coord
      const aqiResponse = await axios.get(
        `${BASE_URL}/data/2.5/air_pollution`,
        {
          params: { lat, lon, appid: API_KEY }
        }
      )
      const aqiInfo = aqiResponse.data.list[0]

     
      setCityData({
     
        name: weather.name,
        country: weather.sys.country,

       
        temp: Math.round(weather.main.temp),
        feelsLike: Math.round(weather.main.feels_like),
        tempMin: Math.round(weather.main.temp_min),
        tempMax: Math.round(weather.main.temp_max),

  
        humidity: weather.main.humidity,
        windSpeed: Math.round(weather.wind.speed * 3.6), 
        description: weather.weather[0].description,
        weatherId: weather.weather[0].id, 

        
        aqi: aqiInfo.main.aqi,


        pm2_5: aqiInfo.components.pm2_5.toFixed(1),
        pm10:  aqiInfo.components.pm10.toFixed(1),
        no2:   aqiInfo.components.no2.toFixed(1),
        o3:    aqiInfo.components.o3.toFixed(1),
      })

    } catch (err) {
   
      if (err.response?.status === 404) {
        setError(`City "${cityName}" not found. Check the spelling and try again.`)
      } else if (err.response?.status === 401) {
        setError('Invalid API key. Please add your OpenWeather API key in useCityData.js')
      } else {
        setError('Something went wrong. Please try again.')
      }
    } finally {

      setLoading(false)
    }
  }


  return { cityData, loading, error, fetchCity }
}

export default useCityData
