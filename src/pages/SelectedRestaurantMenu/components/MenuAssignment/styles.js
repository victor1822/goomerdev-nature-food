import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`

export const Header = styled.div`
  border-bottom: 1px solid #404040;
  padding: 10px 13px;
  display: flex;
  justify-content: space-between;
  font-family: Montserrat;
  font-weight: 600;
  font-size: 16px;
  color: #404040;
`

export const HeaderIcon = styled.img`
  width: 16px;
  height: 9.71px;
  align-self: center;
  ${props => props.hide && css`
    transform: rotate(-90deg);
  `}
`

export const MenuItems = styled.div`
  display: flex;
  flex-wrap: wrap;
  column-gap: 30px;
  row-gap: 24px;
  /* justify-content: space-between; */
  padding-top: 24px;
`