import React from 'react';
//import {Form,Input, Tooltip,Icon,Select,Button,} from 'antd';
const Details = (props) =>{
    return(
        <div>
        <h1>Details</h1> 
        <h2>First Name:{props.value.firstName}</h2>
        <h2>Last Name:{props.value.lastName}</h2>
        <h2>User Name:{props.value.userName}</h2>
        <h2>Password Name:{props.value.password}</h2>
        </div>
    );
};


export default Details;