import { axiosInstanse, env } from '../HttpService'

const SERVISE_URL = env.REACT_APP_RESTAURANTS_API

export const getMenuByRestaurantId = async restaurantId => {
  try {
    const { data } = await axiosInstanse.get(`${SERVISE_URL}/${restaurantId}/menu`)
    return data
  } catch (e) {
    throw e.response
  }
}