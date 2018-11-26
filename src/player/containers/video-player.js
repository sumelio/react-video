import React, { Component } from 'react'
import VideoPlayerLayout from '../components/video-player-layout'
import MyVideo from '../components/video'
import Title from '../components/title'
import PlayPause from '../components/play-pause'
import Timer from '../components/timer'
import Controls from '../components/video-player-controls.js'
import ProgressBar from '../components/progress-bar'

class VideoPlayer extends Component {

    state = {
        pause: true,
        duration: 0,
        currentTime: 0
    }
    togglePlay = (event) => {
        this.setState({
            pause: !this.state.pause
        })
    }

    componentDidMount() {
        this.setState({
            pause: (!this.props.autoplay)
        })
    }

    handleLoadedMetadata = event => {
      this.video = event.target;
      this.setState({
          duration: this.video.duration
      })
    }
    handleTimeUpdate = event => {
        this.video = event.target;
        this.setState({
            currentTime: this.video.currentTime
        })
      }

      handleProgressOnChangle = event => {
          this.video.currentTime = event.target.value
      } 
    render() {
        return (
        <VideoPlayerLayout>
            <Title title="{this.props.title}"/>
            <Controls>     
                <PlayPause 
                pause={this.state.pause}
                handleClick={this.togglePlay}/>
                <Timer 
                duration={this.state.duration}
                currentTime={this.state.currentTime}
                />
                <ProgressBar
                 duration={this.state.duration}
                 currentTime={this.state.currentTime}
                 onChange={this.handleProgressOnChangle}
                />
            </Controls>
         <MyVideo
          autoplay={true}
          pause={this.state.pause}
          handleLoadedMetadata={this.handleLoadedMetadata}
          handleTimeUpdate={this.handleTimeUpdate}
          src="http://download.blender.org/peach/bigbuckbunny_movies/BigBuckBunny_320x180.mp4"
         />
       </VideoPlayerLayout>
        )
    }
}

export default VideoPlayer