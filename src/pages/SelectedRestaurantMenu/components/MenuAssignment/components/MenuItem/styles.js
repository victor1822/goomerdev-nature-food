import styled from "styled-components";

export const Wrapper = styled.div`
  cursor: pointer;
  display: flex;
  flex: 1;
  max-width: 400px;
  /* max-height: 115px; */
  background: #FFFFFF 0% 0% no-repeat padding-box;
  box-shadow: 0px 4px 8px #00000029;
  img {
    display: flex;
    width: 115px;
    height: auto;
    min-height: 115px;
    object-fit: cover;
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