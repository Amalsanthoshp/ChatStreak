import React from 'react';
import axios from 'axios';
import history from './History';
import cogoToast from 'cogo-toast';


var id = null

export function postMessage(message,send_by,receive_by,url){
	axios.defaults.xsrfHeaderName = "X-CSRFToken";
		axios.defaults.xsrfCookieName = "csrftoken";
	    function getCookie(name) {
		    var cookieValue = null;
		    if (document.cookie && document.cookie !== '') {
		        var cookies = document.cookie.split(';');
		        for (var i = 0; i < cookies.length; i++) {
		            var cookie = cookies[i].trim();
		            // Does this cookie string begin with the name we want?
		            if (cookie.substring(0, name.length + 1) === (name + '=')) {
		                cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
		                break;
		            }
		        }
		    }
		    return cookieValue;
		}
		var csrftoken = getCookie('csrftoken');
		console.log(csrftoken)
	  	  axios.post(url, 

	  	  		{
		            'message':message,
		            'send_by':send_by,
		            'receive_by':receive_by,
		        },
		        {
		            headers: {
		                "Content-Type": 'application/json',
		                'X-CSRFTOKEN': csrftoken,

					

		            },
		        }	
		    )
		    .then(res => console.log(res))
		    .catch(error => console.log(error))
}



export function getUser(url){
	axios.defaults.xsrfHeaderName = "X-CSRFToken";
		axios.defaults.xsrfCookieName = "csrftoken";
	    function getCookie(name) {
		    var cookieValue = null;
		    if (document.cookie && document.cookie !== '') {
		        var cookies = document.cookie.split(';');
		        for (var i = 0; i < cookies.length; i++) {
		            var cookie = cookies[i].trim();
		            // Does this cookie string begin with the name we want?
		            if (cookie.substring(0, name.length + 1) === (name + '=')) {
		                cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
		                break;
		            }
		        }
		    }
		    return cookieValue;
		}
		var csrftoken = getCookie('csrftoken');
		console.log(csrftoken)
		let Token = localStorage.getItem('token')
		var config = {
		    headers: {'Authorization' : "JWT " + Token}
		};		            		                

	  	return axios.get(url,config)
		    .then(function (res){
		    	if (res.status=='200'){
		    	console.log(res);
		     	console.log('user selected')
		     	return res

		     }})
		    .catch(function (error) {
			    if (error.response) {
			      if(error.response.status =='400' || error.response.status =='401'){
			      	return false
			      }
			    }
			  })
		    

}

export function homeTokenVerify(url){
	axios.defaults.xsrfHeaderName = "X-CSRFToken";
		axios.defaults.xsrfCookieName = "csrftoken";
	    function getCookie(name) {
		    var cookieValue = null;
		    if (document.cookie && document.cookie !== '') {
		        var cookies = document.cookie.split(';');
		        for (var i = 0; i < cookies.length; i++) {
		            var cookie = cookies[i].trim();
		            // Does this cookie string begin with the name we want?
		            if (cookie.substring(0, name.length + 1) === (name + '=')) {
		                cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
		                break;
		            }
		        }
		    }
		    return cookieValue;
		}
		var csrftoken = getCookie('csrftoken');
		console.log(csrftoken)
		let Token = localStorage.getItem('token')
	  	return axios.post(url, 

	  	  		{
		            'token':Token,
		        },
		        {
		            headers: {
		                "Content-Type": 'application/json',
		                'X-CSRFTOKEN': csrftoken,

					

		            },
		        }
		    )
		    .then(function (res){
		    	if (res.status=='200'){
		    	console.log(res.data.user.id);
		     	console.log('Token Verified !!')
		     	id = res.data.user.id
		     	return (id);

		     }})
		    .catch(function (error) {
			    if (error.response) {
			      if(error.response.status =='400' || error.response.status =='401'){
			      	history.replace('/login')
			      	// return false
			      }
			    }
			  })
} 




export function getRecent(url){
	axios.defaults.xsrfHeaderName = "X-CSRFToken";
		axios.defaults.xsrfCookieName = "csrftoken";
	    function getCookie(name) {
		    var cookieValue = null;
		    if (document.cookie && document.cookie !== '') {
		        var cookies = document.cookie.split(';');
		        for (var i = 0; i < cookies.length; i++) {
		            var cookie = cookies[i].trim();
		            // Does this cookie string begin with the name we want?
		            if (cookie.substring(0, name.length + 1) === (name + '=')) {
		                cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
		                break;
		            }
		        }
		    }
		    return cookieValue;
		}
		var csrftoken = getCookie('csrftoken');
		console.log(csrftoken)
		let Token = localStorage.getItem('token')
		var config = {
		    headers: {'Authorization' : "JWT " + Token}
		};		            		                

	  	return axios.get(url,config)
		    .then(function (res){
		    	if (res.status=='200'){
		    	console.log(res);
		     	console.log('user selected')
		     	return res

		     }})
		    .catch(function (error) {
			    if (error.response) {
			      if(error.response.status =='400' || error.response.status =='401'){
			      	return error
			      }
			    }
			  })
		    

}


export function logOut(url){
		 axios.get('http://localhost:8000/api/logout/').then(function (res){
		 	if(res.status==='200'){
		 		console.log(res)
		 	}
		 })
		 .catch(function (err){
		 	if(err.response){
		 		console.log(err)
		 	}
		 })
		 localStorage.setItem('token', null);
		 cogoToast.success('Logged Out Successfully 👋',{color:'green',hideAfter:2});
		 history.replace('/login');   
}




export function getFeed(url){
	axios.defaults.xsrfHeaderName = "X-CSRFToken";
		axios.defaults.xsrfCookieName = "csrftoken";
	    function getCookie(name) {
		    var cookieValue = null;
		    if (document.cookie && document.cookie !== '') {
		        var cookies = document.cookie.split(';');
		        for (var i = 0; i < cookies.length; i++) {
		            var cookie = cookies[i].trim();
		            // Does this cookie string begin with the name we want?
		            if (cookie.substring(0, name.length + 1) === (name + '=')) {
		                cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
		                break;
		            }
		        }
		    }
		    return cookieValue;
		}
		var csrftoken = getCookie('csrftoken');
		console.log(csrftoken)
		let Token = localStorage.getItem('token')
		var config = {
		            
		    headers: {'Authorization' : "JWT " + Token}
		};		            		                

	  	return axios.get(url,config)
		    .then(function (res){
		    	if (res.status=='200'){
		    	console.log(res);
		     	console.log('user selected')
		     	return res

		     }})
		    .catch(function (error) {
			    if (error.response) {
			      if(error.response.status =='400' || error.response.status =='401'){
			      	return error
			      }
			    }
			  })
		    

}
