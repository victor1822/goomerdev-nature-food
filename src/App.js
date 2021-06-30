import { useState } from 'react'

import { SearchRestaurantDashboard, SelectedRestaurantDashboard } from './pages'

function App() {

  const [selectedRestaurant, setSelectedRestaurant] = useState({})

  return (
    <div className="App">
      {!selectedRestaurant?.id && <SearchRestaurantDashboard setSelectedRestaurant={setSelectedRestaurant} />}
      {selectedRestaurant?.id && <SelectedRestaurantDashboard setSelectedRestaurant={setSelectedRestaurant} selectedRestaurant={selectedRestaurant}/>}
    </div>
  );
}

export default App;
