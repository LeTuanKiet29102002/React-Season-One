import React from 'react';

class AddComponent extends React.Component {
    state = {
        title: '',
        salary: '',
    }
    handleOnChangeTitle = (event) => {
        // console.log('>>calll render', this.state);
        this.setState({
            title: event.target.value,
        })
    }
    handleOnChangesalary = (event) => {
        // console.log('>>calll render', this.state);
        this.setState({
            salary: event.target.value,
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        if (!this.state.title || !this.state.salary) {
            alert('Missing required params');
            return;
        }
        console.log('check data input ', this.state);
        this.props.addNewJob({
            id: Math.floor(Math.random() * 100),
            title: this.state.title,
            salary: this.state.salary
        })

        this.setState({
            title:'',
            salary: ''
        })
    }

    render() {
        return (
            <div>
                <h2>HTML Forms</h2>
                <form>
                    <label htmlFor="fname">Title Job:</label><br />
                    <input type="text" value={this.state.title} onChange={(event) => this.handleOnChangeTitle(event)} /><br />
                    <label htmlFor="lname">salary:</label><br />
                    <input type="text" value={this.state.salary}
                        onChange={(event) => this.handleOnChangesalary(event)}
                    /><br /><br />
                    <input type="button" value="Submit"
                        onClick={(event) => this.handleSubmit(event)}
                    />
                </form>
            </div>
        )
    }
}


export default AddComponent;