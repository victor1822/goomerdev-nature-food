import { useState } from 'react'

import { getRestaurants } from '../../services'

const useGetRestaurants = () => {
  const initialState = {
    status: 'idle',
    data: [],
    error: false,
    feedback: 'Carregando...',
  }

  const [infoObject, setInfoObject] = useState(initialState)

  const getAllRestaurants = async () => {
    setInfoObject({
      status: 'loading',
    })
    try {
      const data = await getRestaurants()
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
          'Ops! Algo deu errado ao carregar a lista de restaurantes, tente novamente mais tarde!',
      })
    }
  }
  return [infoObject, getAllRestaurants]
}

export default useGetRestaurants
