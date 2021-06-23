import React from "react";
import styled from "styled-components";

const Container = styled.div`
    width: 200px;
    justify-content: center;
    text-align: center;
    font-size: 20px;
    position:absolute;
    left:0;right:0;top:50%;
    margin:auto;
    transform:translateY(-50%);
    mix-blend-mode: difference;
    text-transform: uppercase;

    &:before {
        background: #61bdb6;
        width: 128px;
        height:36px;
        display:block;
        position:absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        margin:auto;
        
        animation:2s loadingBefore infinite ease-in-out;
    }

    &:after {
        content:'';
        background:#ff3600;
        width:14px;
        height:60px;
        display:block;
        position:absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        margin:auto;
        opacity:.5;
        
        animation:2s loadingAfter infinite ease-in-out;
    }

    @keyframes loadingBefore {
        0%   {transform:translateX(-20px);}
        50%  {transform:translateX(20px);}
        100% {transform:translateX(-20px);}
      }

    @keyframes loadingAfter {
        0%   {transform:translateX(-50px);}
        50%  {transform:translateX(50px);}
        100% {transform:translateX(-50px);}
    }
`;

const Span = styled.span`
    position:relative;
    z-index:999;
    color: black;

`;

const Loader = () => (
    <Container>
        <Span role = "img" aria-label ="Loading">
            Now Loading...
        </Span>
    </Container>
);

export default Loader;
    