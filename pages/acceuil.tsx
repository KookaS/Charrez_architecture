import React, {Component} from 'react';
import {ImageBackground} from "@components/global/image";
import {SubText, Title} from "@components/global/text";
import {Api} from "@services/api";

interface IndexProps {
    id: string,
    api: Api,
}

interface IndexState {

}

export default class extends Component<IndexProps, IndexState> {
    public static title: string = "acceuil";
    props: IndexProps;

    public static getInitialProps = async (context) => {
        try {
            const api = new Api();
            await api.getInitialToken(context);
            const dbName: string = context.pathname.slice(1);
            const response = await api.getAllCollections(dbName)
            const id = response.collections.map((col) => col.name)
            api.removeCtx();
            return {api, id};
        } catch (err) {
            return {};
        }
    };

    constructor(props) {
        super(props);
        this.props = props;
    };


    render() {
        return (
            <ImageBackground
                style={{backgroundImage: `url(${process.env.NEXT_PUBLIC_API_URL}/loadImage?id=${this.props.id})`}}>
                <Title className='Acceuil'>CHARREZ ARCHITECTURE</Title>
                <SubText className='Acceuil'>J. CHARREZ SIA - EAUG - ETS</SubText>
                <SubText className='Acceuil'>CHEMIN TATTES-FONTAINE 43 - 1253 VANDOEUVRES</SubText>
                <SubText className='Acceuil'>TEL/FAX +41 22 348 78 00 - MOBILE +41 79 469 78 88</SubText>
                <SubText className='Acceuil'>charrez.architecture@bluewin.ch</SubText>
            </ImageBackground>

        )
    }
}