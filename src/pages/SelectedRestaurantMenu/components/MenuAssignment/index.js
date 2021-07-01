import { useState } from 'react'

import { MenuItem } from './components/MenuItem'
import * as Styled from './styles'
import caretDownIcon from '../../../../assets/caret-down.svg'

export const MenuAssignment = ({ menuGroup }) => {
  const [hideItems,setHideItems] = useState(true)
  return (
    <Styled.Wrapper>
      <Styled.Header onClick={() => setHideItems(!hideItems)}>
        {menuGroup.group}
        <Styled.HeaderIcon hide={hideItems} src={caretDownIcon} alt='caret down icon'/>
      </Styled.Header>
      {!hideItems && <Styled.MenuItems>
        {menuGroup.items.map((menuItem, index) => {
          return (
            <MenuItem key={index} menuItem={menuItem}/>
          )
        })}
      </Styled.MenuItems>}
    </Styled.Wrapper>
  )
}