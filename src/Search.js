import React, { Component } from 'react'
import axios from 'axios';

export default class Search extends Component {

    constructor(){
        super();
        this.handleSubmit=this.handleSubmit.bind(this);
        this.handleChange=this.handleChange.bind(this);
        this.state={
                        keyword:"",
                        results:[]

        }

    }
  
    async handleSubmit(e){
        e.preventDefault();
        // console.log(e.target.elements.search.value)
        const term=this.state.keyword
        // _6BxmIa0A4_E59wZFWYzf_2cfbVSZo7S_QMrnuDcLJE

        const key="-jp-ySP2MXE7RAbrvJ1tL1SvToYDUwaY8l0fd-hks30"
        const {data}=await axios.get(`https://api.unsplash.com/search/photos?client_id=${key}&query=${term}`)
// console.log(data)

        this.setState({
            results:data.results
        })
            }

handleChange(e){
// console.log('change')
this.setState({
    keyword:e.target.value
})

}

  render() {
    return (
      <div>
<form onSubmit={this.handleSubmit}>

    <input
      type='text'
      name='search'
      id='search'
      onChange={this.handleChange}
      value={this.state.keyword}
       />
    <button id='serachbtn' >Search</button>
</form>

<div>
{
    this.state.results.map(images=>{
        return<img src={images.urls.small}/>
    })
}


</div>


      </div>
    )
  }
}
