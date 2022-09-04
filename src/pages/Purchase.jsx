import React, { useState } from 'react';
import './css/purchase.css'
import { Button,Menu } from 'antd'
import { NavLink, Outlet } from 'react-router-dom';

export default function Purchase() {
  const items = [
    {
      label:  (
        <NavLink to={"/purchase/dynamic"}>动态住宅处理</NavLink>
      ),
      key: 'dynamic',
    },
    {
      label:  (
        <NavLink to={"/purchase/stastic"}>静态住宅处理</NavLink>
      ),
      key: 'static',
    },
  ];

  const [current, setCurrent] = useState('dynamic');

  const onClick = (e) => {
    console.log('click ', e);
    setCurrent(e.key);
  };
  return (
    <div className='purchase'>
      <div className="mainpurchase">
            <div className="titlearea">
                <div className="banner_title">套餐购买</div>
                <div className="banner_sub">不同套餐类型 灵活满足您的业务需求</div> 
            </div>
            <div className="buttonarea">
                <Button type="primary" style={{ marginTop:"8px" , backgroundColor:'rgb(66,129,255)' , border:'1px solid rgb(255,255,255)'}}>咨询客服</Button>
            </div>
      </div>
      <div className="maincontent">
          <div className="menu_area">
              <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} />
          </div>
          <div className="menu">
              <Outlet/>
          </div>
      </div>
    </div>
  )
}
