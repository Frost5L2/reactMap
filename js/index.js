import '../css/style.less';
import React, {Component, PropTypes} from 'react';
import ReactDOM from 'react-dom';
import Ymap from './Ymap';
import RenderInput from './RenderInput';
import RenderPoints from './RenderPoints';
import {DragDropContext} from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backrnd';

class Application extends Component {
    constructor(props) {
        super(props);
        this.state = {
            points: [],
			idPoints: 0
        };
        this.addPoint = this.addPoint.bind(this);
        this.deletePoint = this.deletePoint.bind(this);
    }
    addPoint(point){
		let points = this.state.points.slice();
		let idPoints = this.state.idPoints;
		points.push({name: point, idP: idPoints++});
		this.setState({points});
        this.setState({idPoints});
	}
	deletePoint(id){
        let points = this.state.points.slice();
        let index = 0;
        points.map(()=>{
            if(id == points[index].idP){
                points.splice(index, 1);
            }
            index++;
        });
        this.setState({points});
	}

	render() {
    	console.log(this.state.points);
		return <div className="app">
		<div className="app__side app__side_left">
			<div className="innerInput">
				<RenderInput onPressEnter={this.addPoint} />
			</div>
			<div className="innerPoints">
				<RenderPoints onPressDel={this.deletePoint} pointsName={this.state.points} />
			</div>
		</div>
		<div className="app__side app__side_right">
			<div className="innerMap">
				{/*<Ymap />*/}
			</div>
		</div>
		</div>;
	}
}

ReactDOM.render(
  <Application />,
  document.getElementById('root')
);
