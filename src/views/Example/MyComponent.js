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
                title: 'developer',
                salary: '5000'
            },
            {
                id: 'abcjob2',
                title: 'programmer',
                salary: '6000'
            },
            {
                id: 'abcjob3',
                title: 'slient',
                salary: '50000'
            },
        ],
    }

    addNewJob = (job) => {
        console.log('check new job: ', job);
        this.setState({
            arrJobs: [...this.state.arrJobs, job]
        })
    }

    deleteAJob = (job) => {
        let curentJob = this.state.arrJobs;
        curentJob = curentJob.filter(item => item.id !== job.id);
        this.setState({
            arrJobs: curentJob
        })
    }

    componentDidUpdate=(prevProps, prevState)=> {
        console.log('run did update: ', 'truoc do',prevState, 'hien tai', this.state);
    }

    componentDidMount(){
        console.log('run components did mount');
    }

    render() {
        // let name = "LeTuanKiet";
        return (
            <React.Fragment>
                <AddComponent
                    addNewJob={this.addNewJob}
                />
                <ChildComponent
                    abc={this.state.arrJobs}
                    deleteAJob={this.deleteAJob}

                />
            </React.Fragment>
        );
    }
}

export default MyComponent;
