import React, {Component} from 'react';
import {Api} from "@services/api";
import {ImageBackground, ImageProject, SubText, Title} from "@components/global/image";

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


    /*
    public static getInitialProps = async (context) => {
        try {
            //nextjs api
            const api = new Api();
            await api.getInitialToken(context);
            const response = await api.getImage("villas", "puEKs3Z4Kt");
            const body = JSON.parse(response.body.toString());
            const background = new Buffer(body, 'binary').toString('base64');
            api.removeCtx();
            return {api, background};
        } catch (err) {
            return {};
        }
    };

     */


    constructor(props: IndexProps) {
        super(props);
        this.props = props;
    };


    render() {
        return (
            <ImageBackground
                style={{backgroundImage: `url(${process.env.NEXT_PUBLIC_API_URL}/villas/loadImage?id=${this.id})`}}>
                <Title>CHARREZ ARCHITECTURE</Title>
                <SubText> TEST testttijfioajefioawjef </SubText>
                <SubText> TEST testttijfioajefioawjef </SubText>
                <SubText> TEST testttijfioajefioawjef </SubText>
            </ImageBackground>

        )
    }
}