import React, { useEffect, useState } from 'react'
import { Navigate, useLocation, Route, Routes, Link } from 'react-router-dom';
import { Button, Input, Select, Card } from 'antd';
import Ttable from './route/Ttable';
import Nonetable from './route/Nonetable'
import './less/listtable.less'

const { Option } = Select;

export default function Edit() {
  const location = useLocation()
  const [loca, setLoca] = useState(null)
  useEffect(() => {
    setLoca(location.pathname)
  }, [location.pathname])

  const handleChange = (value) => {
    console.log(`selected ${value}`);
  };
  return (
    <div className='list_table'>
      <div className='productcontainer'>
        <div style={{
          "backgroundColor": 'rgb(250,250,250)',
          "margin": '0 15px 0 15px',
        }}>
          <Link className='linkk' to='table'>动态住宅代理</Link>
          <Link className='linkk' to='none'>静态住宅代理</Link>
        </div>

        <div className='cardcontainer'>
          <Card
            hoverable
            style={{
              width: 320,
              height: 110,
            }}
          >
            <div style={{
              fontSize: 12,
              color: 'rgb(153,153,153)',
              marginTop: '-10px',
              marginBottom: '5px'
            }}>剩余可用动态住宅代理流量</div>
            <div style={{
              fontSize: 16,
              marginBottom: '5px'
            }}>12208026 M</div>
            <Button

              style={{
                backgroundColor: 'rgb(70,84,254)',
                color: 'white'
              }}
            >去充值</Button> &nbsp;
            <Button

            >提取API</Button>

          </Card>
          <Card
            hoverable
            style={{
              width: 320,
              height: 110,
            }}
          >
            <div style={{
              fontSize: 12,
              color: 'rgb(153,153,153)',
              marginTop: '-10px',
              marginBottom: '5px'
            }}>已使用动态住宅代理流量</div>
            <div style={{
              fontSize: 16,
              marginBottom: '5px'
            }}>12208026 M</div>
            <Button

              style={{
                backgroundColor: 'rgb(70,84,254)',
                color: 'white'
              }}
            >去充值</Button> &nbsp;
            <Button

            >提取API</Button>

          </Card>
          <Card
            hoverable
            style={{
              width: 320,
              height: 110,
            }}
          >
            <div style={{
              fontSize: 12,
              color: 'rgb(153,153,153)',
              marginTop: '-10px',
              marginBottom: '5px'
            }}>临近失效动态住宅代理流量</div>
            <div style={{
              fontSize: 16,
              marginBottom: '5px'
            }}>12208026 M</div>
            <Button

              style={{
                backgroundColor: 'rgb(70,84,254)',
                color: 'white'
              }}
            >去充值</Button> &nbsp;
            <Button

            >提取API</Button>

          </Card>
        </div>

        <div className='checkbox'>
          <Input placeholder="请输入订单号"
            style={{
              "width": 230
            }}
          />

          <Select
            placeholder="订单状态"
            style={{
              "width": 230,
            }}
            onChange={handleChange}
          >
            <Option value="jack">有效</Option>
            <Option value="lucy">已过期</Option>
            <Option value="hand">已退款</Option>
          </Select>
          <Button
            style={{
              backgroundColor: 'rgb(70,84,254)',
              color: 'white'
            }}
          >筛选</Button>
          <Button>重置</Button>
        </div>

        {/* 注册路由 */}
        <Routes>
          <Route path='table' element={<Ttable />} />
          <Route path='none' element={<Nonetable />} />
          <Route path='' element={<Navigate to="table" />} />
        </Routes>
        {/* <Outlet /> */}
        {/* <Ttable /> */}
      </div>
    </div>
  )
}
