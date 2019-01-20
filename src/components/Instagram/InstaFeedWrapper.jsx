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
        object-fit: cover;
    }
`;
