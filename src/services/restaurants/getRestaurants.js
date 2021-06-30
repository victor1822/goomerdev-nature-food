import { axiosInstanse, env } from '../HttpService'

const SERVISE_URL = env.REACT_APP_RESTAURANTS_API

export const getRestaurants = async () => {
  try {
    const { data } = await axiosInstanse.get(SERVISE_URL)
    return data
  } catch (e) {
    throw e.response
  }
}