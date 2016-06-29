
// MAIN DEPENDENCIES
import React from 'react';
import ReactDOM from 'react-dom';

import {Button} from 'react-toolbox/lib/button'






// GRAB THE PROPERTY ASSOCIATED WITH THE ROUTER
import { Router, Route, Link, browserHistory } from 'react-router';


// GRAB THE ROUTES
var routes = require('./config/routes');


// RENDER CONTENT ACCORDING TO ROUTES PAGE
// DISPLAYS CONTENT IN THE DIV APP OF INDEX.HTML
// TAKES IN TWO PARAMETERS (CONTENTS AND LOCATION)
ReactDOM.render(

	<Router>{routes}</Router>,
	document.getElementById('app')


);	