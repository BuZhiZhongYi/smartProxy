import React from 'react'
import './assets/base.less'
import Header from './components/Header';
import Footer from './components/Footer';
import { Outlet } from 'react-router-dom';
import { Layout } from 'antd';
import Aside from './components/Aside';

export default function App() {
  return (
    <Layout id='app'>
      <Header />
      <div className='container'>
        <Aside />
        <div className='container_box'>
          <div className='container_content'>
            <Outlet />
          </div>
        </div>
      </div>
      <Footer/>
    </Layout>
  )
}

