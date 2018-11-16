import React, { Component } from 'react'

// 1. funtiona
// 2. puro
// 3. estado

class Media extends Component {
    render() {
        const style = {
            container: {
                fontSize: 24,
                backgroundColor: 'yellow'
            }
        }
        return (
            <div style={style.container}>
                <div>
                    <img src=""
                    alt=""
                    width={260}
                    height={210}
                    />
                    <h3>Mi react</h3>
                    <p>Mi parafo</p>
                </div>
            </div>
        )
    }
}

export default Media;