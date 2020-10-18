import React, {Component} from 'react';
import {Api} from "@services/api";
import {CollectionSchema} from "@apiTypes/apiSchema";
import {ProjectGrid} from "@components/global/projectGrid";

interface UrbanismeProps {
    api: Api,
    projects: CollectionSchema[],
}

export default class extends Component<UrbanismeProps, {}> {
    public static title: string = "urbanisme";
    props: UrbanismeProps;

    public static getInitialProps = async (context) => {
        try {
            const api = new Api();
            await api.getInitialToken(context);
            const dbName: string = context.pathname.slice(1);
            const response = await api.getAllCollections(dbName)
            const ids = response.collections.map((col) => col.name)
            const projects = await Promise.all(ids.map(async (id) => await api.getMetadata(dbName, id)))
            api.removeCtx();
            return {api, projects};
        } catch (err) {
            return {};
        }
    };

    constructor(props) {
        super(props);
        this.props = props;
    };

    render() {
        return ProjectGrid({elements: this.props.projects});
    }
}