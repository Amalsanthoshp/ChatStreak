import React from 'react';
import axios from 'axios';
import history from './History';


export function postMessage(para1,para2,para3,url){
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
		            'message':para1,
		            'send_to':para2,
		            'test':para3,
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

export function postLogin(username,password,url){
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
		            'username':username,
		            'password':password,
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
		    	console.log(res);
		     	localStorage.setItem('token-access', res.data.access); 
		     	localStorage.setItem('token-refresh',res.data.refresh);
		     	history.replace('/home')
		     	console.log(localStorage.getItem('token')); 
		     }})
		    .catch(function (error) {
			    if (error.response) {
			      if(error.response.status =='401'){
			      	alert('Invalid Username or Password !!')
			      }
			    }
			  })
		    

}


export function tokenVerify(url){
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
		let Token = localStorage.getItem('token-access')
	  	  axios.post(url, 

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
		    	console.log(res);
		     	alert('Token Verified !!')
		     }})
		    .catch(function (error) {
			    if (error.response) {
			      if(error.response.status =='400' || error.response.status =='401'){
			      	history.replace('/login')
			      	return false
			      }
			    }
			  })
		    

} 



