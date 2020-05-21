import React from 'react';
import Link from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import ReactDOM from 'react-dom';

function Build(){
	return(
		<div className="build" id="downloads">
			 <div className="fixed-Background">
			 	<div className="row dark text-center">
			 		<div className="col-12">
			 			<h3 className="heading" style={{paddingBottom:"1rem",color:"black",fontSize:"2rem"}}>TOOLS</h3>
			 			<div className="heading-underline"></div>
			 		</div>
			 		<div className="col-md-4">
			 			<h3 style={{color:"black"}}>LAUNCHER</h3>
			 			<i className="fa fa-android fa-3x" style={{margin:"1rem 0 1rem"}}></i>
			 			<p className="lead" style={{color:"black",margin:"1rem 2rem 0"}}>Download any from Play Store or try our custom build launcher with a lots of feature.</p>
			 		</div>
			 		<div className="col-md-4">
			 			<h3 style={{color:"black"}}>KWGT</h3>
			 			<i className="fa fa-code fa-3x" style={{margin:"1rem 0 1rem"}}></i>
			 			<p className="lead" style={{color:"black",margin:"1rem 2rem 0"}}>Use hundreds of widgets or create your own with KWGT.</p>
			 		</div>
			 		<div className="col-md-4">
			 			<h3 style={{color:"black"}}>WALLPY</h3>
			 			<i className="fa fa-crop fa-3x" style={{margin:"1rem 0 1rem"}}></i>
			 			<p className="lead" style={{color:"black",margin:"1rem 2rem 0"}}>Download this app from our downloads section or from play store for free high qualiity wallpapers</p>
			 		</div>
			 	</div>
			 		<div className="fixed-warp">
			 			<div className="fixed">
			 			</div>
			 		</div>
			 </div>
		</div>
		)
}

export default Build;