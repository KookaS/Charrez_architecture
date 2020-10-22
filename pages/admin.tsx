import React, {Component} from 'react';
import {Api} from "@services/api";
import {AdminContainer, Button, Field, PageContainer} from "@components/admin/adminContainer";
import {AddProject} from "@components/admin/addProject";
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
            authorization: this.api.authorization
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
        await this.api.login(this.state.login);
        this.setState({authorization: this.api.authorization})
    };

    /*

    private addTicker = async () => {
        const {tickers} = this.state.query;
        tickers.push(this.newTicker());
        await this.setState({query: {...this.state.query, tickers}});
        localStorage.setItem("localState", JSON.stringify(this.state.query));
    };

    private updateTicker = async (ticker, index) => {
        const newTicker = this.state.query.tickers;
        newTicker[index] = ticker;
        await this.setState({query: {...this.state.query, tickers: newTicker}});
        localStorage.setItem("localState", JSON.stringify(this.state.query));
    };

    private removeTicker = async (index) => {
        let newTicker = this.state.query.tickers;
        newTicker.splice(index, 1);
        await this.setState({query: {...this.state.query, tickers: newTicker}});
        localStorage.setItem("localState", JSON.stringify(this.state.query));
    };

     */


    render() {
        return (<>

            <AdminContainer>
                <PageContainer style={{display: this.state.authorization ? "none" : "inline-block"}}>
                    &emsp;User: <Field onChange={this.updateUser} value={this.state.login.user}/><br/>
                    &emsp;Password: <Field onChange={this.updatePassword} value={this.state.login.password}/><br/>
                    <Button onClick={() => console.log(this.state)}>LOGIN</Button>
                </PageContainer>
                <PageContainer style={{display: this.state.authorization ? "block" : "none"}}>

                    <AddProject key={0} index={0} page={"villas"} projects={this.state.projects}
                                docs={this.state.docs} updateParent={async () => await this.update("villas")}/>)

                    <Button onClick={null}>ADD PROJECT</Button>
                </PageContainer>
            </AdminContainer>
        </>)
    }
}