import React from 'react';
import cogoToast from 'cogo-toast';
import $ from 'jquery';
import axios from 'axios';

class Feed extends React.Component {
	_isMounted = false;
	constructor(){
		super()
		this.state ={
			display:false,
			modal_display:false,
		}

	this.handleClick = this.handleClick.bind(this);
	this.MouseLeave = this.handleClick.bind(this);
	this.handleEdit = this.handleEdit.bind(this);
	this.handleDelete = this.handleDelete.bind(this);
	}

	handleClick(event) {
			this.setState(prevState => ({
 				 display: !prevState.display
			}));

	}
	handleEdit(event){
		alert("Edit")
		 
	}
	handleDelete(event){
		axios.get('http://localhost:8000/api/feed_delete/'+this.props.id)
		  .then(response => {
		    cogoToast.success("Message deleted",{color:'green',hideAfter:2});
		    console.log(response.data);
		 })
		  .catch(error => {
		  	cogoToast.error("Message can't be deleted !",{color:'green',hideAfter:2});
		    console.log(error);
		});
	}
	
	render(){
		let display = {
			display:this.state.display ? 'block':'none',
		}

		return(


			<>	  
				<div id={this.props.id +'_feed'} className="ui fluid grey card" style={{marginTop:'.5rem'}}>
					<div className="right floated author" style={{paddingTop:'.5rem'}}>
					      <img className="ui avatar image" src={this.props.image}/> <b>{this.props.name}</b>
					    </div>
					  <div className="content">
					  	<span className='left floated'> {this.props.message}</span>
					  	<span className="left floated time description">{this.props.time}</span> 
					  	<span className='left floated' style={{background:'transparent'}}  onClick={this.handleClick}>
					  	<div id={this.props.id +'_feed_'} className="ui icon top left wrench icon dropdown button" style={{padding:'1px'}}>
					  	 <div style={{color:'black'}}>✍</div>
						  <div id={this.props.id +'_feed_settings'}className="menu" style={display}>
						    <div className="item" onClick={this.handleEdit}>Edit</div>
						    <div className="item" onClick={this.handleDelete}>Delete</div>
						  </div>
						</div>
						</span>
					  </div>
					</div>
					<div className="ui small test modal transition">
				    <div className="header">
				      Delete Your Account
				    </div>
				    <div className="content">
				      <p>Are you sure you want to delete your account</p>
				    </div>
				    <div className="actions">
				      <div className="ui negative button">
				        No
				      </div>
				      <div className="ui positive right labeled icon button">
				        Yes
				        <i className="checkmark icon"></i>
				      </div>
				    </div>
				  </div>		 
            </>


			);
	}
}

export default Feed;