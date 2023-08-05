import React, { Component } from 'react';
import socketIOClient from 'socket.io-client';
import 'video.js/dist/video-js.css';
import MyVideoPlayer from "../components/MyVideoPlayer";
import {API_ROUTE} from "../utils/constants";

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      videoState: {
        isPaused: true,
        currentTime: 0,
      },
      socket: null,
    };

    this.handlePlay = this.handlePlay.bind(this);
    this.handlePause = this.handlePause.bind(this);
  }

  componentDidMount() {
    const socket = socketIOClient('https://video.auto-use.ru:5000');

    socket.on('stateUpdate', (state) => {
      this.setState({ videoState: state });
    });

    this.setState({ socket });
  }

  componentWillUnmount() {
    if (this.state.socket) {
      this.state.socket.disconnect();
    }
  }

  handlePlay(time) {
    console.log(time)
    this.state.socket.emit('play', time);
  }

  handlePause(time) {
    console.log(time)
    this.state.socket.emit('pause', time);
  }


  render() {
    return (
      <MyVideoPlayer
        src={`${API_ROUTE}/video/output.m3u8`}
        isPaused={this.state.videoState.isPaused}
        currentTime={this.state.videoState.currentTime}
        onPlay={this.handlePlay}
        onPause={this.handlePause}
      />
    );
  }
}

export default HomePage;
