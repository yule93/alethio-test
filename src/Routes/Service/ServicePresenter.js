import React from "react";
import Helmet from "react-helmet";
import styled from "styled-components";
import Loader from "../../Components/Loader";

const OrderButton = styled.div`
    width: 200px;
    justify-content: center;
    text-align: center;
    font-size: 16px;
    margin:auto;
`;
const ProductImage = styled.div`
    margin-bottom: 10px;
`;
const Conatiner = styled.div`
    width: 100%;
    height: 100%;
`;

const ServicePresenter = (isLoading, token, email, error) => (
    <>
        <Helmet>
            <title>Service</title>
        </Helmet>
        {isLoading = false ? (
            <Loader />
        ) : (
            <Conatiner>
                <ProductImage />
                <OrderButton onClick = "">Order</OrderButton>
            </Conatiner>
        )}
    </>
);

export default ServicePresenter;