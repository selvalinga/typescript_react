import React, { Component } from "react";

  type MyState = {
    tempEmpId: string; 
  };
class NotFound extends React.Component<{}, MyState> {
    state: MyState = {
        // optional second annotation for better type inference
        tempEmpId:'Selva',
      };

    componentDidMount() {
        let commonId: string = 'Selva';
        var employeeId = (commonId as String);
    }

    render(): any {
        return (
            <div className="App">
                Hiii , the link is not valid or under development , please contact {this.state.tempEmpId}
            </div>
        );
    }
}
export default NotFound