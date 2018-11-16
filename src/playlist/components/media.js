import React, { Component } from 'react'
import './media.css'

// 1. funtiona
// 2. puro
// 3. estado

class Media extends Component {
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
            <div className="Media">
                <div className="Media-cover" >
                    <img src="./images/covers/bitcoin.jpg"
                    alt=""
                    width={260}
                    height={210}
                     className="Media-image"
                    />
                    <h3 className="Media-title" >Mi reactdddddddddddddddddddd dddd dddd ddd</h3>
                    <p className="Media-author" >Mi parafo dddd dddddddd ddddd dddddddddddd ddd</p>
                </div>
            </div>
        )
    }
}

export default Media;