import { useState } from 'react'

import { getMenuByRestaurantId } from '../../services'

const useGetRestaurantMenu = () => {
  const initialState = {
    status: 'idle',
    data: [],
    error: false,
    feedback: 'Carregando...',
  }

  const [infoObject, setInfoObject] = useState(initialState)

  const toggleFeedback = () => setInfoObject(initialState)

  const getRestaurantMenu = async restaurantId => {
    setInfoObject({
      status: 'loading',
    })
    try {
      const data = await getMenuByRestaurantId(restaurantId)
      setInfoObject({
        status: 'succeeded',
        data: [...data],
        error: false,
        feedback: '',
      })
      setTimeout(() => toggleFeedback, 3000)
    } catch (error) {
      console.log(error)
      setInfoObject({
        status: 'failed',
        data: [],
        error: true,
        feedback:
          'Oops! Algo deu errado ao carregar menu do restaurante, tente novamente mais tarde! :(',
      })
      setTimeout(() => toggleFeedback, 3000)
    }
  }
  return [infoObject, getRestaurantMenu]
}

export default useGetRestaurantMenu
