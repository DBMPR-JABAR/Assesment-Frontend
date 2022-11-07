$.ajax({
    url: "http://localhost:8080/login",
    type: 'GET',
    // Fetch the stored token from localStorage and set in the header
    headers: {"Authorization": localStorage.getItem('token')}
  });