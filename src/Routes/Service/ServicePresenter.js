import React, { useState } from "react";
import Helmet from "react-helmet";
import styled from "styled-components";
import Loader from "../../Components/Loader";
import LogInOut from "../LogInOut";

const Conatiner = styled.div`
    width: 100%;
    height: 90%;
    display: flex;
    justify-content: center;
    position:absolute;
    margin:auto;
    padding: 20px;
`;

const ProductContainer = styled.div`
    width: 20%;
    height: 70%;
    display: inline-block;
    margin: 0 auto;
`;

const OrderButton = styled.div`
    width: 120px;
    height: 50px;
    line-height: 50px;
    text-align: center;
    text-transform: uppercase;
    font-size: 20px;
    font-weight: bold;
    margin:auto;
    background-color: #ff9b80;
    border-radius: 1px; 
    &:hover {
        opacity: 0.7;
    }
`;

const ProductImageContainer = styled.div`
    width: 100%;
    height: 100%;
    margin-bottom: 10px;
    position: relative;
    overflow: hidden;    
    border-radius: 2px;
`;

const Image = styled.div`
    background-image: url(${props => props.bgUrl});
    max-width: 100%;
    height: 100%;
    display: block;
    background-size: cover;
    background-radius: 1px;
    background-position: center center;
`;

const ProductName = styled.span`
    text-align: center;
    font-size: 17px;
    display: block;
    margin-bottom: 5px;
`;

const ProductDescription = styled.div`
    text-align: center;
    margin-bottom: 20px;
    display: block;
`;

const orderFunction = token => {
    if(typeof(token) !== `string`) {
        window.location.href = "/#/login";
        alert("로그인을 해주세요.");
    } else alert("주문 성공");
}

const ServicePresenter = ({isLoading, token, email, error}) => (
    <>
        <Helmet>
            <title>Service</title>
        </Helmet>
        {isLoading ? (
            <Loader />
        ) : (
            <Conatiner>
                <ProductContainer>
                    <ProductImageContainer>
                        <Image bgUrl = {require("../../Assets/examplePhoto1.jpg").default}>
                        </Image>
                    </ProductImageContainer>
                    <ProductName>
                        <span>
                            EXAMPLE PRODUCT NAME
                        </span>
                    </ProductName>
                    <ProductDescription>
                        <span>
                            EXAMPLE TEXT
                            EXAMPLE TEXT
                            EXAMPLE TEXT
                        </span>
                    </ProductDescription>
                    <OrderButton onClick = {() => orderFunction(token)} >Order</OrderButton>
                </ProductContainer>
            </Conatiner>
        )}
    </>
);

export default ServicePresenter;