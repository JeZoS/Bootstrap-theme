import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import ReactDOM from 'react-dom';
import "bootstrap/dist/css/bootstrap.min.css";

function Landingpage(){
		return(
			<div>
			<div>
				<div className="landing">
					<div className="home-wrap">
						<div className="home-inner">
						</div>
					</div>
				</div>
			</div>
			<div className="caption text-center">
				<h1>Welcome to Kustoms</h1>
				<h3>Customizable Homescreens</h3>
				<a class="btn btn-outline-light btn-sm" href="#Downloads">Download Now</a>
			</div>
			</div>
			)}
export default Landingpage;