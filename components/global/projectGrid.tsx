import React from "react";
import {ImageProjectGridContainer, ImageProjectGridElement} from "@components/global/image";
import {CollectionSchema} from "@apiTypes/apiSchema";
import {SubText, Title} from "@components/global/text";
import Link from "next/link";

interface ProjectProps {
    dbName: string,
    elements: CollectionSchema[],
}

export const ProjectGrid = (props: ProjectProps) => {

    const elements = props.elements.map((project, index) => {
        return (
            <Link key={index} href={`/project?dbName=${props.dbName}&collection=${project.collection}`}>
                <ImageProjectGridElement
                    theme={{row: Math.floor((index) / 2) + 1, column: 1 + (2 + index) % 2}}
                    style={{backgroundImage: `url(${process.env.NEXT_PUBLIC_API_URL}/loadImage?id=${project.collection})`}}>
                    <Title className='Project'>{project.metadata.title}</Title>
                    <SubText className='Project'>{project.metadata.description}</SubText>
                    <SubText className='Project'>DATE: {project.metadata.date}</SubText>
                </ImageProjectGridElement>
            </Link>
        )
    })
    return (
        <ImageProjectGridContainer>
            {elements}
        </ImageProjectGridContainer>
    )
}