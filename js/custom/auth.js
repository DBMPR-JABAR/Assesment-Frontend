const token =
  "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOi8vbG9jYWxob3N0OjgwMDAvYXBpL2xvZ2luIiwiaWF0IjoxNjY3NDY2MTgyLCJleHAiOjE2Njc0Njk3ODIsIm5iZiI6MTY2NzQ2NjE4MiwianRpIjoiUUlONGNlNXJpM1RTM1FmVCIsInN1YiI6IjEiLCJwcnYiOiIyM2JkNWM4OTQ5ZjYwMGFkYjM5ZTcwMWM0MDA4NzJkYjdhNTk3NmY3In0.zBo032GQ-kIel3wFLdeYyXt5S1G13s6QaNKF0jVtuzQ";

$.ajax({
  url: "http://localhost:8000/api/user",
  type: "GET",
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
});

// POST AUTH LOGIN
$.ajax({
  url: "http://localhost:8000/api/login",
  type: "POST",
  data: {
    email: "",
    password: "",
  },

  success: function (data) {
    console.log(data);
  },
  error: function (data) {
    console.log(data);
  },
});

// POST AUTH LOGGED IN
$.ajax({
  url: "http://localhost:8000/api/login",
  type: "POST",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
    Authorization: "Bearer " + token,
  },
  data: {
    email: "",
    password: "",
  },

  success: function (data) {
    console.log(data);
  },
  error: function (data) {
    console.log(data);
  },
});
