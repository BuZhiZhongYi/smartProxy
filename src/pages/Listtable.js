import React from 'react'
import './less/listtable.less'
import { Space, Table, Button, Input, Select, DatePicker } from 'antd';
const { Option } = Select;
export default function Listtable() {
  const handleChange = (value) => {
    console.log(`selected ${value}`);
  };
  const onChange = (date, dateString) => {
    console.log(date, dateString);
  };

  const columns = [
    {
      title: '订单号',
      dataIndex: 'dingdanhao',
      key: 'dingdanhao',
      className: 'columns'
    },
    {
      title: '产品类型',
      dataIndex: 'leixing',
      key: 'leixing',
      className: 'columns'
    },
    {
      title: '订单名称',
      dataIndex: 'mingcheng',
      key: 'mingcheng',
      className: 'columns'
    },
    {
      title: '订单金额',
      key: 'jine',
      dataIndex: 'jine',
      className: 'columns'
    },
    {
      title: '套餐周期',
      key: 'zhouqi',
      dataIndex: 'zhouqi',
      className: 'columns'
    },
    {
      title: '支付方式',
      dataIndex: 'fangshi',
      key: 'fangshi',
      className: 'columns'
    },
    {
      title: '支付时间',
      dataIndex: 'shijian',
      key: 'shijian',
      className: 'columns'
    },
    {
      title: '支付状态',
      dataIndex: 'zhuangtai',
      key: 'zhuangtai',
      className: 'columns'
    }
  ];
  const data = [
    {
      dingdanhao: '20220815223326904...',
      leixing: '动态住宅代理',
      mingcheng: '企业级-年度套餐',
      jine: '54000元',
      zhouqi: '365天',
      fangshi: '支付宝',
      shijian: '2022-08-15 22:33:41',
      zhuangtai: '已支付',
    },
    {
      dingdanhao: '20220811163007233...',
      leixing: '动态住宅代理',
      mingcheng: '',
      jine: '',
      zhouqi: '7天',
      fangshi: '系统',
      shijian: '2022-08-15 22:33:41',
      zhuangtai: '已支付'
    },
  ];
  return (
    <div className='list_table'>
      <div className='InputContainer'>
        <Input placeholder="请输入订单号"
          style={{
            "width": 230
          }}
        />

        <Select
          placeholder="产品类型"
          style={{
            "width": 230,
          }}
          onChange={handleChange}
        >
          <Option value="jack">动态住宅管理</Option>
          <Option value="lucy">静态住宅管理</Option>
        </Select>
        <Space direction="vertical">
          <DatePicker onChange={onChange}
            placeholder="请选择开始时间"
            style={{
              width: 175,
            }} />
        </Space>
        <Space direction="vertical">
          <DatePicker onChange={onChange}
            placeholder="请选择结束时间"
            style={{
              width: 175,
            }} />
        </Space>
        <Button
          style={{
            backgroundColor: 'rgb(70,84,254)',
            color: 'white'
          }}
        >筛选</Button>

        <Button>重置</Button>
      </div>
      <Table
        style={{
          "padding": "0 15px 0 15px"
        }}
        rowClassName={record => {
          if (record.zhouqi === '365天') return 'roww';
        }}
        columns={columns}
        dataSource={data}
      />
      <span className='sp'>共2项数据</span>
    </div>
  )
}
