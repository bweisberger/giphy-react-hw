import React, {Component} from 'react';
import SearchBar from "../SearchBar"
import GifList from "../GifList"

class MainContainer extends Component{
    constructor(){
        super();
        this.state = {
          gifs: []
        //   searchTerm: ""
        }
      }
      getGifs = async (search)=>{
          console.log("in getGifs, " + search)
        try{
            // this.setState({
            //     searchTerm: search
            // })
            const url = "https://api.giphy.com/v1/gifs/" +
            "search" +
            "?api_key=aHwSkhs3te3WNcq0xXJ807VZ08Qb3bmT" +
            "&q=" + search + 
            "&limit=25" +
            "&offset=0" +
            "&rating=G" +
            "&lang=en"
            // const req = new Request(url);
            const gifs = await fetch(url);
            console.log(gifs)
            const parsedGifs = await gifs.json();
            console.log(parsedGifs, "<--parsedGifs in getGifs")
            return this.setState({
                gifs: parsedGifs.data
            })
        }catch(err){
          console.log(err);
          return err;
        }
      }
    //   getSearch = async(search = "")=>{
    //     try{
    //       if(search){
    //         return this.setState({searchTerm: search});
    //       }
    //     }catch(err){
    //       console.log(err);
    //       return err;
    //     }
    //   }
    //   componentDidMount(){
    //     this.getGifs(this.state.searchTerm)
    //   }  
      render(){
          return(
              <div className="MainContainer">
                <SearchBar getGifs={this.getGifs}/>
                <ul>
                    <GifList gifs={this.state.gifs}/>
                </ul>
                
              </div>
            
          )
      }
}

export default MainContainer