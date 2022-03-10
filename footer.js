const footer = () => {
  return `<footer class="position-relative">
			<nav class="container">
				<div class="row divider-left">
					<div class="col-3">
						<div class="column">
							<h3>Unsplash</h3>
							<div class="row">
								<div class="col flex-grow-0">
									<a href="">
										<i class="bi bi-facebook"></i>
									</a>
								</div>
								<div class="col flex-grow-0">
									<a href="">
										<i class="bi bi-instagram"></i>
									</a>
								</div>
								<div class="col flex-grow-0">
									<a href="">
										<i class="bi bi-messenger"></i>
									</a>
								</div>
								<div class="col flex-grow-0">
									<a href="">
										<i class="bi bi-youtube"></i>
									</a>
								</div>

							</div>
						</div>
					</div>

					<div class="col-3">
						<ul class="column">
							<li>Explore</li>
							<li>
								<a href="">
									Home
								</a>
							</li>
							<li>
								<a href="">
									About
								</a>
							</li>
							<li>
								<a href="">
									Capabilities
								</a>
							</li>
							<li>
								<a href="">
									Careers
								</a>
							</li>
						</ul>
					</div>

					<div class="col-3">
						<ul class="column">
							<li>Legal</li>
							<li>
								<a href="">
									Terms
								</a>
							</li>
							<li>
								<a href="">
									Privacy
								</a>
							</li>
						</ul>
					</div>

					<div class="col-3">
						<ul class="column address">
							<li>Visit</li>
							<li>
								Unsplash So California
								34 tesla ste 100,
								Irvine, Ca,USA 92618
							</li>
						</ul>

						<ul class="column">
							<li>
								New Bussiness
							</li>

							<li>
								<a href="">
									unsplash@gmail.com
								</a>
							</li>

							<li>
								<a href="">
									949.333.3106
								</a>
							</li>
						</ul>
					</div>
				</div>
			</nav>
			<hr>
			<div class="container-fluid bg-white position-absolute">
				<p class="text-center py-3 text-banner mb-0">
					Copyright © 2022 Unsplash®. All rights reserved
				</p>
			</div>

			<style>
				footer {
					background-color: black;
					padding: 1.5rem 0;
				}
			
				footer ul {
					list-style: none;
				}
			
				footer li {
					font-size: 16px;
					color: white;
				}
			
				footer ul li:nth-of-type(1),
				.column h3 {
					font-size: 25px;
					color: white;
					font-weight: 600;
				}
			
				footer a {
					color: whitesmoke;
					font-size: 18px;
				}
			
				footer a:hover {
					color: grey;
				}
			
				.divider-left>*+* {
					border-left: 1px solid grey;
				}
			
        footer .text-banner {
          font-size: 18px;
        }
			</style>
		</footer>`
}

export default footer;