import React from 'react';
import './Auth.css'
import * as Axios from './auth_utils';
import cogoToast from 'cogo-toast';



class LoginForm extends React.Component {

	constructor(){
		super()
		this.state ={
			isSignup:false,
			isLoggedIn:false,

		}
	
	this.handleLogin = this.handleLogin.bind(this);
	this.handleSignup = this.handleSignup.bind(this);
	}
	componentDidMount() {
		Axios.tokenVerify('http://localhost:8000/api/token-verify/')

		this.setState(
		{
			isLoggedIn:true,
		})
		
	 	 
	}
	handleLogin(event) {
		let username = document.getElementById('username').value;
		let password = document.getElementById('pass').value;
		let url1 = 'http://localhost:8000/api/token-auth/';
		let url2 = 'http://localhost:8000/api-auth/login/';
		if (username && password){
		Axios.postLogin(username,password,url1)
		}
		event.preventDefault();
	}
	handleSignup() {
		this.setState(prevState => ({
 				 isSignup: !prevState.isSignup
			}));

	}

	render(){

 		let login =  !this.state.isSignup  && 
 		<div id='login' className="ui placeholder segment auth" style={{height:'60vh',width:'900px',margin:'0 auto',background:'white'}}>
				  <div className="ui two column very relaxed stackable grid">
				    <div className="column">
				    <form className='ui form' onSubmit={this.handleLogin}>
				        <h2 style={{textAlign:'center',margin:'0',marginBottom:'2rem'}}> Sign in <i className="bolt icon"></i></h2>
				        <div id='username-field' className="field">
				          <label>Username</label>
				          <div className="ui left icon input">
				            <input id="username" type="text" placeholder="Username"/>
				            <i className="user icon"></i>
				          </div>
				        </div>
				        <div id='password-field' className="field">
				          <label>Password</label>
				          <div className="ui left icon input">
				            <input id="pass" type="password" placeholder="Password"/>
				            <i className="lock icon"></i>
				          </div>
				        </div>
				        <div>
				        <button className="ui blue submit bt button" type="submit">Login</button>
				        </div>
				      </form>
				    </div>
				    <div className="middle aligned column">
				      <div className="ui big button bt" onClick={this.handleSignup}>
				        <i className="signup icon"></i>
				        Sign Up
				      </div>
				    </div>
				  </div>
				  <div id='divider' className="ui vertical divider" style={{background:'transparent'}}>
				    Or
				  </div>
				</div> 
		  let signup = this.state.isSignup  &&
		  <div id='signup' className='ui segment auth' style={{width:'900px',margin:'0 auto',background:'white'}}>
		   <i className="arrow alternate circle left outline icon" onClick={this.handleSignup} style={{fontSize:'2rem',color:'black'}}></i><h2 style={{textAlign:'center',margin:'0'}}> Signup <i className="edit outline icon"></i></h2>                      
		   <form className="ui form" style={{padding:'2rem'}}>
		   <div className='two fields'>
			<div className="field">
			  <label>First Name</label>
				<input type="text" name="first-name" placeholder="First Name"/>
				 </div>
			  <div className="field">
			   <label>Last Name</label>
				<input type="text" name="last-name" placeholder="Last Name"/>
				 </div>
				</div>
			  <div className='two fields'>
			    <div className="field">
			   <label>Email</label>
				  <input type="email" name="email" placeholder="Email"/>
			   </div>
			   <div className="field">
			   <label>Username</label>
				  <input type="text" name="username" placeholder="Username"/>
			   </div>
			  </div>
			 <div className='two fields'>
			   <div className="field">
			   <label>Password</label>
				  <input type="password" name="password" placeholder="Password"/>
			   </div>
			   <div className="field">
			   <label>Confirm Password</label>
				  <input type="password" name="conf-password" placeholder="Confirm-Password"/>
			   </div>
			  </div>
				  <div className="field">
				  <div className="ui checkbox">
				 <input type="checkbox" tabIndex="0"/>
		        <label>I agree to the Terms and Conditions</label>
		       </div>
			 </div>
		   <button className="ui button bt" type="submit">Submit</button>
         </form>
        </div>  
		 return(

			<div className='ui container'>
			     
			     {login}
			     {signup}
  				
		     </div>


			);
	}
}

export default LoginForm;