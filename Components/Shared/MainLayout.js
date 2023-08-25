import React from 'react';
import { UploadOutlined, CloseCircleOutlined, FileDoneOutlined } from '@ant-design/icons';
import { Layout, Menu, theme } from 'antd';
const { Header, Content, Sider } = Layout;
import Router from 'next/router';

const App = ({children}) => {

  const {token:{colorBgContainer}} = theme.useToken();

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
        <h5 className='px-4 mt-4 mb-5' style={{color:'white'}}>Welcome</h5>
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
        <Header
          style={{
            padding: 0,
            background: colorBgContainer,
          }}
        />
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