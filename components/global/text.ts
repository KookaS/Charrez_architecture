import Styled from "styled-components";

export const Title = Styled.div`
    position: relative;
    line-height: 50px;
    text-align: center;
    font-style: bold; 
    font-variant: normal; 
    font-weight: 600; 
    
    &.Acceuil{
        @media only screen and (min-width: 300px) {
            /* For Phones: */
            top: 100px;
            font-size: 40px; 
        }
        
        @media only screen and (min-width: 600px) {
            /* For Desktop: */
            top: 250px;
            font-size: 60px; 
        }
    }
    
    &.Project{
        font-size: 40px; 
        top: 200px;
    }
`;

export const SubText = Styled.div`
    position: relative;
    text-align: center;
    display: block;
    
    &.Acceuil{
        @media only screen and (min-width: 300px) {
            /* For Phones: */
            top: 200px;
            font-size: 20px; 
        }
        
        @media only screen and (min-width: 600px) {
            /* For Desktop: */
            top: 500px;
            font-size: 30px; 
        }
    }
    
    &.Project{
        top: 600px;
        font-size: 30px; 
    }
`;