import React from "react";
import {NavButton} from "@components/global/navButton";
import {ButtonsWrapper, Header} from "@components/global/navBarContainer";

interface NavBarProps {
    currentPage: string,
}

const NavBar = ({currentPage}: NavBarProps) => {
    return (
        <Header>
            <ButtonsWrapper>
                <NavButton href={"/accueil"} title="accueil" currentPage={currentPage}>Accueil</NavButton>
                <NavButton href={"/villas"} title="villas" currentPage={currentPage}>Villas</NavButton>
                <NavButton href={"/immeubles"} title="immeubles" currentPage={currentPage}>Immeubles</NavButton>
                <NavButton href={"/urbanisme"} title="urbanisme" currentPage={currentPage}>Urbanisme</NavButton>
            </ButtonsWrapper>
        </Header>
    );
}
export default NavBar;