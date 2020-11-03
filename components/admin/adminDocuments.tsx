import React, {Component} from "react";
import {CrossButton} from '@components/global/crossButton';
import {Button, Field, SubContainer, Title} from "@components/admin/adminContainer";
import {CollectionSchema, DocumentSchema, NewDocSchema} from "@apiTypes/apiSchema";
import {Api} from "@services/api";

interface DocumentProps {
    page: string,
    index: number,
    project: CollectionSchema,
    doc: DocumentSchema,
    updateParent,
}

interface DocumentState {
    page: string,
    index: number,
    project: CollectionSchema,
    doc: DocumentSchema,
    newDoc: NewDocSchema,
}

export class AdminDocuments extends Component<DocumentProps, DocumentState> {
    props: DocumentProps;
    private api: Api = new Api();

    constructor(props: DocumentProps) {
        super(props);
        this.props = props;
        this.state = {
            page: this.props.page,
            index: this.props.index,
            project: this.props.project,
            doc: this.props.doc,
            newDoc: {
                file: null,
                title: ""
            },
        }
    }

    componentDidUpdate(prevProps: Readonly<DocumentProps>, prevState: Readonly<DocumentState>, snapshot?: any) {
        if (prevProps.doc.documents.length !== this.props.doc.documents.length) {
            this.setState({
                page: this.props.page,
                index: this.props.index,
                project: this.props.project,
                doc: this.props.doc,
            })
        }
    }

    private removeDocument = async (collection: string, docID: string) => {
        await this.api.deleteDocument(this.state.page, collection, docID);
        this.props.updateParent();
    };

    private updateNewDocTitle = (e) => {
        this.setState({newDoc: {...this.state.newDoc, title: e.target.value}});
    };

    private updateNewDocFile = (e) => {
        this.setState({newDoc: {...this.state.newDoc, file: e.target.files[0]}});
    };

    private addDoc = async () => {
        const formData = new FormData();
        formData.append("title", this.state.newDoc.title);
        formData.append("file", this.state.newDoc.file);
        await this.api.addDocument(this.state.page, this.state.project.collection, formData);
        this.props.updateParent();
    };

    public render(): React.ReactElement {
        return (
            <SubContainer>
                <Title className='title'>Project id: {this.state.project.collection}</Title>
                Project title: {this.state.project.metadata.title}<br/>
                Project description: {this.state.project.metadata.description}<br/>
                Project date: {this.state.project.metadata.date} <br/>

                {this.state.doc.documents ? this.state.doc.documents.map((doc, index) => {
                    if (this.state.doc.collection !== doc._id) {
                        return <div key={index}>
                            &emsp;Doc id: {doc._id}<br/>
                            <CrossButton className='Document'
                                         onClick={async () => await this.removeDocument(this.state.doc.collection, doc._id)}/>
                            &emsp;Doc title: {doc.title}<br/>
                        </div>
                    }
                }) : <></>}

                &emsp;New Doc Title: <Field onChange={this.updateNewDocTitle} value={this.state.newDoc.title}/>
                &emsp;New Doc File: <Field type="file" onChange={this.updateNewDocFile}/>
                <Button onClick={this.addDoc}>ADD DOCUMENT</Button>
            </SubContainer>
        );
    }
}