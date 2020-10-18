import React from "react";
import Link from "next/link";
import Styled from "styled-components";


interface NavButtonProps {
    children: string,
    href: string,
    title: string,
    currentPage: string
}

const StyledNavButton = Styled.span`
    height: 1em;
    border-radius: 10px;
    border: 1px solid black;
    display: inline-block;
    text-align: center;
    transition: .5s;
    line-height: 20px;
    cursor: pointer;
    background-color: rgb(173,216,230, 0.2);
    color: grey;
    
    @media only screen and (min-width: 300px) {
        /* For Phones: */
        padding: 15px 5px;
    }
    
    @media only screen and (min-width: 600px) {
        /* For Desktop: */
        width: 100px;
        padding: 15px 30px;
        margin: 0 10px;
    }
    
    ${({isCurrentPage}: { isCurrentPage: boolean }) => isCurrentPage ? "background-color: rgb(173,216,230, 0.7);color:black;" : ""}
    
    &:hover {
        background-color: rgb(173,216,230, 0.6);
        color: black;
    }
    
    & a {
        color: inherit;
        text-decoration: none;
    }
`;

export const NavButton = ({children, href, title, currentPage}: NavButtonProps) =>
    <Link href={href}>
        <a href={href}>
            <StyledNavButton isCurrentPage={title === currentPage}>
                {children}
            </StyledNavButton>
        </a>

    </Link>;