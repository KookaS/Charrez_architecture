import React from "react";
import {ImageProjectGridContainer, ImageProjectGridElement} from "@components/global/image";
import {MetadataSchema} from "@apiTypes/apiSchema";
import {SubText} from "@components/global/text";

interface ProjectProps {
    dbName: string,
    elements: MetadataSchema[],
}

export const ElementGrid = (props: ProjectProps) => {

    const elements = props.elements.map((metadata, index) => {
        return (
            <ImageProjectGridElement
                key={index}
                theme={{row: Math.floor((index) / 2) + 1, column: 1 + (2 + index) % 2}}
                style={{backgroundImage: `url(${process.env.NEXT_PUBLIC_API_URL}/loadImage?id=${metadata._id})`}}>
                <SubText className='Project'>{metadata.title}</SubText>
            </ImageProjectGridElement>
        )
    })
    return (
        <ImageProjectGridContainer>
            {elements}
        </ImageProjectGridContainer>
    )
}