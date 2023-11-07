import React from 'react';
import { Button, Tooltip, Input } from "antd";
import { toast } from 'react-toastify';


class AddJobTodo extends React.Component {
    state = {
        title: '',
        salary: '',
    }
    
    onChangeTitle=(event)=>{
        this.setState({
            title:event.target.value,
        })
    }

    onChangeSalary=(event)=>{
        this.setState({
            salary:event.target.value,
        })
    }

    handleClickAdd=()=>{
        if(!this.state.title||!this.state.salary){
            toast.error('Missing required param');
            return ;
        }
        let todo={
            id: Math.floor(Math.random()*1000),
            title:this.state.title,
            salary:this.state.salary
        }

        this.props.AddNewTodo(todo);

        this.setState({
            title:'',
            salary:''
        })
    }

    render() {
        let {title,salary} = this.state;
        return (
            <div className='add-todo'>
                    <Input placeholder='Title' className='input' type='text' value={title} 
                    onChange={(event)=>{this.onChangeTitle(event)}}
                    />
                    <Input placeholder='Salary' className='input' type='text' value={salary}
                    onChange={(event)=>{this.onChangeSalary(event)}}
                    />
                    <Tooltip title="Thêm"><Button onClick={()=>{this.handleClickAdd()}} >Add</Button></Tooltip>
            </div>
        )
    }
}


export default AddJobTodo;