import React from "react";
import {ImageProjectGridContainer, ImageProjectGridElement} from "@components/global/image";
import {ProjectSchema} from "@apiTypes/projectSchema";
import {SubText, Title} from "@components/global/text";

interface ProjectProps {
    dbName: string,
    projects: ProjectSchema[],
}

export const Project = (props: ProjectProps) => {
    try {
        const elements = props.projects.map((project, index) => {
            return <ImageProjectGridElement
                key={index}
                theme={{row: Math.floor((index) / 2) + 1, column: 1 + (2 + index) % 2}}
                style={{backgroundImage: `url(${process.env.NEXT_PUBLIC_API_URL}/${props.dbName}/loadImage?id=${project.id})`}}>
                <Title className='Project'>{project.metadata.title}</Title>
                <SubText className='Project'>{project.metadata.description}</SubText>
                <SubText className='Project'>DATE: {project.metadata.date}</SubText>
            </ImageProjectGridElement>
        })
        return (
            <ImageProjectGridContainer>
                {elements}
            </ImageProjectGridContainer>
        )
    } catch (err) {
        throw err
    }

}