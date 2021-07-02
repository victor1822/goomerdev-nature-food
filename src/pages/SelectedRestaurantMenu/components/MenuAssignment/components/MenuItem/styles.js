import styled from "styled-components";

export const Wrapper = styled.div`
  cursor: pointer;
  display: flex;
  flex: 1;
  min-width: 300px;
  max-width: 400px;
  position: static;
  @media (max-width: 500px) {
    min-width: initial;
    max-width: initial;
    flex-wrap: wrap;
    box-sizing: border-box;
  }
  /* max-height: 115px; */
  background: #FFFFFF 0% 0% no-repeat padding-box;
  box-shadow: 0px 4px 8px #00000029;
  > img {
    display: flex;
    width: 115px;
    height: auto;
    min-height: 115px;
    object-fit: cover;
    @media (max-width: 500px) {
      width: 100%;
    }
  }
  .content {
    padding: 15px 16px;
    display: flex;
    flex-direction: column;
    row-gap: 8px;
    .content-header {
      display: flex;
      justify-content: space-between;
      gap: 7px;
      flex-wrap: wrap;
    }
    h4, h5, .price {
      font-family: Montserrat;
      font-size: 16px;
      font-weight: normal;
      letter-spacing: 0;
      color: #404040;
    }
    h5 {
      font-size: 12px;
    }
    .priceStamp {
      display: flex;
      flex-wrap: wrap;
      gap: 7px;
      align-items: center;
    }
    .price {
      color: #009ca3;
    }
    .discountPrice {
      color: #989898;
      font-size: 12px;
      text-decoration: line-through;
    }
  }
`

export const Promo = styled.div`
  display: flex;
  align-items: center;
  max-height: fit-content;
  > img {
    width: 12px;
    height: 9px;
  }
  background-color: #2B0D61;
  border-radius: 11px;
  padding: 6px 12px;
  column-gap: 3.68px;
  font-family: Montserrat;
  font-size: 8px;
  font-weight: 600;
  letter-spacing: 0;
  color: #FFF;
`

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #00000033;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const ModalContent = styled.div`
  cursor: initial;
  width: 100%;
  max-width: 601px;
  max-height: 100vh;
  overflow-y: scroll;
  background-color: #FFF;
  box-shadow: 0px 4px 8px #00000033;
  border-radius: 8px;
  @media (max-width: 601px) {
    border-radius: 0px;
  }
  /* Hide scrollbar for Chrome, Safari and Opera */
  &::-webkit-scrollbar {
    display: none;
  }
  /* Hide scrollbar for IE, Edge and Firefox */
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
  position: relative;
  h4, h5, .price, span {
    font-family: Montserrat;
    font-size: 24px;
    font-weight: normal;
    letter-spacing: 0;
    color: #404040;
  }
  h5 {
    font-size: 16px;
  }
  .priceStamp {
    display: flex;
    flex-wrap: wrap;
    gap: 7px;
    align-items: center;
  }
  .price, span {
    color: #009ca3;
  }
  span {
    cursor: pointer;
  }
  .discountPrice {
    color: #989898;
    font-size: 12px;
    text-decoration: line-through;
  }
  .xDiv {
    cursor: pointer;
    position: absolute;
    right: 20px;
    top: 20px;
    width: 48px;
    height: 48px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #FFF;
    box-shadow: 0px 2px 4px #00000029;
    > img {
      width: 20px;
      height: 20px;
      transition: filter 0.25s;
    }
    transition: background-color 0.25s;
    &:hover {
      background-color: black;
      > img {
        filter: invert(1);
      }
    }
  }
  .header {
    display: flex;
    flex-direction: column;
    row-gap: 54px;
    padding: 22px 9px;
    padding-bottom: 30px;
    .info {
      display: flex;
      flex-wrap: wrap;
      column-gap: 64px;
      row-gap: 30px;
      .description {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        align-items: flex-end;
        gap: 15px;
        width: 100%;
        h5 {
          align-self: flex-start;
          max-width: 380px;
        }
        .priceStamp {
          display: flex;
          flex-wrap: wrap;
          gap: 7px;
          align-items: center;
          .price {
            font-size: 32px;
          }
          .discountPrice {
            font-size: 25px;
          }
        }
      }
    }
    .content-header {
      display: flex;
      justify-content: space-between;
      gap: 7px;
      flex-wrap: wrap;
    }
  }
  .footer {
    border-top: 1px solid #e0e0e0;
    padding: 20px 14px;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 20px;
    .quantityBtn, .addBtn {
      outline: none;
      padding: 12px 23px;
      display: flex;
      column-gap: 21px;
      background-color: #FFF;
      border: 1px solid #E6E6E6;
      border-radius: 4px;
    }
    .addBtn {
      justify-content: center;
      column-gap: 59px;
      row-gap: 10px;
      flex-wrap: wrap;
      background-color: #009CA3;
      border: none;
      cursor: pointer;
      span {
        color: #FFF;
      }
    }
  }
`