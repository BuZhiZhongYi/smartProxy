import React from 'react'
import itemsImg1 from '../assets/items1.png'
import itemsImg2 from '../assets/items2.png'
import itemsImg3 from '../assets/items3.png'
import itemsImg4 from '../assets/items4.png'
import coreImg1 from '../assets/core1.png'
import coreImg2 from '../assets/core2.png'
import coreImg3 from '../assets/core3.png'
import coreImg4 from '../assets/core4.png'
import './css/home.css'
import { Button } from 'antd'


export default function Home() {
  return (
    <div className='home'>
        <div className="mainhome">
            <div className="titlearea">
                <span>优质海外HTTP代理</span>
                <span>全球IP资源提供商</span>
            </div>
            <div className="buttonarea">
                {/* <button>立即购买</button>
                <button>购买咨询</button> */}
                <Button type="primary" style={{ marginTop:"8px" , backgroundColor:'rgb(255,255,255)' , color:'blue' , border:'1px solid rgb(255,255,255)'}}>立即购买</Button>
                <Button type="primary" style={{ marginTop:"8px" , backgroundColor:'rgb(66,129,255)' , border:'1px solid rgb(255,255,255)'}}>咨询客服</Button>
            </div>
            <div className="bannerarea">
                <div className="banner_item">
                    <img src={itemsImg1} className="banner_icon" alt=''/>
                    <div className="banner_info">
                        <div className="banner_title">遍布全球</div>
                        <div className="banner_sub">IP覆盖率广</div>
                    </div>
                </div>
                <div className="banner_item">
                    <img src={itemsImg2} className="banner_icon" alt=''/>
                    <div className="banner_info">
                        <div className="banner_title">稳定安全</div>
                        <div className="banner_sub">高度匿名 保护隐私</div>
                    </div>
                </div>
                <div className="banner_item">
                    <img src={itemsImg3} className="banner_icon" alt=''/>
                    <div className="banner_info">
                        <div className="banner_title">高质量IP池</div>
                        <div className="banner_sub">动态纯净IP资源</div>
                    </div>
                </div>
                <div className="banner_item">
                    <img src={itemsImg4} className="banner_icon" alt=''/>
                    <div className="banner_info">
                        <div className="banner_title">即时帮助</div>
                        <div className="banner_sub">24/7全天候实时帮助</div>
                    </div>
                </div>
            </div>
        </div>
        <div className="maincontent">
            <div className="categoryarea">
                <div className="c_text">
                    <div className="c_big">核心实力</div>
                    <div className="c_small">整合技术&nbsp;构建更强体验</div>
                </div>
                <div className="corearea">
                    <div className="core_item">
                        <img src={coreImg1} className='core' alt="" />
                        <div className="core_data">
                            <div className="core_title">超高并发备份</div>
                            <div className="core_detail">独享高性能服务器，以真实住宅地址进行请求访问，保持代理正常连接，不限制并发数量，降低业务成本，提高运行效率。</div>
                        </div>
                    </div>
                    <div className="core_item">
                        <img src={coreImg2} className='core' alt="" />
                        <div className="core_data">
                            <div className="core_title">超高并发备份</div>
                            <div className="core_detail">独享高性能服务器，以真实住宅地址进行请求访问，保持代理正常连接，不限制并发数量，降低业务成本，提高运行效率。</div>
                        </div>
                    </div>
                    <div className="core_item">
                        <img src={coreImg3} className='core' alt="" />
                        <div className="core_data">
                            <div className="core_title">超高并发备份</div>
                            <div className="core_detail">独享高性能服务器，以真实住宅地址进行请求访问，保持代理正常连接，不限制并发数量，降低业务成本，提高运行效率。</div>
                        </div>
                    </div>
                    <div className="core_item">
                        <img src={coreImg4} className='core' alt="" />
                        <div className="core_data">
                            <div className="core_title">超高并发备份</div>
                            <div className="core_detail">独享高性能服务器，以真实住宅地址进行请求访问，保持代理正常连接，不限制并发数量，降低业务成本，提高运行效率。</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
