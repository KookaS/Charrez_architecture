import React, {Component} from 'react';
import {ImageBackground} from "@components/global/image";
import {SubText, Title} from "@components/global/text";

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
    private id: string = "6FxiP9uxBoUcWl3Qq6Kp";

    constructor(props: IndexProps) {
        super(props);
        this.props = props;
    };


    render() {
        return (
            <ImageBackground
                style={{backgroundImage: `url(${process.env.NEXT_PUBLIC_API_URL}/villas/loadImage?id=${this.id})`}}>
                <Title className='Acceuil'>CHARREZ ARCHITECTURE</Title>
                <SubText className='Acceuil'>J. CHARREZ SIA - EAUG - ETS</SubText>
                <SubText className='Acceuil'>CHEMIN TATTES-FONTAINE 43 - 1253 VANDOEUVRES</SubText>
                <SubText className='Acceuil'>TEL/FAX +41 22 348 78 00 - MOBILE +41 79 469 78 88</SubText>
                <SubText className='Acceuil'>charrez.architecture@bluewin.ch</SubText>
            </ImageBackground>

        )
    }
}