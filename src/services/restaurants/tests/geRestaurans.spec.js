import { axiosInstanse, env } from '../../HttpService'

import { getRestaurants } from '../getRestaurants'
import dataMock from './getRestaurantsDataMock'

jest.mock('../../HttpService')

const SERVISE_URL = env.REACT_APP_RESTAURANTS_API

describe('getMenuByRestaurantId', () => {
  afterEach(() => {
    jest.clearAllMocks()
  })
  it('should return the restaurant menu', async () => {
    //given
    const expectedResponse = {
      data: dataMock,
    }
    axiosInstanse.get.mockImplementationOnce(() =>
      Promise.resolve(expectedResponse)
    )
    //when
    const data = await getRestaurants()
    //then
    expect(data).toEqual(expectedResponse.data)
    expect(axiosInstanse.get).toHaveBeenCalledTimes(1)
    expect(axiosInstanse.get).toHaveBeenCalledWith(
      `${SERVISE_URL}`
    )
  })
})
