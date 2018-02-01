import '../css/style.less';
import React from 'react';
import ReactDOM from 'react-dom';
import { YMaps, Map, Placemark } from 'react-yandex-maps';
import RenderInput from './RenderInput';

class Application extends React.Component {
  render() {
    return <div className="app">
  	<div className="app__side app__side_left">
  		<div className="innerInput">
  			<RenderInput />
  		</div>
  		<div>
  		</div>
  	</div>
  	<div className="app__side app__side_right">
  		<div className="innerMap">
  			<div id="map" className="app__map"></div>
  		</div>
  	</div>
  </div>;
  }
}

ReactDOM.render(
  <Application />,
  document.getElementById('root')
);
