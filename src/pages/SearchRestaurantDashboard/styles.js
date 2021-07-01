import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 32px 74px;
  @media (max-width: 768px) {
    padding: 20px 15px;
  }
`
export const Title = styled.h2`
  text-align: left;
  font-style: normal;
  font-family: Montserrat;
  font-size: 24px;
  color: #404040;
  opacity: 1;
  padding-bottom: 32px;
  @media (max-width: 768px) {
    font-size: 21px;
  }
`
export const InputWrapper = styled.div`
  display: flex;
  box-sizing: border-box;
  /* width: calc(100vw - 148px); */
  width: 100%;
  max-width: 840px;
  padding: 11px 39px;
  background-color: #FFF;
  box-shadow: 0px 2px 4px #00000029;
  border-radius: 15px;
  position: relative;
  @media (max-width: 768px) {
    padding: 11px 10px;
    padding-right: 39px;
  }
`

export const InputIcon = styled.img`
  width: 16px;
  height: 16px;
  position: absolute;
  top: 50%;
  right: 16px;
  transform: translateY(-50%);
  cursor: pointer;
  transition: 0.25s;
  &:hover {
    opacity: 0.7;
  }
`

export const Input = styled.input`  
  display: flex;
  width: 100%;
  letter-spacing: 0px;
  color: #404040;
  font-style: normal;
  font-family: Montserrat;
  font-size: 16px;
  border: none;
  background: transparent;
  @media (max-width: 768px) {
    font-size: 12px;
  }
`

export const Feedback = styled.h5`
  letter-spacing: 0px;
  color: #404040;
  font-style: normal;
  font-weight: normal;
  font-family: Montserrat;
  font-size: 12px;
  @media (max-width: 768px) {
    font-size: 10px;
  }
  ${props => props.error && css`
    color: tomato;
  `}
`

export const RestaurantList = styled.div`
  padding-top: 46px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  row-gap: 50px;
  column-gap: 48px;
  @media (max-width: 768px) {
    padding-top: 20px;
    row-gap: 15px;
  }
`