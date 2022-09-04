
import React from 'react'
import './css/help.css'
import searchImg from '../assets/search.png'
import defaultImg from '../assets/default.png'

export default function Help() {
  return (
    <div className='help'>
    <div className="mainhelp">
          <div className="titlearea">
              <div className="banner_title">在这里，我们为你提供帮助与支持</div>
          </div>
          <div className="searcharea">
            <div className="search">
                <img src={searchImg} alt="" />
                <input type="text" placeholder='请输入关键词，如：实名认证、添加白名单'/>
                <img src={defaultImg} alt="" />
            </div>
          </div>
    </div>
    <div className="maincontent">
    </div>
  </div>
  )
}