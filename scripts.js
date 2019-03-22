let request = new XMLHttpRequest();

request.open('GET', 'https://restcountries.eu/rest/v2/all', true);

request.onload = function () {
  if (this.status === 200) {
    let data = JSON.parse(request.response);
    console.log(data);
  }
}
  request.send();
