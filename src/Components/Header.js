import React from "react";
import { Link, withRouter } from "react-router-dom";
import styled from "styled-components";
import OpenColor from "open-color";

const Header = styled.header`
  color: black;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 50px;
  text-align: center;
  display: flex;
  
  align-items: center;
  background-color: rgba(240, 240, 240, 0.8);
  z-index: 10;
  box-shadow: 0px 1px 5px 2px rgba(0, 0, 0, 0.8);
  border-bottom: 3px solid ${props => (props.current ? "#F6D8CE" : "transparent")};
  transition: border-bottom 0.5s ease-in-out;
`;

const Logo = styled.h1`
  mix-blend-mode: difference;
  padding: 20px;
  font-size: 24px;
  font-weight: bold;
`;

const List = styled.ul`
  display: flex;
  margin-left: auto;
  font-size: 15px;
`;

const Item = styled.li`
  width: 80px;
  height: 50px;
  text-align: center;
  background-color:
    ${props => (props.current ? "#F6D8CE" : "transparent")};
  transition: border-bottom 1s ease-in-out;
  text-decoration-line: none;
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
    <Logo>ALETHIO</Logo>
    <List>
      <Item current={pathname === "/"}>
        <SLink to="/">Service</SLink>
      </Item>
      <Item current={pathname === "/mypage"}>
        <SLink to={isLogin ? '/mypage' : '/login'}>My Page</SLink>
      </Item>
      <Item current={pathname === "/login" || pathname === "/logout"}>
        <SLink to={isLogin ? '/logout' : '/login'}>{isLogin ? "Log Out" : "Log In"}</SLink>
      </Item>
    </List>
  </Header>
));