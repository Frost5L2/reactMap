import React, {Component} from "react";

class Point extends Component {
	constructor(props) {
        super(props);
        this.state = {};
        this.deltPoint = this.deltPoint.bind(this);
    }

    deltPoint(){
        this.props.onPressDel(this.props.data.idP);
    }
    render() {
        let data = this.props.data;
       // console.log(this);
        return <div>id:{}{data.name}<span onClick={this.deltPoint}>X</span></div>
    }
}

export default Point;