import React from 'react';
import {Card, Empty, Layout, Button} from "antd";
import styled from "styled-components";

const { Sider } = Layout;

const Lnb = () => {
  // const {quickmenus} = useQuickmenus()
  return (
    <SiderLayout width={250}>
      {/*<Card size={"small"} title="퀵메뉴" extra={<Button size={'small'} type="link">관리</Button>} headStyle={{*/}
      {/*  background: '#616c77',*/}
      {/*  color:'#fff',*/}
      {/*}}>*/}
      {/*  {quickmenus?.length ? (*/}
      {/*    quickmenus.map(quick => {*/}
      {/*      return <div className={'quickmenuItem'} key={quick.id}><a target={"_blank"} href={quick.link}>{quick.name}</a></div>*/}
      {/*    })*/}
      {/*  ) : (*/}
      {/*    <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />*/}
      {/*  )}*/}

      {/*</Card>*/}
    </SiderLayout>
  );
};

const SiderLayout = styled(Sider)` 
  background:#f7f7f7;
  border-right: 1px solid #e7e7e7;
  align-self: stretch;
  padding: 10px;

  .ant-card {
    .quickmenuItem {
      display: block;
      padding-left: .85em;
      position: relative;
      
      a {
        color:#333;  
        &:hover {
          color:#1890ff;
        }
      }
      
      &:after {
        content: '-';
        position: absolute;
        left: 0;
        top: 0;
        line-height: 17px;
      }
    }
  }
  .ant-menu {
    height: 100%;
  }
`;

export default Lnb;
