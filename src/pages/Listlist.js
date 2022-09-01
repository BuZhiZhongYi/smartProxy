import React, { useState } from 'react'
import { Modal, Button, Select, DatePicker, Space, Card, Form, Input } from 'antd';
import { useNavigate } from 'react-router-dom';

import './less/listtable.less'
import avtor from '../img/avtor.png'
import infor2 from '../img/infor2.png'
import infor3 from '../img/infor3.png'
import infor4 from '../img/infor4.png'
import infor5 from '../img/infor5.png'
import infor6 from '../img/infor6.png'
import infor7 from '../img/infor7.png'
import nodata from '../img/nodata.png'
const { Option } = Select;
const { RangePicker } = DatePicker;
export default function Listlist() {
  const navigate = useNavigate()
  const [isModalVisible, setIsModalVisible] = useState(false);
  const handleChange = (value) => {
    console.log(`selected ${value}`);
  };
  const change = () => {
    navigate('/edit/table')
  }
  const showModal = () => {
    setIsModalVisible(true);
  };
  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const onFinish = (values) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <div className='list_table' style={{ padding: '15px', paddingTop: 40 }}>
      <div className='img_container3'>
        <Card
          style={{
            width: 455,
          }}
        >
          <div className='cardcontent'>
            <img style={{
              width: 90,
              marginTop: -10,
              marginRight: 10,
              marginLeft: -15,
            }} src={avtor} alt="1"></img>
            <div>
              <span>手机号：</span><b>150****1997</b>
              <Button
                onClick={showModal}
                style={{
                  fontSize: 10,
                  marginLeft: 90,
                  color: 'rgb(70,84,254)',
                  backgroundColor: 'rgb(240,243,255)',
                  border: 'transparent',
                }}
              >修改密码</Button>
              <br />
              <span className='imgcss' >APP_KEY：d01f7d8447528fcf255562ebf0f1e73b</span><br />
              <span className='imgcss' >注册时间：2022-08-11</span><br />
              <span className='imgcss'>实名认证：</span>
              <span className='imgcss'>已认证</span><br />
              <div style={{
                width: 330,
                height: 40,
                marginTop: 2,
                backgroundColor: 'rgb(255,249,243)'
              }}>
                <span style={{
                  fontSize: 10,
                  paddingLeft: 10,
                  color: 'rgb(250,131,45)'
                }}>完成个人实名认证，已赠送500M流量</span><br />
                <span
                  onClick={change}
                  style={{
                    fontSize: 10,
                    paddingLeft: 10,
                    color: 'rgb(70,84,254)'
                  }}>查看详情</span>
              </div>
            </div>
          </div>
        </Card>

        <img className='imgg' src={infor2} alt="1"></img>
      </div>

      <div style={{ "fontSize": "18px", "margin": "30px 0 20px 0px" }}>
        <b >产品信息</b>
      </div>

      <div className='img_container2'>
        <img className='imgg' src={infor3} alt="1"></img>
        <img className='imgg imgg2' src={infor4} alt="1"></img>
      </div>

      <div style={{ "fontSize": "18px", "margin": "30px 0 20px 0px" }}>
        <b>流量使用情况</b>
        <b style={{ "marginLeft": "393px" }}>订单状态情况</b>
      </div>

      <div className='img_container'>
        <img className='imgg' src={infor5} alt="1"></img>
        <div style={{
          width: 500,
          display: 'flex',
          justifyContent: 'space-around'
        }}>
          <img className='imgg1' src={infor6} alt="1"></img>
          <img className='imgg1' src={infor7} alt="1"></img>
        </div>


      </div>

      <div style={{ "fontSize": "18px", "margin": "30px 0 20px 0" }}>
        <b >认证账号流量使用概况</b>
      </div>

      <div className='DataBox'>
        <Select
          placeholder="请选择用户名"
          style={{
            width: 220,
            margin: 20
          }}
          onChange={handleChange}
        >
          <Option value="jack">Jack</Option>
          <Option value="lucy">Lucy</Option>
          <Option value="Yiminghe">yiminghe</Option>
        </Select>
        <Space direction="vertical" size={12}>
          <RangePicker />

        </Space>
        <Button type="primary" style={{ marginLeft: 20 }}>查看</Button>
        <img className='nodata' src={nodata} alt="1"></img>
      </div>

      <Modal
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        // okText="确认"
        // cancelText="取消"
        footer={null}
      >
        <br />
        <div style={{
          // backgroundColor: 'red',
          textAlign: 'center',
          height: 60,
          fontSize: 20
        }}>修改登录密码</div>
        <Form
          name="basic"
          labelCol={{
            span: 6,
          }}
          wrapperCol={{
            span: 18,
          }}
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            label="新密码"
            name="username"
            rules={[
              {
                required: true,
                message: 'Please input your username!',
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="短信验证码"
            name="password"
            rules={[
              {
                required: true,
                message: 'Please input your password!',
              },
            ]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item
            name="remember"
            valuePropName="checked"
            wrapperCol={{
              offset: 8,
              span: 16,
            }}
          >

          </Form.Item>

          <Form.Item
            wrapperCol={{
              offset: 8,
              span: 16,
            }}
          >
            <Button
              style={{
                backgroundColor: 'rgb(70,84,254)',
                color: 'white',
                width: 200
              }}
              htmlType="submit">
              立即修改
            </Button>
          </Form.Item>
        </Form>

      </Modal>
    </div>
  )
}

