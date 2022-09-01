import React from 'react'
import { Button, Form, Input } from 'antd';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import './less/login.less'

export default function Register() {

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

          <Form.Item
            name="confirm"
            dependencies={['password']}
            hasFeedback
            rules={[
              {
                required: true,
                message: '请重新确认密码!',
              },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue('password') === value) {
                    return Promise.resolve();
                  }

                  return Promise.reject(new Error('两次输入的密码不一致!'));
                },
              }),
            ]}
          >
            <Input.Password placeholder='请重新确认密码' size="large" prefix={< LockOutlined className="site-form-item-icon" />} />
          </Form.Item>

          <Form.Item>
            <Link to='/login'>已有账号？立即登录</Link>
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" block size="large">
              注册
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  )
}

