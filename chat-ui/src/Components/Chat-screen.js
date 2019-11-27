import React from 'react';

class ChatScreen extends React.Component {

	constructor(){
		super()
	}

	render(){

		return(

			<div>
				<div className="card" style={{height:'100vh'}}>
				  <div className="card-body">
				  	<div>
				  		<nav className="nav">
						  <a className="nav-link active" href="#">Active</a>
						  <a className="nav-link" href="#">Link</a>
						  <a className="nav-link" href="#">Link</a>
						  <a className="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
						</nav>
				  	</div>
				  	<div id='cont'> 
				  	<p> hello</p>
				  	</div>
				    <div className="input-group input-group-md bttm">
					  <div className="input-group-prepend">
					    <span className="input-group-text" id="inputGroup-sizing-md">File</span>
					  </div>
					  <input type="text" className="form-control inp" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-md"/>
					  <button type="button" className="btn-sm btn-success ">Send</button>
					</div>
				  </div>
				</div>
			 
			</div>


			)




	}
}

export default ChatScreen