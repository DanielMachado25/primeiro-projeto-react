import styled from "styled-components";

import background from '../../assets/background1.svg';


export const Container = styled.div`
    background: url('${background}');
    background-size: cover;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 40px;
    height: 100%;
    min-height: 100vh;
    
`;
export const Image = styled.img`
    margin-top: 30px;
`;



 export const User = styled.li`
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 58px;
    border-radius: 14px;
    background: rgba(255, 255, 255, 0.25);
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    border: none;
    width: 342px;
    outline: none;
    margin-top: 20px;

    p {
        font-size: 20px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        color: #ffff;
    }
    button {
        background: none;
        border: none;
        cursor: pointer;
    }
 
 `