// INCLUDE REACT AND REACT-ROUTER DEPENDENCIES
import React from 'react';
import Router from 'react-router';


import RaisedButton from 'material-ui/RaisedButton';



// CREATE THE MAIN COMPONENT

var Main = React.createClass({

	render: function(){

		return(


			<div className="main-container">
				<Button icon='inbox' label='Inbox' flat />
				


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

