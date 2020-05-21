import React from "react";

function Contact(){
	return(
		<footer id="contact">
		<div className="foot row justify-content-center">
		<div className="col-md-5 text-center">
			<img src="us.png"></img>
			<p>At our core is a collection of design and development solutions that 
			represent everything you need for yourself in the modern era.</p>
			<strong>Contact Info</strong>
			<p>(777)777-7777</p>
			<p>email@Kustoms.com</p>
			<a href="" target="_blank"><i className="fa fa-facebook-square"></i></a>
			<a href="" target="_blank"><i className="fa fa-twitter-square"></i></a>
			<a href="" target="_blank"><i className="fa fa-instagram"></i></a>
		</div>
		<hr className="socket"/>
			&copy; Kustoms
		</div>
		</footer>
		)
}
export default Contact;