import React from "react";
import styled from "styled-components";

const AngleButton = styled.a`
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    height: 57px;
    width: 204px;
    margin: auto;
    background: none;
    border: none;
    background: linear-gradient(
        186deg,
        rgba(255, 0, 0, 0) 28%,
        white 0px,
        white
    );
    transform: skewY(-4deg);
    color: #000;

    font-family: Lato-Black;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    font-size: 1.5rem;
    text-align: center;

    p {
        transform: skewY(4deg);
        position: absolute;
        top: 11px;
        bottom: 0;
        left: 0;
        right: 1%;
        margin: auto;
        display: inline-block;
        height: fit-content;
    }
    img {
        height: 1.5em;
        width: auto;
        position: absolute;
        right: 1.5em;
        bottom: 0.5em;
        /* top: 0; */
        transform: skewY(4deg);
        margin: auto;
    }
`;

const FollowButton = ({ link, text }) => (
    <AngleButton href={link}>
        <p>{text} </p>
        <img
            src="https://image.freepik.com/free-icon/right-arrow-of-straight-lines_318-70901.jpg"
            alt="arrow"
        />
    </AngleButton>
);

export default FollowButton;
