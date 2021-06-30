import { useState } from 'react'

import { SearchRestaurantDashboard } from './pages/SearchRestaurantDashboard'

function App() {

  const [selectedRestaurant, setSelectedRestaurant] = useState({})

  return (
    <div className="App">
      {!selectedRestaurant?.id && <SearchRestaurantDashboard setSelectedRestaurant={setSelectedRestaurant} />}
    </div>
  );
}

export default App;
