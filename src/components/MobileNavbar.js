import React from "react";

export default function MobileNavbar() {
	function closeNav(e) {
		e.preventDefault();
		document.getElementById("mySidenav").style.width = "0";
	}
	return (
		<>
			<div id="mySidenav" className="sidenav">
				<a href="" className="closebtn" onClick={closeNav}>
					&times;
				</a>
				<a href="#">Reservation</a>
				<a href="#">My Booking</a>
				<a href="#">FAQ</a>
				<a href="#">Brands</a>
				<a href="#">Destination</a>
				<a href="">AGA Meetings</a>
				<a href="">Deals</a>
			</div>
		</>
	);
}
