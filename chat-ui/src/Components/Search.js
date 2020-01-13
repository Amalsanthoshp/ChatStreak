import React from 'react';
import * as Axios from '../utils/Axios';



export default class Search extends React.Component {

	constructor(){

		super()

		this.state = {

			open:false,
			users:[],

		}

	    this.handleChange = this.handleChange.bind(this);
	    this.handleClick = this.handleClick.bind(this);
	    this.handleSelect = this.handleSelect.bind(this);
	}

	handleSelect(event) {

		var id = event.target.id
		this.props.searchSelect(id.split('_')[0])
		
	}


	handleClick() {
			this.setState(prevState => ({
 				 open: !prevState.open
			}));

	}

	handleChange() {
		if(document.getElementById('search').value===''){
					document.getElementById('search-results').style.display = 'none!important';

		}

		let baseUrl = 'http://localhost:8000/api/search/'
		let url = baseUrl + document.getElementById('search').value
		Axios.userSearch(url)
		.then(res => {
			const users = res.data;
	        this.setState({ users })
	       	console.log(this.state.users)
		
		 })	
		.catch((error) => {
		      console.log(error);
		      this.setState({ users:null })


		});
	  
	}

	render() {

			if(this.state.users){
				let numberOfUsers =this.state.users.length;
				var rows = [];
		 	 for (var i = 0; i < numberOfUsers ; i++) {
		 	 		rows.push(
		 	 		<a onClick={this.handleSelect} key={i} id ={this.state.users[i].id+'_selectItem'} className="result">
			         <div className="content">
			          <div id ={this.state.users[i].id+'_select'} className="title">{this.state.users[i].username}</div>
			         </div>
			        </a>);
			    }
		 		
			}

			

			let row = this.state.users ? rows : <a className="result">
			   									  <div className="content">
			          							  <div className="title">No users..</div>
			         							 </div>
										        </a>

		return(

			

			<div className="ui category right alinged search">
			  <div className="ui icon input">
			  	<i className="search icon"></i>
			    <input className="prompt" onClick={this.handleClick} type="text" placeholder="Search Friends..." id='search' onInput={this.handleChange} style={{display:this.state.open ? 'block':'none',transition:'opacity 2s ease-out',opacity:'0'}}/>
			  </div>
			  <div className="results transition" id='search-results' style={{display:this.state.open ? 'block':'none',width:'150px'}}>
			    <div className="category">
			        <div className="results">
			        {row}
			      </div>
			     </div>
			    </div>
			   </div>



			)
	}
}

