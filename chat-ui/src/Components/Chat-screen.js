import React from 'react';
import Feed from './Feed';
import axios from 'axios';
import '../style.css';

class ChatScreen extends React.Component {

	constructor(){
		super()
	}

	

	render(){
		
		 var rows = [];
		 for (var i = 0; i < 2; i++) {
			    rows.push(<div key={i} className="item"><Feed message_props={this.props.feed}/></div>);
			}

		return(
				<div id='main' className="ui segment" style={{height:'100vh',borderRadius:'0',paddingLeft:'.5rem',paddingRight:'.5rem',paddingTop:'0'}}>
					<div className="ui two item menu" style={{marginBottom:'0'}}>
					  <div className="item" style={{justifyContent:'left'}}>
					  	 <img className="ui avatar image" src="https://semantic-ui.com/images/avatar/small/jenny.jpg"/>
						 <span>Username</span>
					  </div>
					  <div className="item"style={{justifyContent:'flex-end'}}><i className="cog icon" style={{fontSize:'1.5rem',color:'green'}}></i></div>
					</div>
					<div className="ui segment" style={{height:'85vh',overflow:'scroll',paddingTop:'0',paddingBottom:'0',marginTop:'0',marginBottom:'0'}}>
						<div className="ui list" style={{width:'100%'}}>
						  {rows}
						</div>
					</div>	
				   <div className="ui fluid action input">
				   	  <button className="ui button"><i className="upload icon"></i></button>
					 <input type="text" placeholder="Search..." id="message"/>
					  <div className=" small ui button" onClick={this.props.clickHandler}><i className="paper plane outline icon" style={{fontSize:'1.5rem'}}></i></div>
				   </div>
				 </div>


			);




	}
}

export default ChatScreen