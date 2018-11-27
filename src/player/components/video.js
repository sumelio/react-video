import React, { Component } from 'react';
import './video.css'

class Video extends Component {
    togglePlay() {
        if(this.props.pause) {
            this.video.pause()
        } else {
            this.video.play()
        }
    }
    componentWillReceiveProps(nextProps) {
        if (nextProps.pause !== this.props.pause) {
            this.togglePlay()
        }
    } 

    setRef = el => (
       this.video = el
    )
    render() {
        const {
            handleLoadedMetadata,
            handleTimeUpdate,
            handleSeeking,
            handleSeeked
        } = this.props
        return (
            <div className="Video" > 
                <video 
                autoPlay={this.props.autoplay}
                src={this.props.src} 
                ref={this.setRef}
                onLoadedMetadata={handleLoadedMetadata}
                onTimeUpdate={handleTimeUpdate}
                onSeeking={handleSeeking}
                onSeeked={handleSeeked}
                >
                
                </video>
            </div>
        )
    }
}

export default Video