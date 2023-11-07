import React from 'react';
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';
import { Button, Tooltip } from "antd";
import './ListTodo.scss'
import AddJobTodo from './AddJobTodo';
import { toast } from 'react-toastify';


class ListTodo extends React.Component {
    state = {
        listTodos: [
            { id: 'todo1', title: 'doing homework' ,salary:1000},
            { id: 'todo2', title: 'watching tivi' ,salary:2000},
            { id: 'todo3', title: 'learning English' ,salary:3000},
        ]
    }

    AddNewTodo = (todo)=>{
        this.setState({
            listTodos: [...this.state.listTodos,todo]
        })
        toast.success("Wow so easy!")
    }
    render() {
        let { listTodos } = this.state;
        // let listTodos = this.state.listTodos
        return (
            <div className='list-todo-container'>
                <AddJobTodo
                    AddNewTodo = {this.AddNewTodo}
                />
                <div className='list-todo-content'>
                    <table className="todo-child">
                        <tbody>
                            <tr>
                                <th>STT</th>
                                <th>Title</th>
                                <th>Salary</th>
                                <th>Action</th>
                            </tr>
                            {listTodos && listTodos.length > 0 &&
                                listTodos.map((item, index) => {
                                    return (
                                        <tr key={item.id}>
                                            <td>{index+1}</td>
                                            <td>{item.title}</td>
                                            <td>{item.salary}</td>
                                            <td >
                                                <Tooltip title="Sửa">
                                                    <Button
                                                        className="btn-action"
                                                        shape="circle"
                                                        icon={<EditOutlined />}
                                                        // onClick={() => this.handleEditUser(item)}
                                                    />
                                                </Tooltip>
                                                <Tooltip title="Xóa">
                                                    <Button
                                                        shape="circle"
                                                        icon={<DeleteOutlined />}
                                                        // onClick={() => this.handleDeleteUser(item)}
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
        )
    }

}

export default ListTodo
