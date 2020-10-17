import Styled from "styled-components";

export const ImageProject = Styled.img`
    border-radius: 5px;
    margin: 20px auto 0 auto;
    display: block;
    width: min(98%, 1300px);
`;

export const ImageBackground = Styled.div`
    width: 100%;
    height: 100%;
    background-repeat: no-repeat;
    background-size: cover;
`;

export const Title = Styled.div`
    line-height: 500px;
    text-align: center;
    font-size: 60px; 
    font-style: bold; 
    font-variant: normal; 
    font-weight: 600; 
`;

export const SubText = Styled.div`
    text-align: center;
    font-size: 30px; 
    display: block;
`;