import React, { useEffect, useState } from 'react'
import { DatabaseOutlined, EditOutlined, ReadOutlined } from '@ant-design/icons';
import { Menu, Button, Modal } from 'antd';
import { useNavigate, useLocation } from 'react-router-dom';
import './a.css'

export default function Aside() {
  const location = useLocation()
  const navigate = useNavigate()
  const [defaultKey, setDefaultKey] = useState('')
  const [isModalVisible, setIsModalVisible] = useState(false);
  useEffect(() => {
    let path = location.pathname
    let key = path.split('/')[1]
    setDefaultKey(key)
  }, [location.pathname])
  function getItem(label, key, icon, children, type) {
    return {
      key,
      icon,
      children,
      label,
      type,
    };
  }
  const items = [
    getItem('账号管理', 'listlist', <ReadOutlined />,),
    getItem('订单管理', 'listtable', <ReadOutlined />,),
    getItem('产品管理', 'edit', <EditOutlined />,),
    getItem('退出登录', 'means', <DatabaseOutlined />,),
  ];

  const handleOk = () => {
    setIsModalVisible(false);
    navigate('/login')
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const onClick = (e) => {
    if (e.key === 'means') {
      setIsModalVisible(true)
    } else {
      navigate('/' + e.key)
    }
  };
  return (
    <div>
      <Menu
        onClick={onClick}
        theme="light"
        style={{
          width: 180,
          fontSize: 12
        }}
        className="aside"
        selectedKeys={[defaultKey]}
        mode="inline"
        items={items}
      />
      <Modal title="确认退出?"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        okText="确认"
        cancelText="取消"
      >
        <p>是否退出登录</p>

      </Modal>
    </div>
  )
}
