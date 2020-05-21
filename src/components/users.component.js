import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import ReactDOM from 'react-dom';
import "bootstrap/dist/css/bootstrap.min.css";

function Users(){
	return(
			<div className="users" style={{backgroundColor:"white"}} id="about">
				<div className="col=12 text-center" ><a href="#Users"><img src="nigga.png" className="avatar"></img></a></div>
				<h1 className="col=12 text-center" style={{paddingBottom:"1rem"}}>Users Reviews</h1>
				<div className="heading-underline"></div>
				<div className="row" style={{padding:"2rem"}}>

					<div className="col-md-4">
						<div className="row">
							<img src="com3.jpeg" className="img2 col-6"></img>
							<h4 className="col-6 name">-/Nishant Gautam</h4>
						</div>
						<p className="lorem text-center" >" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras posuere rhoncus turpis, vel tempor purus maximus accumsan. Etiam maximus accumsan velit vitae blandit. Nunc vulputate, nisi in consectetur vestibulum, felis nisi sagittis urna, eu hendrerit ante dolor vitae diam. Donec hendrerit volutpat enim sed auctor."</p>
					</div>

					<div className="col-md-4">
						<div className="row">
							<img src="com2.jpeg" className="img2 col-6"></img>
							<h4 className="col-6 name">-/Binny verma</h4>
						</div>
						<p className="lorem text-center" >" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras posuere rhoncus turpis, vel tempor purus maximus accumsan. Etiam maximus accumsan velit vitae blandit. Nunc vulputate, nisi in consectetur vestibulum."</p>
					</div>

					<div className="col-md-4">
						<div className="row">
							<img src="com.jpeg" className="img2 col-6"></img>
							<h4 className="col-6 name">-/Siddhartha Gautam</h4>
						</div>
						<p className="lorem text-center" >" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras posuere rhoncus turpis, vel tempor purus maximus accumsan. Etiam maximus accumsan velit vitae blandit. Nunc vulputate, nisi in consectetur vestibulum, felis nisi sagittis urna."</p>
					</div>

				</div>
			</div>
		)
}

export default Users;