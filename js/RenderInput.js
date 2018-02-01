import React from 'react';

class RenderInput extends React.Component {
	constructor(props) {
        super(props);
        this.state = {
        	pointName: ""
        };
    }

    render() {
        return <input type="text" 
        onChange={(e) =>{
        	let currentValue = e.target.value.toLowerCase();
        	console.log(currentValue);
        	console.log(this);
        	console.log(e);
            document.onkeydown = function(e) {
                e = e || window.event;
                    if (e.keyCode == 13) {
                alert(currentValue);
                }
                return true;
            }

        }}
        onClick={(e) =>{console.log(e)}}/>;
    }
}

export default RenderInput;