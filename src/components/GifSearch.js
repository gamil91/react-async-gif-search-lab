import React, { Component } from 'react';

class GifSearch extends Component {

    state = {
        value: ""
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.fetchData(this.state.value)
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label htmlFor="search">Enter a Search Term:</label><br/>
                <input onChange={(e) => this.setState({value:e.target.value})} id="search" type="text" value={this.state.value}></input>
                <input type="submit" value="Find Gifs"/>
            </form>    
        );
    }
}

export default GifSearch;
