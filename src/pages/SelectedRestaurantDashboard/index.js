import { useState } from 'react'

import * as Styled from './styles'

import searchIcon from '../../assets/search.svg'

export const SelectedRestaurantDashboard = ({selectedRestaurant, setSelectedRestaurant}) => {
  console.log(selectedRestaurant?.hours)

  const formatDay = day => {
    switch (day) {
      case 1: 
        return 'Domingo'
      case 2: 
        return 'Segunda'
      case 3:
        return 'Terça'
      case 4:
        return 'Quarta'
      case 5:
        return 'Quinta'
      case 6:
        return 'Sexta'
      default:
        return 'Sábado'
    }
  }

  // console.log(selectedRestaurant)
  const [typedText, setTypedText] = useState('')
  const [searchParam, setSearchParam] = useState('')

  console.log(searchParam)

  return (
    <Styled.Wrapper>
      <Styled.Header>
        <Styled.HeaderPhoto src={selectedRestaurant?.image} alt={`${selectedRestaurant?.name}'s avatar`}/>
        <Styled.HeaderContent>
          <h1>{selectedRestaurant?.name}</h1>
          <h2>{selectedRestaurant?.address}</h2>
          {!selectedRestaurant?.hours 
            ? (
              <h4>Não há horários disponíveis no momento</h4>
            )
            : (
              <>
                {selectedRestaurant?.hours?.map(hour => {
                  return (
                    <h4>
                      {`${formatDay(hour.days[0])} à ${formatDay(hour.days[hour.days.length - 1])}:`}
                      <b>
                        {`${hour?.from} às ${hour?.to}`}
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
    </Styled.Wrapper>
  )
}