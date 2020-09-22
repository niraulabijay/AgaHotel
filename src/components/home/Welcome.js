import React from 'react'

export default function Welcome() {
    return (
        <>
            	<div className="welcome">
					<div className="container">
						<div className="row">
							<div className="col-md-4 offset-md-1 d-none d-md-block">
								<div className="img-container">
									<img src={require('../../assets/images/a.jpg')} alt="" />
								</div>
							</div>
							<div className="col-md-6">
								<div className="welcome-content">
									<div className="title">Our Heartfelt Thanks</div>
									<div className="description">
										Lorem ipsum dolor sit amet consectetur adipisicing elit.
										Exercitationem, ratione possimus quia tempora obcaecati
										nihil iste, eum voluptatum voluptates quam provident sequi
										temporibus aliquam est, dolorum odio excepturi fuga in.
										Lorem ipsum dolor sit amet consectetur adipisicing elit.
										Exercitationem, ratione possimus quia tempora obcaecati
										nihil iste, eum voluptatum voluptates quam provident sequi
										temporibus aliquam est, dolorum odio excepturi fuga in.
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			
        </>
    )
}
