import Styled from "styled-components";

export const ImageProjectGridContainer = Styled.div`
    height: auto;
    width: 100%;
    grid-template-columns: auto;
    grid-template-rows: auto;
    
    @media only screen and (min-width: 300px) {
        /* For Phones: */
        display: grid-inline;
    }
    
    @media only screen and (min-width: 600px) {
        /* For Desktop: */
        display: grid;
    }
`;

export const ImageProjectGridElement = Styled.div`
    width: 100%;
    height: 700px;
    grid-area: ${props => props.theme.row} / ${props => props.theme.column} / ${props => props.theme.row + 1} / ${props => props.theme.column + 1};
    background-size: cover;
    background-position: center;
    justify-self: center;
    color: transparent;
    position: relative;
    z-index: 1;
    
    :hover {
        opacity: 0.8;
        transition: .3s ease-out;
        color: white;
        cursor: pointer;
    
        @media only screen and (min-width: 600px) {
            /* For Desktop: */
            width: 105%;
            z-index: 0;
        }
    }
`;

export const ImageBackground = Styled.div`
    width: 100%;
    height: 100%;
    background-size: cover;
`;