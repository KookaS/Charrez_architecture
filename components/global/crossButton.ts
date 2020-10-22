import Styled from "styled-components";

export const CrossButton = Styled.div`
    width: 32px;
    height: 32px;
    opacity: 0.9;
    position: absolute;
    cursor: pointer;
    
    :hover {
        opacity: 0.3;
    }

    :before, :after {
        position: absolute;
        content: ' ';
        width: 3px;
        background-color: black;
    }
   
      
    &.Project {
        left: calc(5% + (415px));
        
        :before, :after {
            left: 15px;
            bottom: -15px;
            height: 40px;
        }
    }
    
    &.Document {
        left: calc(5% + (300px));
        
        :before, :after {
            left: 15px;
            bottom: 35px;
            height: 30px;
        }
    }

    :before {
        transform: rotate(45deg);
    }

    :after {
        transform: rotate(-45deg);
    }
`;