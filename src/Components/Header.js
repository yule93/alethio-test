import React from "react";
import { Link, withRouter } from "react-router-dom";
import styled from "styled-components";

const Header = styled.header`
  color: black;
  position: fixed;
  top: 0;
  left: 0;
  width: 80px;
  height: 50px;
  text-align: center;
  display: block;
  align-items: center;
  background-color: rgba(240, 240, 240, 0.8);
  z-index: 10;
  box-shadow: 0px 1px 5px 2px rgba(0, 0, 0, 0.8);
  border-bottom: 3px solid ${props => (props.current ? "#3498db" : "transparent")};
  transition: border-bottom 0.5s ease-in-out;
`;

const List = styled.ul`
  display: block;
`;

const Item = styled.li`
  width: 80px;
  height: 50px;
  text-align: center;
  border-bottom: 3px solid
    ${props => (props.current ? "#3498db" : "transparent")};
  transition: border-bottom 0.5s ease-in-out;
`;

const SLink = styled(Link)`
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const isLogin = "";

export default withRouter(({ location: { pathname } }) => (
  <Header>
    <List>
      <Item current={pathname === "/"}>
        <SLink to="/">Service</SLink>
      </Item>
      <Item current={pathname === "/tv"}>
        <SLink to={isLogin ? '/' : '/login'}>My Page</SLink>
      </Item>
      <Item current={pathname === "/search"}>
        <SLink to="/search">Search</SLink>
      </Item>
    </List>
  </Header>
));