import React, {Component} from 'react';

class SearchBar extends Component{
    constructor(){
        super();
        this.state = {
            search: ""
        }
    }
    handleChange = (e) =>{
        this.setState({
            [e.currentTarget.name]:e.currentTarget.value
        })
    }
    handleSubmit = (e) =>{
        e.preventDefault();
        this.props.getGifs(this.state.search);
    }
    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <input type="text" name="search" value={this.state.search} placeholder="Search" onChange={this.handleChange}></input>
                <input type="submit" value="Search"/>
            </form>
        )
    }
}

export default SearchBar;