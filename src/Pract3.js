import React, { Component } from 'react'
import axios from 'axios'

export default class Pract3 extends Component {

constructor(props){
    super(props)

    this.state={
keywords:"",
results:[]
    }
}

handleSubmit= async (e)=>{
    e.preventDefault();
    const term=this.state.keywords
    
    const key="-jp-ySP2MXE7RAbrvJ1tL1SvToYDUwaY8l0fd-hks30"
    const {data}=await axios.get(`https://api.unsplash.com/search/photos?client_id=${key}&query=${term}`)
    
    this.setState({
        results:data.results
    })
    
}

handleChange=(e)=>{
    this.setState({
      keywords:  e.target.value
    })

}
  render() {
    return (
      <div>


<form onSubmit={this.handleSubmit}>

<input type='text' id='text' placeholder='search' value={this.state.keywords}

onChange={this.handleChange}

/>


</form>


<div>
    {
    this.state.results.map(images=>{
        return <img src={images.urls.small}/>
    })


  }
</div>



      </div>
    )
  }
}
