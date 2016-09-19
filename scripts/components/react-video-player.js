import React, {Component} from 'react'; // importing react from react library


// main video components
export default class ReactVideoPlayer extends Component {
  constructor(props) {
    super(props);
    this.play = this.play.bind(this);
    this.pause = this.pause.bind(this);
  }
  play() {
    this.refs.player.play();
  }
  pause() {
    this.refs.player.pause();
  }
  render() {
    return (
      <div>
          <video ref="player" width={this.props.width} height={this.props.height} autoPlay={this.props.autoplay} loop={this.props.loop}>
            <source src="./videos/sample.mp4" type="video/mp4"></source>
            Your browser does not support HTML5 video.
          </video>
          <button onClick={this.play}>Play</button>
          <button onClick={this.pause}>Pause</button>
      </div>
    );
  }
}
