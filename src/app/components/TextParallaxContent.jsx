import React from "react";

export const TextParallaxContentExample = () => {
    return <div className="bg-white">
        <TextParallaxContent
        imgSrc = "/evelyn/photos/handhold.JPG" 
        subheading = {"I wanted to post this,\n even if it was giving soft launch..."}
        heading = ""
        ></TextParallaxContent>
        <TextParallaxContent></TextParallaxContent>
        <TextParallaxContent></TextParallaxContent>
    </div>;
}

const IMG_PADDING = 0;

const TextParallaxContent = ({ imgSrc, subheading, heading, children }) => {
    return <div>
        <div

        >{/* TODO: image and copy text overlay thing */}</div>
        {children}
    </div>
}