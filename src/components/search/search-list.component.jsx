import { Component } from "react";
import './search-boxs.styles.css'

class SearchBox extends Component{
    render(){
        return(
            <input className={`search-box ${this.props.className}`} type='search' placeholder='search' onChange={this.props.onSearchHandle} />
        );
    }
}

export default SearchBox;