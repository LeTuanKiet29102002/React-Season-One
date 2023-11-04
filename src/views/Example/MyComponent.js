import React from "react";

class MyComponent extends React.Component {
    state = {
        name:"Kiet",
        address:"Thanh Hoa"
    }

    handleOnChangeName=(event)=>{
        this.setState({
            name:event.target.value
        })
    }


    render() {
        // let name = "LeTuanKiet";
        return (
            <React.Fragment>
                <div><input value={this.state.name} type="text" onChange={(event)=>{this.handleOnChangeName(event)}} />My name is: {this.state.name}</div>
                <div>hello my component with {this.state.address}</div>
            </React.Fragment>
        );
    }
}

export default MyComponent;
