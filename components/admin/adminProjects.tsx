import React, {Component} from "react";
import {
    SubContainer,
    Field,
    Title, Button,
} from "@components/admin/adminContainer";
import {CrossButton} from '@components/global/crossButton';
import {CollectionSchema, DocumentSchema} from "@apiTypes/apiSchema";
import {AdminDocuments} from "@components/admin/adminDocuments";
import {Api} from "@services/api";

interface ProjectProps {
    index: number,
    page: string,
    projects: CollectionSchema[],
    docs: DocumentSchema[],
    updateParent,
}

interface ProjectState {
    index: number,
    page: string,
    projects: CollectionSchema[],
    docs: DocumentSchema[],
}

export class AdminProjects extends Component<ProjectProps, ProjectState> {
    props: ProjectProps;
    private api: Api = new Api();

    constructor(props: ProjectProps) {
        super(props);
        this.props = props;
        this.state = {
            index: this.props.index,
            page: this.props.page,
            projects: this.props.projects,
            docs: this.props.docs,
        }
    }

    /*
    shouldComponentUpdate(nextProps: Readonly<ProjectProps>, nextState: Readonly<ProjectState>, nextContext: any): boolean {
        const differentProjects = this.state.projects.length !== nextProps.projects.length;
        const differentDocuments = this.state.docs.map((doc)=>{return doc.documents.length}) !== nextProps.docs.map((doc)=>{return doc.documents.length});
        return differentProjects || differentDocuments;
    }

     */

    componentDidUpdate(prevProps: Readonly<ProjectProps>, prevState: Readonly<ProjectState>, snapshot?: any) {
        const differentProjects = prevProps.projects.length !== this.props.projects.length;
        const prevLength = prevProps.docs.map((doc) => doc.documents.length).reduce((acc, current) => {
            return acc + current;
        }, 0);
        const newLength = this.props.docs.map((doc) => doc.documents.length).reduce((acc, current) => {
            return acc + current;
        }, 0);
        console.log(prevLength, newLength)
        const differentDocuments = prevLength !== newLength;
        console.log("differentProjects: " + differentProjects)
        console.log("differentDocuments: " + differentDocuments)

        if (differentProjects || differentDocuments) {
            this.setState({
                index: this.props.index,
                page: this.props.page,
                projects: this.props.projects,
                docs: this.props.docs,
            })
        }
    }

    public

    render()
        :
        React.ReactElement {
        return (
            <SubContainer className='Ticker'>
                <Title className='title'>Page: {this.state.page}</Title>

                {this.state.projects.map((project, index) => {
                    return <div key={index}>
                        <CrossButton className='Project' onClick={null}/>
                        <AdminDocuments key={index} page={this.state.page} index={index}
                                        project={project}
                                        doc={this.state.docs.find(e => e.collection == project.collection)}
                                        updateParent={() => this.props.updateParent()}/>
                    </div>
                })
                }
                <Button onClick={null}>ADD DOCUMENT</Button>
                <br/>

            </SubContainer>
        );
    }
}