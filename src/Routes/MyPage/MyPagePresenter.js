import React from "react";
import Helmet from "react-helmet";
import styled from "styled-components";
import Loader from "../../Components/Loader";

const calcWidth = span => {
    if(!span) return;
    const width = (span / 12) * 100;
    return width;
}

const WIDTH_MOBILE = 414;       // 모바일 크기

const Container = styled.div`
    padding: 20px;
    width: ${({ xs }) => (xs ? `${calcWidth(xs)}` : `100%`)};
    padding: 1rem;

    @media only screen and (min-width: ${WIDTH_MOBILE}px) {
        left: initial;
        top: initial;
        bottom: 0px;
        width: ${({ lg }) => lg && `${calcWidth(lg)}%`};
    }
`;

const MyPagePresenter = ({ loading, userInfo, error }) => {
    <>
        <Helmet>
            <title>My Page</title>
        </Helmet>
        {loading ? (
            <Loader />
        ) : (
            <Container>
                <p>test</p>
            </Container>
        )}
    </>
}

export default MyPagePresenter;