import React, {Component} from 'react';
import {Api} from "@services/api";
import {ProjectSchema} from "../types/projectSchema";
import {Project} from "@components/global/project";
import {type} from "os";

interface IndexProps {
    api: Api,
    projects: ProjectSchema[],
}

interface IndexState {
    dbName: string,
    api: Api,
    projects: ProjectSchema[],
}

export default class extends Component<IndexProps, IndexState> {
    public static title: string = "acceuil";
    props: IndexProps;

    public static getInitialProps = async (context) => {
        try {
            const api = new Api();  //nextjs api
            await api.getInitialToken(context);
            const ids = ["puEKs3Z4Kt", "6FxiP9uxBoUcWl3Qq6Kp", "puEKs3Z4Kt", "puEKs3Z4Kt", "6FxiP9uxBoUcWl3Qq6Kp"];
            const projects = await Promise.all(ids.map(async (id) => await api.getMetadata("villas", id)))
            api.removeCtx();
            return {api, projects, ids};
        } catch (err) {
            return {};
        }
    };

    constructor(props) {
        super(props);
        this.props = props;
        this.state = {
            dbName: "villas",
            projects: this.props.projects,
            api: this.props.api,
        }
    };

    render() {
        return Project({dbName: this.state.dbName, projects: this.state.projects});
    }

}