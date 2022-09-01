import React from 'react'
import { Button, Form, Input } from 'antd';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import './less/login.less'

export default function Login() {

  return (
    <div className='login'>
      <div className='login_box'>
        <Form
          name="basic"
          initialValues={{
            remember: true,
          }}
          // onFinish={onFinish}
          autoComplete="off"
        >
          <Form.Item
            name="username"
            rules={[
              {
                required: true,
                message: '请输入用户名!',
              },
            ]}
          >
            <Input placeholder='请输入用户名' size="large" prefix={< UserOutlined className="site-form-item-icon" />} />
          </Form.Item>

          <Form.Item
            name="password"
            rules={[
              {
                required: true,
                message: '请输入密码!',
              },
            ]}
          >
            <Input.Password placeholder='请输入密码' size="large" prefix={< LockOutlined className="site-form-item-icon" />} />
          </Form.Item>

          <Form.Item>
            <Link to='/register'>还没有账号？立即注册</Link>
          </Form.Item>


          <Form.Item>
            <Button type="primary" htmlType="submit" block size="large">
              登录
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  )
}
