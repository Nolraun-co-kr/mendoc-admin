import React, {useEffect, useState} from "react";
import {useHistory} from "react-router";
import {Button, Input, Space, Checkbox} from "antd";
import {SearchOutlined} from "@ant-design/icons";
import Highlighter from "react-highlight-words";
import dayjs from "dayjs";
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from 'react-redux';
import {GetAllUser} from '../reducers/users/GetAllUser';


export function useUserList () {
  const history = useHistory()
  const dispatch = useDispatch();
  const [searchFilter, setSearchFilter] = useState('');
  const [searchKeyword, setSearchKeyword] = useState('');

  const {loading, users, meta} = useSelector(state => state.users);
  
  useEffect(() => {
    dispatch(GetAllUser({ query: history.location.search }))
  }, [history.location])

  const onClickColumnSearch = (selectedKeys, confirm, dataIndex) => {
    confirm();
    setSearchFilter(dataIndex)
    setSearchKeyword(selectedKeys[0])
  }

  const onClickClearFilter = clearFilter => {
    clearFilter();
    setSearchFilter('')
    setSearchKeyword('')
  }

  const handleChangePagination = (pagination, filters, sorter) => {
    let qs = `take=${pagination.pageSize}&page=${pagination.current}`;
    if(sorter.field && sorter.order ) {
      qs += `&sortField=${sorter.field}&sortOrder=${sorter.order === 'descend' ? 'desc' : "asc"}`;
    }
    const {role, email, name} = filters;
    if(role) {
      qs += `&role=${role}`;
    }
    if( email ) {
      qs += `&email=${email}`;
    }
    if( name ) {
      qs += `&name=${name}`;
    }
    history.push(`?${qs}`)
  }

  const getColumnSearchProps = dataIndex => ({
    filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => (
      <div style={{ padding: 8 }}>
        <Input
          placeholder={`${dataIndex}`}
          value={selectedKeys[0]}
          onChange={e => setSelectedKeys(e.target.value ? [e.target.value] : [])}
          onPressEnter={() => onClickColumnSearch(selectedKeys, confirm, dataIndex)}
          style={{ width: 188, marginBottom: 8, display: 'block' }}
        />
        <Space>
          <Button
            type="primary"
            onClick={() => onClickColumnSearch(selectedKeys, confirm, dataIndex)}
            icon={<SearchOutlined />}
            size="small"
            style={{ width: 90 }}
          >
            검색
          </Button>
          <Button onClick={() => onClickClearFilter(clearFilters)} size="small" style={{ width: 90 }}>
            리셋
          </Button>
        </Space>
      </div>
    ),
    filterIcon: filtered => <SearchOutlined style={{ color: filtered ? '#1890ff' : undefined }} />,
    onFilter: (value, record) =>
      record[dataIndex]
        ? record[dataIndex].toString().toLowerCase().includes(value.toLowerCase())
        : '',
    onFilterDropdownVisibleChange: visible => {
    },
    render: text =>
      searchFilter === dataIndex ? (
        <Highlighter
          highlightStyle={{ backgroundColor: '#ffc069', padding: 0 }}
          searchWords={[searchKeyword]}
          autoEscape
          textToHighlight={text ? text.toString() : ''}
        />
      ) : (
        text
      ),
  });

  const columns = [
    {
      title: '이메일',
      dataIndex: 'email',
      sorter: true,
      ...getColumnSearchProps('email')
    },
    {
      title: '이름',
      dataIndex: 'name',
      sorter: true,
      ...getColumnSearchProps('name')
    },
    {
      title: '권한',
      dataIndex: 'role',
      width: 100,
      render: row => row === 'MEMBER' ? '일반회원' : '관리자',
      filters: [
        { text: '일반회원', value: 'MEMBER' },
        { text: '관리자', value: 'ADMIN' },
      ],
    },
    {
      title: '연락처',
      dataIndex: 'number',
      width: 100,
      length: 11,
      ...getColumnSearchProps('number')
    },
    {
      title: '닉네임',
      dataIndex: 'petName',
      width: 130,
      ...getColumnSearchProps('petName')
    },
    {
      title: '멘독알림 수신',
      dataIndex: 'alrim_mendoc',
      width: 110,
      render: row => {
        return (<Checkbox defaultChecked={row} disabled={true} />)
      },
    },
    {
      title: '리듬알림 수신',
      dataIndex: 'alrim_rhythm',
      width: 110,
      render: row => {
      return (<Checkbox defaultChecked={row} disabled={true} />)
      },
    },
    {
      title: '방해알림 수신',
      dataIndex: 'alrim_Hindrance',
      width: 110,
      render: row => {
        return (<Checkbox defaultChecked={row} disabled={true} />)
      },
    },
    {
      title: '가입일',
      dataIndex: 'createdAt',
      width: 170,
      render: row => {
        return dayjs(row).format('YYYY-MM-DD HH:mm')
      },
      sorter: true,
    },

    {
      title: '',
      fixed: 'right',
      width: 100,
      render: (row) => <Button type={'primary'} size={'small'}><Link to={`/users/${row.id}`}>상세보기</Link></Button>,
    }
  ];

  return {
    users,
    loading,
    meta,
    handleChangePagination,
    columns
  }
}
