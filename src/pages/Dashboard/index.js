import { useState, useEffect } from 'react'

import * as Styled from './styles'

import searchIcon from '../../assets/search.svg'
import { useGetRestaurants } from '../../hooks'
import { RestaurantItem } from './components/RestaurantItem'

export const Dashboard = () => {
  const [{ status, data: restaurants }, getAllRestaurants] = useGetRestaurants()

  useEffect(() => {
    if(status==='idle') getAllRestaurants()
  },[status, getAllRestaurants])

  const [typedTex,setTypedText] = useState('')
  const [searchParam,setSearchParam] = useState('')
  const handleClick = () => setSearchParam(typedTex)

  return (
    <Styled.Wrapper>
      <Styled.Title>
        Bem-vindo ao Lista Rango
      </Styled.Title>
      <Styled.InputWrapper icon={searchIcon}>
        <Styled.InputIcon src={searchIcon} alt="search icon" onClick={handleClick}/>
        <Styled.Input 
          type="text" 
          placeholder="Buscar estabelecimento"
          value={typedTex}
          onChange={event => setTypedText(event.target.value)}
        />
        </Styled.InputWrapper>
        <Styled.RestaurantList>
          {restaurants?.filter(restaurant => restaurant?.name?.toLowerCase()?.includes(searchParam.toLowerCase()))?.map(restaurant => (
            <RestaurantItem key={restaurant.id} restaurant={restaurant} />
          ))}
        </Styled.RestaurantList>
    </Styled.Wrapper>
  )
}