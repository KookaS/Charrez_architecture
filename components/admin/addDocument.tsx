import React, {Component} from "react";
import {CrossButton} from '@components/global/crossButton';
import {Field, SubContainer, Title} from "@components/admin/adminContainer";
import {CollectionSchema, DocumentSchema} from "@apiTypes/apiSchema";

interface DocumentProps {
    index: number,
    project: CollectionSchema,
    documents: DocumentSchema,
}

interface DocumentState {

}

export class AddDocument extends Component<DocumentProps, DocumentState> {
    props: DocumentProps;

    constructor(props: DocumentProps) {
        super(props);
        this.props = props;
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

        private removeTicker = () => {
            this.props.removeChild(this.props.index);
        };

     */

    /*

     */

    public render(): React.ReactElement {

        return (
            <SubContainer>
                <Title className='title'>Project: {this.props.project.collection}</Title>
                Project id: {this.props.project.metadata._id}
                Project title: {this.props.project.metadata.title}
                Project date: {this.props.project.metadata.date}
                {this.props.documents}

                <CrossButton className='Indicator' onClick={null}/>
            </SubContainer>
        );
    }
}