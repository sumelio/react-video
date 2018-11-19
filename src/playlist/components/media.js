import React, { PureComponent } from 'react'
import './media.css'
import PropTypes from 'prop-types'

// 1. funtiona
// 2. puro
// 3. estado

class Media extends PureComponent {
//     constructor(props) {
//          super(props)
//     //     this.handleClick = this.handleClick.bind(this)
    
//     this.state = {
//         author: props.author
//     }
//    }

 state = {
             author: 'fredisss'
         }

    handleClick = (event) => {
        this.setState({
            author: "Freduuss"
        })
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
                    <img src={this.props.cover}
                    alt=""
                    width={260}
                    height={180}
                     className="Media-image"
                    />
                    <h3 className="Media-title" >{this.props.title}</h3>
                    <p className="Media-author" >{this.props.author}</p>
                </div>
            </div>
        )
    }
}
 
export default Media;