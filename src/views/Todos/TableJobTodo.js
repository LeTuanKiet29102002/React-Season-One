import React from 'react';
import { EditOutlined, DeleteOutlined, CheckOutlined } from '@ant-design/icons';
import { Button, Tooltip, Input } from "antd";
import { toast } from 'react-toastify';

class TableJobTodo extends React.Component {

    handleDeleteTodo = (todo) => {
        this.props.DeleteTodo(todo)
        toast.success('Delete successfully!')
    }
    handleEditTodo = (todo) => {
        // this.props.EditTodo(todo);
        let { editTodobtn } = this.props;
        if (editTodobtn.id) {
            // Gọi hàm EditTodo trong file cha và truyền thông tin công việc cần chỉnh sửa
            this.props.EditTodo(editTodobtn);

            // Cập nhật trạng thái editTodobtn trong cha (nếu cần)
            this.props.UpdateEditTodoBtn({});
        }
        this.props.UpdateEditTodoBtn(todo);



    }
    handleSaveTodo=(todo)=>{
        this.props.EditTodo(todo);
        this.props.UpdateEditTodoBtn({});
        // toast.success('Update successfully!')

        
    }


    handleOnChangeTitleTodo = (event) => {
        let editTodoCopy = { ...this.props.editTodobtn }
        editTodoCopy.title = event.target.value

        // Cập nhật trạng thái editTodobtn trong cha (nếu cần)
        this.props.UpdateEditTodoBtn(editTodoCopy);
    }
    handleOnChangeSalaryTodo = (event) => {
        let editTodoCopy = { ...this.props.editTodobtn }
        editTodoCopy.salary = event.target.value

        // Cập nhật trạng thái editTodobtn trong cha (nếu cần)
        this.props.UpdateEditTodoBtn(editTodoCopy);
    }


    render() {
        let { ArrayJobTodo, editTodobtn } = this.props;
        console.log('check edit btn ', editTodobtn);
        let isEmptyObj = Object.keys(editTodobtn).length === 0;
        console.log('check empty obj ', isEmptyObj);
        return (

            <div className='list-todo-content'>
                <table className="todo-child">
                    <tbody>
                        <tr>
                            <th>STT</th>
                            <th>Title</th>
                            <th>Salary</th>
                            <th>Action</th>
                        </tr>
                        {ArrayJobTodo && ArrayJobTodo.length > 0 &&
                            ArrayJobTodo.map((item, index) => {
                                return (
                                    <tr key={item.id}>
                                        <td>{index + 1}</td>
                                        {isEmptyObj === true ?
                                            <td>{item.title}</td>
                                            :
                                            <>
                                                {editTodobtn.id === item.id ?
                                                    <td><Input
                                                        onChange={(event) => { this.handleOnChangeTitleTodo(event) }}
                                                        value={editTodobtn.title} /></td>
                                                    :
                                                    <td>{item.title}</td>

                                                }
                                            </>
                                        }
                                        {isEmptyObj === true ?
                                            <td>{item.salary}</td>
                                            :
                                            <>
                                                {editTodobtn.id === item.id ?
                                                    <td><Input
                                                        onChange={(event) => { this.handleOnChangeSalaryTodo(event) }}
                                                        value={editTodobtn.salary} /></td>
                                                    :
                                                    <td>{item.salary}</td>

                                                }
                                            </>
                                        }
                                        <td className='btn-action'>
                                            {isEmptyObj === false && editTodobtn.id === item.id ?
                                                <Tooltip title="Lưu">
                                                    <Button
                                                        shape="circle"
                                                        icon={<CheckOutlined />}
                                                    onClick={() => this.handleSaveTodo(item)}
                                                    />
                                                </Tooltip>
                                                :

                                                <Tooltip title="Sửa">
                                                    <Button
                                                        className="btn-action"
                                                        shape="circle"
                                                        icon={<EditOutlined />}
                                                        onClick={() => this.handleEditTodo(item)}
                                                    />
                                                </Tooltip>
                                            }
                                            <Tooltip title="Xóa">
                                                <Button
                                                    shape="circle"
                                                    icon={<DeleteOutlined />}
                                                    onClick={() => this.handleDeleteTodo(item)}
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
        )
    }

}


export default TableJobTodo;