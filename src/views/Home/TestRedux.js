import React from "react";
import { connect } from "react-redux";
import { EditOutlined, DeleteOutlined, CheckOutlined, InfoCircleOutlined, UserAddOutlined } from '@ant-design/icons';
import { Button, Tooltip, Input } from "antd";
import './TestRedux.scss';



class TestRedux extends React.Component {
    handleDeleteUserRedux = (user) => {
        console.log('check user delete redux:', user);
        this.props.deleteUserRedux(user);
    }
    handleAddUserRedux = () => {
        this.props.addUserRedux();
    }
    render() {
        let listUsers = this.props.dataRedux;
        console.log('check props :', this.props.dataRedux);
        return (
            <div>
                <div>Test redux</div>
                <Tooltip title="Thêm">
                    <Button
                        icon={<UserAddOutlined />}
                        onClick={() => this.handleAddUserRedux()}
                    />
                </Tooltip>
                <div className="list-redux-container">
                    <div className="list-redux-content">
                        <table className="redux-child">
                            <tbody>
                                <tr>
                                    <th>STT</th>
                                    <th>ID</th>
                                    <th>Name</th>
                                    <th>Action</th>
                                </tr>
                                {listUsers && listUsers.length > 0 &&
                                    listUsers.map((item, index) => {
                                        return (
                                            <tr key={item.id}>
                                                <td>{index + 1}</td>
                                                <td>{item.id}</td>
                                                <td>{item.name}</td>
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
                                                        // onClick={() => this.handleEditTodo(item)}
                                                        />
                                                    </Tooltip>

                                                    <Tooltip title="Xóa">
                                                        <Button
                                                            shape="circle"
                                                            icon={<DeleteOutlined />}
                                                            onClick={() => this.handleDeleteUserRedux(item)}
                                                        />
                                                    </Tooltip>

                                                    {/* <DetailBtn userId={item.id} />  */}
                                                    {/* Truyền userId xuống DetailBtn */}

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

            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        dataRedux: state.users
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        deleteUserRedux: (userdelete) => dispatch({ type: 'DELETE_USER_REDUX', payload: userdelete }),
        addUserRedux: ()=>dispatch({ type: 'ADD_USER_REDUX'})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TestRedux);


