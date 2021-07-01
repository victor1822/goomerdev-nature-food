import { useState } from 'react'

import { SearchRestaurantDashboard, SelectedRestaurantMenu } from './pages'

function App() {

  const [selectedRestaurant, setSelectedRestaurant] = useState({})

  return (
    <div className="App">
      {!selectedRestaurant?.id && <SearchRestaurantDashboard setSelectedRestaurant={setSelectedRestaurant} />}
      {selectedRestaurant?.id && <SelectedRestaurantMenu setSelectedRestaurant={setSelectedRestaurant} selectedRestaurant={selectedRestaurant}/>}
    </div>
  );
}

export default App;
