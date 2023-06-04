import React,{component} from 'react'

class Myfriendslist extends React.Component{
    constructor(props)
    {
        super(props)
        
        this.state={
            name:["amey","sid","amit","pranav","harsha","abhi"],
            count:3
        }
    }

    friendlist=()=>{
        return this.state.name.map((a,index)=><li key={index}>{a}</li>)
    }

    render(){
        return(
            <div>
                <h1>{this.props.title}</h1>
                <h1>{this.props.color}</h1>
                <ul>
                    <li> {this.friendlist()}</li>
                </ul>
            </div>

        );
        
    }
}

export default Myfriendslist;