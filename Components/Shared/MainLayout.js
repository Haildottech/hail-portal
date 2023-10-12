"use client"
import React, { useState } from 'react';
import { UploadOutlined, CloseCircleOutlined, FileDoneOutlined } from '@ant-design/icons';
import { Layout, Menu, theme, Select } from 'antd';
const { Header, Content, Sider } = Layout;
import Router from 'next/router';

const App = ({children}) => {

  const {token:{colorBgContainer}} = theme.useToken();
  const [ company, setCompany ] = useState("3")

  return (
    <Layout>
      <Sider style={{height:'100vh'}} breakpoint="lg" collapsedWidth="0"
        onBreakpoint={(broken) => {
          console.log(broken);
        }}
        onCollapse={(collapsed, type) => {
          console.log(collapsed, type);
        }}
      >
        <div className="demo-logo-vertical" />
        {/* <h5 className='px-4 mt-4 mb-5' style={{color:'white'}}>Welcome</h5> */}
        <div className='p-4' style={{height:83}}>
          <img src={`/images/${company}.png`} width={150} />
        </div>
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={['1']}
          onSelect={(e)=>{
            if(e.key==1){
              Router.push("/latestReleases");
            } else if(e.key==2) {
              Router.push("/amends");
            } else if(e.key==3) {
              Router.push("/failedReports");
            }
          }}
          items={[
              {
                  key: 1,
                  icon: <UploadOutlined/>,
                  label: `Latest Releases`,
              },
              {
                  key: 2,
                  icon: <FileDoneOutlined />,
                  label: `Amends Reports`,
              },
              {
                  key: 3,
                  icon: <CloseCircleOutlined />,
                  label: `Failed Reports`,
              },
          ]}
        />
      </Sider>
      <Layout>
        <Header style={{ padding: 0, background: colorBgContainer }}>
          <div className='px-4'>
          <Select style={{width: 155, opacity:0.7}} value={company} onChange={(e)=>setCompany(e)}
            options={[
              {label:"Dayfresh", value:"1"},
              {label:"Indigo Textiles", value:"2"},
              {label:"Akhatar Textiles", value:"3"},
            ]} 
          />
          </div>
          </Header>
        <Content
          style={{
            margin: '24px 16px 0',
          }}
        >
          <div
            style={{
              padding: 24,
              minHeight: "88vh",
              background: colorBgContainer,
            }}
          >
            {children}
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};
export default App;