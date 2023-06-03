import React,{Component} from 'react';

class Classcomponents extends React.Component{
    constructor(props){
        super(props);
        this.state={count:0}
    }
    resetcounter=()=>{
       this.setState({count:0})

    }
    incrementcounter=()=>{
       this.setState({count:this.state.count+1})
    }
    decrementcounter=()=>{
        if(this.state.count>0)
        {
            this.setState({count:this.state.count-1})
        }
        else{
            this.setState({count:0})
        }
    }



    render()
    {
         return(
            <div>
                <h1> Welcome to Classcomponentss</h1>
                <h3>Lets Count</h3>
                {this.state.count>0?<h3>You Clicked {this.state.count} Times </h3>:""}
        
                <button type="button" name="btn" id="btn" value="btn" onClick={this.resetcounter}>RESET</button>
                <button type="button" name="btn" id="btn" value="btn" onClick={this.decrementcounter}>Decrement</button>
                <button type="button" name="btn" id="btn" value="btn" onClick={this.incrementcounter}>increment</button>
            </div>
        );
    }

}

export default Classcomponents;