import React from "react";
import ChildComponent from "./ChildComponent";
import AddComponent from "./AddComponent";

class MyComponent extends React.Component {
    state = {
        firstName: '',
        lastName: '',
        arrJobs: [
            {
                id: 'abcjob1',
                title:'developer',
                salary:'5000'
            },
            {
                id: 'abcjob2',
                title:'programmer',
                salary:'6000'
            },
            {
                id: 'abcjob3',
                title:'slient',
                salary:'50000'
            },
        ],
    }

    
 


    render() {
        // let name = "LeTuanKiet";
        return (
            <React.Fragment>
                <AddComponent/>
                <ChildComponent
                    abc= {this.state.arrJobs}
                />
            </React.Fragment>
        );
    }
}

export default MyComponent;
