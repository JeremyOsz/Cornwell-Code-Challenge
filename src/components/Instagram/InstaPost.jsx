import React from "react";

const instaPost = ({ src, alt, link }) => (
    <div>
        <a href={link}>
            <img src={src} alt={alt} />;
        </a>
    </div>
);

export default instaPost;
