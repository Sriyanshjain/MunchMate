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
    
       
     return (<div className='min-h-screen'>
        <h2>Name : {name}</h2>
        <h3>Contact: {contact}</h3>
        <p className='text-xl mt-60 font-primary text-black text-center'>
            This is a clone of swiggy website which leverages live swiggy data. It is built in React and uses tailwindCss for styling. Right now its using hooks for state management but in coming days it will be using redux.
           Note:-  Not all pages you see on the home page will work as its still under development.
        </p>
     </div>)
    }
}

export default UserClass;