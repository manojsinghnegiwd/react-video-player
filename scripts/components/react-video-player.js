import React, {Component} from 'react'; // importing react from react library


// main video components
export default class ReactVideoPlayer extends Component {
  render() {
    return (
      <div>
          <video width={this.props.width} height={this.props.height} autoPlay={this.props.autoplay} loop={this.props.loop}>
            <source src="./videos/sample.mp4" type="video/mp4"></source>
            Your browser does not support HTML5 video.
          </video>
      </div>
    );
  }
}
