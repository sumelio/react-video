import React, { Component } from 'react'
import './media.css'
import PropTypes from 'prop-types'

// 1. funtiona
// 2. puro
// 3. estado

class Media extends Component {
    // constructor(props) {
    //     super(props)
    //     this.handleClick = this.handleClick.bind(this)
    // }

    handleClick = (event) => {
        console.log(this.props.title)
    }
    render() {
        const style = {
            container: {
                color: '#44546b',
                cursor: 'pointer',
                width: 260,
                border: '1px solid red'
            }
        }
        return (
            <div className="Media" onClick={this.handleClick}>
                <div className="Media-cover" >
                    <img src={this.props.image}
                    alt=""
                    width={260}
                    height={210}
                     className="Media-image"
                    />
                    <h3 className="Media-title" >{this.props.title}</h3>
                    <p className="Media-author" >{this.props.author}</p>
                </div>
            </div>
        )
    }
}

Media.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string,
  author: PropTypes.string,
  id: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['video','audio']).isRequired,
}
export default Media;