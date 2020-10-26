import Styled from "styled-components";

export const AdminContainer = Styled.div`
`;

export const PageContainer = Styled.div`
`;

export const ProjectContainer = Styled.div`
`;

export const TrainContainer = Styled.div`
    height: auto;
    width: 97%;
    margin: 1.5% auto 1.5% auto;
	
    font-size: 20px; 
    font-style: normal; 
    font-variant: normal; 
    font-weight: 500; 
    line-height: 30px;
`;

export const MainContainer = Styled.div`
    
    @media only screen and (min-width: 300px) {
        /* For Phones: */
    
    }
    
    @media only screen and (min-width: 600px) {
        /* For Desktop: */
      
        &.Properties{
            display: grid;
            grid-template-columns: 0% 33% 33%;
            grid-template-rows: auto auto;
        }
    
        &.Train{
            margin-left: 45%;
            width: 300px;
        }
    }
    
`;

export const ParamContainer = Styled.div`
    margin: 5px 1.5% 5px 1.5%;
    border-style: solid;
    border-radius: 5px;
    padding:5px;

    &.Genetic{
        grid-column-start: 0;
        grid-column-end: 1;
        grid-row-start: 0;
        grid-row-end: 1;
        width: 94%;
    }
    
    &.NeuralNet{
        grid-column-start: 2;
        grid-column-end: 3;
        grid-row-start: 0;
        grid-row-end: 1;
        width: 94%;
    }
    
    &.Processing{
        grid-column-start: 3;
        grid-column-end: 4;
        grid-row-start: 0;
        grid-row-end: 1;
        width: 94%;
    }
    
    &.Fourier{
        grid-column-start: 0;
        grid-column-end: 1;
        grid-row-start: 2;
        grid-row-end: 3;
        width: 94%;
    }
    
    &.Training{
        grid-column-start: 2;
        grid-column-end: 3;
        grid-row-start: 2;
        grid-row-end: 3;
        width: 94%;
    }
    
    &.Data{
        grid-column-start: 3;
        grid-column-end: 4;
        grid-row-start: 2;
        grid-row-end: 3;
        width: 94%;
    }
    
    &.Indicator{
        margin-left: 10px;
        margin-right: 10px;
        margin-top: 10px;
        border-style: solid;
        border-radius: 5px;
        grid-column: 0 / 6;
        grid-row-end: 6;
    }
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
    height: 30px;
    width: 150px;
    background-color: lightblue;
    color: black;
    margin: 5px 20px;  
    padding: 10px;
    text-align: center;
    transition: 0.5s;
    border 2px solid grey;
    border-radius: 5px;
    cursor: pointer;
    display: inline-block;
    padding: 3px;
   
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