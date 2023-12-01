import React from 'react';

class UserClass extends React.Component{


    constructor(props)
    {
        super(props);
       this.state={
        count:0
       }
    }
    componentDidMount()
    {
        //for api calls
        console.log("componentDidMount called")
    }
    render()
    {const {name, contact}=this.props;
    const {count}=this.state;
       
     return (<div>
        <h2>Name : {name}</h2>
        <h3>Contact: {contact}</h3>
        <h4>Count :{count}</h4>
        <button onClick={()=>{
            this.setState({
                count:this.state.count+1
            })
        }}>Increase count</button>
     </div>)
    }
}

export default UserClass;