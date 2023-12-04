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
        <p className='text-xl mt-60 font-primary text-black text-center'>
            This is a clone of swiggy website which leverages live swiggy data. It is built in React and uses tailwindCss for styling. Right now its using hooks for state management but in coming days it will be using redux.
           Note:-  Not all pages you see on the home page will work as its still under development.
        </p>
        {/* <h4>Count :{count}</h4>
        <button  onClick={()=>{
            this.setState({
                count:this.state.count+1
            })
        }}>Increase count</button> */}
     </div>)
    }
}

export default UserClass;