import React from "react";
import {Link} from "react-router-dom";

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
				<Link href="#">Deals</Link>
				<Link href="#">About</Link>
				<Link href="#">FAQ</Link>
				<Link href="#">Supply</Link>
				<Link href="#">Franchise</Link>
				<Link href="">Join Us</Link>
				{/* <a href="">Deals</a> */}
			</div>
		</>
	);
}
