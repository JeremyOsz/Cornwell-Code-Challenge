import styled from "styled-components";

export default styled.div`
    & > div {
        position: relative !important;
        min-height: 60vh;
        height: auto !important;
    }
    @media (max-width: 890px) {
        & > div > div {
            width: 100% !important;
        }
    }
`;
