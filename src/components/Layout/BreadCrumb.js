import React from 'react';
import {Breadcrumb} from "antd";
import styled from "styled-components";
import useGetLocationData from "../../hooks/useGetLocationData";
import {Link} from "react-router-dom";

const BreadCrumb = () => {
  const {depth1, depth2} = useGetLocationData()
  return (
    <BreadCrumbLayout>
      <Breadcrumb.Item>
        <Link to={'/'}>Dashboard</Link>
      </Breadcrumb.Item>
      { depth1 && (
        <Breadcrumb.Item>
          <Link to={`/${depth1}`}>{depth1}</Link>
        </Breadcrumb.Item>
      )}
      { depth2 && (
        <Breadcrumb.Item>
          <Link to={`/${depth1}/${depth2}`}>{depth2}</Link>
        </Breadcrumb.Item>
      )}
    </BreadCrumbLayout>
  );
};

const BreadCrumbLayout = styled(Breadcrumb)`
  height: 52px;
  display: flex;
  align-items: center;
  background:#f7f7f7;
  padding:0 20px;
`;

export default BreadCrumb;
