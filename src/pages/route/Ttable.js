import React from 'react'
import { Table } from 'antd';
import '../less/listtable.less'
export default function Ttable() {
  const columns = [
    {
      title: '订单号',
      dataIndex: 'dingdanhao',
      key: 'dingdanhao',
      className: 'columns'
    },
    {
      title: '订单流量',
      dataIndex: 'liuliang',
      key: 'liuliang',
      className: 'columns'
    },
    {
      title: '剩余流量',
      dataIndex: 'shengyu',
      key: 'shengyu',
      className: 'columns'
    },
    {
      title: '到期时间',
      key: 'shijian',
      dataIndex: 'shijian',
      className: 'columns'
    },
    {
      title: '订单状态',
      key: 'zhuangtai',
      dataIndex: 'zhuangtai',
      className: 'columns'
    },
    {
      title: '操作',
      dataIndex: 'caozuo',
      key: 'caozuo',
      className: 'columns'
    }
  ];
  const data = [
    {
      dingdanhao: '20220815223326904...',
      liuliang: '521M',
      shengyu: '',
      shijian: '54000元',
      zhuangtai: '已过期',
      caozuo: '续费'
    },
    {
      dingdanhao: '20220815223326904...',
      liuliang: '12288000M',
      shengyu: '',
      shijian: '54000元',
      zhuangtai: '有效',
      caozuo: '续费 提取'
    },
  ];
  return (
    <div>
      <Table
        style={{
          "padding": "0 15px 0 15px"
        }}
        rowClassName={record => {
          if (record.liuliang === '521M') return 'roww';
        }}

        columns={columns}
        dataSource={data}
      />
    </div>

  )
}
