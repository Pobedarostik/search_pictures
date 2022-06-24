import { Component } from "react";
import Searchbar from "./Searchbar/Searchbar";
import ImageGallery from "./ImageGallery/ImageGallery";

import "./App.css"

;

class App extends Component {
  state = {
    name: ''
}

 

  handleSubmit = (result) => {
    this.setState({name: result})
  }



  render() {

    return (
      <div className="App">
        <Searchbar onSubmit={this.handleSubmit} />
        <ImageGallery prop={this.state.name}/>
        
        
      </div>
    );
  }
  
}

export default App;


// 23105457-2163ce7f6d7cdb7b080badb2a