import React from 'react';


export default class Search extends React.Component {

	constructor(){

		super()

	    this.handleClick = this.handleClick.bind(this);
	}


	handleClick() {
		alert('hello')
	}

	render() {
		return(

			<div className="ui category right alinged search" onClick={this.handleClick}>
			  <div className="ui icon input">
			    <input className="prompt" type="text" placeholder="Search animals..." id='search' style={{display:'none',transition:'opacity 2s ease-out',opacity:'0'}}/>
			    <i className="search icon"></i>
			  </div>
			  <div className="results"></div>
			</div>



			)
	}
}

