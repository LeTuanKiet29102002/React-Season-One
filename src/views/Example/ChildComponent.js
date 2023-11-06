import React from "react";

class ChildComponent extends React.Component {
    
    


    render() {
        let {name , age} = this.props;
        console.log("check props: ", this.props);
        return (
            <React.Fragment>
                Child Component:{name} - {age}
            </React.Fragment>
        );
    }
}

export default ChildComponent;
