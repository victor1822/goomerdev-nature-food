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
    } catch (error) {
      console.log(error)
      setInfoObject({
        status: 'failed',
        data: [],
        error: true,
        feedback:
          'Oops! Algo deu errado ao carregar menu do restaurante, tente novamente mais tarde! :(',
      })
    }
  }
  return [infoObject, getRestaurantMenu]
}

export default useGetRestaurantMenu
