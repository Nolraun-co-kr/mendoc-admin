import React from 'react';
import {Link} from "react-router-dom";
import {Menu, Layout} from "antd";
import styled from "styled-components";
import {useHeader} from "../../hooks/useHeader";

const {SubMenu, Item} = Menu

const Header = () => {
  const {depth1, logout, me} = useHeader();

  return (
    <HeaderLayout>
      <Link to={'/'} className="logo">멘독 관리자 사이트</Link>
      <MenuLayout theme="dark" mode="horizontal" selectedKeys={[depth1]}>
        <Item key="users">
          <Link to={'/users'}>회원관리</Link>
        </Item>

        <SettingMenu title={`${me?.username}님! 안녕하세요.`}>
          <Item onClick={logout}>로그아웃</Item>
        </SettingMenu>
      </MenuLayout>
    </HeaderLayout>
  );
};

const HeaderLayout = styled(Layout.Header)`
  display: flex;
  align-items: center;
  padding:0;
  
  .logo {
    color:#fff;
    font-size: 1.25rem;
    width: 250px;
    flex: none;
    text-align: center;
  }
`;

const MenuLayout = styled(Menu)`
  display: flex;
  flex: 1;
`;

const SettingMenu = styled(SubMenu)`
  margin-left: auto;
`;

export default Header;
