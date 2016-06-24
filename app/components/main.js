// INCLUDE REACT AND REACT-ROUTER DEPENDENCIES
import React from 'react';
import Router from 'react-router';


import {button} from 'react-toolbox/lib/button'


// CREATE THE MAIN COMPONENT

var Main = React.createClass({

	render: function(){

		return(


			<div className="main-container">
				
				{/*NAVBAR*/}
				<Navbar brand='NYT REACTIONS' right>
  					<NavItem href='#/search'>Search</NavItem>
  					<NavItem href='#/saved'>Saved Artciles</NavItem>
				</Navbar>

				{/*HEADER*/}
				<div className="container-fluid">
					<h1 className="center-align">
						New York Times Article Scrubber
					</h1>
					<h2 className="center-align">
						Search for and save articles of interest.
					</h2>

				{/* LOAD IN SUB COMPONENTS (SEARCH AND SAVED) */}
					{this.props.children}

				</div>

			</div>
			)
	}
});

module.exports = Main;

