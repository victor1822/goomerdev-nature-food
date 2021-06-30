import { useState } from 'react'
import * as Styled from './styles'

export const RestaurantItem = ({ restaurant }) => {
  const verifyIfRestaurantIsOpen = () => {
    const nowDate = new Date()
    return restaurant?.hours?.some(hour => {
      if (!hour?.days) return false
      const fromArray = [...hour?.from?.split(':'),'00']
      const toArray = [...hour?.to?.split(':'),'00']
      var fromDate = new Date()
      fromDate.setHours(...fromArray)
      var toDate = new Date()
      toDate.setHours(...toArray)
      if(toDate.getTime() < fromDate.getTime()) toDate.setDate(toDate.getDate() + 1)
      return hour?.days.includes(nowDate.getDay() + 1) 
      && nowDate.getTime() >= fromDate.getTime() 
      && nowDate.getTime() <= toDate.getTime()
    })
  }
  const [restaurantIsOpen,setRestaurantIsOpen] = useState(verifyIfRestaurantIsOpen())
  setInterval(function(){ 
    setRestaurantIsOpen(verifyIfRestaurantIsOpen()) 
}, 60000);
  return (
    <Styled.Wrapper active={restaurantIsOpen}>
      <Styled.HideOverflow>
        <Styled.Image src={restaurant?.image} alt="restaurant image"/>
        <Styled.Content>
          <Styled.Title>{restaurant?.name}</Styled.Title>
          <Styled.Subtitle>{restaurant?.address}</Styled.Subtitle>
        </Styled.Content>
      </Styled.HideOverflow>
    </Styled.Wrapper>
  )
}