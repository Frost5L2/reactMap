import React, {Component} from "react";

class RenderInput extends Component {
	constructor(props) {
        super(props);
        this.state = {};
        this.handleKeyUp = this.handleKeyUp.bind(this);
    }

    handleKeyUp(event){
        if(event.key == "Enter"){
            if(this.props.onPressEnter){
                this.props.onPressEnter(event.currentTarget.value);
            }
            event.currentTarget.value = '';
        }
    }

    render() {
        return <input type="text"
        onKeyPress={this.handleKeyUp}
        />;
    }
}

export default RenderInput;