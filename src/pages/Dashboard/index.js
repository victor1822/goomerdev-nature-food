import { useState, useEffect } from 'react'

import * as Styled from './styles'

import searchIcon from '../../assets/search.svg'
import { useGetRestaurants } from '../../hooks'
import { RestaurantItem } from './components/RestaurantItem'

export const Dashboard = () => {
  const [{ status, data: restaurants, error, feedback }, getAllRestaurants] = useGetRestaurants()

  useEffect(() => {
    if(status==='idle') getAllRestaurants()
  },[status, getAllRestaurants])

  const [typedTex,setTypedText] = useState('')
  const [searchParam,setSearchParam] = useState('')
  const handleClick = () => setSearchParam(typedTex)

  const emptyArrayMessage = restaurants?.length === 0 
    ? 'Oops! Não há nenhum registro de restaurante disponível no momento, tente novamente mais tarde :('
    : 'Poxa, não há registro de restaurantes com este nome T.T'

  const feedbackMessage = feedback === '' 
    ? emptyArrayMessage
    : feedback

  const filteredList = restaurants?.filter(restaurant => restaurant?.name?.toLowerCase()?.includes(searchParam.toLowerCase()))

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
          {filteredList?.length === 0 && <Styled.Feedback error={error}>{feedbackMessage}</Styled.Feedback>}
          {filteredList?.map(restaurant => (
            <RestaurantItem key={restaurant.id} restaurant={restaurant} />
          ))}
        </Styled.RestaurantList>
    </Styled.Wrapper>
  )
}