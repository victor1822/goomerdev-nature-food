import { useState } from 'react'

import { getRestaurants } from '../../services'

const useGetRestaurants = () => {
  const initialState = {
    status: 'idle',
    data: [],
    showFeedback: false,
    feedback: '',
  }

  const [infoObject, setInfoObject] = useState(initialState)

  const toggleFeedback = () => setInfoObject(initialState)

  const getAllRestaurants = async () => {
    setInfoObject({
      status: 'loading',
    })
    try {
      const data = await getRestaurants()
      setInfoObject({
        status: 'succeeded',
        data: [...data],
        showFeedback: false,
        feedback: '',
      })
      setTimeout(() => toggleFeedback, 3000)
    } catch (error) {
      console.log(error)
      setInfoObject({
        status: 'failed',
        data: [],
        showFeedback: true,
        feedback:
          'Ops! Algo deu errado ao carregar a lista de restaurantes, tente novamente mais tarde!',
      })
      setTimeout(() => toggleFeedback, 3000)
    }
  }
  return [infoObject, getAllRestaurants]
}

export default useGetRestaurants
