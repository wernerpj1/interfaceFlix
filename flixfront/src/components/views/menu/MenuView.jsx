import React from 'react';
import  * as S  from './MenuStyled';
import MenuButtonContainer from '../../containers/MenuButtonContainer';
const MenuView = (props) => {

    

    return(
        <S.MenuLayout>
           <S.MenuInicio href='http://localhost:3000'>Início</S.MenuInicio>
           <MenuButtonContainer/>   
        </S.MenuLayout>
    )
}
export default MenuView;