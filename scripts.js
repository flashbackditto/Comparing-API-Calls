
// AJAX request - Standard try and true
// Creates request variable
let request = new XMLHttpRequest();

// Call the open function, GET-type request, url, true in regards to asynchronous
request.open('GET', 'https://restcountries.eu/rest/v2/all', true);

// call the onload function
request.onload = function () {

  // check the server status is 200 (request is viable)
  // common types of HTTP Statuses
  // 200 = okay
  // 404 = error
  // 403 = forbidden
  if (this.status === 200) {

    // return server response as a JSON object with JSON.parse
    let data = JSON.parse(request.response);
    console.log(data);
  }
}

//call send
  request.send();

// Fetch API - Newest standard HTTPRequest, limited browser compatability..?
//call the fetch function
fetch('https://api.github.com/users')
// Response type JSON
.then(res => res.json())
//log the data
.then(data => console.log(data));
