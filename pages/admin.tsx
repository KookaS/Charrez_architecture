import React, {Component} from 'react';
import {Api} from "@services/api";
import {AdminContainer, Button, Field, PageContainer} from "@components/admin/adminContainer";
import {AdminProjects} from "@components/admin/adminProjects";
import {CollectionSchema, DocumentSchema} from "@apiTypes/apiSchema";

interface AdminProps {
    api: Api,
    projects: CollectionSchema[],
    docs: DocumentSchema[],
}

interface AdminState {
    projects: CollectionSchema[],
    docs: DocumentSchema[],
    login: {
        user: string,
        password: string
    },
    authorization: string,
}

export default class extends Component<AdminProps, AdminState> {
    public static title: string = "admin";
    props: AdminProps;
    private api: Api;
    private pages: string[] = ["acceuil", "villas", "immeubles", "urbanisme"];

    public static getInitialProps = async (context) => {
        try {
            const api = new Api();
            await api.getInitialToken(context);
            const response = await api.getAllCollections("villas")
            const ids = response.collections.map((col) => col.name)
            const projects = await Promise.all(ids.map(async (id) => await api.getMetadata("villas", id)))
            const docs = await Promise.all(projects.map(async (project) => {
                return await api.getAllDocuments("villas", project.collection);
            }));
            api.removeCtx();
            return {api, projects, docs};
        } catch (err) {
            return {};
        }
    };

    constructor(props) {
        super(props);
        this.props = props;
        this.state = {
            projects: this.props.projects,
            docs: this.props.docs,
            login: {
                user: "",
                password: ""
            },
            authorization: undefined
        }
    };

    componentDidMount() {
        this.api = new Api(this.props.api.authorization);
    }

    private update = async (dbName: string) => {
        const response = await this.api.getAllCollections(dbName)
        const ids = response.collections.map((col) => col.name)
        const projects = await Promise.all(ids.map(async (id) => await this.api.getMetadata("villas", id)))
        const docs = await Promise.all(projects.map(async (project) => {
            return await this.api.getAllDocuments("villas", project.collection);
        }));
        this.setState({projects, docs})
    };

    private updateUser = async (e) => {
        await this.setState({login: {...this.state.login, user: e.target.value}});
    };

    private updatePassword = async (e) => {
        await this.setState({login: {...this.state.login, password: e.target.value}});
    };

    private auth = async () => {
        const authorization = await this.api.login(this.state.login);
        this.setState({authorization})
    };

    render() {
        return (<>

            <AdminContainer>
                <PageContainer style={{display: this.state.authorization ? "none" : "inline-block"}}>
                    &emsp;User: <Field onChange={this.updateUser} value={this.state.login.user}/><br/>
                    &emsp;Password: <Field onChange={this.updatePassword} value={this.state.login.password}/><br/>
                    <Button onClick={this.auth}>LOGIN</Button>
                </PageContainer>

                {this.pages.map((page, index) =>
                    <PageContainer style={{display: this.state.authorization ? "block" : "none"}}>
                        <AdminProjects key={index} index={index} page={page} projects={this.state.projects}
                                       docs={this.state.docs} updateParent={async () => await this.update(page)}/>)
                    </PageContainer>
                )}
            </AdminContainer>
        </>)
    }
}