import react,{Component} from 'react'

export default class ClassComponentCounterApp extends Component{

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

handleMinus=()=>{
    this.setState({
        count:this.state.count-1
    })
}

handleReset=()=>{
    this.setState({
        count:0
    })
}

    render(){

return(
    <div>

    <h1> {this.state.count} </h1>

    <button onClick={this.handlePlus}> plus </button>
    
    <button onClick={this.handleMinus}> Minus </button>

    
    <button onClick={this.handleReset}> Reset </button>


    </div>
)

    }
}