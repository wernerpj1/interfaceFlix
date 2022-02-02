import styled from "styled-components";

export const MenuLayout = styled.div`
    position: relative;
    margin-left: auto;
    margin-right: auto;
    display: flex;
    flex-direction: column;
    width: 90%;
    height: 90%;
    background-color: green;
`;

export const MenuInicio = styled.a`
    color: white;
    font-size: 1rem;
    text-decoration: none;
    position: relative;
    display: flex;
    align-items: center;
    width: 100%;
    height: 10%;
    border: 0;
    &:hover {
    background-color: grey;
    }
`;

