import React, { useContext } from "react";
import { Link, withRouter } from "react-router-dom";
import styled from "styled-components";
import { UserContext } from "./Context";

const Header = styled.header`
  color: black;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 50px;
  text-align: center;
  text-transform: uppercase;
  font-weight: bold;
  display: flex;
  align-items: center;
  background-color: rgba(20, 20, 20, 1);
  z-index: 10;
  box-shadow: 0px 1px 2px 2px rgba(0, 0, 0, 0.8);
  border-bottom: 3px solid ${props => (props.current ? "#ff9b80" : "transparent")};
  transition: border-bottom 0.5s ease-in-out;
`;

const Logo = styled.h1`
  color: white;
  mix-blend-mode: difference;
  padding: 20px;
  font-size: 24px;
  display: inline-block;
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
  border-radius: 1px;
  background-color:
    ${props => (props.current ? "#ff9b80" : "transparent")};
  transition: background-color 0.3s ease-in-out;
  text-decoration-line: none;
`;

const SLink = styled(Link)`
  height: 50px;
  color: white;
  mix-blend-mode: difference;
  display: flex;
  align-items: center;
  justify-content: center;
`;

var isLogin;

export const TopHeader = ({ location: {pathname} }) => {
  /*const {
    user: {email, token, isLogin}
  } = useContext(UserContext);*/
  const email = "test@test.com";
  const token = "12345678";
  isLogin = true;
  return (
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
  );
};

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
