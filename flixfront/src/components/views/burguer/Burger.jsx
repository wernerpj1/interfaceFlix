import * as S from './StyledBurger'
import React, { useState, memo } from 'react'
import MenuContainer from '../../containers/MenuContainer'




const Burger = () => {

    const [open, setOpen] = useState(false)
    return (
        <S.MenuStyle>
        <S.BurgerStyle open={open} onClick={() => setOpen(!open)}>
            <div />
            <div />
            <div />
        </S.BurgerStyle>
           <S.Menu open={open}>
                <MenuContainer/>
            </S.Menu> 
        </S.MenuStyle>
    )
}

export default memo(Burger)
