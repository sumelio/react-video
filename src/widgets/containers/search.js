import React, {Component } from 'react'
import Search from "../components/search.js";
class SearchContainer extends Component {
    state = {
        value: 'JOrge VElosa',
    }
    handleSubmit = event => {
        event.preventDefault();

        console.log(this.input.value, 'submit')
    }

    setInputRef = element => {
        this.input = element;
    }

    handleInputChange = event => {
        this.setState({
            value: event.target.value.replace(' ','-')
        })
    } 
    render() {
        return (
            <Search
            setRef={this.setInputRef}
            handleChange={this.handleInputChange}
            handleSubmit={this.handleSubmit}
            value={this.state.value}
            > </Search>
        )
    }
}

export default SearchContainer