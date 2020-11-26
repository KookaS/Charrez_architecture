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
}

export default class extends Component<IndexProps, IndexState> {
    public static title: string = "project";
    props: IndexProps;

    public static getInitialProps = async (context) => {
        try {
            const api = new Api();  //NextJS api
            await api.getInitialToken(context);
            const {dbName, collection} = context.query;
            const response = await api.getAllDocuments(dbName, collection);
            const documents = response.documents;
            api.removeCtx();
            return {collection, api, documents};
        } catch (err) {
            return {};
        }
    };

    constructor(props) {
        super(props);
    };


    render() {
        return ElementGrid({elements: this.props.documents});
    }

}