import React, { useEffect, useState } from 'react'
import { CaretDownOutlined } from '@ant-design/icons';
import { Dropdown, Menu, Space, Modal } from 'antd';
import { useNavigate } from 'react-router-dom';
import defaultAvatar from '../assets/defaultAvatar.jpg'
export default function Header() {
  const navigate = useNavigate()
  const [Avatar, setAvatar] = useState(defaultAvatar)
  const [username, setUsername] = useState("游客")
  const [isModalVisible, setIsModalVisible] = useState(false);

  useEffect(() => {
    let username1 = localStorage.getItem('username')
    let Avatar1 = localStorage.getItem('avatar')
    if (username1) {
      setUsername(username1)
    }
    if (Avatar1) {
      setAvatar('http://47.93.114.103:6688/' + Avatar1)
    }
  }, [localStorage.getItem('avatar')])

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
    localStorage.clear()
    navigate('/login')
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const menu = (
    <Menu
      items={[
        {
          key: '1',
          label: (
            <span>
              修改资料
            </span>
          ),
        },
        {
          key: '2',
          label: (
            <div>
              <span onClick={showModal}>
                退出登录
              </span>
              <Modal
                title="提示"
                visible={isModalVisible}
                onOk={handleOk}
                onCancel={handleCancel}
                cancelText={'取消'}
                okText={'确定'}
                zIndex={99999}
              >
                <span>确认退出登录吗？</span>
              </Modal>
            </div>
          ),
        },
      ]}
    />
  );
  return (
    <div>
      <header>
        <div className='left'>左侧logo图</div>
        <div className='right'>
          <Dropdown overlay={menu}>
            <a className='control' onClick={(e) => e.preventDefault()}>
              <Space>
                <img src={Avatar} alt="" className='avatar'></img>
                <span>
                  {username}
                </span>
                <CaretDownOutlined />
              </Space>
            </a>
          </Dropdown>
        </div>
      </header>
    </div>
  )
}
