import styled from "styled-components";

export default styled.div`
    position: relative;
    display: flex;
    max-width: 100vw;

    & > div {
        display: block;
        flex: 1;
        height: auto;
        height: 32vw;
        max-width: 33.33%;
        overflow: hidden;
    }
    div:before {
        content: "";
        float: left;
        padding-top: 100%;
    }
    div:after {
        clear: both;
    }
    img {
        width: 100%;
        height: auto;
        object-fit: cover;
    }
    a.instaLink {
        display: inline-block;
        position: relative;
        padding: 0;
        margin: 0;
        height: auto;
        width: 100%;
        line-height: 0;
    }

    @media (max-width: 790px) {
        display: block;
        & > div {
            max-width: 100%;
            max-height: 50em;
            height: auto;
        }
    }
`;
