import Styled from "styled-components";

export const Header = Styled.header`
    width: 100%;
    height: 80px;
    position: fixed;
    left: 0;
    top: 0;
    background-color: #24252a;
    -webkit-box-shadow: 2px 12px 33px -16px rgba(0,0,0,1);
    -moz-box-shadow: 2px 12px 33px -16px rgba(0,0,0,1);
    box-shadow: 2px 12px 33px -16px rgba(0,0,0,1);
    z-index: 1000;
    overflow: hidden;
`;

export const ButtonsWrapper = Styled.span`
    display: inline-block;
    position: absolute;
    text-align: center;
    width: 100%;
    top: 16px;
`;