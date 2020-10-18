import React, {Component} from 'react';
import {ImageBackground} from "@components/global/image";
import Styled from "styled-components";

export const Title = Styled.div`
    position: relative;
    top: 500px;
    line-height: 50px;
    text-align: center;
    font-size: 60px; 
    font-style: bold; 
    font-variant: normal; 
    font-weight: 600; 
    
    @media only screen and (min-width: 300px) {
        /* For Phones: */
        top: 100px;
    }
    
    @media only screen and (min-width: 600px) {
        /* For Desktop: */
        top: 250px;
    }
`;

export const SubText = Styled.div`
    position: relative;
    text-align: center;
    font-size: 30px; 
    display: block;
    
    @media only screen and (min-width: 300px) {
        /* For Phones: */
        top: 200px;
    }
    
    @media only screen and (min-width: 600px) {
        /* For Desktop: */
        top: 500px;
    }
`;

interface IndexProps {
    background,
    api
}

interface IndexState {
    background
}

export default class extends Component<IndexProps, IndexState> {
    public static title: string = "acceuil";
    props: IndexProps;
    private id: string = "puEKs3Z4Kt";

    constructor(props: IndexProps) {
        super(props);
        this.props = props;
    };


    render() {
        return (
            <ImageBackground
                style={{backgroundImage: `url(${process.env.NEXT_PUBLIC_API_URL}/villas/loadImage?id=${this.id})`}}>
                <Title>CHARREZ ARCHITECTURE</Title>
                <SubText>J. CHARREZ SIA - EAUG - ETS</SubText>
                <SubText>CHEMIN TATTES-FONTAINE 43 - 1253 VANDOEUVRES</SubText>
                <SubText>TEL/FAX +41 22 348 78 00 - MOBILE +41 79 469 78 88</SubText>
                <SubText>charrez.architecture@bluewin.ch</SubText>
            </ImageBackground>

        )
    }
}