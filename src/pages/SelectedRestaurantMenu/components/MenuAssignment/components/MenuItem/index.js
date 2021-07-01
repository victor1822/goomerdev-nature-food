import * as Styled from './styles'

export const MenuItem = ({ menuItem }) => {
  const convertToLocaleString = price => 'R$ ' + price.toFixed(2).toString().replace('.',',')
  return (
    <Styled.Wrapper>
      <img 
        src={menuItem.image ?? 'data:image/png;base64,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'}
        alt={menuItem.name}
      />
      <div className="content">
        <div className="content-header">
          <h4>{menuItem.name}</h4>
        </div>
        {!menuItem?.sales 
          ? (
            <h5>Este item do menu não possui promoções</h5>
          )
          : (
            <h5>Este item do menu possui promoções, fique ligado!</h5>
          )
        }
        <div className="priceStamp">
        <span className="price">{convertToLocaleString(menuItem.price)}</span>
        <span className="discountPrice">{convertToLocaleString(menuItem.price)}</span>
        </div>
      </div>
    </Styled.Wrapper>
  )
}