import React, { useState } from "react";
import * as S from './MenuButtonStyled';

const MenuButton = () => {
    const [clicked, setClicked] = useState(false)

    return (
        <S.MenuButton clicked={clicked} onClick={() => setClicked(!clicked)}></S.MenuButton>
    )
}
export default MenuButton;