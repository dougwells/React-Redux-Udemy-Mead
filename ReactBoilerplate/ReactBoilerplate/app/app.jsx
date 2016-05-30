var React = require('react');
var ReactDOM = require('react-dom');

var objOne = {
  name: "Doug",
  location: "Park City"
};

var objTwo = {
  age: 52,
  ...objOne
};

console.dir(objTwo);



ReactDOM.render(
  <h1>Boilerplate app!</h1>,
  document.getElementById('app')
);
