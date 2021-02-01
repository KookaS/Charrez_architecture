import Styled from "styled-components";

export const AdminContainer = Styled.div`
`;

export const PageContainer = Styled.div`
`;

export const Title = Styled.span`
    width = 90%;
    font-size: 22px; 
    font-weight: 600; 
    display: block;
    
    &.Center{
        text-align: center;
    }
`;

export const Button = Styled.div`
    height: 35px;
    width: 150px;
    background-color: lightblue;
    color: black;
    margin: 0px 15px;  
    text-align: center;
    transition: 0.5s;
    border 2px solid grey;
    border-radius: 5px;
    cursor: pointer;
    display: inline-block;
   
    font-size: 15px; 
   
    :hover {
        color: white;
        background-color: grey;
        opacity: 0.8;
    }
`;

export const Field = Styled.input`
    height: 23px;
    width: 200px;
    margin: 5px 5px 5px 5px;
    padding: 5px;
    border: 1px solid grey;
    border-radius: 5px;
    background-color: lightblue;
    opacity: 0.8;
    
    :focus {
        outline-color: black;
    }
`;

export const SubContainer = Styled.div`
    display: inline-block;
    margin: 1% 2% 1% 2%;
    width: 96%;
    padding: 5px;
    display: block;
`;