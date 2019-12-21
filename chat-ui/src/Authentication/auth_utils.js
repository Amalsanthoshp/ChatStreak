import axios from 'axios';
import history from '../utils/History';
import cogoToast from 'cogo-toast';
import Cookies from 'js-cookie';



export function postLogin(username,password,url2){
	axios.defaults.xsrfCookieName = 'csrftoken'
	axios.defaults.xsrfHeaderName = "X-CSRFTOKEN"
	axios.defaults.withCredentials = true
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
		// var csrftoken = getCookie('csrftoken');
		// console.log(csrftoken)
		console.log('username: ', username ,'password: ',password ,csrftoken, 'URL ' ,url2)
		// axios.post(url2, 

	 //  	  		{
		//             'username':username,
		//             'username':username,
		//         },
		//         {
		//             headers: {
		//                 "Content-Type": 'application/json',
		//                 'X-CSRFTOKEN': csrftoken,

					

		//             },
		//             // headers: new Headers({"Content-Type": "application/json", 'X-CSRFToken': cookies.csrftoken})
		//         }
		    // )
		 
		    var csrftoken = Cookies.get('csrftoken'); // Using JS Cookies library
		    var headers = {'X-CSRFTOKEN': csrftoken};
		    axios.post(url2,
		    	  {
		    	  	'username':username,
		    	  	'password':password,
		    	  	'submit': 'Log in'

		    	  }
		    	,{headers: headers})
		    .then(function (res){
		    	if (res.status=='200'){
		    	alert("Logged In");
		     	

		     }})
		    .catch(function (error) {
		    	console.log(error);
		    	
		 })
	  	 //  axios.post(url1, 

	  	 //  		{
		   //          'username':username,
		   //          'password':password,
		   //      },
		   //      {
		   //          headers: {
		   //              "Content-Type": 'application/json',
		   //              'X-CSRFTOKEN': csrftoken,

					

		   //          },
		   //      }
		   //  )
		   //  .then(function (res){
		   //  	if (res.status=='200'){
		   //  	console.log(res);
		   //   	localStorage.setItem('token', res.data.token); 
		   //   	cogoToast.success('Logged In Successfully 🤗',{color:'green',hideAfter:2});
		   //   	history.replace('/home')
		   //   	console.log(localStorage.getItem('token')); 

		   //   }})
		   //  .catch(function (error) {
			  //   if (error.response) {
			  //     if(error.response.status =='401' || error.response.status == '400'){
			      	
					// function err(id){
					// 	var d = document.getElementById(id);
					// 	d.className += " error";

					// }
					// err('username-field')
					// err('password-field')
					// cogoToast.error('Username or Password is Incorrect !',{color:'green',hideAfter:2});
			  //     }
			  //   }
			  // })
		    
		    

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