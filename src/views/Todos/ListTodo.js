import React from 'react';
import './ListTodo.scss'
import AddJobTodo from './AddJobTodo';
import { toast } from 'react-toastify';
import TableJobTodo from './TableJobTodo';


class ListTodo extends React.Component {
    state = {
        listTodos: [
            { id: 'todo1', title: 'doing homework', salary: 1000 },
            { id: 'todo2', title: 'watching tivi', salary: 2000 },
            { id: 'todo3', title: 'learning English', salary: 3000 },
        ],
        editTodobtn: {}

    }

    AddNewTodo = (todo) => {
        this.setState({
            listTodos: [...this.state.listTodos, todo]
        })
        toast.success("Wow so easy!")
    }
    DeleteTodo = (todo) => {
        let currentTodo = this.state.listTodos;
        currentTodo = currentTodo.filter(item => item.id !== todo.id);
        this.setState({
            listTodos: currentTodo
        })
    }
    EditTodo = (todo) => {
        let { editTodobtn, listTodos } = this.state;
        let isEmptyObj = Object.keys(editTodobtn).length === 0;

        //save
        if (isEmptyObj === false && editTodobtn.id === todo.id) {
            let listTodoCopy = [...listTodos];
            //Find index of specific object using findIndex method.    
            let objIndex = listTodoCopy.findIndex((item => item.id === todo.id));

            //Update object's name property.
            listTodoCopy[objIndex].title = editTodobtn.title
            listTodoCopy[objIndex].salary = editTodobtn.salary

            this.setState({
                listTodos: listTodoCopy,
                editTodobtn: {}
            })
            toast.success('Update successfully!')

        }
        //edit
        else {
            this.setState({
                editTodobtn: todo
            })
        }

    }

    // Hàm cập nhật editTodobtn từ TableJobTodo (file con)
    UpdateEditTodoBtn = (editedTodo) => {

        this.setState({
            editTodobtn: editedTodo
        });
    }

    render() {
        // let { listTodos } = this.state;
        // let listTodos = this.state.listTodos
        return (
            <div className='list-todo-container'>
                <AddJobTodo
                    AddNewTodo={this.AddNewTodo}
                />
                <TableJobTodo
                    ArrayJobTodo={this.state.listTodos}
                    editTodobtn={this.state.editTodobtn}
                    DeleteTodo={this.DeleteTodo}
                    EditTodo={this.EditTodo}
                    UpdateEditTodoBtn={this.UpdateEditTodoBtn}
                />
                {/* <div className='list-todo-content'>
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
                </div> */}

            </div>
        )
    }

}

export default ListTodo
