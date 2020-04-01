import React from 'react';
import ReactDOM from 'react-dom';
import { Video } from './components/video';
import { Menu } from './components/menu';
// import './index.css';

const divStyle = {
  margin: '0 auto'
}

const VIDEOS = {
  fast: 'https://s3.amazonaws.com/codecademy-content/courses/React/react_video-fast.mp4',
  slow: 'https://s3.amazonaws.com/codecademy-content/courses/React/react_video-slow.mp4',
  cute: 'https://s3.amazonaws.com/codecademy-content/courses/React/react_video-cute.mp4',
  eeek: 'https://s3.amazonaws.com/codecademy-content/courses/React/react_video-eek.mp4'
};

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.chooseVideo = this.chooseVideo.bind(this);
    
    this.state = { src: VIDEOS.fast };
  }
  
  chooseVideo(newVideo){
    this.setState({
      src: VIDEOS[newVideo]
    });
  }
  
  render() {
    return (
      <div style={divStyle}>
        <h1>Video Player</h1>
        <Menu chooseVideo={this.chooseVideo} />
        <Video src={this.state.src} />
      </div>
    );
  }
}

ReactDOM.render(
  <App />, 
  document.getElementById('root')
);
