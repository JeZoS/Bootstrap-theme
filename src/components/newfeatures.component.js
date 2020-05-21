import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import "bootstrap/dist/css/bootstrap.min.css";

function NewFeatures(){
		return(
			<div className="jumbotron NewFeat">
				<div className="narrow">
					<div className="col=12 text-center">
						<h3 className="heading" style={{fontSize:"40px"}}>Features</h3>
						<div className="heading-underline"></div>
					</div>
					<div className="row text-center" style={{paddingTop:"1rem"}}>
						<div className="col-md-4 "><h4>Themes</h4><i className="fa fa-cogs fa-2x"></i><p className="pad">Create your own or download from our Downloads section.Theres always something new for everyone.</p></div>
						<div className="col-md-4 "><h4>Wallpapers</h4><i className="fa fa-cube fa-2x"></i><p className="pad">Thousands of free high quality wallpapers one click away from getting yours to make your own custom homescreens.</p></div>
						<div className="col-md-4 "><h4>Widgets</h4><i className="fa fa-gear fa-2x"></i><p className="pad">Create your own or use pre designed widgets from our widget App.</p></div>
					</div>
				</div>
			</div>
			)}
export default NewFeatures;