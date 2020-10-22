import React, {Component} from "react";
import {
    SubContainer,
    Field,
    Title, Button,
} from "@components/admin/adminContainer";
import {CrossButton} from '@components/global/crossButton';
import {CollectionSchema, DocumentSchema} from "@apiTypes/apiSchema";
import {AddDocument} from "@components/admin/addDocument";
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

export class AddProject extends Component<ProjectProps, ProjectState> {
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
                <Title className='title'>Page: {this.state.page}</Title>

                {this.state.projects.map((project, index) => {
                    return <div key={index}>
                        <CrossButton className='Project' onClick={null}/>
                        <AddDocument key={index} page={this.state.page} index={index}
                                     project={project}
                                     doc={this.state.docs.find(e => e.collection == project.collection)}
                                     updateParent={async () => await this.props.updateParent()}/>
                    </div>
                })
                }
                <Button onClick={null}>ADD DOCUMENT</Button>
                <br/>

            </SubContainer>
        );
    }
}