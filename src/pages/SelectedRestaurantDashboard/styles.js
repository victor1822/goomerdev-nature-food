import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 24px 75px;
  background-color: #fff;
`

export const Header = styled.div`
  display: flex;
  column-gap: 21px;
`

export const HeaderPhoto = styled.img`
  height: 145px;
  width: 145px;
  object-fit: cover;
`

export const HeaderContent = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 2px;
  h1, h3, h4 {
    text-align: left;
    font-size: 24px;
    font-style: Montserrat;
    font-weight: normal;
    letter-spacing: 0px;
    color: #404040;
    opacity: 1;
  }
  h1 {
    padding-bottom: 2px;
  }
  h3 {
    font-size: 16px;
  }
  h4 {
    font-size: 12px;
    b {
      padding-left: 5px;
      font-weight: 600;
    }
  }
`

export const BackButton = styled.button`
  background-color: #009CA3;
  border-radius: 4px;
  /* align-self: center; */
  padding: 10px 12px;
  max-width: 300px;
  font-family: Montserrat;
  font-size: 14px;
  font-weight: normal;
  color: #fff;
  border: none;
  outline: none;
  cursor: pointer;
  margin: 20px 0;
`
export const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  background: #E6E6E6 0% 0% no-repeat padding-box;
  box-shadow: 0px 2px 4px #0000001A;
  border-radius: 20px;
  overflow: hidden;
  position: relative;
`

export const InputLabel = styled.h3`
  display: flex;
  padding: 11px 28px;
  background-color: #FFF;
  height: 100%;
  font-family: Montserrat;
  font-weight: 500;
  font-size: 16px;
`

export const Input = styled.input`
  display: flex;
  flex: 1;
  padding-right: 51px;
  padding-left: 10px;
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

export const InputIcon = styled.img`
  position: absolute;
  top: 50%;
  right: 25px;
  transform: translateY(-50%);
  width: 16px;
  height: 16px;
  cursor: pointer;
  transition: 0.25s;
  &:hover {
    opacity: 0.7;
  }
`