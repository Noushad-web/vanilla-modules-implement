 
 
 const header = (active) => {

   return `<header>
			<nav class="navbar w-100 navbar-expand-lg navbar-dark bg-transparent">
				<div class="container">
					<a class="navbar-brand" href="#">
						<svg width="32" height="32" class="hic6U" viewBox="0 0 32 32" version="1.1" aria-labelledby="unsplash-home"
							aria-hidden="false">
							<title id="unsplash-home">Unsplash Home</title>
							<path d="M10 9V0h12v9H10zm12 5h10v18H0V14h10v9h12v-9z"></path>
						</svg>
					</a>
					<button class="navbar-toggler" type="button" data-bs-toggle="collapse"
						data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
						aria-label="Toggle navigation">
						<span class="navbar-toggler-icon"></span>
					</button>
					<div class="collapse navbar-collapse" id="navbarSupportedContent">
						<ul class="navbar-nav me-auto mb-2 mb-lg-0">
							<li class="nav-item">
								<a class="nav-link ${active === 'home' && 'active'}" aria-current="page" href="./index.html">Home</a>
							</li>
							<li class="nav-item ${active === 'nature' && 'active'}">
								<a class="nav-link" href="./nature.html">Nature</a>
							</li>
							<li class="nav-item ${active === 'animals' && 'active'}">
								<a class="nav-link" href="./animal.html">Animals</a>
							</li>
							<li class="nav-item ${active === 'fitness' && 'active'}">
								<a class="nav-link" href="./fitness.html">Fitness</a>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		</header>
    `;
};

export default header;