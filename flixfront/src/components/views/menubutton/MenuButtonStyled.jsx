import styled from "styled-components";

export const MenuButton = styled.button`
    position: relative;
    display: flex;
    width: 100%;
    height: 10%;
    border: 0;
    background-color: red;
    &:hover {
    
    
    background-color: ${({ clicked }) => clicked ? 'red':'black'};
    }
`;