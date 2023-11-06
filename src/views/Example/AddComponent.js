import React from 'react';

class AddComponent extends React.Component {
    state = {
        titleJob: '',
        Salary: '',
    }
    handleOnChangeTitleJob = (event) => {
        // console.log('>>calll render', this.state);
        this.setState({
            titleJob: event.target.value,
        })
    }
    handleOnChangeSalary = (event) => {
        // console.log('>>calll render', this.state);
        this.setState({
            Salary: event.target.value,
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        console.log('check data input ', this.state);
    }

    render() {
        return (
            <div>
                <h2>HTML Forms</h2>
                <form>
                    <label htmlFor="fname">Title Job:</label><br />
                    <input type="text" value={this.state.titleJob} onChange={(event) => this.handleOnChangeTitleJob(event)} /><br />
                    <label htmlFor="lname">Salary:</label><br />
                    <input type="text" value={this.state.Salary}
                        onChange={(event) => this.handleOnChangeSalary(event)}
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