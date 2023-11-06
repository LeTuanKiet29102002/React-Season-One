import React from "react";

class ChildComponent extends React.Component {

    state = {
        showJob: false
    }

    handleshowJob =()=>{
        this.setState({
            showJob: !this.state.showJob
        })
    }

    handleOnClickDelete = (job)=>{
        console.log('handle onclick delete:', job);
        this.props.deleteAJob(job);
    }

    render() {
        let { abc } = this.props;
        let showJob = this.state.showJob;
        console.log("check props: ", this.props);
        return (
            <React.Fragment>
                {/* Child Component:{name} - {age} */}
                {showJob===false ?
                <div><button onClick={()=>{this.handleshowJob()}}>Show</button></div>
                :
                <>
                <div className="job-list">
                    {
                        abc.map((item, index) => {
                            return (
                                <div key={item.id}>
                                    {item.title}-{item.salary} <span onClick={(id)=>{this.handleOnClickDelete(item)}}>&nbsp;&nbsp;X</span>
                                </div>
                            )
                        })
                    }
                </div>
                <div><button onClick={()=>{this.handleshowJob()}}>Hide</button></div>
                </>
                }
            </React.Fragment>
        );
    }
}

// const ChildComponent =(props)=>{
//     let { abc} = props;
//         console.log("check props: ", props);
//         return (
//                 <div className="job-list">
//                     {
//                         abc.map((item, index) => {
//                             return (
//                                 <div key={item.id}>
//                                     {item.title}-{item.salary}
//                                 </div>
//                             )
//                         })
//                     }
//                 </div>
//         )
// }

export default ChildComponent;
