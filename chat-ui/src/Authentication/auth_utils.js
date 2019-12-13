import axios from 'axios';
import history from '../utils/History';


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
		     	localStorage.setItem('token', res.data.token); 
		     	history.replace('/home')
		     	console.log(localStorage.getItem('token')); 
		     }})
		    .catch(function (error) {
			    if (error.response) {
			      if(error.response.status =='401' || error.response.status == '400'){
			      	
					function err(id){
						var d = document.getElementById(id);
						d.className += " error";

					}
					err('username-field')
					err('password-field')
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
		let Token = localStorage.getItem('token')
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
		     	console.log('Token Verified !!')
		     	history.replace('/home')

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