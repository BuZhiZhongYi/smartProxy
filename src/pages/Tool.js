import React from 'react'
import '../Tool/tool.css'
import { Button,Select } from 'antd'
const { Option } = Select;

export default function Tool() {
  const handleChange = (value) => {
    console.log(`selected ${value}`);
  };
  return (
    <div className='tool'>
        <div className="maintool">
              <div className="titlearea">
                  <div className="banner_title">账密提取</div>
                  <div className="banner_sub">代理为您提供专业的全方位服务保障，请您放心使用</div> 
              </div>
              <div className="buttonarea">
                  <Button type="primary" style={{ marginTop:"8px" , backgroundColor:'rgb(66,129,255)' , border:'1px solid rgb(255,255,255)'}}>咨询客服</Button>
              </div>
        </div>
        <div className="maincontent">
            <div className="contextarea">
                <div className="title">
                  API示例
                  <p className="tip_info">*该服务仅提供海外网络环境中使用，建议在海外服务器里面使用，不支持中国境内IP链接代理服务器</p>
                </div>
                <div className="languagearea">
                    <div className="title18">代码语言:</div>
                    <div className="languages">
                        <Button type="primary">通用模式</Button>
                        <Button>批量生成</Button>
                        <Button>Shell</Button>
                        <Button>Node.js</Button>
                        <Button>Java</Button>
                        <Button>C#</Button>
                        <Button>Go</Button>
                        <Button>PHP</Button>
                        <Button>Python</Button>
                        <Button>Ruby</Button>
                        <Button>Rust</Button>
                    </div>
                </div>
                <div className="formarea">
                    <div className="form_item">
                        <div className="form_title">选择套餐账号:</div>
                        <div className="form_select">
                            <Select  style={{  width: 303, marginRight:'1rem', marginTop:'0.3rem' }}  onChange={handleChange} placeholder='请选择你的套餐账号'></Select>
                        </div>
                    </div>
                    <div className="form_item">
                        <div className="form_title">选择节点国家:</div>
                        <div className="form_select">
                            <Select defaultValue="world"  style={{  width: 303, marginRight:'1rem', marginTop:'0.3rem' }}  onChange={handleChange}>
                                <Option value="world">全球混播</Option>
                                <Option value="US">美国</Option>
                                <Option value="Russia">俄罗斯</Option>
                            </Select>
                        </div>
                    </div>
                    <div className="form_item">
                        <div className="form_title">选择节点城市:</div>
                        <div className="form_select">
                            <Select defaultValue="random"  style={{  width: 303, marginRight:'1rem', marginTop:'0.3rem'}}  onChange={handleChange}>
                                <Option value="random">随机</Option>
                            </Select>
                        </div>
                    </div>
                    <div className="form_item">
                        <div className="form_title">session:</div>
                        <div className="form_select">
                            <Select  style={{  width: 303, marginRight:'1rem', marginTop:'0.3rem' }}  onChange={handleChange} placeholder='输入后尽可能提供相同IP，不输入默认为不同IP'></Select>
                        </div>
                    </div>
                    <div className="form_item">
                        <div className="form_title">选择失效时间:</div>
                        <div className="form_select">
                            <Select  style={{  width: 303, marginRight:'1rem', marginTop:'0.3rem' }}  onChange={handleChange} placeholder='请选择失效时间'>
                                <Option value="random">五分钟</Option>
                                <Option value="random">十分钟</Option>
                                <Option value="random">十五分钟</Option>
                                <Option value="random">三十分钟</Option>
                                <Option value="random">一小时</Option>
                                <Option value="random">两小时</Option>
                            </Select>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
