import React from 'react';
import {Layout} from "antd";
import styled from "styled-components";


const Footer = () => {
  return (
    <FooterLayout>Nolraun Soft</FooterLayout>
  );
};

const FooterLayout = styled(Layout.Footer)`
  padding:0 20px;
  height: 70px;
  display: flex;
  align-items: center;
`;

export default Footer;
