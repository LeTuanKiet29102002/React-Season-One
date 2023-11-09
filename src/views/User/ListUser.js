import React, { useEffect, useState } from "react";
import axios from "axios";
import { EditOutlined, DeleteOutlined, CheckOutlined, InfoCircleOutlined } from '@ant-design/icons';
import { Button, Tooltip, Input } from "antd";
import './ListUser.scss';
import { useNavigate } from 'react-router-dom';


class ListUser extends React.Component {
    state = {
        listUser: [],
    }
    async componentDidMount() {
        let res = await axios.get('https://reqres.in/api/users?page=1')
        this.setState({
            listUser: res && res.data && res.data.data ? res.data.data : []
        })
    }

    render() {
        let { listUser } = this.state
        return (
            <div className="list-user-container">
                <div className="title">
                    Fetch all list users
                </div>
                <div className="list-user-content">
                    <table className="user-child">
                        <tbody>
                            <tr>
                                <th>STT</th>
                                <th>Email</th>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Action</th>
                            </tr>
                            {listUser && listUser.length > 0 &&
                                listUser.map((item, index) => {
                                    return (
                                        <tr key={item.id}>
                                            <td>{index + 1}</td>
                                            <td>{item.email}</td>
                                            <td>{item.first_name}</td>
                                            <td>{item.last_name}</td>
                                            <td className="btn-action">
                                                {/* <Tooltip title="Lưu">
                                                    <Button
                                                        className="btn-action"
                                                        shape="circle"
                                                        icon={<CheckOutlined />}
                                                    onClick={() => this.handleSaveTodo(item)}
                                                    />
                                                </Tooltip> */}
                                                <Tooltip title="Sửa">
                                                    <Button
                                                        shape="circle"
                                                        icon={<EditOutlined />}
                                                        onClick={() => this.handleEditTodo(item)}
                                                    />
                                                </Tooltip>

                                                <Tooltip title="Xóa">
                                                    <Button
                                                        shape="circle"
                                                        icon={<DeleteOutlined />}
                                                        onClick={() => this.handleDeleteTodo(item)}
                                                    />
                                                </Tooltip>

                                                <DetailBtn userId={item.id} /> {/* Truyền userId xuống DetailBtn */}

                                                {/* <Tooltip title="Chi tiết">
                                                    <Button
                                                        shape="circle"
                                                        icon={<InfoCircleOutlined />}
                                                        onClick={() => this.handleDetailUser(item)}
                                                    />
                                                </Tooltip> */}
                                            </td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

const DetailBtn = ({ userId }) => {
    const navigate = useNavigate();

    const handleDetailUser = () => {
        navigate(`/user/${userId}`); // Đảm bảo rằng đường dẫn bắt đầu bằng '/'
    };

    return (
        <Tooltip title="Chi tiết">
            <Button
                shape="circle"
                icon={<InfoCircleOutlined />}
                onClick={handleDetailUser} 
            />
        </Tooltip>
    );
};
export { ListUser, DetailBtn }