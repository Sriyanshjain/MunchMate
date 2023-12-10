import React from 'react';

class UserClass extends React.Component{


    constructor(props)
    {
        super(props);
    }
    componentDidMount()
    {
        //for api calls
        console.log("componentDidMount called")
    }
    render()
    {const {name, contact}=this.props;
    
       
     return (<div className=''>
        <h2>Name : {name}</h2>
        <h3>Contact: {contact}</h3>
        
     </div>)
    }
}

export default UserClass;