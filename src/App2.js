import React from 'react'
import './assets/base.less'
import Header from './components/Header';
import Footer from './components/Footer';
import { Outlet } from 'react-router-dom';
import { Layout } from 'antd';
const {Content} = Layout;

export default function App2() {
  return (
    <Layout >
      <Header />
            <Content>
              <Outlet/>
            </Content>
      <Footer/>
    </Layout>
  )
}

