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
    handleEditUserRedux = (user) => {
        console.log('check user click edit : ', user);
        // let { EditRedux } = this.props;
        // console.log('check edit redux id :', EditRedux.id);
        this.props.updateEditRedux(user)
        
    }
    handleSaveUserRedux = () => {
        this.props.saveUserRedux();
    }
    handleOnChangeName = (event) => {
        let EditUserCopy = { ...this.props.EditRedux };
        EditUserCopy.name = event.target.value;

        this.props.editUserRedux(EditUserCopy);
    }
    handleOnChangeAddress = (event) => {
        let EditUserCopy = { ...this.props.EditRedux };
        EditUserCopy.address = event.target.value;

        this.props.editUserRedux(EditUserCopy);
    }
    render() {
        let listUsers = this.props.dataRedux;
        let EditRedux = this.props.EditRedux;
        console.log('check list user copy:', listUsers);
        console.log('check edit redux :', EditRedux);
        // console.log('check props :', this.props.dataRedux);
        let isEmptyObj = Object.keys(EditRedux).length === 0;
        console.log('check empty obj ', isEmptyObj);
        return (
            <div>
                <div>Test redux</div>
                <Tooltip title="Thêm random">
                    <Button
                        style={{ marginTop: '20px' }}
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
                                    <th>Name</th>
                                    <th>Address</th>
                                    <th>Action</th>
                                </tr>
                                {listUsers && listUsers.length > 0 &&
                                    listUsers.map((item, index) => {
                                        return (
                                            <tr key={item.id}>
                                                <td>{index + 1}</td>
                                                {isEmptyObj === true ?
                                                    <td>{item.name}</td>
                                                    :
                                                    <>
                                                        {EditRedux.id === item.id ?
                                                            <td><Input
                                                                onChange={(event) => { this.handleOnChangeName(event) }}
                                                                value={EditRedux.name} /></td>
                                                            :
                                                            <td>{item.name}</td>

                                                        }
                                                    </>
                                                }
                                                {isEmptyObj === true ?
                                                    <td>{item.address}</td>
                                                    :
                                                    <>
                                                        {EditRedux.id === item.id ?
                                                            <td><Input
                                                                onChange={(event) => { this.handleOnChangeAddress(event) }}
                                                                value={EditRedux.address} /></td>
                                                            :
                                                            <td>{item.address}</td>

                                                        }
                                                    </>
                                                }
                                                <td className='btn-action'>
                                                    {isEmptyObj === false && EditRedux.id === item.id ?
                                                        <Tooltip title="Lưu">
                                                            <Button
                                                                shape="circle"
                                                                icon={<CheckOutlined />}
                                                                onClick={() => this.handleSaveUserRedux(item)}
                                                            />
                                                        </Tooltip>
                                                        :

                                                        <Tooltip title="Sửa">
                                                            <Button
                                                                className="btn-action"
                                                                shape="circle"
                                                                icon={<EditOutlined />}
                                                                onClick={() => this.handleEditUserRedux(item)}
                                                            />
                                                        </Tooltip>
                                                    }
                                                    <Tooltip title="Xóa">
                                                        <Button
                                                            shape="circle"
                                                            icon={<DeleteOutlined />}
                                                            onClick={() => this.handleDeleteUserRedux(item)}
                                                        />
                                                    </Tooltip>
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
        dataRedux: state.users,
        EditRedux: state.EditRedux
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        deleteUserRedux: (userdelete) => dispatch({ type: 'DELETE_USER_REDUX', payload: userdelete }),
        addUserRedux: () => dispatch({ type: 'ADD_USER_REDUX' }),
        editUserRedux: (useredit) => dispatch({ type: 'EDIT_USER_REDUX', payload: useredit }),
        saveUserRedux: () => dispatch({ type: 'SAVE_USER_REDUX' }),
        updateEditRedux:(user)=>dispatch({type:'UPDATE_EDIT_REDUX', payload:user})

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TestRedux);


