
// MAIN DEPENDENCIES
var React = require('react');
var ReactDOM = require('react-dom');


// GRAB THE PROPERTY ASSOCIATED WITH THE ROUTER
var Router = require('react-router').Router


// GRAB THE ROUTES
var routes = require('./config/routes');


// RENDER CONTENT ACCORDING TO ROUTES PAGE
// DISPLAYS CONTENT IN THE DIV APP OF INDEX.HTML
// TAKES IN TWO PARAMETERS (CONTENTS AND LOCATION)
ReactDOM.render(

	<Router>{routes}</Router>,
	document.getElementById('app')
)