import React, { Component } from 'react'
import VideoPlayerLayout from '../components/video-player-layout'
import MyVideo from '../components/video'
import Title from '../components/title'
import PlayPause from '../components/play-pause'
import Timer from '../components/timer'
import Controls from '../components/video-player-controls.js'
import ProgressBar from '../components/progress-bar'
import Spinner from '../components/spinner'
import Volume from '../components/volume'
import FullScreen from '../components/FullScreen'

class VideoPlayer extends Component {

    state = {
        pause: true,
        duration: 0,
        currentTime: 0,
        isShowSpinner: false,
        isFullScreen: false
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

      handleSeeked = event => {
        console.log('handleSeeked')
        this.setState({
            isShowSpinner: false
        })
     }
     
     handleSeeking = event => {
         console.log('handleSeeking')
        this.setState({
            isShowSpinner: true
        })
     }

     handleVolumeChange = event => {
        this.video.volume = event.target.value
    }
    handleFullScreenClick= event => {

        

            if (!document.fullscreenElement &&    // alternative standard method
                !document.mozFullScreenElement && !document.webkitFullscreenElement && !document.msFullscreenElement ) {  // current working methods

                if (document.documentElement.requestFullscreen) {
                    this.player.requestFullscreen();
                } else if (document.documentElement.msRequestFullscreen) {
                    this.player.msRequestFullscreen();
                } else if (document.documentElement.mozRequestFullScreen) {
                    this.player.mozRequestFullScreen();
                } else if (document.documentElement.webkitRequestFullscreen) {
                    this.player.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
                }
            } else {
                if (document.exitFullscreen) {
                    document.exitFullscreen();
                } else if (document.msExitFullscreen) {
                    document.msExitFullscreen();
                } else if (document.mozCancelFullScreen) {
                    document.mozCancelFullScreen();
                } else if (document.webkitExitFullscreen) {
                    document.webkitExitFullscreen();
                }
            }
    }
    setRef = el => (
     this.player = el
    )

    render() {
        return (
        <VideoPlayerLayout
          setRef={this.setRef}
        >
            <Title title={this.props.title}/>
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
                <Volume handleVolumeChange={this.handleVolumeChange}
                />
                <FullScreen
                handleFullScreenClick={this.handleFullScreenClick}
                />
            </Controls>
        <Spinner active={this.state.isShowSpinner} />
        
         <MyVideo
          autoplay={true}
          pause={this.state.pause}
          handleLoadedMetadata={this.handleLoadedMetadata}
          handleTimeUpdate={this.handleTimeUpdate}
          handleSeeking={this.handleSeeking}
          handleSeeked={this.handleSeeked}
          src={this.props.src}
         />
       </VideoPlayerLayout>
        )
    }
}

export default VideoPlayer