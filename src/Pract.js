import react,{Component} from 'react'
export default class Pract extends Component{

    constructor(props){
        super(props)

        this.state={
    count:0
        }
    }
    handlePlus=()=>{
        this.setState({
    
            count:this.state.count+1
        })
        
    }
    

    render(){


        return(
            <div>

{/* <h1>{this.props.name}</h1> */}


<h1>{this.state.count}</h1>



<button onClick={this.handlePlus}>plus</button>


            </div>

        )
    }
}