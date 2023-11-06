import React from "react";

class ChildComponent extends React.Component {




    render() {
        let { name, age, abc } = this.props;
        console.log("check props: ", this.props);
        return (
            <React.Fragment>
                Child Component:{name} - {age}
                <div className="job-list">
                    {
                        abc.map((item, index) => {
                            return (
                                <div key={item.id}>
                                    {item.title}-{item.salary}
                                </div>
                            )
                        })
                    }
                </div>
            </React.Fragment>
        );
    }
}

export default ChildComponent;
