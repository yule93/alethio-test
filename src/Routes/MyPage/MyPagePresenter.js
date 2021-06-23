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
    top: 10%;
    padding: 20px;
    padding-top: 50px;
    mix-blend-mode: difference;
    font-size: 30px;
    width: ${({ xs }) => (xs ? `${calcWidth(xs)}` : `100%`)};

    @media only screen and (min-width: ${WIDTH_MOBILE}px) {
        left: initial;
        top: initial;
        bottom: 0px;
        width: ${({ lg }) => lg && `${calcWidth(lg)}%`};
    }
`;

const MyPagePresenter = ({ isLoading, userInfo, error }) => (
    <>
        <Helmet>
            <title>My Page</title>
        </Helmet>
        {isLoading ? (
            <Loader />
        ) : (
            <Container>
                <p>test</p>
            </Container>
        )}
    </>
);

export default MyPagePresenter;