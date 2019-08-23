import React from 'react';
import './App.css';
import SignIn from './Components/SignIn';
import Details from './Components/Details';
import {HashRouter,Route} from 'react-router-dom';
import 'antd/dist/antd.css';

const signIn =()=>{
  return <SignIn/>
}
const details = (props) =>{
  //console.log(props.location.state)
  return <Details value ={props.location.state}/>

}

class App extends React.Component{
  state = {
    path:"/"
  }
  
  render(){
  return (
    <div className="App">
      <HashRouter>
        <div>
          <Route path ="/" exact component={signIn}/>
          <Route path="/details" component = {details}/>
        </div>
      </HashRouter>
    </div>
  );
  }
}

export default App;
