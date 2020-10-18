import Styled from "styled-components";

export const Title = Styled.div`
    position: relative;
    line-height: 50px;
    text-align: center;
    font-size: 60px; 
    font-style: bold; 
    font-variant: normal; 
    font-weight: 600; 
    
    &.Acceuil{
        @media only screen and (min-width: 300px) {
            /* For Phones: */
            top: 100px;
        }
        
        @media only screen and (min-width: 600px) {
            /* For Desktop: */
            top: 250px;
        }
    }
    
    &.Project{
        top: 200px;
    }
`;

export const SubText = Styled.div`
    position: relative;
    text-align: center;
    font-size: 30px; 
    display: block;
    
    &.Acceuil{
        @media only screen and (min-width: 300px) {
            /* For Phones: */
            top: 200px;
        }
        
        @media only screen and (min-width: 600px) {
            /* For Desktop: */
            top: 500px;
        }
    }
    
    &.Project{
        top: 300px;
    }
`;