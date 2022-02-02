import React from "react";
import Burger from "../burguer/Burger";
import { LayoutHeader } from "./HeaderViewStyled";

const HeaderView = () => {
    return(
        <LayoutHeader>
            <Burger/>
        </LayoutHeader>
    )
}
export default HeaderView