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

    handleOnClick = ()=>{
        // this.setState({
        //     name:event.target.value
        // })
        // alert('hello',this.setState.name)
        alert('hello '+this.state.name);
    }


    render() {
        // let name = "LeTuanKiet";
        return (
            <React.Fragment>
                <div className="first"><input value={this.state.name} type="text" onChange={(event)=>{this.handleOnChangeName(event)}} />My name is: {this.state.name}</div>
                <div className="second">hello my component with {this.state.address}</div>
                <div className="third">
                    <button onClick={()=>this.handleOnClick()}>
                        Click me
                    </button>
                </div>
            </React.Fragment>
        );
    }
}

export default MyComponent;
