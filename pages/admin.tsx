import React, {Component} from 'react';
import {Api} from "@services/api";
import {Button} from "@components/admin/adminContainer";
import {AdminContainer, PageContainer} from "@components/admin/adminContainer";
import {AddProject} from "@components/admin/addProject";
import {CollectionSchema, DocumentSchema} from "@apiTypes/apiSchema";

interface AdminProps {
    id: string,
    api: Api,
    projects: CollectionSchema[],
    documents: DocumentSchema[],
}

interface AdminState {

}

export default class extends Component<AdminProps, AdminState> {
    public static title: string = "admin";
    props: AdminProps;
    private pages: string[] = ["acceuil", "villas", "immeubles", "urbanisme"];

    public static getInitialProps = async (context) => {
        try {
            const api = new Api();
            await api.getInitialToken(context);
            const response = await api.getAllCollections("villas")
            const ids = response.collections.map((col) => col.name)
            console.log(ids)
            const projects = await Promise.all(ids.map(async (id) => await api.getMetadata("villas", id)))
            console.log(projects)
            const documents = projects.map(async (project) => {
                const response = await api.getAllDocuments("villas", project.collection);
                return response.documents;
            })
            api.removeCtx();
            return {api, projects, documents};
        } catch (err) {
            return {};
        }
    };


    constructor(props) {
        super(props);
        this.props = props;
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
                <PageContainer>

                    <AddProject key={0} index={0} page={"villas"} projects={this.props.projects}
                                documents={this.props.documents}/>)

                    <Button onClick={null}>ADD PROJECT</Button>
                </PageContainer>
            </AdminContainer>
        </>)
    }
}