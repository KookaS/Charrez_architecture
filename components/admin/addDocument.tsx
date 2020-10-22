import React, {Component} from "react";
import {CrossButton} from '@components/global/crossButton';
import {Field, SubContainer, Title} from "@components/admin/adminContainer";
import {CollectionSchema, DocumentSchema} from "@apiTypes/apiSchema";
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
}

export class AddDocument extends Component<DocumentProps, DocumentState> {
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
        }
    }

    /*
        private newIndicator = (): Indicator => {
            return {
                type_: "",
                arguments: "",
            };
        };

        private addIndicator = () => {
            this.props.ticker.indicators.push(this.newIndicator());
            this.props.updateParent(this.props.ticker, this.props.index);
        };

        private updateIndicator = (indicator, index) => {
            this.props.ticker.indicators[index] = indicator;
            this.props.updateParent(this.props.ticker, this.props.index);
        };

        private removeIndicator = (index) => {
            this.props.ticker.indicators.splice(index, 1);
            this.props.updateParent(this.props.ticker, this.props.index);
        };

        private updateName = (e) => {
            this.props.ticker.name = e.target.value;
            this.props.updateParent(this.props.ticker, this.props.index);
        };



     */
    private removeDocument = async (collection: string, docID: string) => {
        const res = await this.api.deleteDocument(this.state.page, collection, docID);
        console.log(res)
        //this.props.updateParent();
    };

    public render(): React.ReactElement {
        return (
            <SubContainer>
                <Title className='title'>Project id: {this.state.project.collection}</Title>
                Project title: {this.state.project.metadata.title}<br/>
                Project description: {this.state.project.metadata.description}<br/>
                Project date: {this.state.project.metadata.date} <br/>

                {this.state.doc.documents.map((doc, index) => {
                    return <div key={index}>
                        &emsp;Doc id: {doc._id}<br/>
                        <CrossButton className='Document'
                                     onClick={async () => await this.removeDocument(this.state.doc.collection, doc._id)}/>
                        &emsp;Doc title: {doc.title}<br/>
                    </div>
                })}
            </SubContainer>
        );
    }
}