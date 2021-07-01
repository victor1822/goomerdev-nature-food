import { useState, useEffect } from 'react'

import * as Styled from './styles'

import searchIcon from '../../assets/search.svg'
import { formatDay } from '../../helpers/formatDay'
import { useGetRestaurantMenu } from '../../hooks'
import { MenuAssignment } from './components/MenuAssignment'

export const SelectedRestaurantMenu = ({selectedRestaurant, setSelectedRestaurant}) => {
  // console.log(selectedRestaurant)
  const [typedText, setTypedText] = useState('')
  const [searchParam, setSearchParam] = useState('')

  
  const [{status, data, error, feedback}, getRestaurantMenu] = useGetRestaurantMenu()
  const menu = data?.filter(item => item.name.toLowerCase().includes(searchParam.toLowerCase()))?.reduce((accumulator, menuItem) => {
    const targetMenuOption = accumulator.find(menuOption => menuOption.group === menuItem.group)
    if(targetMenuOption) {
      return [
        ...accumulator.filter(menuOption => menuOption.group !== targetMenuOption.group),
        {
          ...targetMenuOption,
          items: [
            ...targetMenuOption.items,
            menuItem
          ]
        }
      ]
    } else {
      return [...accumulator, {
        group: menuItem.group,
        items: [menuItem]
      }]
    }
  },[]) ?? []

  const emptyArrayMessage = data?.length === 0
    ? 'Oops! Não temos nenhum registro de cardápio para este restaurante :s'
    : 'Poxa, não há registro de um item do cardápio com este nome. Tente buscar outra coisa, tenho certeza que você vai encontrar algo delicioso!'

    const feedbackMessage = feedback === ''
      ? emptyArrayMessage
      : feedback

  console.log(menu)

  useEffect(() => {
    if(status === 'idle') getRestaurantMenu(selectedRestaurant.id)
  }, [status, selectedRestaurant.id, getRestaurantMenu])

  return (
    <Styled.Wrapper>
      <Styled.Header>
        <Styled.HeaderPhoto src={selectedRestaurant?.image} alt={`${selectedRestaurant?.name}'s avatar`}/>
        <Styled.HeaderContent>
          <h1>{selectedRestaurant.name}</h1>
          <h2>{selectedRestaurant.address}</h2>
          {!selectedRestaurant.hours 
            ? (
              <h4>Não há horários disponíveis no momento</h4>
            )
            : (
              <>
                {selectedRestaurant?.hours?.map((hour, index) => {
                  return (
                    <h4 key={index}>
                      {`${formatDay(hour.days[0])} à ${formatDay(hour.days[hour.days.length - 1])}:`}
                      <b>
                        {`${hour.from} às ${hour.to}`}
                      </b>
                    </h4>
                  )
                })}
              </>
            )}
        </Styled.HeaderContent>
      </Styled.Header>
      <Styled.BackButton 
        type='button'
        onClick={() => setSelectedRestaurant({})}
      >
        Voltar à lista de restaurantes
      </Styled.BackButton>
      <Styled.InputWrapper>
        <Styled.InputLabel>Buscar cardápio</Styled.InputLabel>
        <Styled.Input 
          type='text' 
          value={typedText} 
          onChange={event => setTypedText(event.target.value)}
        />
        <Styled.InputIcon 
          src={searchIcon} 
          alt='search icon'
          onClick={() => setSearchParam(typedText)}
        />
      </Styled.InputWrapper>
      <Styled.Menu>
        {menu?.length === 0 && <Styled.Feedback error={error}>{feedbackMessage}</Styled.Feedback>}
        {menu?.map(menuGroup => {
          return <MenuAssignment key={menuGroup.group} menuGroup={menuGroup} />
        })}
      </Styled.Menu>
    </Styled.Wrapper>
  )
}