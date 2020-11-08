// slider js
$(document).ready(function () {
	$(".slider-wrapper").slick({
		infinite: true,

		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 3000,
		cssEase: "ease-out",
	});
	$(".design-slider-wrapper").slick({
		infinite: true,
		dots: true,
		slidesToShow: 4,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 3000,
		cssEase: "ease-out",
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
					infinite: true,
					dots: true,
				},
			},
			{
				breakpoint: 600,
				settings: {
					arrows: false,

					slidesToShow: 1,
					slidesToScroll: 1,
				},
			},
			{
				breakpoint: 480,
				settings: {
					arrows: false,

					slidesToShow: 1,
					slidesToScroll: 1,
				},
			},
		],
	});
	$(".slider-for").slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		fade: true,
		asNavFor: ".slider-nav",
	});
	$(".slider-nav").slick({
		infinite: true,
		slidesToShow: 3,
		slidesToScroll: 1,
		arrows: true,
		asNavFor: ".slider-for",
		dots: true,
		centerMode: true,
		focusOnSelect: true,
		autoplay: true,
		autoplaySpeed: 2000,
	});
	var navbar = document.getElementById("searchBar");
	window.onscroll = function () {
		if (navbar != null) {
			scrollFunction();
		}
	};
	var sticky = navbar.offsetTop + 35;
	function scrollFunction() {
		if (window.pageYOffset >= sticky) {
			navbar.classList.add("sticky");
		} else {
			navbar.classList.remove("sticky");
		}
	}
	$(".welcome-slider-wrapper").slick({
		infinite: true,
		dots: true,
		slidesToShow: 3,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 3000,
		cssEase: "ease-out",
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
					infinite: true,
					dots: true,
				},
			},
			{
				breakpoint: 600,
				settings: {
					arrows: false,

					slidesToShow: 1,
					slidesToScroll: 1,
				},
			},
			{
				breakpoint: 480,
				settings: {
					arrows: false,

					slidesToShow: 1,
					slidesToScroll: 1,
				},
			},
		],
	});
	$(".room-slider-wrapper").slick({
		infinite: true,
		dots: true,
		slidesToShow: 3,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 3000,
		cssEase: "ease-out",
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
					infinite: true,
					dots: true,
				},
			},
			{
				breakpoint: 600,
				settings: {
					arrows: false,

					slidesToShow: 1,
					slidesToScroll: 1,
				},
			},
			{
				breakpoint: 480,
				settings: {
					arrows: false,

					slidesToShow: 1,
					slidesToScroll: 1,
				},
			},
		],
	});
});

function openNav() {
	document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
	document.getElementById("mySidenav").style.width = "0";
}

function openHotelNav() {
	document.getElementById("filterSidenav").style.width = "250px";
}

function closeHotelNav() {
	document.getElementById("filterSidenav").style.width = "0";
}

// custom 


//   useEffect(() => {
//     var navbar = document.getElementById("searchBar");
//     window.onscroll = function () {
//       if (navbar != null) {
//         scrollFunction();
//       }
//     };
//     var sticky = navbar.offsetTop + 35;
//     function scrollFunction() {
//       if (window.pageYOffset >= sticky) {
//         navbar.classList.add("sticky");
//       } else {
//         navbar.classList.remove("sticky");
//       }
//     }
//   }, []);
