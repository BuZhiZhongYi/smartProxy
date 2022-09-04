import React from 'react'
import './css/program.css'
import { Button } from 'antd'

export default function Program() {
  return (
    <div className='program'>
    <div className="mainprogram">
          <div className="titlearea">
              <div className="banner_title">动态住宅处理</div>
              <div className="banner_sub">动态住宅代理网络是包含互联网服务提供商（ISP）提供的真实IP地址的一个代理网络。这些IP地址连接到全球各地国家或城市级别的物理位置。来自住宅代理的请求因其合法性而脱颖而出，使您能够有效地收集公共数据。</div> 
          </div>
          <div className="buttonarea">
              <Button type="primary" style={{ marginTop:"8px" , backgroundColor:'rgb(255,255,255)' , color:'blue' , border:'1px solid rgb(255,255,255)'}}>立即选购</Button>
              <Button type="primary" style={{ marginTop:"8px" , backgroundColor:'rgb(66,129,255)' , border:'1px solid rgb(255,255,255)'}}>咨询客服</Button>
          </div>
    </div>
    <div className="maincontent">
    </div>
  </div>
  )
}
