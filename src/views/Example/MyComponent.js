import React from "react";
import ChildComponent from "./ChildComponent";

class MyComponent extends React.Component {
    state = {
        firstName: '',
        lastName: '',
    }

    handleOnChange = (event, id) => {
        // console.log('>>calll render', this.state);
        this.setState({
            [id]: event.target.value,
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        console.log('check data input ', this.state);
    }



    render() {
        // let name = "LeTuanKiet";
        return (
            <React.Fragment>
                <h2>HTML Forms</h2>
                <form>
                    <label htmlFor="fname">First name:</label><br />
                    <input type="text" value={this.state.firstName} onChange={(event) => this.handleOnChange(event, 'firstName')} /><br />
                    <label htmlFor="lname">Last name:</label><br />
                    <input type="text" value={this.state.lastName}
                        onChange={(event) => this.handleOnChange(event, 'lastName')}
                    /><br /><br />
                    <input type="button" value="Submit"
                        onClick={(event) => this.handleSubmit(event)}
                    />
                </form>
                <ChildComponent
                    name={'child one'}
                    age={'26'}
                />
            </React.Fragment>
        );
    }
}

export default MyComponent;
