import React, { useState } from 'react'
import Head from 'next/head'
import Link from 'next/link'

import styles from './Home.module.css'

/* Ant Design */
import { Menu } from 'antd';
import { MailOutlined, AppstoreOutlined, SettingOutlined } from '@ant-design/icons';

const { SubMenu } = Menu;

export default function FirstPost() {
  const [ current, setCurrent] = useState('mail')

  /* const handleClick = (e) => {
    setCurrent({ current: e.key })
  }; */
  
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
      </Menu>
    </div>
    
  ) 
  
}
