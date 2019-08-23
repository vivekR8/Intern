import React from 'react';
import './SignIn.css';
import {Link} from 'react-router-dom';



class SignIn extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            firstName:'vivek',
            lastName:'',
            password:'',
            userName:''
        }
    }

    inputFirstName=(event)=>{
        this.setState({firstName:event.target.value})
    }
    inputLastName=(event)=>{
        this.setState({lastName:event.target.value})
    }
    inputPassword=(event)=>{
        this.setState({password:event.target.value})
    }
    inputUserName=(event)=>{
        this.setState({userName:event.target.value})
    }

    render(){
        
        return(
            
            <div className = 'back'>
            
            <div className = 'box'>
                 <h1 className = 'signin'>Form</h1>
         
               <div> 
                    <input className = 'input' onChange ={this.inputFirstName} type = 'textholder' placeholder = 'Enter First Name'></input>
                    
               </div>
               <div> 
                    <input className = 'input' onChange ={this.inputLastName} type = 'textholder' placeholder = 'Enter Last Name'></input>
                    
               </div>
               <div> 
                    <input className = 'input' onChange ={this.inputUserName} type = 'textholder' placeholder = 'Enter UserName'></input>
                    
               </div>
               <div> 
                    <input className = 'input' type = 'password' onChange={this.inputPassword} placeholder = 'Password'></input>
               </div>
               <div> 
                     <Link className ='butt' 
                     to ={{pathname:'/details',
                     state:{firstName:this.state.firstName,
                     lastName:this.state.lastName,
                     password:this.state.password,
                     userName:this.state.userName}
                     }}>Submit</Link>
               </div>

            </div>
            </div>
            
        );
    }
}

export default SignIn;