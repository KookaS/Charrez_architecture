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
        width: 2px;
        background-color: lightblue;
    }
    
    @media only screen and (min-width: 300px) {
        /* For Phones: */
        
        &.Ticker {
            left: 85%;
            
            :before, :after {
                left: 15px;
                bottom: 35px;
                height: 40px;
            }
        }
        
        &.Indicator {
            left: 85%;
            
            :before, :after {
                left: 15px;
                bottom: 35px;
                height: 40px;
            }
        }
        
        &.AI {
            display: inline;
            
            :before, :after {
                left: 18px;
                bottom: 10px;
                height: 25px;
        }
    }
    
    @media only screen and (min-width: 600px) {
        /* For Desktop: */
      
        &.Ticker {
            left: max( calc(12% + (415px)), 655px);
            
            :before, :after {
                left: 15px;
                bottom: 35px;
                height: 40px;
            }
        }
        
        &.Indicator {
            left: max( calc(10% + (500px)), 690px);
            
            :before, :after {
                left: 15px;
                bottom: 35px;
                height: 40px;
            }
        }
        
        &.AI {
            display: inline;
        
            :before, :after {
                bottom: 2px;
                height: 35px;
            }
        }
        
    }
    
    &.Message{
            right: 6px;
            top: 3px;
            
            :before, :after {
                height: 35px;
                background-color: black;
            }
        }

    :before {
        transform: rotate(45deg);
    }

    :after {
        transform: rotate(-45deg);
    }
`;