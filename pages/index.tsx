import React, { useState } from 'react'
import Head from 'next/head'
import Link from 'next/link'



import styles from '../styles/home.module.scss'

/* Ant Design */
import { 
  Row, 
  Col, 
  Divider,
  Drawer, Button,
  Input, Space,
  Card  
} from 'antd';


import { Menu } from 'antd';
import { MailOutlined, AppstoreOutlined, SettingOutlined } from '@ant-design/icons';
import { AudioOutlined } from '@ant-design/icons';

const { SubMenu } = Menu;
const { Search } = Input;
const suffix = (
  <AudioOutlined
    style={{
      fontSize: 16,
      color: '#1890ff',
    }}
  />
);



const onSearch = value => console.log(value);

export default function FirstPost() {
  const [ current, setCurrent] = useState('mail')
  const [visible, setVisible] = useState(false);

  const showDrawer = () => {
    setVisible(true);
  };
  const onClose = () => {
    setVisible(false);
  };
  
  return(
    <div>
      <Head>
        <title>Kitsu App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Menu onClick={(e) =>{ current: e.key }} selectedKeys={[current]} mode="horizontal">
        <Menu.Item key="mail" icon={<MailOutlined />}>
          Home
        </Menu.Item>
      
        <Menu.Item key="alipay">
          <Link href="/posts/post">Posts</Link>                
        </Menu.Item>
        <Menu.Item key="alipay" style={{float: 'right'}}>
          <Search
            placeholder="Procure seu anime"
            enterButton="Search"
            size="large"
            suffix={suffix}
            onSearch={onSearch}
            
          />             
        </Menu.Item>
      </Menu> 
      <Divider orientation="left">Encontre os melhore animes</Divider>
      <Row>
        <Col span={18} push={6}>
          <Row justify="start" >
            <Col className="gutter-row" 
              xs={{ span:9}} 
              lg={{ span:6}} 
              md={{ span:6}}>
              <Card title="Default size card" 
                extra={<a href="#">More</a>} 
                style={{ width: 200 }}
              >
                <p>Card content</p>
                <p>Card content</p>
                <p>Card content</p>
              </Card>
            </Col>
            <Col className="gutter-row" 
              xs={{ span:9}} 
              lg={{ span:6}} 
              md={{ span:6}}
            >
              <Card title="Default size card" 
                extra={<a href="#">More</a>} 
                style={{ width: 200 }}
              >
                <p>Card content</p>
                <p>Card content</p>
                <p>Card content</p>
              </Card>
            </Col>          
          </Row>
        </Col>
        <Col span={6} pull={18} style={{ paddingLeft: '100px' }}>
          <Button 
            type="primary" 
            onClick={showDrawer}            
          >
            Categorias
          </Button>
          
        </Col>
      </Row>
      
      <Drawer
        title="Basic Drawer"
        placement="left"
        closable={false}
        onClose={onClose}
        visible={visible}
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Drawer>

    </div>
    
  ) 
  
}
