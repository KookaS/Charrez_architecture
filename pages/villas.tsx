import React, {Component} from 'react';
import {Api} from "@services/api";
import {ImageProject} from "@components/global/image"

interface IndexProps {
}

interface IndexState {
}

export default class extends Component<IndexProps, IndexState> {
    public static title: string = "acceuil";
    private id: string = "puEKs3Z4Kt";


    public static getInitialProps = async (context) => {
        try {
            //nextjs api
            const api = new Api();
            await api.getInitialToken(context);
            const background = await api.getImage("villas", "puEKs3Z4Kt");
            api.removeCtx();
            return {api, background};
        } catch (err) {
            return {};
        }
    };


    constructor(props: IndexProps) {
        super(props);
    };


    render() {
        return (
            <>
                <div>
                    Hello World!
                </div>

                <ImageProject src={`${process.env.NEXT_PUBLIC_API_URL}/villas/loadImage?id=${this.id}`}/>
            </>
        )
    }
}