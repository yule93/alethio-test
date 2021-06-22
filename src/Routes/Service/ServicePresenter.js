import React from "react";
import Helmet from "react-helmet";
import styled from "styled-components";
import Loader from "../../Components/Loader";

const OrderButton = styled.div``;
const ProductImage = styled.div``;
const Conatiner = styled.div``;

const ServicePresenter = (loading, error) => (
    <>
        <Helmet>
            <title>Service</title>
        </Helmet>
        {loading ? (
            <Loader />
        ) : (
            <Conatiner>
                <ProductImage />
                <OrderButton>주문하기</OrderButton>
            </Conatiner>
        )}
    </>
);

export default ServicePresenter;