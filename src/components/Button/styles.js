import { Link } from "react-router-dom";
import styled from "styled-components";




export const Button = styled(Link)`
    width: 342px;
    height: 74px;
    margin-top: 130px;
    border-radius: 14px;
    background: ${ props => props.isBack ? 'transparent' : 'var(--templates-5-color-1, rgba(0, 0, 0, 0.80))'};
    border: ${ props => props.isBack ? '1px solid #ffffff' : 'none'} ;
    cursor: pointer;
    font-size: 17px;
    font-style: normal;
    font-weight: 700;
    line-height: 28px;
    color: #FFF;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;

    &:hover {
        opacity: 0.8;
    }
    &:active{
        opacity:0.5;
    }
   
   img {
    transform: ${ props => props.isBack && 'rotateY(180deg)'};
   }
`;