import React from 'react';

class ChatScreen extends React.Component {

	constructor(){
		super()
	}

	render(){

		return(

			<div>
			 <div style={{background:'white'}}><h3> name</h3></div>
			  <div style={{background:'wheat',height:'80vh'}}>
				<div className='bottom-mess'> 

					<input type='text'/><p>a</p>
				</div>
			  </div>
			</div>


			)




	}
}

export default ChatScreen