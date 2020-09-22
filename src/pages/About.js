import React from 'react'
import FixedNavbar from '../components/FixedNavbar'
import Footer from '../components/Footer'
import BrandSection from '../components/home/BrandSection'

export default function About() {
    return (
        <>
            <FixedNavbar />
            <div class="about-content">
				<div
					class="about-banner"
					style={{
						background: `url('../assets/images/about-banner.jpg')`,
						backgroundSize: "cover"
                    }}
				></div>
			</div>
			<div class="owner">
				<div class="main-title">Owners</div>
				<div class="container">
					<div class="row owner-wrapper">
						<div class="col-md-5 offset-md-1">
							<div class="owner-img">
								<img src={require('../assets/images/owner2.jpg')} class="img-fluid" alt="" />
							</div>
						</div>
						<div class="col-md-6">
							<div class="owner-wrap">
								<div class="owner-name">Jaylon Donin</div>
								<div class="description">
									Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae
									maxime deleniti iusto fugit impedit esse possimus sed ducimus
									debitis. Minima harum et facere porro! Quae eveniet odit
									fugiat ab id?
								</div>
							</div>
						</div>
					</div>
					<div class="row owner-wrapper2">
						<div class="col-md-5 order-md-1">
							<div class="owner-img">
								<img src={require('../assets/images/owner1.jpg')} class="img-fluid" alt="" />
							</div>
						</div>
						<div class="col-md-6 order-md-0">
							<div class="owner-wrap">
								<div class="owner-name">Davis Philips</div>
								<div class="description">
									Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae
									maxime deleniti iusto fugit impedit esse possimus sed ducimus
									debitis. Minima harum et facere porro! Quae eveniet odit
									fugiat ab id?
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="overview">
				<div class="container">
					<div class="row">
						<div class="col-md-8">
							<div class="img-container">
								<img
									src={require('../assets/images/about-bottom.png')}
									class="img-fluid"
									alt=""
								/>
							</div>
						</div>
						<div class="col-md-4">
							<div class="overview-content">
								<div class="title">Overview</div>
								<div class="description">
									Lorem ipsum dolor sit amet consectetur adipisicing elit.
									Exercitationem, ratione possimus quia tempora obcaecati nihil
									iste, eum voluptatum voluptates quam provident sequi
									temporibus aliquam est, dolorum odio excepturi fuga in. Lorem
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="mission">
				<div class="container">
					<div class="main-title">Our Mission</div>

					<div class="subtitle">
						"The mission of our hotel is to provide outstanding lodging
						facilities and services to our guests. Our hotel focuses on
						individual business and leisure travel, as well as travel associated
						with groups meetings .we emphasise high quality standards in our
						rooms and food and beverage divisions. We provide a fair return on
						investment for our owners and recognise."
					</div>
					<div class="row">
						<div class="col-md-4">
							<div class="mission-wrapper">
								<div class="img-container">
									<img
										src={require('../assets/images/about-icon1.png')}
										class="img-fluid"
										alt=""
									/>
								</div>
								<div class="name">Customer Satisfaction</div>
								<div class="description">
									Lorem ipsum dolor sit amet consectetur adipisicing elit.
									Aliquid alias laboriosam nesciunt exercitationem, quis saepe
									enim dignissimos pariatur excepturi asperiores debitis
									quibusdam fuga commodi, omnis temporibus optio dolore unde
									iure.
								</div>
							</div>
						</div>
						<div class="col-md-4">
							<div class="mission-wrapper">
								<div class="img-container">
									<img
										src={require('../assets/images/about-icon2.png')}
										class="img-fluid"
										alt=""
									/>
								</div>
								<div class="name">Maintain Quality Standard</div>
								<div class="description">
									Lorem ipsum dolor sit amet consectetur adipisicing elit.
									Aliquid alias laboriosam nesciunt exercitationem, quis saepe
									enim dignissimos pariatur excepturi asperiores debitis
									quibusdam fuga commodi, omnis temporibus optio dolore unde
									iure.
								</div>
							</div>
						</div>
						<div class="col-md-4">
							<div class="mission-wrapper">
								<div class="img-container">
									<img
										src={require('../assets/images/about-icon3.png')}
										class="img-fluid"
										alt=""
									/>
								</div>
								<div class="name">Create Enduring Relationships</div>
								<div class="description">
									Lorem ipsum dolor sit amet consectetur adipisicing elit.
									Aliquid alias laboriosam nesciunt exercitationem, quis saepe
									enim dignissimos pariatur excepturi asperiores debitis
									quibusdam fuga commodi, omnis temporibus optio dolore unde
									iure.
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<BrandSection />
            <Footer />
        </>
    )
}
