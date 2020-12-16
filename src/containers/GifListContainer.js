import React, { Component } from 'react';
import GifList from '../components/GifList';
import GifSearch from '../components/GifSearch'

class GifListContainer extends Component {

    state = {
        gifsArray: []
    }

    componentDidMount(){
        this.fetchData()
    }

    fetchData = (query = "dog") => {
        fetch(`https://api.giphy.com/v1/gifs/search?q=${query}&api_key=dc6zaTOxFJmzC&rating=g&limit=3`)
        .then(res => res.json())
        .then(dataObj => {
            let dataArr = dataObj.data
            this.setState({gifsArray: dataArr.map(data => { return data.images.original.url}
            )})
        })
    }


    render() {
        return (
            <div>
                <GifSearch fetchData={this.fetchData}/>
                <GifList list={this.state.gifsArray}/>
            </div>
        );
    }
}

export default GifListContainer;
