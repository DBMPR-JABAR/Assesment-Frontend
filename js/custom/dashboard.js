
$(document).ready(function() {
  var token = {};
  if ( localStorage.getItem('token') ) {
    token = localStorage.getItem('token');
  }else{
    window.location = "login.html";
  }

  $.ajax({
      url: "http://localhost:8000/api/user",
      type: 'GET',
      
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: "Bearer " + token,
      },
      success: function (data) {
        console.log(data);
      },
      error: function (data) {
        console.log(data);
      },
      // Fetch the stored token from localStorage and set in the header
    });
} );


  