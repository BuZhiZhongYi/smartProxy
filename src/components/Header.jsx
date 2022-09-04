import React from 'react';
import { Button } from 'antd';
import logoImg from '../assets/logo.png'
import selectImg from '../assets/select.png'
import './css/header.css'
import { NavLink } from 'react-router-dom';

export default function Header() {
    return (
        <div className="header">
            <div className="mainheader">
                <div className="logo">
                    <img src={logoImg} alt="" className="logo" style={{width:'160px',heigh:'32px'}}/>
                </div>
                <div className="navarea">
                    <div className="nav"><NavLink to={"/"}>首页</NavLink></div>
                    <div className="nav">
                        <div className="nav_buy">
                            <NavLink to={"/purchase/dynamic"}>套餐购买<img src={selectImg} alt="" /></NavLink>
                        </div>
                        <div className="purchaseselect">
                            <NavLink to={"/purchase/dynamic"}>动态住宅代理</NavLink>
                            <NavLink to={"/purchase/stastic"}>静态住宅代理</NavLink>
                        </div>
                    </div>
                    <div className="nav">
                        <div className="nav_resolve">
                            <NavLink to={"/program/dynamic"}>解决方案<img src={selectImg} alt="" /></NavLink>
                        </div>
                        <div className="programselect">
                            <NavLink to={"/purchase/dynamic"}>动态住宅代理</NavLink>
                            <NavLink to={"/purchase/stastic"}>静态住宅代理</NavLink>
                        </div>
                    </div>
                    <div className="nav">
                        <div className="nav_tool">
                            <NavLink to={"/tool"}>工具<img src={selectImg} alt="" /></NavLink>
                        </div>
                        <div className="toolselect">
                            <NavLink to={"/purchase/dynamic"}>密码提取</NavLink>
                            <NavLink to={"/purchase/stastic"}>API提取</NavLink>
                            <NavLink to={"/purchase/stastic"}>全球地区</NavLink>
                        </div>
                    </div>
                    <div className="nav"><NavLink to={"/help"}>帮助中心</NavLink></div>
                </div>
                <div className="button">
                    <Button type="primary" style={{ marginTop:"2px" , backgroundColor:'rgb(255,255,255)' , color:'black' , border:'1px solid rgb(255,255,255)'}}>
                        <NavLink to={"/login"}>登录</NavLink>
                    </Button>
                    <Button type="primary" style={{ marginTop:"2px" , backgroundColor:'(63,61,255)'}}>
                        <NavLink to={"/register"}>注册</NavLink>
                    </Button>
                </div>
            </div>
        </div>
    )
}
