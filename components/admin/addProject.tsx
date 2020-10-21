import React, {Component} from "react";
import {
    SubContainer,
    Field,
    Title, Button,
} from "@components/admin/adminContainer";
import {CrossButton} from '@components/global/crossButton';
import {CollectionSchema, DocumentSchema} from "@apiTypes/apiSchema";
import {AddDocument} from "@components/admin/addDocument";

interface ProjectProps {
    index: number,
    page: string,
    projects: CollectionSchema[],
    documents: DocumentSchema[],
}

interface ProjectState {
}

export class AddProject extends Component<ProjectProps, ProjectState> {

    props: ProjectProps;
    public state: ProjectState;

    constructor(props: ProjectProps) {
        super(props);
        this.props = props;
    }

    /*

    private updateType = (e) => {
        this.props.indicator.type_ = e.value;
        this.props.updateParent(this.props.indicator, this.props.index);
        if (this.props.indicator.type_ == 'volume_delta' || this.props.indicator.type_ == 'returns') {
            this.hideArg();
            this.props.indicator.arguments = "1";
            this.props.updateParent(this.props.indicator, this.props.index);
        } else {
            this.showArg();
            this.props.indicator.arguments = "";
            this.props.updateParent(this.props.indicator, this.props.index);
        }
    };

    private updateArgument = (e) => {
        this.props.indicator.arguments = e.target.value;
        this.props.updateParent(this.props.indicator, this.props.index);
    };

    private removeIndicator = () => {
        this.props.removeChild(this.props.index);
    };

    private showArg = () => {
        this.setState({display: 'block'});
    };

    private hideArg = () => {
        this.setState({display: 'none'});
    };

     */

    public render(): React.ReactElement {
        return (
            <SubContainer className='Ticker'>
                <Title className='title'>Page: {this.props.page}</Title>

                <CrossButton className='Ticker' onClick={null}/>
                {this.props.projects.map((project, index) =>
                    <AddDocument key={index} index={index} project={project}
                                 documents={this.props.documents.find(e => e.collection == project.collection)}/>)
                }
                <Button onClick={null}>ADD DOCUMENT</Button>
                <br/>

            </SubContainer>
        );
    }
}