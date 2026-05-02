# City Liveability Dashboard

A beginner-friendly React app showing real-time weather and air quality for any city.

## Project Structure

```
city-dashboard/
├── index.html                  ← App entry point (HTML shell)
├── vite.config.js              ← Vite configuration
├── tailwind.config.js          ← Tailwind CSS configuration
├── postcss.config.js           ← PostCSS (required by Tailwind)
├── package.json                ← Project dependencies
└── src/
    ├── main.jsx                ← Mounts React into index.html
    ├── App.jsx                 ← Root component + routing + dark mode
    ├── index.css               ← Global styles (Tailwind imports)
    ├── hooks/
    │   └── useCityData.js      ← API logic (weather + AQI)
    ├── components/
    │   ├── SearchBar.jsx       ← Input + Search button
    │   ├── CityCard.jsx        ← Displays city weather/AQI data
    │   └── LoadingSpinner.jsx  ← Skeleton loading state
    └── pages/
        ├── HomePage.jsx        ← Main dashboard page (/)
        └── AboutPage.jsx       ← About page (/about)
```

## How to Run

### Step 1 — Get a free API key
1. Go to https://openweathermap.org
2. Click "Sign In" → "Create an Account" (free)
3. After signing up, go to your profile → "API Keys"
4. Copy your API key (it may take ~10 min to activate)

### Step 2 — Add your API key
Open `src/hooks/useCityData.js` and replace:
```js
const API_KEY = 'YOUR_OPENWEATHER_API_KEY'
```
with your actual key:
```js
const API_KEY = 'abc123yourrealkeyhere'
```

### Step 3 — Install and run
```bash
# Move into the project folder
cd city-dashboard

# Install all dependencies
npm install

# Start the dev server
npm run dev
```

Open http://localhost:5173 in your browser.

## Key Concepts Explained

| Concept | Where It's Used | What It Does |
|---|---|---|
| `useState` | SearchBar, App, HomePage | Stores values that change over time |
| `async/await` | useCityData.js | Waits for API responses before continuing |
| Custom Hook | useCityData.js | Reusable logic that any component can import |
| Props | CityCard, SearchBar | Pass data from parent → child component |
| React Router | App.jsx | Changes the page without a full reload |
| Tailwind classes | All components | Styling without writing CSS files |
| `dark:` prefix | All components | Applies styles only in dark mode |

## APIs Used (Both Free)

- **Weather**: `https://api.openweathermap.org/data/2.5/weather?q={city}&appid={key}&units=metric`
- **Air Quality**: `https://api.openweathermap.org/data/2.5/air_pollution?lat={lat}&lon={lon}&appid={key}`
