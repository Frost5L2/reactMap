import React, {Component} from "react";
import Point from './Point';

class RenderPoints extends Component {
	constructor(props) {
        super(props);
        this.state = {
            pointsName: ""
        };
    }

    render() {
        let pointsName = this.props.pointsName;
        return (<div>{pointsName.map((name) =>{
            return <Point onPressDel={this.props.onPressDel} data={name} />
        })}</div>)
    }
}

export default RenderPoints;