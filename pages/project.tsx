import React, {Component} from 'react';
import {Api} from "@services/api";
import {MetadataSchema} from "@apiTypes/apiSchema";
import {ElementGrid} from "@components/global/elementGrid";

interface IndexProps {
    id: string,
    api: Api,
    documents: MetadataSchema[],
}

interface IndexState {
    dbName: string,
    api: Api,
    documents: MetadataSchema[],
}

export default class extends Component<IndexProps, IndexState> {
    public static title: string = "project";
    props: IndexProps;

    public static getInitialProps = async (context) => {
        try {
            const api = new Api();  //NextJS api
            await api.getInitialToken(context);
            const {id} = context.query;
            const response = await api.getAllDocuments("villas", id);
            const documents = response.documents;
            api.removeCtx();
            return {id, api, documents};
        } catch (err) {
            return {};
        }
    };

    constructor(props) {
        super(props);
        this.props = props;
        this.state = {
            dbName: this.props.id,
            documents: this.props.documents,
            api: this.props.api,
        }
    };


    render() {
        return ElementGrid({dbName: this.state.dbName, elements: this.state.documents});
    }

}