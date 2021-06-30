import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  box-shadow: 0px 2px 4px #00000029;
  border-radius: 4px;
  position: relative;
  display: flex;
  flex: 1;
  max-width: 300px;
  cursor: pointer;

  &:before {
    position: absolute;
    top: 0;
    right: 0;
    transform: translateX(50%) translateY(-50%);
    font-style: normal;
    font-family: Montserrat;
    font-size: 10px;
    color: #FFFFFF;
    opacity: 1;
    width: 48px;
    height: 48px;
    background: #2B0D61 0% 0% no-repeat padding-box;
    box-shadow: 0px 1px 2px #00000029;
    opacity: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    text-align: center;
    padding: 6px;
  ${props => props.active ? 
    css`
      content: 'Aberto agora';
    ` 
    : css`
      content: 'Fechado agora';
      background: #B5ABD4 0% 0% no-repeat padding-box;
    `}
  }
  @media (max-width: 768px) {
    max-width: 262px;
    &:before {
      box-sizing: border-box;
      border-radius: 5px 5px 0 0;
      width: 100%;
      height: fit-content;
      top: 0;
      left: 0;
      transform: initial;
    }
  }
`
export const HideOverflow = styled.div`
  overflow: hidden;
  border-radius: 4px;
  display: flex;
  flex:1;
  justify-content: space-between;
  background: #FFFFFF 0% 0% no-repeat padding-box;
`

export const Image = styled.img`
  width: 100px;
  height: 100%;
  object-fit: cover;
`

export const Content = styled.div`
  padding: 32px 26px;
  display: flex;
  flex-direction: column;
  row-gap: 2px;
  @media (max-width: 768px) {
    padding: 15px 10px;
    padding-top: 35px;
  }
`

export const Title = styled.h4`
  font-style: normal;
  font-family: Montserrat;
  font-size: 16px;
  color: #404040
`

export const Subtitle = styled(Title)`
  font-size: 12px;
`